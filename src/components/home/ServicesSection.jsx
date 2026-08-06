import React from 'react';
import { INITIAL_SERVICES } from '../../data/seedData';
import { useLanguage } from '../../context/LanguageContext';
import { Code2, Layers, LayoutDashboard, ShoppingBag, Building2, Figma, ArrowRight, CheckCircle2 } from 'lucide-react';

const iconMap = {
  Code2: Code2,
  Layers: Layers,
  LayoutDashboard: LayoutDashboard,
  ShoppingBag: ShoppingBag,
  Building2: Building2,
  Figma: Figma
};

export const ServicesSection = ({ onSelectService }) => {
  const { language, t } = useLanguage();

  return (
    <section id="services" className="py-24 bg-studio-950 relative border-b border-white/5 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-mono font-bold tracking-wider uppercase">
            {t('servicesTag')}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t('servicesTitle')}
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            {t('servicesDesc')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INITIAL_SERVICES.map((service) => {
            const IconComponent = iconMap[service.iconName] || Code2;
            const title = language === 'en' ? service.title : service.titleVi;
            return (
              <div
                key={service.id}
                className="mona-card p-6 sm:p-7 rounded-2xl flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar: Icon & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-brand-primary/10 border border-brand-primary/30 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all shadow-glow-primary">
                      <IconComponent size={24} />
                    </div>
                    {service.badge && (
                      <span className="text-[10px] font-mono font-bold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 rounded-full uppercase">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Short Desc */}
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-primary transition-colors">
                    {title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  {/* Deliverables checklist */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-white/5">
                    <p className="text-[11px] font-mono text-slate-300 font-semibold uppercase tracking-wider">{t('deliverablesLabel')}</p>
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                        <CheckCircle2 size={14} className="text-brand-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <button
                  onClick={() => onSelectService(title)}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-studio-950 hover:bg-brand-primary text-slate-300 hover:text-white text-xs font-bold border border-slate-800 transition-all group-hover:border-brand-primary/40 shadow-sm"
                >
                  <span>{t('requestServiceBtn')}</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
