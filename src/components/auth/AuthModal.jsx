import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { X, Mail, Shield, AlertCircle, ArrowRight } from 'lucide-react';

export const AuthModal = ({ isOpen, onClose }) => {
  const { loginWithEmail, authError, clearAuthError } = useAuth();
  
  const [email, setEmail] = useState('quanganhqb04@gmail.com');
  const [password, setPassword] = useState('');
  const [localError, setLocalError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLocalError('');
    clearAuthError();

    if (!email.trim()) {
      setLocalError('Vui lòng nhập Email Admin.');
      return;
    }

    const success = loginWithEmail(email.trim(), password, 'ADMIN');
    if (success) {
      onClose();
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
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold mb-2">
            <Shield size={13} />
            <span>ADMIN CONTROL CENTER</span>
          </div>
          <h3 className="text-2xl font-bold text-white font-display">
            Đăng Nhập Quản Trị Viên
          </h3>
          <p className="text-xs text-slate-400 font-mono">
            Dành riêng cho Admin <span className="text-amber-400 font-bold">quanganhqb04@gmail.com</span>
          </p>
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
              Email đăng nhập Admin
            </label>
            <div className="relative">
              <Mail size={16} className="absolute left-3 top-3 text-slate-500" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="quanganhqb04@gmail.com"
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
            <span>Đăng Nhập Admin Control Center</span>
            <ArrowRight size={14} />
          </button>
        </form>

      </div>
    </div>
  );
};
