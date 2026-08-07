import React, { useState, useEffect } from 'react';
import { useAuth, ADMIN_EMAIL } from '../../context/AuthContext';
import { X, Shield, AlertCircle, ArrowRight, CheckCircle2 } from 'lucide-react';

export const AuthModal = ({ isOpen, onClose }) => {
  const { loginWithEmail, authError, clearAuthError } = useAuth();
  
  const [email, setEmail] = useState('quanganhqb04@gmail.com');
  const [password, setPassword] = useState('');
  const [localError, setLocalError] = useState('');

  const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID || '';

  // Initialize Google Identity Services (GIS) button when modal opens
  useEffect(() => {
    if (!isOpen) return;

    const handleGoogleCredentialResponse = (response) => {
      try {
        // Decode JWT token payload
        const base64Url = response.credential.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(
          atob(base64)
            .split('')
            .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
            .join('')
        );
        const payload = JSON.parse(jsonPayload);
        const userEmail = payload.email;

        if (userEmail && userEmail.toLowerCase() === ADMIN_EMAIL.toLowerCase()) {
          const success = loginWithEmail(ADMIN_EMAIL, '', 'ADMIN');
          if (success) {
            onClose();
          }
        } else {
          setLocalError(`Quyền truy cập bị từ chối! Email (${userEmail}) không phải là quanganhqb04@gmail.com.`);
        }
      } catch (err) {
        console.error('Google Auth Error:', err);
        setLocalError('Không thể xác thực Google Sign-In. Vui lòng thử lại.');
      }
    };

    if (window.google?.accounts?.id && googleClientId && googleClientId !== 'your_google_client_id_here.apps.googleusercontent.com') {
      window.google.accounts.id.initialize({
        client_id: googleClientId,
        callback: handleGoogleCredentialResponse,
      });

      const buttonDiv = document.getElementById('googleSignInBtn');
      if (buttonDiv) {
        window.google.accounts.id.renderButton(buttonDiv, {
          theme: 'filled_blue',
          size: 'large',
          text: 'signin_with',
          shape: 'rectangular',
          width: 320
        });
      }
    }
  }, [isOpen, googleClientId]);

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

        <div className="text-center space-y-1.5 mb-6">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/30 text-brand-primary text-xs font-mono font-bold mb-1">
            <Shield size={13} />
            <span>ADMIN CONTROL CENTER</span>
          </div>
          <h3 className="text-2xl font-bold text-white font-display">
            Đăng Nhập Quản Trị Viên
          </h3>
          <p className="text-xs text-slate-400 font-mono">
            Chỉ dành riêng cho tài khoản Google <span className="text-brand-primary font-bold">quanganhqb04@gmail.com</span>
          </p>
        </div>

        {/* Error Notification Banner */}
        {(localError || authError) && (
          <div className="p-3 mb-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-start gap-2">
            <AlertCircle size={16} className="shrink-0 mt-0.5" />
            <span>{localError || authError}</span>
          </div>
        )}

        {/* Google OAuth Button Container */}
        <div className="space-y-4">
          <div className="flex flex-col items-center justify-center">
            <div id="googleSignInBtn" className="min-h-[40px]"></div>
          </div>

          <div className="relative flex py-2 items-center">
            <div className="flex-grow border-t border-slate-800"></div>
            <span className="flex-shrink mx-3 text-[11px] font-mono text-slate-500 uppercase">Hoặc đăng nhập trực tiếp</span>
            <div className="flex-grow border-t border-slate-800"></div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-mono text-slate-300 mb-1">
                Email Google Admin
              </label>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="quanganhqb04@gmail.com"
                  className="w-full bg-studio-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-brand-primary font-mono"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-300 mb-1">Mật khẩu xác thực</label>
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
              className="btn-primary w-full py-3 text-xs font-bold font-display"
            >
              <span>Xác Nhận Đăng Nhập Admin</span>
              <ArrowRight size={14} />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};
