import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import { 
  User, BookOpen, Folder, Users, Settings, Save, Shield, 
  CheckSquare, ArrowLeft, LogOut, Sun, Moon, Bell, Search, 
  Grid, FileText, ChevronRight, Check, Play, RefreshCw, LayoutDashboard
} from 'lucide-react';

export default function ProfileDashboard({ onBack, userSession, onLogout, theme, onToggleTheme }) {
  const [activeTab, setActiveTab] = useState('overview'); // 'overview', 'learning', 'folders', 'team'
  const [user, setUser] = useState(null);
  
  // Settings Form States
  const [nickname, setNickname] = useState('');
  const [signature, setSignature] = useState('');
  const [phone, setPhone] = useState('');
  const [team, setTeam] = useState('');
  const [admissionYear, setAdmissionYear] = useState('');
  
  // Permissions States
  const [coursePermissions, setCoursePermissions] = useState([]);
  const [commentPermission, setCommentPermission] = useState(true);
  
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [saveError, setSaveError] = useState('');

  // Tasks checklist state
  const [tasks, setTasks] = useState([
    { id: 1, title: 'AI in Education 2026 ROS2 Integration', subtitle: 'Smith et al.', status: 'pending' },
    { id: 2, title: 'Chassis Kinematics Simulation Code', subtitle: 'Goodfellow', status: 'progress' },
    { id: 3, title: 'CMF Anodizing Color Card Alignment', subtitle: 'Sweller', status: 'done' },
    { id: 4, title: 'STL Model Printer Calibration', subtitle: 'Figma Guide', status: 'pending' }
  ]);

  useEffect(() => {
    if (userSession?.user) {
      const u = userSession.user;
      setUser(u);
      setNickname(u.user_metadata?.nickname || u.email.split('@')[0]);
      setSignature(u.user_metadata?.signature || 'AI时代，敏捷造物');
      setPhone(u.user_metadata?.phone || '');
      setTeam(u.user_metadata?.team || '');
      setAdmissionYear(u.user_metadata?.admission_year || 'Feb 1, 2025');
      setCoursePermissions(u.user_metadata?.course_permissions || ['Fab课程', 'AI应用基础']);
      setCommentPermission(u.user_metadata?.comment_permission !== false);
    }
  }, [userSession]);

  const handleSaveSettings = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    setSaveSuccess(false);
    setSaveError('');

    try {
      const { data, error } = await supabase.auth.updateUser({
        data: {
          nickname,
          signature,
          phone,
          team,
          admission_year: admissionYear,
          course_permissions: coursePermissions,
          comment_permission: commentPermission
        }
      });

      if (error) throw error;
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
    } catch (err) {
      console.error(err);
      setSaveError(err.message || '保存设置失败');
    } finally {
      setIsSaving(false);
    }
  };

  const handleToggleCoursePermission = (course) => {
    if (coursePermissions.includes(course)) {
      setCoursePermissions(coursePermissions.filter(c => c !== course));
    } else {
      setCoursePermissions([...coursePermissions, course]);
    }
  };

  const handleToggleTaskStatus = (id) => {
    setTasks(tasks.map(t => {
      if (t.id === id) {
        const next = t.status === 'pending' ? 'progress' : t.status === 'progress' ? 'done' : 'pending';
        return { ...t, status: next };
      }
      return t;
    }));
  };

  if (!user) {
    return (
      <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyItems: 'center', justifyContent: 'center' }}>
        <RefreshCw className="animate-spin" size={24} style={{ color: 'var(--klein-blue)' }} />
      </div>
    );
  }

  return (
    <div style={{
      display: 'flex',
      minHeight: 'calc(100vh - 64px)',
      backgroundColor: 'var(--bg-primary)',
      color: 'var(--text-primary)',
      fontFamily: 'var(--font-sans)',
      transition: 'background-color 0.3s ease, color 0.3s ease'
    }}>
      {/* LEFT SIDEBAR */}
      <aside style={{
        width: '260px',
        borderRight: '1px solid var(--border-color)',
        backgroundColor: 'var(--bg-secondary)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '1.5rem',
        boxSizing: 'border-box'
      }}>
        <div>


          {/* Navigation Items */}
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <button 
              onClick={() => setActiveTab('overview')}
              style={{
                ...navBtnStyle,
                backgroundColor: activeTab === 'overview' ? 'var(--border-color)' : 'transparent',
                color: activeTab === 'overview' ? 'var(--text-primary)' : 'var(--text-secondary)'
              }}
            >
              <User size={18} />
              <span>个人信息</span>
            </button>
            <a
              href="/docs/news/sophigo/workspace.html"
              style={{
                ...navBtnStyle,
                backgroundColor: 'transparent',
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--border-color)';
                e.currentTarget.style.color = 'var(--text-primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'var(--text-secondary)';
              }}
            >
              <LayoutDashboard size={18} />
              <span>工作台</span>
            </a>
            <button 
              onClick={() => setActiveTab('learning')}
              style={{
                ...navBtnStyle,
                backgroundColor: activeTab === 'learning' ? 'var(--border-color)' : 'transparent',
                color: activeTab === 'learning' ? 'var(--text-primary)' : 'var(--text-secondary)'
              }}
            >
              <BookOpen size={18} />
              <span>学习中心</span>
            </button>
            <button 
              onClick={() => setActiveTab('folders')}
              style={{
                ...navBtnStyle,
                backgroundColor: activeTab === 'folders' ? 'var(--border-color)' : 'transparent',
                color: activeTab === 'folders' ? 'var(--text-primary)' : 'var(--text-secondary)'
              }}
            >
              <Folder size={18} />
              <span>文件夹</span>
            </button>
            <button 
              onClick={() => setActiveTab('team')}
              style={{
                ...navBtnStyle,
                backgroundColor: activeTab === 'team' ? 'var(--border-color)' : 'transparent',
                color: activeTab === 'team' ? 'var(--text-primary)' : 'var(--text-secondary)'
              }}
            >
              <Users size={18} />
              <span>我的团队</span>
            </button>
          </nav>
        </div>

        {/* Sidebar Footer User Info */}
        <div style={{
          borderTop: '1px solid var(--border-color)',
          paddingTop: '1.25rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem'
        }}>
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            backgroundColor: 'var(--klein-blue)',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 600,
            fontSize: '0.9rem'
          }}>
            {nickname.charAt(0).toUpperCase()}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }}>{nickname}</span>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
              {user.email}
            </span>
          </div>
        </div>
      </aside>

      {/* RIGHT CONTENT WORKSPACE */}
      <main style={{
        flex: 1,
        padding: '2.5rem',
        boxSizing: 'border-box',
        overflowY: 'auto'
      }}>
        {/* Workspace Top Header */}
        <header style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '2.5rem',
          borderBottom: '1px solid var(--border-color)',
          paddingBottom: '1.25rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <button 
              onClick={onBack}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem',
                color: 'var(--text-secondary)',
                fontSize: '0.9rem'
              }}
            >
              <ArrowLeft size={16} />
              返回首页
            </button>
            <span style={{ color: 'var(--text-muted)' }}>/</span>
            <span style={{ fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: 500 }}>
              {activeTab === 'overview' ? '个人设置' : activeTab === 'learning' ? '学情分析' : activeTab === 'folders' ? '项目目录' : '团队协作'}
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button 
              onClick={onToggleTheme}
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
                justifyContent: 'center'
              }}
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button 
              onClick={onLogout}
              style={{
                background: 'none',
                border: '1px solid rgba(255, 69, 58, 0.2)',
                color: '#ff453a',
                padding: '0.45rem 1rem',
                borderRadius: '20px',
                fontSize: '0.85rem',
                fontWeight: 500,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem'
              }}
            >
              <LogOut size={14} />
              退出登录
            </button>
          </div>
        </header>

        {/* Tab 1: Overview & Settings */}
        {activeTab === 'overview' && (
          <div style={{ maxWidth: '800px', animation: 'fadeIn 0.3s ease' }}>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '0.5rem' }}>设置</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '2rem' }}>在这里管理您的个人信息以及平台权限配置。</p>

            <form onSubmit={handleSaveSettings} style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
              
              {/* Profile Card Info */}
              <div className="glassmorphism-card" style={{ padding: '1.75rem', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '1.25rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
                  基本信息
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                  <div style={inputGroupStyle}>
                    <label style={labelStyle}>电子邮箱</label>
                    <input type="text" disabled value={user.email} style={{ ...inputStyle, opacity: 0.6, cursor: 'not-allowed' }} />
                  </div>
                  <div style={inputGroupStyle}>
                    <label style={labelStyle}>昵称</label>
                    <input type="text" value={nickname} onChange={(e) => setNickname(e.target.value)} style={inputStyle} />
                  </div>
                  <div style={inputGroupStyle}>
                    <label style={labelStyle}>联系电话</label>
                    <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} style={inputStyle} />
                  </div>
                  <div style={inputGroupStyle}>
                    <label style={labelStyle}>入学年份 / 时间</label>
                    <input type="text" value={admissionYear} onChange={(e) => setAdmissionYear(e.target.value)} style={inputStyle} />
                  </div>
                  <div style={{ ...inputGroupStyle, gridColumn: 'span 2' }}>
                    <label style={labelStyle}>所在团队</label>
                    <input type="text" value={team} onChange={(e) => setTeam(e.target.value)} style={inputStyle} />
                  </div>
                  <div style={{ ...inputGroupStyle, gridColumn: 'span 2' }}>
                    <label style={labelStyle}>个人签名</label>
                    <textarea value={signature} onChange={(e) => setSignature(e.target.value)} rows={3} style={{ ...inputStyle, resize: 'none' }} />
                  </div>
                </div>
              </div>

              {/* Course & Comment Permissions settings (Required in Item 1) */}
              <div className="glassmorphism-card" style={{ padding: '1.75rem', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
                  <Shield size={18} style={{ color: 'var(--klein-blue)' }} />
                  平台权限配置 (Supabase Auth 元数据关联)
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  
                  {/* Course Permissions */}
                  <div>
                    <label style={{ ...labelStyle, display: 'block', marginBottom: '0.75rem' }}>课程权限配置 (已拥有权限的主题板块将在主页以彩色渲染高亮并提供完整阅读选项)</label>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem' }}>
                      {['Fab课程', 'AI应用基础', 'AI移动机器人', 'CMF应用'].map((course) => {
                        const isGranted = coursePermissions.includes(course);
                        return (
                          <label 
                            key={course}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.75rem',
                              padding: '0.75rem 1rem',
                              borderRadius: '10px',
                              border: `1px solid ${isGranted ? 'var(--klein-blue)' : 'var(--border-color)'}`,
                              background: isGranted ? 'var(--klein-blue-glow)' : 'var(--bg-secondary)',
                              cursor: 'pointer',
                              fontSize: '0.85rem',
                              fontWeight: isGranted ? 600 : 400,
                              transition: 'all 0.2s'
                            }}
                          >
                            <input 
                              type="checkbox" 
                              checked={isGranted}
                              onChange={() => handleToggleCoursePermission(course)}
                              style={{ display: 'none' }}
                            />
                            <div style={{
                              width: '16px',
                              height: '16px',
                              borderRadius: '4px',
                              border: '1px solid var(--text-muted)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              backgroundColor: isGranted ? 'var(--klein-blue)' : 'transparent',
                              borderColor: isGranted ? 'var(--klein-blue)' : 'var(--text-muted)',
                              color: 'white'
                            }}>
                              {isGranted && <Check size={12} />}
                            </div>
                            <span>{course}</span>
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  {/* Comment Permission Toggle */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border-color)', paddingTop: '1.25rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                      <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>文章评论及批注权限</span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>开启后可使用 Hypothesis 对系统内课件、技术报告进行划词高亮和发起批注讨论</span>
                    </div>
                    <label style={switchStyle}>
                      <input 
                        type="checkbox" 
                        checked={commentPermission}
                        onChange={(e) => setCommentPermission(e.target.checked)}
                        style={{ display: 'none' }}
                      />
                      <span style={{
                        ...switchSliderStyle,
                        backgroundColor: commentPermission ? 'var(--klein-blue)' : '#86868b',
                        transform: commentPermission ? 'translateX(20px)' : 'translateX(0)'
                      }}></span>
                    </label>
                  </div>

                </div>
              </div>

              {/* Status Alert Messages */}
              {saveSuccess && (
                <div style={{ padding: '0.75rem 1rem', borderRadius: '10px', backgroundColor: 'rgba(7, 193, 96, 0.1)', color: '#07c160', fontSize: '0.85rem', border: '1px solid rgba(7, 193, 96, 0.2)' }}>
                  设置已成功同步至 Supabase 数据库！
                </div>
              )}
              {saveError && (
                <div style={{ padding: '0.75rem 1rem', borderRadius: '10px', backgroundColor: 'rgba(255, 69, 58, 0.1)', color: '#ff453a', fontSize: '0.85rem', border: '1px solid rgba(255, 69, 58, 0.2)' }}>
                  {saveError}
                </div>
              )}

              {/* Form submit */}
              <button 
                type="submit" 
                disabled={isSaving}
                className="btn-cta"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  padding: '0.85rem 1.5rem',
                  fontSize: '0.95rem',
                  borderRadius: '12px',
                  alignSelf: 'flex-start'
                }}
              >
                <Save size={18} />
                {isSaving ? '正在保存...' : '保存更改'}
              </button>

            </form>
          </div>
        )}

        {/* Tab 2: Learning Center / Academic Analysis (Academic Analysis dashboard layout in HUIYAO) */}
        {activeTab === 'learning' && (
          <div style={{ animation: 'fadeIn 0.3s ease' }}>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '0.5rem' }}>学习中心</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '2rem' }}>实时追踪您的测试记录、积分增长及参数化设计成果。</p>

            {/* Grid 4 Stats Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.25rem', marginBottom: '2rem' }}>
              <div className="glassmorphism-card" style={statCardStyle('rgba(0, 47, 167, 0.05)', 'var(--klein-blue)')}>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 500 }}>今日积分</span>
                <span style={{ fontSize: '2.25rem', fontWeight: 700, marginBlock: '0.5rem' }}>128</span>
                <span style={{ fontSize: '0.75rem', color: '#07c160', fontWeight: 600 }}>+12 本周新增</span>
              </div>
              <div className="glassmorphism-card" style={statCardStyle('rgba(155, 89, 182, 0.05)', '#9b59b6')}>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 500 }}>累计积分</span>
                <span style={{ fontSize: '2.25rem', fontWeight: 700, marginBlock: '0.5rem' }}>13</span>
                <span style={{ fontSize: '0.75rem', color: '#07c160', fontWeight: 600 }}>较上周提升 5%</span>
              </div>
              <div className="glassmorphism-card" style={statCardStyle('rgba(46, 204, 113, 0.05)', '#2ecc71')}>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 500 }}>今日测试</span>
                <span style={{ fontSize: '2.25rem', fontWeight: 700, marginBlock: '0.5rem' }}>1</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>今日目标: 1 课</span>
              </div>
              <div className="glassmorphism-card" style={statCardStyle('rgba(241, 196, 15, 0.05)', '#f1c40f')}>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 500 }}>累计测试已完结</span>
                <span style={{ fontSize: '2.25rem', fontWeight: 700, marginBlock: '0.5rem' }}>5</span>
                <span style={{ fontSize: '0.75rem', color: '#ff453a', fontWeight: 600 }}>待测试：2 课</span>
              </div>
            </div>

            {/* Charts Section */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem', marginBottom: '2.5rem' }}>
              
              {/* Line Chart Component (Cumulative Test Results) */}
              <div className="glassmorphism-card" style={{ padding: '1.75rem', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 600 }}>测试累计完成趋势</h3>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>最近六个月</span>
                </div>
                {/* Responsive SVG Line Chart */}
                <div style={{ width: '100%', height: '240px' }}>
                  <svg viewBox="0 0 400 220" width="100%" height="100%">
                    {/* Grid Lines */}
                    <line x1="40" y1="20" x2="380" y2="20" stroke="var(--border-color)" strokeWidth="0.5" />
                    <line x1="40" y1="60" x2="380" y2="60" stroke="var(--border-color)" strokeWidth="0.5" />
                    <line x1="40" y1="100" x2="380" y2="100" stroke="var(--border-color)" strokeWidth="0.5" />
                    <line x1="40" y1="140" x2="380" y2="140" stroke="var(--border-color)" strokeWidth="0.5" />
                    <line x1="40" y1="180" x2="380" y2="180" stroke="var(--border-color)" strokeWidth="1" />

                    {/* Y Axis Labels */}
                    <text x="30" y="24" fill="var(--text-muted)" fontSize="9" textAnchor="end">15</text>
                    <text x="30" y="64" fill="var(--text-muted)" fontSize="9" textAnchor="end">10</text>
                    <text x="30" y="104" fill="var(--text-muted)" fontSize="9" textAnchor="end">5</text>
                    <text x="30" y="184" fill="var(--text-muted)" fontSize="9" textAnchor="end">0</text>

                    {/* X Axis Labels */}
                    <text x="60" y="200" fill="var(--text-muted)" fontSize="10" textAnchor="middle">一月</text>
                    <text x="120" y="200" fill="var(--text-muted)" fontSize="10" textAnchor="middle">二月</text>
                    <text x="180" y="200" fill="var(--text-muted)" fontSize="10" textAnchor="middle">三月</text>
                    <text x="240" y="200" fill="var(--text-muted)" fontSize="10" textAnchor="middle">四月</text>
                    <text x="300" y="200" fill="var(--text-muted)" fontSize="10" textAnchor="middle">五月</text>
                    <text x="360" y="200" fill="var(--text-muted)" fontSize="10" textAnchor="middle">六月</text>

                    {/* Gradient Area under Line */}
                    <defs>
                      <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="var(--klein-blue)" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="var(--klein-blue)" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <path 
                      d="M 60 180 Q 90 100 120 120 T 180 60 T 240 80 T 300 40 T 360 30 L 360 180 Z" 
                      fill="url(#chartGrad)" 
                    />

                    {/* Line Path */}
                    <path 
                      d="M 60 180 Q 90 100 120 120 T 180 60 T 240 80 T 300 40 T 360 30" 
                      fill="none" 
                      stroke="var(--klein-blue)" 
                      strokeWidth="3.5" 
                      strokeLinecap="round"
                    />

                    {/* Data Points */}
                    <circle cx="60" cy="180" r="4.5" fill="var(--bg-primary)" stroke="var(--klein-blue)" strokeWidth="2.5" />
                    <circle cx="120" cy="120" r="4.5" fill="var(--bg-primary)" stroke="var(--klein-blue)" strokeWidth="2.5" />
                    <circle cx="180" cy="60" r="4.5" fill="var(--bg-primary)" stroke="var(--klein-blue)" strokeWidth="2.5" />
                    <circle cx="240" cy="80" r="4.5" fill="var(--bg-primary)" stroke="var(--klein-blue)" strokeWidth="2.5" />
                    <circle cx="300" cy="40" r="4.5" fill="var(--bg-primary)" stroke="var(--klein-blue)" strokeWidth="2.5" />
                    <circle cx="360" cy="30" r="4.5" fill="var(--bg-primary)" stroke="var(--klein-blue)" strokeWidth="2.5" />
                  </svg>
                </div>
              </div>

              {/* Radar Chart Component (Skill Evaluation) */}
              <div className="glassmorphism-card" style={{ padding: '1.75rem', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 600 }}>创客技能多维度评估</h3>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>雷达图解算</span>
                </div>
                {/* SVG Radar Chart */}
                <div style={{ width: '100%', height: '240px', display: 'flex', justifyContent: 'center' }}>
                  <svg viewBox="0 0 220 220" width="100%" height="100%">
                    {/* Ring helper circles */}
                    <circle cx="110" cy="110" r="90" stroke="var(--border-color)" strokeWidth="0.75" fill="none" />
                    <circle cx="110" cy="110" r="60" stroke="var(--border-color)" strokeWidth="0.75" fill="none" strokeDasharray="3 3" />
                    <circle cx="110" cy="110" r="30" stroke="var(--border-color)" strokeWidth="0.75" fill="none" />

                    {/* Axes lines */}
                    <line x1="110" y1="20" x2="110" y2="200" stroke="var(--border-color)" strokeWidth="1" />
                    <line x1="32" y1="65" x2="188" y2="155" stroke="var(--border-color)" strokeWidth="1" />
                    <line x1="32" y1="155" x2="188" y2="65" stroke="var(--border-color)" strokeWidth="1" />

                    {/* Text Labels */}
                    <text x="110" y="14" fill="var(--text-primary)" fontSize="8.5" textAnchor="middle" fontWeight="bold">参数化建模</text>
                    <text x="194" y="68" fill="var(--text-primary)" fontSize="8.5" textAnchor="start" fontWeight="bold">小车系统</text>
                    <text x="194" y="158" fill="var(--text-primary)" fontSize="8.5" textAnchor="start" fontWeight="bold">仿真调试</text>
                    <text x="110" y="212" fill="var(--text-primary)" fontSize="8.5" textAnchor="middle" fontWeight="bold">线控底盘</text>
                    <text x="26" y="158" fill="var(--text-primary)" fontSize="8.5" textAnchor="end" fontWeight="bold">加工工艺</text>
                    <text x="26" y="68" fill="var(--text-primary)" fontSize="8.5" textAnchor="end" fontWeight="bold">文档批注</text>

                    {/* Radar polygon path - User data */}
                    {/* Center = (110, 110). Radius = 90 */}
                    {/* Top: param modeling = 85% -> x:110, y:110 - 90*0.85 = 33.5 */}
                    {/* Top-Right: robot = 75% -> x:110 + 90*0.75*cos30(0.866) = 168.5, y:110 - 90*0.75*sin30(0.5) = 76 */}
                    {/* Bottom-Right: sim = 90% -> x: 110 + 90*0.9*cos30 = 180, y: 110 + 90*0.9*sin30 = 150.5 */}
                    {/* Bottom: chassis = 65% -> x: 110, y: 110 + 90*0.65 = 168.5 */}
                    {/* Bottom-Left: mfg = 70% -> x: 110 - 90*0.7*cos30 = 55.4, y: 110 + 90*0.7*sin30 = 141.5 */}
                    {/* Top-Left: docs = 80% -> x: 110 - 90*0.8*cos30 = 47.7, y: 110 - 90*0.8*sin30 = 74 */}
                    
                    <polygon 
                      points="110,33.5 160.5,76.2 180.2,150.5 110,168.5 55.4,141.5 47.7,74"
                      fill="var(--klein-blue-glow)"
                      stroke="var(--klein-blue)"
                      strokeWidth="2.5"
                    />

                    {/* Data markers */}
                    <circle cx="110" cy="33.5" r="3.5" fill="#ffffff" stroke="var(--klein-blue)" strokeWidth="1.5" />
                    <circle cx="160.5" cy="76.2" r="3.5" fill="#ffffff" stroke="var(--klein-blue)" strokeWidth="1.5" />
                    <circle cx="180.2" cy="150.5" r="3.5" fill="#ffffff" stroke="var(--klein-blue)" strokeWidth="1.5" />
                    <circle cx="110" cy="168.5" r="3.5" fill="#ffffff" stroke="var(--klein-blue)" strokeWidth="1.5" />
                    <circle cx="55.4" cy="141.5" r="3.5" fill="#ffffff" stroke="var(--klein-blue)" strokeWidth="1.5" />
                    <circle cx="47.7" cy="74" r="3.5" fill="#ffffff" stroke="var(--klein-blue)" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>

            </div>

            {/* Design & Task Section (Split like HUIYAO layout) */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '2rem' }}>
              
              {/* Custom designs (我的设计 - radar cards) */}
              <div style={{ gridColumn: 'span 8' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.25rem' }}>我的设计</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    { name: 'Sophicar-Alpha-V1', date: '2026/5/01', scores: [80, 70, 90, 85, 75], desc: '双轮差速参数化智能避障车，支持ROS2底盘通信管线与电机标定。' },
                    { name: 'Mecanum-Base-Chassis', date: '2026/5/02', scores: [95, 60, 80, 90, 85], desc: '四轮麦克纳姆轮底盘，集成了运动学逆解求解器与三维姿态姿态解析。' },
                    { name: '分形热流换热器 v1.2', date: '2026/5/03', scores: [85, 90, 65, 80, 95], desc: '基于SDF算法生成的分形微通道冷板，高精度体素格栅，适应金属3D打印。' }
                  ].map((design, index) => (
                    <div 
                      key={index} 
                      className="glassmorphism-card"
                      style={{
                        padding: '1.25rem',
                        borderRadius: '14px',
                        border: '1px solid var(--border-color)',
                        display: 'flex',
                        gap: '1.25rem',
                        alignItems: 'center'
                      }}
                    >
                      {/* Left: Dummy Image & Text */}
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                          <span style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)' }}>{design.name}</span>
                          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{design.date}</span>
                        </div>
                        <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: '1.4', marginBottom: '0.75rem' }}>
                          {design.desc}
                        </p>
                        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                          <span style={{ fontSize: '0.7rem', padding: '0.2rem 0.5rem', borderRadius: '4px', backgroundColor: 'var(--border-color)', color: 'var(--text-secondary)' }}>参数化设计</span>
                          <span style={{ fontSize: '0.7rem', padding: '0.2rem 0.5rem', borderRadius: '4px', backgroundColor: 'var(--klein-blue-glow)', color: 'var(--klein-blue)' }}>实体验证就绪</span>
                        </div>
                      </div>

                      {/* Right: Small SVG Radar Chart representing design metrics */}
                      <div style={{ width: '100px', height: '100px', flexShrink: 0 }}>
                        <svg viewBox="0 0 100 100" width="100%" height="100%">
                          <circle cx="50" cy="50" r="40" stroke="var(--border-color)" strokeWidth="0.5" fill="none" />
                          <circle cx="50" cy="50" r="25" stroke="var(--border-color)" strokeWidth="0.5" fill="none" strokeDasharray="2 2" />
                          
                          {/* Inner metrics polygon: 5 dimensions */}
                          {/* 0: (50, 50-40*s0), 1: (50+40*s1*cos18, 50-40*s1*sin18), ... */}
                          {/* Simplified points representing mock score polygon */}
                          <polygon 
                            points="50,22 84,40 68,82 28,74 18,44" 
                            fill="rgba(0, 47, 167, 0.2)" 
                            stroke="var(--klein-blue)" 
                            strokeWidth="1.5" 
                          />
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tasks List (我的任务) */}
              <div style={{ gridColumn: 'span 4' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.25rem' }}>我的任务</h3>
                <div className="glassmorphism-card" style={{ padding: '1.25rem', borderRadius: '16px', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {tasks.map((task) => (
                    <div 
                      key={task.id} 
                      onClick={() => handleToggleTaskStatus(task.id)}
                      style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'space-between',
                        padding: '0.75rem', 
                        borderRadius: '10px', 
                        backgroundColor: 'var(--bg-secondary)',
                        cursor: 'pointer',
                        transition: 'background-color 0.2s',
                        border: task.status === 'done' ? '1px solid rgba(7,193,96,0.1)' : '1px solid transparent'
                      }}
                    >
                      <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', overflow: 'hidden' }}>
                        <div style={{
                          width: '18px',
                          height: '18px',
                          borderRadius: '4px',
                          border: '1.5px solid var(--text-muted)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: task.status === 'done' ? 'var(--klein-blue)' : 'transparent',
                          borderColor: task.status === 'done' ? 'var(--klein-blue)' : 'var(--text-muted)',
                          color: 'white'
                        }}>
                          {task.status === 'done' && <Check size={12} />}
                          {task.status === 'progress' && <div style={{ width: '6px', height: '6px', backgroundColor: '#e67e22', borderRadius: '50%' }} />}
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                          <span style={{ 
                            fontSize: '0.8rem', 
                            fontWeight: 600, 
                            textDecoration: task.status === 'done' ? 'line-through' : 'none',
                            color: task.status === 'done' ? 'var(--text-muted)' : 'var(--text-primary)',
                            whiteSpace: 'nowrap',
                            textOverflow: 'ellipsis',
                            overflow: 'hidden'
                          }}>
                            {task.title}
                          </span>
                          <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{task.subtitle}</span>
                        </div>
                      </div>
                      <span style={{
                        fontSize: '0.65rem',
                        padding: '0.15rem 0.4rem',
                        borderRadius: '4px',
                        fontWeight: 600,
                        backgroundColor: task.status === 'done' ? 'rgba(7,193,96,0.1)' : task.status === 'progress' ? 'rgba(230,126,34,0.1)' : 'rgba(0,0,0,0.05)',
                        color: task.status === 'done' ? '#07c160' : task.status === 'progress' ? '#e67e22' : 'var(--text-muted)'
                      }}>
                        {task.status === 'done' ? '已完成' : task.status === 'progress' ? '进行中' : '待办'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        )}

        {/* Tab 3: Folders */}
        {activeTab === 'folders' && (
          <div style={{ animation: 'fadeIn 0.3s ease' }}>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '0.5rem' }}>文件夹</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '2rem' }}>项目设计工程文件、算法仿真数据以及 G-Code 调试脚本。</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
              {[
                { name: 'ROS2_Control_Node', size: '15 MB', files: 12, date: '2026-06-01', desc: '差速底盘底盘控制器节点，包含ROS2话题订阅与Odom发布逻辑。' },
                { name: 'Chassis_Simulation_3D', size: '42 MB', files: 8, date: '2026-06-03', desc: 'Three.js运动控制仿真环境，支持小车实时轨迹粒子流展示。' },
                { name: 'Anodizing_Color_Codes', size: '2 MB', files: 4, date: '2026-06-05', desc: '符合阳极氧化厚度标准的CMF配色配方文档与金属材质预览。' },
                { name: 'STL_Models_To_Quote', size: '88 MB', files: 6, date: '2026-06-06', desc: 'stl分析报价工具生成的结构分析缓存，包含体积与切片估算。' }
              ].map((folder, index) => (
                <div 
                  key={index} 
                  className="glassmorphism-card"
                  style={{
                    padding: '1.5rem',
                    borderRadius: '16px',
                    border: '1px solid var(--border-color)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '180px'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                      <div style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '6px',
                        backgroundColor: 'rgba(0, 47, 167, 0.08)',
                        color: 'var(--klein-blue)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        📁
                      </div>
                      <span style={{ fontSize: '0.95rem', fontWeight: 600 }}>{folder.name}</span>
                    </div>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>{folder.desc}</p>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--border-color)', paddingTop: '0.75rem', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                    <span>{folder.files} 个文件 · {folder.size}</span>
                    <span>更新于 {folder.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Team */}
        {activeTab === 'team' && (
          <div style={{ animation: 'fadeIn 0.3s ease' }}>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '0.5rem' }}>我的团队</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '2rem' }}>协作成员列表与系统设计权限状态分配。</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '800px' }}>
              {[
                { name: '李华', role: '团队负责人 (Team Leader)', email: 'lihua@sophigo.com', desc: '主攻ROS2控制算法与物理实体原型结构设计。', initials: 'LH' },
                { name: '张三', role: '电子电路与ROS2工程师', email: 'zhangsan@sophigo.com', desc: '负责底盘硬件PCB打样及电机标定驱动。', initials: 'ZS' },
                { name: '李四', role: 'CMF设计师', email: 'lisi@sophigo.com', desc: '负责表面材质打样、Klein蓝色彩标准对色规范。', initials: 'LS' }
              ].map((member, index) => (
                <div 
                  key={index} 
                  className="glassmorphism-card"
                  style={{
                    padding: '1.25rem 1.5rem',
                    borderRadius: '16px',
                    border: '1px solid var(--border-color)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <div style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      backgroundColor: index === 0 ? 'var(--klein-blue)' : 'var(--bg-secondary)',
                      color: index === 0 ? 'white' : 'var(--text-primary)',
                      border: '1px solid var(--border-color)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 600
                    }}>
                      {member.initials}
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ fontSize: '0.95rem', fontWeight: 600 }}>{member.name}</span>
                        <span style={{ fontSize: '0.7rem', padding: '0.15rem 0.4rem', borderRadius: '4px', backgroundColor: 'var(--border-color)', color: 'var(--text-secondary)' }}>
                          {member.role}
                        </span>
                      </div>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{member.email}</span>
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>{member.desc}</p>
                    </div>
                  </div>
                  <ChevronRight size={18} style={{ color: 'var(--text-muted)' }} />
                </div>
              ))}
            </div>
          </div>
        )}

      </main>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

const navBtnStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
  width: '100%',
  padding: '0.75rem 1rem',
  borderRadius: '10px',
  border: 'none',
  fontSize: '0.9rem',
  fontWeight: 500,
  cursor: 'pointer',
  transition: 'all 0.2s',
  textAlign: 'left',
  fontFamily: 'var(--font-sans)'
};

const inputGroupStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.45rem'
};

const labelStyle = {
  fontSize: '0.8rem',
  fontWeight: 500,
  color: 'var(--text-secondary)'
};

const inputStyle = {
  padding: '0.75rem 1rem',
  borderRadius: '10px',
  border: '1px solid var(--border-color)',
  background: 'var(--bg-secondary)',
  color: 'var(--text-primary)',
  fontSize: '0.9rem',
  outline: 'none',
  transition: 'border-color 0.2s',
  fontFamily: 'var(--font-sans)'
};

const switchStyle = {
  position: 'relative',
  display: 'inline-block',
  width: '44px',
  height: '24px',
  borderRadius: '9999px',
  backgroundColor: 'var(--border-color)',
  cursor: 'pointer',
  padding: '2px',
  boxSizing: 'border-box'
};

const switchSliderStyle = {
  display: 'block',
  width: '20px',
  height: '20px',
  borderRadius: '50%',
  backgroundColor: 'white',
  transition: 'transform 0.2s ease, background-color 0.2s ease'
};

const statCardStyle = (bgColor, tintColor) => ({
  padding: '1.25rem',
  borderRadius: '14px',
  border: '1px solid var(--border-color)',
  backgroundColor: bgColor,
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  borderLeft: `3px solid ${tintColor}`
});
