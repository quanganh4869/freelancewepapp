import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Footer = ({ onOpenRequestModal }) => {
  const { t } = useLanguage();
  const { isDark } = useTheme();

  return (
    <footer className={`border-t pt-16 pb-12 font-sans transition-colors ${
      isDark ? 'bg-studio-950 border-white/10 text-slate-400' : 'bg-slate-900 border-slate-800 text-slate-300'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Studio Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-brand-primary text-white flex items-center justify-center font-mono font-bold text-sm">
                <span>N</span>
              </div>
              <span className="font-extrabold text-lg tracking-tight text-white font-sans">
                NEXUS <span className="text-brand-primary font-mono text-[11px] font-bold tracking-widest ml-1">STUDIO</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              {t('footerDesc')}
            </p>
            <div className="font-mono text-[11px] text-brand-primary font-semibold">
              Standard: ISO 27001 & SOC2 Compliant
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">Dịch Vụ</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" className="hover:text-white transition-colors">Custom Web App</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">SaaS Development</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Dashboard & Admin System</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">E-commerce Web App</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Internal Workflow Tool</a></li>
            </ul>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">Nexus Studio</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#cost-estimator" className="hover:text-white transition-colors">Tính Báo Giá</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">Quy Trình 7 Bước</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Dự Án Tiêu Biểu</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Về Chúng Tôi</a></li>
              <li><button onClick={() => onOpenRequestModal()} className="text-brand-primary hover:underline font-bold">{t('startProject')}</button></li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">Liên Hệ</h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-center gap-2 text-slate-300">
                <Mail size={14} className="text-brand-primary shrink-0" />
                <span>hello@nexusstudio.dev</span>
              </li>
              <li className="flex items-center gap-2 text-slate-300 font-mono">
                <Phone size={14} className="text-brand-primary shrink-0" />
                <a href="tel:0908123456" className="hover:text-white font-bold">+84 (0) 908 123 456</a>
              </li>
              <li className="flex items-start gap-2 text-slate-300">
                <MapPin size={14} className="text-brand-primary shrink-0 mt-0.5" />
                <span>Landmark Tower, Q.1, TP. Hồ Chí Minh</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono">
          <p>© {new Date().getFullYear()} NEXUS STUDIO. {t('copyright')}</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-200 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-200 transition-colors">Terms of Engineering</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
