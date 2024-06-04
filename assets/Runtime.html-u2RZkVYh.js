import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as e,d as n}from"./app-DCU_uPn0.js";const a={},t=n(`<p><code>runtime-compiler</code> 与 <code>runtime-only</code> 区别，<code>runtime-only</code> 的性能更好，代码量更少（使用两种方式创建项目的时候，compiler 比 only 要大）。</p><blockquote><ol><li><p>runtime-compiler 的处理过程</p><p>vm.options.template —[parse]—&gt; AST(抽象语法树) —[compile]—&gt; vm.options.render(functions) —[render]—&gt; virtual dom(虚拟 DOM) —[update]—&gt; UI</p></li><li><p>runtime-only 的处理过程</p><p>render -&gt; vdom -&gt; UI</p></li></ol></blockquote><p>使用 runtime-only 的写法</p><div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" data-title="javascript" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// main.js</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> Vue</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  el</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;#app&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">  render</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: (</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">h</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> h</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">App</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 runtime-compiler 的写法</p><div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" data-title="javascript" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// main.js</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> Vue</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  el</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;#app&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  template</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;&lt;App/&gt;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  components</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: { </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">App</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>runtime-only 中的函数 h，实际上是 createElement 函数。所以上面这种写法可以改成如下</p><div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" data-title="javascript" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// createElement 的一种用法: createElement(&#39;标签&#39;,{标签的属性},[内容])</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> Vue</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  el</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;#app&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">  render</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: (</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">createElement</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">    // 创建一个 &lt;h1 class=&quot;box&quot;&gt;Hello World&lt;/h1&gt; 替换掉app挂载的元素</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> createElement</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;h1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, { </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">class</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;box&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> }, [</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;Hello World&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">]);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">    /*</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">     * 因为内容是个数组，所以可以这么写来实现嵌套</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">     * return createElement(&#39;h1&#39;, {class: &#39;box&#39;}, [&#39;Hello World&#39;, createElement(&#39;button&#39;,[&#39;按钮&#39;])])</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">     */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">});</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// createElement 还能接受一个组件作为参数</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> cpn</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> from</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;./cpn&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> Vue</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  el</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;#app&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">  render</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: (</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">createElement</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">    // createElement的用法: createElement(组件)。如果将组件 cpn 换成 App，其实就跟 runtime-only 的写法是一样的了</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> createElement</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">cpn</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更多关于 createElement 的内容，请见<a href="https://cn.vuejs.org/v2/guide/render-function.html#createElement-%E5%8F%82%E6%95%B0" target="_blank" rel="noopener noreferrer">官方文档</a></p><p>在<code>runtime-only</code>中是没有<code>runtime-compiler</code>前面从<code>template —&gt; AST</code>的处理过程，那<code>*.vue</code>文件中的 template 是由谁处理的呢？<br> —— 由 package.json 中<code>devDependencies</code>引入的<code>vue-template-compiler</code>插件完成的</p>`,10),l=[t];function h(p,r){return e(),s("div",null,l)}const o=i(a,[["render",h],["__file","Runtime.html.vue"]]),c=JSON.parse('{"path":"/docs/note/front-end/Vue2/Runtime.html","title":"Vue 程序运行过程","lang":"zh-CN","frontmatter":{"title":"Vue 程序运行过程","date":"2021-07-17T00:00:00.000Z","description":"runtime-compiler 与 runtime-only 区别，runtime-only 的性能更好，代码量更少（使用两种方式创建项目的时候，compiler 比 only 要大）。 runtime-compiler 的处理过程 vm.options.template —[parse]—> AST(抽象语法树) —[compile]—> vm.o...","head":[["meta",{"property":"og:url","content":"https://blog.white233.top/docs/note/front-end/Vue2/Runtime.html"}],["meta",{"property":"og:site_name","content":"温故而知新~"}],["meta",{"property":"og:title","content":"Vue 程序运行过程"}],["meta",{"property":"og:description","content":"runtime-compiler 与 runtime-only 区别，runtime-only 的性能更好，代码量更少（使用两种方式创建项目的时候，compiler 比 only 要大）。 runtime-compiler 的处理过程 vm.options.template —[parse]—> AST(抽象语法树) —[compile]—> vm.o..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-21T02:14:43.000Z"}],["meta",{"property":"article:author","content":"White"}],["meta",{"property":"article:published_time","content":"2021-07-17T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-21T02:14:43.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Vue 程序运行过程\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-07-17T00:00:00.000Z\\",\\"dateModified\\":\\"2023-09-21T02:14:43.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"White\\",\\"url\\":\\"https://blog.white233.top\\",\\"email\\":\\"white996@qq.com\\"}]}"]]},"headers":[],"git":{"createdTime":1626455424000,"updatedTime":1695262483000,"contributors":[{"name":"white","email":"294476387@qq.com","commits":1}]},"readingTime":{"minutes":1.22,"words":365},"filePathRelative":"docs/note/front-end/Vue2/Runtime.md","localizedDate":"2021年7月17日","excerpt":"<p><code>runtime-compiler</code> 与 <code>runtime-only</code> 区别，<code>runtime-only</code> 的性能更好，代码量更少（使用两种方式创建项目的时候，compiler 比 only 要大）。</p>\\n<blockquote>\\n<ol>\\n<li>\\n<p>runtime-compiler 的处理过程</p>\\n<p>vm.options.template —[parse]—&gt; AST(抽象语法树) —[compile]—&gt; vm.options.render(functions) —[render]—&gt; virtual dom(虚拟 DOM) —[update]—&gt; UI</p>\\n</li>\\n<li>\\n<p>runtime-only 的处理过程</p>\\n<p>render -&gt; vdom -&gt; UI</p>\\n</li>\\n</ol>\\n</blockquote>","autoDesc":true}');export{o as comp,c as data};
