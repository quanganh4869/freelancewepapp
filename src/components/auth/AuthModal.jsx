import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { X, Lock, Mail, Shield, User, AlertCircle, CheckCircle2 } from 'lucide-react';

export const AuthModal = ({ isOpen, onClose, defaultMode = 'LOGIN' }) => {
  const { loginWithEmail, authError, clearAuthError } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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

    const success = loginWithEmail(email.trim(), password, targetRole);
    if (success) {
      onClose();
      setEmail('');
      setPassword('');
    }
  };

  const handleQuickAdminLogin = () => {
    setEmail('quanganhqb04@gmail.com');
    setTargetRole('ADMIN');
    setLocalError('');
  };

  const handleQuickClientLogin = () => {
    setEmail('marcus@vancetech.io');
    setTargetRole('USER');
    setLocalError('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div
        className="bg-studio-900 border border-white/10 rounded-2xl max-w-md w-full p-6 shadow-2xl relative text-slate-200"
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
          <h3 className="text-xl font-bold text-white">Đăng nhập Hệ thống Nexus</h3>
          <p className="text-xs text-slate-400 font-mono">
            Truy cập Client Portal hoặc Admin Control Center
          </p>
        </div>

        {/* Role Selector Tabs */}
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

        {/* Error Notification Banner */}
        {(localError || authError) && (
          <div className="p-3 mb-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-start gap-2">
            <AlertCircle size={16} className="shrink-0 mt-0.5" />
            <span>{localError || authError}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-mono text-slate-300 mb-1">
              Email đăng nhập {targetRole === 'ADMIN' && <span className="text-amber-400 font-bold">(Chỉ dành cho quanganhqb04@gmail.com)</span>}
            </label>
            <div className="relative">
              <Mail size={16} className="absolute left-3 top-3 text-slate-500" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={targetRole === 'ADMIN' ? 'quanganhqb04@gmail.com' : 'marcus@vancetech.io'}
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
            className="w-full py-3 rounded-xl bg-brand-primary hover:bg-brand-hover text-white text-xs font-bold shadow-glow-primary transition-all"
          >
            Đăng Nhập {targetRole === 'ADMIN' ? 'Admin' : 'Portal'}
          </button>
        </form>

        {/* Quick Fill Preset Shortcuts */}
        <div className="mt-6 pt-4 border-t border-white/5 space-y-2">
          <p className="text-[11px] font-mono text-slate-400 text-center uppercase">Thử nghiệm nhanh tài khoản Demo:</p>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <button
              onClick={handleQuickClientLogin}
              className="p-2 rounded-xl bg-studio-950 border border-slate-800 text-slate-300 hover:border-slate-600 text-[11px] font-mono"
            >
              👤 Client Account
            </button>
            <button
              onClick={handleQuickAdminLogin}
              className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 hover:bg-amber-500/20 text-[11px] font-mono"
            >
              ⚡ Admin (quanganhqb04)
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
