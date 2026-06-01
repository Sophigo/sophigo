import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, ChevronDown, User, LogOut, FileText } from 'lucide-react';

export default function Navbar({ onOpenAuthModal, userToken, onLogout, theme, onToggleTheme }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [username, setUsername] = useState('User');

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
          <span style={{
            display: 'inline-block',
            width: '12px',
            height: '12px',
            borderRadius: '2px',
            backgroundColor: 'var(--klein-blue)',
            boxShadow: '0 0 8px var(--klein-blue)'
          }}></span>
          ProFabX
        </a>

        {/* Desktop Nav Items */}
        <div style={{
          display: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '2.5rem'
        }} className="desktop-nav">
          {/* Courses Dropdown */}
          <div 
            style={{ position: 'relative' }}
            onMouseEnter={() => setIsCoursesDropdownOpen(true)}
            onMouseLeave={() => setIsCoursesDropdownOpen(false)}
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
              课程 (Courses)
              <ChevronDown size={14} style={{
                transform: isCoursesDropdownOpen ? 'rotate(180deg)' : 'none',
                transition: 'transform 0.2s ease'
              }} />
            </button>

            {/* Dropdown Box */}
            {isCoursesDropdownOpen && (
              <div className="glassmorphism-card" style={{
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
                <a href="/docs/courses/mobile-robot.html" style={dropdownItemStyle}>移动机器人</a>
                <a href="/docs/courses/fab-course.html" style={dropdownItemStyle}>Fab 课程</a>
                <a href="/docs/courses/cmf.html" style={dropdownItemStyle}>CMF 规范</a>
              </div>
            )}
          </div>

          <a href="#ai-innovation" style={navLinkStyle}>AI 创新与应用</a>
          <a href="#showcase" style={navLinkStyle}>应用案例</a>
          <a href="#tools" style={navLinkStyle}>社区工具</a>
          <a href="#about" style={navLinkStyle}>关于我们</a>
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
                    进入文档系统
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
                    退出登录
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
              Sign In
            </button>
          )}

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
          gap: '1.5rem',
          borderTop: '1px solid var(--border-color)',
          zIndex: 99,
          animation: 'slideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
        }}>
          <div>
            <h4 style={{ color: 'var(--text-muted)', fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '0.75rem' }}>课程 (Courses)</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', paddingLeft: '0.5rem' }}>
              <a href="/docs/courses/mobile-robot.html" style={mobileNavLinkStyle}>移动机器人</a>
              <a href="/docs/courses/fab-course.html" style={mobileNavLinkStyle}>Fab 课程</a>
              <a href="/docs/courses/cmf.html" style={mobileNavLinkStyle}>CMF 规范</a>
            </div>
          </div>
          <hr style={{ border: 'none', borderTop: '1px solid var(--border-color)' }} />
          <a href="#ai-innovation" onClick={() => setIsMobileMenuOpen(false)} style={mobileNavLinkStyle}>AI 创新与应用</a>
          <a href="#showcase" onClick={() => setIsMobileMenuOpen(false)} style={mobileNavLinkStyle}>应用案例</a>
          <a href="#tools" onClick={() => setIsMobileMenuOpen(false)} style={mobileNavLinkStyle}>社区工具</a>
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)} style={mobileNavLinkStyle}>关于我们</a>
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
