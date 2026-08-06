import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { X, Lock, Mail, Shield, User, AlertCircle, Building, ArrowRight } from 'lucide-react';

export const AuthModal = ({ isOpen, onClose, defaultMode = 'LOGIN' }) => {
  const { loginWithEmail, authError, clearAuthError, switchRole } = useAuth();
  
  const [authMode, setAuthMode] = useState(defaultMode); // 'LOGIN' | 'REGISTER'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [company, setCompany] = useState('');
  const [targetRole, setTargetRole] = useState('USER'); // 'USER' | 'ADMIN'
  const [localError, setLocalError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLocalError('');
    clearAuthError();

    if (!email.trim()) {
      setLocalError('Vui lòng nhập Email.');
      return;
    }

    if (authMode === 'REGISTER') {
      if (!fullName.trim()) {
        setLocalError('Vui lòng nhập Họ và Tên của bạn.');
        return;
      }
      // Register user and log in
      const success = loginWithEmail(email.trim(), password, 'USER');
      if (success) {
        onClose();
        resetForm();
      }
    } else {
      const success = loginWithEmail(email.trim(), password, targetRole);
      if (success) {
        onClose();
        resetForm();
      }
    }
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
    setFullName('');
    setCompany('');
    setLocalError('');
  };

  const handleQuickAdminLogin = () => {
    setEmail('quanganhqb04@gmail.com');
    setTargetRole('ADMIN');
    setAuthMode('LOGIN');
    setLocalError('');
  };

  const handleQuickClientLogin = () => {
    setEmail('marcus@vancetech.io');
    setTargetRole('USER');
    setAuthMode('LOGIN');
    setLocalError('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn font-sans">
      <div
        className="bg-studio-900 border border-white/10 rounded-2xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => {
            clearAuthError();
            setLocalError('');
            onClose();
          }}
          className="absolute top-4 right-4 text-slate-400 hover:text-white"
        >
          <X size={18} />
        </button>

        <div className="text-center space-y-2 mb-6">
          <div className="w-12 h-12 rounded-xl bg-brand-primary/10 border border-brand-primary/30 text-brand-primary flex items-center justify-center mx-auto shadow-glow-primary">
            <Lock size={22} />
          </div>
          <h3 className="text-xl font-bold text-white">
            {authMode === 'LOGIN' ? 'Đăng Nhập Nexus Studio' : 'Tạo Tài Khoản Client Mới'}
          </h3>
          <p className="text-xs text-slate-400 font-mono">
            {authMode === 'LOGIN' ? 'Truy cập Client Portal hoặc Admin Control Center' : 'Đăng ký tài khoản để theo dõi tiến độ dự án của bạn'}
          </p>
        </div>

        {/* Auth Mode Toggle Tabs (Login vs Register) */}
        <div className="flex border-b border-slate-800 mb-6">
          <button
            type="button"
            onClick={() => {
              setAuthMode('LOGIN');
              setLocalError('');
              clearAuthError();
            }}
            className={`flex-1 py-2.5 text-xs font-semibold font-mono transition-all text-center border-b-2 ${
              authMode === 'LOGIN'
                ? 'border-brand-primary text-white bg-studio-950/50'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Đăng Nhập (Login)
          </button>
          <button
            type="button"
            onClick={() => {
              setAuthMode('REGISTER');
              setTargetRole('USER');
              setLocalError('');
              clearAuthError();
            }}
            className={`flex-1 py-2.5 text-xs font-semibold font-mono transition-all text-center border-b-2 ${
              authMode === 'REGISTER'
                ? 'border-brand-primary text-white bg-studio-950/50'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Đăng Ký (Register)
          </button>
        </div>

        {/* Role Selector Tabs (Only in LOGIN mode) */}
        {authMode === 'LOGIN' && (
          <div className="flex bg-studio-950 p-1 rounded-xl border border-white/5 mb-4">
            <button
              type="button"
              onClick={() => {
                setTargetRole('USER');
                setLocalError('');
              }}
              className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                targetRole === 'USER'
                  ? 'bg-studio-850 text-white shadow-sm border border-slate-700'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <User size={14} /> User / Client
            </button>
            <button
              type="button"
              onClick={() => {
                setTargetRole('ADMIN');
                setLocalError('');
              }}
              className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                targetRole === 'ADMIN'
                  ? 'bg-amber-500/20 text-amber-300 shadow-sm border border-amber-500/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Shield size={14} /> Admin Studio
            </button>
          </div>
        )}

        {/* Error Notification Banner */}
        {(localError || authError) && (
          <div className="p-3 mb-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-start gap-2">
            <AlertCircle size={16} className="shrink-0 mt-0.5" />
            <span>{localError || authError}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          
          {authMode === 'REGISTER' && (
            <>
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">Họ và Tên</label>
                <div className="relative">
                  <User size={16} className="absolute left-3 top-3 text-slate-500" />
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Nguyễn Văn A"
                    className="w-full bg-studio-950 border border-slate-800 rounded-xl pl-9 pr-3 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-brand-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">Tên Công Ty / Tổ Chức <span className="text-slate-500 text-[10px]">(Tùy chọn)</span></label>
                <div className="relative">
                  <Building size={16} className="absolute left-3 top-3 text-slate-500" />
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Công ty TNHH Tech Asia"
                    className="w-full bg-studio-950 border border-slate-800 rounded-xl pl-9 pr-3 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-brand-primary"
                  />
                </div>
              </div>
            </>
          )}

          <div>
            <label className="block text-xs font-mono text-slate-300 mb-1">
              Email đăng nhập {authMode === 'LOGIN' && targetRole === 'ADMIN' && <span className="text-amber-400 font-bold">(Chỉ dành cho quanganhqb04@gmail.com)</span>}
            </label>
            <div className="relative">
              <Mail size={16} className="absolute left-3 top-3 text-slate-500" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={targetRole === 'ADMIN' && authMode === 'LOGIN' ? 'quanganhqb04@gmail.com' : 'client@company.com'}
                className="w-full bg-studio-950 border border-slate-800 rounded-xl pl-9 pr-3 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-brand-primary"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono text-slate-300 mb-1">Mật khẩu</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full bg-studio-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-brand-primary"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-brand-primary hover:bg-brand-hover text-white text-xs font-bold shadow-glow-primary transition-all flex items-center justify-center gap-2"
          >
            <span>{authMode === 'LOGIN' ? `Đăng Nhập ${targetRole === 'ADMIN' ? 'Admin' : 'Portal'}` : 'Tạo Tài Khoản & Bắt Đầu'}</span>
            <ArrowRight size={14} />
          </button>
        </form>

      </div>
    </div>
  );
};
