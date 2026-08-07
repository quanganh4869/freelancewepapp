import React from 'react';
import { INITIAL_SERVICES } from '../../data/seedData';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const ServicesSection = ({ onSelectService }) => {
  const { language, t } = useLanguage();
  const { isDark } = useTheme();

  return (
    <section id="services" className={`py-20 border-b font-sans ${
      isDark ? 'bg-studio-950 border-white/10 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 reveal">
          <div className="space-y-3 max-w-2xl">
            <div className="studio-badge">
              <span>DỊCH VỤ</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white font-display">
              Giải Pháp Web App Tùy Chỉnh
            </h2>
          </div>
          <p className="text-slate-600 dark:text-slate-400 text-sm max-w-md leading-relaxed">
            Mỗi phần mềm được lập trình riêng theo quy trình nghiệp vụ của bạn, giúp tiết kiệm chi phí và quản lý dễ dàng.
          </p>
        </div>

        {/* Editorial Services List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INITIAL_SERVICES.map((service, index) => {
            const title = language === 'en' ? service.title : service.titleVi;
            const numberFormatted = String(index + 1).padStart(2, '0');
            const delayClass = `reveal-delay-${(index % 3) + 1}`;
            return (
              <div
                key={service.id}
                className={`studio-card p-7 rounded-2xl flex flex-col justify-between group hover:border-brand-primary transition-all duration-250 shadow-sm reveal ${delayClass}`}
              >
                <div className="space-y-5">
                  {/* Top Number & Badge */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-2xl font-bold text-brand-primary">
                      {numberFormatted}
                    </span>
                    {service.badge && (
                      <span className="text-[10px] font-mono font-bold text-brand-primary bg-brand-primary/10 border border-brand-primary/20 px-2.5 py-0.5 rounded-full uppercase">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand-primary transition-colors font-display">
                      {title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2 pt-4 border-t border-slate-200 dark:border-slate-800">
                    <p className="text-[11px] font-mono text-slate-700 dark:text-slate-300 uppercase tracking-wider font-bold">
                      Bàn Giao:
                    </p>
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                        <CheckCircle2 size={13} className="text-brand-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Line */}
                <div className="pt-5 mt-5 border-t border-slate-200 dark:border-slate-800">
                  <button
                    onClick={() => onSelectService(title)}
                    className="w-full flex items-center justify-between text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-brand-primary transition-colors group-hover:translate-x-1 duration-200 font-display"
                  >
                    <span>Yêu Cầu Báo Giá</span>
                    <ArrowRight size={14} className="text-brand-primary" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
