import React from 'react';
import { ArrowRight, Check, Users, Clock, Tag } from 'lucide-react';
import { INITIAL_SERVICES } from '../../data/seedData';

export const ServicesSection = ({ onSelectService }) => {
  return (
    <section id="dich-vu" className="py-16 md:py-24 border-b border-brand-border font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-left space-y-3 reveal max-w-3xl">
          <span className="text-xs font-bold text-[#D05021] uppercase tracking-wider">
            Dịch vụ cung cấp
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-primary dark:text-white">
            Bốn nhóm website phổ biến cho công việc của bạn
          </h2>
          <p className="text-brand-muted text-sm sm:text-base leading-relaxed font-medium">
            Bạn không cần phân biệt sâu về mặt kỹ thuật. Hãy xem nhóm nào khớp với mục tiêu kinh doanh của mình dưới đây.
          </p>
        </div>

        {/* 4 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {INITIAL_SERVICES.map((service, index) => {
            const delayClass = `reveal-delay-${(index % 2) + 1}`;
            return (
              <div
                key={service.id}
                className={`p-6 sm:p-7 rounded-xl border border-brand-border bg-brand-paper dark:bg-studio-900 flex flex-col justify-between space-y-5 hover:border-brand-muted transition-all duration-200 reveal ${delayClass}`}
              >
                <div className="space-y-4">
                  
                  {/* Top Bar: Number & Badge & Starting Price */}
                  <div className="flex items-center justify-between gap-2 border-b border-brand-border pb-3">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-brand-muted bg-brand-background dark:bg-studio-950 px-2 py-0.5 rounded border border-brand-border">
                        {service.number}
                      </span>
                      <span className="text-[11px] font-semibold text-[#D05021] bg-[#D05021]/10 px-2 py-0.5 rounded">
                        {service.badge}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-bold text-brand-primary dark:text-white">
                        {service.priceStarting}
                      </span>
                    </div>
                  </div>

                  {/* Title & Short Description */}
                  <div>
                    <h3 className="font-display text-xl font-bold text-brand-primary dark:text-white">
                      {service.title}
                    </h3>
                    <p className="text-sm text-brand-muted leading-relaxed font-medium mt-2">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* For Whom Tag */}
                  <div className="p-3 rounded-lg bg-brand-background dark:bg-studio-950 border border-brand-border text-xs text-brand-muted space-y-1">
                    <div className="flex items-center gap-1.5 font-semibold text-brand-primary dark:text-white">
                      <Users size={13} className="text-[#D05021]" />
                      <span>Phù hợp nhất với:</span>
                    </div>
                    <p className="font-medium leading-relaxed pl-4">{service.forWhom}</p>
                  </div>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2 pt-1">
                    <span className="text-xs font-bold text-brand-primary dark:text-white block">
                      Thường bao gồm các hạng mục:
                    </span>
                    <ul className="space-y-1.5 text-xs text-brand-muted font-medium">
                      {service.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check size={14} className="text-[#D05021] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Bottom Action */}
                <div className="pt-4 border-t border-brand-border flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-brand-muted font-medium">
                    <Clock size={13} />
                    <span>Thời gian: {service.timeline}</span>
                  </div>

                  <button
                    onClick={() => onSelectService(service.title)}
                    className="btn-primary py-2 px-4 text-xs font-semibold"
                  >
                    <span>Chọn gói này</span>
                    <ArrowRight size={13} />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Helpful Banner for Complex Requests */}
        <div className="p-5 rounded-xl bg-brand-paper dark:bg-studio-900 border border-brand-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 reveal">
          <div className="space-y-1">
            <h4 className="font-display font-bold text-sm sm:text-base text-brand-primary dark:text-white">
              Bạn có nhu cầu đặc thù hoặc chưa chắc chắn website của mình thuộc nhóm nào?
            </h4>
            <p className="text-xs text-brand-muted font-medium">
              Đừng lo, bạn chỉ cần mô tả qua lời nói hoặc tin nhắn. Tôi sẽ phân tích và gợi ý phương án tiết kiệm nhất.
            </p>
          </div>
          <button
            onClick={() => onSelectService('Cần tư vấn trực tiếp theo yêu cầu riêng')}
            className="btn-secondary py-2 px-4 text-xs font-semibold shrink-0"
          >
            Trao đổi nhu cầu trực tiếp
          </button>
        </div>

      </div>
    </section>
  );
};
