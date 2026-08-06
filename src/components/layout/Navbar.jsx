import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Layers, ArrowRight, Menu, X, Shield, LayoutDashboard, LogIn, LogOut, PhoneCall, Mail, Clock } from 'lucide-react';

export const Navbar = ({ onOpenRequestModal, onOpenAuthModal, onNavigate }) => {
  const { activeRole, currentUser, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Dịch Vụ', href: '#services', id: 'services' },
    { label: 'Tính Báo Giá', href: '#cost-estimator', id: 'cost-estimator' },
    { label: 'Quy Trình', href: '#process', id: 'process' },
    { label: 'Dự Án', href: '#portfolio', id: 'portfolio' },
    { label: 'Về Chúng Tôi', href: '#about', id: 'about' },
    { label: 'Ưu Thế', href: '#why-us', id: 'why-us' },
  ];

  return (
    <div className="sticky top-0 z-40 font-sans">
      
      {/* Top Contact Bar with Mona Media Visual Styling */}
      <div className="bg-brand-dark font-mono text-xs text-slate-300 border-b border-white/5 py-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          
          <div className="flex items-center gap-6">
            <a href="tel:0908123456" className="flex items-center gap-1.5 hover:text-brand-primary transition-colors text-white font-bold">
              <PhoneCall size={13} className="text-brand-primary" />
              <span>Hotline: +84 (0) 908 123 456</span>
            </a>
            <span className="hidden sm:inline text-slate-600">|</span>
            <div className="hidden sm:flex items-center gap-1.5">
              <Mail size={13} className="text-brand-primary" />
              <span>Email: hello@nexusstudio.dev</span>
            </div>
            <span className="hidden md:inline text-slate-600">|</span>
            <div className="hidden md:flex items-center gap-1.5">
              <Clock size={13} className="text-slate-400" />
              <span>Giờ làm việc: 8:00 - 18:00 (T2 - T7)</span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            {activeRole === 'GUEST' ? (
              <button
                onClick={onOpenAuthModal}
                className="flex items-center gap-1 text-slate-300 hover:text-white font-semibold transition-colors"
              >
                <LogIn size={13} className="text-brand-primary" />
                <span>Đăng Nhập</span>
              </button>
            ) : (
              <div className="flex items-center gap-3">
                <span className="text-slate-300">Chào, <strong className="text-white">{currentUser?.name || 'Thành viên'}</strong></span>
                <button
                  onClick={logout}
                  className="flex items-center gap-1 text-slate-400 hover:text-rose-400 transition-colors"
                >
                  <LogOut size={13} />
                  <span>Đăng xuất</span>
                </button>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* Main Header Navbar */}
      <header className="bg-studio-950/90 backdrop-blur-xl border-b border-white/5 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-brand-primary/10 border border-brand-primary/30 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all shadow-glow-primary">
                <Layers size={22} className="transition-transform group-hover:scale-110" />
              </div>
              <div>
                <span className="font-extrabold text-lg tracking-tight text-white flex items-center gap-1.5">
                  NEXUS <span className="text-brand-primary font-mono text-[10px] font-bold uppercase px-1.5 py-0.5 rounded bg-brand-primary/10 border border-brand-primary/20">Studio</span>
                </span>
                <p className="text-[10px] text-slate-400 font-mono tracking-wider uppercase">Web App Architecture & Engineering</p>
              </div>
            </a>

            {/* Desktop Nav Links */}
            <nav className="hidden md:flex items-center gap-7">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className="text-xs font-bold text-slate-300 hover:text-white transition-colors relative py-1 uppercase tracking-wider"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Right Action CTA & Role Badges */}
            <div className="hidden md:flex items-center gap-3">
              {activeRole === 'USER' && (
                <button
                  onClick={() => onNavigate('client-dashboard')}
                  className="flex items-center gap-2 px-3 py-2 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-xs font-bold text-indigo-300 hover:bg-indigo-500/20 transition-all"
                >
                  <LayoutDashboard size={14} />
                  <span>Dự Án Của Tôi</span>
                </button>
              )}

              {activeRole === 'ADMIN' && (
                <button
                  onClick={() => onNavigate('admin-dashboard')}
                  className="flex items-center gap-2 px-3 py-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs font-bold text-amber-300 hover:bg-amber-500/20 transition-all"
                >
                  <Shield size={14} />
                  <span>Admin Dashboard</span>
                </button>
              )}

              <button
                onClick={() => onOpenRequestModal()}
                className="flex items-center gap-2 bg-brand-primary hover:bg-brand-hover text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow-glow-primary transition-all transform hover:-translate-y-0.5"
              >
                <span>Bắt Đầu Dự Án</span>
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Mobile Hamburger Menu Toggle */}
            <div className="flex md:hidden items-center gap-3">
              <button
                onClick={() => onOpenRequestModal()}
                className="bg-brand-primary text-white text-xs font-bold px-3 py-2 rounded-lg"
              >
                Bắt Đầu
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-slate-400 hover:text-white p-2 rounded-lg bg-slate-900 border border-slate-800"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-studio-900 border-b border-slate-800 px-4 py-6 space-y-4 font-sans">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-bold text-slate-200 hover:text-brand-primary transition-colors py-1 uppercase"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            
            <div className="pt-4 border-t border-slate-800 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenRequestModal();
                }}
                className="w-full flex items-center justify-center gap-2 bg-brand-primary text-white font-bold py-3 rounded-xl shadow-glow-primary text-xs"
              >
                <span>Bắt Đầu Dự Án Web App</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};
