import{_ as o,o as s,c as n,a as e,d as i,e as a}from"./app.205a3d76.js";var t="/assets/image-20220305162509689.135319d1.png";const l={},c=e("h1",{id:"openoffice",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#openoffice","aria-hidden":"true"},"#"),i(" OpenOffice")],-1),r={class:"custom-container tip"},d={viewBox:"0 0 25 25",xmlns:"http://www.w3.org/2000/svg","xml:space":"preserve",style:{"fill-rule":"evenodd","clip-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"2"}},p=e("path",{d:"M297.6 258.73H296c-59.47.87-110.69 51.45-111.83 110.43-.626 36.485 16.525 71.085 45.94 92.68 17.86 13.18 29.88 33.56 33.77 56.42h67.62c4-22.82 16.13-43.3 34.16-56.74 28.589-21.097 45.496-54.587 45.496-90.118 0-30.03-12.078-58.833-33.496-79.882a113.133 113.133 0 0 0-80.06-32.79ZM265.19 550.7v26.6c0 4.84 1.17 6.43 1.17 6.43l63.72-.59V550.7h-64.89Z",style:{fill:"#48b884","fill-rule":"nonzero"},transform:"matrix(.042 0 0 .042 0 -5.178)"},null,-1),u=e("path",{d:"M297.64 123.3C133.26 123.3 0 256.56 0 420.94s133.26 297.63 297.64 297.63 297.63-133.25 297.63-297.63S462 123.3 297.64 123.3ZM385 487.57c-14.11 10.48-22.51 28.09-22.51 47.14v48.43c-.016 17.792-14.648 32.428-32.44 32.45h-64.86c-15.6 0-32.44-12-32.44-38.29v-42.82c0-19-8.21-36.4-21.93-46.52-37.882-27.85-59.959-72.44-59.14-119.45 1.46-77.24 66-141.09 143.81-142.22 38.87.19 76.89 14.37 105 42.11a143.764 143.764 0 0 1 43.14 103c-.159 45.761-21.911 88.86-58.63 116.17Z",style:{fill:"#48b884","fill-rule":"nonzero"},transform:"matrix(.042 0 0 .042 0 -5.178)"},null,-1),m=[p,u],h=e("p",{class:"custom-container-title"},"TIP",-1),v=e("p",null,"\u901A\u5E38\u60C5\u51B5\u4E0B\uFF0CLibreOfiice\u4F1A\u662F\u6BD4OpenOffice\u66F4\u597D\u7684\u9009\u62E9\u3002",-1),f=a('<h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2><p>\u4E0B\u8F7D\u5730\u5740\uFF1A<a href="https://www.openoffice.org/download/" target="_blank" rel="noopener noreferrer">https://www.openoffice.org/download/</a></p><p><img src="'+t+`" alt="image-20220305162509689"></p><p>\u4E0B\u8F7D\u5B8C\u6BD5\u4F20\u8F93\u5230\u670D\u52A1\u5668\u3002</p><p>\u5B89\u88C5\u6B65\u9AA4\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u89E3\u538B</span>
$ <span class="token function">tar</span> -zxvf Apache_OpenOffice_4.1.11_Linux_x86-64_install-rpm_zh-CN.tar.gz 
<span class="token comment"># \u8FDB\u5165RPMS\u76EE\u5F55\uFF0C\u5176\u4E2D\u6709\u4E00\u5806rpm\u548C\u4E00\u4E2A\u53EBdesktop-integration\u6587\u4EF6\u5939</span>
$ <span class="token builtin class-name">cd</span> ./zh-CN/RPMS/
<span class="token comment"># \u4E00\u53E3\u6C14\u5C06RPMS\u76EE\u5F55\u4E0B\u7684rpm\u5168\u5B89\u88C5\u4E86</span>
$ yum <span class="token function">install</span> -y *.rpm
<span class="token comment"># \u518D\u88C5desktop-integration\u4E0B\u7684rpm</span>
$ <span class="token builtin class-name">cd</span> desktop-integration/
$ yum <span class="token function">install</span> -y openoffice4.1.11-redhat-menus-4.1.11-9808.noarch.rpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B89\u88C5\u6210\u529F\u540E\u4F1A\u5728/opt\u4E0B\u51FA\u73B0\u4E00\u4E2Aopenoffice4\u6587\u4EF6\u3002</p><h2 id="\u542F\u52A8\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8\u670D\u52A1" aria-hidden="true">#</a> \u542F\u52A8\u670D\u52A1</h2><p><strong>\u4E34\u65F6\u542F\u52A8</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ /opt/openoffice4/program/soffice -headless -accept<span class="token operator">=</span><span class="token string">&quot;socket,host=127.0.0.1,port=8100;urp;&quot;</span> -nofirststartwizard
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>\u540E\u53F0\u542F\u52A8</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ /opt/openoffice4/program/soffice -headless -accept<span class="token operator">=</span><span class="token string">&quot;socket,host=127.0.0.1,port=8100;urp;&quot;</span> -nofirststartwizard <span class="token operator">&amp;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>\u67E5\u770B\u542F\u52A8\u72B6\u6001</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u65B9\u5F0F1</span>
$ <span class="token function">netstat</span> -lnp <span class="token operator">|</span> <span class="token function">grep</span> <span class="token number">8100</span>
<span class="token comment"># \u65B9\u5F0F2</span>
$ <span class="token function">ps</span> -ef <span class="token operator">|</span> <span class="token function">grep</span> soffice
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),b={class:"custom-container tip"},g={viewBox:"0 0 25 25",xmlns:"http://www.w3.org/2000/svg","xml:space":"preserve",style:{"fill-rule":"evenodd","clip-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"2"}},_=e("path",{d:"M297.6 258.73H296c-59.47.87-110.69 51.45-111.83 110.43-.626 36.485 16.525 71.085 45.94 92.68 17.86 13.18 29.88 33.56 33.77 56.42h67.62c4-22.82 16.13-43.3 34.16-56.74 28.589-21.097 45.496-54.587 45.496-90.118 0-30.03-12.078-58.833-33.496-79.882a113.133 113.133 0 0 0-80.06-32.79ZM265.19 550.7v26.6c0 4.84 1.17 6.43 1.17 6.43l63.72-.59V550.7h-64.89Z",style:{fill:"#48b884","fill-rule":"nonzero"},transform:"matrix(.042 0 0 .042 0 -5.178)"},null,-1),k=e("path",{d:"M297.64 123.3C133.26 123.3 0 256.56 0 420.94s133.26 297.63 297.64 297.63 297.63-133.25 297.63-297.63S462 123.3 297.64 123.3ZM385 487.57c-14.11 10.48-22.51 28.09-22.51 47.14v48.43c-.016 17.792-14.648 32.428-32.44 32.45h-64.86c-15.6 0-32.44-12-32.44-38.29v-42.82c0-19-8.21-36.4-21.93-46.52-37.882-27.85-59.959-72.44-59.14-119.45 1.46-77.24 66-141.09 143.81-142.22 38.87.19 76.89 14.37 105 42.11a143.764 143.764 0 0 1 43.14 103c-.159 45.761-21.911 88.86-58.63 116.17Z",style:{fill:"#48b884","fill-rule":"nonzero"},transform:"matrix(.042 0 0 .042 0 -5.178)"},null,-1),x=[_,k],w=a(`<p class="custom-container-title">TIP</p><p>\u5982\u679C\u542F\u52A8\u65F6\u51FA\u73B0\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ /opt/openoffice4/program/soffice -headless -accept<span class="token operator">=</span><span class="token string">&quot;socket,host=127.0.0.1,port=8100;urp;&quot;</span> -nofirststartwizard
/opt/openoffice4/program/soffice.bin: error <span class="token keyword">while</span> loading shared libraries: libXext.so.6: cannot <span class="token function">open</span> shared object file: No such <span class="token function">file</span> or directory
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u4E2A\u662F\u627E\u4E0D\u5230 <code>libXext.so.6</code> \u6587\u4EF6\u3002\u53BB\u7CFB\u7EDF\u91CC\u9762\u7684 <code>/usr/lib64</code> \u4E2D\u6216\u8005 <code>/usr/lib</code> \uFF0C\u67E5\u770B\u6709\u6CA1\u6709\u8FD9\u4E2A\u6587\u4EF6\u3002</p><p>\u5982\u679C\u6CA1\u6709\uFF0C\u9700\u8981\u5148\u5B89\u88C5\uFF1A<code>yum install libXext.x86_64</code> \uFF0864\u4F4D\uFF09 \u6216 <code>yum install libXext.i686</code> \uFF0832\u4F4D\uFF09\u3002</p><p>\u5C06 <code>libXext.so.6</code> copy\u5230 <code>/opt/openoffice4/program/</code> \u76EE\u5F55\u91CC\u9762\uFF0C\u5E76\u8D4B\u4E88 <code>chmod 777</code> \u6743\u9650 \u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ yum <span class="token function">install</span> -y libXext.x86_64
$ <span class="token function">cp</span> /usr/lib64/libXext.so.6 /opt/openoffice4/program/
$ <span class="token function">chmod</span> <span class="token number">777</span> /opt/openoffice4/program/libXext.so.6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),y={class:"custom-container tip"},M={viewBox:"0 0 25 25",xmlns:"http://www.w3.org/2000/svg","xml:space":"preserve",style:{"fill-rule":"evenodd","clip-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"2"}},$=e("path",{d:"M297.6 258.73H296c-59.47.87-110.69 51.45-111.83 110.43-.626 36.485 16.525 71.085 45.94 92.68 17.86 13.18 29.88 33.56 33.77 56.42h67.62c4-22.82 16.13-43.3 34.16-56.74 28.589-21.097 45.496-54.587 45.496-90.118 0-30.03-12.078-58.833-33.496-79.882a113.133 113.133 0 0 0-80.06-32.79ZM265.19 550.7v26.6c0 4.84 1.17 6.43 1.17 6.43l63.72-.59V550.7h-64.89Z",style:{fill:"#48b884","fill-rule":"nonzero"},transform:"matrix(.042 0 0 .042 0 -5.178)"},null,-1),z=e("path",{d:"M297.64 123.3C133.26 123.3 0 256.56 0 420.94s133.26 297.63 297.64 297.63 297.63-133.25 297.63-297.63S462 123.3 297.64 123.3ZM385 487.57c-14.11 10.48-22.51 28.09-22.51 47.14v48.43c-.016 17.792-14.648 32.428-32.44 32.45h-64.86c-15.6 0-32.44-12-32.44-38.29v-42.82c0-19-8.21-36.4-21.93-46.52-37.882-27.85-59.959-72.44-59.14-119.45 1.46-77.24 66-141.09 143.81-142.22 38.87.19 76.89 14.37 105 42.11a143.764 143.764 0 0 1 43.14 103c-.159 45.761-21.911 88.86-58.63 116.17Z",style:{fill:"#48b884","fill-rule":"nonzero"},transform:"matrix(.042 0 0 .042 0 -5.178)"},null,-1),q=[$,z],Z=a(`<p class="custom-container-title">TIP</p><p>\u5982\u679C\u542F\u52A8\u65F6\u63D0\u9192 <code>no suitable windowing system found, exiting</code>, \u9700\u8981\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ yum groupinstall -y <span class="token string">&quot;X Window System&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3),X=a('<h2 id="\u4F5C\u4E3A\u5F00\u673A\u81EA\u542F" tabindex="-1"><a class="header-anchor" href="#\u4F5C\u4E3A\u5F00\u673A\u81EA\u542F" aria-hidden="true">#</a> \u4F5C\u4E3A\u5F00\u673A\u81EA\u542F</h2><p>\u5728 <code>/etc/rc.d/rc.local</code> \u4E2D\u6DFB\u52A0\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/opt/openoffice4/program/soffice -headless -accept=&quot;socket,host=127.0.0.1,port=8100;urp;&quot; -nofirststartwizard &amp;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u786E\u4FDD\u6216\u4FEE\u6539rc.local\u6587\u4EF6\u4E3A\u53EF\u6267\u884C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">chmod</span> +x rc.local  \n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u5378\u8F7D" tabindex="-1"><a class="header-anchor" href="#\u5378\u8F7D" aria-hidden="true">#</a> \u5378\u8F7D</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">rpm</span> -e <span class="token variable"><span class="token variable">`</span><span class="token function">rpm</span> -qa <span class="token operator">|</span><span class="token function">grep</span> openoffice<span class="token variable">`</span></span> <span class="token variable"><span class="token variable">`</span><span class="token function">rpm</span> -qa <span class="token operator">|</span><span class="token function">grep</span> ooobasis<span class="token variable">`</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>',7);function O(S,B){return s(),n("div",null,[c,e("div",r,[(s(),n("svg",d,m)),h,v]),f,e("div",b,[(s(),n("svg",g,x)),w]),e("div",y,[(s(),n("svg",M,q)),Z]),X])}var P=o(l,[["render",O],["__file","open-office.html.vue"]]);export{P as default};
