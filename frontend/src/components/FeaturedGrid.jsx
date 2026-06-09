import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function FeaturedGrid({ lang = 'zh', userPermissions = ['Fab课程', 'AI应用基础'] }) {
  const t = {
    zh: {
      subtitle: "Featured Areas",
      title: "探索核心创新板块",
      desc: "SophiGo 围绕智能硬件与 AI Native 工程创新构建完整的数字化学习生态。",
      cta: "浏览课程与案例",
      cards: [
        {
          title: 'Fab 课程 (Fab Courses)',
          description: '数字化快速原型 Digital Fabrication：依托 Fab Lab 数字化制造实验室，学习实验室基础、安全准入、材料与设备，以及项目管理、CAD、3D 打印、电子设计、Arduino、激光切割、PCB、CNC、IoT 与人机交互等 1-14 核心教程，实现从想法到原型的快速迭代。',
          tag: '',
        },
        {
          title: 'AI 基础应用 (AI Basics)',
          description: 'AI基础应用创造营：聚焦 AI 工具基础应用与实际工作场景落地，覆盖 AI 需求拆解与 MVP 落地、AIGC 全工具实操、电商数据采集分析与 Web 可视化、数字人开发与 API 交互、项目攻坚和 AI 原生产品路演。',
          tag: '',
        },
        {
          title: 'AI 移动机器人 (AI Mobile Robots)',
          description: '在移动机器人场景下，需求提出与定义，AI工具使用与工程化，辩证思考与决策，了解AI能力边界，文档复盘',
          tag: '',
        }
      ]
    },
    en: {
      subtitle: "Featured Areas",
      title: "Explore Core Innovation Areas",
      desc: "SophiGo builds a complete digital learning ecosystem around smart hardware and AI Native engineering innovation.",
      cta: "Browse Courses & Cases",
      cards: [
        {
          title: 'Fab Courses',
          description: 'Digital Fabrication through Fab Lab: learn lab foundations, safety access, materials and equipment, plus core tutorials 1-14 spanning project management, CAD, 3D printing, electronics, Arduino, laser cutting, PCB, CNC, IoT, and interface programming to move from idea to prototype.',
          tag: '',
        },
        {
          title: 'AI Basics',
          description: 'A practical AI application bootcamp focused on real work scenarios, covering AI requirement breakdown and MVP thinking, AIGC tool practice, e-commerce data analysis with web visualization, digital human and API interaction, project unblock sessions, and AI-native product demos.',
          tag: '',
        },
        {
          title: 'AI Mobile Robots',
          description: 'Under mobile robot scenarios: demand elicitation and definition, AI tool usage and engineering, critical thinking and decision making, understanding AI boundaries, and documentation retrospectives.',
          tag: '',
        }
      ]
    }
  }[lang] || t.zh;

  // Check user permission (Item 1) - If user has permission, render card with full colorful border.
  // Otherwise render with slightly dimmed aesthetic.
  const hasPermission = (courseName) => {
    return userPermissions.includes(courseName);
  };

  const cardsData = [
    {
      title: t.cards[0].title,
      description: t.cards[0].description,
      tag: t.cards[0].tag,
      icon: <FullStackIcon />,
      link: '#/courses/fab-course',
      permissionKey: 'Fab课程',
      svg: <FabCourseVisual />
    },
    {
      title: t.cards[1].title,
      description: t.cards[1].description,
      tag: t.cards[1].tag,
      icon: <NeuralGrowthIcon />,
      link: '#/courses/ai-basics',
      permissionKey: 'AI应用基础',
      svg: <AiBasicsVisual />
    },
    {
      title: t.cards[2].title,
      description: t.cards[2].description,
      tag: t.cards[2].tag,
      icon: <RobotAssemblyIcon />,
      link: '#/courses/mobile-robot',
      permissionKey: 'AI移动机器人',
      svg: <MobileRobotVisual />
    }
  ];

  return (
    <section id="showcase" className="container-custom" style={{ paddingBlock: '6rem 4rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <span style={{
          fontSize: '0.85rem',
          fontWeight: 600,
          color: 'var(--klein-blue)',
          textTransform: 'uppercase',
          letterSpacing: '0.15em',
          display: 'block',
          marginBottom: '0.75rem'
        }}>
          {t.subtitle}
        </span>
        <h2 style={{
          fontSize: '2.25rem',
          fontWeight: 700,
          marginBottom: '1rem',
          letterSpacing: '-0.02em'
        }}>
          {t.title}
        </h2>
        <p style={{
          color: 'var(--text-secondary)',
          maxWidth: '600px',
          margin: '0 auto',
          fontSize: '1rem',
          lineHeight: '1.5'
        }}>
          {t.desc}
        </p>
      </div>

      <div className="featured-course-grid">
        {cardsData.map((card, idx) => {
          const isPermitted = hasPermission(card.permissionKey);
          return (
            <div 
              key={idx} 
              className="glassmorphism-card sophigo-card"
              style={{
                // Item 1: Render border glow or simple border based on permission state
                border: isPermitted ? '1px solid rgba(0, 47, 167, 0.45)' : '1px solid var(--border-color)',
                boxShadow: isPermitted ? '0 8px 30px rgba(0, 47, 167, 0.08)' : 'none',
                opacity: isPermitted ? 1 : 0.85,
                minWidth: 0,
                height: '520px'
              }}
            >
              {/* SVG Media container */}
              <div className="sophigo-card-media" style={{ height: '196px', position: 'relative' }}>
                {card.svg}
              </div>

              {/* Info contents */}
              <div className="sophigo-card-content" style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  color: isPermitted ? 'var(--klein-blue)' : 'var(--text-muted)',
                  marginBottom: '0.5rem'
                }}>
                  {card.icon}
                  {card.tag && (
                    <span style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {card.tag}
                    </span>
                  )}
                </div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '0.5rem', lineHeight: '1.3' }}>
                  {card.title}
                </h3>
                <p style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.8rem',
                  lineHeight: '1.5',
                  marginBottom: '1rem',
                  flexGrow: 1
                }}>
                  {card.description}
                </p>
                
                <a 
                  href={card.link}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                    textDecoration: 'none',
                    color: 'var(--text-primary)',
                    fontWeight: 600,
                    fontSize: '0.8rem',
                    transition: 'gap 0.2s',
                    marginTop: 'auto'
                  }}
                  className="card-cta-link"
                >
                  {t.cta}
                  <ArrowRight size={14} style={{ transition: 'transform 0.2s' }} className="arrow-icon" />
                </a>
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        .featured-course-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 2rem;
          width: 100%;
          align-items: stretch;
        }
        @media (max-width: 1024px) {
          .featured-course-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        @media (max-width: 768px) {
          .featured-course-grid {
            grid-template-columns: 1fr;
          }
        }
        .course-visual-svg {
          background: radial-gradient(circle at 50% 35%, rgba(248,250,252,0.08), rgba(7,9,13,0) 58%), #07090d;
        }
        .course-visual-svg text {
          letter-spacing: 0;
          paint-order: stroke;
          stroke: rgba(7,9,13,0.9);
          stroke-width: 2px;
        }
        .light-panel {
          filter: drop-shadow(0 0 12px rgba(125,211,252,0.24));
        }
        .flow-line {
          stroke-dasharray: 160;
          stroke-dashoffset: 160;
          animation: drawFlow 4.4s infinite ease-in-out;
        }
        .flow-line.delay-1 { animation-delay: 0.35s; }
        .flow-line.delay-2 { animation-delay: 0.7s; }
        .fab-module {
          animation: moduleFloat 4.8s infinite ease-in-out;
        }
        .fab-module.delay-1 { animation-delay: 0.4s; }
        .fab-module.delay-2 { animation-delay: 0.8s; }
        .fab-build-dot {
          filter: drop-shadow(0 0 8px rgba(248,250,252,0.9));
        }
        .fab-gear {
          transform-origin: 309px 83px;
          animation: spinGear 8s infinite linear;
        }

        .neural-link {
          stroke-dasharray: 70;
          stroke-dashoffset: 70;
          animation: neuralTrace 3.8s infinite ease-in-out;
        }
        .neural-link.delay-1 { animation-delay: 0.22s; }
        .neural-link.delay-2 { animation-delay: 0.44s; }
        .neural-link.delay-3 { animation-delay: 0.66s; }
        .neural-layer {
          transform-box: fill-box;
          transform-origin: center;
          animation: layerGrow 4.6s infinite ease-in-out;
        }
        .neural-layer.layer-2 { animation-delay: 0.25s; }
        .neural-layer.layer-3 { animation-delay: 0.5s; }
        .neural-layer.layer-4 { animation-delay: 0.75s; }
        .neural-core {
          transform-box: fill-box;
          transform-origin: center;
          animation: nodeBreathe 2.2s infinite ease-in-out;
        }

        .robot-part {
          transform-box: fill-box;
          transform-origin: center;
          animation: robotExplode 5.2s infinite ease-in-out;
        }
        .robot-body { animation-name: robotBodyExplode; }
        .robot-sensor { animation-name: robotSensorExplode; }
        .robot-arm { animation-name: robotArmExplode; }
        .wheel-fl { animation-name: wheelFlExplode; }
        .wheel-fr { animation-name: wheelFrExplode; }
        .wheel-rl { animation-name: wheelRlExplode; }
        .wheel-rr { animation-name: wheelRrExplode; }
        .assembly-guide {
          stroke-dasharray: 5 6;
          animation: guidePulse 5.2s infinite ease-in-out;
        }

        .cmf-shell {
          filter: drop-shadow(0 0 14px rgba(248,250,252,0.2));
        }
        .cmf-swatch {
          transform-box: fill-box;
          transform-origin: center;
          animation: swatchSelect 4.8s infinite ease-in-out;
        }
        .cmf-swatch.delay-1 { animation-delay: 0.35s; }
        .cmf-swatch.delay-2 { animation-delay: 0.7s; }
        .cmf-layer {
          transform-box: fill-box;
          transform-origin: center;
          animation: cmfLayerLift 5s infinite ease-in-out;
        }
        .cmf-layer.layer-2 { animation-delay: 0.28s; }
        .cmf-layer.layer-3 { animation-delay: 0.56s; }
        .cmf-light-sweep {
          animation: finishSweep 3.6s infinite ease-in-out;
        }
        .cmf-texture-dot {
          animation: texturePulse 2.8s infinite ease-in-out;
        }

        @keyframes drawFlow {
          0%, 15% { stroke-dashoffset: 160; opacity: 0.28; }
          55% { stroke-dashoffset: 0; opacity: 1; }
          100% { stroke-dashoffset: -160; opacity: 0.36; }
        }
        @keyframes moduleFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        @keyframes spinGear {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes neuralTrace {
          0%, 18% { stroke-dashoffset: 70; opacity: 0.2; }
          62% { stroke-dashoffset: 0; opacity: 0.95; }
          100% { stroke-dashoffset: -70; opacity: 0.28; }
        }
        @keyframes layerGrow {
          0%, 100% { transform: scale(0.96); opacity: 0.66; }
          48% { transform: scale(1.04); opacity: 1; }
        }
        @keyframes nodeBreathe {
          0%, 100% { transform: scale(1); opacity: 0.78; }
          50% { transform: scale(1.42); opacity: 1; }
        }
        @keyframes robotExplode {
          0%, 32%, 100% { transform: translate(0, 0); }
          55%, 78% { transform: translate(0, 0); }
        }
        @keyframes robotBodyExplode {
          0%, 32%, 100% { transform: translate(0, 0); }
          55%, 78% { transform: translate(0, 8px); }
        }
        @keyframes robotSensorExplode {
          0%, 32%, 100% { transform: translate(0, 0); }
          55%, 78% { transform: translate(0, -24px); }
        }
        @keyframes robotArmExplode {
          0%, 32%, 100% { transform: translate(0, 0) rotate(0deg); }
          55%, 78% { transform: translate(28px, -22px) rotate(8deg); }
        }
        @keyframes wheelFlExplode {
          0%, 32%, 100% { transform: translate(0, 0); }
          55%, 78% { transform: translate(-22px, -16px); }
        }
        @keyframes wheelFrExplode {
          0%, 32%, 100% { transform: translate(0, 0); }
          55%, 78% { transform: translate(22px, -16px); }
        }
        @keyframes wheelRlExplode {
          0%, 32%, 100% { transform: translate(0, 0); }
          55%, 78% { transform: translate(-22px, 18px); }
        }
        @keyframes wheelRrExplode {
          0%, 32%, 100% { transform: translate(0, 0); }
          55%, 78% { transform: translate(22px, 18px); }
        }
        @keyframes guidePulse {
          0%, 30%, 100% { opacity: 0; }
          55%, 78% { opacity: 0.82; }
        }
        @keyframes swatchSelect {
          0%, 100% { transform: scale(1); opacity: 0.72; }
          50% { transform: scale(1.18); opacity: 1; }
        }
        @keyframes cmfLayerLift {
          0%, 100% { transform: translateY(0); opacity: 0.74; }
          52% { transform: translateY(-8px); opacity: 1; }
        }
        @keyframes finishSweep {
          0%, 20% { transform: translateX(-120px); opacity: 0; }
          45%, 70% { opacity: 0.7; }
          100% { transform: translateX(160px); opacity: 0; }
        }
        @keyframes texturePulse {
          0%, 100% { opacity: 0.38; }
          50% { opacity: 0.95; }
        }

        .sophigo-card:hover .arrow-icon {
          transform: translateX(4px);
        }
        .sophigo-card:hover .card-cta-link {
          color: var(--klein-blue) !important;
        }
        
        @media (max-width: 1200px) {
          .grid-featured .grid-col-3 {
            grid-column: span 6 !important;
          }
        }
        @media (max-width: 600px) {
          .grid-featured .grid-col-3 {
            grid-column: span 12 !important;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .course-visual-svg *,
          .course-card-mini-icon * {
            animation-duration: 0.001ms !important;
            animation-iteration-count: 1 !important;
          }
        }
      `}</style>
    </section>
  );
}

function MiniIcon({ children }) {
  return (
    <svg className="card-icon course-card-mini-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      {children}
    </svg>
  );
}

function FullStackIcon() {
  return (
    <MiniIcon>
      <rect x="2.5" y="3" width="6" height="5" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="11.5" y="3" width="6" height="5" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="7" y="12" width="6" height="5" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <path d="M5.5 8v2.5H10V12M14.5 8v2.5H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </MiniIcon>
  );
}

function NeuralGrowthIcon() {
  return (
    <MiniIcon>
      <circle cx="4" cy="10" r="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="10" cy="5" r="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="10" cy="15" r="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="16" cy="10" r="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M5.7 8.8 8.4 6.2M5.7 11.2l2.7 2.6M11.7 6.2l2.6 2.6M11.7 13.8l2.6-2.6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </MiniIcon>
  );
}

function RobotAssemblyIcon() {
  return (
    <MiniIcon>
      <rect x="3" y="8" width="9" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="5" cy="15.5" r="1.2" fill="currentColor" />
      <circle cx="10" cy="15.5" r="1.2" fill="currentColor" />
      <path d="M11.5 9 14 6.5 16.5 7.8M14 6.5V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15.8 7.5 17.6 6.4M15.8 7.5l1.8 1.1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </MiniIcon>
  );
}

function CmfThinkingIcon() {
  return (
    <MiniIcon>
      <path d="M3 7.5 10 4l7 3.5-7 3.5-7-3.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M5 10.5 10 13l5-2.5M7 14l3 1.5 3-1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="10" cy="7.5" r="1.1" fill="currentColor" />
    </MiniIcon>
  );
}

function FabCourseVisual() {
  const flowPathA = 'M118 78 C138 52 148 48 166 54';
  const flowPathB = 'M234 78 C252 103 264 111 284 104';
  const flowPathC = 'M98 128 C148 156 238 156 304 128';

  return (
    <svg className="course-visual-svg" viewBox="0 0 400 180" fill="none" xmlns="http://www.w3.org/2000/svg" style={svgStyle} preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="fabGrad" x1="48" y1="38" x2="330" y2="138" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f8fbff" />
          <stop offset="0.48" stopColor="#7dd3fc" />
          <stop offset="1" stopColor="#2f7cff" />
        </linearGradient>
      </defs>
      <rect width="400" height="180" fill="#07090d" />
      <path d="M40 0v180M80 0v180M120 0v180M160 0v180M200 0v180M240 0v180M280 0v180M320 0v180M360 0v180M0 36h400M0 72h400M0 108h400M0 144h400" stroke="rgba(248,250,252,0.055)" />

      <g className="fab-module light-panel">
        <rect x="46" y="43" width="72" height="64" rx="10" fill="rgba(248,250,252,0.045)" stroke="rgba(248,250,252,0.72)" strokeWidth="1.5" />
        <path d="M60 66h30M60 80h44M60 94h23" stroke="#7dd3fc" strokeWidth="2" strokeLinecap="round" />
        <circle cx="104" cy="57" r="4" fill="#f8fbff" />
        <text x="60" y="126" fill="#f8fbff" fontSize="11" fontFamily="var(--font-mono)">CAD</text>
      </g>

      <g className="fab-module delay-1 light-panel">
        <rect x="166" y="36" width="70" height="76" rx="12" fill="rgba(47,124,255,0.11)" stroke="rgba(125,211,252,0.88)" strokeWidth="1.5" />
        <path d="M184 60h30M184 75h18M184 90h35" stroke="#f8fbff" strokeWidth="2" strokeLinecap="round" />
        <path d="M178 58 170 68l8 10M224 58l8 10-8 10" stroke="#7dd3fc" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        <text x="178" y="132" fill="#f8fbff" fontSize="11" fontFamily="var(--font-mono)">CODE</text>
      </g>

      <g className="fab-module delay-2 light-panel">
        <rect x="284" y="54" width="64" height="58" rx="10" fill="rgba(248,250,252,0.045)" stroke="rgba(248,250,252,0.74)" strokeWidth="1.5" />
        <rect x="300" y="70" width="32" height="26" rx="4" stroke="#7dd3fc" strokeWidth="1.6" fill="rgba(125,211,252,0.08)" />
        <path d="M300 62v8M312 62v8M324 62v8M300 96v8M312 96v8M324 96v8M292 76h8M292 90h8M332 76h8M332 90h8" stroke="#f8fbff" strokeWidth="1.3" strokeLinecap="round" />
        <g className="fab-gear">
          <circle cx="316" cy="83" r="8" stroke="#f8fbff" strokeWidth="1.2" strokeDasharray="3 3" />
          <circle cx="316" cy="83" r="2.4" fill="#7dd3fc" />
        </g>
        <text x="294" y="132" fill="#f8fbff" fontSize="11" fontFamily="var(--font-mono)">MCU</text>
      </g>

      <path className="flow-line" d={flowPathA} stroke="url(#fabGrad)" strokeWidth="2" strokeLinecap="round" />
      <path className="flow-line delay-1" d={flowPathB} stroke="url(#fabGrad)" strokeWidth="2" strokeLinecap="round" />
      <path className="flow-line delay-2" d={flowPathC} stroke="url(#fabGrad)" strokeWidth="2" strokeLinecap="round" />
      <circle className="fab-build-dot" r="4" fill="#f8fbff">
        <animateMotion dur="4.4s" repeatCount="indefinite" path={flowPathA} />
      </circle>
      <circle className="fab-build-dot" r="3.5" fill="#7dd3fc">
        <animateMotion dur="4.4s" begin="0.65s" repeatCount="indefinite" path={flowPathB} />
      </circle>
      <circle className="fab-build-dot" r="3.5" fill="#f8fbff">
        <animateMotion dur="4.4s" begin="1.1s" repeatCount="indefinite" path={flowPathC} />
      </circle>
    </svg>
  );
}

function AiBasicsVisual() {
  const input = [[72, 58], [72, 90], [72, 122]];
  const hiddenA = [[150, 44], [150, 75], [150, 106], [150, 136]];
  const hiddenB = [[235, 54], [235, 90], [235, 126]];
  const output = [[315, 72], [315, 108]];
  const links = [
    [input[0], hiddenA[0], ''], [input[0], hiddenA[1], 'delay-1'], [input[1], hiddenA[1], 'delay-2'],
    [input[1], hiddenA[2], 'delay-3'], [input[2], hiddenA[2], 'delay-1'], [input[2], hiddenA[3], 'delay-2'],
    [hiddenA[0], hiddenB[0], 'delay-2'], [hiddenA[1], hiddenB[0], 'delay-3'], [hiddenA[1], hiddenB[1], ''],
    [hiddenA[2], hiddenB[1], 'delay-1'], [hiddenA[2], hiddenB[2], 'delay-2'], [hiddenA[3], hiddenB[2], 'delay-3'],
    [hiddenB[0], output[0], 'delay-1'], [hiddenB[1], output[0], 'delay-2'], [hiddenB[1], output[1], 'delay-3'], [hiddenB[2], output[1], '']
  ];

  return (
    <svg className="course-visual-svg" viewBox="0 0 400 180" fill="none" xmlns="http://www.w3.org/2000/svg" style={svgStyle} preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="neuralGrad" x1="62" y1="42" x2="324" y2="126" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f8fbff" />
          <stop offset="0.5" stopColor="#7dd3fc" />
          <stop offset="1" stopColor="#2f7cff" />
        </linearGradient>
      </defs>
      <rect width="400" height="180" fill="#07090d" />
      <path d="M46 148h308" stroke="rgba(248,250,252,0.12)" strokeDasharray="4 8" />
      <text x="54" y="31" fill="rgba(248,250,252,0.78)" fontSize="10" fontFamily="var(--font-mono)">INPUT</text>
      <text x="133" y="31" fill="rgba(248,250,252,0.78)" fontSize="10" fontFamily="var(--font-mono)">LEARN</text>
      <text x="214" y="31" fill="rgba(248,250,252,0.78)" fontSize="10" fontFamily="var(--font-mono)">DEEP</text>
      <text x="294" y="31" fill="rgba(248,250,252,0.78)" fontSize="10" fontFamily="var(--font-mono)">OUTPUT</text>

      <g stroke="url(#neuralGrad)" strokeWidth="1.35" opacity="0.95">
        {links.map(([from, to, delay], idx) => (
          <line key={idx} className={`neural-link ${delay}`} x1={from[0]} y1={from[1]} x2={to[0]} y2={to[1]} />
        ))}
      </g>

      {[input, hiddenA, hiddenB, output].map((layer, layerIndex) => (
        <g key={layerIndex} className={`neural-layer layer-${layerIndex + 1}`}>
          {layer.map(([cx, cy], idx) => (
            <g key={`${cx}-${cy}`}>
              <circle cx={cx} cy={cy} r={layerIndex === 0 ? 5 : 6} fill="rgba(248,250,252,0.1)" stroke="rgba(248,250,252,0.82)" strokeWidth="1.4" />
              <circle className="neural-core" cx={cx} cy={cy} r="2.3" fill={idx % 2 ? '#7dd3fc' : '#f8fbff'} />
            </g>
          ))}
        </g>
      ))}
      <path d="M58 150 C118 166 242 166 322 145" stroke="rgba(125,211,252,0.34)" strokeWidth="1.2" />
    </svg>
  );
}

function MobileRobotVisual() {
  return (
    <svg className="course-visual-svg" viewBox="0 0 400 180" fill="none" xmlns="http://www.w3.org/2000/svg" style={svgStyle} preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="robotGrad" x1="120" y1="46" x2="298" y2="138" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f8fbff" />
          <stop offset="0.55" stopColor="#7dd3fc" />
          <stop offset="1" stopColor="#2f7cff" />
        </linearGradient>
      </defs>
      <rect width="400" height="180" fill="#07090d" />
      <ellipse cx="200" cy="140" rx="105" ry="16" fill="rgba(248,250,252,0.04)" />

      <g className="assembly-guide" stroke="rgba(248,250,252,0.54)" strokeWidth="1">
        <path d="M158 101 132 82M242 101 268 82M159 125 132 145M241 125 268 145M200 90v-31M224 85 270 55" />
      </g>

      <g className="robot-part robot-body light-panel">
        <rect x="154" y="88" width="92" height="46" rx="10" fill="rgba(248,250,252,0.08)" stroke="url(#robotGrad)" strokeWidth="2" />
        <path d="M171 111h58M182 99h36M184 123h32" stroke="rgba(248,250,252,0.66)" strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="200" cy="111" r="7" fill="#7dd3fc" />
      </g>

      <g className="robot-part robot-sensor light-panel">
        <rect x="184" y="57" width="32" height="20" rx="6" fill="rgba(248,250,252,0.07)" stroke="rgba(248,250,252,0.78)" strokeWidth="1.5" />
        <path d="M191 67h18" stroke="#7dd3fc" strokeWidth="1.8" strokeLinecap="round" />
      </g>

      <g className="robot-part robot-arm light-panel" stroke="rgba(248,250,252,0.9)" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M222 88 245 64 272 73" />
        <path d="M272 73 286 61M272 73l17 8" strokeWidth="4" />
        <circle cx="222" cy="88" r="8" fill="#7dd3fc" stroke="#f8fbff" strokeWidth="2" />
        <circle cx="245" cy="64" r="6" fill="#07090d" stroke="#7dd3fc" strokeWidth="2" />
      </g>

      <g className="robot-part wheel-fl light-panel">
        <rect x="132" y="84" width="24" height="18" rx="8" fill="rgba(248,250,252,0.12)" stroke="#f8fbff" strokeWidth="1.7" />
        <circle cx="144" cy="93" r="3" fill="#7dd3fc" />
      </g>
      <g className="robot-part wheel-fr light-panel">
        <rect x="244" y="84" width="24" height="18" rx="8" fill="rgba(248,250,252,0.12)" stroke="#f8fbff" strokeWidth="1.7" />
        <circle cx="256" cy="93" r="3" fill="#7dd3fc" />
      </g>
      <g className="robot-part wheel-rl light-panel">
        <rect x="132" y="122" width="24" height="18" rx="8" fill="rgba(248,250,252,0.12)" stroke="#f8fbff" strokeWidth="1.7" />
        <circle cx="144" cy="131" r="3" fill="#7dd3fc" />
      </g>
      <g className="robot-part wheel-rr light-panel">
        <rect x="244" y="122" width="24" height="18" rx="8" fill="rgba(248,250,252,0.12)" stroke="#f8fbff" strokeWidth="1.7" />
        <circle cx="256" cy="131" r="3" fill="#7dd3fc" />
      </g>

      <text x="55" y="52" fill="rgba(248,250,252,0.72)" fontSize="10" fontFamily="var(--font-mono)">ASSEMBLY</text>
      <text x="293" y="52" fill="rgba(125,211,252,0.9)" fontSize="10" fontFamily="var(--font-mono)">EXPLODED</text>
    </svg>
  );
}

function CmfApplicationsVisual() {
  return (
    <svg className="course-visual-svg" viewBox="0 0 400 180" fill="none" xmlns="http://www.w3.org/2000/svg" style={svgStyle} preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="cmfShellGrad" x1="128" y1="52" x2="280" y2="134" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f8fbff" />
          <stop offset="0.42" stopColor="#7dd3fc" />
          <stop offset="1" stopColor="#002fa7" />
        </linearGradient>
        <clipPath id="cmfShellClip">
          <path d="M126 76 C142 50 260 50 276 76 L258 128 C238 146 162 146 142 128 L126 76Z" />
        </clipPath>
      </defs>
      <rect width="400" height="180" fill="#07090d" />

      <g className="cmf-shell">
        <path d="M126 76 C142 50 260 50 276 76 L258 128 C238 146 162 146 142 128 L126 76Z" fill="rgba(248,250,252,0.07)" stroke="url(#cmfShellGrad)" strokeWidth="2" />
        <path d="M145 86 C164 70 237 70 256 86" stroke="rgba(248,250,252,0.48)" strokeWidth="1.4" />
        <rect className="cmf-light-sweep" x="110" y="36" width="34" height="116" rx="17" fill="rgba(248,250,252,0.45)" clipPath="url(#cmfShellClip)" transform="rotate(-18 127 94)" />
      </g>

      <g transform="translate(58 58)">
        <text x="0" y="-16" fill="rgba(248,250,252,0.76)" fontSize="10" fontFamily="var(--font-mono)">COLOR</text>
        <circle className="cmf-swatch" cx="8" cy="8" r="8" fill="#f8fbff" />
        <circle className="cmf-swatch delay-1" cx="34" cy="8" r="8" fill="#7dd3fc" />
        <circle className="cmf-swatch delay-2" cx="60" cy="8" r="8" fill="#002fa7" />
        <path d="M66 22 126 72" stroke="rgba(125,211,252,0.5)" strokeWidth="1.2" strokeDasharray="4 5" />
      </g>

      <g transform="translate(296 54)">
        <text x="0" y="-12" fill="rgba(248,250,252,0.76)" fontSize="10" fontFamily="var(--font-mono)">FINISH</text>
        <rect x="0" y="0" width="52" height="42" rx="8" fill="rgba(248,250,252,0.045)" stroke="rgba(248,250,252,0.72)" strokeWidth="1.3" />
        {[8, 18, 28, 38].map((x, index) => (
          <path key={x} d={`M${x} 8v26`} stroke="rgba(248,250,252,0.34)" strokeWidth="1" />
        ))}
        {[0, 1, 2, 3, 4].map((idx) => (
          <circle key={idx} className="cmf-texture-dot" cx={10 + idx * 8} cy={28 - (idx % 2) * 12} r="2" fill="#7dd3fc" />
        ))}
        <path d="M0 40 260 92" transform="translate(-254 -4)" stroke="rgba(125,211,252,0.42)" strokeWidth="1.2" strokeDasharray="4 5" />
      </g>

      <g transform="translate(134 136)" className="light-panel">
        <text x="-60" y="-2" fill="rgba(248,250,252,0.76)" fontSize="10" fontFamily="var(--font-mono)">MATERIAL</text>
        <path className="cmf-layer layer-3" d="M0 8 68 -12 136 8 68 28Z" fill="rgba(248,250,252,0.1)" stroke="#f8fbff" strokeWidth="1.2" />
        <path className="cmf-layer layer-2" d="M10 18 68 1 126 18 68 35Z" fill="rgba(125,211,252,0.16)" stroke="#7dd3fc" strokeWidth="1.2" />
        <path className="cmf-layer" d="M20 28 68 14 116 28 68 42Z" fill="rgba(0,47,167,0.22)" stroke="rgba(248,250,252,0.62)" strokeWidth="1.2" />
      </g>
    </svg>
  );
}

const svgStyle = {
  width: '100%',
  height: '100%',
  display: 'block'
};
