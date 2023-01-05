import{_ as l,V as t,W as i,a1 as d}from"./framework-f7736bb8.js";const e={},o=d("<hr><p>软件工程的基本要素：方法、工具和过程</p><hr><p>软件生存周期</p><ol><li>可行性分析与项目开放计划</li><li>需求分析：确定软件要完成的功能及非功能性要求</li><li>概要设计：将需求转化为软件的模块划分，确定模块之间的调用关系</li><li>详细设计：将模块进行细化，得到详细的数据库结构和算法</li><li>编码：根据详细设计进行代码编写，得到可运行的软件，并进行单元测试</li><li>测试</li><li>维护</li></ol><hr><p>软件过程</p><p>能力成熟度模型(Capability Maturity Model,CMM)：CMM 是国际公认的对软件公司进行成熟度等级认证的重要标准。CMM 共分五级。在每一级中，定义了达到该级过程管理水平所应解决的关键问题和关键过程。每一较低级别是达到较高级别的基础。</p><ul><li>五级是最高级，即<code>优化级</code>，达到该级的软件公司过程可自发地不断改进，防止同类问题二次出现；</li><li>四级称为<code>已管理级</code>，达到该级的软件公司已实现过程的<strong>定量化</strong>；</li><li>三级为<code>已定义级</code>，即过程实现<strong>标准化</strong>；</li><li>二级为<code>可重复级</code>，达到该级的软件公司过程已<strong>制度化</strong>，有纪律，可重复；</li><li>一级为<code>初始级</code>，过程无序，进度、预算、功能和质量等方面不可预测。</li></ul><hr><p>CMMI 分级</p><table><thead><tr><th>等级</th><th>说明</th></tr></thead><tbody><tr><td>CL0（未完成的）</td><td>过程域未执行或未得到 CL1 中定义的所有目标</td></tr><tr><td>CL1（已执行的）</td><td>其共性目标是过程将可标记的输入工作产品转换成科表示的输出工作产品，已实现支持过程域的特定目标</td></tr><tr><td>CL2（已管理的）</td><td>其共性目标是集中于已管理的过程的制度化。根据组织级政策规定过程的运作将使用那个过程，项目遵循已文档化的计划和过程描述，所有正在工作的人都有权使用足够的资源，所有工作任务和工作产品都被监控、控制和评审</td></tr><tr><td>CL3（已定义级的）</td><td>其共性目标集中于已定义的过程的制度化。过程是按照组织的裁剪指南从组织的标准过程中剪裁得到的，还必须收集过程资产和过程的度量，并用于将来对过程的改定</td></tr><tr><td>CL4（定量管理级的）</td><td>其共性目标集中于可定量管理的过程的制度化。使用测量和质量保证来控制和改进过程域，建立和使用关于质量和过程执行的质量目标作为管理准则</td></tr><tr><td>CL5（优化的）</td><td>使用量化（统计学）手段改变和优化过程域，以满足客户的改变和持续改进计划中的过程域的功效</td></tr></tbody></table><hr><p>软件过程模型</p><ul><li>瀑布模型(Waterfall Model)：适用于需求确定，无大的需求变更，能采用线性工作的方式完成</li><li>增量模型(Incremental Model)：适用于核心需求非常清楚，人员不足，项目可分割成不同阶段完成</li><li>演化模型(Evolutionary Model) <ul><li>原型模型(Prototype Model)：适用于需求不明确、常变更的情况，适合规模不是很大且不复杂的系统</li><li>螺旋模型(Spiral Model)：强调分线分析，适用于庞大、复杂且具有高风险的系统</li></ul></li><li>喷泉模型(Water Fountation Model)：适用于面向对象的开发过程，无间隙</li><li>基于构件的开发模式(Compenent-baseed Development Model)</li><li>形式化方法模型(Fromal Methods Model)</li><li>统一过程模型(UP) <ul><li>是一种&quot;用例和风险驱动，以架构为中心，迭代并且增量&quot;的开发过程，由 UML 方法和工具支持。</li><li>定义了 4 个技术阶段机器制品： <ol><li>起始阶段（生命周期目标）专注于项目的初始活动</li><li>精化阶段（生命周期架构）理解了最初的领域范围之后，进行需求分析和架构演进</li><li>构建阶段（初试运作功能）关注系统的构建，产生实现模型</li><li>移交阶段（产品发布）关注于软件提交方面的工作，产生软件增量</li><li>[生产阶段 运行软件并监控软件的持续使用，提供运行环境的支持，提交评估缺陷报告和变更请求]</li></ol></li></ul></li><li>敏捷方法(Agile Development) <ul><li>目标：通过&quot;尽可能的早地、持续地对有价值的软件的交付&quot;是客户满意</li></ul><ol><li>极限编程(XP) <ul><li>4 大价值观：沟通、简单性、反馈和勇气</li><li>5 个原则：快速反馈、简单性假设、逐步修改、提倡更改和优质工作</li><li>12 个最佳实践：计划游戏、小型发布、隐喻、简单设计、测试先行、重构、结对编程、集体代码所有制、持续集成、每周工作 40 个小时、现场客户和编码标准</li></ul></li><li>水晶法(Crystal)：认为每一个不同的项目都需要一套不同的策略</li><li>并列争求法(Scrum)：使用迭代的方法 <ul><li>Product backlog，产品代办事项清单</li><li>Sprint backlog，Sprint 代办事项清单</li><li>Sprint，冲刺迭代</li></ul></li><li>自适应软件开发(ASD)</li><li>敏捷统一过程(AUP)：采用&quot;在大型上连续&quot;以及&quot;在小型上迭代&quot;的原理来构建软件系统</li></ol></li></ul><hr><p>统一软件开发过程（Rational Unified Process，RUP）应用了 4 种重要的模型元素：<code>角色（谁做）</code>、<code>活动（怎么做）</code>、<code>制品（做什么）</code>和<code>工作流（什么时候做）</code>。</p><hr><ul><li><code>甘特图(Gantt)</code>:表示任务何时开始，何时结束，任务的并行情况，<code>不能表示依赖关系</code></li><li><code>网络图(PERT)</code>：表示任务何时开始，何时结束，任务的依赖关系，<code>不能表示并行情况</code></li></ul><p>关键路径：项目中时间最长的活动顺序</p><p><code>松弛时间 = 最晚开始时间 - 最早开始时间</code></p><hr><p>对软件开发资源进行规划时，为了确定构建软件所以须的人数，需要考虑软件系统的规模、系统的技术复杂性、项目计划和开发人员的技术背景等方面，而与系统是否由市场前景无关</p><hr><p>风险是一种具有负面后果、人们不希望发生的事件。</p><p>通常认为风险具有以下特点：风险是可能发生的事件，其发生的可能性用风险概率来描述；风险是会给项目组带来损失的事件；可能对风险进行干预，以期减少损失。针对每一种风险，应弄清可能造成损失或避免损失的程度。对风险加以控制，采取一些有效的措施来降低风险或是消除风险。</p><p>软件风险一般包括<code>不确定性</code>和<code>损失</code>两个特性，其中不确定性指风险可能发生，也可能不发生；损失是当风险确实发生时，会引起的不希望的后果和损失。</p><p>救火和危机管理是对不适合但经常采用的软件风险管理策略。</p><p><code>已知风险</code>和<code>未知风险</code>是对软件风险进行分类的一种方式。</p><p>员工和预算是在识别项目风险时需要识别的因素。</p><p>风险预测从风险发生的可能性大小以及风险发生时产生的后果是否严重两方面评估风险。</p><ul><li>风险分析实际上是 4 个不同的活动： <ul><li>风险识别：视图系统化的确定对项目计划（估算、进度、资源分配）的威胁</li><li>风险预测：又称风险估算，从风险可能发生的概率和风险发生产生后果两方面评估</li><li>风险评估：根据风险及其发生的概率和产生的影响预测是否影响参考水平值</li><li>风险控制：辅助项目组建立处理风险的策略（风险避免、风险监控、风险管理以及意外事件计划）</li></ul></li></ul><p>风险管理是软件项目管理的一项重要任务。根据风险的优先级来确定风险控制策略，而优先级通过风险暴露来确定。风险暴露是一种量化风险影响的指标。风险控制是风险管理的一个重要活动。</p><hr><p>成本估算</p><ul><li><p>专家估算：依赖于专家的背景和经验，具有较大的主观性</p></li><li><p>Wolverton 模型：基于一个成本举证，定义不同的软件类型（控制、输入/输出等）和难易（容易和困难）的成本，基于此极端软件开发的成本</p></li><li><p>COCOMO 模型：将规模视为成本的主要因素，考虑多个驱动因子。在后来的版本 COCOMO II 中，还考虑了软件开发的不同阶段，包含 3 个阶段模型，即应用组装模型、早期设计阶段模型和体系结构阶段模型</p><p>COCOMO 用 3 个不同层次的模型来反映不同程度的复杂性，它们分别为： - 基本模型（Basic Model）：是一个静态单变量模型，它用一个以已估算出来的源代码行数（LOC）为自变量的函数来计算软件开发工作量。 - 中级模型（Intermediate Model）：则在用 LOC 为自变量的函数计算软件开发工作量的基础上，再用涉及产品、硬件、人员、项目等方面属性的影响因素来调整工作量的估算。 - 详细模型（Detailed Model）：包括中级 COCOMO 型的所有特性，但用上述各种影响因素调整工作量估算时，还要考虑对软件工程过程中分析、设计等各步骤的影响。</p><p>COCOMO II 模型也需要使用规模估算信息，在模型层次结果中有 3 中不同规模估算选择：对象点、功能点、代码行</p></li></ul><hr><p>人员管理是软件项目管理的一个重要部分，在组织开发团队时，应该考虑开发人员的工作能力、知识背景、工作风格、兴趣爱好等多方面的因素。每个成员的工作任务应该分配清楚，不应该参与所有阶段的工作。</p><hr><p>结构化分析模型包括数据流图、实体联系图、状态迁移图和数据字典。这些模型是需求分析阶段的输出。</p><p>确定软件体系结构是在软件设计阶段进行的。</p><p>结构化分析结果由以下几部分组成：一套分层的数据流图、一本数据词典、一组小说明（也称加工逻辑）、补充材料。</p><hr><p>I/O 软件隐藏了 I/O 操作实现的细节。I/O 软件向用户提供逻辑接口。I/O 软件将硬件与较高层次的软件隔离开来，而最高层软件向应用提供一个友好的、清晰且统一的接口，方便用户使用。</p><hr><p>易用性的子特性包括易理解性、易学性、易操作性，易分析性属于可维护性的子特性。</p><hr><p>软件变更控制是变更管理的重要内容，要有效进行变更控制，需要借助配置数据库和基线的概念。<code>配置数据库一般包括开发库、受控库和产品库</code>。</p><hr><p>McCabe 环路复杂度计算：<code>G=m-n+2p</code>，其中结点数 n，弧数 m，p 是强连通分量个数</p><hr><p>软件复杂性度量是软件度量的一个重要分支，其主要参数有：</p><ul><li>规模：总共的指令数或源代码行数</li><li>难度：通常由操作数的数目所决定</li><li>结构：通常与程序结构有关的度量来表示</li><li>智能度：即算法的难易程度</li></ul><hr><p>冗余技术分为四类：</p><ul><li>结构冗余</li><li>信息冗余</li><li>时间冗余</li><li>冗余附加技术</li></ul><hr><table><thead><tr><th>质量特性</th><th>质量子特性</th></tr></thead><tbody><tr><td>功能性</td><td>适合性，准确性，互用性，依从性，安全性</td></tr><tr><td>可靠性</td><td>成熟性，容错性，易恢复性</td></tr><tr><td>易用性</td><td>易理解性，易学性，易操作性</td></tr><tr><td>效率</td><td>时间特性，资源特性</td></tr><tr><td>可维护性</td><td>易分析性，易改变性，稳定性，易测试性</td></tr><tr><td>可移植性</td><td>适应性，易安装性，一致性，易替换性</td></tr></tbody></table><p>软件维护的工作量比开发阶段的工作量大。软件的正确性是指软件完成所需功能的程度，尽管这种程度与每千行代码的故障数有关，但不完全等同。软件完整性是指软件在安全方面抗攻击的能力。软件可用性是度量软件的&quot;用户友好性&quot;：学会操作软件所需体力/智力；对软件的使用达到中等效率所需的时间；但系统中由一个中等效率的人使用时测量到的生产率增长值；用户对系统的主观评价。</p><hr><p>模块结构评审，主要包括：1.控制流结构；2.数据流结构；3.模块结构与模块结构之间的对应关系。</p><hr><p>软件测试的调试方法：</p><ul><li>试探法：分析错误症状，猜测问题所在位置，一步一步试探和分析错误所在。</li><li>回溯法：从发现问题的地方开始，沿着程序控制系统追踪代码，直到找到错误。</li><li>对分查找法：已知程序中若干位置的正确取值，从这些位置给变量以正确的值，观察程序运行的输出结果，如果没有问题，说明从赋予变量一个值开始到结果输出之间的程序没有问题，问题可能在除此以外的程序中，随汗有错误的程序段再使用该方法，直到把范围缩小到比较容易诊断为止。</li><li>归纳法：从测试所暴露的问题出发，收集所有正确或不正确的数据，分析它们之间的关系，提出假想，用这些数据来证明或反驳，从而查出错误所在。</li><li>演绎法：根据测试结果，列出所有可能的错误原因；分析已有数据，排除不可能和彼此矛盾的原因；对于其他原因，选择可能性最大的，利用已有的数据完善该假设；用假设来解释所有原始测试结果，如果能解释这一切，也就找出了错误，否则，要么式假设不完备或不成立，要么有多个错误同时存在，需要重新分析提出新的结社，直到发现错误为止。</li></ul>",64),p=[o];function r(c,u){return t(),i("div",null,p)}const n=l(e,[["render",r],["__file","fundamentals-of-software-engineering.html.vue"]]);export{n as default};
