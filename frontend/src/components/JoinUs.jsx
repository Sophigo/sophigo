import React from 'react';
import { ArrowLeft, Users, Terminal, Sparkles, Mail, Send, Award } from 'lucide-react';

export default function JoinUs({ onBack, lang = 'zh' }) {
  const t = {
    zh: {
      eyebrow: "JOIN US",
      title: "we Drive, We Thrive",
      back: "返回首页",
      whoTitle: "我们是谁 · WHO WE ARE",
      whoDesc1: "“Sophi”源自拉丁语“Sophia”，代表智慧与精致；“Go”则代表探索与前行。Sophigo 致力于打破传统工科与软硬件开发的边界，构建集硬件、算法与 CMF 极简美学于一体的工程创新数字化平台。我们是由一群来自全球多所顶尖高校、具备跨学科背景的极客与创客组成的敏捷造物团队。",
      whoDesc2: "在 Sophigo，我们相信“代码构筑物理实体”。团队汇聚了软件算法、机械结构、CMF 表面处理以及数字制造等领域的顶尖人才。我们从第一性原理出发，重构人、代码与智能实体之间的协作模型，赋能下一代工程师与创造者。",
      whatTitle: "我们做什么 · WHAT WE DO",
      whatDesc: "我们深耕 AI Native 时代下的敏捷硬件开发与新工科教育，致力于将复杂算法与物理底盘解算无缝结合，开发从参数化交通工具生成器、仿真运动链、到物理实体装配的完整闭环流程。",
      pillars: [
        { title: "参数化造物平台", desc: "开发大语言模型友好的 3D CAD SDK，让 AI 编写几何参数，利用受限沙箱物理编译器进行几何与关节运动范围的验证与微调。" },
        { title: "线控底盘与仿真", desc: "设计软硬件一体的 ROS2 机器人移动底盘，打通从 Web 粒子流仿真、底盘 kinematics 逆解、到现场电机的控制管线。" },
        { title: "CMF 工艺数字化", desc: "建立标准的阳极氧化、喷砂表面处理色卡配方参数，为物理零件设计提供极致触觉与极简美学的量化保障。" }
      ],
      joinTitle: "希望你的加入 · OPEN ROLES",
      joinDesc: "我们寻找敢于打破常规、热衷于将代码转化为物理现实的探险家。不论你是软件极客、机器人专家，还是工业设计美学家，这里都有你的舞台。",
      roles: [
        { role: "ROS2 机器人算法工程师", type: "全职 / 杭州或远程", desc: "负责移动底盘轨迹规划、运动学逆解开发与多模态传感器仿真调试。熟悉 ROS2 与 C++。" },
        { role: "参数化 CAD 渲染开发 (Three.js/WebGL)", type: "全职或实习 / 杭州", desc: "负责 Web 端参数化 3D 几何渲染与仿真粒子流交互。熟悉 Three.js、WebGL 与 React。" },
        { role: "CMF 工业设计师 & 美学顾问", type: "全职或兼职", desc: "定义物理实体的色彩、触觉工艺配方。主导标准表面处理（阳极氧化/喷砂）的数字化建模。" }
      ],
      contact: "投递通道",
      contactBtn: "发送简历至 join@sophigo.com"
    },
    en: {
      eyebrow: "JOIN US",
      title: "We Drive, We Thrive",
      back: "Back to Home",
      whoTitle: "WHO WE ARE",
      whoDesc1: "'Sophi' originates from Latin 'Sophia', representing wisdom and refinement; 'Go' signifies exploration and progress. Sophigo is dedicated to breaking the boundary of traditional engineering and hardware development, building a digital platform integrating hardware, algorithms, and CMF minimalist aesthetics. We are an agile fabrication team of cross-disciplinary makers from global leading universities.",
      whoDesc2: "At Sophigo, we believe in 'Code defining physical entities'. We gather talents from software algorithms, mechanical structures, CMF surface finishes, and digital manufacturing. Guided by first principles, we reshape the collaboration model between humans, code, and smart entities, empowering the next-generation engineers.",
      whatTitle: "WHAT WE DO",
      whatDesc: "We specialize in agile hardware R&D and 'New Engineering' education in the AI Native era, seamlessly integrating complex kinematics with mechanical chassis, creating closed-loop pipelines from parametric design models to physical assemblies.",
      pillars: [
        { title: "Parametric Design SDK", desc: "Develop LLM-friendly 3D CAD SDKs for AI agents to write geometric scripts, verified within simulated sandboxes." },
        { title: "ROS2 & 3D Simulation", desc: "Build integrated ROS2 robot platforms, bridging Web 3D particle simulation and physical motor controllers." },
        { title: "Digital CMF Standards", desc: "Establish color recipes and anodizing thickness parameters to ensure tactile and minimalist aesthetic quality." }
      ],
      joinTitle: "OPEN ROLES",
      joinDesc: "We look for explorers who dare to challenge boundaries and turn lines of code into physical reality. Whether you are a hacker, roboticist, or CMF artist, welcome home.",
      roles: [
        { role: "ROS2 Robotics Algorithm Engineer", type: "Full-time / Hangzhou or Remote", desc: "Design trajectory planning and kinematics solvers. Experience with ROS2, C++ and MuJoCo is required." },
        { role: "Parametric CAD & WebGL Developer", type: "Full-time or Intern / Hangzhou", desc: "Build Web 3D geometries and dynamic simulation interfaces. Proficient with Three.js, WebGL and React." },
        { role: "CMF Industrial Designer", type: "Full-time or Part-time", desc: "Define colors, materials, and finishes. Main standard anodizing, sandblasting surface modeling." }
      ],
      contact: "Contact Channel",
      contactBtn: "Send Resume to join@sophigo.com"
    }
  }[lang] || t.zh;

  return (
    <div style={{
      position: 'relative',
      minHeight: '100vh',
      backgroundColor: '#02060f',
      color: '#f4f9ff',
      overflowX: 'hidden',
      fontFamily: '"PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif'
    }}>
      {/* Glowing background - exactly replicating reference style */}
      <div style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        background: `
          radial-gradient(1000px 500px at 85% -10%, rgba(26, 141, 217, 0.22), transparent 60%),
          radial-gradient(800px 400px at 15% 20%, rgba(10, 63, 116, 0.28), transparent 64%),
          #02060f
        `,
        pointerEvents: 'none'
      }} />

      {/* Main Container */}
      <div className="container-custom" style={{ position: 'relative', zIndex: 1, paddingBlock: '4rem 6rem' }}>
        
        {/* Back Button */}
        <button 
          onClick={onBack}
          style={{
            background: 'none',
            border: 'none',
            color: '#90a8c5',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '0.95rem',
            fontWeight: 500,
            marginBottom: '3rem',
            transition: 'color 0.2s'
          }}
          className="back-btn-hover"
        >
          <ArrowLeft size={18} />
          {t.back}
        </button>

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
                <div 
                  key={idx} 
                  style={{
                    backgroundColor: 'rgba(5, 13, 26, 0.6)',
                    border: '1px solid rgba(26, 141, 217, 0.15)',
                    borderRadius: '12px',
                    padding: '1.25rem',
                    transition: 'border-color 0.3s, transform 0.3s'
                  }}
                  className="pillar-card-hover"
                >
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#ffffff', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ color: '#1a8dd9' }}>0{idx + 1}.</span> {pillar.title}
                  </h3>
                  <p style={{ color: '#90a8c5', fontSize: '0.9rem', lineHeight: '1.5' }}>{pillar.desc}</p>
                </div>
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
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }} className="roles-grid">
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
                    href="mailto:join@sophigo.com" 
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
              href="mailto:join@sophigo.com"
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
        .back-btn-hover:hover {
          color: #ffffff !important;
        }
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
