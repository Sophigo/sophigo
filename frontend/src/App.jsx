import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import AntiGravityBackground from './components/AntiGravityBackground';
import FeaturedGrid from './components/FeaturedGrid';
import AuthModal from './components/AuthModal';
import MobileRobotCourse from './components/MobileRobotCourse';
import { Cpu, Terminal, Sparkles, MessageSquare, ArrowRight, ShieldCheck, Palette } from 'lucide-react';

const contentTranslations = {
  zh: {
    heroTag: "Sophigo Platform v1.0.0 Alpha",
    heroTitle: "AI 时代的生存与创新工具",
    heroDesc: "Sophigo 赋能工程师与创客，构建集硬件、算法与 CMF 极简美学于一体的智能产品开发与“新工科”数字化平台。",
    enterDocs: "进入文档系统",
    browseCourses: "浏览创新课程",
    aiSubtitle: "AI Powered Engineering",
    aiTitle: "AI 算法与物理实体原型的深度融合",
    aiDesc: "我们正处于硬件研发流程被 AI 重塑的十字路口。Sophigo 致力于将 LLM (大语言模型)、三维空间算法与数字制造系统无缝连接。",
    aiFeat1Title: "智能辅助设计 (Generative CAD)",
    aiFeat1Desc: "基于文本直接生成并优化硬件结构。",
    aiFeat2Title: "机器人控制链",
    aiFeat2Desc: "AI 驱动的底盘轨迹控制与三维仿真调试。",
    aiFeat3Title: "Hypothesis 文档协作",
    aiFeat3Desc: "划词批注、即时研讨，打造极客的知识共创社区。",
    cliComment: "// 初始化 Sophigo AI 助手",
    cliDeploy: "$ sophigo-agent deploy --model sophicar",
    cliSuccess1: "✔ 成功连接到本地 FastAPI 服务:8000",
    cliSuccess2: "✔ JWT 身份令牌验证成功. 权限: authenticated",
    cliSuccess3: "✔ Three.js 3D 粒子流渲染器状态: 60 FPS",
    cliLoadMsg: "\"已为您加载 移动机器人底盘（Sophicar）控制算法文档，可通过 Hypothesis 进行高亮批注。\"",
    toolsSubtitle: "Developer Tools",
    toolsTitle: "社区辅助设计工具箱",
    toolsDesc: "精简实用的 Web 工具，加速您的快速原型验证与 CMF 设计落地。",
    tool1Title: "CMF 配色卡生成器",
    tool1Desc: "快速预览并生成符合标准阳极氧化、喷砂表面处理工艺的 CMF 工业色卡代码。",
    tool2Title: "底盘运动学模拟器",
    tool2Desc: "输入差速/麦轮参数，即时模拟底盘在不同控制信号下的二维移动轨迹。",
    tool3Title: "G-Code 参数校准工具",
    tool3Desc: "针对主流 3D 打印与激光切割机，校验及优化导出的 G-Code 电机进给速度。",
    aboutTitle: "安全可靠的无缝数据平台",
    aboutDesc: "我们充分尊重开发者与合作伙伴的数据隐私。用户鉴权采用本地 JWT 加密存储与后端会话校验机制，不依赖任何三方明文通道，完美适配国内数据合规政策，为您提供闪电般快速的响应式访问体验。",
    footerCopy: "© 2026 Sophigo Platform. Built for the next-generation engineers.",
    footerDocs: "开发文档",
    footerCourses: "课程分类",
    footerTools: "工具箱",
    aiSearchLabel: "AIGC 智能搜索助你开发产品",
    aiSearchPlaceholder: "输入你想了解的移动底盘控制、CMF 工艺、3D 打印参数...",
    aiSearchBtn: "AI 搜索",
    aiSearchLoading: "AI 正在分析并生成解答...",
    aiSearchReset: "清空",
  },
  en: {
    heroTag: "Sophigo Platform v1.0.0 Alpha",
    heroTitle: "Survival & Innovation Tools in the AI Era",
    heroDesc: "Sophigo empowers engineers and makers, building an intelligent product development and 'New Engineering' digital platform that integrates hardware, algorithms, and CMF minimalist aesthetics.",
    enterDocs: "Enter Docs System",
    browseCourses: "Browse Courses",
    aiSubtitle: "AI Powered Engineering",
    aiTitle: "Deep Integration of AI Algorithms and Physical Prototypes",
    aiDesc: "We are at the crossroads where hardware R&D processes are being reshaped by AI. Sophigo is dedicated to seamlessly connecting LLMs, 3D spatial algorithms, and digital manufacturing systems.",
    aiFeat1Title: "Generative CAD",
    aiFeat1Desc: "Directly generate and optimize hardware structures from text descriptions.",
    aiFeat2Title: "Robot Control Chain",
    aiFeat2Desc: "AI-driven chassis trajectory control and 3D simulation debugging.",
    aiFeat3Title: "Hypothesis Collaboration",
    aiFeat3Desc: "Highlight annotation and instant discussion, building a knowledge co-creation community.",
    cliComment: "// Initialize Sophigo AI Assistant",
    cliDeploy: "$ sophigo-agent deploy --model sophicar",
    cliSuccess1: "✔ Successfully connected to FastAPI Localhost:8000",
    cliSuccess2: "✔ JWT token verified. Role: authenticated",
    cliSuccess3: "✔ Three.js 3D Grid particles renderer status: 60 FPS",
    cliLoadMsg: "\"Loaded mobile robot chassis (Sophicar) control algorithm docs, highlight annotation available via Hypothesis.\"",
    toolsSubtitle: "Developer Tools",
    toolsTitle: "Community Design Toolbox",
    toolsDesc: "Clean and practical Web tools to accelerate your rapid prototype verification and CMF design landing.",
    tool1Title: "CMF Color Card Generator",
    tool1Desc: "Quickly preview and generate CMF industrial color codes matching standard anodizing and sandblasting surface treatments.",
    tool2Title: "Chassis Kinematics Simulator",
    tool2Desc: "Input differential/mecanum wheel specs to simulate 2D chassis movement paths under different control signals.",
    tool3Title: "G-Code Calibration Tool",
    tool3Desc: "Calibrate and optimize exported G-Code feed rates for mainstream 3D printers and laser cutters.",
    aboutTitle: "Secure & Reliable Data Platform",
    aboutDesc: "We fully respect the data privacy of developers and partners. User authentication uses local JWT encrypted storage and backend session verification, without relying on any plaintext third-party channels, perfectly adapting to data compliance policies, offering a lightning-fast responsive access experience.",
    footerCopy: "© 2026 Sophigo Platform. Built for the next-generation engineers.",
    footerDocs: "Docs",
    footerCourses: "Courses",
    footerTools: "Tools",
    aiSearchLabel: "AIGC Intelligent Search Assistant",
    aiSearchPlaceholder: "Ask about chassis kinematics, CMF anodizing thickness, 3D printing parameters...",
    aiSearchBtn: "AI Search",
    aiSearchLoading: "AI is analyzing and generating response...",
    aiSearchReset: "Clear",
  }
};

export default function App() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [theme, setTheme] = useState('dark');
  const [lang, setLang] = useState('zh');
  const [aiQuery, setAiQuery] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [aiLoading, setAiLoading] = useState(false);
  const [aiError, setAiError] = useState('');
  const [currentRoute, setCurrentRoute] = useState(() => {
    const hash = window.location.hash;
    if (hash === '#/courses/mobile-robot') return 'mobile-robot-course';
    return 'home';
  });

  // Listen for hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#/courses/mobile-robot') {
        setCurrentRoute('mobile-robot-course');
        window.scrollTo(0, 0);
      } else {
        setCurrentRoute('home');
        window.scrollTo(0, 0);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Load configuration on mount
  useEffect(() => {
    // 1. Theme setup
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);

    // 2. Language setup
    const savedLang = localStorage.getItem('lang') || 'zh';
    setLang(savedLang);

    // 3. Token setup
    const token = localStorage.getItem('token');
    if (token) {
      setUserToken(token);
    }

    // 4. Handle external login redirect triggers from docs/Hypothesis
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

  const handleToggleLang = () => {
    const nextLang = lang === 'zh' ? 'en' : 'zh';
    setLang(nextLang);
    localStorage.setItem('lang', nextLang);
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

  const handleAISearchSubmit = async (e) => {
    e.preventDefault();
    if (!aiQuery.trim()) return;

    setAiLoading(true);
    setAiResponse('');
    setAiError('');

    try {
      const response = await fetch('https://api.deepseek.com/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer sk-0f161a2d08ef49c0beaaf54952054990'
        },
        body: JSON.stringify({
          model: 'deepseek-chat',
          messages: [
            {
              role: 'system',
              content: `You are Sophigo AI Assistant, a helpful assistant for Sophigo - a next-generation engineering education and digital prototyping platform. 
              Sophigo integrates:
              - Mobile Robots (ROS2, motion control, physical vehicle simulation)
              - Fab digital manufacturing (3D printing, laser cutting, CNC milling)
              - CMF industrial aesthetics (anodizing thickness 8μm-12μm, sandblasting #120/#180, Klein Blue #002FA7)
              Answer the user's question in a professional, concise, and helpful tone in the language they asked (${lang === 'zh' ? 'Chinese' : 'English'}).`
            },
            { role: 'user', content: aiQuery }
          ],
          stream: true
        })
      });

      if (!response.ok) {
        throw new Error('Failed to fetch from DeepSeek API');
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder('utf-8');
      
      setAiLoading(false); // turn off loading spinner once stream starts

      let buffer = '';
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        
        // Save the last partial line back to buffer
        buffer = lines.pop() || '';

        for (const line of lines) {
          const cleanedLine = line.trim();
          if (cleanedLine.startsWith('data: ')) {
            const dataStr = cleanedLine.slice(6).trim();
            if (dataStr === '[DONE]') break;
            try {
              const parsed = JSON.parse(dataStr);
              const deltaContent = parsed.choices[0].delta.content || '';
              setAiResponse((prev) => prev + deltaContent);
            } catch (e) {
              // ignore parse errors for partial JSON chunks
            }
          }
        }
      }
    } catch (err) {
      console.error(err);
      setAiError(lang === 'zh' ? 'AI 搜索失败，请检查网络或稍后再试。' : 'AI search failed. Please check connection or try again.');
      setAiLoading(false);
    }
  };

  const t = contentTranslations[lang] || contentTranslations.zh;

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
        lang={lang}
        onToggleLang={handleToggleLang}
      />

      {/* Main Content */}
      <main style={{ paddingTop: '64px' }}>
        {currentRoute === 'mobile-robot-course' ? (
          <MobileRobotCourse lang={lang} onBack={() => { window.location.hash = '#/'; }} />
        ) : (
          <>
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
              {t.heroTag}
            </span>

            <h1 className="title-hero text-gradient">
              {t.heroTitle}
            </h1>
            
            <p className="description">
              {t.heroDesc}
            </p>

            <div style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              alignItems: 'center',
              flexWrap: 'wrap'
            }}>
              <a 
                href="/docs/" 
                className="btn-cta"
                style={{ display: 'inline-flex', gap: '0.5rem', alignItems: 'center' }}
              >
                {t.enterDocs}
                <ArrowRight size={18} />
              </a>
              <a 
                href="#showcase" 
                className="btn-secondary"
              >
                {t.browseCourses}
              </a>
            </div>

            {/* AIGC Search Box */}
            <div style={{
              maxWidth: '640px',
              margin: '3rem auto 0',
              padding: '1.5rem',
              borderRadius: '20px',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              backdropFilter: 'blur(12px)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.05)',
              textAlign: 'left'
            }}>
              <label style={{
                display: 'block',
                fontSize: '0.85rem',
                fontWeight: 600,
                color: 'var(--klein-blue)',
                marginBottom: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                ✨ {t.aiSearchLabel}
              </label>
              <form onSubmit={handleAISearchSubmit} style={{ display: 'flex', gap: '0.75rem' }}>
                <input 
                  type="text" 
                  value={aiQuery}
                  onChange={(e) => setAiQuery(e.target.value)}
                  placeholder={t.aiSearchPlaceholder}
                  style={{
                    flex: 1,
                    padding: '0.75rem 1.25rem',
                    borderRadius: '12px',
                    border: '1px solid var(--border-color)',
                    background: 'var(--bg-secondary)',
                    color: 'var(--text-primary)',
                    fontSize: '0.9rem',
                    outline: 'none',
                    transition: 'border-color 0.2s',
                    fontFamily: 'var(--font-sans)'
                  }}
                />
                <button 
                  type="submit" 
                  disabled={aiLoading}
                  style={{
                    padding: '0.75rem 1.5rem',
                    borderRadius: '12px',
                    backgroundColor: 'var(--klein-blue)',
                    color: '#ffffff',
                    border: 'none',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    cursor: aiLoading ? 'not-allowed' : 'pointer',
                    transition: 'all 0.2s',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    boxShadow: '0 4px 12px var(--klein-blue-glow)'
                  }}
                >
                  {t.aiSearchBtn}
                </button>
              </form>

              {/* Response output container */}
              {(aiLoading || aiResponse || aiError) && (
                <div style={{
                  marginTop: '1.25rem',
                  padding: '1.25rem',
                  borderRadius: '12px',
                  background: 'rgba(0,0,0,0.03)',
                  border: '1px dashed var(--border-color)',
                  fontSize: '0.9rem',
                  lineHeight: '1.6',
                  color: 'var(--text-primary)',
                  maxHeight: '300px',
                  overflowY: 'auto',
                  fontFamily: 'var(--font-sans)'
                }}>
                  {aiLoading && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                      <div className="search-spinner" />
                      <span>{t.aiSearchLoading}</span>
                    </div>
                  )}
                  {aiError && (
                    <div style={{ color: '#ff453a' }}>
                      {aiError}
                    </div>
                  )}
                  {aiResponse && (
                    <div style={{ whiteSpace: 'pre-wrap' }}>
                      {aiResponse}
                    </div>
                  )}
                  
                  {aiResponse && !aiLoading && (
                    <button 
                      onClick={() => { setAiResponse(''); setAiQuery(''); }}
                      style={{
                        marginTop: '0.75rem',
                        padding: '0.25rem 0.75rem',
                        fontSize: '0.75rem',
                        borderRadius: '6px',
                        border: '1px solid var(--border-color)',
                        background: 'var(--bg-secondary)',
                        color: 'var(--text-secondary)',
                        cursor: 'pointer'
                      }}
                    >
                      {t.aiSearchReset}
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Featured Showcase Cards */}
        <FeaturedGrid lang={lang} />

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
                  {t.aiSubtitle}
                </span>
                <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1.5rem' }}>
                  {t.aiTitle}
                </h2>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.5rem', fontSize: '0.975rem' }}>
                  {t.aiDesc}
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
                    <strong>{t.aiFeat1Title}:</strong> {t.aiFeat1Desc}
                  </li>
                  <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    <Terminal size={16} style={{ color: 'var(--klein-blue)' }} />
                    <strong>{t.aiFeat2Title}:</strong> {t.aiFeat2Desc}
                  </li>
                  <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    <MessageSquare size={16} style={{ color: 'var(--klein-blue)' }} />
                    <strong>{t.aiFeat3Title}:</strong> {t.aiFeat3Desc}
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
                    <p style={{ color: 'var(--klein-blue)', marginBottom: '0.5rem' }}>{t.cliComment}</p>
                    <p style={{ marginBottom: '0.5rem' }}>{t.cliDeploy}</p>
                    <p style={{ color: '#07c160', marginBottom: '0.5rem' }}>{t.cliSuccess1}</p>
                    <p style={{ color: '#07c160', marginBottom: '0.5rem' }}>{t.cliSuccess2}</p>
                    <p style={{ color: '#07c160', marginBottom: '1rem' }}>{t.cliSuccess3}</p>
                    <p style={{ borderLeft: '3px solid var(--klein-blue)', paddingLeft: '0.75rem', marginBlock: '1rem', fontStyle: 'italic' }}>
                      {t.cliLoadMsg}
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
                {t.toolsSubtitle}
              </span>
              <h2 style={{ fontSize: '2.25rem', fontWeight: 700, marginBottom: '1rem' }}>
                {t.toolsTitle}
              </h2>
              <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '1rem' }}>
                {t.toolsDesc}
              </p>
            </div>

            <div className="grid-featured">
              <div className="grid-col-4 glassmorphism-card" style={{ padding: '2rem', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
                <Palette size={24} style={{ color: 'var(--klein-blue)', marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.75rem' }}>{t.tool1Title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: '1.5' }}>
                  {t.tool1Desc}
                </p>
              </div>

              <div className="grid-col-4 glassmorphism-card" style={{ padding: '2rem', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
                <Cpu size={24} style={{ color: 'var(--klein-blue)', marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.75rem' }}>{t.tool2Title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: '1.5' }}>
                  {t.tool2Desc}
                </p>
              </div>

              <div className="grid-col-4 glassmorphism-card" style={{ padding: '2rem', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
                <Terminal size={24} style={{ color: 'var(--klein-blue)', marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.75rem' }}>{t.tool3Title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: '1.5' }}>
                  {t.tool3Desc}
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
                {t.aboutTitle}
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '2rem', fontSize: '1rem' }}>
                {t.aboutDesc}
              </p>
            </div>
          </div>
        </section>
        </>
        )}
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
          <p>{t.footerCopy}</p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="/docs/" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>{t.footerDocs}</a>
            <a href="#showcase" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>{t.footerCourses}</a>
            <a href="#tools" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>{t.footerTools}</a>
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
        .search-spinner {
          width: 16px;
          height: 16px;
          border: 2px solid var(--border-color);
          border-top-color: var(--klein-blue);
          border-radius: 50%;
          animation: spin 0.8s infinite linear;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
