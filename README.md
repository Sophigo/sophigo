# sophigo

## 20260602
change position



## 20260604
课程内容优化
bp初步


# navbar
* 首页
* 课程
    * Fab课程
    * AI应用基础
    * AI移动机器人
    * CMF应用
* 工具
    * 参数化设计车辆（https://sophicar.com/）
    * threejs生成器
    * stl 报价
    * Mods
    * 视频生成
    * 抠图
    *
* 咨询：开启agent/mcp
    * AI最新工具
    * 3D打印工艺
    * 3D打印应用
    * github最快增幅仓库：AI工具
    * github最快增幅仓库：skill
    * github最快增幅仓库：参数化建模
    * github最快增幅仓库：数字孪生
    * github最快增幅仓库：参数定义




* 关于我们



* 我们需要分析以车子为主的交通工具如何设计，加工，实现量产
* 分析目前行业内任何关于参数化设计交通工具，AI生成参数，DFM，AI生3D，VLA，sim to real相关的方法，配套案例（尤其关心leap71，articraft，worldlab，Microsoft Trellis.2，isaacsim）
在github，Huggingface,discord, Reddit, arxiv，natural，science ，IEEE，知网上寻找下关资料，配套 modernica，python，threejs等开发语言。
* 目前我们用的相关工具有：团队协作工具（飞书：知识库，多维表格，openclaw）；本地知识库工具（obsidian），大模型（deepseekv4pro，antigravity/antigravity ide），AI 智能体控制台与执行框架hermes，AI Native 研发与调试层 (Antigravity IDE)
* 我需要你给我做以下
    * 一个专业的对sophicar的agent的定义；增加相关的soul,memory,skill,，表达为basic.html
    * 描述我们做的事情和背后含义。我们需要怎样的工作流，将这些协作工具关联起来，同时给予教程和链接，以tool.html为收尾表达
    * 在 /Users/wubo/Documents/2026/SophiCar/antigravity写一个专业的综述报告（index.html），以apple.com风格的黑丝web表达形式，文件名为background.html(分析目前行业内任何关于参数化设计交通工具，AI生成参数，DFM，AI生3D，VLA，sim to real相关的方法，配套案例（尤其关心leap71，articraft，worldlab，Microsoft Trellis.2，isaacsim。在github，Huggingface,discord, Reddit, arxiv，natural，science ，IEEE，知网上寻找下关资料，配套 modernica，python，threejs等开发语言。)，具体分层方式细化沟通；需要有几个人员从金融，结构，嵌入式软硬件、教育，算法等方面拍砖给出优化建议
    * 以上内容整合在一起，作为一个index.html。将上面三个html（basic.html，tool.html，background.html。整体描述目前做的事情，




 
sophigo agent 优化
* 我们需要分析以移动机器人底盘为主的交通工具如何设计，加工，* 分析目前行业内任何关于参数化设计交通工具，AI生成参数，DFM，AI生3D，VLA，sim to real相关的方法，配套案例（尤其关心leap71，articraft，worldlab，Microsoft Trellis.2，isaacsim）在github，Huggingface,discord, Reddit, arxiv，natural，science ，IEEE，知网上寻找下关资料，配套 modernica，python，threejs等开发语言。
* 目前我们用的相关工具有：团队协作工具（飞书：知识库，多维表格，飞书智能体）；本地知识库工具（obsidian），大模型（deepseekv4pro，gemma4，gemini），AI 智能体控制台与执行框架hermes，AI Native 研发与调试层 (antigravity/antigravity ide)

需要写一个专业的综述报告，
1. 给出一个专业的工作流，将这些协作工具关联起来，如何辅助我们高效开发，时给予教程和链接；
2. 使用hyperframes和动效流程图表达相关的逻辑关系




，具体分层方式细化沟通；需要有几个人员从金融，结构，嵌入式软硬件、教育，算法等方面拍砖给出优化建议 * 以上内容整合在一起，作为一个index.html。将上面三个html（basic.html，tool.html，background.html。整体描述目前做的事情， 所有内容都核对5次/Users/wubo/Documents/2026/SophiCar/techanalysis   
 
 ## hermes连接飞书，和微信
Role: 你现在是 Sophicar、ProFabX 与 SophiGo 的总系统架构师。我们需要在本地 2026 专属工作区中，为这三个核心项目建立多轨并行的“AI Native 本地数据中枢与智能工作台 (Multi-Project Agent Hub)”，严格进行路径隔离与安全管理。

Multi-Project Paths & Workspace Configuration:
请将所有生成的内容、自动化逻辑与代码执行严格限制在以下专属目录中：

1. 核心品牌/项目专属工作区 (Brand Obsidian Vaults):
   - ProFabX 缓冲区: `/Users/wubo/Documents/2026/ProFabX/Obsidian_Vault/Daily_Inbox/` (负责捕获/提炼智能制造、供应链与顾问流信息)
   - SophiCar 缓冲区: `/Users/wubo/Documents/2026/SophiCar/Obsidian_Vault/Daily_Inbox/` (负责捕获/提炼物理 AI、Sim-to-Real 仿真与底盘控制信息)
   - SophiGo 缓冲区:   `/Users/wubo/Documents/2026/SophiGo/Obsidian_Vault/Daily_Inbox/` (负责捕获/提炼生态扩展与具身智能行业交付信息)

2. 统一技术核心开发区 (Tech Analysis Location):
   - 全局开发区路径: `/Users/wubo/Documents/2026/SophiCar/techanalysis`
   - 说明：所有具体的跨项目数据调度脚本、Python 自动化流、Clawbot 提炼规则以及 MCP 插件均集中存放、运行在此文件夹中，作为三个项目共享的“技术引擎”。

3. 全局一体化前端看板 (Unified Master Dashboard):
   - 生成路径: `/Users/wubo/Documents/2026/SophiCar/sophicar_workspace.html`

System Workflow & Interaction Logic (方案2闭环):
- 微信/Clawbot 原始对话 ➡️ 自动按品牌分流投递到各自项目的 `Daily_Inbox` 文件夹中。
- 本地热处理 ➡️ 团队开发者在各自 Vault 中对原始 Markdown 进行清洗与知识重构（使用双向链接如 `[[BOM变更]]`, `[[CAE分析]]`）。
- Hermes 路由与同步 ➡️ 调度 `techanalysis` 中的代码，读取对应项目的专属 Vault，通过飞书开放平台 API 将成熟的资产同步到飞书多维表格（如 ProFabX 顾问规则、SophiCar 交付报告）。

Goal & Execution Method (严格工具调用规范):
1. 目录验证：请首先检查或自动创建上述所有品牌专属目录以及技术开发目录，确保路径绝对干净、正确。
2. 生成多项目一体化控制台：更新 `/Users/wubo/Documents/2026/SophiCar/sophicar_workspace.html`。
   - 视觉规范：苹果风格极简高科技工业 UI。克莱因蓝（Klein Blue, `#002FA7`）为主色调，搭配高级深灰与动态玻璃质感卡片。
   - 布局：三栏式。左栏展示 3 个品牌的本地挂载状态与 MCP 链；中栏使用 Mermaid.js 展现包含「1个总控 + 9个Subagents + Sophi-Omni 路由」的多项目分流拓扑图；右栏展示三个项目的资产树（BOM、CAD、算法模型）以及内置的「Hermes 智能体终端模拟控制台」。
3. 自动化预览：完成后，自动在终端运行 `open /Users/wubo/Documents/2026/SophiCar/sophicar_workspace.html` 帮我唤醒浏览器预览。

Task - 多项目数据中枢一版落地（请立即执行）：
请立刻开始构建。在生成的 HTML 代码中，利用 JavaScript 编写出同时兼容这三个不同物理路径（ProFabX, SophiCar, SophiGo）的 Obsidian URL Scheme（`obsidian://open?vault=`）唤醒和跳转逻辑示例。完成后，在终端用中文告诉我，你针对这三个品牌的不同属性，如何规划 `techanalysis` 中自动化脚本的分流处理策略。
 


联合开发：


1. 现在有Claude code 和claude 终端（已经配置deepseek v4 pro），codex 配套pm-skill（https://github.com/phuryn/pm-skills）
2. 同时有antigravity，hermes（已经配置deepseek v4 pro）
3.  文档管理工具有obsidian（空白），飞书知识库（https://b14zaacblx.feishu.cn/wiki/DmIHwe0GpiFHFKkmJiecZqntnfb?from=from_copylink），概况.pdf
4. 我如何启用一个联合项目（教给孩子AI时代的生存逻辑，培养AI时代的科创人才），从而给出新的报告（概况优化，初中课程提纲与内容，高中课程提纲与内容，商业计划书，宣传资料）， 内容写在obisian中；
5. 结合目前一些客观情况：中国新工科教育改革， 跨学科工程教育的兴起，美国的FabLab，PBL学习，AI native兴起


6. 我们认为的概况
* 时代之变（Why）： 2023年人类步入 AI 原生时代，传统的编程与制造门槛正被全面降维。未来科技人才的核心壁垒，不再是死记硬背的底层语法和机械接线，而是定义真实需求、驾驭 AI 工具进行系统性决策的能力。  
* 方法之新（How）： 本课程独创性地融合开源造物精神（FabLab）、项目式学习（PBL）与工业级 AI 敏捷工作流。通过 “硬件统一，AI 赋能”的超级工程放大器，赋能学生跨越跨学科技术鸿沟，完成从“工具使用者”到“物理世界创造者”的蜕变。  
* 成果之硬（What）： 课程以国家高素质科创人才鉴定标准为导向。通过对比 3 种以上 AI 方案、BOM 成本优化和 DFM 审查，引导学生打造出打通“端-网-云”的具身智能机器人以及工业级开源作品集，为国内强基综评与海外顶尖名校申请做储备。  

7. 我们认为的核心

在这个过程中参与者一起在解决工程问题，从而培养能力：需求提出与定义，AI工具使用与工程化，辩证思考与决策，了解AI能力边界，文档复盘
- 角色定位：从“技术学习者”到“项目决策者”：AI 降维了跨学科的技术门槛，让学生从“学代码语法”变成“做产品解决真实问题” 。我们绝不教授任何需要死记硬背的语法公式或琐碎接线，而是通过自然语言、大模型编译和参数化设计平台，引导学生直接调动工业级硬件，完成从工具使用者到物理世界创造者的蜕变 。  
- 师资重塑：从“知识灌输者”到“提示词导师”：在本课程中，教师的角色发生了根本性颠覆。教师不再是一味灌输底层机械或电子细节的传统讲师，而是转型为“提示词导师” 。核心教学目标是教导学生在 AI 时代如何正确、高效地向机器提问，并陪伴他们将大模型的在线生成勇敢地在物理世界中落地 。  
- 敏捷形态：从“传统编组”到“精锐双人组 + AI 智能体”，课程首创“双人精锐组 + 第三队员 AI Agent”的敏捷开发形态。其底层逻辑基于现代软件工程的“结对编程”与硬件工业界的“敏捷硬件开发”。AI 工具不再是偶尔查资料的辅助软件，而是作为团队不可或缺的超级全栈执行员，让学生深刻体会项目协作的真实生态 。  
-  核心教学法：以“硬件统一，AI 赋能”跨越技术鸿沟，我们坚信 AI 并非一门独立的理论学科，而是工程落地的超级放大器 。课程通过统一且标准化的硬件平台，将提示词工程、AI 编译、文生图及多智能体系统深度嵌入到机械、电子、算法和产品管理中，让学生能够直接进行系统级集成。  
- 成果交付：从“跑通技术 Demo”到“硬核商业作品集”，最终产出的不是简易的玩具，而是打通了“端-网-云-虚拟仿真”的具身智能移动机器人 。学生必须通过 3 种以上的 AI 方案对比、BOM 成本优化和 DFM（可制造性设计）审查来做出关键决策，最终交付包含完整技术拓扑图、GitHub 开源仓库和定量分析图表的硬核作品集 

    
    
 

