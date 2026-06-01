import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import AntiGravityBackground from './components/AntiGravityBackground';
import FeaturedGrid from './components/FeaturedGrid';
import AuthModal from './components/AuthModal';
import { Cpu, Terminal, Sparkles, MessageSquare, ArrowRight, ShieldCheck, Palette } from 'lucide-react';

export default function App() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [theme, setTheme] = useState('dark');

  // Load configuration on mount
  useEffect(() => {
    // 1. Theme setup
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);

    // 2. Token setup
    const token = localStorage.getItem('token');
    if (token) {
      setUserToken(token);
    }

    // 3. Handle external login redirect triggers from docs/Hypothesis
    const params = new URLSearchParams(window.location.search);
    if (params.get('login') === '1') {
      setIsAuthModalOpen(true);
    }
  }, []);

  const handleToggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

  const handleLoginSuccess = (token) => {
    setUserToken(token);
    
    // If we have a redirect url parameter, send user back to it
    const params = new URLSearchParams(window.location.search);
    const redirectUrl = params.get('redirect');
    if (redirectUrl) {
      setTimeout(() => {
        window.location.href = redirectUrl;
      }, 1200);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUserToken(null);
  };

  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
      {/* 3D Background */}
      <AntiGravityBackground />

      {/* Glassmorphic Navbar */}
      <Navbar 
        onOpenAuthModal={() => setIsAuthModalOpen(true)}
        userToken={userToken}
        onLogout={handleLogout}
        theme={theme}
        onToggleTheme={handleToggleTheme}
      />

      {/* Main Content */}
      <main style={{ paddingTop: '64px' }}>
        {/* Hero Section */}
        <section style={{
          paddingBlock: '8rem 6rem',
          textAlign: 'center',
          position: 'relative'
        }}>
          <div className="container-custom">
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: 'var(--klein-blue-glow)',
              color: 'var(--text-primary)',
              border: '1px solid var(--border-color)',
              fontSize: '0.8rem',
              fontWeight: 500,
              padding: '0.4rem 1rem',
              borderRadius: '9999px',
              marginBottom: '2rem',
              backdropFilter: 'blur(8px)'
            }}>
              <Sparkles size={14} style={{ color: 'var(--klein-blue)' }} />
              ProFabX Platform v1.0.0 Alpha
            </span>

            <h1 className="title-hero text-gradient">
              AI 时代的生存与创新工具
            </h1>
            
            <p className="description">
              ProFabX 赋能工程师与创客，构建集硬件、算法与 CMF 极简美学于一体的智能产品开发与“新工科”数字化平台。
            </p>

            <div style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              alignItems: 'center',
              flexWrap: 'wrap'
            }}>
              <a 
                href="/docs/index.html" 
                className="btn-cta"
                style={{ display: 'inline-flex', gap: '0.5rem', alignItems: 'center' }}
              >
                进入文档系统
                <ArrowRight size={18} />
              </a>
              <a 
                href="#showcase" 
                className="btn-secondary"
              >
                浏览创新课程
              </a>
            </div>
          </div>
        </section>

        {/* Featured Showcase Cards */}
        <FeaturedGrid />

        {/* AI Innovation & Application Section */}
        <section id="ai-innovation" style={{
          paddingBlock: '6rem',
          backgroundColor: 'var(--bg-secondary)',
          borderBlock: '1px solid var(--border-color)',
          transition: 'background-color 0.3s ease, border-color 0.3s ease'
        }}>
          <div className="container-custom">
            <div className="grid-featured" style={{ alignItems: 'center' }}>
              <div className="grid-col-6">
                <span style={{
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: 'var(--klein-blue)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: '1rem'
                }}>
                  AI Powered Engineering
                </span>
                <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1.5rem' }}>
                  AI 算法与物理实体原型的深度融合
                </h2>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.5rem', fontSize: '0.975rem' }}>
                  我们正处于硬件研发流程被 AI 重塑的十字路口。ProFabX 致力于将 LLM (大语言模型)、三维空间算法与数字制造系统无缝连接。
                </p>
                <ul style={{
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  color: 'var(--text-secondary)',
                  fontSize: '0.9rem'
                }}>
                  <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    <Cpu size={16} style={{ color: 'var(--klein-blue)' }} />
                    <strong>智能辅助设计 (Generative CAD):</strong> 基于文本直接生成并优化硬件结构。
                  </li>
                  <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    <Terminal size={16} style={{ color: 'var(--klein-blue)' }} />
                    <strong>机器人控制链:</strong> AI 驱动的底盘轨迹控制与三维仿真调试。
                  </li>
                  <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    <MessageSquare size={16} style={{ color: 'var(--klein-blue)' }} />
                    <strong>Hypothesis 文档协作:</strong> 划词批注、即时研讨，打造极客的知识共创社区。
                  </li>
                </ul>
              </div>
              
              {/* Graphic container */}
              <div className="grid-col-6" style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="glassmorphism-card" style={{
                  width: '100%',
                  maxWidth: '480px',
                  borderRadius: '20px',
                  padding: '2.5rem',
                  border: '1px solid var(--border-color)',
                  boxShadow: '0 15px 30px rgba(0,0,0,0.05)',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#ff453a' }}></div>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#ffcc00' }}></div>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#07c160' }}></div>
                  </div>
                  
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                    <p style={{ color: 'var(--klein-blue)', marginBottom: '0.5rem' }}>// Initialize ProFabX AI Assistant</p>
                    <p style={{ marginBottom: '0.5rem' }}>$ profabx-agent deploy --model sophicar</p>
                    <p style={{ color: '#07c160', marginBottom: '0.5rem' }}>✔ Successfully connected to FastAPI Localhost:8000</p>
                    <p style={{ color: '#07c160', marginBottom: '0.5rem' }}>✔ JWT token verified. Role: authenticated</p>
                    <p style={{ color: '#07c160', marginBottom: '1rem' }}>✔ Three.js 3D Grid particles renderer status: 60 FPS</p>
                    <p style={{ borderLeft: '3px solid var(--klein-blue)', paddingLeft: '0.75rem', marginBlock: '1rem', fontStyle: 'italic' }}>
                      "已为您加载 移动机器人底盘（Sophicar）控制算法文档，可通过 Hypothesis 进行高亮批注。"
                    </p>
                    <div style={{
                      display: 'inline-block',
                      width: '6px',
                      height: '14px',
                      backgroundColor: 'var(--text-primary)',
                      animation: 'blink 1s infinite'
                    }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Community Tools Section */}
        <section id="tools" style={{ paddingBlock: '6rem' }}>
          <div className="container-custom">
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <span style={{
                fontSize: '0.85rem',
                fontWeight: 600,
                color: 'var(--klein-blue)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '0.75rem'
              }}>
                Developer Tools
              </span>
              <h2 style={{ fontSize: '2.25rem', fontWeight: 700, marginBottom: '1rem' }}>
                社区辅助设计工具箱
              </h2>
              <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '1rem' }}>
                精简实用的 Web 工具，加速您的快速原型验证与 CMF 设计落地。
              </p>
            </div>

            <div className="grid-featured">
              <div className="grid-col-4 glassmorphism-card" style={{ padding: '2rem', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
                <Palette size={24} style={{ color: 'var(--klein-blue)', marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.75rem' }}>CMF 配色卡生成器</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: '1.5' }}>
                  快速预览并生成符合标准阳极氧化、喷砂表面处理工艺的 CMF 工业色卡代码。
                </p>
              </div>

              <div className="grid-col-4 glassmorphism-card" style={{ padding: '2rem', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
                <Cpu size={24} style={{ color: 'var(--klein-blue)', marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.75rem' }}>底盘运动学模拟器</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: '1.5' }}>
                  输入差速/麦轮参数，即时计算并模拟底盘在不同控制信号下的二维移动轨迹。
                </p>
              </div>

              <div className="grid-col-4 glassmorphism-card" style={{ padding: '2rem', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
                <Terminal size={24} style={{ color: 'var(--klein-blue)', marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.75rem' }}>G-Code 参数校准工具</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: '1.5' }}>
                  针对主流 3D 打印与激光切割机，校验及优化导出的 G-Code 电机进给速度。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" style={{
          paddingBlock: '6rem',
          borderTop: '1px solid var(--border-color)'
        }}>
          <div className="container-custom">
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              <ShieldCheck size={40} style={{ color: 'var(--klein-blue)', marginBottom: '1.5rem' }} />
              <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1.5rem' }}>
                安全可靠的无缝数据平台
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '2rem', fontSize: '1rem' }}>
                我们充分尊重开发者与合作伙伴的数据隐私。用户鉴权采用本地 JWT 加密存储与后端会话校验机制，不依赖任何三方明文通道，完美适配国内数据合规政策，为您提供闪电般快速的响应式访问体验。
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer style={{
        borderTop: '1px solid var(--border-color)',
        paddingBlock: '3rem',
        backgroundColor: 'var(--bg-secondary)',
        color: 'var(--text-secondary)',
        fontSize: '0.8rem',
        transition: 'background-color 0.3s ease, border-color 0.3s ease'
      }}>
        <div className="container-custom" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1.5rem'
        }}>
          <p>© 2026 ProFabX Platform. Built for the next-generation engineers.</p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="/docs/index.html" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>开发文档</a>
            <a href="#showcase" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>课程分类</a>
            <a href="#tools" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>工具箱</a>
          </div>
        </div>
      </footer>

      {/* Auth Modal Popup */}
      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}
