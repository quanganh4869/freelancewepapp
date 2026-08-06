import React from 'react';
import { Layers, Mail, Phone, MapPin, Github, Linkedin, Twitter, Dribbble, CheckCircle2 } from 'lucide-react';

export const Footer = ({ onOpenRequestModal }) => {
  return (
    <footer className="bg-studio-950 border-t border-white/10 pt-16 pb-12 text-slate-400 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/5">
          
          {/* Col 1: Studio Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-brand-primary/10 border border-brand-primary/30 flex items-center justify-center text-brand-primary">
                <Layers size={20} />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                NEXUS <span className="text-brand-primary font-mono text-xs uppercase px-1.5 py-0.5 rounded bg-brand-primary/10 border border-brand-primary/20">Studio</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              Studio chuyên nghiệp thiết kế và phát triển Web App cao cấp cho Doanh nghiệp & SaaS Startup. Chuyển hóa ý tưởng kinh doanh thành phần mềm thực tế, tối ưu hiệu năng và quy mô dài hạn.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-mono bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-lg w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>All Engineering Systems Operational (99.9% Uptime)</span>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">Dịch vụ chính</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-white transition-colors">Custom Web App</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">SaaS Development</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Dashboard & Admin</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">E-commerce App</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">UI/UX Architecture</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">API & Integrations</a></li>
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">Studio</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#process" className="hover:text-white transition-colors">Quy trình làm việc</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Dự án tiêu biểu</a></li>
              <li><a href="#why-us" className="hover:text-white transition-colors">Tại sao chọn Nexus</a></li>
              <li><button onClick={onOpenRequestModal} className="text-brand-primary hover:underline font-medium">Bắt đầu dự án</button></li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">Liên hệ</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2.5 text-slate-300">
                <Mail size={15} className="text-brand-primary shrink-0" />
                <span>hello@nexusstudio.dev</span>
              </li>
              <li className="flex items-center gap-2.5 text-slate-300">
                <Phone size={15} className="text-brand-primary shrink-0" />
                <span>+84 (0) 908 123 456</span>
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
          <p>© {new Date().getFullYear()} NEXUS LABS STUDIO. Tất cả quyền được bảo lưu.</p>
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
