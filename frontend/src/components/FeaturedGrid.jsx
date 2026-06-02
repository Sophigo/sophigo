import React from 'react';
import { ArrowRight, Bot, Hammer, Palette } from 'lucide-react';

export default function FeaturedGrid({ lang = 'zh' }) {
  const t = {
    zh: {
      subtitle: "Featured Areas",
      title: "探索核心创新板块",
      desc: "Sophigo 围绕智能硬件原型构建完整的数字化生态，为 AI 时代的软硬件创造者量身打造。",
      cta: "浏览文档与案例",
      cards: [
        {
          title: '移动机器人 (Mobile Robots)',
          description: '掌握基于 ROS2 与双轮差速/麦克纳姆轮底盘的软硬件集成设计。提供 Sophicar 硬件级车体仿真及底盘运动学控制算法文档。',
          tag: 'Hardware & Control',
        },
        {
          title: 'Fab 课程 (Fab Courses)',
          description: '贯通数字化制造与快速原型工艺。从 3D 打印、激光切割到数控雕刻，用先进设备将你的 AI 奇思妙想具象为实体原型。',
          tag: 'Rapid Prototyping',
        },
        {
          title: 'CMF 规范 (Color, Material, Finish)',
          description: '探索高端工业设计的物理触觉美学。构建系统的色彩配方、复合材料配比与阳极氧化、喷砂等精细表面处理工艺规范。',
          tag: 'Industrial Aesthetics',
        }
      ]
    },
    en: {
      subtitle: "Featured Areas",
      title: "Explore Core Innovation Areas",
      desc: "Sophigo builds a complete digital ecosystem around intelligent hardware prototypes, custom-tailored for software and hardware creators in the AI R&D era.",
      cta: "Browse Docs & Cases",
      cards: [
        {
          title: 'Mobile Robots (AI & ROS2)',
          description: 'Master hardware-software integration based on ROS2 and dual-wheel differential/Mecanum chassis. Access Sophicar simulation and kinematics control algorithm documents.',
          tag: 'Hardware & Control',
        },
        {
          title: 'Fab Labs (Rapid Prototyping)',
          description: 'Bridge digital fabrication and rapid prototyping. Turn your AI-generated design concepts into physical reality using 3D printing, laser cutting, and CNC milling.',
          tag: 'Rapid Prototyping',
        },
        {
          title: 'CMF Standards (Colors & Materials)',
          description: 'Study industrial design aesthetics and surface finishes. Define precise standards for anodizing thickness, sandblasting grains, and environmental materials.',
          tag: 'Industrial Aesthetics',
        }
      ]
    }
  }[lang] || t.zh;

  const cardsData = [
    {
      title: t.cards[0].title,
      description: t.cards[0].description,
      tag: t.cards[0].tag,
      icon: <Bot size={20} className="card-icon" />,
      link: '#/courses/mobile-robot',
      // SVG graphic matching Mobile Robots
      svg: (
        <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" style={svgStyle}>
          <rect width="400" height="240" fill="#0B0B0C" />
          <circle cx="200" cy="120" r="80" stroke="#002FA7" strokeWidth="1.5" strokeDasharray="5 5" opacity="0.6" />
          {/* Robot chassis grid */}
          <rect x="130" y="80" width="140" height="80" rx="8" stroke="#ffffff" strokeWidth="2" opacity="0.8" />
          <line x1="130" y1="120" x2="270" y2="120" stroke="#002FA7" strokeWidth="1.5" />
          <circle cx="160" cy="80" r="16" fill="#002FA7" opacity="0.8" />
          <circle cx="240" cy="80" r="16" fill="#002FA7" opacity="0.8" />
          <circle cx="160" cy="160" r="16" fill="#002FA7" opacity="0.8" />
          <circle cx="240" cy="160" r="16" fill="#002FA7" opacity="0.8" />
          {/* Lidar/Sensor line scanner */}
          <line x1="200" y1="120" x2="310" y2="60" stroke="#002FA7" strokeWidth="2" strokeDasharray="3 3">
            <animate attributeName="opacity" values="0.2;1;0.2" dur="2s" repeatCount="indefinite" />
          </line>
          <circle cx="310" cy="60" r="6" fill="#ff453a" />
          {/* Vector points */}
          <circle cx="200" cy="120" r="4" fill="#ffffff" />
        </svg>
      )
    },
    {
      title: t.cards[1].title,
      description: t.cards[1].description,
      tag: t.cards[1].tag,
      icon: <Hammer size={20} className="card-icon" />,
      link: '/docs/courses/fab-course/',
      // SVG graphic matching Fab lab fabrication
      svg: (
        <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" style={svgStyle}>
          <rect width="400" height="240" fill="#0B0B0C" />
          {/* 3D printer bed grid */}
          <path d="M60 180 L200 220 L340 180 L200 140 Z" stroke="var(--border-color)" strokeWidth="1" fill="rgba(255,255,255,0.02)" />
          {/* Printer nozzle toolpath */}
          <path d="M120 170 L200 190 L280 175 L200 160 Z" stroke="#002FA7" strokeWidth="2" strokeDasharray="100" strokeDashoffset="0">
            <animate attributeName="strokeDashoffset" values="100;0" dur="4s" repeatCount="indefinite" />
          </path>
          {/* Nozzle assembly */}
          <line x1="200" y1="40" x2="200" y2="160" stroke="#ffffff" strokeWidth="1.5" opacity="0.5" />
          <path d="M185 140 L215 140 L200 160 Z" fill="#ffffff" opacity="0.9" />
          {/* Laser particle glows */}
          <circle cx="200" cy="160" r="8" fill="#002FA7" opacity="0.5">
            <animate attributeName="r" values="4;10;4" dur="1s" repeatCount="indefinite" />
          </circle>
        </svg>
      )
    },
    {
      title: t.cards[2].title,
      description: t.cards[2].description,
      tag: t.cards[2].tag,
      icon: <Palette size={20} className="card-icon" />,
      link: '/docs/courses/cmf/',
      // SVG graphic matching CMF design guides
      svg: (
        <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" style={svgStyle}>
          <rect width="400" height="240" fill="#0B0B0C" />
          {/* Abstract Material layer stacks */}
          <g transform="translate(0, 10)">
            <path d="M80 140 L200 180 L320 140 L200 100 Z" fill="#002FA7" fillOpacity="0.8" />
            <path d="M80 115 L200 155 L320 115 L200 75 Z" fill="#ffffff" fillOpacity="0.9" />
            <path d="M80 90 L200 130 L320 90 L200 50 Z" fill="rgba(255,255,255,0.15)" stroke="#ffffff" strokeWidth="1" />
          </g>
          {/* Dimension arrows */}
          <line x1="330" y1="60" x2="330" y2="190" stroke="#002FA7" strokeWidth="1" />
          <circle cx="330" cy="60" r="3" fill="#002FA7" />
          <circle cx="330" cy="190" r="3" fill="#002FA7" />
          <text x="340" y="130" fill="var(--text-muted)" fontSize="10" fontFamily="var(--font-mono)">T: 0.8mm</text>
        </svg>
      )
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

      <div className="grid-featured">
        {cardsData.map((card, idx) => (
          <div 
            key={idx} 
            className="grid-col-4 glassmorphism-card sophigo-card"
          >
            {/* SVG Media container */}
            <div className="sophigo-card-media">
              {card.svg}
              <span style={{
                position: 'absolute',
                top: '1rem',
                left: '1rem',
                backgroundColor: 'rgba(0, 0, 0, 0.65)',
                color: '#ffffff',
                backdropFilter: 'blur(8px)',
                fontSize: '0.75rem',
                fontWeight: 500,
                padding: '0.35rem 0.75rem',
                borderRadius: '20px',
                border: '1px solid rgba(255,255,255,0.1)',
                zIndex: 3
              }}>
                {card.tag}
              </span>
            </div>

            {/* Info contents */}
            <div className="sophigo-card-content">
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: 'var(--klein-blue)',
                marginBottom: '0.75rem'
              }}>
                {card.icon}
                <span style={{ fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {card.tag}
                </span>
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '0.75rem', lineHeight: '1.3' }}>
                {card.title}
              </h3>
              <p style={{
                color: 'var(--text-secondary)',
                fontSize: '0.875rem',
                lineHeight: '1.5',
                marginBottom: '1.5rem',
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
                  fontSize: '0.875rem',
                  transition: 'gap 0.2s',
                  marginTop: 'auto'
                }}
                className="card-cta-link"
              >
                {t.cta}
                <ArrowRight size={16} style={{ transition: 'transform 0.2s' }} className="arrow-icon" />
              </a>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .sophigo-card:hover .arrow-icon {
          transform: translateX(4px);
        }
        .sophigo-card:hover .card-cta-link {
          color: var(--klein-blue) !important;
        }
      `}</style>
    </section>
  );
}

const svgStyle = {
  width: '100%',
  height: '100%',
  display: 'block'
};
