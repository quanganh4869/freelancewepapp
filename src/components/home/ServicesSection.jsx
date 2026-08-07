import React from 'react';
import { INITIAL_SERVICES } from '../../data/seedData';
import { useTheme } from '../../context/ThemeContext';
import { ArrowRight, CheckCircle2, Clock, Users, Upload } from 'lucide-react';

export const ServicesSection = ({ onSelectService }) => {
  const { isDark } = useTheme();

  return (
    <section id="services" className={`py-16 md:py-24 border-b font-sans ${
      isDark ? 'bg-studio-950 border-white/10 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 reveal space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Các gói dịch vụ thiết kế web
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-medium">
            Tôi trực tiếp làm việc 1-1 với bạn từ khâu trao đổi ý tưởng đến khi bàn giao website hoàn chỉnh. Nhận làm theo file thiết kế hoặc link Figma mẫu có sẵn.
          </p>
        </div>

        {/* 4 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {INITIAL_SERVICES.map((service, index) => {
            const delayClass = `reveal-delay-${(index % 2) + 1}`;
            return (
              <div
                key={service.id}
                className={`studio-card p-6 sm:p-8 rounded-2xl flex flex-col justify-between group hover:border-brand-primary transition-all duration-250 shadow-sm reveal ${delayClass}`}
              >
                <div className="space-y-5">
                  
                  {/* Card Header: Title & Starting Price */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand-primary transition-colors">
                        {service.titleVi}
                      </h3>
                      {service.badge && (
                        <span className="inline-block text-[10px] font-bold text-brand-primary bg-brand-primary/10 border border-brand-primary/20 px-2.5 py-0.5 rounded-full mt-1">
                          {service.badge}
                        </span>
                      )}
                    </div>

                    <div className="text-left sm:text-right">
                      <span className="text-xs text-slate-500 block font-medium">Mức giá tham khảo</span>
                      <span className="text-base font-extrabold text-brand-primary">
                        {service.priceStarting}
                      </span>
                    </div>
                  </div>

                  {/* Short Description */}
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                    {service.shortDesc}
                  </p>

                  {/* Metadata: Target Audience & Estimated Timeline */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-600 dark:text-slate-400">
                    <div className="flex items-start gap-2 bg-slate-100 dark:bg-studio-950 p-2.5 rounded-xl border border-slate-200 dark:border-slate-800">
                      <Users size={14} className="text-brand-primary shrink-0 mt-0.5" />
                      <div>
                        <span className="block font-bold text-[11px] text-slate-700 dark:text-slate-300">Phù hợp với:</span>
                        <span className="text-[11px] leading-tight block mt-0.5 font-medium">{service.forWhom}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 bg-slate-100 dark:bg-studio-950 p-2.5 rounded-xl border border-slate-200 dark:border-slate-800">
                      <Clock size={14} className="text-brand-primary shrink-0 mt-0.5" />
                      <div>
                        <span className="block font-bold text-[11px] text-slate-700 dark:text-slate-300">Thời gian làm:</span>
                        <span className="text-[11px] leading-tight block mt-0.5 font-medium">{service.timeline}</span>
                      </div>
                    </div>
                  </div>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2 pt-2">
                    <p className="text-[11px] text-slate-700 dark:text-slate-300 tracking-wider font-bold">
                      Sản phẩm bao gồm:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {service.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400 font-medium">
                          <CheckCircle2 size={13} className="text-brand-primary shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Design File / Figma Link Feature Badge */}
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-600 dark:text-orange-400 text-[11px] font-bold">
                    <Upload size={14} className="shrink-0" />
                    <span>Hỗ trợ gửi file thiết kế (PNG, PDF, Zip) hoặc link Figma khi đặt làm</span>
                  </div>

                </div>

                {/* Bottom Action Line */}
                <div className="pt-6 mt-6 border-t border-slate-200 dark:border-slate-800">
                  <button
                    onClick={() => onSelectService(service.titleVi)}
                    className="btn-primary w-full py-3 text-xs font-bold"
                  >
                    <span>Đặt làm gói này (Kèm file thiết kế)</span>
                    <ArrowRight size={14} />
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
