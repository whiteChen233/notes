"use strict";(self.webpackChunknote=self.webpackChunknote||[]).push([[1695],{294:(n,e,s)=>{s.r(e),s.d(e,{default:()=>c});var a=s(6252);const t=(0,a.uE)('<p><code>runtime-compiler</code> 与 <code>runtime-only</code> 区别，<code>runtime-only</code> 的性能更好，代码量更少（使用两种方式创建项目的时候，compiler 比 only 要大）。</p><blockquote><ol><li><p>runtime-compiler的处理过程</p><p>vm.options.template —[parse]—&gt; AST(抽象语法树) —[compile]—&gt; vm.options.render(functions) —[render]—&gt; virtual dom(虚拟DOM) —[update]—&gt; UI</p></li><li><p>runtime-only的处理过程</p><p>render -&gt; vdom -&gt; UI</p></li></ol></blockquote><p>使用 runtime-only 的写法</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// main.js</span>\n<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>\n  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token parameter">h</span> <span class="token operator">=&gt;</span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 runtime-compiler 的写法</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// main.js</span>\n<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;&lt;App/&gt;&#39;</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> App <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>runtime-only 中的函数 h，实际上是 createElement 函数。所以上面这种写法可以改成如下</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// createElement 的一种用法: createElement(&#39;标签&#39;,{标签的属性},[内容])</span>\n<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>\n  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token parameter">createElement</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 创建一个 &lt;h1 class=&quot;box&quot;&gt;Hello World&lt;/h1&gt; 替换掉app挂载的元素</span>\n    <span class="token keyword">return</span> <span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;h1&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token keyword">class</span><span class="token operator">:</span> <span class="token string">&#39;box&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;Hello World&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n    <span class="token comment">/*\n     * 因为内容是个数组，所以可以这么写来实现嵌套\n     * return createElement(&#39;h1&#39;, {class: &#39;box&#39;}, [&#39;Hello World&#39;, createElement(&#39;button&#39;,[&#39;按钮&#39;])])\n     */</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token comment">// createElement 还能接受一个组件作为参数</span>\n<span class="token keyword">import</span> cpn <span class="token keyword">from</span> <span class="token string">&#39;./cpn&#39;</span>\n<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>\n  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token parameter">createElement</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token comment">// createElement的用法: createElement(组件)。如果将组件 cpn 换成 App，其实就跟 runtime-only 的写法是一样的了</span>\n    <span class="token keyword">return</span> <span class="token function">createElement</span><span class="token punctuation">(</span>cpn<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',8),p={href:"https://cn.vuejs.org/v2/guide/render-function.html#createElement-%E5%8F%82%E6%95%B0",target:"_blank",rel:"noopener noreferrer"},o=(0,a.uE)("<p>在<code>runtime-only</code>中是没有<code>runtime-compiler</code>前面从<code>template —&gt; AST</code>的处理过程，那<code>*.vue</code>文件中的 template 是由谁处理的呢？<br> —— 由 package.json 中<code>devDependencies</code>引入的<code>vue-template-compiler</code>插件完成的</p>",1),l={},c=(0,s(3744).Z)(l,[["render",function(n,e){const s=(0,a.up)("ExternalLinkIcon");return(0,a.wg)(),(0,a.iD)("div",null,[t,(0,a._)("p",null,[(0,a.Uk)("更多关于 createElement 的内容，请见"),(0,a._)("a",p,[(0,a.Uk)("官方文档"),(0,a.Wm)(s)])]),o])}]])},3744:(n,e)=>{e.Z=(n,e)=>{const s=n.__vccOpts||n;for(const[n,a]of e)s[n]=a;return s}},9185:(n,e,s)=>{s.r(e),s.d(e,{data:()=>a});const a=JSON.parse('{"key":"v-e4e6b34a","path":"/zh/programmer/front-end/Vue2/Runtime.html","title":"Vue程序运行过程","lang":"zh-CN","frontmatter":{"title":"Vue程序运行过程","date":"2021-07-17T00:00:00.000Z","summary":"runtime-compiler 与 runtime-only 区别，runtime-only 的性能更好，代码量更少（使用两种方式创建项目的时候，compiler 比 only 要大）。 \\" 1. runtime-compiler的处理过程\\" \\"\\" \\" vm.options.template —[parse]—> AST(抽象语法树) —[compile]","head":[["meta",{"property":"og:url","content":"https://whiteChen233/whitechen233.github.io/zh/programmer/front-end/Vue2/Runtime.html"}],["meta",{"property":"og:site_name","content":"温故而知新~"}],["meta",{"property":"og:title","content":"Vue程序运行过程"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-10-29T08:29:18.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"article:published_time","content":"2021-07-17T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-10-29T08:29:18.000Z"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://whiteChen233/whitechen233.github.io/en/programmer/front-end/Vue2/Runtime.html"}]]},"excerpt":"","headers":[],"git":{"createdTime":1667032158000,"updatedTime":1667032158000,"contributors":[{"name":"White","email":"294476387@qq.com","commits":1}]},"readingTime":{"minutes":1.25,"words":374},"filePathRelative":"zh/programmer/front-end/Vue2/Runtime.md","localizedDate":"2021年7月17日"}')}}]);