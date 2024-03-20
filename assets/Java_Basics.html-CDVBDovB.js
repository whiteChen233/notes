import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as c,c as i,e as s,h as a,b as o,d as n}from"./app-C4dKL-GA.js";const p={},d=n('<h2 id="java-语言的特点" tabindex="-1"><a class="header-anchor" href="#java-语言的特点"><span>Java 语言的特点</span></a></h2><ul><li>是一种面向对象的语言</li><li>平台无关性(Java 虚拟机从底层屏蔽了硬件差别, 实现平台无关性)</li><li>支持网络编程</li><li>支持多线程</li><li>具有较高的可靠性和安全性</li></ul><h3 id="java-与-c-的区别" tabindex="-1"><a class="header-anchor" href="#java-与-c-的区别"><span>Java 与 C++ 的区别</span></a></h3><p>Java 和 C++ 都是面向对象语言, 都支持封装、继承、多态</p><ul><li>Java 通过虚拟机实现跨平台特性; C++ 依赖特定的平台</li><li>Java 支持自动垃圾回收; C++ 需要手动回收</li><li>Java 没有指针, 更加安全; C++ 具有和 C 一样的指针</li><li>Java 不支持多继承, 只能通过实现多个接口来达到相同目的; C++ 支持多继承</li><li>Java 只支持方法重载(操作符重载增加了复杂性, 这与 Java 的设计思想不符); C++ 支持方法重载和操作符重载</li></ul><h3 id="接口和抽象类的区别" tabindex="-1"><a class="header-anchor" href="#接口和抽象类的区别"><span>接口和抽象类的区别</span></a></h3><p><strong>共同点</strong>:</p><ul><li>都不能被实例化</li><li>都可以包含抽象方法</li><li>都可以包含默认实现的方法(JDK 1.8 可以用 <code>default</code> 声明默认方法)</li></ul><p><strong>不同点</strong>:</p><ul><li>接口主要用于对类的行为进行约束, 实现某个接口就具有了对应的行为. 抽象类主要用于代码复用, 强调的是所属关系</li><li>一个类只能继承一个类, 但是可以实现多个接口</li><li>接口中的成员变量只能被 <code>publi static final</code> 修饰, 它不能被修改且必须有初始值, 而抽象类的成员变量默认 default, 在子类中可以被重新定义以及重新赋值</li><li>把系统中很多类的共同特性拿出来进行封装, 变成了一个抽象类</li></ul><blockquote><p><strong>接口是自上而下的; 抽象是自下而上的</strong></p></blockquote><h2 id="java-的数据类型" tabindex="-1"><a class="header-anchor" href="#java-的数据类型"><span>Java 的数据类型</span></a></h2><h3 id="基本数据类型-primitive-type" tabindex="-1"><a class="header-anchor" href="#基本数据类型-primitive-type"><span>基本数据类型(primitive type)</span></a></h3><p>Java 语言提供了八种基本类型, 六种数字类型(四个整型、两个浮点型), 一种字符类型, 一种布尔类型</p>',14),r=s("table",null,[s("thead",null,[s("tr",null,[s("th",null,"类型"),s("th",null,"关键字"),s("th",null,"包装类"),s("th",null,"占用内存(字节)"),s("th",null,"位数"),s("th",null,"取值范围"),s("th",null,"默认值")])]),s("tbody",null,[s("tr",null,[s("td",null,"字节型"),s("td",null,"byte"),s("td",null,"Byte"),s("td",null,"1"),s("td",null,"8"),s("td",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mo",null,"−"),s("msup",null,[s("mn",null,"2"),s("mn",null,"7")])]),s("annotation",{encoding:"application/x-tex"},"-2^7")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8974em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},"−"),s("span",{class:"mord"},[s("span",{class:"mord"},"2"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"7")])])])])])])])])])]),a("~"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msup",null,[s("mn",null,"2"),s("mn",null,"7")]),s("mo",null,"−"),s("mn",null,"1")]),s("annotation",{encoding:"application/x-tex"},"2^7-1")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8974em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"2"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"7")])])])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"1")])])])]),s("td",null,"0")]),s("tr",null,[s("td",null,"短整型"),s("td",null,"short"),s("td",null,"Short"),s("td",null,"2"),s("td",null,"16"),s("td",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mo",null,"−"),s("msup",null,[s("mn",null,"2"),s("mn",null,"15")])]),s("annotation",{encoding:"application/x-tex"},"-2^{15}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8974em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},"−"),s("span",{class:"mord"},[s("span",{class:"mord"},"2"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"15")])])])])])])])])])])]),a("~"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msup",null,[s("mn",null,"2"),s("mn",null,"15")]),s("mo",null,"−"),s("mn",null,"1")]),s("annotation",{encoding:"application/x-tex"},"2^{15}-1")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8974em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"2"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"15")])])])])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"1")])])])]),s("td",null,"0")]),s("tr",null,[s("td",null,"整型"),s("td",null,"int"),s("td",null,"Integer"),s("td",null,"4"),s("td",null,"32"),s("td",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mo",null,"−"),s("msup",null,[s("mn",null,"2"),s("mn",null,"31")])]),s("annotation",{encoding:"application/x-tex"},"-2^{31}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8974em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},"−"),s("span",{class:"mord"},[s("span",{class:"mord"},"2"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"31")])])])])])])])])])])]),a("~"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msup",null,[s("mn",null,"2"),s("mn",null,"31")]),s("mo",null,"−"),s("mn",null,"1")]),s("annotation",{encoding:"application/x-tex"},"2^{31}-1")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8974em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"2"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"31")])])])])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"1")])])])]),s("td",null,"0")]),s("tr",null,[s("td",null,"长整型"),s("td",null,"long"),s("td",null,"Long"),s("td",null,"8"),s("td",null,"64"),s("td",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mo",null,"−"),s("msup",null,[s("mn",null,"2"),s("mn",null,"63")])]),s("annotation",{encoding:"application/x-tex"},"-2^{63}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8974em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},"−"),s("span",{class:"mord"},[s("span",{class:"mord"},"2"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"63")])])])])])])])])])])]),a("~"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msup",null,[s("mn",null,"2"),s("mn",null,"63")]),s("mo",null,"−"),s("mn",null,"1")]),s("annotation",{encoding:"application/x-tex"},"2^{63}-1")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8974em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"2"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"63")])])])])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"1")])])])]),s("td",null,"0L")]),s("tr",null,[s("td",null,"单精度浮点型"),s("td",null,"float"),s("td",null,"Float"),s("td",null,"4"),s("td",null,"32"),s("td"),s("td",null,"0.0F")]),s("tr",null,[s("td",null,"双精度浮点字节型"),s("td",null,"double"),s("td",null,"Double"),s("td",null,"8"),s("td",null,"64"),s("td"),s("td",null,"0.0D")]),s("tr",null,[s("td",null,"字符型"),s("td",null,"char"),s("td",null,"Character"),s("td",null,"2"),s("td",null,"16"),s("td",null,[a("0~"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msup",null,[s("mn",null,"2"),s("mn",null,"16")]),s("mo",null,"−"),s("mn",null,"1")]),s("annotation",{encoding:"application/x-tex"},"2^{16}-1")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8974em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"2"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"16")])])])])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"1")])])])]),s("td",null,"'u0000'")]),s("tr",null,[s("td",null,"布尔型"),s("td",null,"boolean"),s("td",null,"Boolean"),s("td"),s("td",null,"1"),s("td",null,"true/false"),s("td",null,"false")])])],-1),u=n(`<h4 id="隐式-自动-类型转换和显示-强制-类型转换" tabindex="-1"><a class="header-anchor" href="#隐式-自动-类型转换和显示-强制-类型转换"><span>隐式(自动)类型转换和显示(强制)类型转换</span></a></h4><ul><li>隐式(自动)类型转换: 从存储范围小的类型到存储范围大的类型 <ul><li><code>byte</code> -&gt; <code>short(char)</code> -&gt; <code>int</code> -&gt; <code>long</code> -&gt; <code>float</code> -&gt; <code>double</code></li></ul></li><li>显示(强制)类型转换: 从存储范围大的类型到存储范围小的类型 <ul><li><code>double</code> -&gt; <code>float</code> -&gt; <code>long</code> -&gt; <code>int</code> -&gt; <code>short(char)</code> -&gt; <code>byte</code></li><li>从大存储范围转换到小存储范围很可能存在精度的损失</li></ul></li><li><code>boolean</code> 不能进行转换</li></ul><h4 id="自动装箱与拆箱" tabindex="-1"><a class="header-anchor" href="#自动装箱与拆箱"><span>自动装箱与拆箱</span></a></h4><ul><li>装箱: 将基本类型用包装类型包装起来</li><li>拆箱: 将包装类型转换为基本类型</li></ul><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Integer</span> i <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>     <span class="token comment">// 装箱 ==&gt; Integer i = Integer.valueOf(10);</span>
    <span class="token keyword">int</span> a <span class="token operator">=</span> i<span class="token punctuation">;</span>          <span class="token comment">// 拆箱 ==&gt; Integer a = i.intValue();</span>

    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>        <span class="token comment">// 装箱</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>为什么需要自动装箱与拆箱呢?</p><p>把基本类型包装成类, 一方面可以使这个类型具有很多可以调用的方法; 另一方面 Java 是面向对象语言, 基本类型不符合面向对象的操作逻辑</p></blockquote><p>自动装箱都是调用包装类的 <code>valueOf()</code> 方法实现的; 而自动拆箱都是调用包装类型对应的 <code>xxxValue()</code> 方法实现的</p><div class="hint-container caution"><p class="hint-container-title">警告</p><p>如果频繁拆装箱的话, 也会严重影响系统的性能, <strong>所以我们应该尽量避免不必要的拆装箱操作</strong></p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">long</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 应该使用 long 而不是 Long</span>
    <span class="token class-name">Long</span> sum <span class="token operator">=</span> <span class="token number">0L</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">long</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token constant">MAX_VALUE</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
        sum <span class="token operator">+=</span> i<span class="token punctuation">;</span>
    <span class="token keyword">return</span> sum<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h4 id="cache-机制" tabindex="-1"><a class="header-anchor" href="#cache-机制"><span>Cache 机制</span></a></h4><p>Java 基本数据类型的包装类中大部分都用到了缓存机制来提升性能</p><p><code>Byte</code>、<code>Short</code>、<code>Integer</code>、<code>Long</code>、<code>Character</code> 这几个包装类都有一个 <code>xxxCache</code> 的内部类, <code>Boolean</code> 直接定义了 <code>TRUE</code> 和 <code>FALSE</code>, 而 <code>Float</code> 和 <code>Double</code> 没有实现这个机制</p><p>其中 <code>Byte</code>、<code>Short</code>、<code>Integer</code>、<code>Long</code> 的取值范围都是 <code>[-128, 127]</code>, <code>Character</code> 的取值范围是 <code>[0, 127]</code></p><h3 id="引用数据类型-reference-type" tabindex="-1"><a class="header-anchor" href="#引用数据类型-reference-type"><span>引用数据类型(reference type)</span></a></h3><p>引用数据类型是建立在八大基本数据类型基础之上，包括数组([])、接口(interface)、类(Class)</p><h4 id="如何区分基本类型和引用类型" tabindex="-1"><a class="header-anchor" href="#如何区分基本类型和引用类型"><span>如何区分基本类型和引用类型</span></a></h4><ul><li>基本类型不能赋值为 null, 而引用类型可以</li><li>基本类型都有其对应的引用类型</li><li>引用类型都需要通过 new 关键字来创建</li><li>引用类型不能使用 <code>+</code> <code>-</code> <code>*</code> <code>/</code> <code>%</code> 数学运算</li></ul><h2 id="关键字" tabindex="-1"><a class="header-anchor" href="#关键字"><span>关键字</span></a></h2><p>Java 语言为关键字赋予了特殊含义, 用作专门用途的字符串(单词), 这些关键字不能用于常量、变量、和任何标识符的名称</p>`,18),m={href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/_keywords.html",target:"_blank",rel:"noopener noreferrer"},h=n(`<blockquote><p><code>true</code>、<code>false</code> 和 <code>null</code> 可能看起来像关键字, 但它们实际上是字面量</p></blockquote><h3 id="分类" tabindex="-1"><a class="header-anchor" href="#分类"><span>分类</span></a></h3><p>可以根据适用场景对关键字进行简单的分类</p><h4 id="访问控制" tabindex="-1"><a class="header-anchor" href="#访问控制"><span>访问控制</span></a></h4><table><thead><tr><th>关键字</th><th>含义</th><th>备注</th></tr></thead><tbody><tr><td>public</td><td>公有的</td><td>都可用</td></tr><tr><td>protected</td><td>受保护的</td><td>当前包内可用</td></tr><tr><td>private</td><td>私有的</td><td>当前类可用</td></tr></tbody></table><h4 id="声明类以及类关系" tabindex="-1"><a class="header-anchor" href="#声明类以及类关系"><span>声明类以及类关系</span></a></h4><table><thead><tr><th>关键字</th><th>含义</th></tr></thead><tbody><tr><td>class</td><td>声明类</td></tr><tr><td>interface</td><td>声明接口</td></tr><tr><td>abstract</td><td>声明抽象类</td></tr><tr><td>enum</td><td>声明枚举类</td></tr><tr><td>implements</td><td>声明实现关系</td></tr><tr><td>extends</td><td>声明继承关系</td></tr><tr><td>new</td><td>创建新对象</td></tr></tbody></table><p>还有一些可以用于修饰类、方法或者变量的: <code>final</code>、<code>static</code>、<code>synchronized</code>、<code>transient</code>、<code>volatile</code>、<code>strictfp</code>、<code>native</code></p><p>变量引用: <code>this</code>、<code>super</code></p><h4 id="包相关" tabindex="-1"><a class="header-anchor" href="#包相关"><span>包相关</span></a></h4><ul><li>package: 定义包</li><li>import: 引入依赖包</li></ul><h4 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型"><span>数据类型</span></a></h4><ul><li>8种基本数据类型: <code>byte</code>、<code>short</code>、<code>int</code>、<code>long</code>、<code>float</code>、<code>double</code>、<code>char</code>、<code>boolean</code></li><li>空返回值: <code>void</code></li></ul><h4 id="流程控制-异常处理" tabindex="-1"><a class="header-anchor" href="#流程控制-异常处理"><span>流程控制&amp;异常处理</span></a></h4><ul><li>流程控制: <code>break</code>、<code>continue</code>、<code>return</code>、<code>do</code>、<code>while</code>、<code>if</code>、<code>else</code>、<code>for</code>、<code>instanceof</code>、<code>switch</code>、<code>case</code>、<code>default</code>、<code>assert</code></li><li>异常处理: <code>try</code>、<code>catch</code>、<code>throw</code>、<code>throws</code>、<code>finally</code></li></ul><h4 id="保留字" tabindex="-1"><a class="header-anchor" href="#保留字"><span>保留字</span></a></h4><p><code>goto</code>、<code>const</code></p><h2 id="string" tabindex="-1"><a class="header-anchor" href="#string"><span>String</span></a></h2><p>在 JDK 1.8 中, <code>String</code> 内部使用 <code>char[]</code> 存储数据, 并且被声明为 <code>final</code>, 所以它不能被继承</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name">String</span>
    <span class="token keyword">implements</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span>Serializable</span><span class="token punctuation">,</span> <span class="token class-name">Comparable</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">,</span> <span class="token class-name">CharSequence</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">char</span> value<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="string-的不可变" tabindex="-1"><a class="header-anchor" href="#string-的不可变"><span>String 的不可变</span></a></h3><h4 id="为什么-string-不可变" tabindex="-1"><a class="header-anchor" href="#为什么-string-不可变"><span>为什么 String 不可变</span></a></h4><ul><li>保存字符串的数组是被 <code>final</code> 修饰且为私有的, 并且 <code>String</code> 类没有提供修改这个变量的方法</li><li><code>String</code> 类被 <code>final</code> 修饰使其不能被继承, 从而避免子类破坏 <code>String</code> 不可变</li></ul><h4 id="为什么-string-要设计成不可变" tabindex="-1"><a class="header-anchor" href="#为什么-string-要设计成不可变"><span>为什么 String 要设计成不可变</span></a></h4><ul><li>可以缓存 <code>hash</code> 值: 因为 <code>String</code> 的 <code>hash</code> 值经常被使用(例如把 <code>String</code> 用做 <code>HashMap</code> 的 key), 不可变性保证了 <code>hash</code> 值不会发生变化</li><li>常量池优化: <code>String</code> 对象创建之后, 会在字符串常量池中进行缓存, 如果下次创建同样的对象, 会直接返回缓存的引用</li><li>线程安全: 不可变性天生具备线程安全性, 可以在多线程中安全地使用</li></ul><h3 id="字符串常量池" tabindex="-1"><a class="header-anchor" href="#字符串常量池"><span>字符串常量池</span></a></h3><p>字符串常量池位于堆内存中, 专门用来存储字符串常量的引用, 可以提高内存利用率, 避免开辟多快空间存储相同的字符串, 在创建字符串时 JVM 会先检查字符串常量池, 如果该字符串已经存在池中, 则返回它的引用, 如果不存在, 则会实例化一个字符串放入池中, 再返回它的引用</p><h4 id="string-intern-方法" tabindex="-1"><a class="header-anchor" href="#string-intern-方法"><span>String#intern 方法</span></a></h4><p><code>String.intern()</code> 是一个 native 方法, 其作用是将指定的字符串对象的引用保存到字符串常量池中, 如果字符串常量池存在该字符串对象的引用, 就直接返回; 如果字符串常量池中没有保存对应的字符串对象的引用, 那就创建一个指向该字符串对象的引用并返回</p><h3 id="string-和-stringbuffer-以及-stringbuilder-的区别" tabindex="-1"><a class="header-anchor" href="#string-和-stringbuffer-以及-stringbuilder-的区别"><span>String 和 StringBuffer 以及 StringBuilder 的区别</span></a></h3><p><code>StringBuilder</code> 和 <code>StringBuffer</code> 都继承自 <code>AbstractStringBuilder</code> 类, <code>AbstractStringBuilder</code> 底层是使用字符数组来保存字符串的, 并且没有 <code>final</code> 和 <code>private</code> 修饰, 而且这个类本身也提供了很多修改字符串的方法</p><ul><li>不变性: String 不可变, StringBuffer 和 StringBuilder 是可变的</li><li>线程安全性: String 不可变, 肯定是线程安全的; StringBuilder 通过对方法添加同步锁或者对调用的方法添加同步锁, 也是线程安全的; StringBuilder 没有对方法加锁, 所以线程不安全</li><li>性能: <code>StirngBuffer &gt; StringBuilder &gt; String</code></li></ul><p>关于三者的适用场景:</p><ul><li>操作少量的数据, 适合 <code>String</code></li><li>单线程操作字符串缓冲区下操作大量数据, 适用 <code>StringBuilder</code></li><li>多线程操作字符串缓冲区下操作大量数据, 适用 <code>StringBuffer</code></li></ul><h2 id="object" tabindex="-1"><a class="header-anchor" href="#object"><span>Object</span></a></h2><h3 id="object-常见方法" tabindex="-1"><a class="header-anchor" href="#object-常见方法"><span>Object 常见方法</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * native 方法，用于返回当前运行时对象的 Class 对象，使用了 final 关键字修饰，故不允许子类重写。
 */</span>
<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">native</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> <span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token doc-comment comment">/**
 * native 方法，用于返回对象的哈希码，主要使用在哈希表中，比如 JDK 中的HashMap。
 */</span>
<span class="token keyword">public</span> <span class="token keyword">native</span> <span class="token keyword">int</span> <span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token doc-comment comment">/**
 * 用于比较 2 个对象的内存地址是否相等，String 类对该方法进行了重写以用于比较字符串的值是否相等。
 */</span>
<span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">equals</span><span class="token punctuation">(</span><span class="token class-name">Object</span> obj<span class="token punctuation">)</span>
<span class="token doc-comment comment">/**
 * native 方法，用于创建并返回当前对象的一份拷贝。
 */</span>
<span class="token keyword">protected</span> <span class="token keyword">native</span> <span class="token class-name">Object</span> <span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">CloneNotSupportedException</span>
<span class="token doc-comment comment">/**
 * 返回类的名字实例的哈希码的 16 进制的字符串。建议 Object 所有的子类都重写这个方法。
 */</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token doc-comment comment">/**
 * native 方法，并且不能重写。唤醒一个在此对象监视器上等待的线程(监视器相当于就是锁的概念)。如果有多个线程在等待只会任意唤醒一个。
 */</span>
<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">native</span> <span class="token keyword">void</span> <span class="token function">notify</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token doc-comment comment">/**
 * native 方法，并且不能重写。跟 notify 一样，唯一的区别就是会唤醒在此对象监视器上等待的所有线程，而不是一个线程。
 */</span>
<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">native</span> <span class="token keyword">void</span> <span class="token function">notifyAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token doc-comment comment">/**
 * native方法，并且不能重写。暂停线程的执行。注意：sleep 方法没有释放锁，而 wait 方法释放了锁 ，timeout 是等待时间。
 */</span>
<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">native</span> <span class="token keyword">void</span> <span class="token function">wait</span><span class="token punctuation">(</span><span class="token keyword">long</span> timeout<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span>
<span class="token doc-comment comment">/**
 * 多了 nanos 参数，这个参数表示额外时间（以纳秒为单位，范围是 0-999999）。 所以超时的时间还需要加上 nanos 纳秒。。
 */</span>
<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">void</span> <span class="token function">wait</span><span class="token punctuation">(</span><span class="token keyword">long</span> timeout<span class="token punctuation">,</span> <span class="token keyword">int</span> nanos<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span>
<span class="token doc-comment comment">/**
 * 跟之前的2个wait方法一样，只不过该方法一直等待，没有超时时间这个概念
 */</span>
<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">void</span> <span class="token function">wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span>
<span class="token doc-comment comment">/**
 * 实例被垃圾回收器回收的时候触发的操作
 */</span>
<span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">finalize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Throwable</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="hashcode-和-equals" tabindex="-1"><a class="header-anchor" href="#hashcode-和-equals"><span>hashCode 和 equals</span></a></h3>`,38);function v(k,g){const e=l("ExternalLinkIcon");return c(),i("div",null,[d,r,u,s("p",null,[s("a",m,[a("JDK 8 的官方文档"),o(e)])]),h])}const w=t(p,[["render",v],["__file","Java_Basics.html.vue"]]),f=JSON.parse('{"path":"/docs/note/back-end/java/Java_Basics.html","title":"Java 基础","lang":"zh-CN","frontmatter":{"title":"Java 基础","date":"2024-03-14T00:00:00.000Z","description":"Java 语言的特点 是一种面向对象的语言 平台无关性(Java 虚拟机从底层屏蔽了硬件差别, 实现平台无关性) 支持网络编程 支持多线程 具有较高的可靠性和安全性 Java 与 C++ 的区别 Java 和 C++ 都是面向对象语言, 都支持封装、继承、多态 Java 通过虚拟机实现跨平台特性; C++ 依赖特定的平台 Java 支持自动垃圾回收; ...","head":[["meta",{"property":"og:url","content":"https://blog.white233.top/docs/note/back-end/java/Java_Basics.html"}],["meta",{"property":"og:site_name","content":"温故而知新~"}],["meta",{"property":"og:title","content":"Java 基础"}],["meta",{"property":"og:description","content":"Java 语言的特点 是一种面向对象的语言 平台无关性(Java 虚拟机从底层屏蔽了硬件差别, 实现平台无关性) 支持网络编程 支持多线程 具有较高的可靠性和安全性 Java 与 C++ 的区别 Java 和 C++ 都是面向对象语言, 都支持封装、继承、多态 Java 通过虚拟机实现跨平台特性; C++ 依赖特定的平台 Java 支持自动垃圾回收; ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-20T09:50:40.000Z"}],["meta",{"property":"article:author","content":"White"}],["meta",{"property":"article:published_time","content":"2024-03-14T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-20T09:50:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java 基础\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-14T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-20T09:50:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"White\\",\\"url\\":\\"https://blog.white233.top\\",\\"email\\":\\"white996@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"Java 语言的特点","slug":"java-语言的特点","link":"#java-语言的特点","children":[{"level":3,"title":"Java 与 C++ 的区别","slug":"java-与-c-的区别","link":"#java-与-c-的区别","children":[]},{"level":3,"title":"接口和抽象类的区别","slug":"接口和抽象类的区别","link":"#接口和抽象类的区别","children":[]}]},{"level":2,"title":"Java 的数据类型","slug":"java-的数据类型","link":"#java-的数据类型","children":[{"level":3,"title":"基本数据类型(primitive type)","slug":"基本数据类型-primitive-type","link":"#基本数据类型-primitive-type","children":[]},{"level":3,"title":"引用数据类型(reference type)","slug":"引用数据类型-reference-type","link":"#引用数据类型-reference-type","children":[]}]},{"level":2,"title":"关键字","slug":"关键字","link":"#关键字","children":[{"level":3,"title":"分类","slug":"分类","link":"#分类","children":[]}]},{"level":2,"title":"String","slug":"string","link":"#string","children":[{"level":3,"title":"String 的不可变","slug":"string-的不可变","link":"#string-的不可变","children":[]},{"level":3,"title":"字符串常量池","slug":"字符串常量池","link":"#字符串常量池","children":[]},{"level":3,"title":"String 和 StringBuffer 以及 StringBuilder 的区别","slug":"string-和-stringbuffer-以及-stringbuilder-的区别","link":"#string-和-stringbuffer-以及-stringbuilder-的区别","children":[]}]},{"level":2,"title":"Object","slug":"object","link":"#object","children":[{"level":3,"title":"Object 常见方法","slug":"object-常见方法","link":"#object-常见方法","children":[]},{"level":3,"title":"hashCode 和 equals","slug":"hashcode-和-equals","link":"#hashcode-和-equals","children":[]}]}],"git":{"createdTime":1710928240000,"updatedTime":1710928240000,"contributors":[{"name":"white","email":"294476387@qq.com","commits":1}]},"readingTime":{"minutes":8.87,"words":2660},"filePathRelative":"docs/note/back-end/java/Java_Basics.md","localizedDate":"2024年3月14日","excerpt":"<h2>Java 语言的特点</h2>\\n<ul>\\n<li>是一种面向对象的语言</li>\\n<li>平台无关性(Java 虚拟机从底层屏蔽了硬件差别, 实现平台无关性)</li>\\n<li>支持网络编程</li>\\n<li>支持多线程</li>\\n<li>具有较高的可靠性和安全性</li>\\n</ul>\\n<h3>Java 与 C++ 的区别</h3>\\n<p>Java 和 C++ 都是面向对象语言, 都支持封装、继承、多态</p>\\n<ul>\\n<li>Java 通过虚拟机实现跨平台特性; C++ 依赖特定的平台</li>\\n<li>Java 支持自动垃圾回收; C++ 需要手动回收</li>\\n<li>Java 没有指针, 更加安全; C++ 具有和 C 一样的指针</li>\\n<li>Java 不支持多继承, 只能通过实现多个接口来达到相同目的; C++ 支持多继承</li>\\n<li>Java 只支持方法重载(操作符重载增加了复杂性, 这与 Java 的设计思想不符); C++ 支持方法重载和操作符重载</li>\\n</ul>","autoDesc":true}');export{w as comp,f as data};
