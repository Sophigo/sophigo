import React, { useState, useEffect, useRef } from 'react';
import { Sun, Moon, Menu, X, ChevronDown, User, LogOut, FileText, Globe } from 'lucide-react';

export default function Navbar({ onOpenAuthModal, userToken, onLogout, theme, onToggleTheme, lang = 'zh', onToggleLang }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);
  const [isToolsDropdownOpen, setIsToolsDropdownOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [username, setUsername] = useState('User');

  // Refs for delayed close timers (prevents flicker when moving to dropdown)
  const coursesCloseTimer = useRef(null);
  const toolsCloseTimer = useRef(null);

  const openCourses = () => { clearTimeout(coursesCloseTimer.current); setIsCoursesDropdownOpen(true); };
  const closeCourses = () => { coursesCloseTimer.current = setTimeout(() => setIsCoursesDropdownOpen(false), 150); };
  const openTools = () => { clearTimeout(toolsCloseTimer.current); setIsToolsDropdownOpen(true); };
  const closeTools = () => { toolsCloseTimer.current = setTimeout(() => setIsToolsDropdownOpen(false), 150); };

  useEffect(() => {
    if (userToken) {
      // Decode JWT roughly to show user's username
      try {
        const payload = JSON.parse(atob(userToken.split('.')[1]));
        setUsername(payload.username || 'User_01');
      } catch (e) {
        setUsername('User_01');
      }
    }
  }, [userToken]);

  const t = {
    zh: {
      home: '首页',
      courses: '课程',
      fabCourse: 'Fab课程',
      aiBasics: 'AI应用基础',
      mobileRobot: 'AI移动机器人',
      cmf: 'CMF应用',
      tools: '工具',
      sophicar: '参数化设计车辆',
      threejs: 'threejs生成器',
      stlQuote: 'stl 报价',
      mods: 'Mods',
      videoGen: '视频生成',
      matting: '抠图',
      news: '资讯',
      aboutUs: '关于我们',
      register: '注册',
      enterDocs: '进入文档系统',
      logout: '退出登录',
      profile: '个人中心'
    },
    en: {
      home: 'Home',
      courses: 'Courses',
      fabCourse: 'Fab Course',
      aiBasics: 'AI Basics',
      mobileRobot: 'AI Mobile Robot',
      cmf: 'CMF Application',
      tools: 'Tools',
      sophicar: 'Parametric Vehicle Design',
      threejs: 'Three.js Generator',
      stlQuote: 'STL Quote',
      mods: 'Mods',
      videoGen: 'Video Gen',
      matting: 'Matting',
      news: 'News',
      aboutUs: 'About Us',
      register: 'Register',
      enterDocs: 'Docs System',
      logout: 'Logout',
      profile: 'Profile'
    }
  }[lang] || {
    home: '首页',
    courses: '课程',
    fabCourse: 'Fab课程',
    aiBasics: 'AI应用基础',
    mobileRobot: 'AI移动机器人',
    cmf: 'CMF应用',
    tools: '工具',
    sophicar: '参数化设计车辆',
    threejs: 'threejs生成器',
    stlQuote: 'stl 报价',
    mods: 'Mods',
    videoGen: '视频生成',
    matting: '抠图',
    news: '资讯',
    aboutUs: '关于我们',
    register: '注册',
    enterDocs: '进入文档系统',
    logout: '退出登录',
    profile: '个人中心'
  };

  return (
    <nav className="glassmorphism" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 100,
      transition: 'background-color 0.3s ease, border-color 0.3s ease'
    }}>
      <div className="container-custom" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '64px'
      }}>
        {/* Brand Logo */}
        <a href="/" style={{
          fontSize: '1.25rem',
          fontWeight: 700,
          textDecoration: 'none',
          color: 'var(--text-primary)',
          letterSpacing: '-0.02em',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <img src="/logo.png" alt="Sophigo Logo" style={{
            width: '24px',
            height: '24px',
            objectFit: 'contain'
          }} />
          Sophigo
        </a>

        {/* Desktop Nav Items */}
        <div style={{
          display: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '2.5rem'
        }} className="desktop-nav">
          <a href="/" style={navLinkStyle}>{t.home}</a>

          {/* Courses Dropdown */}
          <div 
            style={{ position: 'relative' }}
            onMouseEnter={openCourses}
            onMouseLeave={closeCourses}
          >
            <button style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-secondary)',
              fontSize: '0.9rem',
              fontWeight: 500,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.25rem',
              transition: 'color 0.2s ease',
              padding: '0.5rem 0'
            }}
            onClick={() => setIsCoursesDropdownOpen(!isCoursesDropdownOpen)}
            className="hover-link"
            >
              {t.courses}
              <ChevronDown size={14} style={{
                transform: isCoursesDropdownOpen ? 'rotate(180deg)' : 'none',
                transition: 'transform 0.2s ease'
              }} />
            </button>

            {/* Dropdown Box */}
            {isCoursesDropdownOpen && (
              <div className="glassmorphism-card"
                onMouseEnter={openCourses}
                onMouseLeave={closeCourses}
                style={{
                position: 'absolute',
                top: '100%',
                left: '0',
                width: '200px',
                borderRadius: '12px',
                padding: '0.5rem 0',
                marginTop: '4px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                border: '1px solid var(--border-color)',
                zIndex: 110,
                animation: 'fadeIn 0.2s ease'
              }}>
                <a href="/docs/courses/fab-course/" style={dropdownItemStyle}>{t.fabCourse}</a>
                <a href="/docs/courses/ai-basics/" style={dropdownItemStyle}>{t.aiBasics}</a>
                <a href="#/courses/mobile-robot" style={dropdownItemStyle}>{t.mobileRobot}</a>
                <a href="/docs/courses/cmf/" style={dropdownItemStyle}>{t.cmf}</a>
              </div>
            )}
          </div>

          {/* Tools Dropdown */}
          <div 
            style={{ position: 'relative' }}
            onMouseEnter={openTools}
            onMouseLeave={closeTools}
          >
            <button style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-secondary)',
              fontSize: '0.9rem',
              fontWeight: 500,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.25rem',
              transition: 'color 0.2s ease',
              padding: '0.5rem 0'
            }}
            onClick={() => setIsToolsDropdownOpen(!isToolsDropdownOpen)}
            className="hover-link"
            >
              {t.tools}
              <ChevronDown size={14} style={{
                transform: isToolsDropdownOpen ? 'rotate(180deg)' : 'none',
                transition: 'transform 0.2s ease'
              }} />
            </button>

            {/* Dropdown Box */}
            {isToolsDropdownOpen && (
              <div className="glassmorphism-card"
                onMouseEnter={openTools}
                onMouseLeave={closeTools}
                style={{
                position: 'absolute',
                top: '100%',
                left: '0',
                width: '200px',
                borderRadius: '12px',
                padding: '0.5rem 0',
                marginTop: '4px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                border: '1px solid var(--border-color)',
                zIndex: 110,
                animation: 'fadeIn 0.2s ease'
              }}>
                <a href="https://sophicar.com/" target="_blank" rel="noopener noreferrer" style={dropdownItemStyle}>{t.sophicar}</a>
                <a href="/docs/tools/threejs-generator/" style={dropdownItemStyle}>{t.threejs}</a>
                <a href="/docs/tools/stl-quote/stlquote.html" style={dropdownItemStyle}>{t.stlQuote}</a>
                <a href="https://modsproject.org/" target="_blank" rel="noopener noreferrer" style={dropdownItemStyle}>{t.mods}</a>
                <a href="/docs/tools/video-generation/" style={dropdownItemStyle}>{t.videoGen}</a>
                <a href="/docs/tools/matting/" style={dropdownItemStyle}>{t.matting}</a>
              </div>
            )}
          </div>

          <a href="/docs/news/index.html" style={navLinkStyle}>{t.news}</a>

          <a href="#about" style={navLinkStyle}>{t.aboutUs}</a>
        </div>

        {/* Right Action controls */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem'
        }}>
          {/* Theme Toggle Button */}
          <button 
            onClick={onToggleTheme}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--text-primary)',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background-color 0.2s ease',
              border: '1px solid var(--border-color)'
            }}
            className="theme-toggle-btn"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* User Sign In / Profile dropdown */}
          {userToken ? (
            <div 
              style={{ position: 'relative' }}
              onMouseEnter={() => setIsProfileDropdownOpen(true)}
              onMouseLeave={() => setIsProfileDropdownOpen(false)}
            >
              <button style={{
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-primary)',
                fontSize: '0.9rem',
                fontWeight: 500,
                padding: '0.45rem 1rem',
                borderRadius: '20px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.2s ease'
              }}
              onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
              >
                <div style={{
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--klein-blue)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '0.65rem'
                }}>
                  {username.charAt(0).toUpperCase()}
                </div>
                <span>{username}</span>
                <ChevronDown size={12} />
              </button>

              {isProfileDropdownOpen && (
                <div className="glassmorphism-card" style={{
                  position: 'absolute',
                  top: '100%',
                  right: '0',
                  width: '180px',
                  borderRadius: '12px',
                  padding: '0.5rem 0',
                  marginTop: '4px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  border: '1px solid var(--border-color)',
                  zIndex: 110
                }}>
                  <a href="/docs/index.html" style={{...dropdownItemStyle, display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                    <FileText size={14} />
                    {t.enterDocs}
                  </a>
                  <button 
                    onClick={onLogout}
                    style={{
                      ...dropdownItemStyle,
                      width: '100%',
                      background: 'none',
                      border: 'none',
                      textAlign: 'left',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      color: '#ff453a'
                    }}
                  >
                    <LogOut size={14} />
                    {t.logout}
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button 
              onClick={onOpenAuthModal}
              className="btn-cta"
              style={{
                fontSize: '0.85rem',
                padding: '0.5rem 1.25rem',
                fontWeight: 500
              }}
            >
              {t.register}
            </button>
          )}

          {/* Language Toggle Button */}
          <button 
            onClick={onToggleLang}
            style={{
              background: 'none',
              border: '1px solid var(--border-color)',
              cursor: 'pointer',
              color: 'var(--text-primary)',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background-color 0.2s ease',
              fontSize: '0.85rem',
              fontWeight: 600,
              gap: '0.25rem'
            }}
            title={lang === 'zh' ? 'Switch to English' : '切换为中文'}
            className="lang-toggle-btn"
          >
            <span style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>{lang === 'zh' ? 'EN' : '中'}</span>
          </button>

          {/* Mobile Menu Icon */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--text-primary)',
              display: 'flex',
              padding: '0.25rem'
            }}
            className="mobile-menu-btn"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="glassmorphism" style={{
          position: 'fixed',
          top: '64px',
          left: 0,
          width: '100%',
          height: 'calc(100vh - 64px)',
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.25rem',
          borderTop: '1px solid var(--border-color)',
          zIndex: 99,
          overflowY: 'auto',
          animation: 'slideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
        }}>
          <a href="/" onClick={() => setIsMobileMenuOpen(false)} style={mobileNavLinkStyle}>{t.home}</a>
          <hr style={{ border: 'none', borderTop: '1px solid var(--border-color)', margin: 0 }} />
          
          <div>
            <h4 style={{ color: 'var(--text-muted)', fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{t.courses}</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', paddingLeft: '0.5rem' }}>
              <a href="/docs/courses/fab-course/" onClick={() => setIsMobileMenuOpen(false)} style={mobileSubNavLinkStyle}>{t.fabCourse}</a>
              <a href="/docs/courses/ai-basics/" onClick={() => setIsMobileMenuOpen(false)} style={mobileSubNavLinkStyle}>{t.aiBasics}</a>
              <a href="#/courses/mobile-robot" onClick={() => setIsMobileMenuOpen(false)} style={mobileSubNavLinkStyle}>{t.mobileRobot}</a>
              <a href="/docs/courses/cmf/" onClick={() => setIsMobileMenuOpen(false)} style={mobileSubNavLinkStyle}>{t.cmf}</a>
            </div>
          </div>
          
          <hr style={{ border: 'none', borderTop: '1px solid var(--border-color)', margin: 0 }} />

          <div>
            <h4 style={{ color: 'var(--text-muted)', fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{t.tools}</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', paddingLeft: '0.5rem' }}>
              <a href="https://sophicar.com/" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)} style={mobileSubNavLinkStyle}>{t.sophicar}</a>
              <a href="/docs/tools/threejs-generator/" onClick={() => setIsMobileMenuOpen(false)} style={mobileSubNavLinkStyle}>{t.threejs}</a>
              <a href="/docs/tools/stl-quote/stlquote.html" onClick={() => setIsMobileMenuOpen(false)} style={mobileSubNavLinkStyle}>{t.stlQuote}</a>
              <a href="https://modsproject.org/" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)} style={mobileSubNavLinkStyle}>{t.mods}</a>
              <a href="/docs/tools/video-generation/" onClick={() => setIsMobileMenuOpen(false)} style={mobileSubNavLinkStyle}>{t.videoGen}</a>
              <a href="/docs/tools/matting/" onClick={() => setIsMobileMenuOpen(false)} style={mobileSubNavLinkStyle}>{t.matting}</a>
            </div>
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid var(--border-color)', margin: 0 }} />

          <a href="/docs/news/index.html" onClick={() => setIsMobileMenuOpen(false)} style={mobileNavLinkStyle}>{t.news}</a>

          <hr style={{ border: 'none', borderTop: '1px solid var(--border-color)', margin: 0 }} />
          
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)} style={mobileNavLinkStyle}>{t.aboutUs}</a>
        </div>
      )}

      {/* Inject custom inline styles for animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideIn {
          from { transform: translateY(-10px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .hover-link:hover {
          color: var(--text-primary) !important;
        }
        @media (min-width: 769px) {
          .mobile-menu-btn {
            display: none !important;
          }
        }
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
}

const navLinkStyle = {
  textDecoration: 'none',
  color: 'var(--text-secondary)',
  fontSize: '0.9rem',
  fontWeight: 500,
  transition: 'color 0.2s ease',
  cursor: 'pointer'
};

const dropdownItemStyle = {
  display: 'block',
  padding: '0.6rem 1.25rem',
  textDecoration: 'none',
  color: 'var(--text-secondary)',
  fontSize: '0.85rem',
  fontWeight: 500,
  transition: 'all 0.2s ease',
  cursor: 'pointer',
  textAlign: 'left'
};

const mobileNavLinkStyle = {
  textDecoration: 'none',
  color: 'var(--text-primary)',
  fontSize: '1.1rem',
  fontWeight: 500,
  cursor: 'pointer'
};

const mobileSubNavLinkStyle = {
  textDecoration: 'none',
  color: 'var(--text-secondary)',
  fontSize: '0.95rem',
  fontWeight: 500,
  cursor: 'pointer'
};
