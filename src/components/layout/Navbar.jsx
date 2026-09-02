import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import { Menu, X, Shield, LogOut, Sun, Moon, Calculator, Globe } from 'lucide-react';

export const Navbar = ({ onOpenRequestModal, onOpenAuthModal, onNavigate, currentView = 'home' }) => {
  const { activeRole, logout } = useAuth();
  const { language, toggleLanguage, t } = useLanguage();
  const { isDark, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Dịch vụ', href: '#dich-vu', id: 'dich-vu' },
    { label: 'Dự án', href: '#du-an', id: 'du-an' },
    { label: 'Chi phí', href: '#chi-phi', id: 'chi-phi' },
    { label: 'Quy trình', href: '#quy-trinh', id: 'quy-trinh' },
    { label: 'Về tôi', href: '#gioi-thieu', id: 'gioi-thieu' },
    { label: 'Hỏi đáp', href: '#hoi-dap', id: 'hoi-dap' },
  ];

  return (
    <header className="sticky top-0 z-40 transition-colors border-b border-brand-border bg-brand-background/90 backdrop-blur-md font-sans">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Lovable Reference Personal Logo Badge */}
          <button onClick={() => onNavigate('home')} className="flex items-center gap-2 group text-left">
            <span className="font-display font-bold text-base tracking-tight text-brand-primary dark:text-white">
              Nguyễn Quang Anh
            </span>
            <span className="text-[11px] font-sans text-brand-muted font-medium px-2.5 py-0.5 rounded-full border border-brand-border bg-brand-paper">
              web freelancer
            </span>
          </button>

          {/* Center Navigation Links */}
          <nav className="hidden md:flex items-center gap-5 text-xs font-medium">
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
                className="text-brand-muted hover:text-brand-primary dark:hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}

            <button
              onClick={() => onNavigate('estimator')}
              className="text-[#D05021] font-semibold hover:underline flex items-center gap-1 transition-colors"
            >
              <Calculator size={13} />
              <span>Tính chi phí</span>
            </button>
          </nav>

          {/* Right Controls */}
          <div className="hidden sm:flex items-center gap-3 text-xs font-medium">
            
            {/* Direct Order CTA Button */}
            <button
              onClick={() => onOpenRequestModal()}
              className="btn-primary text-xs font-semibold py-1.5 px-3.5"
            >
              <span>Đặt làm website</span>
            </button>

            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="p-1.5 flex items-center justify-center rounded-lg border border-brand-border bg-brand-paper text-brand-primary dark:text-white hover:border-brand-primary hover:bg-brand-primary/5 transition-all duration-300 active:scale-90"
              title="Change Language"
            >
              <div className="flex items-center gap-1 font-bold text-[10px]">
                <Globe size={13} className="animate-pulse-slow" />
                <span>{language === 'vi' ? 'VN' : 'EN'}</span>
              </div>
            </button>

            {/* Dark/Light Switcher */}
            <button
              onClick={toggleTheme}
              className="p-1.5 flex items-center justify-center rounded-lg border border-brand-border bg-brand-paper text-brand-primary dark:text-white hover:border-amber-500 hover:text-amber-500 hover:bg-amber-500/10 transition-all duration-300 active:rotate-180"
              title="Toggle Theme Mode"
            >
              {isDark ? <Sun size={14} /> : <Moon size={14} />}
            </button>

            {/* Admin Login Button */}
            {activeRole === 'GUEST' ? (
              <button
                onClick={onOpenAuthModal}
                className="text-[11px] font-bold text-brand-muted hover:text-brand-primary dark:hover:text-white px-3 py-1.5 rounded-full border border-transparent hover:border-brand-border bg-transparent hover:bg-brand-paper transition-all"
                title="Đăng Nhập"
              >
                <span>Đăng nhập</span>
              </button>
            ) : (
              <div className="flex items-center gap-2">
                {activeRole === 'ADMIN' && (
                  <button
                    onClick={() => onNavigate('admin-dashboard')}
                    className="flex items-center gap-1 px-2 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 font-bold text-[11px]"
                  >
                    <Shield size={12} />
                    <span>Admin</span>
                  </button>
                )}

                <button
                  onClick={logout}
                  className="flex items-center gap-1 text-brand-muted hover:text-rose-500 transition-colors p-1"
                >
                  <LogOut size={13} />
                </button>
              </div>
            )}

          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => onOpenRequestModal()}
              className="btn-primary text-xs font-semibold py-1.5 px-3"
            >
              Đặt làm web
            </button>

            <button
              onClick={toggleLanguage}
              className="p-1.5 flex items-center justify-center rounded-lg border border-brand-border bg-brand-paper text-brand-primary dark:text-white hover:border-brand-primary hover:bg-brand-primary/5 transition-all duration-300 active:scale-90"
            >
              <div className="flex items-center gap-1 font-bold text-[11px]">
                <Globe size={14} />
                <span>{language === 'vi' ? 'VN' : 'EN'}</span>
              </div>
            </button>

            <button
              onClick={toggleTheme}
              className="p-1.5 flex items-center justify-center rounded-lg border border-brand-border bg-brand-paper text-brand-primary dark:text-white hover:border-amber-500 hover:text-amber-500 hover:bg-amber-500/10 transition-all duration-300 active:rotate-180"
            >
              {isDark ? <Sun size={15} /> : <Moon size={15} />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg border border-brand-border bg-brand-paper text-brand-primary dark:text-white"
            >
              {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-brand-border px-4 py-4 space-y-3 font-sans bg-brand-paper">
          <nav className="flex flex-col space-y-2 text-sm font-medium">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigate('home');
                }}
                className="text-brand-primary dark:text-white py-1 hover:text-brand-accent transition-colors"
              >
                {item.label}
              </a>
            ))}

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate('estimator');
              }}
              className="text-[#D05021] font-semibold flex items-center gap-1.5 py-1"
            >
              <Calculator size={15} />
              <span>Tính chi phí làm web</span>
            </button>
          </nav>
          
          {activeRole === 'GUEST' && (
            <div className="pt-2 border-t border-brand-border">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuthModal();
                }}
                className="text-xs text-brand-muted"
              >
                Đăng nhập
              </button>
            </div>
          )}
        </div>
      )}
    </header>
  );
};
