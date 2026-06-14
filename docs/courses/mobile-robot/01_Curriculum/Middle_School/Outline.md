# 初中组：AI 机器人产品体验营 — 12 天白盒化大纲

> 版本：v2.0 | 生成：Hermes (DeepSeek-V4-Pro) 直接单兵输出
> 输入源：概况.pdf / Course_Map.md / Competency_Model.md / DeepLearning.AI 课程体系 / phuryn/pm-skills
> 核心硬件：ESP32-CAM（摄像头集成 ESP32-S3 模组）
> 通信骨架：公网 MQTT Broker（broker.emqx.io:1883）+ Wi-Fi STA 模式
> 云端推理：Qwen-VL-Max / 通义千问 Vision API（VLM JSON 动作原语流）
> 前端栈：纯静态 HTML5 + Web Speech API（ASR）+ MQTT.js (CDN) + Chart.js

---

## Day 01 — 问题挖掘：产品经理思维 + AI 原生工作流启蒙

### 【上午核心概念】
- **DeepLearning.AI 降维可视化**：「How AI Sees the World」— Embedding 空间直觉：将「校园不便问题」作为文本语料输入 AI，可视化 Token→Embedding→Semantic Space 的大模型将文字转为数学向量的过程，使学生理解「AI 如何理解人类语言」而非魔法。
- **phuryn/pm-skills 方法注入**：`pm-opportunity-solution-tree`（机会树）— 以「校园/家庭/社区」为根节点，引导学生用 AI 在 3 个场景下各脑暴 10 个痛点（共 30 个），再手工投票裁剪至 Top 5，形成第一层机会树。
- **产品定义入门**：`pm-user-personas` — AI 对 Top 3 问题自动生成用户画像卡片（姓名/年龄/场景/痛点/情绪曲线），学生审核修正。

### 【下午实操闭环】
- **ESP32-CAM 开箱通电**：烧录出厂固件、确认串口驱动、摄像头模组 FPC 排线对接，完成「Hello World」LED 闪烁——第一次物理世界反馈。
- **MQTT 初体验**：在笔记本电脑端用 MQTT.js（CDN 静态页）连接公网 `broker.emqx.io:1883`，发布 `sophilab/teamX/hello` 主题；ESP32-CAM 订阅同一主题并点亮板载 LED——打通「网页→云→硬件」闭环第一环。
- **Git 工程初始化**：`git init` + `.gitignore`（固件 bin / 飞书导出） + 首次 Commit：「PRD 草稿 + 机会树 Mermaid 图 + 首次 MQTT 通断测试截图」。
- **排错要点**：Wi-Fi 2.4G/5G 频段问题、MQTT Broker 端口被校网防火墙拦截的备选方案（TLS 8883 / WebSocket 8083）、FPC 排线接触不良的物理复紧技巧。

### 【核心产出指标】
| 产出物 | Git Commit 证据 | 合格标准 |
|--------|----------------|---------|
| 机会树 Mermaid 图 | `docs/opportunity_tree.md` | ≥3 场景 × ≥8 痛点，含投票结果标注 |
| PRD v0.1 草稿 | `docs/prd_v0.1.md` | 含 1 个核心问题定义 + AI 生成用户画像 |
| MQTT 首次通断测试 | `assets/day01_mqtt_test.png` | 网页 Publish → ESP32 LED 响应 ≤ 2s |
| 飞书项目看板 | 飞书截图入 Git | 含 12 天里程碑甘特图 + 双人分工 |

---

## Day 02 — 功能定义：提示词工程 + 硬件认知 + 文生图迭代

### 【上午核心概念】
- **DeepLearning.AI 降维可视化**：「ChatGPT Prompt Engineering for Developers」核心萃取 — Tokenization 白盒实验：用 AI 将同一句中文需求分别以「模糊指令 / 三要素指令 / 角色约束指令」三种 Prompt 做 Token 切分对比，可视化「提示词质量 → Token 效率」的映射关系。
- **phuryn/pm-skills 方法注入**：`pm-user-stories`（用户故事 3C）— 以「As a ___, I want ___, So that ___」模板为机器人定义 5 条核心用户故事，AI 逐条评审并标注 INVEST 合规度。
- **功能优先级矩阵**：`pm-prioritization-frameworks` — 使用 Impact × Effort 矩阵（AI 自动估算每个功能的复杂度），学生在双人组内辩论出 MVP 功能集。

### 【下午实操闭环】
- **ESP32-CAM 首次拍照→MQTT 上行**：AI 生成 Arduino 代码（ESP32-CAM 拍照 → Base64 编码 → MQTT Publish 到 `sophilab/teamX/camera/raw`），学生审核、烧录、验证——浏览器端 MQTT 订阅接收首张照片。
- **静态前端图片看板**：AI 生成静态 HTML 页面（MQTT.js 订阅图片 Base64 → `<img>` 渲染），学生将页面托管到 GitHub Pages 或本地 Live Server，完成「摄像头→云 Broker→网页」实时图传。
- **文生图概念迭代**：用通义万相 / Midjourney 对机器人外观做 3 轮 Prompt 迭代（含材质/颜色/形态三要素），选出最终概念图。
- **排错要点**：ESP32-CAM 拍照内存不足（降低分辨率至 QVGA）、Base64 分片 MQTT 传输（Payload > 128KB 截断问题）、Wi-Fi 重连看门狗机制。

### 【核心产出指标】
| 产出物 | Git Commit 证据 | 合格标准 |
|--------|----------------|---------|
| PRD v1.0 终稿 | `docs/prd_v1.0.md` | 含 5 条用户故事 + Impact×Effort 矩阵 + 功能 MVP 范围 |
| 提示词工程作业 | `docs/prompt_engineering.md` | 3 组对比 Prompt + Token 分析 |
| 机器人概念图 | `assets/concept_render_v3.png` | ≥3 轮迭代，风格统一 |
| 首次 MQTT 图传 | `src/esp32/mqtt_camera.ino` | 拍照→MQTT→网页显示延迟 ≤ 3s |

---

## Day 03 — 参数化结构设计：CMF/DFM 规范 + AI 方案三选一

### 【上午核心概念】
- **DeepLearning.AI 降维可视化**：「How Diffusion Models Work」— 将扩散模型的前向加噪/反向去噪过程类比为「3D 模型从模糊概念到精确几何」的收敛过程，直观理解 AI 如何从噪声中生成结构。
- **phuryn/pm-skills 方法注入**：`pm-prioritize-assumptions` — 对昨日定义的机器人功能做「假设×风险」矩阵，识别出最危险的假设（如「底盘能承重 500g 摄像头模组」），将其转化为下午的物理验证指标。
- **CMF + DFM 基础**：颜色(Color)/材质(Material)/表面处理(Finish) 三要素 + 可制造性设计（FDM 3D 打印 45° 悬垂规则、支撑结构最小化、层高-强度权衡）。

### 【下午实操闭环】
- **参数化底盘生成**：通过 sophicar.com 或 AI 直接生成 3 种底盘 STL 方案（轻量型/稳重型/美观型），学生从结构稳定性（CAE 仿真云图）、整机重量（切片软件预估克数）、美观度三个维度做横向对比决策。
- **ESP32-CAM 支架设计**：AI 生成摄像头俯仰云台支架（适配 SG90 舵机），学生调整参数（俯仰角 ±45°、安装孔距）后导出 STL。
- **静态前端方案对比看板**：HTML 页面展示 3 个底盘方案的 Three.js 简易渲染对比 + 决策维度雷达图（Chart.js）。
- **排错要点**：STL 非流形边修复（Netfabb 在线工具）、支撑结构过多导致打印失败、舵机扭矩不足导致摄像头抖动。

### 【核心产出指标】
| 产出物 | Git Commit 证据 | 合格标准 |
|--------|----------------|---------|
| 3 种底盘 STL 文件 | `cad/chassis_v1_light.stl` / `_stable.stl` / `_aero.stl` | 可切片、无破面 |
| 方案选型决策表 | `docs/design_decision_matrix.md` | 3 维度量化评分 + 最终选择理由 |
| 假设验证报告 | `docs/assumption_test.md` | ≥3 条假设 × 风险评估 |
| 对比看板网页 | `web/design_compare.html` | Three.js 三模型并排 + 雷达图 |

---

## Day 04 — 数字制造：3D 打印实操 + ESP32-CAM 嵌入式启蒙

### 【上午核心概念】
- **FabAcademy 制造原理**：FDM 熔融沉积成型工艺参数解剖 — 挤出头温度（PLA 200±5°C / PETG 240±5°C）、热床附着（PEI 弹簧钢板 vs 美纹纸）、层高(0.2mm)与打印时间的非线性关系。
- **phuryn/pm-skills 方法注入**：`pm-dummy-dataset` — 用 AI 生成 3D 打印失败案例数据集（翘边/拉丝/堵头/层移），训练学生「读打印失败现象→推断根因」的诊断思维。
- **嵌入式认知启蒙**：ESP32-S3 引脚功能分类（GPIO / ADC / Touch / SPI / I2C），不教电路原理，只教「哪个口接什么外设」，AI 动态生成引脚映射图。

### 【下午实操闭环】
- **3D 打印实操**：切片（Cura/PrusaSlicer）→ 上机打印底盘 + 舵机支架（预估 2-4h，提前启动），学生监控首层附着、填充密度检查。
- **Wokwi 仿真接线**：在 Wokwi 平台搭建 ESP32-CAM + L298N 电机驱动 + 2 轮差速底盘的虚拟电路，AI 生成接线图，学生先在仿真中验证再对照物理接线。
- **物理接线**：ESP32-CAM → 电机驱动模块 → TT 马达 → 电池（7.4V 2S LiPo），完成底盘基本供电回路。
- **排错要点**：打印首层不粘床（调平 + 涂胶）、L298N 逻辑供电与电机供电隔离（共地必接）、电池电压不足时电机堵转的欠压保护。

### 【核心产出指标】
| 产出物 | Git Commit 证据 | 合格标准 |
|--------|----------------|---------|
| Wokwi 仿真模型 | `sim/wokwi_diagram.json` | 电机可虚拟旋转、引脚无冲突 |
| 物理接线实物 | `assets/day04_wiring.jpg` | 线色区分（红正/黑负/黄信号），无裸线 |
| 3D 打印完成件 | `assets/day04_prints.jpg` | 底盘 + 支架无翘边，装配面无毛刺 |
| 制造日志 | `docs/fabrication_log.md` | 含打印参数 + 失败/修正记录 + 切片截图 |

---

## Day 05 — 运动控制：AI 代码生成 + MQTT 远程驾驶

### 【上午核心概念】
- **DeepLearning.AI 降维可视化**：「AI Agentic Design Patterns」— 将机器人控制抽象为 Agentic Loop（感知→规划→行动→反馈），可视化「Reflection Pattern」：机器人执行动作后通过 MQTT 回传状态，形成闭环——这是大模型 Agent 的最小控制单元。
- **phuryn/pm-skills 方法注入**：`pm-test-scenarios` — 为运动控制固件定义 8 条测试场景（前进 1m / 原地左转 90° / 倒退 30cm / 8 字绕桩等），每条场景包含 Given/When/Then 验收条件。
- **差速运动学直觉**：左轮速度 vL、右轮速度 vR → 线速度 v = (vL+vR)/2、角速度 ω = (vR-vL)/L（不要求公式推导，用电风扇 + 转盘做物理直觉演示）。

### 【下午实操闭环】
- **AI 纯生成运动控制固件**：学生用自然语言描述运动需求（「用 MQTT 接收 JSON 指令 `{cmd:"forward",speed:150,duration:1000}` 并驱动电机」），AI 生成完整 Arduino 代码，学生审核→编译→烧录。
- **MQTT 远程驾驶**：在静态网页上添加方向按钮（↑↓←→ 停止），按键触发 MQTT Publish JSON 运动指令，ESP32 订阅后执行，实现「网页遥控车」。
- **首次运动测试**：按照上午定义的 8 条测试场景逐条验证，记录实际轨迹与预期轨迹的偏差。
- **排错要点**：PWM 频率导致电机啸叫（调至 1kHz 以上）、左右轮转速不一致（PWM 校准系数）、MQTT JSON 解析内存溢出（ArduinoJSON StaticJsonDocument 大小）。

### 【核心产出指标】
| 产出物 | Git Commit 证据 | 合格标准 |
|--------|----------------|---------|
| 运动控制固件 | `src/esp32/motion_control.ino` | 响应 MQTT JSON 指令，4 方向运动正常 |
| 8 条测试报告 | `docs/motion_test_report.md` | 含每条的给定/实际轨迹偏差 |
| 网页遥控界面 | `web/remote_control.html` | ↑↓←→ + STOP 按钮 + MQTT 状态反馈 |
| 首次运动视频 | `assets/day05_first_drive.mp4` | <30s，含 8 字绕桩镜头 |

---

## Day 06 — 传感器融合 + 整机总装：多外设集成与工业理线

### 【上午核心概念】
- **DeepLearning.AI 降维可视化**：「Multimodal AI」概念下沉 — 类比人脑的多感官融合（视觉+听觉+触觉），展示机器人如何将超声波（距离）、摄像头（视觉）、IMU（姿态）三种模态在时间轴上对齐，构成「机器人对世界的多维感知快照」。
- **phuryn/pm-skills 方法注入**：`pm-cohort-analysis` — 用 AI 模拟不同传感器组合方案（仅超声波 / 仅摄像头 / 超声波+摄像头融合）的避障成功率数据，学生做「方案 ROI 分析」选择最优传感器组合。
- **系统集成思维**：引入「数据总线」概念——MQTT Topic 命名规范（`sophilab/teamX/sensor/ultrasonic` / `.../camera` / `.../imu`），为后续所有节点建立统一数据契约。

### 【下午实操闭环】
- **超声波 + 摄像头装配**：HC-SR04 超声波传感器安装（I2C 或 Trig/Echo 引脚接线）、ESP32-CAM 摄像头模组固定到舵机云台，完成全部外设的物理定位。
- **多传感器 MQTT 数据流**：AI 生成固件，使 ESP32 同时采集超声波距离 + 摄像头帧 + MPU6050 IMU 姿态，各自发布到独立 MQTT Topic；前端静态页用 Chart.js 实时渲染距离曲线 + 姿态 3 轴折线图。
- **整机总装 + 工业理线**：底盘+电机+驱动板+ESP32-CAM+传感器+电池 全部装配上底盘；使用缠绕管/扎带/热缩管完成理线，杜绝飞线；AI 生成理线教程（线束分组→路径规划→固定点）。
- **排错要点**：超声波与摄像头共用 I2C 地址冲突、IMU 零漂校准、电源纹波导致传感器读数跳变（加电容滤波）。

### 【核心产出指标】
| 产出物 | Git Commit 证据 | 合格标准 |
|--------|----------------|---------|
| 完整装配原型机 | `assets/day06_full_assembly.jpg` | 全部组件紧固在底盘，无线头裸露 |
| 传感器融合固件 | `src/esp32/sensor_fusion.ino` | ≥3 种传感器数据并发 MQTT 上行 |
| 数据仪表盘网页 | `web/sensor_dashboard.html` | Chart.js 实时曲线，刷新率 ≥2Hz |
| 传感器选型分析 | `docs/sensor_roi_analysis.md` | ≥2 种方案的对比数据表 |

---

## Day 07 — 全栈 Vibe Coding：语音 ASR 网页 + MQTT 全双工控制

### 【上午核心概念】
- **DeepLearning.AI 降维可视化**：「How ASR Works」— 将 Web Speech API 的语音→文字管道拆解为 声学特征提取→音素序列→语言模型解码 三步，与 Day 01 的 Tokenization 形成「语音→文字→Token」的完整链路闭环。
- **phuryn/pm-skills 方法注入**：`pm-customer-journey-map` — 绘制「用户从拿起手机到机器人完成任务」的完整触点旅程，识别 AI 控制链路上的所有交互节点（语音输入→文本识别→MQTT 指令→机器人执行→状态反馈→语音合成播报）。
- **自然语言控制范式**：定义机器人的「动作原语」（Action Primitives）JSON Schema——`{action: "move"|"stop"|"turn"|"photo"|"patrol", params: {...}}`，这是后续 VLM/ASR/按钮的统一接口。

### 【下午实操闭环】
- **语音 ASR 网页**：AI 生成静态 HTML 页面，集成 Web Speech API（`SpeechRecognition`），学生对着浏览器说出「前进」「左转」「拍照」等指令，页面将语音转为文本后通过 MQTT 发布 JSON 动作原语。
- **ESP32 动作原语解析器**：AI 生成通用 JSON 动作原语解析固件（ArduinoJSON 解析 → GPIO/电机操作 → 执行结果回传 MQTT），学生烧录并验证语音指令→物理运动的完整链路。
- **全双工状态反馈**：ESP32 每执行一个动作原语即回传 `{status: "done"|"error", action_id: "xxx", sensor_data: {...}}`，网页端实时显示执行状态。
- **排错要点**：Web Speech API 仅 HTTPS/localhost 可用（GitHub Pages 默认 HTTPS 满足）、中文语音识别方言口音偏差（提供标准口令卡片）、MQTT 指令重复执行（加 action_id 去重）。

### 【核心产出指标】
| 产出物 | Git Commit 证据 | 合格标准 |
|--------|----------------|---------|
| 语音控制网页 | `web/voice_control.html` | Web Speech API + MQTT 全链路，≥5 条口令响应 |
| 动作原语解析固件 | `src/esp32/action_parser.ino` | 正确解析 JSON 并进行电机/舵机操作 |
| 用户旅程图 | `docs/customer_journey_map.md` | 含 ≥6 个触点 × 情绪曲线 |
| 语音控制演示视频 | `assets/day07_voice_demo.mp4` | 3 条不同口令 → 不同动作，含屏幕录屏 |

---

## Day 08 — 多模态 VLM 交互：云视觉→JSON 动作原语流

### 【上午核心概念】
- **DeepLearning.AI 降维可视化**：「How Vision-Language Models Work」— 将 VLM 的内部 Pipeline 拆解为 图像→ViT Patch Embedding→Cross-Attention→Text Decoder，类比「看图说话」的数学本质。学生理解到 VLM 不是魔法，而是一个将像素矩阵映射为文字概率分布的数学函数。
- **phuryn/pm-skills 方法注入**：`pm-analyze-feature-requests` — 定义 VLM 需要支持的「场景理解需求」列表（识别人/识别椅子/识别垃圾桶/识别门），按实现难度和用户价值排序出 VLM 第一版能力集。
- **JSON 动作原语 schema v2.0**：扩展到含语义标签——`{action: "pickup_trash", target: {type: "trash_can", bbox: [x,y,w,h]}, confidence: 0.92}`。

### 【下午实操闭环】
- **ESP32-CAM → MQTT → 云端 VLM → JSON 动作流**：ESP32-CAM 定时拍照（或网页按钮触发）→ Base64 图片通过 MQTT 发布 → 静态网页的 JS 接收 → 调用云端 VLM API（通义千问 Vision / Qwen-VL，通过后端代理或 Vercel Function 转发）→ VLM 返回场景描述 JSON → JS 解析为动作原语 → MQTT 下发 ESP32 执行。
- **VLM 提示词系统设计**：学生用自然语言设计 VLM 的 System Prompt（「你是一个博物馆导览机器人，看到游客时请靠近并问好，看到垃圾时请移动到垃圾桶旁」），AI 辅助优化为符合输出 JSON Schema 的 Prompt。
- **准确率测试**：在 3 个不同场景（教室/走廊/户外）各拍摄 5 张，统计 VLM→JSON 动作原语解析成功率，记录失败 case（误识别/漏识别/JSON 格式错误）。
- **排错要点**：VLM API 延迟（异步处理 + 前端 Loading 状态）、图片 Base64 过大（JPEG 压缩至 QVGA 320×240）、VLM 输出 JSON 不稳定（Temperature=0.1 + JSON Mode 约束）。

### 【核心产出指标】
| 产出物 | Git Commit 证据 | 合格标准 |
|--------|----------------|---------|
| VLM 提示词系统 | `src/prompts/vlm_system_prompt.txt` | 含 JSON Schema 输出约束 + 3 个场景测试 |
| 全链路集成固件 | `src/esp32/vlm_agent.ino` | 拍照→MQTT→VLM→动作原语→执行闭环 |
| VLM 准确率报告 | `docs/vlm_accuracy_report.md` | ≥15 张测试图片，含混淆矩阵 |
| 交互演示视频 | `assets/day08_vlm_demo.mp4` | 展示「摄像头→VLM→机器人动作」完整链路 |

---

## Day 09 — 数字孪生：Three.js 虚拟车 + MQTT 双向同步

### 【上午核心概念】
- **数字孪生概念白盒化**：将「数字孪生」拆解为 物理实体 + 虚拟模型 + 数据连接 三要素。类比游戏引擎的帧同步原理——物理机器人每隔 200ms 通过 MQTT 上报位姿，虚拟模型做线性插值补齐帧间空隙。
- **phuryn/pm-skills 方法注入**：`pm-metrics-dashboard` — 定义数字孪生 Dashboard 需要呈现的关键指标（实时速度/电池电压/Wi-Fi RSSI/任务状态），设计仪表盘布局并 AI 生成 HTML。
- **Three.js 入门 via AI**：学生用自然语言描述「我想要一个灰色的差速小车 3D 模型，能在地板上移动」，AI 生成 Three.js 场景代码，学生理解场景(Scene)→相机(Camera)→网格(Mesh)→渲染循环(Render Loop) 的基本结构。

### 【下午实操闭环】
- **Three.js 虚拟车渲染**：AI 生成包含底盘+轮子+摄像头云台的简易 3D 小车模型（BoxGeometry + CylinderGeometry 拼装），学生调整颜色/尺寸参数并部署到静态网页。
- **MQTT 位姿同步**：ESP32 每 200ms 通过 MPU6050 + 编码器推算位姿（x, y, θ），MQTT 上报 `sophilab/teamX/pose`；网页端 Three.js 实时更新小车 3D 模型的位置和朝向——实现「物理小车动 → 虚拟小车同步动」。
- **滑块反向控制**：网页添加滑块控件（目标 x / 目标 y），通过 MQTT 下发目标坐标，ESP32 执行点到点移动并持续回传位姿，虚拟车实时跟随——实现「滑块拖拽 → 物理车移动 + 虚拟车同步」的双向闭环。
- **排错要点**：IMU 航向角漂移（加入互补滤波）、编码器累积误差（每次 MQTT 上报清零）、Three.js 模型朝向与物理坐标系不一致（Y-up vs Z-up）。

### 【核心产出指标】
| 产出物 | Git Commit 证据 | 合格标准 |
|--------|----------------|---------|
| Three.js 数字孪生网页 | `web/digital_twin.html` | 3D 小车模型 + 实时位姿同步 + 滑块控制 |
| 位姿上报固件 | `src/esp32/pose_reporter.ino` | IMU+编码器融合位姿，MQTT 200ms 周期上报 |
| 双向同步延迟测试 | `docs/twin_sync_latency.md` | 物理→虚拟延迟 + 虚拟→物理延迟 均有数据 |
| 指标仪表盘 | `web/metrics_dashboard.html` | ≥4 个实时指标 × Chart.js 面板 |

---

## Day 10 — 全系统集成优化：饱和测试 + 结构轻量化 + QoS 调优

### 【上午核心概念】
- **DeepLearning.AI 降维可视化**：「Evaluating AI Systems」— 用混淆矩阵可视化 VLM 识别准确率、用延迟分布直方图可视化 MQTT 端到端延迟、用 ROC 曲线类比「灵敏度 vs 误报率」的工程权衡。让学生理解「AI 系统不是 100% 可靠，而是要在指标间做折中」。
- **phuryn/pm-skills 方法注入**：`pm-pre-mortem` — 全组进行「项目尸检」：假设路演当天演示失败了，倒推所有可能的原因（网络断连/VLM 误判/电池耗尽/舵机卡死），列出 Top 10 风险并逐一验证缓解方案是否到位。
- **系统工程铁律**：V-Model 验证思想——从 Day 01 的 PRD 需求逐条回溯，检查每个需求是否有对应的测试用例通过。

### 【下午实操闭环】
- **全功能饱和测试**：定义 10 条端到端测试用例（语音指令→VLM 场景理解→机器人动作→数字孪生同步→状态反馈），逐条执行并记录通过/失败/延迟数据，形成完整测试矩阵。
- **MQTT QoS 调优**：对比 QoS 0（最多一次）/ QoS 1（至少一次）/ QoS 2（恰好一次）在实际场景中的丢包率和延迟，选择最优配置；配置 MQTT Last Will（掉线遗嘱）让网页端能检测机器人离线。
- **结构轻量化迭代**：针对底盘进行减重——用 AI 生成镂空/拓扑优化建议，重新切片打印替换零件，对比优化前后重量和续航。
- **产品说明书 AI 辅助撰写**：AI 生成产品说明书初稿（规格表/操作指南/故障排除/安全警告），学生审校并加入实测数据。
- **排错要点**：全系统测试中 Wi-Fi 断连恢复机制（自动重连 + 看门狗重启）、电池低压时系统不稳定的保护策略、VLM API 频率限制的请求队列设计。

### 【核心产出指标】
| 产出物 | Git Commit 证据 | 合格标准 |
|--------|----------------|---------|
| 全系统测试报告 | `docs/system_test_report.md` | ≥10 条 E2E 测试用例，含通过率 + 延迟分布 |
| 项目尸检报告 | `docs/pre_mortem.md` | Top 10 风险 × 缓解方案 × 验证结果 |
| MQTT QoS 配置文档 | `docs/mqtt_qos_tuning.md` | QoS 0/1/2 丢包率对比数据 |
| 轻量化前后对比 | `docs/lightweight_optimization.md` | 重量/续航/强度 三指标对比 |
| 产品说明书 | `docs/product_manual.md` | 含规格表 + 操作指南 + 安全警告 |

---

## Day 11 — 产品包装：GitHub 开源仓库 + 产品演示视频 + Web 上线

### 【上午核心概念】
- **phuryn/pm-skills 方法注入**：`pm-release-notes` — 以开源项目标准撰写 Release Notes（新功能/已知限制/下一版计划），学生从 12 天工程日志中提炼变更摘要。
- **`pm-value-prop-statements`** — 为机器人产品撰写 3 条价值主张声明（面向家长/面向招生官/面向科技竞赛评委，三个受众不同话术）。
- **开源仓库规范**：README.md 标准结构（项目简介/硬件清单/软件架构/快速开始/贡献指南/License）+ Commit Message 规范重写（`git rebase -i` 将 12 天的工作整理为语义化提交历史）。

### 【下午实操闭环】
- **GitHub 仓库最终整理**：补全所有缺失文档、统一目录结构、清理临时文件、添加 Apache 2.0 / MIT License、配置 GitHub Pages 域名。
- **产品演示视频拍摄**：2-3 分钟产品 Demo 视频（手机拍摄 + AI 辅助剪辑），结构：问题引入→功能演示→技术亮点→团队介绍。旁白使用 AI TTS 或学生亲自配音。
- **Web 展示站上线**：将所有静态网页（语音控制/传感器仪表盘/数字孪生/方案对比）整合为统一入口 `index.html`，通过 GitHub Pages 发布为公开 URL。
- **路演 PPT 生成**：AI 生成 5 分钟路演 PPT 大纲（问题→方案→技术→Demo→影响），学生填充数据并练习演讲。
- **排错要点**：GitHub Pages 分支配置（gh-pages vs main/docs）、视频压缩（H.265 → H.264 兼容性）、网页资源路径大小写敏感。

### 【核心产出指标】
| 产出物 | Git Commit 证据 | 合格标准 |
|--------|----------------|---------|
| 完整开源仓库 | GitHub 仓库 URL | 含 README + License + 完整目录树 |
| Release Notes | GitHub Releases 页面 | 含功能列表 + 已知限制 |
| 产品演示视频 | `assets/product_demo.mp4` | 2-3min，含讲解 + 实机演示 |
| Web 展示站 | GitHub Pages URL | 统一入口 + 5 个子页面可达 |
| 路演 PPT | `docs/pitch_deck.pdf` | 5min 时长，≤12 页 |

---

## Day 12 — 发布：技术路演 + 评审答辩 + 企业参访 + 结营

### 【上午核心概念】
- **路演方法论**：5 分钟技术路演的黄金结构——Problem（30s）→ Solution（60s）→ Technical Deep-Dive（90s）→ Live Demo（90s）→ Impact（30s）。学生理解「不同受众关注不同维度」（评委关注技术深度，家长关注教育价值，企业关注工程能力）。
- **现场 Demo 应急预案**：Wi-Fi 热备方案（手机热点）、本地 MQTT Broker 降级方案（Mosquitto 本地部署）、预录视频兜底方案——「专业工程师永远有 Plan B」。
- **结营复盘**：每人 1 分钟的「最大学到」分享 + AI 生成个人能力雷达图（基于 12 天 Git Commit 数据）。

### 【下午实操闭环】
- **正式路演**：各双人组轮流进行 5 分钟路演 + 5 分钟评审团 Q&A，现场演示「语音指令→VLM 场景理解→机器人动作→数字孪生同步」全链路。
- **评审维度**：AI 工具使用能力(25%) + FabLab 制造能力(25%) + 项目创新性(30%) + 开源协作精神(20%)。
- **企业参访**：安排当地机器人/AI 企业实地参访 + 企业专家主题演讲。
- **结营仪式**：证书颁发 + 作品拍照 + 家长观摩。
- **排错要点**：现场网络压力（多组同时 MQTT 通信频段拥堵→信道隔离）、演示设备电量（满电 + 备用电池）、Demo 环境灯光对摄像头识别的影响。

### 【核心产出指标】
| 产出物 | Git Commit 证据 | 合格标准 |
|--------|----------------|---------|
| 最终开源仓库 | GitHub 终审 URL | 所有文档齐全 + Commit 历史清晰 |
| 路演评分表 | 评审团打分记录 | 四维雷达图 + 综合评分 |
| 结营证书 | 纸质 + 电子版 | SophiLab + 学校 + 企业三方盖章 |
| 个人能力雷达图 | Git 仓库内 | 基于 12 天数据自动生成 |

---

## 附录 A：ESP32-CAM 技术栈速查

| 层级 | 技术选型 | 关键参数 |
|------|---------|---------|
| 主控 | ESP32-S3 (ESP32-CAM-MB) | 双核 240MHz, 512KB SRAM, 8MB PSRAM |
| 摄像头 | OV2640 | 200W 像素, JPEG 输出, QVGA(320×240)~UXGA(1600×1200) |
| 电机驱动 | L298N / TB6612 | 双路 H 桥, 7-12V 电机供电 |
| 传感 | HC-SR04(超声波) + MPU6050(IMU) | I2C 地址 0x68(IMU), GPIO Trig/Echo(超声波) |
| 舵机 | SG90 | 0-180°, 5V, PWM 50Hz |
| 电源 | 7.4V 2S LiPo | 降至 5V(ESP32) + 直供电机 |
| 通信 | Wi-Fi 802.11 b/g/n (2.4GHz) | STA 模式连接公网 MQTT |
| MQTT Broker | broker.emqx.io:1883 | 公网测试 Broker, 非生产 |

## 附录 B：前端静态网页技术栈速查

| 层级 | 技术选型 | 加载方式 |
|------|---------|---------|
| MQTT 客户端 | mqtt.js (paho-mqtt CDN) | `<script src="https://cdnjs.cloudflare.com/.../mqtt.min.js">` |
| 3D 渲染 | Three.js CDN | `<script src="https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.min.js">` |
| 图表 | Chart.js CDN | `<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js">` |
| 语音识别 | Web Speech API | 浏览器原生, 无需 CDN |
| 部署 | GitHub Pages | HTTPS 自动启用, 满足 Web Speech API 安全要求 |
| VLM 调用 | 通义千问 Vision API | 通过 Vercel Serverless Function 或 Cloudflare Worker 代理转发（隐藏 API Key） |

## 附录 C：Git Commit 规范（12 天统一标准）

```
<type>(<scope>): <subject>

<body>

Ref: Day-XX
```

| Type | 用途 |
|------|------|
| `feat` | 新功能（如 feat(esp32): add MQTT camera upload） |
| `fix` | 修复（如 fix(web): resolve MQTT reconnect loop） |
| `docs` | 文档（PRD / 测试报告 / 工程日志） |
| `test` | 测试用例 + 测试数据 |
| `refactor` | 代码重构（无功能变化） |

---

> **总指挥 Hermes 注**：本大纲对标 DeepLearning.AI「AI for Everyone」+「Generative AI for Everyone」理论降维 + phuryn/pm-skills 完整产品方法链 + FabAcademy 数字制造实践，每日产出均为硬核可验证工程交付物。严禁填入长篇代码，每节保持精炼高密度。
