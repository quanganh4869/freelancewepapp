import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Mail, Phone, MapPin, Github } from 'lucide-react';

export const Footer = ({ onOpenRequestModal }) => {
  const { isDark } = useTheme();

  return (
    <footer className={`border-t pt-14 pb-10 font-sans transition-colors ${
      isDark ? 'bg-studio-950 border-slate-800 text-white' : 'bg-slate-950 border-slate-800 text-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-slate-800">
          
          {/* Col 1: Developer Personal Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-brand-primary text-white flex items-center justify-center font-extrabold text-sm shadow-md">
                <span>QA</span>
              </div>
              <span className="font-extrabold text-lg tracking-tight text-white">
                QUANG ANH <span className="text-brand-primary font-bold text-xs tracking-wider ml-1 uppercase">FREELANCER</span>
              </span>
            </div>
            <p className="text-xs text-slate-200 leading-relaxed font-semibold">
              Tôi là freelancer chuyên thiết kế và phát triển website theo yêu cầu. Giá cả minh bạch từ 1 triệu đồng, làm việc trực tiếp 1-1 và đúng hẹn.
            </p>
            <div className="text-xs text-orange-400 font-bold flex items-center gap-2 pt-1">
              <Github size={15} />
              <a href="https://github.com/quanganh4869/freelancewepapp" target="_blank" rel="noreferrer" className="hover:underline text-orange-400">
                github.com/quanganh4869/freelancewepapp
              </a>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3.5 border-b border-slate-800 pb-1">
              Dịch vụ
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold">
              <li><a href="#services" className="text-slate-100 hover:text-orange-400 hover:underline transition-colors">Website cá nhân & portfolio</a></li>
              <li><a href="#services" className="text-slate-100 hover:text-orange-400 hover:underline transition-colors">Landing page bán hàng</a></li>
              <li><a href="#services" className="text-slate-100 hover:text-orange-400 hover:underline transition-colors">Website doanh nghiệp & shop</a></li>
              <li><a href="#services" className="text-slate-100 hover:text-orange-400 hover:underline transition-colors">Web app & dashboard nhỏ</a></li>
            </ul>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3.5 border-b border-slate-800 pb-1">
              Bảng giá & dự án
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold">
              <li><a href="#pricing" className="text-slate-100 hover:text-orange-400 hover:underline transition-colors">Bảng giá tham khảo (Từ 1 tr)</a></li>
              <li><a href="#process" className="text-slate-100 hover:text-orange-400 hover:underline transition-colors">Quy trình 4 bước</a></li>
              <li><a href="#portfolio" className="text-slate-100 hover:text-orange-400 hover:underline transition-colors">Dự án đã triển khai</a></li>
              <li><button onClick={() => onOpenRequestModal()} className="text-orange-400 hover:underline font-bold">Gửi yêu cầu đặt web</button></li>
            </ul>
          </div>

          {/* Col 4: Personal Contact Info */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3.5 border-b border-slate-800 pb-1">
              Liên hệ trực tiếp
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-center gap-2 text-white">
                <Mail size={15} className="text-orange-400 shrink-0" />
                <a href="mailto:quanganhqb04@gmail.com" className="hover:text-orange-400 font-bold text-white">quanganhqb04@gmail.com</a>
              </li>
              <li className="flex items-center gap-2 text-white font-bold">
                <Phone size={15} className="text-orange-400 shrink-0" />
                <a href="tel:0935989872" className="hover:text-orange-400 font-bold text-white">Zalo: 0935 989 872</a>
              </li>
              <li className="flex items-start gap-2 text-slate-100 font-semibold">
                <MapPin size={15} className="text-orange-400 shrink-0 mt-0.5" />
                <span>Việt Nam (Hỗ trợ trực tiếp & trực tuyến)</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-200 font-bold">
          <p>© {new Date().getFullYear()} QUANG ANH FREELANCER. Tất cả quyền được bảo lưu.</p>
          <div className="flex items-center gap-4">
            <a href="#services" className="hover:text-orange-400 transition-colors">Dịch vụ</a>
            <span>•</span>
            <a href="#portfolio" className="hover:text-orange-400 transition-colors">Sản phẩm</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
