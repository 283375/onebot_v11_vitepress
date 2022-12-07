import{_ as s,c as a,o as n,a as p}from"./app.66711eeb.js";const i=JSON.parse('{"title":"HTTP POST","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E0A\u62A5","slug":"\u4E0A\u62A5","link":"#\u4E0A\u62A5","children":[]},{"level":2,"title":"\u7B7E\u540D","slug":"\u7B7E\u540D","link":"#\u7B7E\u540D","children":[{"level":3,"title":"HMAC SHA1 \u6821\u9A8C\u7684\u793A\u4F8B","slug":"hmac-sha1-\u6821\u9A8C\u7684\u793A\u4F8B","link":"#hmac-sha1-\u6821\u9A8C\u7684\u793A\u4F8B","children":[]}]},{"level":2,"title":"\u5FEB\u901F\u64CD\u4F5C","slug":"\u5FEB\u901F\u64CD\u4F5C","link":"#\u5FEB\u901F\u64CD\u4F5C","children":[]},{"level":2,"title":"\u76F8\u5173\u914D\u7F6E","slug":"\u76F8\u5173\u914D\u7F6E","link":"#\u76F8\u5173\u914D\u7F6E","children":[]}],"relativePath":"communication/http-post.md"}'),l={name:"communication/http-post.md"},o=p(`<h1 id="http-post" tabindex="-1">HTTP POST <a class="header-anchor" href="#http-post" aria-hidden="true">#</a></h1><p>OneBot \u5728\u6536\u5230\u4E8B\u4EF6\u540E\uFF0C\u5411\u914D\u7F6E\u6307\u5B9A\u7684\u4E8B\u4EF6\u4E0A\u62A5 URL \u901A\u8FC7 POST \u8BF7\u6C42\u53D1\u9001\u4E8B\u4EF6\u6570\u636E\uFF0C\u4E8B\u4EF6\u6570\u636E\u4EE5 JSON \u683C\u5F0F\u8868\u793A\u3002\u8BF7\u6C42\u7ED3\u675F\u540E\uFF0COneBot \u5904\u7406\u7528\u6237\u8FD4\u56DE\u7684\u54CD\u5E94\u4E2D\u7684\u300C\u5FEB\u901F\u64CD\u4F5C\u300D\uFF0C\u5982\u5FEB\u901F\u56DE\u590D\u3001\u5FEB\u901F\u7981\u8A00\u7B49\u3002</p><h2 id="\u4E0A\u62A5" tabindex="-1">\u4E0A\u62A5 <a class="header-anchor" href="#\u4E0A\u62A5" aria-hidden="true">#</a></h2><p>\u5047\u8BBE\u914D\u7F6E\u6307\u5B9A\u7684\u4E0A\u62A5 URL \u4E3A <code>http://127.0.0.1:8080/</code>\uFF0C\u4EE5\u79C1\u804A\u6D88\u606F\u4E3A\u4F8B\uFF0C\u4E8B\u4EF6\u4E0A\u62A5\u7684 POST \u8BF7\u6C42\u5982\u4E0B\uFF1A</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">POST / HTTP/1.1</span></span>
<span class="line"><span style="color:#A6ACCD;">Host: 127.0.0.1:8080</span></span>
<span class="line"><span style="color:#A6ACCD;">Content-Type: application/json</span></span>
<span class="line"><span style="color:#A6ACCD;">X-Self-ID: 10001000</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;time&quot;: 1515204254,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;self_id&quot;: 10001000,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;post_type&quot;: &quot;message&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;message_type&quot;: &quot;private&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;sub_type&quot;: &quot;friend&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;message_id&quot;: 12,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;user_id&quot;: 12345678,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;message&quot;: &quot;\u4F60\u597D\uFF5E&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;raw_message&quot;: &quot;\u4F60\u597D\uFF5E&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;font&quot;: 456,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;sender&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;nickname&quot;: &quot;\u5C0F\u4E0D\u70B9&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;sex&quot;: &quot;male&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        &quot;age&quot;: 18</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u8BF7\u6C42\u5934\u4E2D\u7684 <code>X-Self-ID</code> \u8868\u793A\u5F53\u524D\u6B63\u5728\u4E0A\u62A5\u7684\u673A\u5668\u4EBA QQ \u53F7\uFF0C\u548C\u8BF7\u6C42\u6B63\u6587 JSON \u4E2D\u7684 <code>self_id</code> \u4E00\u81F4\u3002</p><p>\u4E0A\u4F8B\u4E2D\u7684\u4E8B\u4EF6\u4E3A\u79C1\u804A\u6D88\u606F\u4E8B\u4EF6\uFF0C\u5176\u5B83\u4E8B\u4EF6\u53CA\u5B83\u4EEC\u7684\u4E0A\u62A5\u5185\u5BB9\u548C\u652F\u6301\u7684\u54CD\u5E94\u6570\u636E\uFF0C\u89C1 <a href="./../event/">\u4E8B\u4EF6</a>\u3002</p><h2 id="\u7B7E\u540D" tabindex="-1">\u7B7E\u540D <a class="header-anchor" href="#\u7B7E\u540D" aria-hidden="true">#</a></h2><p>\u5982\u679C\u914D\u7F6E\u4E2D\u7ED9\u51FA\u4E86 <code>secret</code>\uFF0C\u5373\u7B7E\u540D\u5BC6\u94A5\uFF0C\u5219\u4F1A\u5728\u6BCF\u6B21\u4E0A\u62A5\u7684\u8BF7\u6C42\u5934\u4E2D\u52A0\u5165 HMAC \u7B7E\u540D\uFF0C\u5373 <code>X-Signature</code> \u5934\uFF0C\u5982\uFF1A</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">POST / HTTP/1.1</span></span>
<span class="line"><span style="color:#A6ACCD;">Host: 127.0.0.1:8080</span></span>
<span class="line"><span style="color:#A6ACCD;">Content-Type: application/json</span></span>
<span class="line"><span style="color:#A6ACCD;">X-Signature: sha1=f9ddd4863ace61e64f462d41ca311e3d2c1176e2</span></span>
<span class="line"><span style="color:#A6ACCD;">X-Self-ID: 10001000</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u7B7E\u540D\u4EE5 <code>secret</code> \u4F5C\u4E3A\u5BC6\u94A5\uFF0CHTTP \u6B63\u6587\u4F5C\u4E3A\u6D88\u606F\uFF0C\u8FDB\u884C HMAC SHA1 \u54C8\u5E0C\uFF0C\u7528\u6237\u540E\u7AEF\u53EF\u4EE5\u901A\u8FC7\u8BE5\u54C8\u5E0C\u503C\u6765\u9A8C\u8BC1\u4E0A\u62A5\u7684\u6570\u636E\u786E\u5B9E\u6765\u81EA OneBot\uFF0C\u800C\u4E0D\u662F\u7B2C\u4E09\u65B9\u4F2A\u9020\u7684\u3002HMAC \u4ECB\u7ECD\u89C1 <a href="https://zh.wikipedia.org/zh-cn/%E9%87%91%E9%91%B0%E9%9B%9C%E6%B9%8A%E8%A8%8A%E6%81%AF%E9%91%91%E5%88%A5%E7%A2%BC" target="_blank" rel="noreferrer">\u5BC6\u94A5\u6563\u5217\u6D88\u606F\u8BA4\u8BC1\u7801</a>\u3002</p><h3 id="hmac-sha1-\u6821\u9A8C\u7684\u793A\u4F8B" tabindex="-1">HMAC SHA1 \u6821\u9A8C\u7684\u793A\u4F8B <a class="header-anchor" href="#hmac-sha1-\u6821\u9A8C\u7684\u793A\u4F8B" aria-hidden="true">#</a></h3><h4 id="python-flask" tabindex="-1">Python + Flask <a class="header-anchor" href="#python-flask" aria-hidden="true">#</a></h4><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> hmac</span></span>
<span class="line"><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> flask </span><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> Flask</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> request</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">app </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Flask</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">__name__</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">@</span><span style="color:#82AAFF;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">route</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#A6ACCD;">methods</span><span style="color:#89DDFF;">=[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">POST</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">])</span></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">receive</span><span style="color:#89DDFF;">():</span></span>
<span class="line"><span style="color:#A6ACCD;">    sig </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> hmac</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">new</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">b</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">&lt;your-key&gt;</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> request</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get_data</span><span style="color:#89DDFF;">(),</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">sha1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">hexdigest</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">    received_sig </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> request</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">headers</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">X-Signature</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">][</span><span style="color:#82AAFF;">len</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">sha1=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">):]</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> sig </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> received_sig</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;"># \u8BF7\u6C42\u786E\u5B9E\u6765\u81EA\u4E8E OneBot</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">pass</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">else</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;"># \u5047\u7684\u4E0A\u62A5</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">pass</span></span>
<span class="line"></span></code></pre></div><h4 id="node-js-koa" tabindex="-1">Node.js + Koa <a class="header-anchor" href="#node-js-koa" aria-hidden="true">#</a></h4><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> crypto </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">crypto</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> secret </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">some-secret</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u5728 Koa \u7684\u8BF7\u6C42 context \u4E2D</span></span>
<span class="line"><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">assert</span><span style="color:#A6ACCD;">(ctx</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">request</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">headers[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">x-signature</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">] </span><span style="color:#89DDFF;">!==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">undefined,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">401</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> hmac </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> crypto</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createHmac</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">sha1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> secret)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">hmac</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">update</span><span style="color:#A6ACCD;">(ctx</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">request</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">rawBody)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> sig </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> hmac</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">digest</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hex</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">assert</span><span style="color:#A6ACCD;">(ctx</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">request</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">headers[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">x-signature</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">] </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">sha1=</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">sig</span><span style="color:#89DDFF;">}\`</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">403</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u5FEB\u901F\u64CD\u4F5C" tabindex="-1">\u5FEB\u901F\u64CD\u4F5C <a class="header-anchor" href="#\u5FEB\u901F\u64CD\u4F5C" aria-hidden="true">#</a></h2><p>\u4E8B\u4EF6\u4E0A\u62A5\u7684\u540E\u7AEF\u53EF\u4EE5\u5728\u4E0A\u62A5\u8BF7\u6C42\u7684\u54CD\u5E94\u4E2D\u76F4\u63A5\u6307\u5B9A\u4E00\u4E9B\u7B80\u5355\u7684\u64CD\u4F5C\uFF0C\u79F0\u4E3A\u300C\u5FEB\u901F\u64CD\u4F5C\u300D\uFF0C\u5982\u5FEB\u901F\u56DE\u590D\u3001\u5FEB\u901F\u7981\u8A00\u7B49\u3002\u5982\u679C\u4E0D\u9700\u8981\u4F7F\u7528\u8FD9\u4E2A\u7279\u6027\uFF0C\u8FD4\u56DE HTTP \u54CD\u5E94\u72B6\u6001\u7801 204\uFF0C\u6216\u4FDD\u6301\u54CD\u5E94\u6B63\u6587\u5185\u5BB9\u4E3A\u7A7A\uFF1B\u5982\u679C\u9700\u8981\uFF0C\u5219\u4F7F\u7528 JSON \u4F5C\u4E3A\u54CD\u5E94\u6B63\u6587\uFF0C<code>Content-Type</code> \u54CD\u5E94\u5934\u4EFB\u610F\uFF08\u76EE\u524D\u4E0D\u4F1A\u8FDB\u884C\u5224\u65AD\uFF09\uFF0C\u4F46\u8BBE\u7F6E\u4E3A <code>application/json</code> \u6700\u597D\uFF0C\u4EE5\u4FBF\u51CF\u5C11\u4E0D\u5FC5\u8981\u7684\u5347\u7EA7\u6210\u672C\uFF0C\u56E0\u4E3A\u5982\u679C\u4EE5\u540E\u6709\u9700\u6C42\uFF0C\u53EF\u80FD\u4F1A\u52A0\u5165\u5224\u65AD\u3002</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>\u65E0\u8BBA\u662F\u5426\u9700\u8981\u4F7F\u7528\u5FEB\u901F\u64CD\u4F5C\uFF0C\u4E8B\u4EF6\u4E0A\u62A5\u540E\u7AEF\u90FD\u5E94\u8BE5\u5728\u5904\u7406\u5B8C\u6BD5\u540E\u8FD4\u56DE HTTP \u54CD\u5E94\uFF0C\u5426\u5219 OneBot \u5C06\u4E00\u76F4\u7B49\u5F85\u76F4\u5230\u8D85\u65F6\u3002</p></div><p>\u54CD\u5E94\u7684 JSON \u6570\u636E\u4E2D\uFF0C\u652F\u6301\u7684\u64CD\u4F5C\u968F\u4E8B\u4EF6\u7684\u4E0D\u540C\u800C\u4E0D\u540C\uFF0C\u4F1A\u5728\u4E8B\u4EF6\u5217\u8868\u4E2D\u7684\u300C\u5FEB\u901F\u64CD\u4F5C\u300D\u6807\u9898\u4E0B\u7ED9\u51FA\u3002\u9700\u8981\u6307\u51FA\u7684\u662F\uFF0C<strong>\u54CD\u5E94\u6570\u636E\u4E2D\u7684\u6BCF\u4E2A\u5B57\u6BB5\u90FD\u662F\u53EF\u9009\u7684</strong>\uFF0C\u53EA\u6709\u5728\u5B57\u6BB5\u5B58\u5728\uFF08\u660E\u786E\u8981\u6C42\u8FDB\u884C\u64CD\u4F5C\uFF09\u65F6\uFF0C\u624D\u4F1A\u89E6\u53D1\u76F8\u5E94\u7684\u64CD\u4F5C\uFF0C\u5426\u5219\u5C06\u4FDD\u6301\u5BF9\u673A\u5668\u4EBA\u6574\u4F53\u8FD0\u884C\u72B6\u6001\u5F71\u54CD\u6700\u5C0F\u7684\u884C\u4E3A\uFF08\u6BD4\u5982\u9ED8\u8BA4\u4E0D\u56DE\u590D\u6D88\u606F\u3001\u4E0D\u5904\u7406\u8BF7\u6C42\uFF09\u3002</p><p>\u4EE5\u79C1\u804A\u6D88\u606F\u4E3A\u4F8B\uFF0C\u4E8B\u4EF6\u4E0A\u62A5\u540E\u7AEF\u82E5\u8FD4\u56DE\u5982\u4E0B JSON \u4F5C\u4E3A\u54CD\u5E94\u6B63\u6587\uFF1A</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">reply</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u55E8\uFF5E</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u5219\u4F1A\u56DE\u590D <code>\u55E8\uFF5E</code>\u3002</p><h2 id="\u76F8\u5173\u914D\u7F6E" tabindex="-1">\u76F8\u5173\u914D\u7F6E <a class="header-anchor" href="#\u76F8\u5173\u914D\u7F6E" aria-hidden="true">#</a></h2><table><thead><tr><th>\u914D\u7F6E\u9879\u540D\u79F0</th><th>\u9ED8\u8BA4\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>http_post.enable</code></td><td><code>true</code></td><td>\u662F\u5426\u542F\u7528 HTTP POST</td></tr><tr><td><code>http_post.url</code></td><td>\u7A7A</td><td>\u4E8B\u4EF6\u4E0A\u62A5 URL</td></tr><tr><td><code>http_post.timeout</code></td><td><code>0</code></td><td>HTTP \u4E0A\u62A5\u8D85\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\u79D2\uFF0C0 \u8868\u793A\u4E0D\u8BBE\u7F6E\u8D85\u65F6</td></tr><tr><td><code>http_post.secret</code></td><td>\u7A7A</td><td>\u4E0A\u62A5\u6570\u636E\u7B7E\u540D\u5BC6\u94A5</td></tr></tbody></table>`,25),e=[o];function t(c,r,D,y,A,F){return n(),a("div",null,e)}const d=s(l,[["render",t]]);export{i as __pageData,d as default};