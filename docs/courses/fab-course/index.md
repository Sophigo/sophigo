# Fab 数字化快速原型课程

数字化快速原型技术（Digital Fabrication & Rapid Prototyping）是将创意具象化为物理实体的必经之路。本课程依托 Fab Lab (数字化制造实验室)，带您深入了解如何通过一系列开源软硬件工具和数字制造设备，实现从“想法”到“原型”的快速迭代。

---

## 🔬 实验室管理与基础

在进入实验室进行物理制造之前，必须熟悉实验室的基本运作规范与安全守则。

* **实验室介绍与管理**: [实验室管理规范 (Lab Manage)](doc/0manage/labmanage.md) | [Fab Lab 介绍](doc/Fab/FAB.md) | [NexMaker 创客学术](doc/0manage/nexmaker-academy.md)
* **安全与工具**: [安全与准入规范 (Access & Safety)](doc/0manage/access_safety.md) | [常用材料指南](doc/0manage/material.md) | [设备与工具清单](doc/0manage/tool.md)

---

## 📚 核心教程 (Tutorials 1-14)

核心教程分为 14 个核心专题，涵盖了工程项目管理、计算机辅助设计 (CAD)、增减材制造、PCB 电子制造、物联网和人机交互等完整链路：

### 🛠️ 1. 项目管理与网页构建 (Project Management)
- **核心要求**: [课程评估规范 (Assessment)](doc/1projectmanage/Assessment1.md)
- **工具与版本控制**: [Git 工具入门](doc/1projectmanage/git.md) | [Markdown 语法](doc/1projectmanage/markdown.md) | [图床服务](doc/1projectmanage/imageuploadservice.md)
- **网页搭建方法**: [Github Pages & Docsify](doc/1projectmanage/github&docsify.md) | [VitePress 现代静态站](doc/1projectmanage/vitepress.md) | [GitBook 协作](doc/1projectmanage/gitbook.md) | [WordPress 服务](doc/1projectmanage/wordpresswebservier.md) | [HTML/CSS/Github 技术栈](doc/1projectmanage/htmlcssgithub.md) | [AIGC 辅助开发](doc/1projectmanage/aigc.md)

### 📐 2. 计算机辅助设计 (CAD Design)
- **核心要求**: [CAD 评估指标](doc/2cad/Assessment.md)
- **3D 建模实践**: [Fusion 360 安装与准备](doc/2cad/Fusion360prepare.md) | [Fusion 360 操作指南](doc/2cad/3D_Design_Fusion360.md) | [Solidworks 建模指南](doc/2cad/Solidworks.md)
- **高级建模技巧**: [参数化设计 (Parameter Design)](doc/2cad/parameterdesign.md) | [钣金件设计 (Sheet Metal)](doc/2cad/fusion360-sheetmetal.md) | [AI 辅助生成式设计](doc/2cad/newdesign.md) | [综合设计实践](doc/2cad/practice.md)

### 🖨️ 3. 3D 打印技术 (3D Printer)
- **核心要求**: [3D 打印评估指标](doc/3_3dprinter/assessment.md)
- **FDM 熔融沉积**: [FDM 工艺原理](doc/3_3dprinter/2.FDM3Dprintingbackground.md) | [FDM 设计指南](doc/3_3dprinter/3.FDM-designguide.md) | [设备实操与操作规范](doc/3_3dprinter/4.FDM-machineoperation.md) | [FDM 综合实践](doc/3_3dprinter/3dprintingdesign.md)
- **其他工艺**: [SLA 光固化工艺](doc/3_3dprinter/5.SLAbackground.md) | [SLA 设计指南](doc/3_3dprinter/6.sladesignguide.md) | [HP-MJF 尼龙烧结](doc/3_3dprinter/7.hpmjf.md)
- **后期处理与软件**: [3D 打印后处理](doc/3_3dprinter/8.postprocess.md) | [主流切片软件使用](doc/3_3dprinter/9.3Dslicesoftware.md)

### ⚡ 4. 电子设计与电路基础 (Electric Design)
- **核心要求**: [电路设计评估指标](doc/4electric_design/Assessment.md)
- **电子元器件**: [基本电路参数与常用元器件](doc/4electric_design/electricparameter_component.md) | [电子电路基础知识](doc/4electric_design/basicknowledge.md)
- **EDA 软件设计**: [EDA 绘图与排版工具](doc/4electric_design/tool.md)

### 🔌 5. Arduino 软硬件应用 (Arduino Application)
- **核心要求**: [Arduino 评估指标](doc/5arduino/assessment.md)
- **开发基础**: [开源硬件理念](doc/5arduino/open_source.md) | [Arduino 基础操作](doc/5arduino/arduino_basic.md) | [Arduino 编程语法](doc/5arduino/arduino_code.md)
- **传感器与执行器**: [Arduino 信号输入](doc/5arduino/Arduino_Input.md) | [Arduino 控制输出](doc/5arduino/Arduino_output.md)
- **通信与机械控制**: [Processing 互动编程](doc/5arduino/processing.md) | [MyCobot 机械臂联合仿真](doc/5arduino/robot-mycobot.md)

### 💥 6. 激光切割工艺 (Laser Cutting)
- **核心要求**: [激光切割评估指标](doc/6laser_cutter/Assessment.md)
- **加工规范**: [激光切割安全守则](doc/6laser_cutter/Safety.md) | [AutoCAD 图纸准备](doc/6laser_cutter/AutoCAD.md) | [结构设计指南](doc/6laser_cutter/Design_guide.md) | [激光切割机操作实践](doc/6laser_cutter/Machine_practice.md)

### 🎛️ 7. PCB 制造与焊接工艺 (PCB Manufacture)
- **焊接与装配**: [SMT 表面贴装技术](doc/7PCB_manufacture/SMT.md) | [手工焊接技巧与装配规范](doc/7PCB_manufacture/manual.md)

### ⚙️ 8. CNC 数控加工工艺 (CNC Manufacture)
- **核心要求**: [CNC 评估指标](doc/8CNC_manufacture/Assessment.md)
- **数控编程**: [CNC 常用机器类型](doc/8CNC_manufacture/cnctype.md) | [桌面级数控刀路规划](doc/8CNC_manufacture/tool.md) | [三轴 CNC 编程入门](doc/8CNC_manufacture/cncprogram.md) | [三轴 CNC 设备操作与实操](doc/8CNC_manufacture/cncmanufacture.md)

### 🧪 9. 翻模与铸造 (Mold)
- **核心要求**: [翻模评估指标](doc/9MOLD/assessment.md)
- **模具制作**: [硅胶/树脂材料指南](doc/9MOLD/material.md) | [模具设计工具](doc/9MOLD/tool.md) | [翻模铸造标准步骤](doc/9MOLD/method.md)

### 🌐 10. 物联网与交互设计 (IoT & Interaction)
- **核心要求**: [物联网评估指标](doc/10IOT/Assessment.md)
- **网络连接**: [物联网基本介绍](doc/10IOT/IOT_basic.md) | [NodeMCU ESP8266 接入阿里云 IoT](doc/10IOT/NodeMCUESP8266_ALiYun.md)

### 💻 11. 界面与交互式应用程序 (Interface Application)
- **核心要求**: [交互程序评估指标](doc/11Interface-application-programming/Assessment.md)
- **界面编程**: [Processing 基础](doc/11Interface-application-programming/processing.md) | [Processing 与 Arduino 串口交互](doc/11Interface-application-programming/processingwitharduino.md) | [皮影数字交互项目实例](doc/11Interface-application-programming/piying.md) | [其他界面开发工具](doc/11Interface-application-programming/tool.md)

### 🔩 12. 标准件与耗材采购 (Materials & Tools)
- **核心要求**: [标准件与工具选用评估](doc/12material&tool/assessment.md)
- **库房规范**: [常用机械零件与紧固件](doc/12material&tool/standardcomponentpart.md) | [常用耗材一览](doc/12material&tool/material.md)

### 💼 13. 商业计划书基础 (Business Plan)
- **核心要求**: [商业计划评估指标](doc/13BP/assessment.md) | [商业孵化指南](doc/13BP/README.md)

### 🤖 14. 智能移动载具开发 (AI Vehicle)
- **核心要求**: [智能小车开发评估](doc/14AI&vehicle/assessment.md)
- **控制平台**: [移动机器人底盘开发基础](doc/14AI&vehicle/basic.md) | [AI 自动驾驶算法仿真平台](doc/14AI&vehicle/aiplatform.md)

---

## 🎓 年度创新项目与班级档案 (FABS)

历年来 NexMaker Academy、浙江大学设计工程 (ZJU Design Engineering/Manufacture) 以及 宁波诺丁汉大学 (UNNC FabLab) 课程的学生成果与项目归档：

* **UNNC FabLab & Fab Academy**:
  - [Fab Academy 2025 - UNNC 课程归档](class/fab-2025-UNNC.md) | [UNNC-FabLab 2025-2 归档](class/fab-2025-UNNC-2.md)
  - [Fab Academy 2023 - Ningbo 成果展示](doc/Fab/fab2023.md)
* **浙江大学设计工程 (ZJU Design Engineering)**:
  - [Design Engineering 2023 专题](class/fab-2023-zju-de.md) | [Design Manufacture 2023 专题](class/fab-2023-zju-dm.md) | [DE mini 2023](class/fab-2023-zju-mini.md)
  - [Design Engineering 2022 专题](class/fab-2022-zju-de.md) | [Design Manufacture 2022 专题](class/fab-2022-zju-dm.md) | [DE mini 2022](class/fab-2022-zju-mini.md)
  - [Design Engineering 2021 专题](class/fab-2021-zju-de.md) | [Design Manufacture 2021 专题](class/fab-2021-zju-dm.md)
  - [Design Engineering 2020 专题](class/fab-2020-zju-de.md)
* **浙江万里学院交互系统 (ZWU Interactive System)**:
  - [Interactive System 2026A1 专题](class/FAB-2026-ZWU-01.md)
  - [Interactive System 2024 课程归档](class/fab-2024-zwu-Interactivesystem.md) | [IS 2+2 2024 归档](class/fab-2024-zwu-Interactivesystem2+2.md)
* **创客学术归档**:
  - [NexMaker Academy 第 1 期](class/fab-01.md) | [NexMaker Academy 第 2 期](class/fab-02.md)

---

## 🔮 前沿技术探索 (Others)

面向下一代混合现实与机器人底盘加工的技术储备：

* **XR (扩展现实)**: [XR 概述](XR/readme.md) | [行业解决方案](XR/application_solution.md) | [前沿品牌与生态](XR/brand/aim.md) | [快速入门指南](XR/howtostart.md) | [XR 超声技术专利](XR/xrultrasoudpatent.md) | [XR 发展趋势与沙龙纪要](XR/tendency.md) | [行业标准与供应链](XR/indusrtstandard.md)
* **AGV (自动导引车)**: [AGV 底盘概述](AGV/readme.md) | [物流解决方案](AGV/agvapplication.md) | [核心技术品牌](AGV/agvbrand.md) | [AGV 开发入门](AGV/agvhowtostart.md) | [相关技术专利](AGV/agvpatent.md) | [行业演进趋势](AGV/agvtendency.md) | [AGV 行业标准与供应链](AGV/agvindusrtstandard.md)

---

> [!TIP]
> 划词对任意章节、实验参数或工艺步骤进行评论，我们的指导教师将会在相应的文档评论区为您解答关于切片层高、热床温度、EDA 拼版或 Arduino 寄存器控制的工艺疑问。
