import React, { useState, useEffect } from 'react';
import { X, Smartphone, QrCode, ShieldAlert } from 'lucide-react';

export default function AuthModal({ isOpen, onClose, onLoginSuccess }) {
  const [activeTab, setActiveTab] = useState('wechat'); // 'wechat' or 'sms'
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const [countdown, setCountdown] = useState(0);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let timer;
    if (countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [countdown]);

  if (!isOpen) return null;

  const handleSendCode = () => {
    if (!phone || phone.length < 11) {
      setErrorMsg('请输入正确的11位手机号码');
      return;
    }
    setErrorMsg('');
    setCountdown(60);
    // In demo mode, notify user what the code is
    setSuccessMsg('验证码已发送，测试验证码为：123456');
    setTimeout(() => setSuccessMsg(''), 6000);
  };

  const handleSMSLogin = async (e) => {
    e.preventDefault();
    if (!phone || phone.length < 11) {
      setErrorMsg('请输入正确的11位手机号码');
      return;
    }
    if (!code) {
      setErrorMsg('请输入验证码');
      return;
    }

    setLoading(true);
    setErrorMsg('');

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phone, code }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.detail || '登录失败');
      }

      localStorage.setItem('token', data.token);
      onLoginSuccess(data.token);
      setSuccessMsg('登录成功！');
      setTimeout(() => {
        setSuccessMsg('');
        onClose();
      }, 1000);
    } catch (err) {
      setErrorMsg(err.message || '网络错误，请稍后再试');
    } finally {
      setLoading(false);
    }
  };

  const triggerWeChatSimulatedLogin = async () => {
    setLoading(true);
    setErrorMsg('');
    setSuccessMsg('正在读取微信授权...');

    // Simulate mobile scanning delay
    setTimeout(async () => {
      try {
        const response = await fetch('/api/auth/wechat-login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ code: 'wechat_code_123456' }),
        });

        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.detail || '微信授权登录失败');
        }

        localStorage.setItem('token', data.token);
        onLoginSuccess(data.token);
        setSuccessMsg('微信授权成功！已安全登录');
        setTimeout(() => {
          setSuccessMsg('');
          onClose();
        }, 1000);
      } catch (err) {
        setErrorMsg(err.message || '微信登录失败，请尝试手机登录');
      } finally {
        setLoading(false);
      }
    }, 1800);
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.45)',
      backdropFilter: 'blur(8px)',
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
          maxWidth: '420px',
          borderRadius: '24px',
          padding: '2.25rem',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
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
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Sophigo - AI 时代的生存与创新工具</p>
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
            onClick={() => { setActiveTab('wechat'); setErrorMsg(''); }}
            style={{
              flex: 1,
              padding: '0.6rem',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '0.85rem',
              fontWeight: 500,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              backgroundColor: activeTab === 'wechat' ? 'var(--bg-primary)' : 'transparent',
              color: activeTab === 'wechat' ? 'var(--text-primary)' : 'var(--text-secondary)',
              boxShadow: activeTab === 'wechat' ? '0 2px 8px rgba(0,0,0,0.06)' : 'none',
              transition: 'all 0.2s ease'
            }}
          >
            <QrCode size={16} />
            微信扫码
          </button>
          <button 
            onClick={() => { setActiveTab('sms'); setErrorMsg(''); }}
            style={{
              flex: 1,
              padding: '0.6rem',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '0.85rem',
              fontWeight: 500,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              backgroundColor: activeTab === 'sms' ? 'var(--bg-primary)' : 'transparent',
              color: activeTab === 'sms' ? 'var(--text-primary)' : 'var(--text-secondary)',
              boxShadow: activeTab === 'sms' ? '0 2px 8px rgba(0,0,0,0.06)' : 'none',
              transition: 'all 0.2s ease'
            }}
          >
            <Smartphone size={16} />
            验证码登录
          </button>
        </div>

        {/* Tab content: WeChat */}
        {activeTab === 'wechat' && (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '1.25rem'
          }}>
            {/* Simulated QR Code Wrapper */}
            <div 
              onClick={triggerWeChatSimulatedLogin}
              style={{
                position: 'relative',
                width: '180px',
                height: '180px',
                padding: '12px',
                borderRadius: '16px',
                backgroundColor: '#ffffff',
                border: '1px solid var(--border-color)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.05)'
              }}
              className="qr-container"
            >
              {/* Fake QR Graphic using grids & custom shapes */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '8px',
                width: '100%',
                height: '100%',
                opacity: loading ? 0.3 : 1,
                transition: 'opacity 0.2s'
              }}>
                <div style={qrCornerStyle}></div>
                <div style={qrPatternStyle}></div>
                <div style={qrCornerStyle}></div>
                <div style={qrPatternStyle}></div>
                <div style={{...qrPatternStyle, borderRadius: '50%'}}></div>
                <div style={qrPatternStyle}></div>
                <div style={qrCornerStyle}></div>
                <div style={qrPatternStyle}></div>
                <div style={{backgroundColor: 'var(--klein-blue)', borderRadius: '4px'}}></div>
              </div>

              {/* Scanning Active Laser line */}
              {!loading && (
                <div style={{
                  position: 'absolute',
                  left: 0,
                  width: '100%',
                  height: '2px',
                  backgroundColor: '#07c160',
                  boxShadow: '0 0 8px #07c160',
                  animation: 'qrScanLine 2s infinite linear'
                }} />
              )}

              {loading && (
                <div style={{
                  position: 'absolute',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <div className="spinner" />
                </div>
              )}
            </div>

            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
              微信扫一扫以安全登录
              <br />
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>(点击二维码区域模拟手机扫码)</span>
            </p>
          </div>
        )}

        {/* Tab content: SMS */}
        {activeTab === 'sms' && (
          <form onSubmit={handleSMSLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={inputGroupStyle}>
              <label style={labelStyle}>手机号码</label>
              <input 
                type="tel" 
                maxLength={11}
                placeholder="请输入中国大陆手机号"
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                style={inputStyle}
              />
            </div>

            <div style={inputGroupStyle}>
              <label style={labelStyle}>短信验证码</label>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <input 
                  type="text" 
                  maxLength={6}
                  placeholder="6位验证码"
                  value={code}
                  onChange={(e) => setCode(e.target.value.replace(/\D/g, ''))}
                  style={{ ...inputStyle, flex: 1 }}
                />
                <button
                  type="button"
                  disabled={countdown > 0}
                  onClick={handleSendCode}
                  style={{
                    padding: '0.75rem 1rem',
                    borderRadius: '10px',
                    border: '1px solid var(--border-color)',
                    background: countdown > 0 ? 'var(--bg-secondary)' : 'var(--bg-primary)',
                    color: countdown > 0 ? 'var(--text-muted)' : 'var(--text-primary)',
                    fontSize: '0.8rem',
                    fontWeight: 500,
                    cursor: countdown > 0 ? 'not-allowed' : 'pointer',
                    transition: 'all 0.2s',
                    whiteSpace: 'nowrap'
                  }}
                  className="btn-code"
                >
                  {countdown > 0 ? `${countdown}s 后重试` : '获取验证码'}
                </button>
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
              {loading ? '正在登录...' : '立 即 登 录'}
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
            backgroundColor: 'rgba(7, 193, 96, 0.1)',
            border: '1px solid rgba(7, 193, 96, 0.2)',
            color: '#07c160',
            padding: '0.75rem 1rem',
            borderRadius: '10px',
            fontSize: '0.8rem',
            marginTop: '1.25rem',
            textAlign: 'center'
          }}>
            {successMsg}
          </div>
        )}
      </div>

      <style>{`
        @keyframes modalScaleIn {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes qrScanLine {
          0% { top: 12px; }
          50% { top: 168px; }
          100% { top: 12px; }
        }
        .close-hover:hover {
          background-color: var(--border-color);
        }
        .qr-container:hover {
          box-shadow: 0 12px 32px rgba(0,0,0,0.08) !important;
        }
        .btn-code:hover:not(:disabled) {
          border-color: var(--text-primary);
        }
        .spinner {
          width: 32px;
          height: 32px;
          border: 3px solid var(--border-color);
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

// Inline custom QR styling elements
const qrCornerStyle = {
  border: '6px solid #1d1d1f',
  borderRadius: '8px',
  width: '100%',
  height: '100%'
};

const qrPatternStyle = {
  backgroundColor: '#f5f5f7',
  borderRadius: '4px',
  width: '100%',
  height: '100%'
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
