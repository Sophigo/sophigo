import React, { useState } from 'react';
import { X, Mail, Lock, User, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';

export default function AuthModal({ isOpen, onClose, onLoginSuccess }) {
  const [activeTab, setActiveTab] = useState('login'); // 'login' or 'register'
  
  // Input fields
  const [email, setEmail] = useState('bob@sophigo.com');
  const [password, setPassword] = useState('sophigo0606');
  const [username, setUsername] = useState('');
  
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      setErrorMsg('请填写邮箱和密码');
      return;
    }

    setLoading(true);
    setErrorMsg('');
    setSuccessMsg('');

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password: password.trim()
      });

      if (error) throw error;

      setSuccessMsg('登录成功！');
      setTimeout(() => {
        setSuccessMsg('');
        onLoginSuccess(data.session);
        onClose();
      }, 1000);
    } catch (err) {
      console.error(err);
      setErrorMsg(err.message || '登录失败，请检查邮箱和密码');
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim() || !username.trim()) {
      setErrorMsg('请完整填写所有注册信息');
      return;
    }
    if (password.length < 6) {
      setErrorMsg('密码长度不能少于 6 位');
      return;
    }

    setLoading(true);
    setErrorMsg('');
    setSuccessMsg('');

    try {
      const { data, error } = await supabase.auth.signUp({
        email: email.trim(),
        password: password.trim(),
        options: {
          data: {
            username: username.trim(),
            nickname: username.trim(),
            course_permissions: ['Fab课程', 'AI应用基础'],
            comment_permission: true
          }
        }
      });

      if (error) throw error;

      setSuccessMsg('注册成功！已为您自动登录');
      setTimeout(() => {
        setSuccessMsg('');
        onLoginSuccess(data.session);
        onClose();
      }, 1200);
    } catch (err) {
      console.error(err);
      setErrorMsg(err.message || '注册失败，请稍后重试');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      backdropFilter: 'blur(10px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '1.5rem'
    }}>
      <div 
        className="glassmorphism-card"
        style={{
          width: '100%',
          maxWidth: '400px',
          borderRadius: '24px',
          padding: '2.25rem',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.3)',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          animation: 'modalScaleIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          color: 'var(--text-primary)'
        }}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--text-secondary)',
            padding: '0.25rem',
            borderRadius: '50%',
            transition: 'background-color 0.2s'
          }}
          className="close-hover"
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>用户认证</h2>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Sophigo - AI 时代的工程创新方法</p>
        </div>

        {/* Tabs switcher */}
        <div style={{
          display: 'flex',
          borderRadius: '12px',
          backgroundColor: 'var(--bg-secondary)',
          padding: '4px',
          marginBottom: '2rem',
          border: '1px solid var(--border-color)'
        }}>
          <button 
            onClick={() => { setActiveTab('login'); setErrorMsg(''); setSuccessMsg(''); }}
            style={{
              ...tabBtnStyle,
              backgroundColor: activeTab === 'login' ? 'var(--bg-primary)' : 'transparent',
              color: activeTab === 'login' ? 'var(--text-primary)' : 'var(--text-secondary)',
              boxShadow: activeTab === 'login' ? '0 2px 8px rgba(0,0,0,0.06)' : 'none'
            }}
          >
            邮箱登录
          </button>
          <button 
            onClick={() => { setActiveTab('register'); setErrorMsg(''); setSuccessMsg(''); }}
            style={{
              ...tabBtnStyle,
              backgroundColor: activeTab === 'register' ? 'var(--bg-primary)' : 'transparent',
              color: activeTab === 'register' ? 'var(--text-primary)' : 'var(--text-secondary)',
              boxShadow: activeTab === 'register' ? '0 2px 8px rgba(0,0,0,0.06)' : 'none'
            }}
          >
            免费注册
          </button>
        </div>

        {/* Tab content: Login */}
        {activeTab === 'login' && (
          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={inputGroupStyle}>
              <label style={labelStyle}>电子邮箱</label>
              <div style={{ position: 'relative' }}>
                <Mail size={16} style={inputIconStyle} />
                <input 
                  type="email" 
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ ...inputStyle, paddingLeft: '2.5rem' }}
                />
              </div>
            </div>

            <div style={inputGroupStyle}>
              <label style={labelStyle}>登录密码</label>
              <div style={{ position: 'relative' }}>
                <Lock size={16} style={inputIconStyle} />
                <input 
                  type="password" 
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ ...inputStyle, paddingLeft: '2.5rem' }}
                />
              </div>
            </div>

            <button 
              type="submit" 
              className="btn-cta" 
              disabled={loading}
              style={{
                width: '100%',
                padding: '0.85rem',
                fontSize: '0.95rem',
                borderRadius: '12px',
                marginTop: '0.75rem'
              }}
            >
              {loading ? '正在登录...' : '登 录'}
            </button>
          </form>
        )}

        {/* Tab content: Register */}
        {activeTab === 'register' && (
          <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={inputGroupStyle}>
              <label style={labelStyle}>用户名 / 昵称</label>
              <div style={{ position: 'relative' }}>
                <User size={16} style={inputIconStyle} />
                <input 
                  type="text" 
                  placeholder="请输入您的姓名/昵称"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  style={{ ...inputStyle, paddingLeft: '2.5rem' }}
                />
              </div>
            </div>

            <div style={inputGroupStyle}>
              <label style={labelStyle}>电子邮箱</label>
              <div style={{ position: 'relative' }}>
                <Mail size={16} style={inputIconStyle} />
                <input 
                  type="email" 
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ ...inputStyle, paddingLeft: '2.5rem' }}
                />
              </div>
            </div>

            <div style={inputGroupStyle}>
              <label style={labelStyle}>设置密码</label>
              <div style={{ position: 'relative' }}>
                <Lock size={16} style={inputIconStyle} />
                <input 
                  type="password" 
                  placeholder="最少6位密码"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ ...inputStyle, paddingLeft: '2.5rem' }}
                />
              </div>
            </div>

            <button 
              type="submit" 
              className="btn-cta" 
              disabled={loading}
              style={{
                width: '100%',
                padding: '0.85rem',
                fontSize: '0.95rem',
                borderRadius: '12px',
                marginTop: '0.75rem'
              }}
            >
              {loading ? '正在注册...' : '注 册 并 登 录'}
            </button>
          </form>
        )}

        {/* Error notification */}
        {errorMsg && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            backgroundColor: 'rgba(255, 69, 58, 0.1)',
            border: '1px solid rgba(255, 69, 58, 0.2)',
            color: '#ff453a',
            padding: '0.75rem 1rem',
            borderRadius: '10px',
            fontSize: '0.8rem',
            marginTop: '1.25rem'
          }}>
            <ShieldAlert size={16} />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Success notification */}
        {successMsg && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            backgroundColor: 'rgba(7, 193, 96, 0.1)',
            border: '1px solid rgba(7, 193, 96, 0.2)',
            color: '#07c160',
            padding: '0.75rem 1rem',
            borderRadius: '10px',
            fontSize: '0.8rem',
            marginTop: '1.25rem'
          }}>
            <CheckCircle2 size={16} />
            <span>{successMsg}</span>
          </div>
        )}
      </div>

      <style>{`
        @keyframes modalScaleIn {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .close-hover:hover {
          background-color: var(--border-color);
        }
      `}</style>
    </div>
  );
}

const tabBtnStyle = {
  flex: 1,
  padding: '0.6rem',
  borderRadius: '8px',
  border: 'none',
  cursor: 'pointer',
  fontSize: '0.85rem',
  fontWeight: 500,
  transition: 'all 0.2s ease',
  fontFamily: 'var(--font-sans)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
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
  width: '100%',
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

const inputIconStyle = {
  position: 'absolute',
  left: '0.85rem',
  top: '50%',
  transform: 'translateY(-50%)',
  color: 'var(--text-muted)'
};
