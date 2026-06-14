<script setup>
import { computed, ref } from 'vue'
import { withBase } from 'vitepress'

const activeTrackId = ref('middle')

const tracks = {
  middle: {
    title: '初中组：AI 机器人产品体验营',
    shortTitle: '初中组',
    subtitle: 'AI 做所有事，学生只做决策',
    route: '/courses/mobile-robot/middle-school/',
    accent: '#35f06a',
    days: [
      {
        day: 1,
        title: '问题挖掘',
        href: '/courses/mobile-robot/middle-school/1.html',
        morning: 'FabLab 精神、AI 时代软硬件开发流程与产品经理思维，完成真实问题头脑风暴。',
        afternoon: '组建双人小组，定型核心问题，完成竞品分析、产品命名、Slogan 与外观脑暴。',
        tools: 'DeepSeek / 通义千问 / Kimi / 飞书看板',
        output: '问题分析报告、创意海报、基础 PRD 草稿'
      },
      {
        day: 2,
        title: '功能定义',
        href: '/courses/mobile-robot/middle-school/2.html',
        morning: '机器人核心部件认知、提示词三要素训练、概念外观与文生图迭代。',
        afternoon: '定义用户行为流，决策硬件方案，完成敏捷看板、PRD 定型与开发环境部署。',
        tools: 'VSCode / Gitee / 文生图工具 / 飞书',
        output: '最终 PRD、硬件选型清单、项目发布网页'
      },
      {
        day: 3,
        title: '参数化结构设计与数字制造',
        href: '/courses/mobile-robot/middle-school/3.html',
        morning: '学习 CMF、DFM 与“为加工而设计”，把学习目标、要求、约束转成 AI 可执行需求。',
        afternoon: '通过 sophicar.com 完成参数化底盘调参、评估与数字化加工准备。',
        tools: 'sophicar.com / Fusion 360 AI / MakerLab',
        output: '.stl 结构模型、加工参数文档、底盘零件'
      },
      {
        day: 4,
        title: '嵌入式基础',
        href: '/courses/mobile-robot/middle-school/4.html',
        morning: '建立 ESP32-S3、电路、引脚和开源硬件全局认知，专注理解控制逻辑。',
        afternoon: '在 Wokwi 完成接线验证，用自然语言生成控制逻辑并烧录第一版固件。',
        tools: 'Wokwi / Aily Blockly / ESP32-S3',
        output: 'Wokwi 仿真模型、控制代码、通电样机'
      },
      {
        day: 5,
        title: '基础软硬件调试（一）',
        href: '/courses/mobile-robot/middle-school/5.html',
        morning: '完成整机机械总装、传感器支架和线束规划，由 AI 生成装配与工艺步骤。',
        afternoon: '调试电机、舵机、超声波、灯效等外设，建立第一轮硬件测试记录。',
        tools: 'VSCode / 万用表 / 串口监视器',
        output: '硬件测试报告、工业级布线、避障机器人'
      },
      {
        day: 6,
        title: '基础软硬件调试（二）',
        href: '/courses/mobile-robot/middle-school/6.html',
        morning: '复盘硬件测试数据，定位接线、供电、通信和机械干涉问题。',
        afternoon: '重构控制逻辑，调优多总线通信，形成可复现故障排查记录。',
        tools: 'VSCode / 串口监视器 / 飞书故障表',
        output: '调试日志、稳定基础固件、问题闭环清单'
      },
      {
        day: 7,
        title: '全栈 Vibe Coding',
        href: '/courses/mobile-robot/middle-school/7.html',
        morning: '跳过前端手写代码，用自然语言与 AI 对话生成美观的网页控制面板。',
        afternoon: '配置 Wi-Fi、蓝牙或局域网协议，将网页控制面板与小车主控板连接。',
        tools: 'HTML5 / CSS / JS / 零代码生成器 / 本地 Wi-Fi 模块',
        output: '跨平台控制网页、AI 交互控制文档、无线交互终端'
      },
      {
        day: 8,
        title: '交互',
        href: '/courses/mobile-robot/middle-school/8.html',
        morning: '整合语音控制、网页控制和避障算法，定义机器人交互指令集。',
        afternoon: '联调多模态控制路径，测试异常场景与安全停机逻辑。',
        tools: 'Web Speech / HTML5 / ESP32 / 大模型',
        output: '多模态交互演示、控制端网页、测试记录'
      },
      {
        day: 9,
        title: '多模态语音交互集成与轻量化结构优化（一）',
        href: '/courses/mobile-robot/middle-school/9.html',
        morning: '进行完整系统测试、Bug 分级、数据采集与阶段复盘。',
        afternoon: '针对语音、网络、结构和续航瓶颈完成第一轮优化迭代。',
        tools: '飞书测试表 / VSCode / 3D 打印工具',
        output: 'Bug 清单、优化计划、第二版控制逻辑'
      },
      {
        day: 10,
        title: '多模态语音交互集成与轻量化结构优化（二）',
        href: '/courses/mobile-robot/middle-school/10.html',
        morning: '完成轻量化结构、线束与产品化工艺定型。',
        afternoon: '执行全功能回归测试，封样终极原型机与最终代码。',
        tools: 'Fusion 360 / 切片软件 / VSCode',
        output: '轻量化结构件、全功能代码、终极原型机'
      },
      {
        day: 11,
        title: '包装',
        href: '/courses/mobile-robot/middle-school/11.html',
        morning: '梳理产品故事线，生成海报文案、演示视频脚本和发布页内容。',
        afternoon: '剪辑演示视频，完善 Web 端分享内容与作品集资料。',
        tools: 'AI 海报 / 视频剪辑 / 飞书文档 / Web 发布',
        output: '产品海报、演示视频、Web 分享页'
      },
      {
        day: 12,
        title: '发布',
        href: '/courses/mobile-robot/middle-school/12.html',
        morning: '完成产品发布会彩排、技术路演和项目演示。',
        afternoon: '进行企业参访、评审反馈、结营展示与资料归档。',
        tools: '演示终端 / 项目网页 / 评审表',
        output: '发布演示、评审记录、结营作品包'
      }
    ]
  },
  high: {
    title: '高中组：蓝暑2026 未来机器人系统级敏捷开发营',
    shortTitle: '高中组',
    subtitle: '从自然语言到具身智能，完成系统级物理 AI Agent 闭环',
    route: '/courses/mobile-robot/high-school/',
    accent: '#4b8dff',
    days: [
      {
        day: 1,
        title: '开营与社会痛点问题定义',
        href: '/courses/mobile-robot/high-school/1.html',
        morning: '新工科、FabLab 与 AI Native 开发导入，完成真实场景需求头脑风暴。',
        afternoon: '完成项目分析、SDG 对齐、专利与竞品检索、商业可行性和 PRD 初稿。',
        tools: 'DeepSeek / 千问 / Kimi / 豆包 / 飞书 / 专利检索',
        output: 'PRD 草稿、SDG 定位、竞品重构、任务分解图'
      },
      {
        day: 2,
        title: '功能定义',
        href: '/courses/mobile-robot/high-school/2.html',
        morning: '导入 AI Native 工程思维，完成提示词进阶、技术拓扑和功能边界定义。',
        afternoon: '完成外观迭代、硬件方案、工程看板、项目网页和最终 PRD。',
        tools: 'LLM / 文生图工具 / VSCode / Gitee / 飞书',
        output: '最终 PRD、技术拓扑图、硬件选型清单、发布网页'
      },
      {
        day: 3,
        title: '参数化结构设计',
        href: '/courses/mobile-robot/high-school/3.html',
        morning: '学习机械结构、CMF 与 DFM 规范，明确结构约束和评估指标。',
        afternoon: '使用 sophicar.com 与 Fusion 360 API 生成参数化结构并完成方案评审。',
        tools: 'sophicar.com / Fusion 360 API / MakerLab',
        output: '参数化结构模型、DFM 审查、加工准备文档'
      },
      {
        day: 4,
        title: '数字制造',
        href: '/courses/mobile-robot/high-school/4.html',
        morning: '完成实验室安全、材料认知、数字制造流程与加工规范训练。',
        afternoon: '调用 BOM Agent、切片建议和加工风险评估，完成基础零件加工。',
        tools: 'BOM Agent / 切片软件 / 激光切割 / 3D 打印',
        output: 'BOM 清单、切片参数、首批加工零件'
      },
      {
        day: 5,
        title: '嵌入式基础',
        href: '/courses/mobile-robot/high-school/5.html',
        morning: '理解开源协议、ESP32、电路、引脚和通信接口。',
        afternoon: '使用 Wokwi、Aily 与 VSCode 完成基础运动控制测试。',
        tools: 'Wokwi / Aily / VSCode / ESP32-S3',
        output: '基础运动固件、接线图、运动测试记录'
      },
      {
        day: 6,
        title: '机械臂与底盘控制',
        href: '/courses/mobile-robot/high-school/6.html',
        morning: '打通 CAN、串口通信协议，建立底盘与机械臂控制链。',
        afternoon: '完成机械臂、底盘、理线、硬件联调和 AI Debug 记录。',
        tools: 'CAN / 串口模块 / VSCode / 万用表',
        output: '机械臂和底盘联动演示、AI 调试日志'
      },
      {
        day: 7,
        title: '全栈 Vibe Coding',
        href: '/courses/mobile-robot/high-school/7.html',
        morning: '生成网页或小程序控制端，搭建前端信息架构和控制界面。',
        afternoon: '配置 MQTT、Wi-Fi 跨网桥接与前后端通信链。',
        tools: 'HTML / CSS / JS / MQTT / VSCode',
        output: '跨网控制端、通信链路文档、在线演示'
      },
      {
        day: 8,
        title: '具身智能控制落地：基于边缘视觉的端云协同抓取',
        href: '/courses/mobile-robot/high-school/8.html',
        morning: '完成语音、文本指令解析和云端 LLM 任务编排。',
        afternoon: '接入 MaixCAM-Pro 边缘视觉，与 ESP32 执行端形成闭环。',
        tools: 'MaixCAM-Pro / LLM API / ESP32 / MQTT',
        output: '端云协同抓取演示、边缘视觉数据记录'
      },
      {
        day: 9,
        title: '数字孪生',
        href: '/courses/mobile-robot/high-school/9.html',
        morning: '使用 Three.js 与 Cannon.js 建立 3D 数字孪生场景。',
        afternoon: '完成虚实双向同步、控制映射和演示脚本。',
        tools: 'Three.js / Cannon.js / WebSocket',
        output: '3D 数字孪生演示、虚实同步报告'
      },
      {
        day: 10,
        title: '系统集成与包装（一）',
        href: '/courses/mobile-robot/high-school/10.html',
        morning: '进行全链路测试、问题复盘和控制逻辑优化。',
        afternoon: '完成轻量化结构优化、产品化工艺定型和包装方案。',
        tools: '测试清单 / Fusion 360 / VSCode',
        output: '系统集成测试报告、优化版原型机'
      },
      {
        day: 11,
        title: '系统集成与包装（二）',
        href: '/courses/mobile-robot/high-school/11.html',
        morning: '整理 README、测试报告、Prompt/Token 记录和工程证据链。',
        afternoon: '完善开源仓库、海报、个人反思和专家答辩材料。',
        tools: 'GitHub / Gitee / 飞书 / 海报工具',
        output: '开源仓库、工程日志、路演材料'
      },
      {
        day: 12,
        title: '发布',
        href: '/courses/mobile-robot/high-school/12.html',
        morning: '完成发布会彩排、技术路演和数字孪生协同演示。',
        afternoon: '进行专家评审、企业参访、评估报告与结营交付。',
        tools: '演示终端 / 数字孪生 / 评审表',
        output: '最终发布演示、专家评审记录、结营作品集'
      }
    ]
  }
}

const activeTrack = computed(() => tracks[activeTrackId.value])

function dayLabel(day) {
  return `第 ${day.day} 天`
}
</script>

<template>
  <section class="mobile-robot-course" :style="{ '--track-accent': activeTrack.accent }">
    <div class="track-switch" aria-label="切换课程组别">
      <button
        v-for="track in tracks"
        :key="track.shortTitle"
        class="track-button"
        :class="{ active: activeTrackId === (track.shortTitle === '初中组' ? 'middle' : 'high') }"
        type="button"
        @click="activeTrackId = track.shortTitle === '初中组' ? 'middle' : 'high'"
      >
        <span>{{ track.shortTitle }}</span>
        <strong>{{ track.title.replace(`${track.shortTitle}：`, '') }}</strong>
      </button>
    </div>

    <div class="course-stage">
      <div class="course-copy">
        <p class="track-kicker">{{ activeTrack.shortTitle }}课程逻辑</p>
        <h3>{{ activeTrack.title }}</h3>
        <p>{{ activeTrack.subtitle }}</p>
        <a class="track-index-link" :href="withBase(activeTrack.route)">查看{{ activeTrack.shortTitle }}总表</a>
      </div>
      <img
        class="robot-image"
        :src="withBase('/images/sophi-core-agv-left-clean-transparent.png')"
        alt="Sophi-Core 移动机器人"
      >
    </div>

    <div class="course-card-list" aria-live="polite">
      <a
        v-for="day in activeTrack.days"
        :key="`${activeTrack.shortTitle}-${day.day}`"
        class="course-day-card"
        :href="withBase(day.href)"
      >
        <div class="day-title">
          <span>{{ dayLabel(day) }}</span>
          <strong>{{ day.title }}</strong>
        </div>
        <div class="day-detail">
          <span>上午内容</span>
          <p>{{ day.morning }}</p>
        </div>
        <div class="day-detail">
          <span>下午内容</span>
          <p>{{ day.afternoon }}</p>
        </div>
        <div class="day-detail tools">
          <span>核心工具</span>
          <p>{{ day.tools }}</p>
        </div>
        <div class="day-detail output">
          <span>交付产出</span>
          <p>{{ day.output }}</p>
        </div>
      </a>
    </div>
  </section>
</template>

<style scoped>
.mobile-robot-course {
  position: relative;
  overflow: hidden;
  margin: 24px 0 36px;
  padding: 18px;
  border: 1px solid rgba(125, 140, 170, 0.25);
  border-radius: 8px;
  background-color: #0b0d11;
  background-image: radial-gradient(rgba(255, 255, 255, 0.12) 1.5px, transparent 1.5px);
  background-size: 30px 30px;
  color: #f6f8ff;
}

.track-switch {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
  max-width: 620px;
  margin: 0 auto 22px;
}

.track-button {
  display: grid;
  gap: 4px;
  min-height: 52px;
  padding: 10px 16px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.03);
  color: rgba(246, 248, 255, 0.72);
  cursor: pointer;
  text-align: center;
  transition: border-color 0.18s ease, background 0.18s ease, color 0.18s ease;
}

.track-button span {
  font-weight: 700;
  line-height: 1;
}

.track-button strong {
  overflow: hidden;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.25;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.track-button:hover,
.track-button.active {
  border-color: color-mix(in srgb, var(--track-accent) 64%, white);
  background: rgba(255, 255, 255, 0.94);
  color: #111318;
}

.course-stage {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(180px, 300px);
  align-items: center;
  gap: 20px;
  min-height: 250px;
  padding: 16px 8px 26px;
}

.course-copy {
  max-width: 520px;
}

.track-kicker {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin: 0 0 12px;
  color: var(--track-accent);
  font-weight: 800;
}

.track-kicker::before {
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: var(--track-accent);
  box-shadow: 0 0 16px var(--track-accent);
  content: "";
}

.course-copy h3 {
  margin: 0;
  border: 0;
  color: #f6f8ff;
  font-size: 26px;
  line-height: 1.2;
}

.course-copy p:not(.track-kicker) {
  margin: 10px 0 0;
  color: rgba(246, 248, 255, 0.74);
  line-height: 1.75;
}

.track-index-link {
  display: inline-flex;
  margin-top: 14px;
  color: var(--track-accent);
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
}

.track-index-link:hover {
  text-decoration: underline;
}

.robot-image {
  width: 100%;
  max-height: 230px;
  object-fit: contain;
  filter: drop-shadow(0 24px 26px rgba(0, 0, 0, 0.5));
}

.course-card-list {
  display: grid;
  gap: 10px;
}

.course-day-card {
  display: grid;
  grid-template-columns: minmax(96px, 0.85fr) repeat(2, minmax(112px, 1.35fr)) minmax(96px, 0.9fr) minmax(104px, 1fr);
  gap: 12px;
  align-items: start;
  padding: 14px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  background: rgba(9, 11, 16, 0.72);
  color: inherit;
  text-decoration: none;
  transition: border-color 0.18s ease, background 0.18s ease, transform 0.18s ease;
}

.course-day-card:hover {
  border-color: color-mix(in srgb, var(--track-accent) 70%, white);
  background: rgba(255, 255, 255, 0.06);
  transform: translateY(-1px);
}

.course-day-card:focus-visible,
.track-button:focus-visible,
.track-index-link:focus-visible {
  outline: 2px solid var(--track-accent);
  outline-offset: 3px;
}

.day-title {
  display: grid;
  gap: 5px;
}

.day-title span {
  color: rgba(246, 248, 255, 0.62);
  font-size: 13px;
  font-weight: 700;
}

.day-title strong {
  color: #fff;
  font-size: 16px;
  line-height: 1.35;
}

.day-detail {
  display: grid;
  gap: 7px;
  min-width: 0;
}

.day-detail span {
  color: rgba(246, 248, 255, 0.45);
  font-size: 12px;
  font-weight: 700;
}

.day-detail p {
  margin: 0;
  color: rgba(246, 248, 255, 0.72);
  font-size: 13px;
  line-height: 1.65;
}

.day-detail.output p,
.day-detail.tools p {
  color: rgba(255, 255, 255, 0.86);
  font-weight: 700;
}

@media (max-width: 1120px) {
  .course-day-card {
    grid-template-columns: minmax(120px, 0.9fr) repeat(2, minmax(180px, 1.35fr));
  }

  .day-detail.tools,
  .day-detail.output {
    grid-column: span 1;
  }
}

@media (max-width: 760px) {
  .mobile-robot-course {
    padding: 14px;
  }

  .track-switch,
  .course-stage,
  .course-day-card {
    grid-template-columns: 1fr;
  }

  .course-stage {
    min-height: 0;
    padding: 12px 0 20px;
  }

  .course-copy h3 {
    font-size: 22px;
  }

  .robot-image {
    max-height: 190px;
  }
}
</style>
