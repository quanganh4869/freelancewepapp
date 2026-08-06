import React from 'react';
import { INITIAL_SERVICES } from '../../data/seedData';
import { Code2, Layers, LayoutDashboard, ShoppingBag, Building2, Figma, Cpu, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

const iconMap = {
  Code2: Code2,
  Layers: Layers,
  LayoutDashboard: LayoutDashboard,
  ShoppingBag: ShoppingBag,
  Building2: Building2,
  Figma: Figma,
  Cpu: Cpu,
  ShieldCheck: ShieldCheck
};

export const ServicesSection = ({ onSelectService }) => {
  return (
    <section id="services" className="py-24 bg-studio-950 relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-mono font-medium">
            EXPERT SERVICES
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Giải pháp phát triển Web App toàn diện
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Chúng tôi không xây dựng những template sơ sài. Mỗi dự án đều là một giải pháp kiến trúc phần mềm được đo đạc riêng cho mục tiêu tăng trưởng của bạn.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {INITIAL_SERVICES.map((service) => {
            const IconComponent = iconMap[service.iconName] || Code2;
            return (
              <div
                key={service.id}
                className="studio-card-border p-6 rounded-2xl flex flex-col justify-between group hover:border-brand-primary/40 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div>
                  {/* Top Bar: Icon & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all shadow-glow-primary">
                      <IconComponent size={24} />
                    </div>
                    {service.badge && (
                      <span className="text-[10px] font-mono font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Short Desc */}
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-primary transition-colors">
                    {service.titleVi}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  {/* Deliverables checklist */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-white/5">
                    <p className="text-[11px] font-mono text-slate-300 font-semibold uppercase tracking-wider">Bao gồm:</p>
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-400">
                        <CheckCircle2 size={13} className="text-brand-primary shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <button
                  onClick={() => onSelectService(service.title)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-studio-900 hover:bg-brand-primary text-slate-300 hover:text-white text-xs font-semibold border border-white/10 transition-all group-hover:border-brand-primary/30"
                >
                  <span>Gửi yêu cầu dịch vụ</span>
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
