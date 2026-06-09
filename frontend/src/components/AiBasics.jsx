import React, { useState } from 'react';
import { ArrowLeft, Calendar, Award, Users, BookOpen } from 'lucide-react';

const DAYS = [
  { id: 1, label: 'DAY 1', desc: 'AI 需求拆解与 AIGC 实操' },
  { id: 2, label: 'DAY 2', desc: '数据抓取分析与数字人' },
  { id: 3, label: 'DAY 3', desc: '项目卡点攻坚与路演结业' },
];

const DAY_CONTENT = {
  1: {
    sessions: [
      { time: '上午', module: '模块 1', title: 'AI 需求拆解与 MVP 落地思维',
        items: [
          '解析 AI 与工作的融合逻辑，明确 AI 使用边界与核心价值',
          '教授 AI 需求分析方法，实现从主观判断到用户真实需求的转变',
          '讲解模糊痛点拆解为可执行 MVP 的核心步骤与方法',
          '结合场景梳理 AI 应用框架，完成《AI 产品说明书》初稿',
        ] },
      { time: '下午', module: '模块 2', title: 'AIGC 全工具实操与场景应用',
        items: [
          '讲解 Prompt 核心撰写技巧，掌握不同场景的设计逻辑',
          '介绍国内外主流 AIGC 工具，覆盖图文、PPT、简易视频生成',
          '演示各类 AIGC 工具搭配策略，适配创意工作不同需求',
          '实操指导学员用工具完成 IP 形象设计与报告生成',
        ] },
    ],
  },
  2: {
    sessions: [
      { time: '上午', module: '模块 3', title: '电商数据采集分析与 Web 可视化',
        items: [
          '教学可视化爬取技术，实现多平台电商数据高效抓取',
          '讲解 Cursor+NotebookLM 用法，实现对话式数据清洗与分析',
          '教授 Prompt 定制技巧，实现秒级报告与图文一键排版',
          '借助 Google AI Studio，实现分析数据的 Web 开发与可视化',
        ] },
      { time: '下午', module: '模块 4', title: '数字人开发与 API 交互实操',
        items: [
          '讲解 RAG、NotebookLM 核心原理，夯实数字人开发基础',
          '介绍 Web 前后端基础，解析数字人 API 调用逻辑与方法',
          '演示 2D 数字人简易交互实现流程，开展现场实操指导',
          '结合实际创意场景，梳理数字人开发核心环节与优化方向',
        ] },
    ],
  },
  3: {
    sessions: [
      { time: '上午', module: '模块 5', title: 'AI 项目开发卡点攻坚与推进',
        items: [
          '收集学员实操问题，由导师进行集中解答',
          '针对学员项目进度，开展一对一推进指导',
          '帮助定位项目关键卡点，提供落地解决思路',
          '督促梳理项目当前进展，提炼核心问题并提交',
        ] },
      { time: '下午', module: '模块 6', title: 'AI 原生产品路演 & 结业仪式',
        items: [
          '学员开展产品路演，展示自主开发的 AI 原生工具 / 产品原型',
          '导师从产品逻辑、技术实现、用户体验维度进行专业点评与结业指导',
          '举行结业仪式，颁发培训结业证书',
        ] },
    ],
  },
};

const TEACHERS = [
  { name: '孙煦 教授', title: '理工学院合作与创新副院长 / 教授 / 博导',
    bio: '埃因霍芬理工大学博士，拉夫堡大学人机交互博士。英国工程设计协会特许设计师、宝钢优秀教师。研究智能人机交互与创新设计，申获专利20余项，近5年获得 IF, IDA, A\'Design 等国际设计大奖30余项。' },
  { name: '吴波', title: 'UNNC-FabLab 实验室经理 / 全球导师',
    bio: '软硬件全栈工程师。专注于 AI 落地应用开发、交通工具创新算法及定制工作流开发。在 MIT Fab Academy 全球教育方案基础上，创新研发出符合国内企业原型的全栈开发及智能硬件课程。' },
  { name: '张尧闰 博士', title: '宁诺人机交互博士在读 / 帝国理工硕士',
    bio: 'MIT Fab Academy 认证专家。深耕 AI 与时尚创意交叉领域，构建过基于风格迁移的智能生成设计应用、皮肤健康检测等 AI 平台，曾获 European Product Design 及美国 IDA 大奖。' },
  { name: '郗铭钊', title: 'AI 应用专家 / 交互设计师',
    bio: '拥有跨学科设计与 AI 技术落地实战经验。曾在香港大学"AI与未来科技"项目主导视觉重建与高斯溅射技术的应用并斩获一等奖，其交互设计项目曾获德国红点（Red Dot）设计大奖。' },
];

export default function AiBasics({ onBack }) {
  const [activeDay, setActiveDay] = useState(1);

  return (
    <div className="aibasic-page">
      {/* Hero */}
      <section className="aibasic-hero">
        <div className="aibasic-hero-overlay" />
        <div className="aibasic-hero-content">
          <h1 className="aibasic-hero-title">AI基础应用创造营</h1>
        </div>
      </section>

      <div className="aibasic-container">

        {/* Course Plan */}
        <section className="aibasic-section">
          <div className="aibasic-section-header">
            <span className="aibasic-tag">Course Plan</span>
            <h2 className="aibasic-section-title">课程总体方案与日程安排</h2>
          </div>

          <div className="aibasic-objective">
            <div className="aibasic-objective-label">💡 课程目标</div>
            <p>本次培训聚焦 <strong>AI 工具基础应用与实际工作场景落地</strong>，帮助参训人员提升 AI 认知，掌握核心 AI 工具的初步使用方法，能够将 AI 技术应用于 IP 形象打造、数字人开发、电商数据抓取分析等工作场景，优化工作方式与业务流程；同时实现小功能、工作流的 Web 开发落地，最终能独立输出 AI 原生产品方案，推动团队在工作中合理运用 AI 技术，提升工作效率与创意落地能力。</p>
          </div>

          {/* Day tabs */}
          <div className="aibasic-tabs">
            {DAYS.map(day => (
              <button key={day.id} className={`aibasic-tab-btn ${activeDay === day.id ? 'active' : ''}`} onClick={() => setActiveDay(day.id)}>
                <span className="aibasic-tab-num">{day.label}</span>
                <span className="aibasic-tab-desc">{day.desc}</span>
              </button>
            ))}
          </div>

          {/* Timeline */}
          <div className="aibasic-timeline">
            {DAY_CONTENT[activeDay].sessions.map((session, idx) => (
              <div key={idx} className="aibasic-timeline-item">
                <span className="aibasic-time-tag">{session.time}</span>
                <div className="aibasic-timeline-card">
                  <div className="aibasic-module-num">{session.module}</div>
                  <h4>{session.title}</h4>
                  <ul>
                    {session.items.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Teachers */}
        <section className="aibasic-section">
          <div className="aibasic-section-header">
            <span className="aibasic-tag">Teaching Resource</span>
            <h2 className="aibasic-section-title">核心师资力量</h2>
          </div>
          <div className="aibasic-teachers">
            {TEACHERS.map((t, i) => (
              <div key={i} className="aibasic-teacher-card">
                <h3>{t.name}</h3>
                <p className="aibasic-teacher-title">{t.title}</p>
                <p className="aibasic-teacher-bio">{t.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* UNNC Campus */}
        <section className="aibasic-section" style={{ borderBottom: 'none' }}>
          <div className="aibasic-section-header">
            <span className="aibasic-tag">UNNC Campus</span>
            <h2 className="aibasic-section-title">宁波诺丁汉大学校园风光</h2>
          </div>
          <div className="aibasic-unnc-img">
            <img src="/unnc_campus.jpg" alt="University of Nottingham Ningbo China Campus" />
          </div>
        </section>

      </div>

      <style>{`
        .aibasic-page {
          background: radial-gradient(circle at 50% 0%, rgba(37, 99, 235, 0.08), transparent 34rem),
                      linear-gradient(180deg, rgba(7,16,29,0.20) 0%, rgba(8,13,22,0.15) 44%, rgba(7,11,18,0.20) 100%);
          color: #f3f4f6;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          min-height: 100vh;
          padding-bottom: 4rem;
        }
        .aibasic-hero {
          position: relative;
          min-height: 320px;
          display: flex;
          align-items: center;
          padding: 5rem 1.5rem;
          overflow: hidden;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .aibasic-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(7,13,24,0.30), rgba(7,13,24,0.60)),
                      linear-gradient(90deg, rgba(7,13,24,0.50), rgba(7,13,24,0.2) 45%, rgba(7,13,24,0.50)),
                      url('/unnc_campus.jpg');
          background-size: cover;
          background-position: center 45%;
          opacity: 0.5;
          z-index: 1;
        }
        .aibasic-hero-overlay {
          position: absolute; inset: 0;
          background: radial-gradient(circle at 50% 46%, rgba(59,130,246,0.26), transparent 28rem),
                      linear-gradient(180deg, transparent 0%, rgba(7,13,24,0.38) 100%);
          pointer-events: none;
          z-index: 2;
        }
        .aibasic-hero-content {
          position: relative; z-index: 3;
          max-width: 1120px; margin: 0 auto; width: 100%;
          text-align: center;
        }
        .aibasic-hero-title {
          font-size: 3.25rem; font-weight: 800; color: #fff;
          margin: 0; letter-spacing: 0;
          text-shadow: 0 12px 36px rgba(0,0,0,0.5);
          text-align: center;
        }
        .aibasic-container { max-width: 1120px; margin: 0 auto; padding: 2.75rem 1.75rem; }
        .aibasic-section { padding: 3.25rem 0; border-bottom: 1px solid rgba(255,255,255,0.05); }
        .aibasic-section:first-of-type { padding-top: 0 !important; }
        .aibasic-section-header { margin-bottom: 1.5rem; }
        .aibasic-tag {
          font-size: 0.75rem; font-weight: 800; text-transform: uppercase;
          color: #3b82f6; letter-spacing: 2px; display: block; margin-bottom: 0.5rem;
        }
        .aibasic-section-title { font-size: 1.9rem; font-weight: 700; margin: 0; color: #fff; }

        .aibasic-objective {
          background: rgba(15,23,42,0.76); border: 1px solid rgba(148,163,184,0.12);
          border-radius: 0.75rem; padding: 1.25rem 1.5rem; margin-bottom: 1.5rem;
          box-shadow: 0 18px 50px rgba(0,0,0,0.16);
        }
        .aibasic-objective-label { font-size: 0.9rem; font-weight: 700; color: #3b82f6; margin-bottom: 0.5rem; }
        .aibasic-objective p { font-size: 0.95rem; color: #dbeafe; line-height: 1.6; margin: 0; }
        .aibasic-objective strong { color: #fff; }

        .aibasic-tabs { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-bottom: 1rem; }
        .aibasic-tab-btn {
          background: rgba(15,23,42,0.66); border: 1px solid rgba(148,163,184,0.12);
          border-radius: 0.5rem; padding: 1rem 1.15rem; cursor: pointer;
          text-align: left; display: flex; flex-direction: column; gap: 0.25rem;
          transition: all 0.2s; min-height: 82px; font-family: inherit;
        }
        .aibasic-tab-btn:hover { background: rgba(255,255,255,0.04); }
        .aibasic-tab-btn.active { background: rgba(37,99,235,0.16); box-shadow: inset 0 0 0 1px rgba(96,165,250,0.28); }
        .aibasic-tab-num { font-size: 0.8rem; font-weight: 800; color: #3b82f6; letter-spacing: 0.5px; }
        .aibasic-tab-desc { font-size: 0.85rem; font-weight: 600; color: #fff; }

        .aibasic-timeline { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; }
        .aibasic-timeline-item { display: flex; flex-direction: column; gap: 0.75rem; }
        .aibasic-time-tag {
          display: inline-flex; width: fit-content; padding: 0.25rem 0.65rem;
          border-radius: 999px; background: rgba(59,130,246,0.12); color: #93c5fd;
          font-size: 0.8rem; font-weight: 700;
        }
        .aibasic-timeline-card {
          background: rgba(15,23,42,0.76); border: 1px solid rgba(148,163,184,0.12);
          border-radius: 0.75rem; padding: 1.25rem 1.4rem; height: 100%;
          box-shadow: 0 18px 50px rgba(0,0,0,0.16);
        }
        .aibasic-module-num {
          font-size: 0.75rem; font-weight: 800; text-transform: uppercase;
          color: #8b5cf6; letter-spacing: 1px; margin-bottom: 0.25rem;
        }
        .aibasic-timeline-card h4 { font-size: 1.15rem; font-weight: 700; color: #fff; margin: 0 0 0.75rem; }
        .aibasic-timeline-card ul { margin: 0; padding-left: 1.25rem; display: flex; flex-direction: column; gap: 0.5rem; }
        .aibasic-timeline-card li { font-size: 0.85rem; color: #b6c3d6; line-height: 1.5; }

        .aibasic-teachers { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; }
        .aibasic-teacher-card {
          background: rgba(15,23,42,0.76); border: 1px solid rgba(148,163,184,0.12);
          border-radius: 0.75rem; padding: 1.25rem; min-height: 220px;
          display: flex; flex-direction: column; gap: 0.75rem;
          box-shadow: 0 18px 50px rgba(0,0,0,0.16); transition: transform 0.2s;
        }
        .aibasic-teacher-card:hover { transform: translateY(-2px); }
        .aibasic-teacher-card h3 { font-size: 1.15rem; font-weight: 700; color: #fff; margin: 0; }
        .aibasic-teacher-title { font-size: 0.75rem; font-weight: 600; color: #3b82f6; margin: 0; text-transform: uppercase; letter-spacing: 0.5px; }
        .aibasic-teacher-bio { font-size: 0.825rem; color: #b6c3d6; line-height: 1.6; margin: 0; }
        .aibasic-teacher-card { min-height: auto; }

        .aibasic-unnc-img {
          margin-top: 1.5rem; border-radius: 14px; overflow: hidden;
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow: 0 24px 70px rgba(0,0,0,0.28);
        }
        .aibasic-unnc-img img { width: 100%; height: min(48vw, 520px); object-fit: cover; object-position: center 45%; display: block; }

        @media (max-width: 1024px) {
          .aibasic-teachers { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 760px) {
          .aibasic-hero { min-height: 260px; padding: 4rem 1.1rem; }
          .aibasic-hero-title { font-size: 2.1rem; }
          .aibasic-container { padding-inline: 1.1rem; }
          .aibasic-section { padding: 2.4rem 0; }
          .aibasic-tabs, .aibasic-timeline, .aibasic-teachers { grid-template-columns: 1fr; }
          .aibasic-unnc-img img { height: 260px !important; }
        }
      `}</style>
    </div>
  );
}
