import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o,c,d as n,e as s,b as l,f as a}from"./app-b5ee7ff2.js";const i={},r=a(`<p><code>runtime-compiler</code> 与 <code>runtime-only</code> 区别，<code>runtime-only</code> 的性能更好，代码量更少（使用两种方式创建项目的时候，compiler 比 only 要大）。</p><blockquote><ol><li><p>runtime-compiler 的处理过程</p><p>vm.options.template —[parse]—&gt; AST(抽象语法树) —[compile]—&gt; vm.options.render(functions) —[render]—&gt; virtual dom(虚拟 DOM) —[update]—&gt; UI</p></li><li><p>runtime-only 的处理过程</p><p>render -&gt; vdom -&gt; UI</p></li></ol></blockquote><p>使用 runtime-only 的写法</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// main.js</span>
<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">h</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 runtime-compiler 的写法</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// main.js</span>
<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;&lt;App/&gt;&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> App <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>runtime-only 中的函数 h，实际上是 createElement 函数。所以上面这种写法可以改成如下</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// createElement 的一种用法: createElement(&#39;标签&#39;,{标签的属性},[内容])</span>
<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">createElement</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 创建一个 &lt;h1 class=&quot;box&quot;&gt;Hello World&lt;/h1&gt; 替换掉app挂载的元素</span>
    <span class="token keyword">return</span> <span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;h1&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token keyword">class</span><span class="token operator">:</span> <span class="token string">&#39;box&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;Hello World&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">/*
     * 因为内容是个数组，所以可以这么写来实现嵌套
     * return createElement(&#39;h1&#39;, {class: &#39;box&#39;}, [&#39;Hello World&#39;, createElement(&#39;button&#39;,[&#39;按钮&#39;])])
     */</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// createElement 还能接受一个组件作为参数</span>
<span class="token keyword">import</span> cpn <span class="token keyword">from</span> <span class="token string">&#39;./cpn&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">createElement</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// createElement的用法: createElement(组件)。如果将组件 cpn 换成 App，其实就跟 runtime-only 的写法是一样的了</span>
    <span class="token keyword">return</span> <span class="token function">createElement</span><span class="token punctuation">(</span>cpn<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),u={href:"https://cn.vuejs.org/v2/guide/render-function.html#createElement-%E5%8F%82%E6%95%B0",target:"_blank",rel:"noopener noreferrer"},d=a("<p>在<code>runtime-only</code>中是没有<code>runtime-compiler</code>前面从<code>template —&gt; AST</code>的处理过程，那<code>*.vue</code>文件中的 template 是由谁处理的呢？<br> —— 由 package.json 中<code>devDependencies</code>引入的<code>vue-template-compiler</code>插件完成的</p>",1);function k(m,v){const e=p("ExternalLinkIcon");return o(),c("div",null,[r,n("p",null,[s("更多关于 createElement 的内容，请见"),n("a",u,[s("官方文档"),l(e)])]),d])}const y=t(i,[["render",k],["__file","Runtime.html.vue"]]);export{y as default};