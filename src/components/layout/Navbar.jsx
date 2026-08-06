import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import { ArrowRight, Menu, X, Shield, LayoutDashboard, LogIn, LogOut, Sun, Moon, Globe } from 'lucide-react';

export const Navbar = ({ onOpenRequestModal, onOpenAuthModal, onNavigate }) => {
  const { activeRole, currentUser, logout } = useAuth();
  const { isDark, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: t('servicesNav'), href: '#services', id: 'services' },
    { label: t('calculatorNav'), href: '#cost-estimator', id: 'cost-estimator' },
    { label: t('processNav'), href: '#process', id: 'process' },
    { label: t('portfolioNav'), href: '#portfolio', id: 'portfolio' },
    { label: t('aboutNav'), href: '#about', id: 'about' },
  ];

  return (
    <header className={`sticky top-0 z-40 backdrop-blur-md transition-colors duration-200 border-b ${
      isDark ? 'bg-studio-950/90 border-white/10 text-slate-100' : 'bg-white/90 border-slate-200 text-slate-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-brand-primary text-white flex items-center justify-center font-mono font-bold text-sm shadow-sm transition-transform group-hover:scale-105">
              <span>N</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-extrabold text-base tracking-tight font-sans">
                NEXUS <span className="text-brand-primary font-mono text-[11px] font-bold tracking-widest ml-1">STUDIO</span>
              </span>
              <span className={`text-[10px] font-mono tracking-wider uppercase mt-0.5 ${
                isDark ? 'text-slate-400' : 'text-slate-500'
              }`}>
                Engineering Studio
              </span>
            </div>
          </a>

          {/* Center Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-brand-primary ${
                  isDark ? 'text-slate-300' : 'text-slate-600'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Action Controls */}
          <div className="hidden md:flex items-center gap-4 text-xs font-medium">
            
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border font-mono font-semibold transition-colors ${
                isDark
                  ? 'bg-studio-900 border-slate-800 text-slate-300 hover:border-slate-700'
                  : 'bg-slate-100 border-slate-200 text-slate-700 hover:border-slate-300'
              }`}
              title="Toggle Language (VI / EN)"
            >
              <Globe size={13} className="text-brand-primary" />
              <span>{language === 'vi' ? 'VI' : 'EN'}</span>
            </button>

            {/* Dark/Light Theme Switcher */}
            <button
              onClick={toggleTheme}
              className={`p-1.5 rounded-md border transition-colors ${
                isDark
                  ? 'bg-studio-900 border-slate-800 text-amber-400 hover:border-slate-700'
                  : 'bg-slate-100 border-slate-200 text-slate-700 hover:border-slate-300'
              }`}
              title="Toggle Theme"
            >
              {isDark ? <Sun size={15} /> : <Moon size={15} />}
            </button>

            {activeRole === 'GUEST' ? (
              <button
                onClick={onOpenAuthModal}
                className={`flex items-center gap-1.5 px-3 py-1.5 transition-colors font-medium ${
                  isDark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <LogIn size={14} />
                <span>{t('login')}</span>
              </button>
            ) : (
              <div className="flex items-center gap-3">
                {activeRole === 'USER' && (
                  <button
                    onClick={() => onNavigate('client-dashboard')}
                    className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-brand-primary/10 border border-brand-primary/20 text-brand-primary font-medium"
                  >
                    <LayoutDashboard size={13} />
                    <span>{t('myProjects')}</span>
                  </button>
                )}

                {activeRole === 'ADMIN' && (
                  <button
                    onClick={() => onNavigate('admin-dashboard')}
                    className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-500 font-medium"
                  >
                    <Shield size={13} />
                    <span>{t('adminDashboard')}</span>
                  </button>
                )}

                <button
                  onClick={logout}
                  className="flex items-center gap-1 text-slate-400 hover:text-rose-400 transition-colors"
                >
                  <LogOut size={13} />
                </button>
              </div>
            )}

            {/* Primary CTA */}
            <button
              onClick={() => onOpenRequestModal()}
              className="btn-primary py-2 px-4 text-xs font-semibold shadow-none"
            >
              <span>{t('startProject')}</span>
              <ArrowRight size={14} />
            </button>

          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md border border-slate-700 text-slate-300"
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md border border-slate-700 text-slate-300"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={`md:hidden border-b px-4 py-6 space-y-4 font-sans ${
          isDark ? 'bg-studio-900 border-slate-800' : 'bg-white border-slate-200'
        }`}>
          <nav className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm font-medium transition-colors py-1 ${
                  isDark ? 'text-slate-200 hover:text-brand-primary' : 'text-slate-800 hover:text-brand-primary'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
          
          <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
            <button
              onClick={toggleLanguage}
              className="flex items-center justify-between px-3 py-2 rounded-md bg-slate-800 text-xs text-slate-200 font-mono"
            >
              <span>Switch Language:</span>
              <span className="font-bold text-brand-primary">{language === 'vi' ? 'TIẾNG VIỆT' : 'ENGLISH'}</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRequestModal();
              }}
              className="btn-primary w-full py-2.5 text-xs font-semibold"
            >
              <span>{t('startProject')}</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
