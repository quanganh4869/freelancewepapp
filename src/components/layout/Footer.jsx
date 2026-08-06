import React from 'react';
import { Home, Mail, Phone, MapPin, Facebook, Youtube, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const Footer = ({ onOpenRequestModal }) => {
  return (
    <footer className="bg-studio-950 border-t border-white/10 pt-16 pb-12 text-slate-400 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/5">
          
          {/* Col 1: Studio Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-primary/10 border border-brand-primary/30 flex items-center justify-center text-brand-primary shadow-glow-primary">
                <Home size={22} />
              </div>
              <div>
                <span className="font-extrabold text-xl tracking-tight text-white flex items-center gap-1.5">
                  XÂY NHÀ ĐẸP <span className="text-brand-primary font-mono text-[10px] font-bold uppercase px-1.5 py-0.5 rounded bg-brand-primary/10 border border-brand-primary/20">Studio</span>
                </span>
                <p className="text-[10px] text-slate-400 font-mono tracking-wider uppercase">Thiết Kế & Thi Công Trọn Gói</p>
              </div>
            </div>
            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              Công ty hàng đầu chuyên thiết kế kiến trúc, thi công biệt thự, nhà phố, căn hộ trọn gói chìa khóa trao tay. Cam kết vật tư chính hãng 100%, không phát sinh chi phí và bảo hành công trình lên đến 10 năm.
            </p>
            <div className="flex items-center gap-2 text-xs text-brand-primary font-mono bg-brand-primary/10 border border-brand-primary/20 px-3 py-1.5 rounded-lg w-fit font-bold">
              <ShieldCheck size={14} />
              <span>Chính Sách Bảo Hành Kết Cấu 10 Năm</span>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">Hạng Mục Thi Công</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" className="hover:text-white transition-colors">Xây Nhà Trọn Gói</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Thiết Kế Kiến Trúc 3D</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Thiết Kế & Thi Công Nội Thất</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Sửa Chữa & Cải Tạo Nhà</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Thi Công Phần Thô</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Giám Sát Xây Dựng</a></li>
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">Về Chúng Tôi</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#cost-estimator" className="hover:text-white transition-colors">Tính Chi Phí Xây Nhà</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">Quy Trình 6 Bước</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Dự Án Tiêu Biểu</a></li>
              <li><a href="#why-us" className="hover:text-white transition-colors">Ưu Thế Xây Nhà Đẹp</a></li>
              <li><button onClick={() => onOpenRequestModal()} className="text-brand-primary hover:underline font-bold">Yêu Cầu Báo Giá</button></li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">Thông Tin Liên Hệ</h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-center gap-2.5 text-slate-300">
                <Phone size={15} className="text-brand-primary shrink-0" />
                <a href="tel:0908123456" className="hover:text-white font-bold font-mono">0908.123.456</a>
              </li>
              <li className="flex items-center gap-2.5 text-slate-300">
                <Mail size={15} className="text-brand-primary shrink-0" />
                <span>info@xaynhadep.vn</span>
              </li>
              <li className="flex items-start gap-2.5 text-slate-300">
                <MapPin size={15} className="text-brand-primary shrink-0 mt-0.5" />
                <span>Landmark Tower, Q.1, TP. Hồ Chí Minh</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} XÂY NHÀ ĐẸP STUDIO • Monamedia UX/UI Design Standard. Tất cả quyền được bảo lưu.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition-colors"><Facebook size={16} /></a>
            <a href="#" className="hover:text-white transition-colors"><Youtube size={16} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};
