import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import { Mail, Phone, MapPin, Github } from 'lucide-react';

export const Footer = ({ onOpenRequestModal }) => {
  const { t } = useLanguage();
  const { isDark } = useTheme();

  return (
    <footer className={`border-t pt-16 pb-12 font-sans transition-colors ${
      isDark ? 'bg-studio-950 border-white/10 text-slate-400' : 'bg-slate-900 border-slate-800 text-slate-300'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Developer Personal Info & Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-brand-primary text-white flex items-center justify-center font-mono font-bold text-sm">
                <span>QA</span>
              </div>
              <span className="font-extrabold text-lg tracking-tight text-white font-sans">
                QUANG ANH <span className="text-brand-primary font-mono text-[11px] font-bold tracking-widest ml-1">STUDIO</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              Quang Anh chuyên thiết kế & lập trình ứng dụng Web App tùy chỉnh cho Doanh nghiệp và Startup. Giúp tự động hóa quy trình quản lý, tiết kiệm chi phí và tăng trưởng doanh thu thực tế.
            </p>
            <div className="font-mono text-[11px] text-brand-primary font-semibold flex items-center gap-2">
              <Github size={14} />
              <a href="https://github.com/quanganh4869/freelancewepapp" target="_blank" rel="noreferrer" className="hover:underline">
                github.com/quanganh4869/freelancewepapp
              </a>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">Dịch Vụ Nổi Bật</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" className="hover:text-white transition-colors">Custom Web App</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Phần Mềm Dịch Vụ SaaS</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Trang Quản Trị & Admin System</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Web App Bán Hàng B2B</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Công Cụ Tự Động Hóa Nội Bộ</a></li>
            </ul>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">Điều Hướng</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#cost-estimator" className="hover:text-white transition-colors">Tính Chi Phí Dự Kiến</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">Quy Trình 7 Bước</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Dự Án Đã Làm</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Về Quang Anh</a></li>
              <li><button onClick={() => onOpenRequestModal()} className="text-brand-primary hover:underline font-bold">Gửi Yêu Cầu Báo Giá</button></li>
            </ul>
          </div>

          {/* Col 4: Personal Contact Info */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">Thông Tin Liên Hệ</h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-center gap-2 text-slate-300">
                <Mail size={14} className="text-brand-primary shrink-0" />
                <a href="mailto:quanganhqb04@gmail.com" className="hover:text-white font-bold">quanganhqb04@gmail.com</a>
              </li>
              <li className="flex items-center gap-2 text-slate-300 font-mono">
                <Phone size={14} className="text-brand-primary shrink-0" />
                <a href="tel:0908123456" className="hover:text-white font-bold">+84 (0) 908 123 456</a>
              </li>
              <li className="flex items-start gap-2 text-slate-300">
                <MapPin size={14} className="text-brand-primary shrink-0 mt-0.5" />
                <span>Việt Nam (Hỗ trợ trực tuyến & Trực tiếp)</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono">
          <p>© {new Date().getFullYear()} QUANG ANH STUDIO. {t('copyright')}</p>
          <div className="flex items-center gap-6">
            <a href="https://github.com/quanganh4869/freelancewepapp" target="_blank" rel="noreferrer" className="hover:text-slate-200 transition-colors">GitHub Repository</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
