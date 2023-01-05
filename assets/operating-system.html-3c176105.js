import{_ as o,V as l,W as e,a1 as c}from"./framework-f7736bb8.js";const i={},p=c("<hr><p>硬盘容量分为非格式化容量和格式化容量两种，计算公式如下：</p><ul><li><code>非格式化容量=面数x(磁道数/面)x内圆周长x最大位密度</code></li><li><code>格式化容量=面数x(磁道数/面)x(扇区数/道)x(字节数/扇区)</code></li></ul><hr><p>常用的 I/O 接口编址方法有两种：一是与内存单元统一编址，二是单独编址。</p><p>与内存单元统一编址方式下，是将 I/O 接口中有关的寄存器或存储部件看作存储器单元，与主存中的存储单元统一编址。这样，内存地址和接口地址统一在一个公共的地址空间里，对 I/O 接口的访问就如同对主存单元的访问一样，可以用访问内存单元的指令访问 I/O 接口。</p><p>I/O 接口单独编址是指通过设置单独的 I/O 地址空间，为接口中的有关寄存器或存储部件分配地址码，需要设置专门的 I/O 指令进行访问。这种编址方式的优点是不占用主存的地址空间，访问主存的指令和访问接口的指令不同，在程序中容易使用和辨认。</p><hr><p>中断方式和 DMA 方式时，CPU 可以与外设并行工作</p><ul><li><code>程序查询方式</code>：由 CPU 主动查询外设的状态，在外设准备好时传输数据</li><li><code>中断方式</code>：在外设准备好是给 CPU 发中断信号，之后再进行数据传输（在外设未发送中断信号前，CPU 可以执行其他任务）</li><li><code>DMA方式</code>：CPU 只需要向 DMA 控制器下达指令，让 DMA 控制器来处理数据的传送，完成后反馈给 CPU 即可</li></ul><hr><p>信号量机制：信号量机制是一种有效的进行同步与互斥工具。一般用 S 表示，<code>S≥0</code>表示某资源可用数，<code>S&lt;0</code>表示阻塞队列中等待该资源的进程数。</p><p><code>PV操作</code>是实现进程同步与互斥的常用方法。P 表示申请一个资源，V 表示释放一个资源。</p><ul><li><code>P操作</code>：<code>S=S-1</code>，若<code>S≥0</code>，则执行 P 操作的进程继续执行；若<code>S&lt;0</code>，则该进程为阻塞状态，进入阻塞队列</li><li><code>V操作</code>：<code>S=S+1</code>，若<code>S&gt;0</code>，则执行 V 操作的进程继续执行；若<code>S=0</code>，则阻塞状态唤醒一个进程，计入就绪队列，然后 V 操作的进程继续执行</li></ul><p><strong>箭头的起点就是 V 操作，箭头的终点就是 P 操作。</strong></p><hr><p>磁盘管理程序可以对磁盘进行初始化、创建卷，并且可以选择使用 FAT、FAT32 或 NTFS 文件系统格式化卷</p><hr><p>计算机硬件 → 操作系统 → 系统软件 → 应用软件</p><ul><li>系统软件开发人员：计算机硬件、操作系统</li><li>应用软件开发人员：系统软件</li><li>最终用户：应用软件</li></ul><hr><p>系统字长 32 位，一个字可以记录 32 个物理块的使用情况。</p><p><code>物理块数量=磁盘容量/物理块大小</code></p><p><code>字的数量=物理块数量/字长</code></p><hr><p>避免死锁的<code>最少资源数 = SUM(每个进程需要的资源数)-进程数+1</code></p><hr><p>分时系统中把 CPU 的时间分成很短的时间片轮流的分配给各个终端用户，当系统中用户数量为 n，时间片为 q 时，系统对于每个用户的响应时间等于 nxq</p><hr><p>操作系统有两个重要重用：</p><ol><li>通过资源管理提高计算机系统的效率，操作系统是计算机系统的资源管理者，它含有对系统软/硬件资源实施管理的一组程序</li><li>改善人机界面，向用户提供友好的工作环境</li></ol><hr><p>磁盘调度中，先进行<code>移臂调度</code>寻找磁道，再进行<code>旋转调度</code>寻找扇区（<code>移臂旋转</code>）。</p><hr><p>常用的进程控制块的组织方式有<code>连接方式</code>和<code>索引方式</code>：</p><ul><li>采用链接方式是把具有同一状态的 PCB，用其中的链接字链接成一个队列。这样，可以形成就绪队列、若干个阻塞队列和空白队列等。对其中的就绪队列常按进程优先级的高低排列，把优先级高的进程的 PCB 排在队列前面。此外，也可根据阻塞原因的不同而把处于阻塞状态的进程的 PCB 排成等待 I/O 操作完成的认列和等待分配内存的队列等。</li><li>采用索引方式是系统根据所有进程的状态建立若干索引表。例如，就绪索引表、阻塞索引表等，并把各索引表在内存的首地址记录在内存的一些专用单元中。在每个索引表的表目中，记录具有相应状态的某个 PCB 在 PCB 表中的地址。</li></ul><hr><p>移臂调度算法：又叫磁盘调度算法，根本目的在于有效利用磁盘，保证磁盘的快速访问。（柱面号即磁道编号）</p><ol><li>先来先服务算法（FCFS）：由请求的先后顺序确定执行顺序，可随时改变移臂方向</li><li>最短寻找时间优先调度算法（SSTF）：挑选寻找时间最短的那个请求执行，可随时改变移臂方向</li><li>电梯调度算法（SCAN）：从移臂当前位置沿移动方向选择最近的那个柱面的访问者来执行，若该方向上无请求访问时，就改变移臂的方向再选择</li><li>单向扫描算法（CSCAN）：总是从 0 号柱面开始向里道扫描，按照各自所要访问的柱面位置的次序去选择访问者</li></ol><hr><p>文件系统的索引问题</p><blockquote><p>多级索引：已知磁盘块大小 A，块号占用大小 B，求一级索引、二级索引、三级索引的文件最大长度。</p><p>每个物理块可以存放 A/B 个块号，记为 N<br> 一级：N^1xA<br> 二级：N^2xA<br> 三级：N^3xA</p><p>混合索引：某系统中磁盘的每个盘块大小为 1KB，外存分配方法采用中的混合索引结构，其中索引节点中直接地址 6 项，一级索引地址 2 项，二级索引地址 1 项，每个盘块号占用 4 个字节，请问该系统中允许的文件最大长度是多少?</p><p>一个盘块可记录的盘块号的数量为 ∶1KB/4=256<br> 直接地址 ∶ 记录 6 个文件所占物理块的块号<br> 一级索引 ∶ 记录 256x2=512 个文件所占物理块的块号<br> 二级索引 ∶ 记录 256x256x1 个文件所占物理块的块号<br> 该系统中允许的文件最大长度(256x256+256x2+6)*1KB</p></blockquote><hr><p>嵌入式系统初始化过程可以分为 3 个主要环节，按照自底向上、从硬件到软件的次序依次为：片级初始化、板级初始化、系统级初始化</p><ul><li>片级初始化完成嵌入式微处理器的初始化，包括设置嵌入式微处理器的核心寄存器和控制寄存器、嵌入式微处理器核心工作模式和嵌入式微处理器的局部总线模式等。片级初始化把嵌入式微处理器从上电时的默认状态逐步设置成系统所要求的工作状态。这是一个纯硬件的初始化过程</li><li>板级初始化完成嵌入式微处理器以外的其他硬件设备的初始化。另外，还需设置某些软件的数据结构和参数，为随后的系统级初始化和应用程序的运行建立硬件和软件环境。这是一个同时包含软硬件两部分在内的初始化过程</li><li>系统初始化过程以软件初始化为主，主要进行操作系统的初始化。BSP 将对嵌入式微处理器的控制权转交给嵌入式操作系统，由操作系统完成余下的初始化操作，包含加载和初始化与硬件无关的设备驱动程序，建立系统内存区，加载并初始化其他系统软件模块，如网络系统、文件系统等。最后，操作系统创建应用程序环境，并将控制权交给应用程序的入口</li></ul><hr><p>嵌入式操作系统的特点：</p><ol><li>微型化，从性能和成本角度考虑，希望占用的资源和系统代码量少</li><li>可定制，从减少成本和缩短研发周期考虑，要求嵌入式操作系统能运行在不同的微处理器平台上，能针对硬件变化进行结构与功能上的配置，以满足不同应用的需求</li><li>实时性，嵌入式操作系统主要应用于过程控制、数据采集、传输通信、多媒体信息及关键要害领域需要迅速响应的场合，所以对实时性要求较高</li><li>可靠性，系统构件、模块和体系结构必须达到应有的可靠性，对关键要害应用还要提供容错和防故障措施</li><li>易移植性，为了提高系统的易移植性，通常采用硬件抽象层和板级支撑包的底层设计技术</li></ol><hr><p>在 Linux 操作系统中，只有一个根目录，根目录使用&quot;/&quot;来表示。根目录是一个非常重要的目录，其他的文件目录均由根目录衍生而来</p><p>在 Linux 中，更改一个文件的权限设置可使用<code>chmod</code>命令</p><hr><p>磁盘管理的缓存区操作时间公式：</p><ul><li>单缓存区:<code>(输入+输出+处理)+(输入+输出)*(磁盘数-1)</code>，对于单缓存区，只有两条指令，一条输入输出，一条处理</li><li>双缓存区：<code>(输入+输出+处理)+输入*(磁盘数-1)</code>，对于双缓存区，就类似与流水线的处理，选择时长最长的作为周期（一般是输入）</li></ul><hr><p>UNIX 系统中包含两类设备：块设备和字符设备。设备特殊文件有一个索引节点，在文件系统目录中占据一个节点，但其索引节点上的文件类型与其他文件不同，是&quot;块&quot;或者是&quot;字符&quot;特殊文件。可以把 I/O 设备看作是特殊文件</p>",56),d=[p];function r(t,u){return l(),e("div",null,d)}const n=o(i,[["render",r],["__file","operating-system.html.vue"]]);export{n as default};
