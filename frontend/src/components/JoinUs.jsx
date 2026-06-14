import React from 'react';
import { ArrowLeft, Users, Terminal, Sparkles, Mail, Send, Award } from 'lucide-react';

export default function JoinUs({ onBack, lang = 'zh' }) {
  const t = {
    zh: {
      eyebrow: "JOIN US",
      title: "we Drive, We Thrive",
      whoTitle: "我们是谁 · WHO WE ARE",
      whoDesc1: "“Sophi”源自拉丁语“Sophia”，代表智慧与精致；“Go”则代表探索与前行。SophiGo 致力于打破传统工科与软硬件开发的边界，构建集硬件、算法与 CMF 极简美学于一体的工程创新数字化平台。我们是由一群来自全球多所顶尖高校、具备跨学科背景的极客与创客组成的敏捷造物团队。",
      whoDesc2: "在 SophiGo，我们相信“代码构筑物理实体”。团队汇聚了软件算法、机械结构、CMF 表面处理以及数字制造等领域的顶尖人才。我们从第一性原理出发，重构人、代码与智能实体之间的协作模型，赋能下一代工程师与创造者。",
      whatTitle: "我们做什么 · WHAT WE DO",
      whatDesc: "我们深耕 AI Native 时代下的敏捷硬件开发与新工科教育，致力于将人工智能、数字制造与工程实践深度融合。围绕 Fab Academy、AI 基础应用、AI 移动机器人及 CMF 数字化设计等核心方向，构建从知识学习、项目实践到创新落地的完整课程体系，赋能下一代工程师与创新创造者。",
      pillars: [
        { title: "Fab Academy", desc: "对接全球 Fab Academy 网络，系统培养数字制造与快速原型能力，涵盖激光切割、3D 打印、PCB 设计及嵌入式编程等全链路造物技能。", link: "/docs/courses/fab-course/" },
        { title: "AI 基础应用", desc: "从大语言模型原理到实际工程落地，构建面向工程师的 AI 工具链课程，让学员掌握 AI 辅助设计、代码生成与智能决策的实战能力。", link: "/docs/courses/ai-basics/" },
        { title: "AI 移动机器人", desc: "以 ROS2 为核心，贯通从运动学建模、路径规划到多传感器融合的完整机器人开发链路，结合实物底盘进行项目化实训。", link: "/docs/courses/mobile-robot/" },
        { title: "CMF 数字化设计", desc: "将色彩、材料与工艺（CMF）融入数字化工作流，建立表面处理参数标准，培养兼具工程思维与极简美学的新一代产品设计能力。", link: "/docs/courses/cmf/" }
      ],
      joinTitle: "希望你的加入 · OPEN ROLES",
      joinDesc: "我们寻找敢于打破常规、热衷于将代码转化为物理现实的探险家。不论你是软件极客、机器人专家，还是工业设计美学家，这里都有你的舞台。",
      roles: [
        { role: "ROS2 机器人算法工程师", type: "全职 / 宁波或远程", desc: "负责移动底盘轨迹规划、运动学逆解开发与多模态传感器仿真调试。熟悉 ROS2 与 C++。" },
        { role: "参数化 CAD 渲染开发 (Three.js/WebGL)", type: "全职或实习 / 宁波", desc: "负责 Web 端参数化 3D 几何渲染与仿真粒子流交互。熟悉 Three.js、WebGL 与 React。" },
        { role: "CMF 工业设计师 & 美学顾问", type: "全职或兼职", desc: "定义物理实体的色彩、触觉工艺配方。主导标准表面处理（阳极氧化/喷砂）的数字化建模。" },
        { role: "嵌入式系统开发工程师", type: "全职或实习 / 宁波", desc: "负责 STM32/ESP32 底层驱动开发与电机控制算法实现，熟悉 RTOS、CAN 总线与传感器融合。" }
      ],
      contact: "投递通道",
      contactBtn: "发送简历至 bobwu@profabx.com"
    },
    en: {
      eyebrow: "JOIN US",
      title: "We Drive, We Thrive",
      whoTitle: "WHO WE ARE",
      whoDesc1: "'Sophi' originates from Latin 'Sophia', representing wisdom and refinement; 'Go' signifies exploration and progress. SophiGo is dedicated to breaking the boundary of traditional engineering and hardware development, building a digital platform integrating hardware, algorithms, and CMF minimalist aesthetics. We are an agile fabrication team of cross-disciplinary makers from global leading universities.",
      whoDesc2: "At SophiGo, we believe in 'Code defining physical entities'. We gather talents from software algorithms, mechanical structures, CMF surface finishes, and digital manufacturing. Guided by first principles, we reshape the collaboration model between humans, code, and smart entities, empowering the next-generation engineers.",
      whatTitle: "WHAT WE DO",
      whatDesc: "We specialize in agile hardware development and new engineering education in the AI Native era, deeply integrating artificial intelligence, digital fabrication, and engineering practice. Built around four core tracks — Fab Academy, AI Fundamentals, AI Mobile Robots, and CMF Digital Design — we deliver a complete learning ecosystem from foundational knowledge to hands-on innovation, empowering the next generation of engineers and creators.",
      pillars: [
        { title: "Fab Academy", desc: "Connected to the global Fab Academy network, cultivating digital fabrication skills across laser cutting, 3D printing, PCB design, and embedded programming.", link: "/docs/courses/fab-course/" },
        { title: "AI Fundamentals", desc: "From LLM principles to real engineering workflows — AI-assisted design, code generation, and intelligent decision-making for engineers.", link: "/docs/courses/ai-basics/" },
        { title: "AI Mobile Robots", desc: "ROS2-centered curriculum spanning kinematics modeling, path planning, and multi-sensor fusion, with physical robot hardware projects.", link: "/docs/courses/mobile-robot/" },
        { title: "CMF Digital Design", desc: "Integrate Color, Material & Finish (CMF) into digital workflows, building surface finish parameter standards for the next-generation of product designers.", link: "/docs/courses/cmf/" }
      ],
      joinTitle: "OPEN ROLES",
      joinDesc: "We look for explorers who dare to challenge boundaries and turn lines of code into physical reality. Whether you are a hacker, roboticist, or CMF artist, welcome home.",
      roles: [
        { role: "ROS2 Robotics Algorithm Engineer", type: "Full-time / Ningbo or Remote", desc: "Design trajectory planning and kinematics solvers. Experience with ROS2, C++ and MuJoCo is required." },
        { role: "Parametric CAD & WebGL Developer", type: "Full-time or Intern / Ningbo", desc: "Build Web 3D geometries and dynamic simulation interfaces. Proficient with Three.js, WebGL and React." },
        { role: "CMF Industrial Designer", type: "Full-time or Part-time", desc: "Define colors, materials, and finishes. Main standard anodizing, sandblasting surface modeling." },
        { role: "Embedded Systems Engineer", type: "Full-time or Intern / Ningbo", desc: "Develop STM32/ESP32 firmware and motor control algorithms. Experienced with RTOS, CAN bus, and sensor fusion." }
      ],
      contact: "Contact Channel",
      contactBtn: "Send Resume to bobwu@profabx.com"
    }
  }[lang] || t.zh;

  return (
    <div style={{
      position: 'relative',
      minHeight: '100vh',
      backgroundColor: 'rgba(2, 6, 15, 0.20)',
      color: '#f4f9ff',
      overflowX: 'hidden',
      fontFamily: '"PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif'
    }}>
      {/* AntiGravityBackground from App.jsx provides the animated particle background */}
      {/* Transparent overlay for subtle ambient glow */}
      <div style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        background: `
          radial-gradient(1000px 500px at 85% -10%, rgba(26, 141, 217, 0.10), transparent 60%),
          radial-gradient(800px 400px at 15% 20%, rgba(10, 63, 116, 0.12), transparent 64%)
        `,
        pointerEvents: 'none'
      }} />

      {/* Main Container */}
      <div className="container-custom" style={{ position: 'relative', zIndex: 1, paddingBlock: '4rem 6rem' }}>
        
        {/* Hero Section */}
        <div style={{ textAlign: 'center', marginBottom: '6rem', position: 'relative' }}>
          <span style={{
            display: 'inline-block',
            fontSize: '0.85rem',
            fontWeight: 600,
            color: '#1a8dd9',
            letterSpacing: '0.2em',
            marginBottom: '1rem',
            textTransform: 'uppercase'
          }}>
            {t.eyebrow}
          </span>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            color: '#ffffff',
            lineHeight: 1.1,
            marginBottom: '1.5rem',
            textTransform: 'uppercase'
          }}>
            {t.title}
          </h1>
          <div style={{
            width: '60px',
            height: '3px',
            backgroundColor: '#1a8dd9',
            margin: '0 auto',
            borderRadius: '999px'
          }}></div>
        </div>

        {/* Layout split grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
          
          {/* Section 1: Who We Are */}
          <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'flex-start' }} className="responsive-split">
            <h2 style={{ fontSize: '1.75rem', fontWeight: 600, color: '#ffffff', borderLeft: '4px solid #1a8dd9', paddingLeft: '1rem' }}>
              {t.whoTitle}
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', color: '#90a8c5', lineHeight: '1.7', fontSize: '1.05rem' }}>
              <p>{t.whoDesc1}</p>
              <p>{t.whoDesc2}</p>
            </div>
          </section>

          {/* Section 2: What We Do */}
          <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'flex-start' }} className="responsive-split">
            <div>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 600, color: '#ffffff', borderLeft: '4px solid #1a8dd9', paddingLeft: '1rem', marginBottom: '1.5rem' }}>
                {t.whatTitle}
              </h2>
              <p style={{ color: '#90a8c5', lineHeight: '1.7', fontSize: '1.05rem' }}>
                {t.whatDesc}
              </p>
            </div>
            {/* Pillars Grid */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {t.pillars.map((pillar, idx) => (
                <a
                  key={idx}
                  href={pillar.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'block',
                    textDecoration: 'none',
                    backgroundColor: 'rgba(5, 13, 26, 0.6)',
                    border: '1px solid rgba(26, 141, 217, 0.15)',
                    borderRadius: '12px',
                    padding: '1.25rem',
                    transition: 'border-color 0.3s, transform 0.3s, background-color 0.3s',
                    cursor: 'pointer'
                  }}
                  className="pillar-card-hover"
                >
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#ffffff', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ color: '#1a8dd9' }}>0{idx + 1}.</span> {pillar.title}
                    </span>
                    <span style={{ color: '#1a8dd9', fontSize: '0.8rem', opacity: 0.7 }}>→</span>
                  </h3>
                  <p style={{ color: '#90a8c5', fontSize: '0.9rem', lineHeight: '1.5', margin: 0 }}>{pillar.desc}</p>
                </a>
              ))}
            </div>
          </section>

          {/* Section 3: Open Roles */}
          <section style={{ borderTop: '1px solid rgba(144, 168, 197, 0.15)', paddingTop: '5rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <h2 style={{ fontSize: '2rem', fontWeight: 600, color: '#ffffff', marginBottom: '1rem' }}>
                {t.joinTitle}
              </h2>
              <p style={{ color: '#90a8c5', maxWidth: '600px', margin: '0 auto', fontSize: '1rem' }}>
                {t.joinDesc}
              </p>
            </div>

            {/* Roles Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }} className="roles-grid">
              {t.roles.map((role, idx) => (
                <div 
                  key={idx}
                  style={{
                    backgroundColor: 'rgba(5, 13, 26, 0.4)',
                    border: '1px solid rgba(144, 168, 197, 0.1)',
                    borderRadius: '16px',
                    padding: '2rem 1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '240px',
                    transition: 'all 0.3s'
                  }}
                  className="role-card-hover"
                >
                  <div>
                    <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#1a8dd9', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
                      {role.type}
                    </span>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#ffffff', marginBottom: '0.75rem', lineHeight: '1.3' }}>
                      {role.role}
                    </h3>
                    <p style={{ color: '#90a8c5', fontSize: '0.85rem', lineHeight: '1.6' }}>
                      {role.desc}
                    </p>
                  </div>

                  <a 
                    href="mailto:bobwu@profabx.com" 
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.25rem',
                      textDecoration: 'none',
                      color: '#ffffff',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      marginTop: '1.5rem',
                      transition: 'gap 0.2s'
                    }}
                    className="role-cta-hover"
                  >
                    立即申请
                    <ArrowLeft style={{ transform: 'rotate(180deg)' }} size={16} />
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4: Contact resume channel */}
          <section style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            padding: '3rem',
            borderRadius: '24px',
            background: 'linear-gradient(135deg, rgba(10, 63, 116, 0.3) 0%, rgba(5, 13, 26, 0.6) 100%)',
            border: '1px solid rgba(26, 141, 217, 0.2)',
            marginTop: '2rem'
          }}>
            <Mail size={32} style={{ color: '#1a8dd9', marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#ffffff', marginBottom: '0.5rem' }}>{t.contact}</h3>
            <p style={{ color: '#90a8c5', fontSize: '0.95rem', marginBottom: '1.75rem', maxWidth: '480px' }}>
              请将个人简历及作品集（PDF格式，如有参数化几何脚本或ROS2控制节点Demo更佳）发送至我们的邮箱，我们会在3个工作日内与你联系。
            </p>
            <a 
              href="mailto:bobwu@profabx.com"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.8rem 1.75rem',
                backgroundColor: '#1a8dd9',
                color: '#ffffff',
                border: 'none',
                borderRadius: '9999px',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'all 0.2s',
                boxShadow: '0 4px 14px rgba(26,141,217,0.3)'
              }}
              className="send-btn-hover"
            >
              <Send size={16} />
              {t.contactBtn}
            </a>
          </section>

        </div>

      </div>

      <style>{`
        .pillar-card-hover:hover {
          border-color: rgba(26, 141, 217, 0.4) !important;
          transform: translateY(-2px);
          background-color: rgba(5, 13, 26, 0.8) !important;
        }
        .role-card-hover:hover {
          border-color: rgba(26, 141, 217, 0.3) !important;
          box-shadow: 0 10px 30px rgba(10, 63, 116, 0.15);
          transform: translateY(-4px);
          background-color: rgba(5, 13, 26, 0.7) !important;
        }
        .role-card-hover:hover .role-cta-hover {
          color: #1a8dd9 !important;
        }
        .send-btn-hover:hover {
          background-color: #31a4f0 !important;
          box-shadow: 0 6px 20px rgba(26,141,217,0.45) !important;
          transform: translateY(-1px);
        }
        @media (max-width: 900px) {
          .responsive-split {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          .roles-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
        }
      `}</style>
    </div>
  );
}
