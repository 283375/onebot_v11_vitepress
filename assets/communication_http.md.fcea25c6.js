import{_ as s,c as a,o,a as e}from"./app.db2ac653.js";const C=JSON.parse('{"title":"HTTP","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8BF7\u6C42","slug":"\u8BF7\u6C42","link":"#\u8BF7\u6C42","children":[]},{"level":2,"title":"\u54CD\u5E94","slug":"\u54CD\u5E94","link":"#\u54CD\u5E94","children":[]},{"level":2,"title":"\u76F8\u5173\u914D\u7F6E","slug":"\u76F8\u5173\u914D\u7F6E","link":"#\u76F8\u5173\u914D\u7F6E","children":[]}],"relativePath":"communication/http.md"}'),n={name:"communication/http.md"},l=e(`<h1 id="http" tabindex="-1">HTTP <a class="header-anchor" href="#http" aria-hidden="true">#</a></h1><p>OneBot \u5728\u542F\u52A8\u65F6\u5F00\u542F\u4E00\u4E2A HTTP \u670D\u52A1\u5668\uFF0C\u76D1\u542C\u914D\u7F6E\u6587\u4EF6\u6307\u5B9A\u7684 IP \u548C\u7AEF\u53E3\uFF0C\u63A5\u53D7\u8DEF\u5F84\u4E3A <code>/:action</code> \u7684 API \u8BF7\u6C42\uFF08\u6216 <code>/:action/</code>\uFF09\uFF0C\u5982 <code>/send_private_msg</code>\uFF0C\u8BF7\u6C42\u53EF\u4EE5\u4F7F\u7528 GET \u6216 POST \u65B9\u6CD5\uFF0C\u53EF\u4EE5\u901A\u8FC7 query \u53C2\u6570\uFF08<code>?arg1=111&amp;arg2=222</code>\uFF09\u3001urlencoded \u8868\u5355\uFF08<code>arg1=111&amp;arg2=222</code>\uFF09\u6216 JSON\uFF08<code>{&quot;arg1&quot;: &quot;111&quot;, &quot;arg2&quot;: &quot;222&quot;}</code>\uFF09\u4F20\u9012\u53C2\u6570\u3002</p><p>\u53C2\u6570\u53EF\u80FD\u6709\u4E0D\u540C\u7684\u7C7B\u578B\uFF0C\u5F53\u7528\u6237\u901A\u8FC7 query \u53C2\u6570\u6216 urlencoded \u8868\u5355\u4F20\u53C2\uFF0C\u6216\u5728 JSON \u4E2D\u4F7F\u7528\u5B57\u7B26\u4E32\u4F5C\u4E3A\u53C2\u6570\u503C\u65F6\uFF0COneBot \u5B9E\u73B0\u9700\u8981\u4ECE\u5B57\u7B26\u4E32\u89E3\u6790\u51FA\u5BF9\u5E94\u7C7B\u578B\u7684\u6570\u636E\u3002</p><h2 id="\u8BF7\u6C42" tabindex="-1">\u8BF7\u6C42 <a class="header-anchor" href="#\u8BF7\u6C42" aria-hidden="true">#</a></h2><p>\u5047\u8BBE\u914D\u7F6E\u4E2D\u6307\u5B9A\u4E86 IP \u548C\u7AEF\u53E3\u5206\u522B\u4E3A <code>127.0.0.1</code> \u548C <code>5700</code>\uFF0C\u5219\u5728\u6D4F\u89C8\u5668\u4E2D\u8BBF\u95EE <code>http://127.0.0.1:5700/send_private_msg?user_id=1000010000&amp;message=hello</code> \u5373\u53EF\u7ED9 QQ \u53F7\u4E3A <code>1000010000</code> \u7684\u597D\u53CB\u53D1\u9001\u79C1\u804A\u6D88\u606F <code>hello</code>\u3002</p><p>\u5982\u9700\u4F7F\u7528 JSON \u4F20\u9012\u53C2\u6570\uFF0C\u5219\u8BF7\u6C42\u5982\u4E0B\uFF1A</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">POST /send_private_msg HTTP/1.1</span></span>
<span class="line"><span style="color:#A6ACCD;">Host: 127.0.0.1:5700</span></span>
<span class="line"><span style="color:#A6ACCD;">Content-Type: application/json</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;user_id&quot;: 1000010000,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;message&quot;: &quot;hello&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><ul><li>\u5F53\u4F7F\u7528 query \u53C2\u6570\u6216 urlencoded \u8868\u5355\u4F20\u9012\u53C2\u6570\u65F6\uFF0C\u53C2\u6570\u503C\u5FC5\u987B\u8FDB\u884C urlencode\u3002</li><li>\u5F53\u4F7F\u7528 urlencoded \u8868\u5355\u6216 JSON \u4F20\u9012\u53C2\u6570\u65F6\uFF0C\u8BF7\u6C42\u5934\u4E2D\u7684 <code>Content-Type</code> \u5FC5\u987B\u5BF9\u5E94\u7684\u4E3A <code>application/x-www-form-urlencoded</code> \u6216 <code>application/json</code>\u3002</li></ul></div><p>\u4E0A\u4F8B\u4E2D\u8C03\u7528\u7684 API\uFF08\u5373 action\uFF09\u4E3A <code>send_private_msg</code>\uFF0C\u5176\u5B83 API \u53CA\u5B83\u4EEC\u7684\u53C2\u6570\u548C\u54CD\u5E94\u5185\u5BB9\uFF0C\u89C1 <a href="./../api/">API</a>\u3002</p><h2 id="\u54CD\u5E94" tabindex="-1">\u54CD\u5E94 <a class="header-anchor" href="#\u54CD\u5E94" aria-hidden="true">#</a></h2><p>\u6536\u5230 API \u8BF7\u6C42\u5E76\u5904\u7406\u540E\uFF0COneBot \u4F1A\u8FD4\u56DE\u4E00\u4E2A HTTP \u54CD\u5E94\uFF0C\u6839\u636E\u5177\u4F53\u60C5\u51B5\u4E0D\u540C\uFF0CHTTP \u72B6\u6001\u7801\u4E0D\u540C\uFF1A</p><ul><li>\u5982\u679C access token \u672A\u63D0\u4F9B\uFF0C\u72B6\u6001\u7801\u4E3A 401\uFF08\u5173\u4E8E access token\uFF0C\u89C1 <a href="./authorization.html">\u9274\u6743</a>\uFF09</li><li>\u5982\u679C access token \u4E0D\u7B26\u5408\uFF0C\u72B6\u6001\u7801\u4E3A 403</li><li>\u5982\u679C POST \u8BF7\u6C42\u7684 Content-Type \u4E0D\u652F\u6301\uFF0C\u72B6\u6001\u7801\u4E3A 406</li><li>\u5982\u679C POST \u8BF7\u6C42\u7684\u6B63\u6587\u683C\u5F0F\u4E0D\u6B63\u786E\uFF0C\u72B6\u6001\u7801\u4E3A 400</li><li>\u5982\u679C API \u4E0D\u5B58\u5728\uFF0C\u72B6\u6001\u7801\u4E3A 404</li><li>\u5269\u4E0B\u7684\u6240\u6709\u60C5\u51B5\uFF0C\u65E0\u8BBA\u64CD\u4F5C\u5B9E\u9645\u6210\u529F\u4E0E\u5426\uFF0C\u72B6\u6001\u7801\u90FD\u662F 200</li></ul><p>\u72B6\u6001\u7801\u4E3A 200 \u65F6\uFF0C\u54CD\u5E94\u5185\u5BB9\u4E3A JSON \u683C\u5F0F\uFF0C\u57FA\u672C\u7ED3\u6784\u5982\u4E0B\uFF1A</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">status</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ok</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">retcode</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">data</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">123456</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">nickname</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u6ED1\u7A3D</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p><code>status</code> \u5B57\u6BB5\u8868\u793A\u8BF7\u6C42\u7684\u72B6\u6001\uFF1A</p><ul><li><code>ok</code> \u8868\u793A\u64CD\u4F5C\u6210\u529F\uFF0C\u540C\u65F6 <code>retcode</code> \uFF08\u8FD4\u56DE\u7801\uFF09\u4F1A\u7B49\u4E8E 0</li><li><code>async</code> \u8868\u793A\u8BF7\u6C42\u5DF2\u63D0\u4EA4\u5F02\u6B65\u5904\u7406\uFF0C\u6B64\u65F6 <code>retcode</code> \u4E3A 1\uFF0C\u5177\u4F53\u6210\u529F\u6216\u5931\u8D25\u5C06\u65E0\u6CD5\u83B7\u77E5</li><li><code>failed</code> \u8868\u793A\u64CD\u4F5C\u5931\u8D25\uFF0C\u6B64\u65F6 <code>retcode</code> \u65E2\u4E0D\u662F 0 \u4E5F\u4E0D\u662F 1\uFF0C\u5177\u4F53\u9519\u8BEF\u4FE1\u606F\u5E94\u53C2\u8003 OneBot \u5B9E\u73B0\u7684\u65E5\u5FD7</li></ul><p><code>data</code> \u5B57\u6BB5\u4E3A API \u8FD4\u56DE\u6570\u636E\u7684\u5185\u5BB9\uFF0C\u5BF9\u4E8E\u8E22\u4EBA\u3001\u7981\u8A00\u7B49\u4E0D\u9700\u8981\u8FD4\u56DE\u6570\u636E\u7684\u64CD\u4F5C\uFF0C\u8FD9\u91CC\u4E3A null\uFF0C\u5BF9\u4E8E\u83B7\u53D6\u7FA4\u6210\u5458\u4FE1\u606F\u8FD9\u7C7B\u64CD\u4F5C\uFF0C\u8FD9\u91CC\u4E3A\u6240\u83B7\u53D6\u7684\u6570\u636E\u7684\u5BF9\u8C61\uFF0C\u5177\u4F53\u7684\u6570\u636E\u5185\u5BB9\u5C06\u4F1A\u5728\u76F8\u5E94\u7684 API \u63CF\u8FF0\u4E2D\u7ED9\u51FA\u3002\u6CE8\u610F\uFF0C\u5F02\u6B65\u7248\u672C\u7684 API\uFF0C<code>data</code> \u6C38\u8FDC\u662F null\uFF0C\u5373\u4F7F\u5176\u76F8\u5E94\u7684\u540C\u6B65\u63A5\u53E3\u672C\u8EAB\u662F\u6709\u6570\u636E\u3002</p><h2 id="\u76F8\u5173\u914D\u7F6E" tabindex="-1">\u76F8\u5173\u914D\u7F6E <a class="header-anchor" href="#\u76F8\u5173\u914D\u7F6E" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u914D\u7F6E\u9879\u540D\u79F0\u4EC5\u4F9B\u53C2\u8003\uFF0C\u4E0D\u540C OneBot \u5B9E\u73B0\u53EF\u4EE5\u81EA\u884C\u5B9A\u4E49\u540D\u79F0\uFF0C\u53EA\u9700\u5728\u6837\u4F8B\u914D\u7F6E\u4E2D\u7ED9\u51FA\u6CE8\u91CA\u5373\u53EF\u3002</p></div><table><thead><tr><th>\u914D\u7F6E\u9879</th><th>\u9ED8\u8BA4\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>http.enable</code></td><td><code>true</code></td><td>\u662F\u5426\u542F\u7528 HTTP</td></tr><tr><td><code>http.host</code></td><td><code>0.0.0.0</code></td><td>HTTP \u670D\u52A1\u5668\u76D1\u542C\u7684 IP</td></tr><tr><td><code>http.port</code></td><td><code>5700</code></td><td>HTTP \u670D\u52A1\u5668\u76D1\u542C\u7684\u7AEF\u53E3</td></tr></tbody></table>`,20),t=[l];function p(c,d,r,i,D,u){return o(),a("div",null,t)}const h=s(n,[["render",p]]);export{C as __pageData,h as default};
