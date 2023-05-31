import{_ as l,o as a,c as e,a as s,e as i,d as n}from"./app.205a3d76.js";const d={},c=i(`<h2 id="\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> \u5E38\u7528\u547D\u4EE4</h2><h3 id="\u7CFB\u7EDF\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u7CFB\u7EDF\u64CD\u4F5C" aria-hidden="true">#</a> \u7CFB\u7EDF\u64CD\u4F5C</h3><h4 id="df" tabindex="-1"><a class="header-anchor" href="#df" aria-hidden="true">#</a> df</h4><p>\u5C55\u793A\u78C1\u76D8\u5360\u7528\u60C5\u51B5\u3002\u53EF\u4EE5\u7528\u6765\u770B\u6302\u8F7D\u76D8\u5728\u54EA\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">df</span> -h
Filesystem      Size  Used Avail Use% Mounted on
/dev/vda1        20G  <span class="token number">3</span>.8G   15G  <span class="token number">20</span>% /
devtmpfs         32G     <span class="token number">0</span>   32G   <span class="token number">0</span>% /dev
tmpfs            32G     <span class="token number">0</span>   32G   <span class="token number">0</span>% /dev/shm
tmpfs            32G   17M   32G   <span class="token number">1</span>% /run
tmpfs            32G     <span class="token number">0</span>   32G   <span class="token number">0</span>% /sys/fs/cgroup
/dev/vdc        493G  934M  467G   <span class="token number">1</span>% /disk1
tmpfs           <span class="token number">6</span>.3G     <span class="token number">0</span>  <span class="token number">6</span>.3G   <span class="token number">0</span>% /run/user/0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6700\u540E\u4E8C\u884C\u7684disk1\u5C31\u662F\u5757\u6302\u8F7D\u76D8\u3002</p><p>\u547D\u4EE4\u540E\u53EF\u8DDF\u4E0A\u6587\u4EF6\u540D\uFF0C\u5219\u53EA\u663E\u793A\u6B64\u6587\u4EF6\u6240\u5728\u78C1\u76D8\u7684\u4FE1\u606F\u3002</p><ul><li><code>-h</code> \u3001<code>--human-readable</code> \uFF1A\u4EE5K\uFF0CM\uFF0CG\u4E3A\u5355\u4F4D\uFF0C\u63D0\u9AD8\u4FE1\u606F\u7684\u53EF\u8BFB\u6027\u3002</li></ul><h4 id="du" tabindex="-1"><a class="header-anchor" href="#du" aria-hidden="true">#</a> du</h4><p>\u67E5\u770B\u5F53\u524D\u6587\u4EF6\u5939\u4E0B\u7684\u8BF4\u6709\u6587\u4EF6\u5939\u53CA\u6587\u4EF6\u7684\u5927\u5C0F\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">du</span> -sh ./*
22M	./archive
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>-s</code> \u3001 <code>--summarize</code> \uFF1A\u4EC5\u663E\u793A\u603B\u8BA1\uFF0C\u4E0D\u52A0\u4F1A\u5C06\u6240\u6709\u5B50\u6587\u4EF6\u53CA\u6587\u4EF6\u4E00\u8D77\u5C55\u793A\u3002</li><li><code>-h</code> \u3001<code>--human-readable</code> \uFF1A\u4EE5K\uFF0CM\uFF0CG\u4E3A\u5355\u4F4D\uFF0C\u63D0\u9AD8\u4FE1\u606F\u7684\u53EF\u8BFB\u6027\u3002</li></ul><h3 id="\u6587\u4EF6\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u6587\u4EF6\u64CD\u4F5C" aria-hidden="true">#</a> \u6587\u4EF6\u64CD\u4F5C</h3><h4 id="mkdir" tabindex="-1"><a class="header-anchor" href="#mkdir" aria-hidden="true">#</a> mkdir</h4><p>\u521B\u5EFA\u6587\u4EF6\u5939</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># mkdir [\u6587\u4EF6\u5939\u540D]</span>
$ <span class="token function">mkdir</span> temp
<span class="token comment"># -p \u9012\u5F52\u521B\u5EFA\u76EE\u5F55\uFF0C\u5373\u4F7F\u4E0A\u7EA7\u76EE\u5F55\u4E0D\u5B58\u5728\uFF0C\u4F1A\u6309\u76EE\u5F55\u5C42\u7EA7\u81EA\u52A8\u521B\u5EFA\u76EE\u5F55</span>
$ <span class="token function">mkdir</span> /var/temp/nginx -p
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="rmdir" tabindex="-1"><a class="header-anchor" href="#rmdir" aria-hidden="true">#</a> rmdir</h4><p>\u79FB\u9664\u6587\u4EF6\u5939</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">rmdir</span> temp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="cp" tabindex="-1"><a class="header-anchor" href="#cp" aria-hidden="true">#</a> cp</h4><p>\u7528\u4E8E\u590D\u5236\u6587\u4EF6\u6216\u6587\u4F73\u4F73\u5230\u6307\u5B9A\u6587\u4EF6\u5939</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># cp [\u6587\u4EF6\u6216\u6587\u4EF6\u5939] [\u65B0\u7684\u5730\u5740]</span>
$ <span class="token function">cp</span> mysql-5.7.26-linux-glibc2.12-x86_64 /usr/local/mysql
<span class="token comment"># -r \u53EF\u4EE5\u505A\u6587\u4EF6\u5939\u7684\u9012\u5F52\u590D\u5236</span>
$ <span class="token function">cp</span> -r /home/dir1 /opt/dir2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="mv" tabindex="-1"><a class="header-anchor" href="#mv" aria-hidden="true">#</a> mv</h4><p>\u7528\u4E8E\u79FB\u52A8\u6587\u4EF6\u6216\u6587\u4EF6\u5939</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># mv [\u6587\u4EF6\u6216\u6587\u4EF6\u5939] [\u65B0\u7684\u5730\u5740]</span>
$ <span class="token function">mv</span> mysql-5.7.26-linux-glibc2.12-x86_64 /usr/local/mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="tar" tabindex="-1"><a class="header-anchor" href="#tar" aria-hidden="true">#</a> tar</h4><p>\u7528\u4E8E\u89E3\u538B <code>.tar.gz</code> \u7ED3\u5C3E\u7684\u538B\u7F29\u6587\u4EF6\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># tar -zxvf [\u538B\u7F29\u5305]</span>
$ <span class="token function">tar</span> -zxvf nginx-1.20.2.tar.gz
<span class="token comment"># \u901A\u8FC7-C \u6307\u5B9A\u89E3\u538B\u540E\u6587\u4EF6\u4F4D\u7F6E</span>
$ <span class="token function">tar</span> -zxvf apache-tomcat-7.0.99.tar.gz -C /usr/local/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6587\u4EF6\u7EDF\u8BA1" tabindex="-1"><a class="header-anchor" href="#\u6587\u4EF6\u7EDF\u8BA1" aria-hidden="true">#</a> \u6587\u4EF6\u7EDF\u8BA1</h3><p>\u67E5\u770B\u6587\u4EF6\u5939\u4E0B\u7684\u6587\u4EF6\u4E2A\u6570(\u5F53\u524D\u76EE\u5F55\u7684\u6587\u4EF6\u6570)\u5305\u542B\u5B50\u76EE\u5F55</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">ls</span> -l <span class="token operator">|</span><span class="token function">grep</span> <span class="token string">&quot;^-&quot;</span><span class="token operator">|</span><span class="token function">wc</span> -l
<span class="token comment"># or</span>
$ <span class="token function">find</span> ./company -type f <span class="token operator">|</span> <span class="token function">wc</span> -l
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u67E5\u770B\u67D0\u6587\u4EF6\u5939\u4E0B<strong>\u6587\u4EF6</strong>\u7684\u4E2A\u6570\uFF0C\u5305\u62EC\u5B50\u6587\u4EF6\u5939\u91CC\u7684\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">ls</span> -lR<span class="token operator">|</span><span class="token function">grep</span> <span class="token string">&quot;^-&quot;</span><span class="token operator">|</span><span class="token function">wc</span> -l
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u67E5\u770B\u67D0\u6587\u4EF6\u5939\u4E0B<strong>\u6587\u4EF6\u5939</strong>\u7684\u4E2A\u6570\uFF0C\u5305\u62EC\u5B50\u6587\u4EF6\u5939\u91CC\u7684\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">ls</span> -lR<span class="token operator">|</span><span class="token function">grep</span> <span class="token string">&quot;^d&quot;</span><span class="token operator">|</span><span class="token function">wc</span> -l
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u8F6F\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#\u8F6F\u94FE\u63A5" aria-hidden="true">#</a> \u8F6F\u94FE\u63A5</h3><p>\u5728 Linux \u4E2D\u7684\u8FDE\u7ED3\u6709\u4E24\u79CD\uFF0C\u4E00\u79CD\u662F\u7C7B\u4F3C Windows \u7684\u5FEB\u6377\u65B9\u5F0F\u529F\u80FD\u7684\u6863\u6848\uFF0C\u53EF\u4EE5\u8BA9\u4F60\u5FEB\u901F\u7684\u94FE\u63A5\u5230\u76EE\u6807\u6863\u6848(\u6216\u76EE\u5F54)\uFF1B \u53E6\u4E00\u79CD\u5219\u662F\u900F\u8FC7\u6587\u4EF6\u7CFB\u7EDF\u7684 inode \u8FDE\u7ED3\u6765\u4EA7\u751F\u65B0\u7684\u6587\u6863\u540D\uFF0C\u800C\u4E0D\u662F\u4EA7\u751F\u65B0\u6863\u6848\uFF01\u8FD9\u79CD\u79F0\u4E3A\u5B9E\u4F53\u94FE\u63A5 (hard link)\u3002</p><p>Hard Link (\u5B9E\u4F53\u94FE\u63A5, \u786C\u5F0F\u8FDE\u7ED3\u6216\u5B9E\u9645\u8FDE\u7ED3)\uFF0C\u8FD9\u79CD\u94FE\u63A5\u5B9E\u9645\u4E2D\u7528\u7684\u6BD4\u8F83\u5C11\uFF0C\u8FD9\u91CC\u5148\u4E0D\u8BB2\uFF0C\u4EE5\u540E\u518D\u8BB2\u3002 Symbolic Link (\u7B26\u53F7\u94FE\u63A5\uFF0C\u4EA6\u5373\u662F\u5FEB\u6377\u65B9\u5F0F)\u3002 Symbolic link \u5C31\u662F\u5728\u5EFA\u7ACB\u4E00\u4E2A\u72EC\u7ACB\u7684\u6587\u6863\uFF0C\u800C\u8FD9\u4E2A\u6587\u6863\u4F1A\u8BA9\u6570\u636E\u7684\u8BFB\u53D6\u6307\u5411\u4ED6 link \u7684\u90A3\u4E2A\u6587\u6863\uFF01</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">ln</span> <span class="token punctuation">[</span>-sf<span class="token punctuation">]</span> \u6765\u6E90\u6587\u4EF6 \u76EE\u6807\u6587\u4EF6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u9009\u9879\u4E0E\u53C2\u6570\uFF1A</p><ul><li><p><code>-s</code> \uFF1A\u5982\u679C\u4E0D\u52A0\u4EFB\u4F55\u53C2\u6570\u5C31\u8FDB\u884C\u8FDE\u7ED3\uFF0C\u90A3\u5C31\u662F hard link\uFF0C\u81F3\u4E8D -s \u5C31\u662F symbolic link</p></li><li><p><code>-f</code>\uFF1A\u5982\u679C \u76EE\u6807\u6587\u4EF6 \u5B58\u5728\u65F6\uFF0C\u5C31\u4E3B\u52A8\u7684\u5C06\u76EE\u6807\u6587\u4EF6\u76F4\u63A5\u79FB\u9664\u540E\u518D\u5EFA\u7ACB\uFF01</p></li></ul><p>\u793A\u4F8B</p><p>\u670D\u52A1\u5668\u53EA\u670920G\u7684\u7CFB\u7EDF\u76D8\uFF0C\u4F46\u662F\u6302\u8F7D\u4E86\u4E00\u5757500G\u7684\u4E91\u786C\u76D8\u3002\u6211\u5C06mysql\u9ED8\u8BA4\u7684\u6570\u636E\u5B58\u653E\u4F4D\u7F6E\u8F6F\u94FE\u63A5\u5230\u4E86\u4E91\u786C\u76D8\u4E0A\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">ln</span> -sf /disk1/mysql /var/lib/mysql
$ ll
total <span class="token number">92</span>
<span class="token punctuation">..</span>.
lrwxrwxrwx  <span class="token number">1</span> root    root      <span class="token number">12</span> May <span class="token number">30</span> <span class="token number">14</span>:35 mysql -<span class="token operator">&gt;</span> /disk1/mysql
drwxr-x---  <span class="token number">2</span> mysql   mysql   <span class="token number">4096</span> Mar <span class="token number">22</span> 02:00 mysql-files
drwxr-x---  <span class="token number">2</span> mysql   mysql   <span class="token number">4096</span> Mar <span class="token number">22</span> 02:00 mysql-keyring
<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u5F53\u524D\u6587\u4EF6\u5939\u521B\u5EFA\u8F6F\u94FE\u63A5\uFF0C\u548C\u76EE\u6807\u6587\u4EF6\u5939\u540D\u79F0\u76F8\u540C\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">ln</span> -s /disk1/archive
$ ll
total <span class="token number">0</span>
lrwxrwxrwx <span class="token number">1</span> root root <span class="token number">14</span> Jun  <span class="token number">2</span> <span class="token number">14</span>:29 archive -<span class="token operator">&gt;</span> /disk1/archive

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,46),r={class:"custom-container warning"},o={viewBox:"0 0 25 25",xmlns:"http://www.w3.org/2000/svg","xml:space":"preserve",style:{"fill-rule":"evenodd","clip-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"2"}},t=s("path",{d:"M297.65 123.32C133.27 123.32 0 256.58 0 421c0 164.42 133.27 297.6 297.65 297.6 164.38 0 297.64-133.26 297.64-297.6 0-164.34-133.29-297.68-297.64-297.68Zm-.6 483.32c-22.591 0-41.18-18.589-41.18-41.18s18.589-41.18 41.18-41.18 41.18 18.589 41.18 41.18-18.589 41.18-41.18 41.18Zm42.38-164.27h-.23c-.139 22.489-18.681 40.916-41.17 40.916-22.586 0-41.171-18.585-41.171-41.171l.001-.255c0-1 .05-1.93.11-2.88V276.73h.03v-.27a45.8 45.8 0 0 1-.005-.642c0-22.59 18.589-41.18 41.18-41.18s41.18 18.59 41.18 41.18c0 .214-.002.428-.005.642v.27h.06l.02 165.64Z",style:{fill:"#f3cc2e","fill-rule":"nonzero"},transform:"matrix(.042 0 0 .042 0 -5.18)"},null,-1),p=[t],u=s("p",{class:"custom-container-title"},"WARNING",-1),m=s("p",null,[n("\u8F6F\u94FE\u63A5\u5C31\u662F\u8F6F\u94FE\u63A5\uFF0C\u5B83\u4E0D\u662F\u6587\u4EF6\u5939\u6216\u6587\u4EF6\u3002\u5EFA\u7ACB\u8F6F\u94FE\u63A5\u524D\u786E\u4FDD\u76EE\u6807\u5904\u4E0D\u5B58\u5728\u540C\u540D\u6587\u4EF6\u5939\uFF0C\u5426\u5219\u8F6F\u94FE\u63A5\u4F1A\u88AB\u5EFA\u5728\u6B64\u6587\u4EF6\u5939\u4E0B\u3002\u5982\u679C\u4F60\u60F3\u8981\u7684\u8F6F\u94FE\u63A5\u662F "),s("code",null,"/var/lib/mysql "),n(" ,\u800C\u6B64\u65F6\u6709\u540C\u540D\u6587\u4EF6\u5939\uFF0C\u751F\u6210\u7684\u8F6F\u94FE\u63A5\u8DEF\u5F84\u5C06\u4F1A\u662F "),s("code",null,"/var/lib/mysql/mysql"),n(" \u3002")],-1),v=i(`<h3 id="\u67E5\u770B\u65E5\u5FD7" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u65E5\u5FD7" aria-hidden="true">#</a> \u67E5\u770B\u65E5\u5FD7</h3><h4 id="tail" tabindex="-1"><a class="header-anchor" href="#tail" aria-hidden="true">#</a> tail</h4><p>\u53EF\u4EE5\u67E5\u770B\u6700\u540E\u51E0\u884C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># tail -f [\u6587\u4EF6\u540D]</span>
$ <span class="token function">tail</span> -f nohup.out
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="less" tabindex="-1"><a class="header-anchor" href="#less" aria-hidden="true">#</a> less</h4><p>\u6211\u6700\u7231\u7528\u7684linux\u6587\u4EF6\u9605\u8BFB\u5DE5\u5177</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># less [\u6587\u4EF6\u540D]</span>
$ <span class="token function">less</span> - nohup.out
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u9605\u8BFB\u72B6\u6001\u62E5\u6709\u5F88\u591A\u547D\u4EE4\uFF1A</p><ul><li><code>q</code> \uFF1A\u9000\u51FA</li><li><code>g</code> \uFF1A\u8DF3\u8F6C\u5230\u9996\u9875</li><li><code>G</code> \uFF1A\u8DF3\u8F6C\u5230\u5C3E\u9875</li><li><code>b</code> \uFF1A\u4E0A\u4E00\u9875</li><li><code>space</code> \uFF1A\u4E0B\u4E00\u9875</li></ul><p>\u67E5\u627E\uFF1A</p><ul><li><code>?</code> \uFF1A\u5411\u4E0A\u627E</li><li><code>/</code> \uFF1A\u5411\u4E0B\u627E</li><li><code>n</code> \uFF1A\u5BFB\u627E\u4E0B\u4E00\u4E2A\uFF0C\u65B9\u5411\u53D6\u51B3\u4E8E\u4E4B\u524D\u7528\u7684 <code>?</code> \u8FD8\u662F <code>/</code></li></ul><p>\u5982\u679C\u4E0D\u591F\u7528\u53EF\u4EE5\uFF1A</p><ul><li><code>h</code> \uFF1A\u67E5\u770B\u5E2E\u52A9\u6587\u6863</li><li>\u767E\u5EA6\u4E00\u4E0B\u{1F436}(\u56FD\u9645\u72D7\u5934)</li></ul><h2 id="\u4EBA\u5458\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#\u4EBA\u5458\u7BA1\u7406" aria-hidden="true">#</a> \u4EBA\u5458\u7BA1\u7406</h2>`,14);function h(b,k){return a(),e("div",null,[c,s("div",r,[(a(),e("svg",o,p)),u,m]),v])}var f=l(d,[["render",h],["__file","linux.html.vue"]]);export{f as default};