import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { X, Mail, Shield, User, AlertCircle, ArrowRight } from 'lucide-react';

export const AuthModal = ({ isOpen, onClose }) => {
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
      setLocalError('');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn font-sans">
      <div
        className="bg-studio-900 border border-slate-800 rounded-2xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => {
            clearAuthError();
            setLocalError('');
            onClose();
          }}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-1"
        >
          <X size={18} />
        </button>

        <div className="text-center space-y-1 mb-6">
          <h3 className="text-2xl font-bold text-white font-display">
            Đăng Nhập Hệ Thống
          </h3>
          <p className="text-xs text-slate-400 font-mono">
            Truy cập Client Portal hoặc Admin Control Center
          </p>
        </div>

        {/* Role Selector Tabs */}
        <div className="flex bg-studio-950 p-1 rounded-xl border border-slate-800 mb-4">
          <button
            type="button"
            onClick={() => {
              setTargetRole('USER');
              setLocalError('');
            }}
            className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 font-display ${
              targetRole === 'USER'
                ? 'bg-studio-850 text-white shadow-sm border border-slate-700 font-bold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <User size={14} /> Khách Hàng / User
          </button>
          <button
            type="button"
            onClick={() => {
              setTargetRole('ADMIN');
              setLocalError('');
            }}
            className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 font-display ${
              targetRole === 'ADMIN'
                ? 'bg-amber-500/20 text-amber-300 shadow-sm border border-amber-500/30 font-bold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Shield size={14} /> Quản Trị / Admin
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
              Email đăng nhập {targetRole === 'ADMIN' && <span className="text-amber-400 font-bold">(quanganhqb04@gmail.com)</span>}
            </label>
            <div className="relative">
              <Mail size={16} className="absolute left-3 top-3 text-slate-500" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={targetRole === 'ADMIN' ? 'quanganhqb04@gmail.com' : 'client@company.com'}
                className="w-full bg-studio-950 border border-slate-800 rounded-xl pl-9 pr-3 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-brand-primary font-mono"
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
              className="w-full bg-studio-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-brand-primary font-mono"
            />
          </div>

          <button
            type="submit"
            className="btn-primary w-full py-3 text-xs font-bold"
          >
            <span>Đăng Nhập {targetRole === 'ADMIN' ? 'Admin' : 'Portal'}</span>
            <ArrowRight size={14} />
          </button>
        </form>

      </div>
    </div>
  );
};
