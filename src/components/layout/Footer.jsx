import React from 'react';
import { Layers, Mail, Phone, MapPin, Github, Linkedin, Twitter, Dribbble, ShieldCheck } from 'lucide-react';

export const Footer = ({ onOpenRequestModal }) => {
  return (
    <footer className="bg-studio-950 border-t border-white/10 pt-16 pb-12 text-slate-400 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/5">
          
          {/* Col 1: Studio Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-primary/10 border border-brand-primary/30 flex items-center justify-center text-brand-primary shadow-glow-primary">
                <Layers size={22} />
              </div>
              <div>
                <span className="font-extrabold text-xl tracking-tight text-white flex items-center gap-1.5">
                  NEXUS <span className="text-brand-primary font-mono text-[10px] font-bold uppercase px-1.5 py-0.5 rounded bg-brand-primary/10 border border-brand-primary/20">Studio</span>
                </span>
                <p className="text-[10px] text-slate-400 font-mono tracking-wider uppercase">Web App Architecture & Engineering</p>
              </div>
            </div>
            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              Studio chuyên nghiệp thiết kế và phát triển Web App cao cấp cho Doanh nghiệp & SaaS Startup. Chuyển hóa ý tưởng kinh doanh thành phần mềm thực tế, tối ưu hiệu năng và quy mô dài hạn.
            </p>
            <div className="flex items-center gap-2 text-xs text-brand-primary font-mono bg-brand-primary/10 border border-brand-primary/20 px-3 py-1.5 rounded-lg w-fit font-bold">
              <ShieldCheck size={14} />
              <span>All Engineering Systems Operational (99.9% Uptime)</span>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">Dịch Vụ Chính</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" className="hover:text-white transition-colors">Custom Web App</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">SaaS Development</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Dashboard & Admin System</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">E-commerce Web App</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Business Workflow App</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">UI/UX Architecture</a></li>
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">Nexus Studio</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#cost-estimator" className="hover:text-white transition-colors">Tính Báo Giá Web App</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">Quy Trình 7 Bước</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Dự Án Tiêu Biểu</a></li>
              <li><a href="#why-us" className="hover:text-white transition-colors">Ưu Thế Kỹ Thuật</a></li>
              <li><button onClick={() => onOpenRequestModal()} className="text-brand-primary hover:underline font-bold">Bắt Đầu Dự Án</button></li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">Liên Hệ Studio</h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-center gap-2.5 text-slate-300">
                <Mail size={15} className="text-brand-primary shrink-0" />
                <span>hello@nexusstudio.dev</span>
              </li>
              <li className="flex items-center gap-2.5 text-slate-300">
                <Phone size={15} className="text-brand-primary shrink-0" />
                <a href="tel:0908123456" className="hover:text-white font-bold font-mono">+84 (0) 908 123 456</a>
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
          <p>© {new Date().getFullYear()} NEXUS LABS STUDIO • Mona Media UX/UI Style Standard. Tất cả quyền được bảo lưu.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition-colors"><Github size={16} /></a>
            <a href="#" className="hover:text-white transition-colors"><Linkedin size={16} /></a>
            <a href="#" className="hover:text-white transition-colors"><Twitter size={16} /></a>
            <a href="#" className="hover:text-white transition-colors"><Dribbble size={16} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};
