import React, { useState } from 'react';
import { 
  ArrowLeft, BookOpen, Cpu, Layers, Bot, Compass, Users, CheckCircle, 
  GraduationCap, Wrench, ShieldAlert, Zap, ExternalLink, Award, Target, 
  HelpCircle, Server, Code, HardDrive, Settings, BarChart2, Star, Calendar, 
  ShieldCheck, AlertTriangle
} from 'lucide-react';

export default function MobileRobotCourse({ lang = 'zh', onBack }) {
  const [campTab, setCampTab] = useState('junior');
  const [selectedChassis, setSelectedChassis] = useState(4); // Default to Option 5 (Index 4)

  const agentSlugs = [
    'orchestrator', 'mechanical', 'manufacturing', 'hardware', 'firmware',
    'algorithm', 'system-integration', 'product-market', 'budgeting', 'patent-rd', 'education'
  ];
  const agentEmojis = ['🎯', '⚙️', '🏭', '🔌', '💻', '🧠', '🔗', '📈', '💰', '🔬', '🎓'];

  const t = {
    zh: {
      title: "AI移动机器人",
      subtitle: "核心：需求提出与定义，AI工具使用与工程化，辩证思考与决策，了解AI能力边界，文档复盘；",
      

      // Student Profile
      profileTitle: "招生学员画像",
      profileSubtitle: "寻找未来的具身智能与 AI 原生代科创人才",
      profiles: [
        { label: "基础门槛", value: "具备一定的英语、科学、基础编程或机器人操作经验。" },
        { label: "招收年龄", value: "初一、初二、高一、高二。" },
        { label: "核心兴趣", value: "对人工智能、具身智能、产品创新及硬核科技竞赛有浓厚探索欲的初高中生。" },
        { label: "核心诉求", value: "对新工科、跨学科教育有深入兴趣，有国内升学（强基计划、综合评价、科创特长）或海外顶尖名校申请需求，渴望建立真正符合工业标准的个人项目作品集。" }
      ],

      // Teaching Philosophy
      philosophyTitle: "AI Native 教学差异对比",
      philosophySubtitle: "摒弃传统的死记硬背与机械模仿，专注于定义需求与驾驭 AI 工具的系统级决策。",
      prohibitedTitle: "🔴 禁止行为（绝对不允许出现）",
      standardTitle: "🟢 标准行为（必须严格执行）",
      philosophies: [
        {
          prohibited: "❌ '今天我们来学习 Python 语法，然后写一个控制机器人的代码'",
          standard: "✅ '你的机器人需要实现自动避障功能，现在告诉 AI 你的需求，它会给你 3 种避障方案'"
        },
        {
          prohibited: "❌ '大家打开 Fusion 360，跟着我画一个底盘模型'",
          standard: "✅ 'AI 已经生成了 3 个底盘模型，你需要从稳定性、重量、美观度三个维度选一个最好的'"
        },
        {
          prohibited: "❌ '这个电路的原理是这样的，大家按照这个图接线'",
          standard: "✅ 'AI 已经画好了电路图并生成了接线教程，你按照教程接线，有问题直接问 AI'"
        }
      ],

      // Modular Chassis Section
      chassisTitle: "模块化硬件底盘演进 (Sophilab 移动载荷)",
      chassisSubtitle: "基于参数化设计框架，提供 5 种不同侧重点的 AGV（自动导航车）硬件底盘设计概念，主攻 Option 5 具身智能路线",
      recommendationTitle: "🏆 推荐研发方向（Recommended Final Direction）：",
      recommendationDesc: "采用 Option 5 作为主攻路线。使用 3030 工业铝型材框架保证高刚性，麦克纳姆轮实现全向零半径转向，配合蓝白黑三色 CMF 工艺打样外壳，集成物理启动/暂停按键、超声波避障、广角相机，并可选配激光雷达。",
      chassisOptions: [
        {
          id: "Option 1",
          name: "基础模块化 3030 框架",
          desc: "3030 铝型材骨架 / FDM 3D打印连接件 / 模块化顶板 / 树莓派安装区",
          interaction: "纯机械组装，电机安装与基础底盘结构理解。",
          scene: "极速原型搭建 / 基础 AGV 套件"
        },
        {
          id: "Option 2",
          name: "教育控制面板版",
          desc: "蓝白黑拼色 FDM 外壳 / 前置按钮控制面板 / LED 状态指示灯条 / 可拆卸侧板",
          interaction: "启动/暂停/停止实体按键，LED 状态反馈，易于模块识别。",
          scene: "高中课堂交互与动态展示"
        },
        {
          id: "Option 3",
          name: "STEM 传感器实验版",
          desc: "树莓派多位置挂载点 / 超声波防撞传感器 / 云台相机支架 / 传感器塔架结构",
          interaction: "软硬件独立编程，AI、物联网及传感器融合实验。",
          scene: "传感器开发与树莓派视觉项目"
        },
        {
          id: "Option 4",
          name: "编程反馈版",
          desc: "LED 点阵屏幕 / 编码器反馈按钮 / 前置碰撞杠 / 随车工具架",
          interaction: "直观的 LED 点阵显示，随车控制调试，适合开放式硬件开发。",
          scene: "逻辑算法编写与创客空间活动"
        },
        {
          id: "Option 5",
          name: "终极麦克纳姆轮全向版",
          desc: "铝型材与 FDM 混合结构 / 麦克纳姆全向轮 / 快速拔插传感器模块 / 前置多功能控制面板",
          interaction: "360° 全向移动控制，多传感器硬件联动，集成式电源管理系统。",
          scene: "终极具身智能 Sophi-Core 概念 (推荐方向)"
        }
      ],

      // Syllabus Outline Section (VitePress chapters)
      outlineTitle: "技术文档章节（VitePress 详情页入口）",
      outlineSubtitle: "体系化的内容设计，由浅入深，每个板块均可跳转查看对应的技术文档与实验细节。",
      viewDetails: "查看文档细节",
      modules: [
        {
          num: "01",
          tag: "Theory & Kinematics",
          title: "机器人运动学与动力学建模",
          desc: "深入学习移动底盘的物理结构和控制建模。我们将推导主流移动机器人的运动学正逆解矩阵，为高精度轨迹规划打下坚实的数学根基。",
          points: [
            "双轮差速底盘（Differential Drive）运动学推导",
            "麦克纳姆轮（Mecanum Wheels）全向底盘矢量矩阵正逆解",
            "机器人航向角速度（Yaw rate）与编码器反馈积分（Odometry）计算",
            "运动控制仿真：Pure Pursuit 纯追踪算法与 PID 路径跟踪"
          ],
          link: "/docs/courses/mobile-robot/theory.html"
        },
        {
          num: "02",
          tag: "Hardware & MCU",
          title: "微控制器控制链与硬件集成",
          desc: "动手搭建机器人大脑的神经元。我们从电机选型、H 桥闭环控制开始，一步步打通与算能 SophiGo Duo 开发板的硬件接线、中断输入与串行通信协议。",
          points: [
            "霍尔编码器正交脉冲输入与增量式 PID 闭环调速",
            "电机驱动 H 桥芯片原理及 PWM 信号调节",
            "SophiGo Duo 微处理器 GPIO、PWM、UART 接口分配与外围电路设计",
            "主控板通信协议：底盘驱动器与上位机 ROS 节点间的数据打包传输"
          ],
          link: "/docs/courses/mobile-robot/hardware.html"
        },
        {
          num: "03",
          tag: "ROS2 & Navigation",
          title: "ROS2 导航系统与传感器感知",
          desc: "为机器人插上智慧的翅膀。我们将部署新一代 ROS2 (Robot Operating System)，配置导航堆栈 (Nav2)，并接入激光雷达 (Lidar) 实现定位建图与自主避障。",
          points: [
            "ROS2 节点通信机制（Topics, Services, Actions）与 TF2 坐标变换",
            "URDF/Xacro 机器人车体物理模型描述文件构建",
            "激光雷达 Lidar 驱动适配与 Gmapping/Cartographer 2D SLAM 建图",
            "Nav2 导航堆栈参数调优与全局/局部路径规划器（DWA / TEB）配置"
          ],
          link: "/docs/courses/mobile-robot/ros2.html"
        },
        {
          num: "04",
          tag: "3D Web Simulation",
          title: "Sophicar 3D 在线仿真与联合调试",
          desc: "云端一体化实战。SophiGo 平台内置了基于 WebGL (Three.js) 的 3D 底盘虚拟调试环境。您可以在没有实体小车的情况下，直接利用网页终端仿真控制指令。",
          points: [
            "在 Web 浏览器中直接加载 Sophicar 3D CAD 精准车身模型",
            "虚拟遥控器驱动车体运动，观察 3D 轨迹及虚拟声呐/雷达扫描特征",
            "基于 WebSockets 或 API 模拟真实的底盘回传数据包，闭环校验控制程序",
            "CMF 美学打样：在仿真器中即时调整车身氧化喷砂表面反射效果"
          ],
          link: "/docs/courses/mobile-robot/simulation.html"
        }
      ],

      // Stats Banner
      statsTitle: "为什么要选择这门课程？",
      stats: [
        { value: "100%", label: "软硬结合开源方案" },
        { value: "4 个", label: "核心系统实验" },
        { value: "No.1", label: "集成 Web 3D 仿真环境" },
        { value: "24/7", label: "AI 智能问答答疑辅助" }
      ],

      // Detailed 12-day Camp Syllabus Section
      campTitle: "12 天线下实训营课程提纲",
      campSubtitle: "分为初中和高中两个独立版本，匹配对应阶段的认知水平和技术能力。",
      juniorTab: "初中组：AI 机器人产品体验营",
      seniorTab: "高中组：AI 具身智能产品工程营",
      juniorConcept: "🟢 初中组核心理念：\"AI 做所有事，学生只做决策\"",
      seniorConcept: "🔵 高中组核心理念：\"AI 做基础执行，学生做系统设计和深度决策\"",
      
      seniorDiffTitle: "💡 高中组与初中组的本质区别",
      seniorDiffs: [
        {
          title: "多智能体协同 (Multi-Agent)",
          desc: "打破“输入提示词、生成单点结果”的线性体验，引入“专家智能体编排体系”，学生通过状态机编排协同调度多个专项 Agent。"
        },
        {
          title: "白盒机理剖析",
          desc: "融合硬核数理公式与零代码工具。独创“AI 生成复杂要素 ➔ 学生进行白盒机理剖析 ➔ 仿真验证 ➔ 物理实操重构”逆向工程流。"
        },
        {
          title: "学术级诚实性交付",
          desc: "拒绝流水账式日记。学生最终交付必须包含数理公式推导、定量分析图表、Git Commit 全留痕证据链的学术型开源作品集。"
        }
      ],

      juniorTableHeaders: {
        day: "天数主题",
        morning: "上午内容",
        afternoon: "下午内容",
        tools: "核心工具",
        deliverable: "交付产出"
      },

      juniorDays: [
        { day: "第一天", theme: "问题挖掘", morning: "FabLab 精神、AI 时代软硬件开发流程与产品经理思维定义小车。", afternoon: "构建“双人精锐组”，飞书看板项目管理入门。定义产品核心功能，AI 辅助起名、Slogan 与文生图脑暴。", tools: "DeepSeek/通义千问/飞书看板", deliverable: "小组问题分析报告、创意海报、基础 PRD 草稿" },
        { day: "第二天", theme: "功能定义", morning: "概念设计：模块化部件认知（学生做 100% 决策）。提示词工程：学习目标-要求-约束三要素向 AI 提需求。", afternoon: "行为流定义：AI 生成交互逻辑图。软硬件选型：AI 推荐硬件清单。Vibe Coding：AI 指导部署 VSCode 并生成项目网页。", tools: "VSCode/Gitee/文生图工具", deliverable: "工业标准 PRD 文档、硬件选型清单、项目发布网页" },
        { day: "第三天", theme: "参数化设计", morning: "学习工业级 CMF 与 DFM（可制造性设计）规范，理解“为加工而设计”。", afternoon: "模型终审：通过 sophicar.com 网页端进行参数化底盘滑块设计与评估。数字化加工：操作 3D 打印机/激光切割机加工实物。", tools: "sophicar.com / Fusion 360 AI / MakerLab", deliverable: ".stl 格式三维结构模型、加工参数文档、物理底盘零件" },
        { day: "第四天", theme: "嵌入式基础", morning: "引脚认知：建立对 ESP32-S3 开源硬件全局认知，专注于懂逻辑而不死记硬背。", afternoon: "虚拟仿真：在 Wokwi 平台完成接线验证。自然语言编程：用自然语言描述运动需求，AI 自动生成控制逻辑与固件烧录。", tools: "Wokwi 仿真平台 / Aily Blockly / ESP32-S3", deliverable: "Wokwi 仿真模型、ESP32-S3 控制代码、第一台通电物理样机" },
        { day: "第五、六天", theme: "软硬件调试", morning: "整机总装：动手组装外壳与传感器支架，指挥 AI 生成数字化装配步骤教程。工艺优化：理线与规避“飞线”，AI 生成布线规范。", afternoon: "控制重构：用自然语言描述避障、传感器融合逻辑并由 AI 编译。总线调优：调试主控板与电机、舵机间的 CAN 总线/串口通信。", tools: "VSCode / 万用表 / CAN 总线扩展模块", deliverable: "车辆避障算法代码、硬件测试报告、工业级布线避障机器人" },
        { day: "第七天", theme: "全栈 Vibe Coding", morning: "零代码界面：跳过前端 UI 代码，通过纯自然语言与 AI 对话编译出美观的 HTML 网页交互控制面板。", afternoon: "跨网控制：配置 Wi-Fi/蓝牙协议，将网页端控制面板与小车主控板长连接跨网桥接。", tools: "HTML5/CSS/JS 零代码生成器 / 本地 Wi-Fi 模块", deliverable: "跨平台前端控制网页源码、AI 交互控制接口文档、无线交互终端" },
        { day: "第八天", theme: "多模态交互", morning: "交互赋能：描述多模态工作流需求，指挥 AI 将语音控制、视觉识别与避障算法合并，全自动生成集成系统代码。", afternoon: "联调测试：实现“听到指令出发、看到特定障碍物精准刹车/倒垃圾”的智能化逻辑。", tools: "Qwen VLM / Hugging Face / Aily Blockly", deliverable: "完整合并的交互控制逻辑代码包、全功能集成演示视频" },
        { day: "第九天", theme: "数字孪生", morning: "孪生认知：理解“虚拟仿真 ➔ 实体部署”系统集成，由 AI 辅助驱动 3D 虚拟车物理引擎。", afternoon: "虚实联动：高频双向同步逻辑部署，实现“滑块调整/物理移动 ➔ 虚拟 3D 屏幕车动画同步”。", tools: "Three.js 3D 渲染引擎 / 数据双向同步智能体", deliverable: "3D 数字孪生仿真控制系统源码、端-网-云-虚拟仿真演示系统" },
        { day: "第十天", theme: "轻量化优化", morning: "系统集成：全功能饱和压力测试，优化控制参数。结构优化：向 AI 提出轻量化拓扑需求，进行减重应力分析并微调机械结构。", afternoon: "工艺定型：最后一轮理线与质检，AI 辅助撰写产品说明书。", tools: "VSCode / Autodesk Fusion 360", deliverable: "最终版多模态综合控制代码、产品拓扑优化说明书、终极物理原型机" },
        { day: "第十一天", theme: "包装测试", morning: "系统压测：开展“端-网-云-虚拟仿真”完整闭环压力测试，优化文档与日志。", afternoon: "开源整理：整理 Gitee/GitHub 代码仓库，规范文档（README）与演示视频。", tools: "Git/GitHub Pages / Markdown 编辑器", deliverable: "规范开源的 GitHub 技术仓库、定量分析图表、学术型技术报告" },
        { day: "第十二天", theme: "产品发布", morning: "正式举办产品发布会，各小组轮流进行 5 分钟技术路演 + 5 分钟评审团 Q&A。", afternoon: "企业参访：企业专家演讲与答辩证书颁发。", tools: "投影仪 / 路演 PPT", deliverable: "创新技术讲解视频、联合认证结营证书、带走个人物理机器人" }
      ],

      seniorCampOutline: [
        { phase: "第一、二天 (Day 1-2)", theme: "痛点深度挖掘与专利分析", desc: "引入联合国可持续发展目标（SDGs），利用 AI 进行行业级专利检索与分析，从现有竞品中提炼技术壁垒，形成高级商业可行性与市场规模分析报告。" },
        { phase: "第三、四天 (Day 3-4)", theme: "工业级 BOM 与 DFM 深度审查", desc: "引导学生利用 AI 智能体对机械底盘进行三维模型多维度纵向评估，编写结构优化与应力分析文档；自动生成多级 BOM（物料清单）并进行供应链采购成本优化。" },
        { phase: "第五、六天 (Day 5-6)", theme: "运动学反解推导与多路总线通信", desc: "深入 ESP32-S3 与算能 Duo 芯片架构，推导双轮差速/麦轮运动学矩阵，在 Wokwi 中进行逻辑校验；打通 CAN 总线与串口通信，实现机械臂多轴协同控制。" },
        { phase: "第七、八天 (Day 7-8)", theme: "跨网控制与边缘视觉 VLM 部署", desc: "基于 MQTT/WiFi 部署高频双向通信，利用视觉语言模型（Qwen VLM / YOLO）将多模态提问（语音、画面）深度转化为机器人的结构化 JSON 动作指令流。" },
        { phase: "第九、十天 (Day 9-10)", theme: "三维数字孪生与生成式拓扑优化", desc: "基于 Three.js 自主设计双向虚实联动仿真控制面板，配合 Fusion 360 Generative Design 进行车身结构轻量化迭代。" },
        { phase: "第十一、十二天 (Day 11-12)", theme: "学术答辩与开源发布", desc: "生成规范的 README、技术拓扑图，进行系统级端-网-云压力测试，举行全英文学术路演。" }
      ],

      // Multi-Agent Section
      agentTitle: "🧠 专家 Agent 协同体系",
      agentSubtitle: "本课程核心特色是引入工业级多智能体（Multi-Agent）开发架构，将复杂的工程任务解耦，协同学生完成研发。",
      agentFlowTitle: "智能体底层逻辑 — \"基于状态的编排\"",
      agentHeaders: {
        role: "智能体角色",
        focus: "核心关注点",
        task: "夏令营协同任务"
      },
      agents: [
        { role: "🎯 Orchestrator Agent", focus: "项目总协调与质量评估，负责任务拆解与全局监控。", task: "接收学生需求，将其拆解为 9 维度子任务，调度专家集群。" },
        { role: "⚙️ 机械设计 Agent", focus: "结构强度、减重优化、三维参数化建模。", task: "结合 sophicar.com 为学生提供 3 套底盘方案进行决策。" },
        { role: "🏭 机械制造 Agent", focus: "DFM（可制造性）校验、BOM（物料清单）生成。", task: "提供加工余量建议、3D 打印层厚指导及标准件零件清单。" },
        { role: "🔌 嵌入式硬件 Agent", focus: "电路图生成、元器件选型、引脚冲突规避。", task: "自动生成 Wokwi 仿真接线图及物理接线安全说明。" },
        { role: "💻 嵌入式软件 Agent", focus: "驱动编写、底层总线配置、自然语言 Vibe Coding。", task: "生成 ESP32-S3 底层固件代码，供学生审核与一键烧录。" },
        { role: "🧠 算法专家 Agent", focus: "运动学反解、PID 调优、VLM 动作流解析。", task: "提供差速/麦轮运动学公式推导框架，生成调参建议。" },
        { role: "🔗 系统集成 Agent", focus: "总线协议调优、故障排查、物理整机联调。", task: "在通电联调时，提供结构化的排故清单与接线诊断指南。" },
        { role: "📈 产品与市场 Agent", focus: "SDGs 关联性、竞品提炼、商业可行性。", task: "辅助学生完善产品功能定义，提炼市场宣传 Slogan。" },
        { role: "💰 商业与成本 Agent", focus: "供应链成本优化、盈亏平衡分析。", task: "核算标准件采购成本，生成单车经济性分析报告。" },
        { role: "🔬 研发与创新 Agent", focus: "前沿技术追踪、专利检索与技术壁垒分析。", task: "协助学生利用大模型进行专利查新，撰写创新点描述。" },
        { role: "🎓 教育专家 Agent", focus: "学习效果评估、心理与情绪监测、预警干涉。", task: "基于北师大评价体系，全程记录学生表现，生成动态雷达图。" }
      ],

      // PBL Team Roles
      pblTitle: "团队角色理解",
      pblSubtitle: "每个精锐双人组需明确分工与角色定位，协同推进项目落地",
      pblRoles: [
        { name: "产品经理", desc: "负责场景定义、人机交互与功能定义。使用提示词工程撰写 PRD，使用 AI 渲染进行外观迭代。" },
        { name: "前端/交互工程师", desc: "使用 HTML5/CSS/JavaScript 零代码生成器开发 Web 交互控制终端，部署长连接。" },
        { name: "后端与算法工程师", desc: "负责运动控制、路径规划算法调试，打通大模型 Agent 与底层硬件通信接口。" },
        { name: "嵌入式软硬件工程师", desc: "主导硬件选型、接线 Wokwi 仿真验证，执行底盘物理接线与固件烧录。" },
        { name: "机械工程师", desc: "使用 AI 辅助设计底盘物理结构，操作 3D 打印与激光切割机，对齐传感器支架。" },
        { name: "项目经理 / 系统集成师", desc: "维护飞书看板与进度，主导全系统软硬件集成联调，撰写排故日志。" }
      ],

      // Evaluation weights
      evalTitle: "评估报告维度与权重",
      evalSubtitle: "采用多维度综合性评价体系，结营时输出详尽的评估雷达图",
      evalMetrics: [
        { name: "AI 工具使用能力", weight: 25, desc: "AI 工具使用深度与广度、提示词工程技巧、AI 辅助开发及 Debug 效率、生成内容创新性。" },
        { name: "FabLab 制造能力", weight: 25, desc: "三维设计参数合理性、数字化加工设备操作熟练度、CMF/DFM 规范掌握、原型迭代速度与工艺品质。" },
        { name: "项目完成度与创新性", weight: 30, desc: "机器人的运动控制性能、多模态交互稳定性、解决真实痛点的实用价值、系统集成可靠度。" },
        { name: "开源与协作精神", weight: 20, desc: "技术文档及 PRD 完整性、代码注释规范、Gitee/GitHub 活跃度、Git Commit 提交留痕、团队协作。" }
      ],

      // Policy & Applications
      policyTitle: "政策、比赛与场景应用",
      policySubtitle: "无缝对接国家素质教育发展导向与教育部白名单赛事，积累硬核综评资产",
      policyItems: [
        {
          region: "北京政策环境",
          desc: "对接高中综合素质评价（综评）与强基计划。北京营联合北师大二级学院盖章颁发评估报告，内含量化雷达图、数理公式推导及专家二次审计，可直接对应高中综评系统中的“研究性学习记录”。"
        },
        {
          region: "浙江政策环境",
          desc: "对接三位一体招生（综评）。宁波营由联合国科创实验室（UNNC-BDO）组织，利用 UNNC-FabLab 印章背书，重点强调“算法到实物的闭环转化（Sim-to-Real）”和“Git 工业级版本控制”，极大提升面试含金量。"
        }
      ],
      contestTitle: "教育部白名单赛事",
      contests: [
        "第九届全国青少年人工智能创新挑战赛 (教育部 2025-2028 学年白名单竞赛)",
        "青少年科技创新大赛 / 全国青少年信息技术创新实践大赛（NOC）",
        "全国大学生机器人大赛 (RoboMaster/RoboCon，高校延伸段)",
        "“挑战杯”与“互联网+”大学生创新创业大赛 (学术作品集积累)"
      ]
    },
    en: {
      title: "AI Mobile Robot Hardware-Software Course",
      subtitle: "From motor control, kinematics modeling, to ROS2 navigation and Web 3D simulation. Master the entire robotics integration chain.",
      

      // Student Profile
      profileTitle: "Student Profile",
      profileSubtitle: "Recruiting future embodied intelligence and AI native tech talents",
      profiles: [
        { label: "Prerequisites", value: "Basic background in English, science, introductory coding, or robotics operations." },
        { label: "Ages", value: "Middle School / High School students (Grades 7-11)." },
        { label: "Interests", value: "Passionate about AI, embodied intelligence, hardware tinkering, and robotic competitions." },
        { label: "Appeals", value: "Aims to build high-quality industrial-grade portfolios for university enrollment or overseas applications." }
      ],

      // Teaching Philosophy
      philosophyTitle: "AI Native Teaching Philosophy",
      philosophySubtitle: "Ditch traditional memorization and rote copying, focus on defining requirements and system-level decisions with AI.",
      prohibitedTitle: "🔴 Prohibited Actions (Strictly Forbidden)",
      standardTitle: "🟢 Standard Actions (Mandatory execution)",
      philosophies: [
        {
          prohibited: "❌ 'Today we will learn Python syntax, and then write code to control the robot'",
          standard: "✅ 'Your robot needs auto-obstacle avoidance. Describe the needs to AI to get 3 strategies'"
        },
        {
          prohibited: "❌ 'Open Fusion 360, follow my screen to draw a chassis model step-by-step'",
          standard: "✅ 'AI has generated 3 chassis models. Choose the best based on stability, weight, and aesthetics'"
        },
        {
          prohibited: "❌ 'Here is the circuit diagram. Wire your board exactly like this'",
          standard: "✅ 'AI drafted the wiring schematic and tutorial. Wire it accordingly and query AI for issues'"
        }
      ],

      // Modular Chassis Section
      chassisTitle: "Modular Hardware Chassis Evolution (Sophilab Chassis)",
      chassisSubtitle: "Based on a parameter-driven design, offering 5 distinct AGV concept chassis, highlighting Option 5",
      recommendationTitle: "🏆 Recommended Research Direction:",
      recommendationDesc: "Target Option 5. Utilize a highly-rigid 3030 aluminum profile skeleton, Mecanum wheels for omni zero-radius turns, integrated status LEDs, ultrasonic sensors, wide-angle camera, and optional LiDAR.",
      chassisOptions: [
        {
          id: "Option 1",
          name: "Basic Modular 3030 Frame",
          desc: "3030 profile skeleton / FDM joints / modular top plate / Raspberry Pi area",
          interaction: "Pure mechanical assembly, motor mounting, and chassis basics.",
          scene: "Rapid prototyping / Basic AGV kits"
        },
        {
          id: "Option 2",
          name: "EDU Control Panel Version",
          desc: "Blue-white-black FDM shell / Front control panel buttons / Status LEDs",
          interaction: "Physical buttons for Start/Pause/Stop, LED status display.",
          scene: "High-school classroom display and interactive demos"
        },
        {
          id: "Option 3",
          name: "STEM Sensor Lab Edition",
          desc: "Pi multi-position brackets / Ultrasonic sensors / Pan-tilt camera / Sensor tower",
          interaction: "Sensor driver programming, AI vision, and multi-sensor fusion.",
          scene: "Sensor development & Raspberry Pi vision projects"
        },
        {
          id: "Option 4",
          name: "Coding Feedback Edition",
          desc: "LED dot matrix / Encoder feedback buttons / Front bumper / Tool hanger",
          interaction: "Visual output on matrix screen, on-chassis debugger controls.",
          scene: "Algorithm programming & open hacker spaces"
        },
        {
          id: "Option 5",
          name: "Ultimate Mecanum Omni Version",
          desc: "Aluminum-FDM hybrid chassis / Mecanum omni wheels / Quick-plug sensors / Multi-function panel",
          interaction: "360° omnidirectional control, integrated power management, sensor linkage.",
          scene: "Ultimate Embodied Intelligence Sophi-Core Concept"
        }
      ],

      // Syllabus Outline Section
      outlineTitle: "Course Outline & Contents",
      outlineSubtitle: "Structured learning syllabus. Click any module's details button to view technical documents and labs in VitePress.",
      viewDetails: "View Doc Details",
      modules: [
        {
          num: "01",
          tag: "Theory & Kinematics",
          title: "Robot Kinematics & Dynamic Modeling",
          desc: "Deep dive into mobile chassis physics and control modeling. Derive forward/inverse kinematics matrices to establish solid mathematical foundations for precision routing.",
          points: [
            "Kinematics derivation of dual-wheel Differential Drive chassis",
            "Mecanum Wheel vector kinematics and inverse matrix solutions",
            "Odometry accumulation using encoder feedback & Yaw angular rate",
            "Motion Control: Pure Pursuit and PID trajectory tracking algorithms"
          ],
          link: "/docs/courses/mobile-robot/theory.html"
        },
        {
          num: "02",
          tag: "Hardware & MCU",
          title: "Microcontroller Control & Hardware Integration",
          desc: "Construct the neural network of your robot chassis. Start from motor driver setups and PID velocity loops, linking them with SophiGo Duo board pinouts, interrupts, and serial communication.",
          points: [
            "Hall encoder quadrature signal decoding and incremental PID loop control",
            "Motor driver H-bridge theory and PWM speed modulation",
            "SophiGo Duo pin mapping (GPIO, PWM, UART) and peripheral circuit design",
            "Board communication protocol: Data serialization between chassis and ROS node"
          ],
          link: "/docs/courses/mobile-robot/hardware.html"
        },
        {
          num: "03",
          tag: "ROS2 & Navigation",
          title: "ROS2 Navigation Stack & Perception Systems",
          desc: "Give your robot intelligence. Deploy ROS2 (Robot Operating System), configure the Nav2 stack, and integrate Lidar sensors for simultaneous localization, mapping, and obstacle avoidance.",
          points: [
            "ROS2 node architecture (Topics, Services, Actions) and TF2 coordinates",
            "Building URDF/Xacro physical robot descriptions for simulation/viz",
            "Lidar sensor driver configurations and Gmapping/Cartographer SLAM",
            "Nav2 tuning: Global/Local path planners (DWA / TEB) parameter config"
          ],
          link: "/docs/courses/mobile-robot/ros2.html"
        },
        {
          num: "04",
          tag: "3D Web Simulation",
          title: "Sophicar 3D Online Web Simulation",
          desc: "Seamless cloud-hardware ecosystem. SophiGo incorporates a WebGL (Three.js) 3D simulation environment. Program and test your steering algorithms in your browser without hardware.",
          points: [
            "Load accurate Sophicar 3D CAD model directly inside standard browsers",
            "Interact with virtual joystick to inspect trajectories and simulated radar scans",
            "Simulate serial interface inputs/outputs via WebSockets for closed-loop software validation",
            "CMF aesthetic preview: adjust metal anodizing and sandblasting surface roughness dynamically"
          ],
          link: "/docs/courses/mobile-robot/simulation.html"
        }
      ],

      // Stats Banner
      statsTitle: "Why Choose This Course?",
      stats: [
        { value: "100%", label: "Open-source Scheme" },
        { value: "4 Core", label: "Hands-on Labs" },
        { value: "No.1", label: "Integrated Web 3D Simulation" },
        { value: "24/7", label: "DeepSeek AI Support" }
      ],

      // 12-day Camp Syllabus Section
      campTitle: "12-Day Hands-on Camp Syllabus",
      campSubtitle: "Separate options for middle school and high school groups aligned to cognitive capability.",
      juniorTab: "Middle School: AI Robot Product Camp",
      seniorTab: "High School: AI Embodied Product Engineering Camp",
      juniorConcept: "🟢 Middle School Focus: \"AI executes all tasks, students make decisions\"",
      seniorConcept: "🔵 High School Focus: \"AI handles basic execution, students design and deduce systems\"",
      
      seniorDiffTitle: "💡 High School vs Middle School Differences",
      seniorDiffs: [
        {
          title: "Multi-Agent Orchestration",
          desc: "Moves beyond simple one-shot prompts. Introduces expert Agent state-machine orchestration where students direct multiple AI agents."
        },
        {
          title: "White-box Analytical Physics",
          desc: "Derive actual kinematics formulas (chassis Jacobian matrices) and link them to zero-code controllers via simulation validation."
        },
        {
          title: "Academic-level Portfolios",
          desc: "Outcome is structured as open-source code repositories with math deductions, Git logs, and quantitative graphs matching college standards."
        }
      ],

      juniorTableHeaders: {
        day: "Day & Theme",
        morning: "Morning Session",
        afternoon: "Afternoon Session",
        tools: "Core Tools",
        deliverable: "Deliverables"
      },

      juniorDays: [
        { day: "Day 1", theme: "Define Needs", morning: "FabLab principles, product mindset, and AI-native hardware agile workflows.", afternoon: "Team formation (duos). Feishu board setups. Slogan brainstorming and text-to-image concepts.", tools: "DeepSeek / Feishu Boards / Midjourney", deliverable: "Needs Analysis, Brand poster, PRD draft" },
        { day: "Day 2", theme: "Specifications", morning: "Module catalog learning. Prompt engineering: Target-Request-Constraint technique.", afternoon: "AI-based flowcharts. Bill of Materials (BOM) creation. Deploy VSCode and generate landing web pages via AI.", tools: "VSCode / Gitee / LLM Agents", deliverable: "Industrial PRD, Hardware BOM, Project web page" },
        { day: "Day 3", theme: "Parametric Design", morning: "CMF and DFM (Design for Manufacturability) guidelines.", afternoon: "Chassis review via sophicar.com parameters. Manufacturing: 3D printing and laser cutting chassis parts.", tools: "sophicar.com / Fusion 360 / Laser cutters", deliverable: "3D CAD model (.stl), physical chassis parts" },
        { day: "Day 4", theme: "MCU Basics", morning: "ESP32-S3 pinouts and architecture basics without memorizing register tables.", afternoon: "Virtual prototyping in Wokwi. natural-language programming: AI compiles code for steering motors.", tools: "Wokwi Simulator / Blockly / ESP32-S3", deliverable: "Wokwi model, board code, first powered prototype" },
        { day: "Day 5-6", theme: "System Debugging", morning: "Enclosure and sensor assembly. Wiring optimization: clean wiring standard guide generated by AI.", afternoon: "Natural language compilation for sensor loops. Tuning CAN bus / serial communications.", tools: "VSCode / Multimeters / CAN Bus Modules", deliverable: "Avoidance code, hardware test logs, wired physical vehicle" },
        { day: "Day 7", theme: "Full Vibe Coding", morning: "Zero-code frontend: Compile gorgeous HTML control panels simply by conversing with AI.", afternoon: "Set up local Wi-Fi connection from dashboard to ESP32 board.", tools: "HTML5/CSS/JS generator / Wi-Fi routers", deliverable: "Web control interface, web APIs documentation" },
        { day: "Day 8", theme: "VLM Interaction", morning: "Specify multi-modal workflows to integrate voice commands and camera inputs.", afternoon: "Verify action sequences: commands triggering specific mechanics via VLM.", tools: "Qwen VLM / Hugging Face / Blockly", deliverable: "Integrated multimodal code, prototype demo video" },
        { day: "Day 9", theme: "Digital Twin", morning: "Concept of virtual-to-real workflows. Control 3D viewport objects using physical boards.", afternoon: "Deploy WebSocket synchronizer. Physical movement mirror to Web 3D canvas.", tools: "Three.js / WebSockets / Synchronization Agent", deliverable: "3D Digital Twin source code, cloud-web synchronizer" },
        { day: "Day 10", theme: "Optimization", morning: "Stress test and control tuning. Ask AI for generative topology weight optimization.", afternoon: "Final wiring QA. AI writes user documentation and manuals.", tools: "VSCode / Autodesk Fusion 360", deliverable: "Optimized control code, manual, completed physical robot" },
        { day: "Day 11", theme: "Release Prep", morning: "System verification under load. Format logs and git history.", afternoon: "Open-source codebase setup on Gitee/GitHub. Film high-quality demonstration video.", tools: "Git / GitHub Pages / Markdown editors", deliverable: "Clean GitHub repository, analysis charts, tech report" },
        { day: "Day 12", theme: "Demo & Pitch", morning: "Formal product release pitch (5 min demo + 5 min review Q&A).", afternoon: "Industrial guest reviews, certification award, keep your robot.", tools: "Projector / Pitch decks", deliverable: "Pitch video, joint certificate, physical robot" }
      ],

      seniorCampOutline: [
        { phase: "Day 1-2", theme: "Need Analysis & Patent Query", desc: "Align with UN SDGs. Search patents using AI tools to find technical barriers and draft comprehensive market viability assessments." },
        { phase: "Day 3-4", theme: "BOM & DFM Industrial Audits", desc: "Deploy AI Agents to audit 3D model mechanical strength and draft DFM reports. Generate multi-level BOMs and negotiate components costs." },
        { phase: "Day 5-6", theme: "Kinematics Analysis & Bus Protocol", desc: "Derive Mecanum kinematics matrices on ESP32-S3 & SophiGo Duo. Verify signals in Wokwi. Program multi-axis robotic arms over CAN." },
        { phase: "Day 7-8", theme: "Websocket Control & Edge VLM", desc: "Establish low-latency MQTT/WiFi channels. Program vision language models (Qwen VLM / YOLO) to compile multi-modal inputs into action vectors." },
        { phase: "Day 9-10", theme: "WebGL Digital Twins & Topology Design", desc: "Build Three.js twin panels for real-time tracking. Run Fusion 360 generative algorithms to shave structural weight." },
        { phase: "Day 11-12", theme: "Defense & Open-source Release", desc: "Publish structural drawings, README files, circuit layouts. Perform full system stress tests and pitch project in English." }
      ],

      // Multi-Agent Section
      agentTitle: "🧠 Expert Agent Orchestration",
      agentSubtitle: "This course leverages an industrial multi-agent architecture. Complex engineering scopes are split and assigned to dedicated AI specialists.",
      agentFlowTitle: "Underlying Orchestration - State-Based Orchestration Flow",
      agentHeaders: {
        role: "Agent Role",
        focus: "R&D Focus",
        task: "Summer Camp Collaboration Role"
      },
      agents: [
        { role: "🎯 Orchestrator Agent", focus: "Global coordinator, quality assessor, and task splitter.", task: "Splits user specs into 9-dimensional tasks and assigns them to expert clusters." },
        { role: "⚙️ Mechanical Design Agent", focus: "Structural load, topology weight reductions, 3D CAD scripts.", task: "Generates 3 CAD chassis options on sophicar.com for students to choose." },
        { role: "🏭 Manufacturing Agent", focus: "DFM verification and BOM compiler.", task: "Suggests tolerancing values, layer-heights, and component BOMs." },
        { role: "🔌 Hardware Circuit Agent", focus: "Schematics, electronics selection, pin layouts validation.", task: "Drafts Wokwi simulator layouts and electrical safety instructions." },
        { role: "💻 Firmware Agent", focus: "Driver codes, hardware bus configurations, Vibe Coding.", task: "Compiles ESP32-S3 driver libraries and sends firmware binaries." },
        { role: "🧠 Algorithm Specialist", focus: "Kinematics formulas, PID loops, VLM vector mapping.", task: "Deduces motion dynamics and proposes parameters tuning values." },
        { role: "🔗 Integration Agent", focus: "Protocol validation, hardware-software binding, debugging.", task: "Generates structured step-by-step diagnostic lists during live assembly." },
        { role: "📈 Product & Market Agent", focus: "SDGs alignments, competitive values, viability.", task: "Brainstorms Slogans, logos, and target market analyses." },
        { role: "💰 Budgeting Agent", focus: "Bill of materials optimization, breakeven analysis.", task: "Summarizes component procurement budgets and financial reports." },
        { role: "🔬 Patent & R&D Research", focus: "Scientific references and patent checks.", task: "Queries databases for patent matches and highlights novelty statements." },
        { role: "🎓 Education Specialist", focus: "Skill assessments and emotional support monitors.", task: "Logs performance to plot capability radars and dynamically shifts schedules." }
      ],

      // PBL Team Roles
      pblTitle: "Team Role Mapping",
      pblSubtitle: "Duos define clear roles in each phase to simulate professional engineering teams",
      pblRoles: [
        { name: "Product Manager", desc: "Establishes product scope, UX needs, and requirements. Compiles PRDs via LLMs and drafts aesthetics." },
        { name: "Frontend Engineer", desc: "Builds Web client panels using zero-code tools, bridging dashboards to boards via WebSockets." },
        { name: "Backend / Algo Engineer", desc: "Adapts kinematic equations, handles navigation vectors, and links LLMs to chassis motors." },
        { name: "Embedded Hardware Dev", desc: "Validates electronics in virtual Wokwi boards, routes wiring, and flashes firmware." },
        { name: "Mechanical Engineer", desc: "Draws chassis structural meshes with AI scripts, prints files, and manages mechanical mounts." },
        { name: "Project / Integration Manager", desc: "Tracks deadlines on Feishu, controls boards wiring QA, and writes debug logs." }
      ],

      // Evaluation weights
      evalTitle: "Evaluation Metrics & Radars",
      evalSubtitle: "A multi-dimensional appraisal framework plotting student capabilities at course completion",
      evalMetrics: [
        { name: "AI Tool Utilization", weight: 25, desc: "Prompt craftsmanship, LLM debugger efficacy, agent orchestration skill, and output originality." },
        { name: "FabLab Fabrication", weight: 25, desc: "3D CAD accuracy, CNC/laser/printing operations, DFM compliance, and prototyping finish." },
        { name: "Engineering & Novelty", weight: 30, desc: "Chassis kinematic stability, VLM response accuracy, core utility, and systems stability." },
        { name: "Open-Source Collaboration", weight: 20, desc: "Repository layout, code comments, git history, and teamwork milestones." }
      ],

      // Policy & Applications
      policyTitle: "Academic Policies & Applications",
      policySubtitle: "Aligned with regional evaluations and official educational contest guidelines",
      policyItems: [
        {
          region: "Beijing Academic Policy",
          desc: "Aligned to high-school portfolio evaluations. Beijing sessions issue official certificates in collaboration with BNU schools, capturing radar logs and mathematical models to count as high school Research Credits."
        },
        {
          region: "Zhejiang Entrance Policy",
          desc: "Aimed at Triple-in-One admissions. Ningbo sessions run through the UNNC-BDO laboratory. Emphasizes Git version logs and Sim-to-Real algorithms for admissions benefits."
        }
      ],
      contestTitle: "Official Competitions",
      contests: [
        "9th National Youth AI Innovation Contest (Official whitelist competition)",
        "National Youth Science & Tech Invention Contest / NOC Competitions",
        "RoboMaster / RoboCon University Division (For college paths)",
        "China College Students 'Internet+' Innovation Contest"
      ]
    }
  }[lang] || t.zh;

  return (
    <div style={containerStyle}>
      <div className="container-custom">

        {/* Hero Area */}
        <div style={heroWrapperStyle}>
          <h1 className="title-hero" style={{ marginTop: '1rem', marginBottom: '1rem', color: '#ffffff' }}>
            {t.title}
          </h1>
          <p className="description" style={{ marginInline: 'auto', maxWidth: '750px', fontSize: '1.15rem' }}>
            {t.subtitle}
          </p>
        </div>

        {/* Stats Row */}
        <div style={statsRowStyle}>
          {t.stats.map((stat, idx) => (
            <div key={idx} className="glassmorphism-card" style={statCardStyle}>
              <div style={statValueStyle}>{stat.value}</div>
              <div style={statLabelStyle}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* SECTION: Student Profile & Teaching Philosophy (Side-by-side grid) */}
        <section style={{ marginBlock: '4rem 6rem' }}>
          <div className="grid-featured" style={{ gap: '2rem' }}>
            
            {/* Student Profile (Left Col 6) */}
            <div className="grid-col-6 glassmorphism-card" style={profilePanelStyle}>
              <h2 style={{ ...sectionTitleStyle, fontSize: '1.75rem', marginBottom: '1rem' }}>
                <Target size={24} style={{ color: 'var(--klein-blue)', marginRight: '0.5rem', verticalAlign: 'middle' }} />
                {t.profileTitle}
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '2rem' }}>{t.profileSubtitle}</p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {t.profiles.map((p, idx) => (
                  <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>
                    <span style={{ fontSize: '0.85rem', fontWeight: 'bold', color: 'var(--text-primary)', textTransform: 'uppercase' }}>{p.label}</span>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>{p.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Teaching Philosophy (Right Col 6) */}
            <div className="grid-col-6 glassmorphism-card" style={philosophyPanelStyle}>
              <h2 style={{ ...sectionTitleStyle, fontSize: '1.75rem', marginBottom: '1rem' }}>
                <BookOpen size={24} style={{ color: 'var(--klein-blue)', marginRight: '0.5rem', verticalAlign: 'middle' }} />
                {t.philosophyTitle}
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '2rem' }}>{t.philosophySubtitle}</p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {t.philosophies.map((phil, idx) => (
                  <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <div style={philosophyRowStyle('prohibited')}>
                      <AlertTriangle size={16} style={{ color: '#ff453a', flexShrink: 0, marginTop: '0.15rem' }} />
                      <span style={{ fontSize: '0.85rem', color: '#ff453a' }}>{phil.prohibited}</span>
                    </div>
                    <div style={philosophyRowStyle('standard')}>
                      <ShieldCheck size={16} style={{ color: '#30d158', flexShrink: 0, marginTop: '0.15rem' }} />
                      <span style={{ fontSize: '0.85rem', color: '#30d158' }}>{phil.standard}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        
        {/* SECTION: 12-Day Camps Detailed Syllabus */}
        <section style={{ marginBlock: '6rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={sectionTitleStyle}>{t.campTitle}</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{t.campSubtitle}</p>
          </div>

          {/* Camp Selector Tabs */}
          <div style={campTabWrapperStyle}>
            <button 
              onClick={() => setCampTab('junior')}
              style={campTab === 'junior' ? campTabActiveStyle : campTabStyle}
            >
              {t.juniorTab}
            </button>
            <button 
              onClick={() => setCampTab('senior')}
              style={campTab === 'senior' ? campTabActiveStyle : campTabStyle}
            >
              {t.seniorTab}
            </button>
          </div>

          {/* Camp Content Container */}
          <div className="glassmorphism-card" style={campContentStyle}>
            
            {/* Junior Camp Panel */}
            {campTab === 'junior' && (
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem' }}>
                  <span style={conceptTagStyle('junior')}>{t.juniorConcept}</span>
                </div>

                {/* Mobile Responsive Layout / Table */}
                <div style={{ overflowX: 'auto' }}>
                  <table style={campTableStyle}>
                    <thead>
                      <tr style={campTableHeaderRowStyle}>
                        <th style={{ ...campTableHeaderStyle, width: '12%' }}>{t.juniorTableHeaders.day}</th>
                        <th style={{ ...campTableHeaderStyle, width: '28%' }}>{t.juniorTableHeaders.morning}</th>
                        <th style={{ ...campTableHeaderStyle, width: '28%' }}>{t.juniorTableHeaders.afternoon}</th>
                        <th style={{ ...campTableHeaderStyle, width: '16%' }}>{t.juniorTableHeaders.tools}</th>
                        <th style={{ ...campTableHeaderStyle, width: '16%' }}>{t.juniorTableHeaders.deliverable}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {t.juniorDays.map((day, idx) => (
                        <tr key={idx} style={campTableRowStyle(idx)}>
                          <td style={campTableDayCellStyle}>
                            <span style={{ fontWeight: '700', color: 'var(--text-primary)', fontSize: '0.9rem' }}>{day.day}</span>
                            <span style={{ fontSize: '0.75rem', color: 'var(--klein-blue)', display: 'block', marginTop: '0.15rem' }}>{day.theme}</span>
                          </td>
                          <td style={campTableCellStyle}>{day.morning}</td>
                          <td style={campTableCellStyle}>{day.afternoon}</td>
                          <td style={campTableToolsCellStyle}>{day.tools}</td>
                          <td style={campTableDeliverableCellStyle}>{day.deliverable}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Senior Camp Panel */}
            {campTab === 'senior' && (
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem' }}>
                  <span style={conceptTagStyle('senior')}>{t.seniorConcept}</span>
                </div>

                {/* Differences Grid */}
                <div style={{ marginBottom: '3rem' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1.25rem' }}>{t.seniorDiffTitle}</h3>
                  <div className="grid-featured" style={{ gap: '1.5rem' }}>
                    {t.seniorDiffs.map((diff, idx) => (
                      <div key={idx} className="grid-col-4 glassmorphism-card" style={diffCardStyle}>
                        <h4 style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--klein-blue)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <Award size={16} />
                          {diff.title}
                        </h4>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>{diff.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Chronological Phase Listing */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {t.seniorCampOutline.map((phase, idx) => (
                    <div key={idx} className="glassmorphism-card" style={phaseCardStyle}>
                      <div style={phaseHeaderStyle}>
                        <Calendar size={18} style={{ color: 'var(--klein-blue)', flexShrink: 0 }} />
                        <span style={phaseTimeStyle}>{phase.phase}</span>
                        <h4 style={phaseTitleStyle}>{phase.theme}</h4>
                      </div>
                      <p style={phaseDescStyle}>{phase.desc}</p>
                    </div>
                  ))}
                </div>

              </div>
            )}

          </div>
        </section>

        {/* SECTION: Multi-Agent Orchestration */}
        <section style={{ marginBlock: '6rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <h2 style={sectionTitleStyle}>{t.agentTitle}</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{t.agentSubtitle}</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

            {/* Architecture Image */}
            <div className="glassmorphism-card" style={agentVisualFrameStyle}>
              <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '16px', height: '100%', minHeight: '350px' }}>
                <img
                  src="/news/sophigo/assets/architecture.jpg"
                  alt="SophiCar Multi-Agent System Architecture"
                  style={{ width: '100%', height: '100%', objectFit: 'contain', transition: 'transform 0.5s ease' }}
                  className="zoom-image"
                />
              </div>
              <div style={{ marginTop: '1rem', textAlign: 'center' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  SophiCar Multi-Agent System Architecture Diagram (Sim-to-Real Pipeline)
                </span>
              </div>
            </div>

            {/* Agent Interactive Card Grid */}
            <div className="glassmorphism-card" style={agentGridContainerStyle}>
              <div style={{ marginBottom: '0.75rem', textAlign: 'center' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                  点击卡片查看详情
                </span>
              </div>
              <div style={agentGridStyle}>
                {t.agents.map((agent, idx) => (
                  <a
                    key={idx}
                    href={`/courses/mobile-robot/agent-${agentSlugs[idx]}.html`}
                    className="agent-card-lg-link"
                  >
                    <div className="agent-card-lg-inner">
                      <div style={{ fontSize: '2.2rem', marginBottom: '0.5rem', lineHeight: '1', display: 'block' }}>
                        {agentEmojis[idx]}
                      </div>
                      <div style={{ fontWeight: '700', fontSize: '0.8rem', color: 'var(--text-primary)', marginBottom: '0.35rem', lineHeight: '1.3' }}>
                        {agent.role.replace(/^[^\w一-鿿]*\s*/, '')}
                      </div>
                      <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', lineHeight: '1.3' }}>
                        {agent.focus.length > 18 ? agent.focus.slice(0, 18) + '...' : agent.focus}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Architecture Components - 20 Cards Grid */}
            <div className="glassmorphism-card" style={agentOrchestrationFrameStyle}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Bot size={20} style={{ color: 'var(--klein-blue)' }} />
                {t.agentFlowTitle}
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {/* AI工具层 - 5 cards */}
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--klein-blue)', marginBottom: '0.5rem', paddingBottom: '0.25rem', borderBottom: '2px solid var(--klein-blue)' }}>
                    🤖 AI工具层
                  </div>
                  <div style={archCardGridStyle}>
                    {['提示词工程 (Prompt Engineering)', 'Vibe Coding (AI编程)', '多模态文生图/视频生成', 'AI辅助数据分析', 'AI Agent编排与调度'].map((item, i) => (
                      <div key={i} className="arch-card">
                        <span className="arch-card-title">{item.split('(')[0].trim()}</span>
                        {item.includes('(') && <span className="arch-card-sub">{item.split('(')[1].replace(')', '')}</span>}
                      </div>
                    ))}
                  </div>
                </div>

                {/* 教育专家Agent专家集群 - 9 cards */}
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--klein-blue)', marginBottom: '0.5rem', paddingBottom: '0.25rem', borderBottom: '2px solid var(--klein-blue)' }}>
                    🧠 教育专家Agent专家集群
                  </div>
                  <div style={archCardGridStyle}>
                    {[
                      { icon: '🎯', name: 'Orchestrator Agent', detail: '任务拆解与质量评估' },
                      { icon: '⚙️', name: '机械设计 Agent', detail: '参数化建模与结构' },
                      { icon: '🏭', name: '机械制造 Agent', detail: 'DFM校验与BOM生成' },
                      { icon: '🔌', name: '嵌入式硬件 Agent', detail: '电路图与引脚规划' },
                      { icon: '💻', name: '嵌入式软件 Agent', detail: '固件驱动与Vibe Coding' },
                      { icon: '🧠', name: '算法专家 Agent', detail: '运动学与PID调优' },
                      { icon: '🔗', name: '系统集成 Agent', detail: '协议调优与联调诊断' },
                      { icon: '📈', name: '产品与市场 Agent', detail: '竞品分析与商业可行' },
                      { icon: '💰', name: '商业与成本 Agent', detail: '供应链与成本优化' }
                    ].map((item, i) => (
                      <a key={i} href={`/courses/mobile-robot/agent-${['orchestrator','mechanical','manufacturing','hardware','firmware','algorithm','system-integration','product-market','budgeting'][i]}.html`} className="arch-card-link">
                        <div className="arch-card agent">
                          <span className="arch-card-icon">{item.icon}</span>
                          <span className="arch-card-title">{item.name}</span>
                          <span className="arch-card-sub">{item.detail}</span>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* 其他基础层 - remaining 6 cards */}
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--klein-blue)', marginBottom: '0.5rem', paddingBottom: '0.25rem', borderBottom: '2px solid var(--klein-blue)' }}>
                    📦 基础设施与成果
                  </div>
                  <div style={archCardGridStyle}>
                    {[
                      { title: 'Sophi Omni', sub: '全模态融合引擎', emoji: '🌐' },
                      { title: '知识库与数据库底座', sub: 'RAG知识管理', emoji: '📚' },
                      { title: 'Fab实验室', sub: '数字化加工与制造', emoji: '🔧' },
                      { title: '工程软件与工具链', sub: 'MCP连接与API集成', emoji: '🛠️' },
                      { title: '系统集成', sub: '软硬件联合调试', emoji: '🔗' },
                      { title: '输出与成果', sub: '作品集与技术报告', emoji: '🏆' }
                    ].map((item, i) => (
                      <div key={i} className="arch-card infra">
                        <span className="arch-card-icon">{item.emoji}</span>
                        <span className="arch-card-title">{item.title}</span>
                        <span className="arch-card-sub">{item.sub}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Expert Agents Table */}
          <div className="glassmorphism-card" style={{ marginTop: '3rem', padding: '2rem', borderRadius: '24px', overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--border-color)' }}>
                  <th style={{ padding: '1rem', fontSize: '0.85rem', fontWeight: 'bold', color: 'var(--text-muted)', textTransform: 'uppercase', width: '20%' }}>
                    {t.agentHeaders.role}
                  </th>
                  <th style={{ padding: '1rem', fontSize: '0.85rem', fontWeight: 'bold', color: 'var(--text-muted)', textTransform: 'uppercase', width: '35%' }}>
                    {t.agentHeaders.focus}
                  </th>
                  <th style={{ padding: '1rem', fontSize: '0.85rem', fontWeight: 'bold', color: 'var(--text-muted)', textTransform: 'uppercase', width: '45%' }}>
                    {t.agentHeaders.task}
                  </th>
                </tr>
              </thead>
              <tbody>
                {t.agents.map((agent, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid var(--border-color)', backgroundColor: idx % 2 === 0 ? 'rgba(0,0,0,0.01)' : 'transparent' }}>
                    <td style={{ padding: '1rem', fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-primary)' }}>{agent.role}</td>
                    <td style={{ padding: '1rem', fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>{agent.focus}</td>
                    <td style={{ padding: '1rem', fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>{agent.task}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION: PBL Role Mapping & Evaluation Weights */}
        <section style={{ marginBlock: '6rem' }}>
          <div className="grid-featured" style={{ gap: '2rem' }}>
            
            {/* PBL Roles (Col 6) */}
            <div className="grid-col-6 glassmorphism-card" style={{ padding: '2.5rem', borderRadius: '24px' }}>
              <h2 style={{ ...sectionTitleStyle, fontSize: '1.75rem', marginBottom: '0.5rem' }}>{t.pblTitle}</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '2rem' }}>{t.pblSubtitle}</p>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
                {t.pblRoles.map((role, idx) => (
                  <div key={idx} style={pblRoleMiniCardStyle}>
                    <span style={{ fontSize: '0.9rem', fontWeight: 'bold', color: 'var(--klein-blue)', display: 'block', marginBottom: '0.35rem' }}>
                      {role.name}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
                      {role.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Evaluation weights (Col 6) */}
            <div className="grid-col-6 glassmorphism-card" style={{ padding: '2.5rem', borderRadius: '24px' }}>
              <h2 style={{ ...sectionTitleStyle, fontSize: '1.75rem', marginBottom: '0.5rem' }}>{t.evalTitle}</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '2rem' }}>{t.evalSubtitle}</p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
                {t.evalMetrics.map((met, idx) => (
                  <div key={idx}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', alignItems: 'center' }}>
                      <span style={{ fontWeight: '600', fontSize: '0.9rem' }}>{met.name}</span>
                      <span style={{ fontWeight: 'bold', color: 'var(--klein-blue)', fontSize: '1rem' }}>{met.weight}%</span>
                    </div>
                    {/* Visual bar */}
                    <div style={{ width: '100%', height: '8px', borderRadius: '4px', backgroundColor: 'var(--border-color)', overflow: 'hidden', marginBottom: '0.35rem' }}>
                      <div style={{ width: `${met.weight}%`, height: '100%', backgroundColor: 'var(--klein-blue)', borderRadius: '4px' }}></div>
                    </div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: '1.4', display: 'block' }}>{met.desc}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* SECTION: Policy, Events & Scenarios */}
        <section style={{ marginBlock: '6rem 8rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <h2 style={sectionTitleStyle}>{t.policyTitle}</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{t.policySubtitle}</p>
          </div>

          <div className="grid-featured" style={{ gap: '2rem' }}>
            
            {/* Policy environmental items (Col 6) */}
            <div className="grid-col-6 glassmorphism-card" style={{ padding: '2.5rem', borderRadius: '24px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {t.policyItems.map((item, idx) => (
                <div key={idx} style={{ padding: '1.25rem', borderRadius: '16px', backgroundColor: 'rgba(0,0,0,0.01)', border: '1px solid var(--border-color)' }}>
                  <h4 style={{ fontWeight: '700', fontSize: '1.05rem', color: 'var(--klein-blue)', marginBottom: '0.5rem' }}>
                    {item.region}
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Contests list items (Col 6) */}
            <div className="grid-col-6 glassmorphism-card" style={{ padding: '2.5rem', borderRadius: '24px' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Award size={22} style={{ color: 'var(--klein-blue)' }} />
                {t.contestTitle}
              </h3>
              
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {t.contests.map((cont, idx) => (
                  <li key={idx} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--klein-blue)', marginTop: '0.45rem', flexShrink: 0 }}></div>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                      {cont}
                    </span>
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <a href="/courses/mobile-robot/Chineseedulist.html" style={{ fontSize: '0.9rem', color: 'var(--klein-blue)', textDecoration: 'underline', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <ExternalLink size={14} /> 查看教育部白名单赛事详情
                </a>
                <a href="/courses/mobile-robot/international-competitions.html" style={{ fontSize: '0.9rem', color: 'var(--klein-blue)', textDecoration: 'underline', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <ExternalLink size={14} /> 国际机器人与科创赛事概览
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION: Modular Chassis Evolution (moved to bottom) */}
        <section style={{ marginBlock: '6rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <h2 style={sectionTitleStyle}>{t.chassisTitle}</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{t.chassisSubtitle}</p>
          </div>

          {/* Interactive Chassis Display */}
          <div className="glassmorphism-card" style={chassisContainerStyle}>

            {/* Left Nav Menu */}
            <div style={chassisNavStyle}>
              {t.chassisOptions.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedChassis(idx)}
                  style={selectedChassis === idx ? chassisBtnActiveStyle : chassisBtnStyle}
                >
                  <span style={{ fontWeight: '700' }}>{opt.id}</span>
                  <span style={{ fontSize: '0.8rem', opacity: 0.8, textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}>{opt.name}</span>
                </button>
              ))}
            </div>

            {/* Right Display Panel */}
            <div style={chassisDetailsPanelStyle(selectedChassis === 4)}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '1rem' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: selectedChassis === 4 ? 'var(--klein-blue)' : 'var(--text-primary)' }}>
                  {t.chassisOptions[selectedChassis].id}: {t.chassisOptions[selectedChassis].name}
                </h3>
                {selectedChassis === 4 && (
                  <span style={badgeOmniStyle}>Ultimate Core Direction</span>
                )}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <h4 style={chassisLabelStyle}>🛠️ 设计细节 (Design Specifications)</h4>
                  <p style={chassisValueStyle}>{t.chassisOptions[selectedChassis].desc}</p>
                </div>

                <div>
                  <h4 style={chassisLabelStyle}>🎮 交互与控制特征 (Control & Interaction)</h4>
                  <p style={chassisValueStyle}>{t.chassisOptions[selectedChassis].interaction}</p>
                </div>

                <div>
                  <h4 style={chassisLabelStyle}>🎯 最佳适用场景 (Best Scenario)</h4>
                  <p style={chassisValueStyle}>{t.chassisOptions[selectedChassis].scene}</p>
                </div>
              </div>
            </div>

          </div>

          {/* Core recommendation box */}
          <div className="glassmorphism-card" style={recommendationBoxStyle}>
            <h4 style={{ fontWeight: '700', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span>{t.recommendationTitle}</span>
            </h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              {t.recommendationDesc}
            </p>
          </div>
        </section>

        {/* Section: Course Syllabus Outline (moved to bottom) */}
        <section style={{ marginBlock: '6rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={sectionTitleStyle}>{t.outlineTitle}</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{t.outlineSubtitle}</p>
          </div>

          <div style={timelineWrapperStyle}>
            {t.modules.map((mod, idx) => (
              <div key={idx} className="glassmorphism-card" style={timelineCardStyle}>

                {/* Visual marker */}
                <div style={numberCircleStyle}>
                  {mod.num}
                </div>

                {/* Left content detail */}
                <div style={moduleIntroStyle}>
                  <span style={moduleTagStyle}>{mod.tag}</span>
                  <h3 style={moduleTitleStyle}>{mod.title}</h3>
                  <p style={moduleDescStyle}>{mod.desc}</p>

                  {/* Action Link to Vitepress */}
                  <a
                    href={mod.link}
                    style={detailsLinkStyle}
                    className="btn-cta"
                  >
                    <span>{t.viewDetails}</span>
                    <ExternalLink size={14} />
                  </a>
                </div>

                {/* Right bullet lists */}
                <div style={modulePointsStyle}>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {mod.points.map((pt, pIdx) => (
                      <li key={pIdx} style={pointItemStyle}>
                        <CheckCircle size={16} style={{ color: 'var(--klein-blue)', flexShrink: 0, marginTop: '0.15rem' }} />
                        <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            ))}
          </div>
        </section>

      </div>

      {/* Hover Image Zoom Style */}
      <style>{`
        .zoom-image:hover {
          transform: scale(1.03);
        }
        .agent-card-link:hover .agent-card-inner {
          transform: scale(1.08);
          border-color: var(--klein-blue);
          box-shadow: 0 8px 24px rgba(0, 47, 167, 0.2);
          background-color: rgba(0, 47, 167, 0.06);
        }
        .agent-card-link {
          text-decoration: none;
          color: inherit;
          display: block;
          border-radius: 12px;
          transition: transform 0.3s ease;
        }
        .agent-card-link:hover {
          transform: translateY(-2px);
        }
        .agent-card-inner {
          padding: 0.75rem 0.5rem;
          border-radius: 12px;
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          text-align: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          min-height: 68px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
        }
        .agent-card-lg-link {
          text-decoration: none;
          color: inherit;
          display: block;
          border-radius: 16px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .agent-card-lg-link:hover {
          transform: translateY(-4px);
        }
        .agent-card-lg-link:hover .agent-card-lg-inner {
          transform: scale(1.05);
          border-color: var(--klein-blue);
          box-shadow: 0 12px 32px rgba(0, 47, 167, 0.25);
          background: linear-gradient(135deg, rgba(0, 47, 167, 0.08), rgba(74, 158, 255, 0.04));
        }
        .agent-card-lg-inner {
          padding: 1.25rem 0.75rem;
          border-radius: 16px;
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(0,0,0,0.04);
          height: 100%;
        }
        .arch-card-link {
          text-decoration: none;
          color: inherit;
          display: block;
          border-radius: 12px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .arch-card-link:hover {
          transform: translateY(-3px);
        }
        .arch-card-link:hover .arch-card {
          border-color: var(--klein-blue);
          box-shadow: 0 8px 24px rgba(0, 47, 167, 0.2);
          background: linear-gradient(135deg, rgba(0, 47, 167, 0.08), rgba(74, 158, 255, 0.04));
        }
        .arch-card {
          padding: 1rem 0.75rem;
          border-radius: 12px;
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.35rem;
          cursor: default;
          transition: all 0.3s ease;
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
          height: 100%;
          min-height: 72px;
        }
        .arch-card.agent {
          cursor: pointer;
        }
        .arch-card.infra {
          background: linear-gradient(135deg, rgba(0,47,167,0.03), rgba(0,0,0,0.01));
        }
        .arch-card-icon {
          font-size: 1.6rem;
          line-height: 1;
          display: block;
        }
        .arch-card-title {
          font-weight: 700;
          font-size: 0.78rem;
          color: var(--text-primary);
          line-height: 1.3;
          display: block;
        }
        .arch-card-sub {
          font-size: 0.65rem;
          color: var(--text-muted);
          line-height: 1.3;
          display: block;
        }
      `}</style>
    </div>
  );
}

// Styling Constants (Inline CSS for flexibility and complete control matching index.css styles)

const containerStyle = {
  paddingTop: '3rem',
  paddingBottom: '4rem',
  minHeight: '80vh',
  position: 'relative',
  zIndex: 5
};

const backBtnStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.5rem',
  padding: '0.5rem 1.25rem',
  fontSize: '0.85rem',
  borderRadius: '20px',
  cursor: 'pointer',
  marginBottom: '2rem'
};

const heroWrapperStyle = {
  textAlign: 'center',
  maxWidth: '900px',
  marginInline: 'auto',
  marginBottom: '3rem'
};

const tagStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.35rem',
  backgroundColor: 'var(--klein-blue-glow)',
  color: 'var(--text-primary)',
  border: '1px solid var(--border-color)',
  fontSize: '0.75rem',
  fontWeight: 600,
  padding: '0.35rem 0.85rem',
  borderRadius: '9999px',
  backdropFilter: 'blur(8px)',
  textTransform: 'uppercase',
  letterSpacing: '0.05em'
};

const statsRowStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: '1.5rem',
  maxWidth: '1000px',
  margin: '0 auto 4rem',
  width: '100%'
};

const statCardStyle = {
  padding: '1.5rem',
  borderRadius: '16px',
  border: '1px solid var(--border-color)',
  textAlign: 'center',
  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.02)'
};

const statValueStyle = {
  fontSize: '1.75rem',
  fontWeight: '700',
  color: 'var(--klein-blue)',
  marginBottom: '0.25rem'
};

const statLabelStyle = {
  fontSize: '0.8rem',
  color: 'var(--text-muted)',
  textTransform: 'uppercase',
  letterSpacing: '0.05em'
};

const sectionTitleStyle = {
  fontSize: '2rem',
  fontWeight: '700',
  marginBottom: '0.75rem',
  letterSpacing: '-0.02em'
};

const audienceCardStyle = {
  padding: '2.25rem 2rem',
  borderRadius: '20px',
  border: '1px solid var(--border-color)',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease, border-color 0.3s ease',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.02)',
  height: '100%'
};

const iconWrapperStyle = {
  width: '56px',
  height: '56px',
  borderRadius: '14px',
  backgroundColor: 'var(--klein-blue-glow)',
  color: 'var(--klein-blue)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

const audienceDescStyle = {
  fontSize: '0.875rem',
  color: 'var(--text-secondary)',
  lineHeight: '1.6',
  marginBottom: '1.5rem',
  flexGrow: 1
};

const badgesWrapperStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.5rem',
  marginTop: 'auto'
};

const badgeStyle = {
  fontSize: '0.75rem',
  fontWeight: 500,
  padding: '0.25rem 0.65rem',
  borderRadius: '6px',
  backgroundColor: 'var(--bg-secondary)',
  border: '1px solid var(--border-color)',
  color: 'var(--text-secondary)'
};

const timelineWrapperStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '2.5rem',
  position: 'relative'
};

const timelineCardStyle = {
  padding: '2.5rem',
  borderRadius: '24px',
  border: '1px solid var(--border-color)',
  display: 'flex',
  gap: '2.5rem',
  alignItems: 'stretch',
  position: 'relative',
  flexWrap: 'wrap',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.01)'
};

const numberCircleStyle = {
  position: 'absolute',
  top: '-16px',
  left: '2.5rem',
  width: '36px',
  height: '36px',
  borderRadius: '50%',
  backgroundColor: 'var(--text-primary)',
  color: 'var(--bg-primary)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: '700',
  fontSize: '0.9rem',
  border: '4px solid var(--bg-primary)',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.15)'
};

const moduleIntroStyle = {
  flex: '1 1 380px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start'
};

const moduleTagStyle = {
  fontSize: '0.75rem',
  fontWeight: 600,
  textTransform: 'uppercase',
  color: 'var(--klein-blue)',
  letterSpacing: '0.1em',
  marginBottom: '0.5rem'
};

const moduleTitleStyle = {
  fontSize: '1.35rem',
  fontWeight: '600',
  marginBottom: '1rem',
  lineHeight: '1.3'
};

const moduleDescStyle = {
  fontSize: '0.9rem',
  color: 'var(--text-secondary)',
  lineHeight: '1.6',
  marginBottom: '1.75rem'
};

const detailsLinkStyle = {
  padding: '0.55rem 1.5rem',
  borderRadius: '20px',
  fontSize: '0.85rem',
  fontWeight: '500',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.5rem',
  textDecoration: 'none',
  marginTop: 'auto'
};

const modulePointsStyle = {
  flex: '1 1 320px',
  backgroundColor: 'rgba(0,0,0,0.02)',
  padding: '1.75rem 2rem',
  borderRadius: '16px',
  border: '1px solid var(--border-color)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
};

const pointItemStyle = {
  display: 'flex',
  gap: '0.75rem',
  alignItems: 'flex-start'
};

// NEW UI STYLES

const profilePanelStyle = {
  padding: '2.5rem',
  borderRadius: '24px',
  display: 'flex',
  flexDirection: 'column'
};

const philosophyPanelStyle = {
  padding: '2.5rem',
  borderRadius: '24px',
  display: 'flex',
  flexDirection: 'column'
};

const philosophyRowStyle = (type) => ({
  display: 'flex',
  gap: '0.75rem',
  alignItems: 'flex-start',
  padding: '1rem 1.25rem',
  borderRadius: '12px',
  backgroundColor: type === 'prohibited' ? 'rgba(255, 69, 58, 0.05)' : 'rgba(48, 209, 88, 0.05)',
  border: `1px solid ${type === 'prohibited' ? 'rgba(255, 69, 58, 0.15)' : 'rgba(48, 209, 88, 0.15)'}`
});

const chassisContainerStyle = {
  display: 'flex',
  borderRadius: '24px',
  overflow: 'hidden',
  border: '1px solid var(--border-color)',
  flexWrap: 'wrap'
};

const chassisNavStyle = {
  flex: '1 1 250px',
  display: 'flex',
  flexDirection: 'column',
  borderRight: '1px solid var(--border-color)',
  backgroundColor: 'rgba(0,0,0,0.02)'
};

const chassisBtnStyle = {
  padding: '1.25rem 1.5rem',
  border: 'none',
  background: 'none',
  borderBottom: '1px solid var(--border-color)',
  textAlign: 'left',
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.25rem',
  color: 'var(--text-secondary)',
  transition: 'all 0.2s ease'
};

const chassisBtnActiveStyle = {
  ...chassisBtnStyle,
  backgroundColor: 'var(--bg-primary)',
  color: 'var(--klein-blue)',
  borderLeft: '4px solid var(--klein-blue)'
};

const chassisDetailsPanelStyle = (isRecommended) => ({
  flex: '2 1 450px',
  padding: '2.5rem',
  backgroundColor: 'var(--bg-card)',
  display: 'flex',
  flexDirection: 'column',
  boxShadow: isRecommended ? 'inset 0 0 20px rgba(0, 47, 167, 0.05)' : 'none'
});

const badgeOmniStyle = {
  fontSize: '0.75rem',
  fontWeight: '700',
  color: 'white',
  backgroundColor: 'var(--klein-blue)',
  padding: '0.25rem 0.75rem',
  borderRadius: '9999px',
  textTransform: 'uppercase',
  letterSpacing: '0.05em'
};

const chassisLabelStyle = {
  fontSize: '0.8rem',
  fontWeight: 'bold',
  color: 'var(--text-muted)',
  textTransform: 'uppercase',
  marginBottom: '0.5rem',
  letterSpacing: '0.05em'
};

const chassisValueStyle = {
  fontSize: '0.9rem',
  color: 'var(--text-secondary)',
  lineHeight: '1.6'
};

const recommendationBoxStyle = {
  marginTop: '2rem',
  padding: '1.5rem 2rem',
  borderRadius: '16px',
  borderLeft: '4px solid var(--klein-blue)',
  backgroundColor: 'rgba(0, 47, 167, 0.03)'
};

const campTabWrapperStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '1rem',
  marginBottom: '2rem',
  flexWrap: 'wrap'
};

const campTabStyle = {
  padding: '0.75rem 2rem',
  borderRadius: '9999px',
  border: '1px solid var(--border-color)',
  background: 'rgba(0,0,0,0.02)',
  color: 'var(--text-secondary)',
  fontSize: '0.95rem',
  fontWeight: '500',
  cursor: 'pointer',
  transition: 'all 0.2s ease'
};

const campTabActiveStyle = {
  ...campTabStyle,
  background: 'var(--text-primary)',
  color: 'var(--bg-primary)',
  borderColor: 'var(--text-primary)'
};

const campContentStyle = {
  padding: '2.5rem',
  borderRadius: '24px'
};

const conceptTagStyle = (type) => ({
  fontSize: '0.95rem',
  fontWeight: '600',
  color: type === 'junior' ? '#30d158' : 'var(--klein-blue)'
});

const campTableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  textAlign: 'left',
  minWidth: '800px'
};

const campTableHeaderRowStyle = {
  borderBottom: '2px solid var(--border-color)'
};

const campTableHeaderStyle = {
  padding: '1rem',
  fontSize: '0.8rem',
  fontWeight: 'bold',
  color: 'var(--text-muted)',
  textTransform: 'uppercase'
};

const campTableRowStyle = (idx) => ({
  borderBottom: '1px solid var(--border-color)',
  backgroundColor: idx % 2 === 0 ? 'rgba(0,0,0,0.01)' : 'transparent',
  transition: 'background-color 0.2s ease'
});

const campTableCellStyle = {
  padding: '1.25rem 1rem',
  fontSize: '0.85rem',
  color: 'var(--text-secondary)',
  lineHeight: '1.5',
  verticalAlign: 'top'
};

const campTableDayCellStyle = {
  ...campTableCellStyle,
  display: 'flex',
  flexDirection: 'column'
};

const campTableToolsCellStyle = {
  ...campTableCellStyle,
  fontSize: '0.8rem',
  fontFamily: 'var(--font-mono)',
  color: 'var(--text-muted)'
};

const campTableDeliverableCellStyle = {
  ...campTableCellStyle,
  fontWeight: '500',
  color: 'var(--text-primary)'
};

const diffCardStyle = {
  padding: '1.5rem',
  borderRadius: '16px',
  border: '1px solid var(--border-color)',
  height: '100%'
};

const phaseCardStyle = {
  padding: '1.5rem 2rem',
  borderRadius: '16px',
  border: '1px solid var(--border-color)'
};

const phaseHeaderStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
  marginBottom: '0.75rem',
  flexWrap: 'wrap'
};

const phaseTimeStyle = {
  fontSize: '0.75rem',
  fontWeight: '700',
  color: 'white',
  backgroundColor: 'var(--klein-blue)',
  padding: '0.15rem 0.5rem',
  borderRadius: '4px',
  textTransform: 'uppercase'
};

const phaseTitleStyle = {
  fontSize: '1.1rem',
  fontWeight: '700'
};

const phaseDescStyle = {
  fontSize: '0.9rem',
  color: 'var(--text-secondary)',
  lineHeight: '1.6',
  paddingLeft: '1.5rem'
};

const agentVisualFrameStyle = {
  padding: '2rem',
  borderRadius: '24px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
};

const agentGridContainerStyle = {
  padding: '2rem',
  borderRadius: '24px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
};

const agentGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(170px, 1fr))',
  gap: '1rem',
  width: '100%'
};

const agentOrchestrationFrameStyle = {
  padding: '2.5rem',
  borderRadius: '24px',
  display: 'flex',
  flexDirection: 'column'
};

const nodeFlowWrapperStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  marginBlock: '1rem'
};

const flowNodeStyle = (type) => ({
  width: '100%',
  maxWidth: '300px',
  padding: '0.75rem 1rem',
  borderRadius: '12px',
  textAlign: 'center',
  border: '1px solid var(--border-color)',
  backgroundColor: type === 'input' 
    ? 'rgba(0,0,0,0.02)' 
    : type === 'orch' 
    ? 'var(--klein-blue-glow)' 
    : type === 'verify' 
    ? 'rgba(48, 209, 88, 0.05)'
    : 'rgba(255, 159, 10, 0.05)',
  borderColor: type === 'orch' ? 'var(--klein-blue)' : 'var(--border-color)',
  boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
});

const flowNodeTitleStyle = {
  fontWeight: 'bold',
  fontSize: '0.8rem',
  display: 'block',
  color: 'var(--text-primary)'
};

const flowNodeDescStyle = {
  fontSize: '0.65rem',
  color: 'var(--text-muted)',
  display: 'block',
  marginTop: '0.15rem'
};

const flowConnectorStyle = {
  fontSize: '1.25rem',
  color: 'var(--text-muted)',
  marginBlock: '0.25rem',
  fontWeight: 'bold'
};

const archCardGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
  gap: '0.75rem',
  width: '100%'
};

const parallelNodesWrapperStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '0.75rem',
  width: '100%',
  maxWidth: '480px',
  marginBlock: '0.5rem'
};


const pblRoleMiniCardStyle = {
  padding: '1.25rem',
  borderRadius: '16px',
  backgroundColor: 'rgba(0,0,0,0.01)',
  border: '1px solid var(--border-color)',
  height: '100%'
};
