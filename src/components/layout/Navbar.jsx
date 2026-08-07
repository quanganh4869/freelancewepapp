import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import { Menu, X, Shield, LogOut, Sun, Moon, Calculator, Send } from 'lucide-react';

export const Navbar = ({ onOpenRequestModal, onOpenAuthModal, onNavigate, currentView = 'home' }) => {
  const { activeRole, currentUser, logout } = useAuth();
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
    <header className={`sticky top-0 z-40 transition-colors border-b ${
      isDark ? 'bg-[#121212]/95 border-[#2A2A28] text-[#F4F4F2]' : 'bg-[#FAF9F6]/95 border-[#E6E4DD] text-[#1A1A1A]'
    } backdrop-blur-md font-sans`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          
          {/* Lovable Reference Personal Logo Badge */}
          <button onClick={() => onNavigate('home')} className="flex items-center gap-2 group text-left">
            <span className="font-bold text-base tracking-tight text-[#1A1A1A] dark:text-white">
              Nguyễn Quang Anh
            </span>
            <span className="text-[11px] text-[#666663] dark:text-[#A1A19A] font-medium px-2 py-0.5 rounded-full border border-[#E6E4DD] dark:border-[#2A2A28] bg-white dark:bg-[#1A1A19]">
              web freelancer
            </span>
          </button>

          {/* Center Navigation Links */}
          <nav className="hidden md:flex items-center gap-6">
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
                className={`text-xs font-medium transition-colors hover:text-black dark:hover:text-white ${
                  isDark ? 'text-[#A1A19A]' : 'text-[#666663]'
                }`}
              >
                {item.label}
              </a>
            ))}

            <button
              onClick={() => onNavigate('estimator')}
              className="text-xs font-medium text-[#666663] dark:text-[#A1A19A] hover:text-black dark:hover:text-white flex items-center gap-1 transition-colors"
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
              className="btn-primary text-xs font-semibold py-2 px-4 rounded-xl shadow-none"
            >
              <span>Đặt làm website</span>
            </button>

            {/* Dark/Light Switcher */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-xl border transition-colors ${
                isDark
                  ? 'bg-[#1A1A19] border-[#2A2A28] text-amber-400 hover:border-[#444440]'
                  : 'bg-white border-[#E6E4DD] text-[#1A1A1A] hover:border-[#C8C5B9]'
              }`}
              title="Toggle Theme Mode"
            >
              {isDark ? <Sun size={15} /> : <Moon size={15} />}
            </button>

            {/* Admin Login Button */}
            {activeRole === 'GUEST' ? (
              <button
                onClick={onOpenAuthModal}
                className="text-[11px] font-medium text-[#666663] dark:text-[#A1A19A] hover:text-black dark:hover:text-white px-2 py-1"
                title="Quản Trị Admin"
              >
                <span>Admin</span>
              </button>
            ) : (
              <div className="flex items-center gap-2">
                {activeRole === 'ADMIN' && (
                  <button
                    onClick={() => onNavigate('admin-dashboard')}
                    className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 font-bold text-[11px]"
                  >
                    <Shield size={13} />
                    <span>Admin</span>
                  </button>
                )}

                <button
                  onClick={logout}
                  className="flex items-center gap-1 text-[#666663] hover:text-rose-500 transition-colors p-1"
                >
                  <LogOut size={14} />
                </button>
              </div>
            )}

          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => onOpenRequestModal()}
              className="btn-primary text-xs font-semibold py-1.5 px-3 rounded-lg"
            >
              Đặt làm web
            </button>

            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-lg border border-[#E6E4DD] dark:border-[#2A2A28] text-[#1A1A1A] dark:text-[#F4F4F2]"
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg border border-[#E6E4DD] dark:border-[#2A2A28] text-[#1A1A1A] dark:text-[#F4F4F2]"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className={`sm:hidden border-b px-4 py-5 space-y-3 font-sans ${
          isDark ? 'bg-[#1A1A19] border-[#2A2A28]' : 'bg-white border-[#E6E4DD]'
        }`}>
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigate('home');
                }}
                className={`text-sm font-medium transition-colors py-1 ${
                  isDark ? 'text-[#F4F4F2] hover:text-white' : 'text-[#1A1A1A] hover:text-black'
                }`}
              >
                {item.label}
              </a>
            ))}

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate('estimator');
              }}
              className="text-sm font-medium text-[#666663] dark:text-[#A1A19A] flex items-center gap-1.5 py-1"
            >
              <Calculator size={15} />
              <span>Tính chi phí làm web</span>
            </button>
          </nav>
          
          {activeRole === 'GUEST' && (
            <div className="pt-3 border-t border-[#E6E4DD] dark:border-[#2A2A28]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuthModal();
                }}
                className="text-xs text-[#666663] dark:text-[#A1A19A]"
              >
                Admin Login
              </button>
            </div>
          )}
        </div>
      )}
    </header>
  );
};
