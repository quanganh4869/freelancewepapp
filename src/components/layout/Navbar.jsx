import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import { Layers, ArrowRight, Menu, X, Shield, LayoutDashboard, LogIn, LogOut, PhoneCall, Mail, Clock, Sun, Moon, Globe } from 'lucide-react';

export const Navbar = ({ onOpenRequestModal, onOpenAuthModal, onNavigate }) => {
  const { activeRole, currentUser, logout } = useAuth();
  const { theme, toggleTheme, isDark } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: t('servicesNav'), href: '#services', id: 'services' },
    { label: t('calculatorNav'), href: '#cost-estimator', id: 'cost-estimator' },
    { label: t('processNav'), href: '#process', id: 'process' },
    { label: t('portfolioNav'), href: '#portfolio', id: 'portfolio' },
    { label: t('aboutNav'), href: '#about', id: 'about' },
    { label: t('whyUsNav'), href: '#why-us', id: 'why-us' },
  ];

  return (
    <div className="sticky top-0 z-40 font-sans transition-colors">
      
      {/* Top Contact Bar with Mona Media Visual Styling */}
      <div className={`font-mono text-xs border-b py-2 px-4 sm:px-6 lg:px-8 transition-colors ${
        isDark ? 'bg-studio-950 text-slate-300 border-white/5' : 'bg-slate-900 text-slate-200 border-slate-800'
      }`}>
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          
          <div className="flex items-center gap-6">
            <a href="tel:0908123456" className="flex items-center gap-1.5 hover:text-brand-primary transition-colors text-white font-bold">
              <PhoneCall size={13} className="text-brand-primary" />
              <span>{t('hotline')}</span>
            </a>
            <span className="hidden sm:inline text-slate-600">|</span>
            <div className="hidden sm:flex items-center gap-1.5">
              <Mail size={13} className="text-brand-primary" />
              <span>{t('email')}</span>
            </div>
            <span className="hidden md:inline text-slate-600">|</span>
            <div className="hidden md:flex items-center gap-1.5">
              <Clock size={13} className="text-slate-400" />
              <span>{t('workingHours')}</span>
            </div>
          </div>

          {/* Right Utilities: Theme & Language Switchers */}
          <div className="flex items-center gap-3 text-[11px]">
            
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-studio-900 hover:bg-studio-800 border border-slate-700 text-slate-200 font-bold transition-all"
              title="Switch Language (VI / EN)"
            >
              <Globe size={13} className="text-brand-primary" />
              <span>{language === 'vi' ? 'VI 🇻🇳' : 'EN 🇺🇸'}</span>
            </button>

            {/* Theme Switcher Button */}
            <button
              onClick={toggleTheme}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-studio-900 hover:bg-studio-800 border border-slate-700 text-amber-400 font-bold transition-all"
              title="Toggle Dark / Light Mode"
            >
              {isDark ? (
                <>
                  <Sun size={13} className="text-amber-400" />
                  <span className="text-slate-300">Light Mode</span>
                </>
              ) : (
                <>
                  <Moon size={13} className="text-indigo-400" />
                  <span className="text-slate-300">Dark Mode</span>
                </>
              )}
            </button>

            <span className="text-slate-600">|</span>

            {activeRole === 'GUEST' ? (
              <button
                onClick={onOpenAuthModal}
                className="flex items-center gap-1 text-slate-300 hover:text-white font-semibold transition-colors"
              >
                <LogIn size={13} className="text-brand-primary" />
                <span>{t('login')}</span>
              </button>
            ) : (
              <div className="flex items-center gap-3">
                <span className="text-slate-300">{currentUser?.name || 'User'}</span>
                <button
                  onClick={logout}
                  className="flex items-center gap-1 text-slate-400 hover:text-rose-400 transition-colors"
                >
                  <LogOut size={13} />
                  <span>{t('logout')}</span>
                </button>
              </div>
            )}

          </div>

        </div>
      </div>

      {/* Main Header Navbar */}
      <header className={`backdrop-blur-xl border-b transition-colors ${
        isDark ? 'bg-studio-950/90 border-white/5' : 'bg-white/90 border-slate-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-brand-primary/10 border border-brand-primary/30 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all shadow-glow-primary">
                <Layers size={22} className="transition-transform group-hover:scale-110" />
              </div>
              <div>
                <span className={`font-extrabold text-lg tracking-tight flex items-center gap-1.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  NEXUS <span className="text-brand-primary font-mono text-[10px] font-bold uppercase px-1.5 py-0.5 rounded bg-brand-primary/10 border border-brand-primary/20">Studio</span>
                </span>
                <p className={`text-[10px] font-mono tracking-wider uppercase ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Web App Architecture & Engineering</p>
              </div>
            </a>

            {/* Desktop Nav Links */}
            <nav className="hidden md:flex items-center gap-7">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className={`text-xs font-bold transition-colors relative py-1 uppercase tracking-wider ${
                    isDark ? 'text-slate-300 hover:text-white' : 'text-slate-700 hover:text-brand-primary'
                  }`}
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
                  <span>{t('myProjects')}</span>
                </button>
              )}

              {activeRole === 'ADMIN' && (
                <button
                  onClick={() => onNavigate('admin-dashboard')}
                  className="flex items-center gap-2 px-3 py-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs font-bold text-amber-300 hover:bg-amber-500/20 transition-all"
                >
                  <Shield size={14} />
                  <span>{t('adminDashboard')}</span>
                </button>
              )}

              <button
                onClick={() => onOpenRequestModal()}
                className="mona-btn-primary py-2.5 px-5 text-xs shadow-glow-primary"
              >
                <span>{t('startProject')}</span>
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Mobile Hamburger Menu Toggle */}
            <div className="flex md:hidden items-center gap-3">
              <button
                onClick={() => onOpenRequestModal()}
                className="bg-brand-primary text-white text-xs font-bold px-3 py-2 rounded-lg"
              >
                {t('startProject')}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-lg border ${
                  isDark ? 'text-slate-400 hover:text-white bg-slate-900 border-slate-800' : 'text-slate-700 bg-slate-100 border-slate-300'
                }`}
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Drawer */}
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
                  className={`text-sm font-bold transition-colors py-1 uppercase ${
                    isDark ? 'text-slate-200 hover:text-brand-primary' : 'text-slate-800 hover:text-brand-primary'
                  }`}
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
                <span>{t('startProject')}</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};
