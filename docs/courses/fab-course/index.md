# Fab 课程 — 数字化快速原型 (Digital Fabrication)

> **Built on the MIT FabAcademy curriculum and the global Fab Lab network. Develop full-stack engineering thinking — from digital fabrication fundamentals to AI-integrated product prototyping.**

---

## 🏗️ 页面架构说明

| 层级 | 技术方案 | 描述 |
|---|---|---|
| **课程首页** | VitePress Markdown（当前页面） | 提供课程定位、14 个核心模块、实验室资源及历年班级档案等综合展示 |
| **技术细节文档** | VitePress 静态子站点 | 点击各章节链接跳转，提供深度技术理论、实验指南与评估指标 |

---

## 📌 1. 课程定位

**时代之变（Why）：** 数字化制造正在重塑从创意到产品的全过程。传统的手工原型验证模式已无法适应快速迭代的产品开发节奏。在未来工程人才的培养中，核心壁垒不再是单一设备的操作熟练度，而是**跨学科的系统性工程思维、数字制造工具的整合能力以及 AI 辅助设计与优化**的综合素质。

**方法之新（How）：** 本课程根植于 MIT **FabAcademy** 全球课程体系，依托 **Fab Lab（数字化制造实验室）** 标准设备网络，独创性地将**项目式学习（PBL）、数字制造工艺链与 AI 生成式设计**融为一体。通过"设计 → 制造 → 测试 → 迭代"的完整工程闭环，赋能学生跨越从图纸到实物的技术鸿沟。

**成果之硬（What）：** 课程覆盖从项目管理、CAD 设计、3D 打印、激光切割、PCB 制造到物联网与智能载具开发的全栈技能树。参与者将完成 14 个模块的动手项目，每个模块产出可验证的物理原型，最终构建出一套体现个人工程能力的开源作品集。

### 1.1 核心能力培养

在 Fab Lab 环境中，参与者通过解决真实工程问题，培养以下核心能力：

- **项目管理与文档**：使用 Git 进行版本控制，掌握 Markdown 技术写作，搭建个人数字化原型记录站点。
- **数字设计与建模**：运用 Fusion 360 / SolidWorks 进行参数化三维设计，掌握钣金、曲面等高级建模技术。
- **增材制造工艺**：掌握 FDM、SLA、HP-MJF 等多种 3D 打印工艺的切片设置与设计约束。
- **减材制造工艺**：掌握 CNC 数控编程、刀路规划与三轴铣削实操技能。
- **电子设计与 PCB 制造**：从电路原理图设计到 PCB 蚀刻、SMT 贴装与焊接调试的完整链路。
- **嵌入式开发**：基于 Arduino/ESP32 开源硬件平台，编写嵌入式 C++ 控制程序。
- **物联网与交互设计**：打通 TCP/IP、MQTT 协议，实现设备云端接入与人机交互界面开发。
- **AI 辅助工程**：运用 AI 工具进行生成式设计、代码辅助开发与工程决策优化。

---

## ⚖️ 1.2 教学差异对比

为保证数字化制造教学效果，课程严格执行以下规范：

| 🔴 禁止行为 | 🟢 标准行为 |
|---|---|
| ❌ "大家打开 Fusion 360，跟着我画一个底盘模型" | ✅ "你的底盘需要满足这三项功能要求，请你选择最合适的建模策略" |
| ❌ "按照这个 G-code 参数设置 CNC 机器" | ✅ "你的零件需要这些精度要求，请根据材料和刀具约束，自主设定加工参数" |
| ❌ "先学完所有理论知识再进实验室" | ✅ "在动手制造中发现问题，带着问题查找理论依据，用 AI 辅助理解原理" |

---

## 🎯 1.3 招生学员画像

- **基础门槛**：具备基本的三维空间思维和动手实践兴趣。
- **适用对象**：大学工科/设计专业学生、Fab Lab 爱好者、创客空间成员。
- **核心兴趣**：对数字化制造、开源硬件、产品原型开发有浓厚探索欲的工程与设计背景学生。
- **核心诉求**：希望建立从设计到实物的完整工程能力，打造符合工业标准的个人项目作品集。

---

## 📋 2. 课程大纲 — 14 个核心模块

课程遵循 MIT FabAcademy 全球标准框架，共 14 个模块，涵盖从项目管理到智能载具开发的完整数字制造链路：

| 编号 | 模块名称 | 核心内容 | 主要工具/设备 |
|:---:|---|---|---|
| **01** | 项目管理与网页构建 | Git 版本控制、Markdown 写作、VitePress 静态站点搭建 | Git, VitePress, Markdown |
| **02** | 计算机辅助设计 (CAD) | Fusion 360 / SolidWorks 参数化建模、钣金设计、AI 生成式设计 | Fusion 360, SolidWorks |
| **03** | 3D 打印技术 | FDM/SLA/HP-MJF 工艺、切片软件配置、设计约束与后处理 | Bambu Lab, Prusa, Cura |
| **04** | 电子设计与电路基础 | 元器件特性、电路定律、EDA 原理图绘制与 PCB 布局 | KiCad, EasyEDA |
| **05** | Arduino 软硬件应用 | 嵌入式 C++ 开发、传感器信号采集、执行器控制 | Arduino IDE, Wokwi |
| **06** | 激光切割工艺 | 矢量图纸准备、卡接结构设计、激光雕刻与切割实操 | AutoCAD, 激光切割机 |
| **07** | PCB 制造与焊接工艺 | SMT 表面贴装、回流焊、手工焊接与热风枪调试 | 回流焊炉, 烙铁 |
| **08** | CNC 数控加工工艺 | G-code 编程、坐标系对刀、三轴刀路规划与铣削减材实操 | 桌面 CNC 雕刻机 |
| **09** | 翻模与铸造 | 硅胶模具制作、树脂浇注成型、单模与双开模工艺 | 硅胶, 树脂, 真空机 |
| **10** | 物联网与交互设计 | TCP/IP/MQTT/HTTP 协议、ESP8266 云端接入 | ESP8266, 阿里云 |
| **11** | 界面与交互应用程序 | Processing/Node.js 界面开发、串口通信、交互装置设计 | Processing, Node.js |
| **12** | 标准件与耗材采购 | 机械标准件规格认知、供应链采购源对接 | Misumi, Digi-Key, Mouser |
| **13** | 商业计划书基础 | 产品市场定位、成本估算、创业路演要素 | - |
| **14** | 智能移动载具开发 | 轮式底盘控制模型、ROS2 感知与仿真、AI 融合开发 | ROS2, Sophicar 仿真 |

> **核心教程详细文档 &rarr; [点击查看完整模块文档](/courses/fab-course/doc/1projectmanage/Assessment1.md)**

---

## 🔬 3. 实验室资源与管理

### 3.1 实验室基础

| 资源类别 | 内容 | 文档入口 |
|---|---|---|
| **实验室管理规范** | 运作准则、出勤要求与空间维护条例 | [查看文档](/courses/fab-course/doc/0manage/labmanage.md) |
| **Fab Lab 介绍** | 全球数字化制造实验室网络与 MIT FabAcademy 课程体系 | [查看文档](/courses/fab-course/doc/Fab/FAB.md) |
| **NexMaker 创客学术** | 创客联盟、创新培育课程与开发者社群孵化计划 | [查看文档](/courses/fab-course/doc/0manage/nexmaker-academy.md) |
| **安全与准入规范** | 高功耗设备、特种机械与易燃易爆材料安全指南 | [查看文档](/courses/fab-course/doc/0manage/access_safety.md) |
| **常用材料指南** | 亚克力、木板、树脂等主要耗材属性说明与选择矩阵 | [查看文档](/courses/fab-course/doc/0manage/material.md) |
| **设备与工具清单** | 数字切片机、3D 打印机、焊接工具性能参数与预约流程 | [查看文档](/courses/fab-course/doc/0manage/tool.md) |

---

## 🎓 4. 年度创新项目与班级档案

### 4.1 宁波诺丁汉大学 (UNNC FabLab)

| 项目 | 年份 | 学生作品入口 |
|---|---|---|
| Fab Academy 2025 | UNNC 归档 | [查看班级](/courses/fab-course/class/fab-2025-UNNC) |
| UNNC FabLab 2025-2 | 第二期 | [查看班级](/courses/fab-course/class/fab-2025-UNNC-2) |
| Fab Academy 2023 | 成果展示 | [查看班级](/courses/fab-course/doc/Fab/fab2023) |

### 4.2 浙江大学设计工程 (ZJU Design Engineering)

| 项目 | 年份 | 学生作品入口 |
|---|---|---|
| Design Engineering 2023 | 2023 | [查看班级](/courses/fab-course/class/fab-2023-zju-de) |
| Design Manufacture 2023 | 2023 | [查看班级](/courses/fab-course/class/fab-2023-zju-dm) |
| DE mini 2023 | 2023 | [查看班级](/courses/fab-course/class/fab-2023-zju-mini) |
| Design Engineering 2022 | 2022 | [查看班级](/courses/fab-course/class/fab-2022-zju-de) |
| Design Manufacture 2022 | 2022 | [查看班级](/courses/fab-course/class/fab-2022-zju-dm) |
| DE mini 2022 | 2022 | [查看班级](/courses/fab-course/class/fab-2022-zju-mini) |
| Design Engineering 2021 | 2021 | [查看班级](/courses/fab-course/class/fab-2021-zju-de) |
| Design Manufacture 2021 | 2021 | [查看班级](/courses/fab-course/class/fab-2021-zju-dm) |
| Design Engineering 2020 | 2020 | [查看班级](/courses/fab-course/class/fab-2020-zju-de) |

### 4.3 浙江万里学院与创客学术 (ZWU & NexMaker)

| 项目 | 年份 | 学生作品入口 |
|---|---|---|
| Interactive System 2026A1 | 2026 | [查看班级](/courses/fab-course/class/FAB-2026-ZWU-01) |
| Interactive System 2024 | 2024 | [查看班级](/courses/fab-course/class/fab-2024-zwu-Interactivesystem) |
| IS 2+2 2024 | 2024 | [查看班级](/courses/fab-course/class/fab-2024-zwu-Interactivesystem2+2) |
| NexMaker Academy 第 1 期 | - | [查看班级](/courses/fab-course/class/fab-01) |
| NexMaker Academy 第 2 期 | - | [查看班级](/courses/fab-course/class/fab-02) |

---

## 🏆 5. 课程产出与评估

### 5.1 核心交付物

- **14 个物理原型**：每个模块完成一个可验证的物理制造物，覆盖 CAD 模型、3D 打印件、PCB 电路板、激光切割件等。
- **开源项目仓库**：规范的 Git 仓库，内含完整的设计源文件、制造参数、代码及工程日志。
- **个人作品站点**：基于 VitePress 搭建的数字化原型记录主站，展示完整学习路径与项目沉淀。
- **最终综合项目**：将多个模块技能整合，完成一个具有实际应用价值的综合原型项目。

### 5.2 评估维度

| 评估维度 | 权重 | 标准 |
|---|---|---|
| **数字制造能力** | 30% | 设备操作熟练度、工艺参数合理性、原型完成度与精度 |
| **设计与创新能力** | 25% | 设计方案的原创性、功能与美学的平衡、解决问题的工程思维 |
| **文档与项目管理** | 25% | Git 仓库规范性、技术文档完整性、工程日志质量 |
| **协作与迭代能力** | 20% | 团队协作表现、基于反馈的设计迭代、开源贡献精神 |

---

## 📚 技术文档章节（VitePress 详情页入口）

点击以下模块即可跳转查看详细技术文档及实验指南：

### [模块 1：项目管理与网页构建](/courses/fab-course/doc/1projectmanage/Assessment1.md)
- **核心内容**：Git 版本控制、Markdown 技术写作、VitePress 现代静态站点搭建、AIGC 辅助开发。
- [Git 基础](/courses/fab-course/doc/1projectmanage/git.md) · [Markdown 语法](/courses/fab-course/doc/1projectmanage/markdown.md) · [VitePress 指南](/courses/fab-course/doc/1projectmanage/vitepress.md)

### [模块 2：计算机辅助设计 (CAD)](/courses/fab-course/doc/2cad/Assessment.md)
- **核心内容**：Fusion 360 / SolidWorks 参数化建模、钣金设计、AI 生成式结构优化。
- [Fusion 360 指南](/courses/fab-course/doc/2cad/3D_Design_Fusion360.md) · [SolidWorks 指南](/courses/fab-course/doc/2cad/Solidworks.md) · [参数化设计](/courses/fab-course/doc/2cad/parameterdesign.md)

### [模块 3：3D 打印技术](/courses/fab-course/doc/3_3dprinter/assessment.md)
- **核心内容**：FDM 熔融沉积、SLA 光固化、HP-MJF 尼龙烧结工艺与切片软件配置。
- [FDM 设计指南](/courses/fab-course/doc/3_3dprinter/3.FDM-designguide.md) · [SLA 设计指南](/courses/fab-course/doc/3_3dprinter/6.sladesignguide.md)

### [模块 4-14 详情文档 &rarr;](/courses/fab-course/doc/4electric_design/Assessment.md)

> 完整的 14 个模块评估指标、实验指南与技术参考文档，请通过左侧 **Fab 课程** 侧边栏导航浏览。

---

## 💬 划词批注互动区

本平台已集成**高保真本地划词评论系统**。如果您对 CAD 建模技巧、3D 打印参数或电路设计存在任何疑问：
1. 请先在[主站首页](/)注册并登录。
2. 返回本页面，**用鼠标直接划选目标文字**，即可触发高亮批注面板进行提问或讨论。
3. 您的疑问将会显示在对应文本行下，助您与社区极客共同进步！
