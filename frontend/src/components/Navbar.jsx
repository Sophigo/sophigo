import React, { useState, useEffect, useRef } from 'react';
import { Sun, Moon, Menu, X, ChevronDown, User, LogOut, FileText, Settings, LayoutDashboard } from 'lucide-react';

export default function Navbar({ onOpenAuthModal, userSession, onLogout, theme, onToggleTheme, lang = 'zh', onToggleLang, onNavigate }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);
  const [isToolsDropdownOpen, setIsToolsDropdownOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [username, setUsername] = useState('User');

  const coursesCloseTimer = useRef(null);
  const toolsCloseTimer = useRef(null);

  const openCourses = () => { clearTimeout(coursesCloseTimer.current); setIsCoursesDropdownOpen(true); };
  const closeCourses = () => { coursesCloseTimer.current = setTimeout(() => setIsCoursesDropdownOpen(false), 150); };
  const openTools = () => { clearTimeout(toolsCloseTimer.current); setIsToolsDropdownOpen(true); };
  const closeTools = () => { toolsCloseTimer.current = setTimeout(() => setIsToolsDropdownOpen(false), 150); };

  useEffect(() => {
    if (userSession?.user) {
      const metadata = userSession.user.user_metadata;
      setUsername(metadata?.nickname || metadata?.username || userSession.user.email.split('@')[0]);
    }
  }, [userSession]);

  const t = {
    zh: {
      home: '首页',
      courses: '课程',
      fabCourse: 'Fab课程',
      aiBasics: 'AI 基础应用',
      mobileRobot: 'AI移动机器人',
      cmf: 'CMF应用',
      tools: '工具',
      sophicar: 'Sophicar交通工具生成器',
      threejs: '3D生成器',
      stlQuote: 'stl分析仪',
      mods: 'Mods',
      matting: '抠图工具',
      news: '资讯',
      aboutUs: '加入我们',
      register: '注册 / 登录',
      enterDocs: '进入文档系统',
      logout: '退出登录',
      profile: '个人中心',
      workbench: '工作台'
    },
    en: {
      home: 'Home',
      courses: 'Courses',
      fabCourse: 'Fab Course',
      aiBasics: 'AI Basics',
      mobileRobot: 'AI Mobile Robot',
      cmf: 'CMF Application',
      tools: 'Tools',
      sophicar: 'Sophicar Vehicle Generator',
      threejs: 'Three.js Generator',
      stlQuote: 'STL Analyzer',
      mods: 'Mods',
      matting: 'Matting Tool',
      news: 'News',
      aboutUs: 'Join Us',
      register: 'Register / Login',
      enterDocs: 'Docs System',
      logout: 'Logout',
      profile: 'Profile',
      workbench: 'Workbench'
    }
  }[lang] || {
    home: '首页',
    courses: '课程',
    fabCourse: 'Fab课程',
    aiBasics: 'AI 基础应用',
    mobileRobot: 'AI移动机器人',
    cmf: 'CMF应用',
    tools: '工具',
    sophicar: 'Sophicar交通工具生成器',
    threejs: '3D生成器',
    stlQuote: 'stl分析仪',
    mods: 'Mods',
    matting: '抠图工具',
    news: '资讯',
    aboutUs: '加入我们',
    register: '注册 / 登录',
    enterDocs: '进入文档系统',
    logout: '退出登录',
    profile: '个人中心',
    workbench: '工作台'
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
        height: '72px'
      }}>
        {/* Brand Logo - 1.5x larger font & logo size (Item 4) */}
        <a href="#/" onClick={() => { onNavigate('home'); setIsMobileMenuOpen(false); }} style={{
          fontSize: '1.875rem',
          fontWeight: 700,
          textDecoration: 'none',
          color: 'var(--text-primary)',
          letterSpacing: '-0.02em',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem'
        }}>
          <img src="/logo.png" alt="Sophigo Logo" style={{
            width: '36px',
            height: '36px',
            objectFit: 'contain'
          }} />
          Sophigo
        </a>

        {/* Desktop Nav Items */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2.5rem'
        }} className="desktop-nav">
          <a href="#/" onClick={() => onNavigate('home')} style={navLinkStyle}>{t.home}</a>

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
                <a href="#/courses/fab-course" onClick={() => { onNavigate('fab-course'); setIsCoursesDropdownOpen(false); }} style={dropdownItemStyle}>{t.fabCourse}</a>
                <a href="#/courses/ai-basics" onClick={() => { onNavigate('ai-basics'); setIsCoursesDropdownOpen(false); }} style={dropdownItemStyle}>{t.aiBasics}</a>
                <a href="#/courses/mobile-robot" onClick={() => { onNavigate('mobile-robot-course'); setIsCoursesDropdownOpen(false); }} style={dropdownItemStyle}>{t.mobileRobot}</a>
                <a href="#/courses/cmf" onClick={() => { onNavigate('cmf'); setIsCoursesDropdownOpen(false); }} style={dropdownItemStyle}>{t.cmf}</a>
              </div>
            )}
          </div>

          {/* Tools Dropdown - Modified tool items (Item 9) */}
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
                width: '240px',
                borderRadius: '12px',
                padding: '0.5rem 0',
                marginTop: '4px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                border: '1px solid var(--border-color)',
                zIndex: 110,
                animation: 'fadeIn 0.2s ease'
              }}>
                <a href="https://sophicar.com/" target="_blank" rel="noopener noreferrer" style={dropdownItemStyle}>{t.sophicar}</a>
                <a href="/docs/tools/threejs-generator/app.html" style={dropdownItemStyle}>{t.threejs}</a>
                <a href="https://modsproject.org/" target="_blank" rel="noopener noreferrer" style={dropdownItemStyle}>{t.mods}</a>
              </div>
            )}
          </div>

          <a href="/docs/news/index.html" style={navLinkStyle}>{t.news}</a>

          {/* Join Us Link (Item 13) */}
          <a href="#/join-us" onClick={() => onNavigate('join-us')} style={navLinkStyle}>{t.aboutUs}</a>
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
          {userSession ? (
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
                  {/* Redirects to Dashboard (Item 2) */}
                  <button 
                    onClick={() => { onNavigate('profile'); setIsProfileDropdownOpen(false); }}
                    style={{
                      ...dropdownItemStyle,
                      width: '100%',
                      background: 'none',
                      border: 'none',
                      textAlign: 'left',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}
                  >
                    <Settings size={14} />
                    {t.profile}
                  </button>
                  <a
                    href="/docs/news/sophigo/workspace.html"
                    onClick={() => setIsProfileDropdownOpen(false)}
                    style={{...dropdownItemStyle, display: 'flex', alignItems: 'center', gap: '0.5rem'}}
                  >
                    <LayoutDashboard size={14} />
                    {t.workbench}
                  </a>
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
              display: 'none',
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
          top: '72px',
          left: 0,
          width: '100%',
          height: 'calc(100vh - 72px)',
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.25rem',
          borderTop: '1px solid var(--border-color)',
          zIndex: 99,
          overflowY: 'auto',
          animation: 'slideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
        }}>
          <a href="#/" onClick={() => { onNavigate('home'); setIsMobileMenuOpen(false); }} style={mobileNavLinkStyle}>{t.home}</a>
          <hr style={{ border: 'none', borderTop: '1px solid var(--border-color)', margin: 0 }} />
          
          <div>
            <h4 style={{ color: 'var(--text-muted)', fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{t.courses}</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', paddingLeft: '0.5rem' }}>
              <a href="#/courses/fab-course" onClick={() => { setIsMobileMenuOpen(false); onNavigate('fab-course'); }} style={mobileSubNavLinkStyle}>{t.fabCourse}</a>
              <a href="#/courses/ai-basics" onClick={() => { setIsMobileMenuOpen(false); onNavigate('ai-basics'); }} style={mobileSubNavLinkStyle}>{t.aiBasics}</a>
              <a href="#/courses/mobile-robot" onClick={() => { onNavigate('mobile-robot-course'); setIsMobileMenuOpen(false); }} style={mobileSubNavLinkStyle}>{t.mobileRobot}</a>
              <a href="#/courses/cmf" onClick={() => { setIsMobileMenuOpen(false); onNavigate('cmf'); }} style={mobileSubNavLinkStyle}>{t.cmf}</a>
            </div>
          </div>
          
          <hr style={{ border: 'none', borderTop: '1px solid var(--border-color)', margin: 0 }} />

          <div>
            <h4 style={{ color: 'var(--text-muted)', fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{t.tools}</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', paddingLeft: '0.5rem' }}>
              <a href="https://sophicar.com/" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)} style={mobileSubNavLinkStyle}>{t.sophicar}</a>
              <a href="/docs/tools/threejs-generator/app.html" onClick={() => setIsMobileMenuOpen(false)} style={mobileSubNavLinkStyle}>{t.threejs}</a>
              <a href="https://modsproject.org/" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)} style={mobileSubNavLinkStyle}>{t.mods}</a>
            </div>
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid var(--border-color)', margin: 0 }} />

          <a href="/docs/news/index.html" onClick={() => setIsMobileMenuOpen(false)} style={mobileNavLinkStyle}>{t.news}</a>

          <hr style={{ border: 'none', borderTop: '1px solid var(--border-color)', margin: 0 }} />
          
          <a href="#/join-us" onClick={() => { onNavigate('join-us'); setIsMobileMenuOpen(false); }} style={mobileNavLinkStyle}>{t.aboutUs}</a>
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
          .mobile-menu-btn {
            display: flex !important;
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
