import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Mail, Phone, MapPin, Github, Send } from 'lucide-react';

export const Footer = ({ onOpenRequestModal }) => {
  const { isDark } = useTheme();

  return (
    <footer className={`border-t pt-14 pb-10 font-sans transition-colors ${
      isDark ? 'bg-studio-950 border-slate-800/80 text-slate-400' : 'bg-slate-900 border-slate-800 text-slate-300'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-slate-800">
          
          {/* Col 1: Developer Personal Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-brand-primary text-white flex items-center justify-center font-mono font-bold text-sm">
                <span>QA</span>
              </div>
              <span className="font-extrabold text-lg tracking-tight text-white font-display">
                QUANG ANH <span className="text-brand-primary font-mono text-[10px] font-bold tracking-wider ml-1 uppercase">FREELANCER</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Tôi là freelancer chuyên thiết kế và phát triển website theo yêu cầu. Giá cả minh bạch từ 1 triệu đồng, làm việc trực tiếp 1-1 và đúng hẹn.
            </p>
            <div className="font-mono text-[11px] text-brand-primary font-bold flex items-center gap-2">
              <Github size={14} />
              <a href="https://github.com/quanganh4869/freelancewepapp" target="_blank" rel="noreferrer" className="hover:underline">
                github.com/quanganh4869/freelancewepapp
              </a>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-3 font-display">Dịch Vụ</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" className="hover:text-white transition-colors">Website Cá Nhân & Portfolio</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Landing Page Bán Hàng</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Website Doanh Nghiệp & Shop</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Web App & Dashboard Nhỏ</a></li>
            </ul>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-3 font-display">Bảng Giá & Dự Án</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#pricing" className="hover:text-white transition-colors">Bảng Giá Tham Khảo (Từ 1 Tr)</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">Quy Trình 4 Bước</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Dự Án Đã Triển Khai</a></li>
              <li><button onClick={() => onOpenRequestModal()} className="text-brand-primary hover:underline font-bold font-display">Gửi Yêu Cầu Đặt Web</button></li>
            </ul>
          </div>

          {/* Col 4: Personal Contact Info */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-3 font-display">Liên Hệ Trực Tiếp</h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-center gap-2 text-slate-300">
                <Mail size={14} className="text-brand-primary shrink-0" />
                <a href="mailto:quanganhqb04@gmail.com" className="hover:text-white font-bold font-mono">quanganhqb04@gmail.com</a>
              </li>
              <li className="flex items-center gap-2 text-slate-300 font-mono">
                <Phone size={14} className="text-brand-primary shrink-0" />
                <a href="tel:0908123456" className="hover:text-white font-bold">Zalo: 0908 123 456</a>
              </li>
              <li className="flex items-start gap-2 text-slate-300">
                <MapPin size={14} className="text-brand-primary shrink-0 mt-0.5" />
                <span>Việt Nam (Hỗ trợ trực tiếp & Trực tuyến)</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono">
          <p>© {new Date().getFullYear()} QUANG ANH FREELANCER. Tất cả quyền được bảo lưu.</p>
          <div className="flex items-center gap-4">
            <a href="#about" className="hover:text-slate-200 transition-colors">Về Tôi</a>
            <span>•</span>
            <a href="#services" className="hover:text-slate-200 transition-colors">Dịch Vụ</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
