import{_ as e,o as t,c as i,e as o}from"./app.205a3d76.js";const l={},d=o('<h2 id="\u63A5\u53E3\u6D4B\u8BD5\u5206\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u63A5\u53E3\u6D4B\u8BD5\u5206\u7C7B" aria-hidden="true">#</a> \u63A5\u53E3\u6D4B\u8BD5\u5206\u7C7B</h2><p>\u63A5\u53E3\u53EF\u4EE5\u5206\u4E3A\u5185\u90E8\u63A5\u53E3\u548C\u5916\u90E8\u63A5\u53E3\u3002</p><p>\u5185\u90E8\u63A5\u53E3\uFF1A\u88AB\u6D4B\u7CFB\u7EDF\u5404\u5B50\u6A21\u5757\u4E4B\u95F4\u7684\u63A5\u53E3\uFF0C\u6216\u8005\u88AB\u6D4B\u7CFB\u7EDF\u63D0\u4F9B\u7ED9\u5B50\u6A21\u5757\u7684\u63A5\u53E3\u3002</p><p>\u5916\u90E8\u63A5\u53E3\uFF1A\u5305\u62EC\u88AB\u6D4B\u9879\u76EE\u8C03\u7528\u5916\u90E8\u7684\u63A5\u53E3\uFF0C\u4EE5\u53CA\u88AB\u6D4B\u7CFB\u7EDF\u5BF9\u5916\u63D0\u4F9B\u7684\u63A5\u53E3\u3002</p><p>\u63A5\u53E3\u6D4B\u8BD5\u7684\u76EE\u7684\u4E3B\u8981\u662F\u4E3A\u4E86\uFF1A\u68C0\u67E5\u63A5\u53E3\u53C2\u6570\u4F20\u9012\u7684\u6B63\u786E\u6027\uFF0C\u63A5\u53E3\u529F\u80FD\u7684\u6B63\u786E\u6027\uFF0C\u8F93\u51FA\u7ED3\u679C\u7684\u6B63\u786E\u6027\uFF0C\u4EE5\u53CA\u5BF9\u5404\u79CD\u5F02\u5E38\u5F62\u51B5\u7684\u5BB9\u9519\u5904\u7406\uFF0C\u6743\u9650\u7684\u63A7\u5236\uFF0C\u5206\u9875\uFF0C\u8C03\u7528\u6B21\u6570\u7684\u9650\u5236\u3002</p><h2 id="\u63A5\u53E3\u67B6\u6784\u8BBE\u8BA1" tabindex="-1"><a class="header-anchor" href="#\u63A5\u53E3\u67B6\u6784\u8BBE\u8BA1" aria-hidden="true">#</a> \u63A5\u53E3\u67B6\u6784\u8BBE\u8BA1</h2><ol><li>\u57FA\u4E8ESOAP\u67B6\u6784\uFF0C\u57FA\u4E8Exml\u89C4\u8303\u3002\u57FA\u4E8EWebService\u534F\u8BAE\u3002\u7279\u70B9\uFF1A\u63A5\u53E3\u4EE5 <code>?wsdl</code> \u7ED3\u5C3E\u3002\uFF08\u5F88\u8001\u4E86\uFF0C\u5341\u51E0\u5E74\u4E86\uFF09</li><li>\u57FA\u4E8ERPC\u67B6\u6784\uFF0C\u57FA\u4E8Edubbo\u534F\u8BAE\u3001thrift\u534F\u8BAE\u3001Spring Cloud\u5FAE\u670D\u52A1\u3002\u9002\u5408\u6570\u636E\u91CF\u5C0F\uFF0C\u4F46\u662F\u9AD8\u5E76\u53D1\u7684\u670D\u52A1\u3002\uFF08\u76EE\u524D\u9879\u76EE\u4E3B\u6D41\uFF09</li><li>\u57FA\u4E8ERestFul\u7ED3\u6784\uFF0C\u57FA\u4E8EJson\u89C4\u8303\uFF0C\u57FA\u4E8EHTTP\u534F\u8BAE\u3002\uFF08\u5360\u6709\u91CF\u6700\u9AD8\uFF09</li></ol><p>\u6211\u4EEC\u89C1\u5230\u7684\u7ED3\u6784\u5360\u7528\u5E02\u573A\u4EFD\u989D\u6700\u591A\u7684\u662FRestFul\u63A5\u53E3\u3002RestFul\u63A5\u53E3\u6839\u636E\u8BF7\u6C42\u65B9\u5F0F\u7684\u4E0D\u540C\uFF08get\u3001post\u3001delete...\uFF09\u5BF9\u540C\u4E00\u4E2A\u63A5\u53E3\u505A\u4E0D\u540C\u7684\u5904\u7406\u3002</p><p>json\u6570\u636E\u683C\u5F0F\u53EA\u6709\u4E24\u79CD\u6570\u636E\u7C7B\u578B\uFF1A</p><ol><li>\u952E\u503C\u5BF9 <code>{key:value}</code></li><li>\u6570\u7EC4 <code>[foo,bar]</code></li></ol><h2 id="\u5173\u4E8Ehttp\u8BF7\u6C42" tabindex="-1"><a class="header-anchor" href="#\u5173\u4E8Ehttp\u8BF7\u6C42" aria-hidden="true">#</a> \u5173\u4E8EHTTP\u8BF7\u6C42</h2><p>\u4E00\u4E2Arestful\u63A5\u53E3\u5C31\u662F\u4E00\u4E2Ahttp\u8BF7\u6C42\uFF0C\u8BF7\u6C42\u5206\u4E3A\u8BF7\u6C42\u884C\u3001\u8BF7\u6C42\u5934\u3001\u8BF7\u6C42\u4F53\u3002</p><p>\u6211\u4EEC\u5728\u505Arestful\u63A5\u53E3\u6D4B\u8BD5\u65F6\uFF0C\u9700\u8981\u91CD\u70B9\u6CE8\u610F\u4E00\u4E9B\u8BF7\u6C42\u5934\uFF1A</p><ul><li><code>Accept</code> \u58F0\u660E\u6570\u636E\u7684\u683C\u5F0F</li><li><code>X-Requested-With:XMLHttpRequest</code> \u58F0\u660E\u5F02\u6B65\u8BF7\u6C42</li><li><code>User-Agent</code> \u7528\u6765\u8BF4\u660E\u5BA2\u6237\u7AEF\u7C7B\u578B\u3002\u662F\u4E2A\u4EC0\u4E48\u6D4F\u89C8\u5668\uFF0C\u8FD8\u662F\u4E2A\u722C\u866B\u4EC0\u4E48\u7684\uFF1F</li><li><code>Content-Type</code> \u58F0\u660E\u7C7B\u5BB9\u7684\u7C7B\u578B</li><li><code>Cookie</code> \u8BF7\u4F60\u5403\u5C0F\u997C\u5E72</li></ul><p>\u4EE5\u53CA\u54CD\u5E94\u5934\uFF1A</p><ul><li><code>Set-Cookie</code> \u662F\u670D\u52A1\u5668\u7ED9\u6211\u4EEC\u5F3A\u585E\u7684\u5C0F\u997C\u5E72</li></ul><h2 id="\u5E02\u9762\u4E0A\u5E38\u7528\u7684\u63A5\u53E3\u6D4B\u8BD5\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#\u5E02\u9762\u4E0A\u5E38\u7528\u7684\u63A5\u53E3\u6D4B\u8BD5\u5DE5\u5177" aria-hidden="true">#</a> \u5E02\u9762\u4E0A\u5E38\u7528\u7684\u63A5\u53E3\u6D4B\u8BD5\u5DE5\u5177</h2><p>Jmeter + Ant + Git + Jenkins \u662F\u5F88\u591A\u516C\u53F8\u7684\u9009\u62E9</p><p>Postman + Newman + Git + Jenkins \u662F\u53E6\u4E00\u4E2A\u4E3B\u6D41\u7684\u7EC4\u5408</p>',19),a=[d];function c(r,n){return t(),i("div",null,a)}var h=e(l,[["render",c],["__file","jmeter.html.vue"]]);export{h as default};
