"use strict";(self.webpackChunknote=self.webpackChunknote||[]).push([[9406],{4602:(l,e,i)=>{i.r(e),i.d(e,{default:()=>r});var a=i(6252);const t=[(0,a.uE)('<h2 id="立项管理" tabindex="-1"><a class="header-anchor" href="#立项管理" aria-hidden="true">#</a> 立项管理</h2><h3 id="盈亏平衡管理" tabindex="-1"><a class="header-anchor" href="#盈亏平衡管理" aria-hidden="true">#</a> 盈亏平衡管理</h3><ul><li>正常情况下：销售额 = 固定成本 + 可变成本 + 税费 + 销售额</li><li>盈亏平衡：销售额 = 固定成本 + 可变成本 + 税费</li></ul><h2 id="范围管理" tabindex="-1"><a class="header-anchor" href="#范围管理" aria-hidden="true">#</a> 范围管理</h2><h3 id="范围管理的定义" tabindex="-1"><a class="header-anchor" href="#范围管理的定义" aria-hidden="true">#</a> 范围管理的定义</h3><p>范围管理指确定项目的边界，即哪些工作使项目应该做的，哪些工作不应该包括在项目中</p><div class="custom-container tip"><p class="custom-container-title">范围定义的输入</p><p>在初步项目范围说明书中已文档化的主要的可交付物、假设和约束条件的基础上准备详细的项目范围说明书，是项目成功的关键。范围定义的输入包括：</p><ul><li>项目章程</li><li>项目范围管理计划</li><li>组织过程资产</li><li>批准的变更申请</li></ul></div><h3 id="范围管理的过程" tabindex="-1"><a class="header-anchor" href="#范围管理的过程" aria-hidden="true">#</a> 范围管理的过程</h3><ul><li>范围计划编制</li><li>范围定义 <ul><li>产品范围</li><li>工作范围</li></ul></li><li>创建WBS <ul><li>WBS（工作分解结构）</li><li>WBS字典</li></ul></li><li>范围确认</li><li>范围控制</li></ul><table><thead><tr><td>层次名称</td><td>层次编号</td><td>层次描述</td><td>层次目的</td></tr></thead><tbody><tr><td>决策层</td><td>1</td><td>总项目</td><td>工作授权和解除</td></tr><tr><td rowspan="2">管理层</td><td>2</td><td>项目</td><td>预算编制</td></tr><tr><td>3</td><td>任务</td><td>进行计划编制</td></tr><tr><td rowspan="2">技术层</td><td>4</td><td>子任务</td><td rowspan="3">内部控制</td></tr><tr><td>5</td><td>工作包</td></tr><tr><td>操作层</td><td>6</td><td>努力水平</td></tr></tbody></table><h2 id="时间管理" tabindex="-1"><a class="header-anchor" href="#时间管理" aria-hidden="true">#</a> 时间管理</h2><h3 id="时间管理的定义" tabindex="-1"><a class="header-anchor" href="#时间管理的定义" aria-hidden="true">#</a> 时间管理的定义</h3><p>时间管理也叫<code>进度管理</code>，就是采用科学的方法，确定进度目标，编制进度计划和资源供应计划，进行进度控制，在与质量、成本目标协调的基础上，实现工期目标</p><h3 id="时间管理的过程" tabindex="-1"><a class="header-anchor" href="#时间管理的过程" aria-hidden="true">#</a> 时间管理的过程</h3><ul><li>活动定义：以WBS工作包作为输入</li><li>活动排序</li><li>活动资源估算</li><li>活动历时估算</li><li>制定进度计划</li><li>进度控制</li></ul><h4 id="历时估算方法" tabindex="-1"><a class="header-anchor" href="#历时估算方法" aria-hidden="true">#</a> 历时估算方法</h4><ul><li>专家判断法</li><li>三点估算法：（乐观时间+最可能时间x4（<em>加权</em>）+悲观时间）/6</li><li>功能点估算法</li><li>自上而下的估算</li><li>自下而上的估算</li></ul><h4 id="进度控制" tabindex="-1"><a class="header-anchor" href="#进度控制" aria-hidden="true">#</a> 进度控制</h4><ul><li>可能出现的问题 <ul><li>是否为关键活动</li><li>偏差是否大于总时差</li><li>偏差是否大于自由时差</li></ul></li><li>采取的手段 <ul><li>赶工：增加资源 —加班</li><li>快速跟进：活动并行执行</li></ul></li></ul><h3 id="进度网络图-关键路径法-pert" tabindex="-1"><a class="header-anchor" href="#进度网络图-关键路径法-pert" aria-hidden="true">#</a> 进度网络图-关键路径法（PERT）</h3><p>关键路径法是在制订进度计划时使用的一种进度网络分析技术。关键路线法沿着项目进 度网络路线进行正向与反向分析，从而计算出所有计划活动理论上的最早开始与完成日期、 最迟开始与完成日期，不考虑任何资源限制。</p><h4 id="单代号网络图-前导图法-pdm" tabindex="-1"><a class="header-anchor" href="#单代号网络图-前导图法-pdm" aria-hidden="true">#</a> 单代号网络图（前导图法，PDM）</h4><p><img src="/assets/qccstp/时间管理-前导图法.png" alt="时间管理-前导图法"></p><ul><li>总时差（松弛时间）：<code>在不延误总工期的前提下，该活动的机动时间</code>。活动的总时差等于该活动最迟完成时间与最早完成时间之差，或该活动最迟开始时间与最早开始时间之差</li><li>自由时差：<code>在不影响紧后活动的最早开始时间前提下，该活动的机动时间</code><ul><li>对于有紧后活动的活动，其自由时差等于所有紧后活动最早开始时间减本活动最早完成时间所得之差的最小值</li><li>对于没有紧后活动的活动，也就是以网络计划终点节点为完成节点的活动，其自由时差等于计划工期与本活动最早完成时间之差</li></ul></li><li>对于网络计划中以终点节点为完成节点的活动，其自由时差与总时差相等。此外，由于活动的自由时差是其总时差的构成部分，所以，当活动的总时差为零时，其自由时差必然为零，可不必进行专门计算</li></ul><blockquote><ul><li>总时差为0的节点就是关键节点，连接成的路径就是关键路径，但可能不止一条</li><li>花费时间最多路径就是关键路径，所花费的时间就是最短工期</li></ul></blockquote><h4 id="双代号网络图" tabindex="-1"><a class="header-anchor" href="#双代号网络图" aria-hidden="true">#</a> 双代号网络图</h4><p>双代号图中虚线箭头指虚活动，这种活动既不占时间，也不占资源，仅仅使为了展示逻辑依赖关系</p><h3 id="甘特图-gantt" tabindex="-1"><a class="header-anchor" href="#甘特图-gantt" aria-hidden="true">#</a> 甘特图（Gantt）</h3><p><img src="/assets/qccstp/时间管理-甘特图.png" alt="时间管理-甘特图"></p><blockquote><p>细线代表计划，粗线代表实际</p></blockquote><h4 id="优缺点" tabindex="-1"><a class="header-anchor" href="#优缺点" aria-hidden="true">#</a> 优缺点</h4><ul><li>优点：甘特图直观、简单、容易制作，便于理解，能很清晰地标识出直到每一项任务的起始与结束时间，一般适用比较简单的小型项目，可用于 WBS 的任何层次、进度控制、资源优化、编制资源和费用计划</li><li>缺点：不能系统地表达一个项目所包含的各项工作之间的复杂关系，难以进行定量的计算和分析，以及计划的优化等</li></ul><h2 id="成本管理" tabindex="-1"><a class="header-anchor" href="#成本管理" aria-hidden="true">#</a> 成本管理</h2><h3 id="成本管理的定义" tabindex="-1"><a class="header-anchor" href="#成本管理的定义" aria-hidden="true">#</a> 成本管理的定义</h3><p>在整个项目实施过程中，为确保项目在批准的预算下尽可能的保质按期完成，而对所需的各个过程进行管理与控制</p><h3 id="成本管理的过程" tabindex="-1"><a class="header-anchor" href="#成本管理的过程" aria-hidden="true">#</a> 成本管理的过程</h3><ul><li>成本估算</li><li>成本预算</li><li>成本控制</li></ul><h4 id="成本估算的方法" tabindex="-1"><a class="header-anchor" href="#成本估算的方法" aria-hidden="true">#</a> 成本估算的方法</h4><ul><li>自顶向下的估算</li><li>自底向上的估算</li><li>差别估算法</li></ul><h4 id="成本预算" tabindex="-1"><a class="header-anchor" href="#成本预算" aria-hidden="true">#</a> 成本预算</h4><ul><li>直接成本与间接成本</li><li>管理储备</li><li>零基准预算</li></ul><div class="custom-container tip"><p class="custom-container-title">成本估算与成本预算</p><p>简单来说，成本估算是指估算出项目总成本。成本预算是将总的成本估算分配到各项活动和工作包上，建立一个成本的基线</p></div><h4 id="成本控制-挣值管理" tabindex="-1"><a class="header-anchor" href="#成本控制-挣值管理" aria-hidden="true">#</a> 成本控制 - 挣值管理</h4><ul><li>计划工作量的预算成本（PV）= 计划工作量 x 预算定额</li><li>已完成工作量的实际成本（AC）</li><li>已完成工作量的预算成本（EV）= 已完成的工作量 x 预算定额</li><li>完工预算（BAC）= 完工时的PV总和</li></ul><blockquote><ul><li>进度偏差：SV = EV-PV</li><li>成本偏差：CV = EV-AC</li><li>进度绩效指数：SPI = EV/PV</li><li>成本绩效指数：CPI = EV/AC</li><li>剩余工作的成本（ETC） <ul><li>ETC = BAC-EV</li><li>ETC = (BAC-EV)/CPI</li></ul></li><li>完工估算：EAC = AC+ETC</li></ul></blockquote><h2 id="软件质量管理" tabindex="-1"><a class="header-anchor" href="#软件质量管理" aria-hidden="true">#</a> 软件质量管理</h2><h3 id="质量保证与质量控制" tabindex="-1"><a class="header-anchor" href="#质量保证与质量控制" aria-hidden="true">#</a> 质量保证与质量控制</h3><ul><li><code>质量保证</code> 一般是每隔一段时间（例如，每个阶段末）进行的，主要通过系统的质量审计和过程分析来保证项目的质量。独特工具包括：<code>质量审计和过程分析</code></li><li><code>质量控制</code>是实时监控项目的具体结果，以判断它们是否符合相关质量标准，指定有效方案，以消除产生质量问题的原因</li></ul><blockquote><p>一定时间内质量控制的结果就是质量保证的质量审计对象。质量保证的成果又可以指导下一阶段的质量工作，包括质量控制和质量改进</p></blockquote><h3 id="软件评审" tabindex="-1"><a class="header-anchor" href="#软件评审" aria-hidden="true">#</a> 软件评审</h3><ul><li>技术评审</li><li>管理评审</li></ul><blockquote><ul><li>不应以测试代替评审</li><li>评审人员应关注产品而不应评论开发人员</li><li>评审人员应关注与实质性问题</li><li>评审会议不应变为问题解决方案讨论会</li><li>评审应被安排进入项目计划</li><li>评审参与者应了解整个评审过程</li><li>评审人员事先应对评审材料充分了解</li><li>应重视评审的组织工作</li></ul></blockquote><h3 id="软件过程改进-cmmi" tabindex="-1"><a class="header-anchor" href="#软件过程改进-cmmi" aria-hidden="true">#</a> 软件过程改进 - CMMI</h3><p><img src="/assets/qccstp/软件质量管理-软件过程改进-1.png" alt="软件质量管理-软件过程改进-1"></p><blockquote><ul><li>等级逐步提升：已管理级（二级）→ 已定义级（三级）→ 定量管理级（四级）→ 优化级（五级）</li><li>已管理级是项目级的管理；已定义级是组织级的管理；定量管理级是强调量化；优化级强调不断优化</li></ul></blockquote><p><img src="/assets/qccstp/软件质量管理-软件过程改进-2.png" alt="软件质量管理-软件过程改进-2"></p><h2 id="软件配置管理" tabindex="-1"><a class="header-anchor" href="#软件配置管理" aria-hidden="true">#</a> 软件配置管理</h2><h3 id="配置项与配置库" tabindex="-1"><a class="header-anchor" href="#配置项与配置库" aria-hidden="true">#</a> 配置项与配置库</h3><h4 id="关于配置项" tabindex="-1"><a class="header-anchor" href="#关于配置项" aria-hidden="true">#</a> 关于配置项</h4><ul><li>配置项是构成产品配置的主要元素，配置项主要有一下两大类： <ul><li><em>必选</em> <mark>属于产品组成部分的工作成果</mark>：如需求文档、设计文档、源代码和测试用例等</li><li><em>可选</em> <mark>属于项目管理和机构支撑过程域产生的文档</mark>：如工作计划、项目质量报告和项目跟踪报告等。这些文档虽然不是产品的组成部分，但是值得保存</li></ul></li><li>每个配置项的主要属性有：名称、标识符、文件准柜台、版本、作者和日期等。所有配置项都被保存在配置库里，确保不会混淆、丢失。配置项及其历史记录反映了软件演化的过程</li><li>配置项的状态有3种：草稿（Draft）、正式发布（Released）、正在修改（Changing）</li></ul><blockquote><p>设备清单、CASE工具操作手册不属于配置项</p></blockquote><h4 id="关于配置库" tabindex="-1"><a class="header-anchor" href="#关于配置库" aria-hidden="true">#</a> 关于配置库</h4><ul><li>开发库（动态库、程序员库、工作库）：可以随意修改</li><li>受控库（主库、系统库）：必须先申请，申请通过才有权限修改</li><li>产品库（备份库、静态库）：不能修改</li></ul><h3 id="软件工具" tabindex="-1"><a class="header-anchor" href="#软件工具" aria-hidden="true">#</a> 软件工具</h3><p>按软件过程活动将软件工具分为：</p><ul><li><code>软件开发工具</code>：需求分析工具、设计工具、编码与排错工具</li><li><code>软件维护工具</code>：版本控制工具（VSS、CVS、SCCS、SVN）、文档分析工具、开发信息库工具、逆向工程工具、再工程工具</li><li><code>软件管理和软件支持工具</code>：项目管理工具、配置管理工具、软件评价工具、软件开发工具的评价和选择</li></ul><h3 id="变更控制" tabindex="-1"><a class="header-anchor" href="#变更控制" aria-hidden="true">#</a> 变更控制</h3><h4 id="过程" tabindex="-1"><a class="header-anchor" href="#过程" aria-hidden="true">#</a> 过程</h4><p>变更申请 → 变更评估 → 变更决策 → 变更实施 → 变更验证 → 沟通存档</p><p><img src="/assets/qccstp/软件配置管理-变更控制.png" alt="软件配置管理-变更控制"></p><h3 id="版本控制" tabindex="-1"><a class="header-anchor" href="#版本控制" aria-hidden="true">#</a> 版本控制</h3><p><img src="/assets/qccstp/软件配置管理-版本控制.png" alt="软件质量管理-版本控制"></p><ul><li>处于<code>草稿</code>状态的配置项的版本号格式为：0.Y.Z，其中YZ数字范围为01~99。随着草稿的不断完善，YZ的取值应递增。YZ的初始值和增幅由开发者自己把握</li><li>处于<code>正式发布</code>状态的配置项的版本号格式为：X.Y，其中X为主版本号，取值范围1<sub>9；Y为此版本号，取值范围为1</sub>9。配置项第一次正式发布时，版本号为1.0</li><li>如果配置项的版本升级幅度比较小，一般只增大Y值，X值保持不变。只有当配置项版本升级幅度比较大时，才允许增大X值</li><li>处于<code>正在修改</code>状态的配置项的版本号格式为：X.Y.Z，在修改配置项时，一般只增大Z值，X.Y值保持不变</li></ul><h2 id="风险管理" tabindex="-1"><a class="header-anchor" href="#风险管理" aria-hidden="true">#</a> 风险管理</h2><h3 id="风险管理的概念" tabindex="-1"><a class="header-anchor" href="#风险管理的概念" aria-hidden="true">#</a> 风险管理的概念</h3><p>关心未来；关心变化；关心选择</p><ul><li>风险存在的客观性和普遍性</li><li>某一具体风险发生的偶然性和大量风险发生的必然性</li><li>风险的可变性</li><li>风险的多样性和多层次性</li><li><code>基本属性：随机性和相对性</code></li></ul><h3 id="风险的分类" tabindex="-1"><a class="header-anchor" href="#风险的分类" aria-hidden="true">#</a> 风险的分类</h3><ul><li>项目风险 <ul><li>潜在的预算、进度、人员和组织、资源、用户和需求问题</li><li>项目复杂性、规模和结构的不确定性</li></ul></li><li>技术风险 <ul><li>潜在的设计、实现、接口、测试和维护方面的问题</li><li>规格说明的多义性、技术上的不确定性、技术陈旧、最新技术（不成熟）</li></ul></li><li>商业风险 <ul><li>市场风险：系统虽然很优秀但不是市场真正所想要的</li><li>策略风险：系统不再符合企业的信息系统战略</li><li>销售风险：开发了销售部门不清楚如何推荐的系统</li><li>管理风险：由于重点转移或人员变动而失去上级支持</li><li>预算风险：开发过程没有得到预算或人员的保证</li></ul></li></ul><h3 id="风险曝光度" tabindex="-1"><a class="header-anchor" href="#风险曝光度" aria-hidden="true">#</a> 风险曝光度</h3><p>风险曝光度（Risk Exposure）：计算方法是风险出现的概率x风险可能造成的损失</p><h3 id="项目管理工具" tabindex="-1"><a class="header-anchor" href="#项目管理工具" aria-hidden="true">#</a> 项目管理工具</h3><ul><li>能做什么（项目管理相关的工作辅助）：任务调度、成本估算、资源分配、预算跟踪、人时统计、配置控制，确定关键路径、松弛时间、超前时间和滞后时间，生成一定格式的报表和报告</li><li>不能做什么（开发技术相关辅助工作）：不能指导软件设计人员按软件生存周期各个阶段的适用技术进行设计工作</li></ul>',83)],d={},r=(0,i(3744).Z)(d,[["render",function(l,e){return(0,a.wg)(),(0,a.iD)("div",null,t)}]])},3744:(l,e)=>{e.Z=(l,e)=>{const i=l.__vccOpts||l;for(const[l,a]of e)i[l]=a;return i}},1326:(l,e,i)=>{i.r(e),i.d(e,{data:()=>a});const a=JSON.parse('{"key":"v-eab6775a","path":"/zh/QCCSTP/system-architect/project-management.html","title":"项目管理","lang":"zh-CN","frontmatter":{"title":"项目管理","date":"2022-09-21T00:00:00.000Z","description":"立项管理 盈亏平衡管理 正常情况下：销售额 = 固定成本 + 可变成本 + 税费 + 销售额; 盈亏平衡：销售额 = 固定成本 + 可变成本 + 税费; 范围管理 范围管理的定义 范围管理指确定项目的边界，即哪些工作使项目应该做的，哪些工作不应该包括在项目中 范围定义的输入 在初步项目范围说明书中已文档化的主要的可交付物、假设和约束条件的基础上准备详细...","head":[["meta",{"property":"og:url","content":"https://whiteChen233/whitechen233.github.io/zh/QCCSTP/system-architect/project-management.html"}],["meta",{"property":"og:site_name","content":"温故而知新~"}],["meta",{"property":"og:title","content":"项目管理"}],["meta",{"property":"og:description","content":"立项管理 盈亏平衡管理 正常情况下：销售额 = 固定成本 + 可变成本 + 税费 + 销售额; 盈亏平衡：销售额 = 固定成本 + 可变成本 + 税费; 范围管理 范围管理的定义 范围管理指确定项目的边界，即哪些工作使项目应该做的，哪些工作不应该包括在项目中 范围定义的输入 在初步项目范围说明书中已文档化的主要的可交付物、假设和约束条件的基础上准备详细..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-10-25T08:52:31.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"article:published_time","content":"2022-09-21T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-10-25T08:52:31.000Z"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://whiteChen233/whitechen233.github.io/en/QCCSTP/system-architect/project-management.html"}]]},"excerpt":"","headers":[{"level":2,"title":"立项管理","slug":"立项管理","link":"#立项管理","children":[{"level":3,"title":"盈亏平衡管理","slug":"盈亏平衡管理","link":"#盈亏平衡管理","children":[]}]},{"level":2,"title":"范围管理","slug":"范围管理","link":"#范围管理","children":[{"level":3,"title":"范围管理的定义","slug":"范围管理的定义","link":"#范围管理的定义","children":[]},{"level":3,"title":"范围管理的过程","slug":"范围管理的过程","link":"#范围管理的过程","children":[]}]},{"level":2,"title":"时间管理","slug":"时间管理","link":"#时间管理","children":[{"level":3,"title":"时间管理的定义","slug":"时间管理的定义","link":"#时间管理的定义","children":[]},{"level":3,"title":"时间管理的过程","slug":"时间管理的过程","link":"#时间管理的过程","children":[]},{"level":3,"title":"进度网络图-关键路径法（PERT）","slug":"进度网络图-关键路径法-pert","link":"#进度网络图-关键路径法-pert","children":[]},{"level":3,"title":"甘特图（Gantt）","slug":"甘特图-gantt","link":"#甘特图-gantt","children":[]}]},{"level":2,"title":"成本管理","slug":"成本管理","link":"#成本管理","children":[{"level":3,"title":"成本管理的定义","slug":"成本管理的定义","link":"#成本管理的定义","children":[]},{"level":3,"title":"成本管理的过程","slug":"成本管理的过程","link":"#成本管理的过程","children":[]}]},{"level":2,"title":"软件质量管理","slug":"软件质量管理","link":"#软件质量管理","children":[{"level":3,"title":"质量保证与质量控制","slug":"质量保证与质量控制","link":"#质量保证与质量控制","children":[]},{"level":3,"title":"软件评审","slug":"软件评审","link":"#软件评审","children":[]},{"level":3,"title":"软件过程改进 - CMMI","slug":"软件过程改进-cmmi","link":"#软件过程改进-cmmi","children":[]}]},{"level":2,"title":"软件配置管理","slug":"软件配置管理","link":"#软件配置管理","children":[{"level":3,"title":"配置项与配置库","slug":"配置项与配置库","link":"#配置项与配置库","children":[]},{"level":3,"title":"软件工具","slug":"软件工具","link":"#软件工具","children":[]},{"level":3,"title":"变更控制","slug":"变更控制","link":"#变更控制","children":[]},{"level":3,"title":"版本控制","slug":"版本控制","link":"#版本控制","children":[]}]},{"level":2,"title":"风险管理","slug":"风险管理","link":"#风险管理","children":[{"level":3,"title":"风险管理的概念","slug":"风险管理的概念","link":"#风险管理的概念","children":[]},{"level":3,"title":"风险的分类","slug":"风险的分类","link":"#风险的分类","children":[]},{"level":3,"title":"风险曝光度","slug":"风险曝光度","link":"#风险曝光度","children":[]},{"level":3,"title":"项目管理工具","slug":"项目管理工具","link":"#项目管理工具","children":[]}]}],"git":{"createdTime":1664012965000,"updatedTime":1666687951000,"contributors":[{"name":"white","email":"294476387@qq.com","commits":5}]},"readingTime":{"minutes":10.79,"words":3238},"filePathRelative":"zh/QCCSTP/system-architect/project-management.md","localizedDate":"2022年9月21日"}')}}]);