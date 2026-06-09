import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import AntiGravityBackground from './components/AntiGravityBackground';
import FeaturedGrid from './components/FeaturedGrid';
import AuthModal from './components/AuthModal';
import MobileRobotCourse from './components/MobileRobotCourse';
import FabCourse from './components/FabCourse';
import AiBasics from './components/AiBasics';
import Cmf from './components/Cmf';
import ProfileDashboard from './components/ProfileDashboard';
import JoinUs from './components/JoinUs';
import { supabase } from './lib/supabaseClient';
import { Cpu, Terminal, Sparkles, ArrowRight } from 'lucide-react';

const contentTranslations = {
  zh: {
    heroTitle: "AI时代的工程创新方法",
    heroDesc: "以产品经理思维定义真实需求，以系统决策驱动敏捷造物",
    aiSubtitle: "AI Native Engineering Paradigm",
    aiTitle: "AI 算法与物理实体原型的深度融合",
    aiDesc: "在 AI Native 时代，硬件工程的设计与制造边界被彻底重构。我们跳过传统的桌面 GUI 绘图，采用以代码定义几何设计 DNA、通过物理沙箱智能体闭环仿真解算关节限制、最终一键编译生成 G-code 进给路径直达数字化打印的敏捷流程。",
    aiFeat1Title: "物理计算设计 (Computational Design)",
    aiFeat1Desc: "使用算法编写几何 DNA，高精度有符号距离场（SDF）体素计算解算极高物理密度的多孔格栅和复杂换热流道。",
    aiFeat2Title: "智能体沙箱闭环 (Agentic Simulation)",
    aiFeat2Desc: "大模型智能体自主编写 Python 参数化代码，在受限仿真沙箱 Harness 内迭代解决几何重叠与机械关节限制。",
    aiFeat3Title: "数字化制造直通 (Digital Fabrication)",
    aiFeat3Desc: "算法模型一键编译为 URDF 机器人描述数据、高精度的 STL 物理网络与数字制造 G-Code 切片文件。",
    cliComment: "// AI Native 工程管线初始化",
    cliDeploy: "$ sophigo compile --design parametric_vehicle --target gcode",
    cliSuccess1: "✔ SDF 几何内核初始化成功. 渲染面片分辨率: 0.1mm",
    cliSuccess2: "✔ 物理沙箱干涉校验完成. 铰链关节自由度 (DoF) = 6",
    cliSuccess3: "✔ 目标 URDF 物理参数及三维切片路径编译成功 (100%)",
    cliLoadMsg: "\"已完成参数化底盘运动学控制算法校验，成功输出 3D 打印 G-Code 切片。\"",
    toolsSubtitle: "Developer Tools",
    toolsTitle: "社区辅助设计工具箱",
    toolsDesc: "精简实用的 Web 工具，加速您的快速原型验证。",
    footerCopy: "© 2026 SophiGo Platform. Built for the next-generation engineers.",
    aiSearchBtn: "AI 搜索",
    aiSearchLoading: "AI 正在分析并生成解答...",
    aiSearchReset: "清空",
  },
  en: {
    heroTitle: "Engineering Innovation in the AI Era",
    heroDesc: "Defining real needs with product manager thinking, driving agile creation with systematic decision-making.",
    aiSubtitle: "AI Native Engineering Paradigm",
    aiTitle: "Integration of AI Algorithms and Physical Prototypes",
    aiDesc: "In the AI Native era, the boundary of hardware engineering is fundamentally reshaped. We bypass traditional desktop GUI drawing, defining geometric DNA directly through code, resolving joint limits via simulation sandboxes, and compiling paths direct to manufacturing.",
    aiFeat1Title: "Physical Computational Design",
    aiFeat1Desc: "Code geometric DNA directly using code, solving complex porous lattices and thermal pre-coolers with SDF voxel kernels.",
    aiFeat2Title: "Agentic Simulation Sandbox",
    aiFeat2Desc: "LLM agents program parametric script assemblies, iteratively resolving collisions and kinematics limits inside physics loops.",
    aiFeat3Title: "Digital Fabrication Direct",
    aiFeat3Desc: "Compile algorithms directly into robot URDF specifications, physical meshes, and G-Code motor controller files.",
    cliComment: "// Initialize AI Native Engineering Pipeline",
    cliDeploy: "$ sophigo compile --design parametric_vehicle --target gcode",
    cliSuccess1: "✔ SDF geometry kernel initialized. Mesh resolution: 0.1mm",
    cliSuccess2: "✔ Physical interference checks passed. Joint DoF = 6",
    cliSuccess3: "✔ Target URDF parameters and 3D paths compiled (100%)",
    cliLoadMsg: "\"Kinematics control algorithm validated via agentic loops. Exported G-Code slice path successfully.\"",
    toolsSubtitle: "Developer Tools",
    toolsTitle: "Community Design Toolbox",
    toolsDesc: "Clean and practical Web tools to accelerate your rapid prototype verification.",
    footerCopy: "© 2026 SophiGo Platform. Built for the next-generation engineers.",
    aiSearchBtn: "AI Search",
    aiSearchLoading: "AI is analyzing and generating response...",
    aiSearchReset: "Clear",
  }
};

export default function App() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [userSession, setUserSession] = useState(null);
  const [theme, setTheme] = useState('dark');
  const [lang, setLang] = useState('zh');
  const [aiQuery, setAiQuery] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [aiLoading, setAiLoading] = useState(false);
  const [aiError, setAiError] = useState('');
  const [typedTitle, setTypedTitle] = useState('');
  const [currentRoute, setCurrentRoute] = useState(() => {
    const hash = window.location.hash;
    if (hash === '#/courses/mobile-robot') return 'mobile-robot-course';
    if (hash === '#/courses/fab-course') return 'fab-course';
    if (hash === '#/courses/ai-basics') return 'ai-basics';
    if (hash === '#/courses/cmf') return 'cmf';
    if (hash === '#/profile') return 'profile';
    if (hash === '#/join-us') return 'join-us';
    return 'home';
  });

  // Listen for hash changes for routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#/courses/mobile-robot') {
        setCurrentRoute('mobile-robot-course');
        window.scrollTo(0, 0);
      } else if (hash === '#/courses/fab-course') {
        setCurrentRoute('fab-course');
        window.scrollTo(0, 0);
      } else if (hash === '#/courses/ai-basics') {
        setCurrentRoute('ai-basics');
        window.scrollTo(0, 0);
      } else if (hash === '#/courses/cmf') {
        setCurrentRoute('cmf');
        window.scrollTo(0, 0);
      } else if (hash === '#/profile') {
        setCurrentRoute('profile');
        window.scrollTo(0, 0);
      } else if (hash === '#/join-us') {
        setCurrentRoute('join-us');
        window.scrollTo(0, 0);
      } else {
        setCurrentRoute('home');
        window.scrollTo(0, 0);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Load configuration and listen to Supabase Auth state changes
  useEffect(() => {
    // 1. Theme setup
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);

    // 2. Language setup
    const savedLang = localStorage.getItem('lang') || 'zh';
    setLang(savedLang);

    // 3. Supabase session setup
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUserSession(session);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUserSession(session);
    });

    // 4. Handle external login redirect triggers from docs/Hypothesis
    const params = new URLSearchParams(window.location.search);
    if (params.get('login') === '1') {
      setIsAuthModalOpen(true);
    }

    return () => {
      subscription.unsubscribe();
    };
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

  const handleLoginSuccess = (session) => {
    setUserSession(session);
    
    // If we have a redirect url parameter, send user back to it
    const params = new URLSearchParams(window.location.search);
    const redirectUrl = params.get('redirect');
    if (redirectUrl) {
      setTimeout(() => {
        window.location.href = redirectUrl;
      }, 1200);
    } else {
      // Redirect to profile dashboard on successful login
      window.location.hash = '#/profile';
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUserSession(null);
    setCurrentRoute('home');
    window.location.hash = '#/';
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
          model: 'deepseek-v4-pro',
          messages: [
            {
              role: 'system',
              content: `You are SophiGo AI Assistant, a helpful assistant for SophiGo - a next-generation engineering education and digital prototyping platform. 
              SophiGo integrates:
              - Mobile Robots (ROS2, motion control, physical vehicle simulation)
              - Fab digital manufacturing (3D printing, laser cutting, CNC milling)
              - CMF industrial aesthetics (anodizing thickness 8μm-12μm, sandblasting #120/#180, Klein Blue #002FA7)
              Answer the user's question in a professional, concise, and helpful tone in the language they asked (${lang === 'zh' ? 'Chinese' : 'English'}).`
            },
            { role: 'user', content: aiQuery }
          ],
          thinking: { type: 'enabled' },
          reasoning_effort: 'high',
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
              const deltaContent = parsed.choices?.[0]?.delta?.content || '';
              if (deltaContent) {
                setAiResponse((prev) => prev + deltaContent);
              }
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

  // Typewriter effect for the hero title
  useEffect(() => {
    let index = 0;
    const fullText = t.heroTitle || '';
    setTypedTitle('');
    
    const interval = setInterval(() => {
      setTypedTitle(fullText.substring(0, index + 1));
      index++;
      if (index >= fullText.length) {
        clearInterval(interval);
      }
    }, 75);

    return () => clearInterval(interval);
  }, [t.heroTitle]);

  const onNavigate = (route) => {
    if (route === 'home') window.location.hash = '#/';
    else if (route === 'profile') window.location.hash = '#/profile';
    else if (route === 'join-us') window.location.hash = '#/join-us';
    else if (route === 'mobile-robot-course') window.location.hash = '#/courses/mobile-robot';
    else if (route === 'fab-course') window.location.hash = '#/courses/fab-course';
    else if (route === 'ai-basics') window.location.hash = '#/courses/ai-basics';
    else if (route === 'cmf') window.location.hash = '#/courses/cmf';
    setCurrentRoute(route);
  };

  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
      
      {/* 3D Background - Hidden in dashboard view */}
      {currentRoute !== 'profile' && (
        <div style={{ opacity: (currentRoute === 'join-us' || currentRoute === 'ai-basics') ? 0.4 : 1.0, transition: 'opacity 0.3s ease' }}>
          <AntiGravityBackground />
        </div>
      )}

      {/* Glassmorphic Navbar */}
      <Navbar 
        onOpenAuthModal={() => setIsAuthModalOpen(true)}
        userSession={userSession}
        onLogout={handleLogout}
        theme={theme}
        onToggleTheme={handleToggleTheme}
        lang={lang}
        onToggleLang={handleToggleLang}
        onNavigate={onNavigate}
      />

      {/* Main Content */}
      <main style={{ paddingTop: '72px' }}>
        {currentRoute === 'mobile-robot-course' ? (
          <MobileRobotCourse lang={lang} onBack={() => onNavigate('home')} />
        ) : currentRoute === 'fab-course' ? (
          <FabCourse lang={lang} onBack={() => onNavigate('home')} />
        ) : currentRoute === 'ai-basics' ? (
          <AiBasics onBack={() => onNavigate('home')} />
        ) : currentRoute === 'cmf' ? (
          <Cmf onBack={() => onNavigate('home')} />
        ) : currentRoute === 'profile' ? (
          <ProfileDashboard 
            onBack={() => onNavigate('home')} 
            userSession={userSession} 
            onLogout={handleLogout}
            theme={theme}
            onToggleTheme={handleToggleTheme}
          />
        ) : currentRoute === 'join-us' ? (
          <JoinUs 
            onBack={() => onNavigate('home')} 
            lang={lang}
          />
        ) : (
          <>
            {/* Hero Section */}
            <section style={{
              paddingBlock: '8rem 6rem',
              textAlign: 'center',
              position: 'relative'
            }}>
              <div className="container-custom">
                {/* Note: Sparkles header element removed (Item 3: SophiGo Platform tag moved to bottom) */}

                <h1 className="title-hero text-gradient">
                  {typedTitle}
                  <span className="typewriter-cursor">|</span>
                </h1>
                
                <p className="description">
                  {t.heroDesc}
                </p>

                {/* Note: Docs and Browse buttons deleted (Item 6) */}

                {/* AIGC Search Box - Expanded 1.5x width (Item 7) */}
                <div style={{
                  maxWidth: '960px', // 1.5x of 640px
                  margin: '3rem auto 0',
                  padding: '1.5rem',
                  borderRadius: '20px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  backdropFilter: 'blur(12px)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.05)',
                  textAlign: 'left'
                }}>
                  {/* Note: Top Label AIGC Search title deleted (Item 7) */}
                  <form onSubmit={handleAISearchSubmit} style={{ display: 'flex', gap: '0.75rem' }}>
                    <input 
                      type="text" 
                      value={aiQuery}
                      onChange={(e) => setAiQuery(e.target.value)}
                      placeholder="" // Empty placeholder (Item 7)
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

            {/* Featured Showcase Cards (Contains 4 Innovation Cards) */}
            <FeaturedGrid lang={lang} userPermissions={userSession?.user?.user_metadata?.course_permissions || ['Fab课程', 'AI应用基础']} />

            {/* AI Innovation & Application Section - Core text redone based on Tech Report (Item 10) */}
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
                        <strong>{t.aiFeat1Title}:</strong> {t.aiFeat1Desc}
                      </li>
                      <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                        <strong>{t.aiFeat2Title}:</strong> {t.aiFeat2Desc}
                      </li>
                      <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                        <strong>{t.aiFeat3Title}:</strong> {t.aiFeat3Desc}
                      </li>
                    </ul>
                  </div>
                  
                  {/* Graphic CLI container */}
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

                {/* Modified Tools list layout (Item 9) */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: '1.5rem' }}>
                  
                  {/* Tool 1: CMF Applications */}
                  <a 
                    href="#/courses/cmf" 
                    className="glassmorphism-card tool-card-link" 
                    style={{ 
                      padding: '2rem', 
                      borderRadius: '16px', 
                      border: '1px solid var(--border-color)',
                      textDecoration: 'none',
                      color: 'inherit',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                      cursor: 'pointer'
                    }}
                  >
                    <Sparkles size={24} style={{ color: 'var(--klein-blue)', marginBottom: '1rem' }} />
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      CMF应用
                      <ArrowRight size={14} className="arrow-icon" style={{ transform: 'translateX(-4px)', opacity: 0, transition: 'all 0.2s' }} />
                    </h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: '1.5', flexGrow: 1 }}>
                      材料、色彩与表面处理工艺卡片库，帮助快速判断原型制造中的材料路径与质感方案。
                    </p>
                  </a>

                  {/* Tool 2: Sophicar */}
                  <a 
                    href="https://sophicar.com/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="glassmorphism-card tool-card-link" 
                    style={{ 
                      padding: '2rem', 
                      borderRadius: '16px', 
                      border: '1px solid var(--border-color)',
                      textDecoration: 'none',
                      color: 'inherit',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                      cursor: 'pointer'
                    }}
                  >
                    <Sparkles size={24} style={{ color: 'var(--klein-blue)', marginBottom: '1rem' }} />
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      Sophicar交通工具生成器
                      <ArrowRight size={14} className="arrow-icon" style={{ transform: 'translateX(-4px)', opacity: 0, transition: 'all 0.2s' }} />
                    </h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: '1.5', flexGrow: 1 }}>
                      在线定制设计与模拟专属的参数化智能交通工具，打通从算法设计到物理实体的数字化造物管线。
                    </p>
                  </a>

                  {/* Tool 3: Threejs Generator */}
                  <a 
                    href="/docs/tools/threejs-generator/app.html" 
                    className="glassmorphism-card tool-card-link" 
                    style={{ 
                      padding: '2rem', 
                      borderRadius: '16px', 
                      border: '1px solid var(--border-color)',
                      textDecoration: 'none',
                      color: 'inherit',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                      cursor: 'pointer'
                    }}
                  >
                    <Cpu size={24} style={{ color: 'var(--klein-blue)', marginBottom: '1rem' }} />
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      3D生成器
                      <ArrowRight size={14} className="arrow-icon" style={{ transform: 'translateX(-4px)', opacity: 0, transition: 'all 0.2s' }} />
                    </h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: '1.5', flexGrow: 1 }}>
                      快速可视化并创建交互式的 WebGL 三维模型与传感器坐标轴网格渲染。
                    </p>
                  </a>

                  {/* Tool 4: Mods */}
                  <a 
                    href="https://modsproject.org/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="glassmorphism-card tool-card-link" 
                    style={{ 
                      padding: '2rem', 
                      borderRadius: '16px', 
                      border: '1px solid var(--border-color)',
                      textDecoration: 'none',
                      color: 'inherit',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                      cursor: 'pointer'
                    }}
                  >
                    <Cpu size={24} style={{ color: 'var(--klein-blue)', marginBottom: '1rem' }} />
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      Mods
                      <ArrowRight size={14} className="arrow-icon" style={{ transform: 'translateX(-4px)', opacity: 0, transition: 'all 0.2s' }} />
                    </h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: '1.5', flexGrow: 1 }}>
                      使用模块化流程节点管理数字制造流水线，联通激光切割及数控雕刻机的进给电机。
                    </p>
                  </a>

                </div>
              </div>
            </section>

            {/* Note: About privacy section deleted (Item 11) */}
          </>
        )}
      </main>

      {/* Footer Section - Modified (Item 12, Item 13) */}
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
            <a href="#/join-us" onClick={() => onNavigate('join-us')} style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 600 }}>加入我们</a>
          </div>
        </div>
      </footer>

      {/* SophiGo Platform Version Tag 置底 (Item 3) */}
      <div style={{
        textAlign: 'center',
        paddingBottom: '2.5rem',
        backgroundColor: 'var(--bg-secondary)',
        color: 'var(--text-muted)',
        fontSize: '0.75rem',
        fontWeight: 500,
        letterSpacing: '0.05em'
      }}>
        SophiGo Platform v1.0.0 Alpha
      </div>

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
        .tool-card-link:hover {
          border-color: var(--klein-blue) !important;
          box-shadow: 0 10px 25px var(--klein-blue-glow-hover);
          transform: translateY(-2px);
        }
        .tool-card-link:hover .arrow-icon {
          opacity: 1 !important;
          transform: translateX(0) !important;
          color: var(--klein-blue);
        }
        .typewriter-cursor {
          display: inline-block;
          margin-left: 4px;
          color: var(--klein-blue);
          animation: blink 0.8s infinite;
        }
        @media (max-width: 900px) {
          #tools div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
          #tools a[style*="grid-column"] {
            grid-column: span 1 !important;
          }
        }
      `}</style>
    </div>
  );
}
