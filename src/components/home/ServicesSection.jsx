import React from 'react';
import { INITIAL_SERVICES } from '../../data/seedData';
import { useLanguage } from '../../context/LanguageContext';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const ServicesSection = ({ onSelectService }) => {
  const { language, t } = useLanguage();

  return (
    <section id="services" className="py-24 bg-studio-950 border-b border-white/10 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4 max-w-2xl">
            <div className="studio-badge">
              <span>{t('servicesTag')}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              {t('servicesTitle')}
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md leading-relaxed">
            {t('servicesDesc')}
          </p>
        </div>

        {/* Editorial Services List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INITIAL_SERVICES.map((service, index) => {
            const title = language === 'en' ? service.title : service.titleVi;
            const numberFormatted = String(index + 1).padStart(2, '0');
            return (
              <div
                key={service.id}
                className="studio-card p-8 rounded-xl flex flex-col justify-between group hover:border-brand-primary transition-all duration-200"
              >
                <div className="space-y-6">
                  {/* Top Number & Badge */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-2xl font-bold text-brand-primary">
                      {numberFormatted}
                    </span>
                    {service.badge && (
                      <span className="text-[10px] font-mono font-bold text-amber-500 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded uppercase">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold group-hover:text-brand-primary transition-colors">
                      {title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2 pt-4 border-t border-slate-800">
                    <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider font-semibold">
                      {t('deliverablesLabel')}
                    </p>
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                        <CheckCircle2 size={13} className="text-brand-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Line */}
                <div className="pt-6 mt-6 border-t border-slate-800/60">
                  <button
                    onClick={() => onSelectService(title)}
                    className="w-full flex items-center justify-between text-xs font-semibold text-slate-300 hover:text-brand-primary transition-colors group-hover:translate-x-1 duration-200"
                  >
                    <span>{t('requestServiceBtn')}</span>
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
