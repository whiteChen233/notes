import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as e,o as t,c as p,e as n,b as o,d as c}from"./app-CH8KTZgN.js";const l={},i=n("h2",{id:"jmm-内存模型",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#jmm-内存模型"},[n("span",null,"JMM 内存模型")])],-1),u={class:"hint-container tip"},d=n("p",{class:"hint-container-title"},"CPU的多核并发缓存架构",-1),r=c(`<p>JMM 全称为 Java Memory Model, Java 多线程内存模型跟 CPU 缓存模型类似, 是基于 CPU 缓存模型来建立的, Java 线程内存模型是标准化的, 屏蔽了底层不同计算机的区别</p><p>可以先看一个简单的 demo:</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">boolean</span> flag <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span> <span class="token punctuation">{</span>
    <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;waiting data...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>flag<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;===== success&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">new</span> <span class="token class-name">Tread</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token function">prepareData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">prepareData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;prepare data...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    flag <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;prepare data end...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行上面的代码后, 会发现第 9 行的代码并没有输出且程序没有退出, 说明 19 行的代码虽然执行了但是并没有影响到第 6 行的判断; 当将变量 <code>flag</code> 用 <code>volatile</code> 修饰后再运行代码, 程序最终会停止且第 9 行代码也会被执行</p><h3 id="jmm-的原子操作" tabindex="-1"><a class="header-anchor" href="#jmm-的原子操作"><span>JMM 的原子操作</span></a></h3><ul><li><code>read</code>: 读取, 从主内存读取数据</li><li><code>load</code>: 载入, 将主内存读取到的数据写入工作内存</li><li><code>use</code>: 使用, 从工作内存读取数据来计算</li><li><code>assign</code>: 赋值, 将计算好的值重新赋值到工作内存中</li><li><code>store</code>: 存储, 将工作内存数据写入主内存</li><li><code>write</code>: 写入, 将 store 过去的变量赋值给主内存中的变量</li><li><code>lock</code>: 锁定, 将主内存变量加锁, 标识为线程独占状态</li><li><code>unlock</code>: 解锁, 将主内存变量解锁, 解锁后其他线程可以锁定该变量</li></ul><h3 id="jmm-缓存不一致问题" tabindex="-1"><a class="header-anchor" href="#jmm-缓存不一致问题"><span>JMM 缓存不一致问题</span></a></h3><p>缓存一致性协议(MESI): 多个 CPU 从主内存读取一个数据到各自的高速缓存, 当其中某个 CPU 修改了缓存里的数据, 该数据会<strong>马上同步回主内存</strong>, 其他 CPU 通过总线嗅探机制可以感知到数据的变化而将自己缓存里的数据失效</p><p>缓存加锁: 缓存锁的核心机制是基于缓存一致性协议来实现的, 一个处理器的缓存回写到内存会导致其他处理器的缓存无效, IA-32 和 Intel 64 处理器使用 MESI 实现缓存一致性协议</p><h3 id="volatile-缓存可见性实现原理" tabindex="-1"><a class="header-anchor" href="#volatile-缓存可见性实现原理"><span>volatile 缓存可见性实现原理</span></a></h3><p>底层实现主要通过汇编 lock 前缀指令, 它会锁定这块内存区域的缓存(缓存行锁定)并写回到主内存</p><p>IA-32 和 Intel 64 架构软件开发手册对 lock 指令的解释:</p><ul><li>会将当前处理缓存行的数据<mark>立即</mark>写回到系统内存</li><li>这个协会内存的操作会引起在其他 CPU 里缓存了该内存地址的数据无效(MESI 协议)</li><li>提供内存屏障功能, 使 lock 前后指令不能重排序</li></ul><h3 id="指令重排序与内存屏障" tabindex="-1"><a class="header-anchor" href="#指令重排序与内存屏障"><span>指令重排序与内存屏障</span></a></h3><h4 id="指令重排序" tabindex="-1"><a class="header-anchor" href="#指令重排序"><span>指令重排序</span></a></h4><p>并发编程的三大特性:</p><ul><li><strong>原子性</strong>: 一个或多个操作要么全部执行成功, 要么全部执行失败</li><li><strong>可见性</strong>: 当一个线程对共享变量进行修改后, 其他线程可以立刻看到</li><li><strong>有序性</strong>: 程序的执行顺序会按照代码的先后顺序执行</li></ul><p>volatile 保证可见性与有序性, 但是不保证原子性, 保证原子性需要借助 synchronized 这样的锁机制</p><p>指令重排序: 在不影响单线程程序执行结果的前提下, 计算机为了最大限度的发挥机器性能, 会对机器指令重排序优化</p><p>源代码-&gt;编译器优化重排序-&gt;指令级并行重排序-&gt;内存系统重排序-&gt;最终执行的指令序列</p><p>重排序会遵循 <code>as-if-serial</code> 与 <code>happens-before</code> 原则</p><h4 id="内存屏障" tabindex="-1"><a class="header-anchor" href="#内存屏障"><span>内存屏障</span></a></h4><p>Java 规范定义的内存屏障:</p><table><thead><tr><th>屏障类型</th><th>指令示例</th><th>说明</th></tr></thead><tbody><tr><td>LoadLoad</td><td>Load1;LoadLoad;Load2</td><td>保证 Load1 的读取操作在 Load2 及后续读取操作之前执行</td></tr><tr><td>StoreStore</td><td>Store1;StoreStore;Store2</td><td>在 Store2 及其后的写操作执行前, 保证 Store1 的写操作已经刷新到主内存</td></tr><tr><td>LoadStore</td><td>Load1;LoadStore;Store2</td><td>在 Store2 及其后的写操作执行前, 保证 Load1 的读取操作已经结束</td></tr><tr><td>StoreLoad</td><td>Store1;StoreLoad;Load2</td><td>保证 Store1 的写操作已经刷新到主内存之后, Load2 及其后的读操作才能执行</td></tr></tbody></table><p>Java 规定 volatile 需要实现的内存屏障:</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">// StoreStore 屏障</span>
a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>  <span class="token comment">// volatile 写, a 为 volatile 变量</span>
<span class="token comment">// StoreLoad 屏障</span>
b <span class="token operator">=</span> a<span class="token punctuation">;</span>  <span class="token comment">// volatile 读</span>
<span class="token comment">// LoadLoad 屏障</span>
<span class="token comment">// LoadStore 屏障</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>不同 CPU 硬件对于 JVM 的内存屏障规范实现指令不一样</li><li>Intel CPU 硬件级内存屏障指令 <ul><li>lfence: 是一种 Load Barrier 读屏障, 实现 LoadLoad 屏障</li><li>sfence: 是一种 Store Barrier 写屏障, 实现 StoreStore 屏障</li><li>mfence: 是一种全能型的屏障, 具备 lfence 和 sfence 的能力, 具有所有屏障能力</li></ul></li><li>JVM 底层简化了内存屏障硬件指令的实现 <ul><li>lock 前缀: lock 指令不是一种内存屏障, 但是它能完成类似内存屏障的功能</li></ul></li></ul><h2 id="锁机制" tabindex="-1"><a class="header-anchor" href="#锁机制"><span>锁机制</span></a></h2><h3 id="锁的分类" tabindex="-1"><a class="header-anchor" href="#锁的分类"><span>锁的分类</span></a></h3><h4 id="悲观锁与乐观锁" tabindex="-1"><a class="header-anchor" href="#悲观锁与乐观锁"><span>悲观锁与乐观锁</span></a></h4><p>锁的一种宏观分类方式是悲观锁和乐观锁. 悲观锁与乐观锁并不是特指某个锁（Java 中没有哪个 Lock 实现类就叫PessimisticLock 或 OptimisticLock）, 只是在并发情况下的两种不同策略</p><p>悲观锁（Pessimistic Lock）, 就是很悲观, 每次去拿数据的时候都认为别人会修改. 所以每次在拿数据的时候都会上锁, 这样别人想拿数据就被挡住, 直到悲观锁被释放</p><p>乐观锁（Optimistic Lock）, 就是很乐观, 每次去拿数据的时候都认为别人不会修改. 所以不会上锁, 不会上锁！但是如果想要更新数据, 会在更新前检查在读取至更新这段时间别人有没有修改过这个数据. 如果修改过就重新读取, 再次尝试更新, 循环上述步骤直到更新成功（当然也允许更新失败的线程放弃操作）</p><blockquote><p>悲观锁阻塞事务, 乐观锁回滚重试. 它们各有优缺点, 不能认为一种一定好于另一种. 像乐观锁适用于写比较少的情况下, 即冲突真的很少发生的时候, 这样可以省去锁的开销, 加大了系统的整个吞吐量. 如果经常产生冲突, 上层应用会不断的进行重试, 这样反倒是降低了性能, 这种情况下用悲观锁就比较合适</p></blockquote><h4 id="自旋锁" tabindex="-1"><a class="header-anchor" href="#自旋锁"><span>自旋锁</span></a></h4><p>当一个线程尝试去获取某一把锁的时候, 如果这个锁此时已经被别人获取(占用), 那么此线程就无法获取到这把锁, 该线程将会等待, 间隔一段时间后会再次尝试获取. 这种采用<code>循环加锁 -&gt; 等待的机制</code>被称为<code>自旋锁(spinlock)</code></p><blockquote><p>刚刚的乐观锁就有类似的无限循环操作, 那它是自旋锁吗？</p><p>不是. 尽管自旋与 while(true) 的操作是一样的, 但还是应该将这两个术语分开. &quot;自旋&quot;这两个字, 特指自旋锁的自旋</p></blockquote><h4 id="可重入锁-递归锁" tabindex="-1"><a class="header-anchor" href="#可重入锁-递归锁"><span>可重入锁(递归锁)</span></a></h4><p>可重入锁的字面意思是“可以重新进入的锁”, 即<strong>允许同一个线程多次获取同一把锁</strong>. 比如一个递归函数里有加锁操作, 递归过程中这个锁会阻塞自己吗？如果不会, 那这个锁就是可重入锁（因为这个原因可重入锁也叫做递归锁）</p><p>Java 里只要以 <code>Reentrant</code> 开头命名的锁都是可重入锁, 而且 JDK 提供的所有现成的 Lock 实现类, 包括 <code>synchronized</code> 关键字锁都是可重入的</p><h4 id="公平锁和非公平锁" tabindex="-1"><a class="header-anchor" href="#公平锁和非公平锁"><span>公平锁和非公平锁</span></a></h4><p>如果多个线程申请一把公平锁, 当锁释放的时候, 先申请的先得到, 非常公平. 如果是非公平锁, 后申请的线程可能先获取到锁, 是随机或者按照其他优先级排序的</p><p>对 <code>ReentrantLock</code> 类而言, 通过构造函数传参可以指定该锁是否是公平锁, 默认是非公平锁. 一般情况下, 非公平锁的吞吐量比公平锁大, 如果没有特殊要求, 优先使用非公平锁</p><p>对于 <code>synchronized</code> 而言, 它也是一种非公平锁, 但是并没有任何办法使其变成公平锁</p><h3 id="synchronized" tabindex="-1"><a class="header-anchor" href="#synchronized"><span>synchronized</span></a></h3><p>在多线程的环境下, 多个线程同时访问共享资源会出现一些问题, 而 <code>synchronized</code> 关键字就是用来保证线程同步的</p><blockquote><p><code>synchronized</code> 可以保证原子性、可见性、有序性, 而 <code>volatile</code> 只能保证可见性和有序性</p></blockquote><p><code>synchronized</code> 主要有三种使用方式: 修饰普通同步方法、修饰静态同步方法、修饰同步代码块</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test1</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token comment">// 修饰普通同步方法</span>
    <span class="token keyword">public</span> <span class="token keyword">synchronized</span> <span class="token keyword">void</span> <span class="token function">add1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        num<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">add2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 修饰同步代码块</span>
        <span class="token keyword">synchronized</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            num<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test2</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token comment">// 修饰静态同步方法</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">synchronized</span> <span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        num<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="synchronized-的实现原理" tabindex="-1"><a class="header-anchor" href="#synchronized-的实现原理"><span>synchronized 的实现原理</span></a></h4><p>通过对象锁(Monitor)机制, 如果是同步代码块, 在进入 synchronized 同步块时, 需要通过 <code>monitorenter</code> 指令获取到当前对象的 monitor (也就是对象锁), 执行完同步块的逻辑后, 通过 <code>monitorexit</code> 指令来释放所持有的 monitor; 如果是同步方法, 那么方法的 flag 上会被加上 synchronized 标记, 因为整个方法都是同步的, 处理逻辑跟代码块是一样的</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>可以使用 <code>javap -v</code> 来查看下面代码的字节码指令</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>

    <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">synchronized</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            i <span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">synchronized</span> <span class="token keyword">void</span> <span class="token function">test2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        i <span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h4 id="synchronized-的锁升级" tabindex="-1"><a class="header-anchor" href="#synchronized-的锁升级"><span>synchronized 的锁升级</span></a></h4><p>升级过程: <code>偏向锁 -&gt; 轻量级锁 -&gt; 重量级锁</code></p><h3 id="cas-锁机制" tabindex="-1"><a class="header-anchor" href="#cas-锁机制"><span>CAS 锁机制</span></a></h3><p>CAS 即 Compare And Swap, 翻译成中文就是&quot;比较并替换&quot;, Java 中可以通过 CAS 操作来保证原子性</p><p>CAS 主要包含三个参数(V, expect, update), V 表示要更新的变量(内存值)、expect 表示预期值(旧值)、update 表示新值</p><p>CAS 的原理:</p><ul><li>先比较 V 和 expect 的值, 如果相等则将 update 的值赋值给 V</li><li>如果不相等说明其他线程对该变量做了更新, 放弃本次操作, 然后循环上面的操作直到更新成功</li></ul><p>一段用 <code>AtomicInteger</code> 实现的 CAS 锁:</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">while</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> oldvalue <span class="token operator">=</span> atomicInteger<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> newValue <span class="token operator">=</span> oldValue <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>atomicInteger<span class="token punctuation">.</span><span class="token function">compareAndSet</span><span class="token punctuation">(</span>oldValue<span class="token punctuation">,</span> newvalue<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>AtomicInteger 中的 CAS 的底层是通过汇编语言的 <code>lock cmpxchgq</code> 指令来实现原子性操作的</p></blockquote><h4 id="cas-和-syncronized-的比较" tabindex="-1"><a class="header-anchor" href="#cas-和-syncronized-的比较"><span>CAS 和 syncronized 的比较</span></a></h4><ul><li>syncronized 会阻塞线程, 会进行线程的上下文切换, 会由用户态切换到内核态, 切换前需要保存用户态的上下文, 而内核态恢复到用户态, 又需要恢复保存的上下文, 非常消耗资源</li><li>CAS 能很大程度提高并发程序的执行效率, 因为线程没有被阻塞, 也就没有其他开销(上下文切换、用户态切换到内核态)</li></ul><h4 id="cas-存在的问题" tabindex="-1"><a class="header-anchor" href="#cas-存在的问题"><span>CAS 存在的问题</span></a></h4><ul><li>ABA问题</li><li>循环时间过长导致开销太大: CAS 自旋时间过长会给 CPU 带来非常大的开销</li><li>只能保证一个共享变量的原子操作: 对多个共享变量进行操作时, CAS 无法保证操作的原子性, 这个时候就需要用锁了</li></ul><div class="hint-container tip"><p class="hint-container-title">ABA 问题</p><ul><li><p>什么是ABA问题呢?</p><p>假设有两个线程A、B,同时对一个共享变量 M 进行操作, 线程 A 将 M 的值从 1 改为 2, 线程 B 将 M 的值从 1 改为 3, 然后又改为 1, 两个线程同时获取到 M 的值, 但是线程 B 执行的更快, 在线程 A 将 1 改为 2 之前执行完成了, 此时线程 A 判断原本的值和内存的值一致, 执行修改. 这就是 ABA 问题</p></li><li><p>如何解决 ABA 问题呢?</p><p>很简单, 对共享变量添加 version 标记就可以了. 在原本的 ABA 问题中:</p><ul><li>线程 A 获取到 M 的值为(1, 1), 线程 B 获取到 M 的值为 (1, 1)</li><li>线程 B 将 M 的值做修改: (1, 1) -&gt; (3, 2) -&gt; (1, 3)</li><li>线程 A 判断值是否相等: (1, 1) != (1, 3), 放弃本次操作</li></ul></li></ul></div><h4 id="原子类" tabindex="-1"><a class="header-anchor" href="#原子类"><span>原子类</span></a></h4><p>原子操作类是 CAS 在 Java 中的应用, 从 JDK 1.5 开始提供了 <code>java.util.concurrent.atomic</code> 包, 这个包中的原子操作提供了一种用法简单、性能高效、线程安全地更新变量的方式</p><p>Atomic 包里的类基本都是使用 <code>Unsafe</code> 实现的包装类</p><p>JUC包中的4种原子类</p><ul><li>基本类型: 使用原子的方式更新基本类型 <ul><li><code>AtomicInteger</code>: 整形原子类</li><li><code>AtomicLong</code>: 长整型原子类</li><li><code>AtomicBoolean</code>: 布尔型原子类</li></ul></li><li>数组类型: 使用原子的方式更新数组里的某个元素 <ul><li><code>AtomicIntegerArray</code>: 整形数组原子类</li><li><code>AtomicLongArray</code>: 长整形数组原子类</li><li><code>AtomicReferenceArray</code>: 引用类型数组原子类</li></ul></li><li>引用类型: <ul><li><code>AtomicReference</code>: 引用类型原子类, 存在ABA问题</li><li><code>AtomicStampedReference</code>: 原子更新带有版本号的引用类型. 该类将整数值与引用关联起来, 可以于原子的更新数据和数据的版本号, 可以解决使用 CAS 进行原子更新时可能出现的 ABA 问题</li><li><code>AtomicMarkableReference</code>: 原子更新带有标记位的引用类型</li></ul></li><li>原子更新字段类 <ul><li><code>AtomicIntegerFieldUpdater</code>: 原子更新整型的字段的更新器</li><li><code>AtomicLongFieldUpdater</code>: 原子更新长整型字段的更新器</li><li><code>AtomicReferenceFieldUpdater</code>: 引用类型更新器原子类</li></ul></li></ul>`,72);function k(v,m){const a=e("Mermaid");return t(),p("div",null,[i,n("div",u,[d,o(a,{id:"mermaid-4",code:"eJxLyslPztZNSi1J5FJQSM7PKc3NK1YwArLBElaOVoZANkIGwkuMVnIOCFWKBXOSwJyn61uerp3xdOYKsGhqXgrcCCesRiQjG5GC04jigsTkVCQ6Fazy+Z7JQJVKsWCT0zCF0HVBHOJsBfKXgsKTHbuftrUCVQc5+sItclTQ1bVTAFsBZjnCWc5AljNc1gnMSgPZC2Y5wVkIdWlcABbHY7w="})]),r])}const y=s(l,[["render",k],["__file","Concurrent.html.vue"]]),g=JSON.parse('{"path":"/docs/note/back-end/java/Concurrent.html","title":"Java 并发","lang":"zh-CN","frontmatter":{"title":"Java 并发","date":"2024-03-12T00:00:00.000Z","order":3,"description":"JMM 内存模型 CPU的多核并发缓存架构 JMM 全称为 Java Memory Model, Java 多线程内存模型跟 CPU 缓存模型类似, 是基于 CPU 缓存模型来建立的, Java 线程内存模型是标准化的, 屏蔽了底层不同计算机的区别 可以先看一个简单的 demo: 运行上面的代码后, 会发现第 9 行的代码并没有输出且程序没有退出, 说...","head":[["meta",{"property":"og:url","content":"https://blog.white233.top/docs/note/back-end/java/Concurrent.html"}],["meta",{"property":"og:site_name","content":"温故而知新~"}],["meta",{"property":"og:title","content":"Java 并发"}],["meta",{"property":"og:description","content":"JMM 内存模型 CPU的多核并发缓存架构 JMM 全称为 Java Memory Model, Java 多线程内存模型跟 CPU 缓存模型类似, 是基于 CPU 缓存模型来建立的, Java 线程内存模型是标准化的, 屏蔽了底层不同计算机的区别 可以先看一个简单的 demo: 运行上面的代码后, 会发现第 9 行的代码并没有输出且程序没有退出, 说..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-18T14:31:28.000Z"}],["meta",{"property":"article:author","content":"White"}],["meta",{"property":"article:published_time","content":"2024-03-12T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-18T14:31:28.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java 并发\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-12T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-18T14:31:28.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"White\\",\\"url\\":\\"https://blog.white233.top\\",\\"email\\":\\"white996@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"JMM 内存模型","slug":"jmm-内存模型","link":"#jmm-内存模型","children":[{"level":3,"title":"JMM 的原子操作","slug":"jmm-的原子操作","link":"#jmm-的原子操作","children":[]},{"level":3,"title":"JMM 缓存不一致问题","slug":"jmm-缓存不一致问题","link":"#jmm-缓存不一致问题","children":[]},{"level":3,"title":"volatile 缓存可见性实现原理","slug":"volatile-缓存可见性实现原理","link":"#volatile-缓存可见性实现原理","children":[]},{"level":3,"title":"指令重排序与内存屏障","slug":"指令重排序与内存屏障","link":"#指令重排序与内存屏障","children":[]}]},{"level":2,"title":"锁机制","slug":"锁机制","link":"#锁机制","children":[{"level":3,"title":"锁的分类","slug":"锁的分类","link":"#锁的分类","children":[]},{"level":3,"title":"synchronized","slug":"synchronized","link":"#synchronized","children":[]},{"level":3,"title":"CAS 锁机制","slug":"cas-锁机制","link":"#cas-锁机制","children":[]}]}],"git":{"createdTime":1710772288000,"updatedTime":1710772288000,"contributors":[{"name":"white","email":"294476387@qq.com","commits":1}]},"readingTime":{"minutes":11.54,"words":3462},"filePathRelative":"docs/note/back-end/java/Concurrent.md","localizedDate":"2024年3月12日","excerpt":"<h2>JMM 内存模型</h2>\\n<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">CPU的多核并发缓存架构</p>\\n</div>\\n<p>JMM 全称为 Java Memory Model, Java 多线程内存模型跟 CPU 缓存模型类似, 是基于 CPU 缓存模型来建立的, Java 线程内存模型是标准化的, 屏蔽了底层不同计算机的区别</p>\\n<p>可以先看一个简单的 demo:</p>\\n<div class=\\"language-java\\" data-ext=\\"java\\" data-title=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">static</span> <span class=\\"token keyword\\">boolean</span> flag <span class=\\"token operator\\">=</span> <span class=\\"token boolean\\">false</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">static</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">main</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">String</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span> args<span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">throws</span> <span class=\\"token class-name\\">InterruptedException</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Thread</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">-&gt;</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token class-name\\">System</span><span class=\\"token punctuation\\">.</span>out<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">println</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"waiting data...\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token keyword\\">while</span> <span class=\\"token punctuation\\">(</span><span class=\\"token operator\\">!</span>flag<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n\\n        <span class=\\"token punctuation\\">}</span>\\n        <span class=\\"token class-name\\">System</span><span class=\\"token punctuation\\">.</span>out<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">println</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"===== success\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">start</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token class-name\\">Thread</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">sleep</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">2000</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Tread</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">-&gt;</span> <span class=\\"token function\\">prepareData</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">prepareData</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token class-name\\">System</span><span class=\\"token punctuation\\">.</span>out<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">println</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"prepare data...\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    flag <span class=\\"token operator\\">=</span> <span class=\\"token boolean\\">true</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token class-name\\">System</span><span class=\\"token punctuation\\">.</span>out<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">println</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"prepare data end...\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre></div>","autoDesc":true}');export{y as comp,g as data};
