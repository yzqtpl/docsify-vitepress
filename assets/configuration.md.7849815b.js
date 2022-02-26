import{_ as a,c as n,o as s,a as e}from"./app.fbe85f26.js";const h='{"title":"\u914D\u7F6E\u9879","description":"","frontmatter":{},"headers":[{"level":2,"title":"el","slug":"el"},{"level":2,"title":"repo","slug":"repo"},{"level":2,"title":"maxLevel","slug":"maxlevel"},{"level":2,"title":"loadNavbar","slug":"loadnavbar"},{"level":2,"title":"loadSidebar","slug":"loadsidebar"},{"level":2,"title":"subMaxLevel","slug":"submaxlevel"},{"level":2,"title":"auto2top","slug":"auto2top"},{"level":2,"title":"homepage","slug":"homepage"},{"level":2,"title":"basePath","slug":"basepath"},{"level":2,"title":"coverpage","slug":"coverpage"},{"level":2,"title":"logo","slug":"logo"},{"level":2,"title":"name","slug":"name"},{"level":2,"title":"nameLink","slug":"namelink"},{"level":2,"title":"markdown","slug":"markdown"},{"level":2,"title":"themeColor","slug":"themecolor"},{"level":2,"title":"alias","slug":"alias"},{"level":2,"title":"autoHeader","slug":"autoheader"},{"level":2,"title":"executeScript","slug":"executescript"},{"level":2,"title":"noEmoji","slug":"noemoji"},{"level":2,"title":"mergeNavbar","slug":"mergenavbar"},{"level":2,"title":"formatUpdated","slug":"formatupdated"},{"level":2,"title":"externalLinkTarget","slug":"externallinktarget"},{"level":2,"title":"routerMode","slug":"routermode"},{"level":2,"title":"noCompileLinks","slug":"nocompilelinks"},{"level":2,"title":"requestHeaders","slug":"requestheaders"},{"level":2,"title":"ext","slug":"ext"},{"level":2,"title":"fallbackLanguages","slug":"fallbacklanguages"},{"level":2,"title":"notFoundPage","slug":"notfoundpage"}],"relativePath":"configuration.md"}',p={},t=e(`<h1 id="\u914D\u7F6E\u9879" tabindex="-1">\u914D\u7F6E\u9879 <a class="header-anchor" href="#\u914D\u7F6E\u9879" aria-hidden="true">#</a></h1><p>\u4F60\u53EF\u4EE5\u914D\u7F6E\u5728 <code>window.$docsify</code> \u91CC\u3002</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  window<span class="token punctuation">.</span>$docsify <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">repo</span><span class="token operator">:</span> <span class="token string">&#39;docsifyjs/docsify&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">maxLevel</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
    <span class="token literal-property property">coverpage</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="el" tabindex="-1">el <a class="header-anchor" href="#el" aria-hidden="true">#</a></h2><ul><li>\u7C7B\u578B\uFF1A<code>String</code></li><li>\u9ED8\u8BA4\u503C\uFF1A<code>#app</code></li></ul><p>docsify \u521D\u59CB\u5316\u7684\u6302\u8F7D\u5143\u7D20\uFF0C\u53EF\u4EE5\u662F\u4E00\u4E2A CSS \u9009\u62E9\u5668\uFF0C\u9ED8\u8BA4\u4E3A <code>#app</code> \u5982\u679C\u4E0D\u5B58\u5728\u5C31\u76F4\u63A5\u7ED1\u5B9A\u5728 <code>body</code> \u4E0A\u3002</p><div class="language-js"><pre><code>window<span class="token punctuation">.</span>$docsify <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="repo" tabindex="-1">repo <a class="header-anchor" href="#repo" aria-hidden="true">#</a></h2><ul><li>\u7C7B\u578B\uFF1A<code>String</code></li><li>\u9ED8\u8BA4\u503C: <code>null</code></li></ul><p>\u914D\u7F6E\u4ED3\u5E93\u5730\u5740\u6216\u8005 <code>username/repo</code> \u7684\u5B57\u7B26\u4E32\uFF0C\u4F1A\u5728\u9875\u9762\u53F3\u4E0A\u89D2\u6E32\u67D3\u4E00\u4E2A <a href="http://tholman.com/github-corners/" target="_blank" rel="noopener noreferrer">GitHub Corner</a> \u6302\u4EF6\u3002</p><div class="language-js"><pre><code>window<span class="token punctuation">.</span>$docsify <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">repo</span><span class="token operator">:</span> <span class="token string">&#39;docsifyjs/docsify&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// or</span>
  <span class="token literal-property property">repo</span><span class="token operator">:</span> <span class="token string">&#39;https://github.com/docsifyjs/docsify/&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="maxlevel" tabindex="-1">maxLevel <a class="header-anchor" href="#maxlevel" aria-hidden="true">#</a></h2><ul><li>\u7C7B\u578B\uFF1A<code>Number</code></li><li>\u9ED8\u8BA4\u503C: <code>6</code></li></ul><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u4F1A\u6293\u53D6\u6587\u6863\u4E2D\u6240\u6709\u6807\u9898\u6E32\u67D3\u6210\u76EE\u5F55\uFF0C\u53EF\u914D\u7F6E\u6700\u5927\u652F\u6301\u6E32\u67D3\u7684\u6807\u9898\u5C42\u7EA7\u3002</p><div class="language-js"><pre><code>window<span class="token punctuation">.</span>$docsify <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">maxLevel</span><span class="token operator">:</span> <span class="token number">4</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="loadnavbar" tabindex="-1">loadNavbar <a class="header-anchor" href="#loadnavbar" aria-hidden="true">#</a></h2><ul><li>\u7C7B\u578B\uFF1A<code>Boolean|String</code></li><li>\u9ED8\u8BA4\u503C: <code>false</code></li></ul><p>\u52A0\u8F7D\u81EA\u5B9A\u4E49\u5BFC\u822A\u680F\uFF0C\u53C2\u8003<a href="./custom-navbar.html">\u5B9A\u5236\u5BFC\u822A\u680F</a> \u4E86\u89E3\u7528\u6CD5\u3002\u8BBE\u7F6E\u4E3A <code>true</code> \u540E\u4F1A\u52A0\u8F7D <code>_navbar.md</code> \u6587\u4EF6\uFF0C\u4E5F\u53EF\u4EE5\u81EA\u5B9A\u4E49\u52A0\u8F7D\u7684\u6587\u4EF6\u540D\u3002</p><div class="language-js"><pre><code>window<span class="token punctuation">.</span>$docsify <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u52A0\u8F7D _navbar.md</span>
  <span class="token literal-property property">loadNavbar</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

  <span class="token comment">// \u52A0\u8F7D nav.md</span>
  <span class="token literal-property property">loadNavbar</span><span class="token operator">:</span> <span class="token string">&#39;nav.md&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="loadsidebar" tabindex="-1">loadSidebar <a class="header-anchor" href="#loadsidebar" aria-hidden="true">#</a></h2><ul><li>\u7C7B\u578B\uFF1A<code>Boolean|String</code></li><li>\u9ED8\u8BA4\u503C: <code>false</code></li></ul><p>\u52A0\u8F7D\u81EA\u5B9A\u4E49\u4FA7\u8FB9\u680F\uFF0C\u53C2\u8003<a href="./more-pages.html">\u591A\u9875\u6587\u6863</a>\u3002\u8BBE\u7F6E\u4E3A <code>true</code> \u540E\u4F1A\u52A0\u8F7D <code>_sidebar.md</code> \u6587\u4EF6\uFF0C\u4E5F\u53EF\u4EE5\u81EA\u5B9A\u4E49\u52A0\u8F7D\u7684\u6587\u4EF6\u540D\u3002</p><div class="language-js"><pre><code>window<span class="token punctuation">.</span>$docsify <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u52A0\u8F7D _sidebar.md</span>
  <span class="token literal-property property">loadSidebar</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

  <span class="token comment">// \u52A0\u8F7D summary.md</span>
  <span class="token literal-property property">loadSidebar</span><span class="token operator">:</span> <span class="token string">&#39;summary.md&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="submaxlevel" tabindex="-1">subMaxLevel <a class="header-anchor" href="#submaxlevel" aria-hidden="true">#</a></h2><ul><li>\u7C7B\u578B\uFF1A<code>Number</code></li><li>\u9ED8\u8BA4\u503C: <code>0</code></li></ul><p>\u81EA\u5B9A\u4E49\u4FA7\u8FB9\u680F\u540E\u9ED8\u8BA4\u4E0D\u4F1A\u518D\u751F\u6210\u76EE\u5F55\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E\u751F\u6210\u76EE\u5F55\u7684\u6700\u5927\u5C42\u7EA7\u5F00\u542F\u8FD9\u4E2A\u529F\u80FD\u3002</p><div class="language-js"><pre><code>window<span class="token punctuation">.</span>$docsify <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">subMaxLevel</span><span class="token operator">:</span> <span class="token number">2</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="auto2top" tabindex="-1">auto2top <a class="header-anchor" href="#auto2top" aria-hidden="true">#</a></h2><ul><li>\u7C7B\u578B\uFF1A<code>Boolean</code></li><li>\u9ED8\u8BA4\u503C: <code>false</code></li></ul><p>\u5207\u6362\u9875\u9762\u540E\u662F\u5426\u81EA\u52A8\u8DF3\u8F6C\u5230\u9875\u9762\u9876\u90E8\u3002</p><div class="language-js"><pre><code>window<span class="token punctuation">.</span>$docsify <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">auto2top</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="homepage" tabindex="-1">homepage <a class="header-anchor" href="#homepage" aria-hidden="true">#</a></h2><ul><li>\u7C7B\u578B\uFF1A<code>String</code></li><li>\u9ED8\u8BA4\u503C: <code>README.md</code></li></ul><p>\u8BBE\u7F6E\u9996\u9875\u6587\u4EF6\u52A0\u8F7D\u8DEF\u5F84\u3002\u9002\u5408\u4E0D\u60F3\u5C06 <code>README.md</code> \u4F5C\u4E3A\u5165\u53E3\u6587\u4EF6\u6E32\u67D3\uFF0C\u6216\u8005\u662F\u6587\u6863\u5B58\u653E\u5728\u5176\u4ED6\u4F4D\u7F6E\u7684\u60C5\u51B5\u4F7F\u7528\u3002</p><div class="language-js"><pre><code>window<span class="token punctuation">.</span>$docsify <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5165\u53E3\u6587\u4EF6\u6539\u4E3A /home.md</span>
  <span class="token literal-property property">homepage</span><span class="token operator">:</span> <span class="token string">&#39;home.md&#39;</span><span class="token punctuation">,</span>

  <span class="token comment">// \u6587\u6863\u548C\u4ED3\u5E93\u6839\u76EE\u5F55\u4E0B\u7684 README.md \u5185\u5BB9\u4E00\u81F4</span>
  <span class="token literal-property property">homepage</span><span class="token operator">:</span>
    <span class="token string">&#39;https://raw.githubusercontent.com/docsifyjs/docsify/master/README.md&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="basepath" tabindex="-1">basePath <a class="header-anchor" href="#basepath" aria-hidden="true">#</a></h2><ul><li>\u7C7B\u578B\uFF1A<code>String</code></li></ul><p>\u6587\u6863\u52A0\u8F7D\u7684\u6839\u8DEF\u5F84\uFF0C\u53EF\u4EE5\u662F\u4E8C\u7EA7\u8DEF\u5F84\u6216\u8005\u662F\u5176\u4ED6\u57DF\u540D\u7684\u8DEF\u5F84\u3002</p><div class="language-js"><pre><code>window<span class="token punctuation">.</span>$docsify <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">basePath</span><span class="token operator">:</span> <span class="token string">&#39;/path/&#39;</span><span class="token punctuation">,</span>

  <span class="token comment">// \u76F4\u63A5\u6E32\u67D3\u5176\u4ED6\u57DF\u540D\u7684\u6587\u6863</span>
  <span class="token literal-property property">basePath</span><span class="token operator">:</span> <span class="token string">&#39;https://docsify.js.org/&#39;</span><span class="token punctuation">,</span>

  <span class="token comment">// \u751A\u81F3\u76F4\u63A5\u6E32\u67D3\u5176\u4ED6\u4ED3\u5E93 readme</span>
  <span class="token literal-property property">basePath</span><span class="token operator">:</span>
    <span class="token string">&#39;https://raw.githubusercontent.com/ryanmcdermott/clean-code-javascript/master/&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="coverpage" tabindex="-1">coverpage <a class="header-anchor" href="#coverpage" aria-hidden="true">#</a></h2><ul><li>\u7C7B\u578B\uFF1A<code>Boolean|String</code></li><li>\u9ED8\u8BA4\u503C: <code>false</code></li></ul><p>\u542F\u7528<a href="./cover.html">\u5C01\u9762\u9875</a>\u3002\u5F00\u542F\u540E\u662F\u52A0\u8F7D <code>_coverpage.md</code> \u6587\u4EF6\uFF0C\u4E5F\u53EF\u4EE5\u81EA\u5B9A\u4E49\u6587\u4EF6\u540D\u3002</p><div class="language-js"><pre><code>window<span class="token punctuation">.</span>$docsify <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">coverpage</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

  <span class="token comment">// \u81EA\u5B9A\u4E49\u6587\u4EF6\u540D</span>
  <span class="token literal-property property">coverpage</span><span class="token operator">:</span> <span class="token string">&#39;cover.md&#39;</span><span class="token punctuation">,</span>

  <span class="token comment">// mutiple covers</span>
  <span class="token literal-property property">coverpage</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token comment">// mutiple covers and custom file name</span>
  <span class="token literal-property property">coverpage</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;/&#39;</span><span class="token operator">:</span> <span class="token string">&#39;cover.md&#39;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;/&#39;</span><span class="token operator">:</span> <span class="token string">&#39;cover.md&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="logo" tabindex="-1">logo <a class="header-anchor" href="#logo" aria-hidden="true">#</a></h2><ul><li>\u7C7B\u578B: <code>String</code></li></ul><p>\u5728\u4FA7\u8FB9\u680F\u4E2D\u51FA\u73B0\u7684\u7F51\u7AD9\u56FE\u6807\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528<code>CSS</code>\u6765\u66F4\u6539\u5927\u5C0F</p><div class="language-js"><pre><code>window<span class="token punctuation">.</span>$docsify <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">&#39;/_media/icon.svg&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="name" tabindex="-1">name <a class="header-anchor" href="#name" aria-hidden="true">#</a></h2><ul><li>\u7C7B\u578B\uFF1A<code>String</code></li></ul><p>\u6587\u6863\u6807\u9898\uFF0C\u4F1A\u663E\u793A\u5728\u4FA7\u8FB9\u680F\u9876\u90E8\u3002</p><div class="language-js"><pre><code>window<span class="token punctuation">.</span>$docsify <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;docsify&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="namelink" tabindex="-1">nameLink <a class="header-anchor" href="#namelink" aria-hidden="true">#</a></h2><ul><li>\u7C7B\u578B\uFF1A<code>String</code></li><li>\u9ED8\u8BA4\u503C\uFF1A<code>window.location.pathname</code></li></ul><p>\u70B9\u51FB\u6587\u6863\u6807\u9898\u540E\u8DF3\u8F6C\u7684\u94FE\u63A5\u5730\u5740\u3002</p><div class="language-js"><pre><code>window<span class="token punctuation">.</span>$docsify <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">nameLink</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>

  <span class="token comment">// \u6309\u7167\u8DEF\u7531\u5207\u6362</span>
  <span class="token literal-property property">nameLink</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;/&#39;</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;/&#39;</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="markdown" tabindex="-1">markdown <a class="header-anchor" href="#markdown" aria-hidden="true">#</a></h2><ul><li>\u7C7B\u578B: <code>Object|Function</code></li></ul><p>\u53C2\u8003 <a href="./markdown.html">Markdown \u914D\u7F6E</a>\u3002</p><div class="language-js"><pre><code>window<span class="token punctuation">.</span>$docsify <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// object</span>
  <span class="token literal-property property">markdown</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">smartypants</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">renderer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function-variable function">link</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// ...</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// function</span>
  <span class="token function-variable function">markdown</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">marked<span class="token punctuation">,</span> renderer</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
    <span class="token keyword">return</span> marked<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="themecolor" tabindex="-1">themeColor <a class="header-anchor" href="#themecolor" aria-hidden="true">#</a></h2><ul><li>\u7C7B\u578B\uFF1A<code>String</code></li></ul><p>\u66FF\u6362\u4E3B\u9898\u8272\u3002\u5229\u7528 <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables" target="_blank" rel="noopener noreferrer">CSS3 \u652F\u6301\u53D8\u91CF</a>\u7684\u7279\u6027\uFF0C\u5BF9\u4E8E\u8001\u7684\u6D4F\u89C8\u5668\u6709 polyfill \u5904\u7406\u3002</p><div class="language-js"><pre><code>window<span class="token punctuation">.</span>$docsify <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">themeColor</span><span class="token operator">:</span> <span class="token string">&#39;#3F51B5&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="alias" tabindex="-1">alias <a class="header-anchor" href="#alias" aria-hidden="true">#</a></h2><ul><li>\u7C7B\u578B\uFF1A<code>Object</code></li></ul><p>\u5B9A\u4E49\u8DEF\u7531\u522B\u540D\uFF0C\u53EF\u4EE5\u66F4\u81EA\u7531\u7684\u5B9A\u4E49\u8DEF\u7531\u89C4\u5219\u3002 \u652F\u6301\u6B63\u5219\u3002</p><div class="language-js"><pre><code>window<span class="token punctuation">.</span>$docsify <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;/foo/(+*)&#39;</span><span class="token operator">:</span> <span class="token string">&#39;/bar/$1&#39;</span><span class="token punctuation">,</span> <span class="token comment">// supports regexp</span>
    <span class="token string-property property">&#39;/changelog&#39;</span><span class="token operator">:</span> <span class="token string">&#39;/changelog&#39;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;/changelog&#39;</span><span class="token operator">:</span>
      <span class="token string">&#39;https://raw.githubusercontent.com/docsifyjs/docsify/master/CHANGELOG&#39;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;/.*/_sidebar.md&#39;</span><span class="token operator">:</span> <span class="token string">&#39;/_sidebar.md&#39;</span> <span class="token comment">// See #301</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="autoheader" tabindex="-1">autoHeader <a class="header-anchor" href="#autoheader" aria-hidden="true">#</a></h2><ul><li>\u7C7B\u578B\uFF1A<code>Boolean</code></li></ul><p>\u540C\u65F6\u8BBE\u7F6E <code>loadSidebar</code> \u548C <code>autoHeader</code> \u540E\uFF0C\u53EF\u4EE5\u6839\u636E <code>_sidebar.md</code> \u7684\u5185\u5BB9\u81EA\u52A8\u4E3A\u6BCF\u4E2A\u9875\u9762\u589E\u52A0\u6807\u9898\u3002<a href="https://github.com/docsifyjs/docsify/issues/78" target="_blank" rel="noopener noreferrer">#78</a></p><div class="language-js"><pre><code>window<span class="token punctuation">.</span>$docsify <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">loadSidebar</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">autoHeader</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="executescript" tabindex="-1">executeScript <a class="header-anchor" href="#executescript" aria-hidden="true">#</a></h2><ul><li>\u7C7B\u578B\uFF1A<code>Boolean</code></li></ul><p>\u6267\u884C\u6587\u6863\u91CC\u7684 script \u6807\u7B7E\u91CC\u7684\u811A\u672C\uFF0C\u53EA\u6267\u884C\u7B2C\u4E00\u4E2A script (<a href="./themes.html">demo</a>)\u3002 \u5982\u679C Vue \u5B58\u5728\uFF0C\u5219\u81EA\u52A8\u5F00\u542F\u3002</p><div class="language-js"><pre><code>window<span class="token punctuation">.</span>$docsify <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">executeScript</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><div class="language-markdown"><pre><code><span class="token title important"><span class="token punctuation">##</span> This is test</span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2333</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u6CE8\u610F\u5982\u679C\u6267\u884C\u7684\u662F\u4E00\u4E2A\u5916\u94FE\u811A\u672C\uFF0C\u6BD4\u5982 jsfiddle \u7684\u5185\u5D4C demo\uFF0C\u8BF7\u786E\u4FDD\u5F15\u5165 <a href="./plugins.html?id=\u5916\u94FE\u811A\u672C-external-script">external-script</a> \u63D2\u4EF6\u3002</p><h2 id="noemoji" tabindex="-1">noEmoji <a class="header-anchor" href="#noemoji" aria-hidden="true">#</a></h2><ul><li>\u7C7B\u578B: <code>Boolean</code></li></ul><p>\u7981\u7528 emoji \u89E3\u6790\u3002</p><div class="language-js"><pre><code>window<span class="token punctuation">.</span>$docsify <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">noEmoji</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="mergenavbar" tabindex="-1">mergeNavbar <a class="header-anchor" href="#mergenavbar" aria-hidden="true">#</a></h2><ul><li>\u7C7B\u578B: <code>Boolean</code></li></ul><p>\u5C0F\u5C4F\u8BBE\u5907\u4E0B\u5408\u5E76\u5BFC\u822A\u680F\u5230\u4FA7\u8FB9\u680F\u3002</p><div class="language-js"><pre><code>window<span class="token punctuation">.</span>$docsify <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mergeNavbar</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="formatupdated" tabindex="-1">formatUpdated <a class="header-anchor" href="#formatupdated" aria-hidden="true">#</a></h2><ul><li>\u7C7B\u578B: <code>String|Function</code></li></ul><p>\u6211\u4EEC\u53EF\u4EE5\u663E\u793A\u6587\u6863\u66F4\u65B0\u65E5\u671F\u901A\u8FC7 <strong>{docsify-updated<span>}</span></strong> \u53D8\u91CF. \u5E76\u4E14\u683C\u5F0F\u5316\u65E5\u671F\u901A\u8FC7 <code>formatUpdated</code>\u3002\u53C2\u8003 <a href="https://github.com/lukeed/tinydate#patterns" target="_blank" rel="noopener noreferrer">https://github.com/lukeed/tinydate#patterns</a></p><div class="language-js"><pre><code>window<span class="token punctuation">.</span>$docsify <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">formatUpdated</span><span class="token operator">:</span> <span class="token string">&#39;{MM}/{DD} {HH}:{mm}&#39;</span><span class="token punctuation">,</span>

  <span class="token function-variable function">formatUpdated</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">time</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>

    <span class="token keyword">return</span> time<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="externallinktarget" tabindex="-1">externalLinkTarget <a class="header-anchor" href="#externallinktarget" aria-hidden="true">#</a></h2><ul><li>\u7C7B\u578B: <code>String</code></li><li>\u9ED8\u8BA4: <code>_blank</code></li></ul><p>\u5F53\u524D\u9ED8\u8BA4\u4E3A _blank, \u914D\u7F6E\u4E00\u4E0B\u5C31\u53EF\u4EE5\uFF1A</p><div class="language-js"><pre><code>window<span class="token punctuation">.</span>$docsify <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">externalLinkTarget</span><span class="token operator">:</span> <span class="token string">&#39;_self&#39;</span> <span class="token comment">// default: &#39;_blank&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="routermode" tabindex="-1">routerMode <a class="header-anchor" href="#routermode" aria-hidden="true">#</a></h2><ul><li>\u7C7B\u578B: <code>String</code></li><li>\u9ED8\u8BA4: <code>hash</code></li></ul><div class="language-js"><pre><code>window<span class="token punctuation">.</span>$docsify <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">routerMode</span><span class="token operator">:</span> <span class="token string">&#39;history&#39;</span> <span class="token comment">// default: &#39;hash&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="nocompilelinks" tabindex="-1">noCompileLinks <a class="header-anchor" href="#nocompilelinks" aria-hidden="true">#</a></h2><ul><li>\u7C7B\u578B: <code>Array</code></li></ul><p>\u6709\u65F6\u6211\u4EEC\u4E0D\u5E0C\u671B docsify \u5904\u7406\u6211\u4EEC\u7684\u94FE\u63A5\u3002 \u53C2\u8003 <a href="https://github.com/docsifyjs/docsify/issues/203" target="_blank" rel="noopener noreferrer">#203</a></p><div class="language-js"><pre><code>window<span class="token punctuation">.</span>$docsify <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">noCompileLinks</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;/foo&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;/bar/.*&#39;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="requestheaders" tabindex="-1">requestHeaders <a class="header-anchor" href="#requestheaders" aria-hidden="true">#</a></h2><ul><li>\u7C7B\u578B: <code>Object</code></li></ul><p>\u8BBE\u7F6E\u8BF7\u6C42\u8D44\u6E90\u7684\u8BF7\u6C42\u5934\u3002</p><div class="language-js"><pre><code>window<span class="token punctuation">.</span>$docsify <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">requestHeaders</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;x-token&#39;</span><span class="token operator">:</span> <span class="token string">&#39;xxx&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="ext" tabindex="-1">ext <a class="header-anchor" href="#ext" aria-hidden="true">#</a></h2><ul><li>\u7C7B\u578B: <code>String</code></li></ul><p>\u8D44\u6E90\u7684\u6587\u4EF6\u6269\u5C55\u540D\u3002</p><div class="language-js"><pre><code>window<span class="token punctuation">.</span>$docsify <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">ext</span><span class="token operator">:</span> <span class="token string">&#39;.md&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="fallbacklanguages" tabindex="-1">fallbackLanguages <a class="header-anchor" href="#fallbacklanguages" aria-hidden="true">#</a></h2><ul><li>\u7C7B\u578B: <code>Array&lt;string&gt;</code></li></ul><p>\u4E00\u4E2A\u8BED\u8A00\u5217\u8868\u3002\u5728\u6D4F\u89C8\u8FD9\u4E2A\u5217\u8868\u4E2D\u7684\u8BED\u8A00\u7684\u7FFB\u8BD1\u6587\u6863\u65F6\u90FD\u4F1A\u5728\u8BF7\u6C42\u5230\u4E00\u4E2A\u5BF9\u5E94\u8BED\u8A00\u7684\u7FFB\u8BD1\u6587\u6863\u4E0D\u5B58\u5728\u65F6\u663E\u793A\u9ED8\u8BA4\u8BED\u8A00\u7684\u540C\u540D\u6587\u6863</p><p>Example:</p><ul><li>\u5C1D\u8BD5\u8BBF\u95EE<code>/de/overview</code>\uFF0C\u5982\u679C\u5B58\u5728\u5219\u663E\u793A</li><li>\u5982\u679C\u4E0D\u5B58\u5728\u5219\u5C1D\u8BD5<code>/overview</code>\uFF08\u53D6\u51B3\u4E8E\u9ED8\u8BA4\u8BED\u8A00\uFF09\uFF0C\u5982\u679C\u5B58\u5728\u5373\u663E\u793A</li><li>\u5982\u679C\u4E5F\u4E0D\u5B58\u5728\uFF0C\u663E\u793A404\u9875\u9762</li></ul><div class="language-js"><pre><code>window<span class="token punctuation">.</span>$docsify <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">fallbackLanguages</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;fr&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;de&#39;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="notfoundpage" tabindex="-1">notFoundPage <a class="header-anchor" href="#notfoundpage" aria-hidden="true">#</a></h2><ul><li>\u7C7B\u578B: <code>Boolean</code> | <code>String</code> | <code>Object</code></li></ul><p>\u5728\u627E\u4E0D\u5230\u6307\u5B9A\u9875\u9762\u65F6\u52A0\u8F7D<code>_404.md</code>:</p><div class="language-js"><pre><code>window<span class="token punctuation">.</span>$docsify <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">notFoundPage</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>\u52A0\u8F7D\u81EA\u5B9A\u4E49404\u9875\u9762:</p><div class="language-js"><pre><code>window<span class="token punctuation">.</span>$docsify <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">notFoundPage</span><span class="token operator">:</span> <span class="token string">&#39;my404.md&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>\u52A0\u8F7D\u6B63\u786E\u7684\u672C\u5730\u5316\u8FC7\u7684404\u9875\u9762:</p><div class="language-js"><pre><code>window<span class="token punctuation">.</span>$docsify <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">notFoundPage</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;/&#39;</span><span class="token operator">:</span> <span class="token string">&#39;_404.md&#39;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;/de&#39;</span><span class="token operator">:</span> <span class="token string">&#39;de/_404.md&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><blockquote><p>\u6CE8\u610F: \u914D\u7F6E\u8FC7<code>fallbackLanguages</code>\u8FD9\u4E2A\u9009\u9879\u7684\u9875\u9762\u4E0E\u8FD9\u4E2A\u9009\u9879<code>notFoundPage</code>\u51B2\u7A81\u3002</p></blockquote>`,123),o=[t];function c(l,r,i,u,d,k){return s(),n("div",null,o)}var m=a(p,[["render",c]]);export{h as __pageData,m as default};
