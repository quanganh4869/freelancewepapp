import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import { Menu, X, Shield, LogOut, Sun, Moon, Globe, Calculator } from 'lucide-react';

export const Navbar = ({ onOpenRequestModal, onOpenAuthModal, onNavigate, currentView = 'home' }) => {
  const { activeRole, currentUser, logout } = useAuth();
  const { isDark, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: t('servicesNav'), href: '#services', id: 'services' },
    { label: t('pricingNav'), href: '#pricing', id: 'pricing' },
    { label: t('processNav'), href: '#process', id: 'process' },
    { label: t('portfolioNav'), href: '#portfolio', id: 'portfolio' },
  ];

  return (
    <header className={`sticky top-0 z-40 transition-colors duration-200 border-b ${
      isDark ? 'bg-studio-950/95 border-slate-800/80 text-slate-100' : 'bg-white/95 border-slate-200 text-slate-900'
    } backdrop-blur-md font-sans`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Authentic Personal Identity - QUANG ANH FREELANCER */}
          <button onClick={() => onNavigate('home')} className="flex items-center gap-3 group text-left">
            <div className="w-9 h-9 rounded-lg bg-brand-primary text-white flex items-center justify-center font-bold text-sm shadow-sm transition-transform group-hover:scale-105">
              <span>QA</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-extrabold text-base tracking-tight text-slate-900 dark:text-white">
                QUANG ANH <span className="text-brand-primary font-bold text-[10px] tracking-wider ml-1 uppercase">FREELANCER</span>
              </span>
            </div>
          </button>

          {/* Center Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={currentView === 'home' ? item.href : '#'}
                onClick={(e) => {
                  if (currentView !== 'home') {
                    e.preventDefault();
                    onNavigate('home');
                    setTimeout(() => {
                      const el = document.getElementById(item.id);
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }
                }}
                className={`text-xs font-bold uppercase tracking-wider transition-colors hover:text-brand-primary ${
                  isDark ? 'text-slate-200' : 'text-slate-800'
                }`}
              >
                {item.label}
              </a>
            ))}

            {/* Dedicated Page Estimator Navigation Button */}
            <button
              onClick={() => onNavigate('estimator')}
              className={`text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 px-3 py-1.5 rounded-lg border ${
                currentView === 'estimator'
                  ? 'bg-brand-primary text-white border-brand-primary shadow-sm'
                  : 'bg-brand-primary/10 border-brand-primary/30 text-brand-primary hover:bg-brand-primary/20'
              }`}
            >
              <Calculator size={13} />
              <span>Tính chi phí</span>
            </button>
          </nav>

          {/* Right Controls */}
          <div className="hidden sm:flex items-center gap-3 text-xs font-medium">
            
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border font-semibold transition-colors ${
                isDark
                  ? 'bg-studio-900 border-slate-800 text-slate-200 hover:border-slate-700'
                  : 'bg-slate-100 border-slate-200 text-slate-800 hover:border-slate-300'
              }`}
              title="Switch Language"
            >
              <Globe size={13} className="text-brand-primary" />
              <span>{language === 'vi' ? 'VIE' : 'ENG'}</span>
            </button>

            {/* Dark/Light Switcher */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg border transition-colors ${
                isDark
                  ? 'bg-studio-900 border-slate-800 text-amber-400 hover:border-slate-700'
                  : 'bg-slate-100 border-slate-200 text-slate-700 hover:border-slate-300'
              }`}
              title="Toggle Theme Mode"
            >
              {isDark ? <Sun size={15} /> : <Moon size={15} />}
            </button>

            {/* Admin Login Button */}
            {activeRole === 'GUEST' ? (
              <button
                onClick={onOpenAuthModal}
                className={`flex items-center px-3 py-1.5 rounded-lg transition-colors text-[11px] font-bold border ${
                  isDark ? 'border-slate-800 text-slate-300 hover:text-white hover:border-brand-primary' : 'border-slate-200 text-slate-700 hover:text-slate-900 hover:border-brand-primary'
                }`}
                title="Quản Trị Admin"
              >
                <span>Admin</span>
              </button>
            ) : (
              <div className="flex items-center gap-2">
                {activeRole === 'ADMIN' && (
                  <button
                    onClick={() => onNavigate('admin-dashboard')}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-500 font-bold text-[11px]"
                  >
                    <Shield size={13} />
                    <span>Admin</span>
                  </button>
                )}

                <button
                  onClick={logout}
                  className="flex items-center gap-1 text-slate-400 hover:text-rose-400 transition-colors p-1"
                >
                  <LogOut size={14} />
                </button>
              </div>
            )}

          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => onNavigate('estimator')}
              className="p-2 rounded-lg border border-brand-primary/40 bg-brand-primary/10 text-brand-primary text-xs font-bold"
            >
              <Calculator size={16} />
            </button>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-slate-700 text-slate-300"
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border border-slate-700 text-slate-300"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className={`sm:hidden border-b px-4 py-6 space-y-4 font-sans ${
          isDark ? 'bg-studio-900 border-slate-800' : 'bg-white border-slate-200'
        }`}>
          <nav className="flex flex-col space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate('estimator');
              }}
              className="text-sm font-bold text-brand-primary flex items-center gap-2 py-1"
            >
              <Calculator size={16} />
              <span>Tính Chi Phí Làm Web</span>
            </button>

            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigate('home');
                }}
                className={`text-sm font-bold transition-colors py-1 ${
                  isDark ? 'text-slate-200 hover:text-brand-primary' : 'text-slate-800 hover:text-brand-primary'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
          
          <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
            <button
              onClick={toggleLanguage}
              className="text-xs font-semibold text-brand-primary"
            >
              {language === 'vi' ? 'EN - English' : 'VI - Tiếng Việt'}
            </button>

            {activeRole === 'GUEST' && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuthModal();
                }}
                className="text-xs text-slate-300 hover:text-white"
              >
                Admin Login
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
