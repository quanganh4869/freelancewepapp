import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Layers, ArrowRight, Menu, X, Shield, LayoutDashboard, User, LogIn, LogOut } from 'lucide-react';

export const Navbar = ({ onOpenRequestModal, onOpenAuthModal, onNavigate }) => {
  const { activeRole, currentUser, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Dịch vụ', href: '#services', id: 'services' },
    { label: 'Quy trình', href: '#process', id: 'process' },
    { label: 'Dự án', href: '#portfolio', id: 'portfolio' },
    { label: 'Ưu thế', href: '#why-us', id: 'why-us' },
  ];

  return (
    <header className="sticky top-9 z-40 bg-studio-950/80 backdrop-blur-xl border-b border-white/5 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-brand-primary/10 border border-brand-primary/30 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all shadow-glow-primary">
              <Layers size={22} className="transition-transform group-hover:scale-110" />
            </div>
            <div>
              <span className="font-extrabold text-lg tracking-tight text-white flex items-center gap-1.5">
                NEXUS <span className="text-brand-primary font-mono text-xs uppercase px-1.5 py-0.5 rounded bg-brand-primary/10 border border-brand-primary/20">Studio</span>
              </span>
              <p className="text-[10px] text-slate-400 font-mono tracking-wider uppercase">Web App Architecture</p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative py-1"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Action CTA & Role Badges */}
          <div className="hidden md:flex items-center gap-3">
            {activeRole === 'GUEST' ? (
              <button
                onClick={onOpenAuthModal}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-studio-900 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-white hover:border-slate-700 transition-all"
              >
                <LogIn size={15} />
                <span>Đăng nhập</span>
              </button>
            ) : (
              <button
                onClick={logout}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-studio-900 border border-slate-800 text-xs font-semibold text-slate-400 hover:text-rose-400 hover:border-rose-500/30 transition-all"
                title="Đăng xuất"
              >
                <LogOut size={15} />
                <span>Đăng xuất</span>
              </button>
            )}

            {activeRole === 'USER' && (
              <button
                onClick={() => onNavigate('client-dashboard')}
                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-xs font-semibold text-indigo-300 hover:bg-indigo-500/20 transition-all"
              >
                <LayoutDashboard size={14} />
                <span>My Projects</span>
              </button>
            )}

            {activeRole === 'ADMIN' && (
              <button
                onClick={() => onNavigate('admin-dashboard')}
                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs font-semibold text-amber-300 hover:bg-amber-500/20 transition-all"
              >
                <Shield size={14} />
                <span>Admin Dashboard</span>
              </button>
            )}

            <button
              onClick={onOpenRequestModal}
              className="flex items-center gap-2.5 bg-brand-primary hover:bg-brand-hover text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-glow-primary transition-all transform hover:-translate-y-0.5"
            >
              <span>Bắt đầu dự án</span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Mobile Hamburger Menu Toggle */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={onOpenRequestModal}
              className="bg-brand-primary text-white text-xs font-semibold px-3 py-2 rounded-lg"
            >
              Bắt đầu
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
        <div className="md:hidden bg-studio-900 border-b border-slate-800 px-4 py-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-200 hover:text-brand-primary transition-colors py-1"
              >
                {item.label}
              </a>
            ))}
          </nav>
          
          <div className="pt-4 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuthModal();
              }}
              className="w-full flex items-center justify-center gap-2 bg-studio-950 text-slate-200 font-semibold py-3 rounded-xl border border-slate-800"
            >
              <LogIn size={16} />
              <span>Đăng nhập</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRequestModal();
              }}
              className="w-full flex items-center justify-center gap-2 bg-brand-primary text-white font-semibold py-3 rounded-xl shadow-glow-primary"
            >
              <span>Bắt đầu dự án Web App</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
