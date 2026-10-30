import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { Sun, Moon, ChevronDown, X, Menu } from 'lucide-react';

export const SiteHeader = () => {
  const { isDark, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdown(false);
  }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-[#05060c]/90 backdrop-blur-md border-b border-[rgba(180,170,255,0.14)] shadow-lg'
          : 'bg-[#05060c]/70 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 h-[74px] flex items-center justify-between">
        
        {/* Brand / Logo */}
        <Link to="/" className="flex items-center gap-3 text-[#f3f2fb] group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#00e7ff] via-[#2a6bff] to-[#ff00e7] flex items-center justify-center p-[1px]">
            <div className="w-full h-full bg-[#05060c] rounded-[7px] flex items-center justify-center font-disp font-bold text-sm text-[#f3f2fb] group-hover:text-[#00e7ff] transition-colors">
              QA
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-disp font-bold text-[16px] sm:text-[17px] tracking-tight leading-none text-[#f3f2fb]">
              Quang Anh Studio
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-[14px] font-medium text-[#a7a6c4]">
          <a
            href="/#work"
            className="hover:text-[#f3f2fb] transition-colors"
          >
            Dự án
          </a>
          <a
            href="/#toolkit"
            className="hover:text-[#f3f2fb] transition-colors"
          >
            Năng lực
          </a>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesDropdown(true)}
            onMouseLeave={() => setServicesDropdown(false)}
          >
            <Link
              to="/services"
              className="hover:text-[#f3f2fb] transition-colors inline-flex items-center gap-1 py-2"
            >
              <span>Dịch vụ</span>
              <ChevronDown size={13} className={`transition-transform duration-200 ${servicesDropdown ? 'rotate-180 text-[#00e7ff]' : ''}`} />
            </Link>

            {servicesDropdown && (
              <div className="absolute top-full left-0 w-64 p-2 rounded-xl bg-[#0a0b14]/95 backdrop-blur-xl border border-[rgba(180,170,255,0.2)] shadow-2xl space-y-1">
                {[
                  { name: 'Landing Page Bán Hàng', path: '/services/landing-page' },
                  { name: 'Website Doanh Nghiệp', path: '/services/business-web' },
                  { name: 'Website Cá Nhân & Portfolio', path: '/services/personal-portfolio' },
                  { name: 'Web App & Hệ Thống Theo Yêu Cầu', path: '/services/custom-webapp' },
                ].map((s) => (
                  <Link
                    key={s.path}
                    to={s.path}
                    className="block px-3 py-2 rounded-lg text-[13px] text-[#a7a6c4] hover:text-[#f3f2fb] hover:bg-white/[0.06] transition-colors"
                  >
                    {s.name}
                  </Link>
                ))}
                <div className="pt-1 mt-1 border-t border-white/10">
                  <Link
                    to="/services"
                    className="block px-3 py-1.5 text-[12px] font-mono font-semibold text-[#00e7ff] hover:underline"
                  >
                    Tất cả dịch vụ →
                  </Link>
                </div>
              </div>
            )}
          </div>

          <a
            href="/#about"
            className="hover:text-[#f3f2fb] transition-colors"
          >
            Giới thiệu
          </a>
          <a
            href="/#process"
            className="hover:text-[#f3f2fb] transition-colors"
          >
            Quy trình
          </a>
          <a
            href="/#contact"
            className="hover:text-[#f3f2fb] transition-colors"
          >
            Liên hệ
          </a>
        </nav>

        {/* Action Button & Theme Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-[#a7a6c4] hover:text-[#f3f2fb] hover:bg-white/[0.06] transition-colors"
            title="Đổi giao diện"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          <Link
            to="/start-project"
            className="btn-prism hidden sm:inline-flex"
          >
            <span>Yêu cầu làm website</span>
            <span className="font-bold">↗</span>
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#f3f2fb] text-[20px] font-mono leading-none focus:outline-none"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0b14]/98 backdrop-blur-2xl border-b border-[rgba(180,170,255,0.2)] px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3 text-[16px] font-medium text-[#f3f2fb]">
            <a href="/#about" onClick={() => setMobileMenuOpen(false)} className="py-1">
              Giới thiệu
            </a>
            <a href="/#work" onClick={() => setMobileMenuOpen(false)} className="py-1">
              Dự án
            </a>
            <a href="/#toolkit" onClick={() => setMobileMenuOpen(false)} className="py-1">
              Năng lực
            </a>
            <a href="/#process" onClick={() => setMobileMenuOpen(false)} className="py-1">
              Quy trình
            </a>
            <a href="/#contact" onClick={() => setMobileMenuOpen(false)} className="py-1">
              Liên hệ
            </a>
          </div>

          <div className="pt-3 border-t border-white/10">
            <Link
              to="/start-project"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-prism w-full text-center"
            >
              <span>Yêu cầu làm website ↗</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default SiteHeader;
