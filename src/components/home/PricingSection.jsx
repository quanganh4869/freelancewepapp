import React from 'react';
import { PRICING_TIERS } from '../../data/seedData';
import { useTheme } from '../../context/ThemeContext';
import { Check, Clock, MessageSquare } from 'lucide-react';

export const PricingSection = ({ onOpenRequestModal }) => {
  const { isDark } = useTheme();

  return (
    <section id="pricing" className={`py-16 md:py-24 border-b font-sans ${
      isDark ? 'bg-studio-900 border-white/10 text-white' : 'bg-white border-slate-200 text-slate-900 shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 reveal space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Bảng giá theo quy mô dự án
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-medium">
            Ngân sách linh hoạt, phù hợp với cá nhân, cửa hàng online và doanh nghiệp nhỏ.
          </p>
        </div>

        {/* 3 Pricing Tiers Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {PRICING_TIERS.map((tier, index) => {
            const delayClass = `reveal-delay-${index + 1}`;
            return (
              <div
                key={tier.id}
                className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative reveal ${delayClass} ${
                  tier.isPopular
                    ? 'border-2 border-brand-primary bg-slate-50 dark:bg-studio-950 shadow-lg scale-102'
                    : 'border border-slate-200 dark:border-slate-800 bg-white dark:bg-studio-900 shadow-sm hover:border-slate-300'
                }`}
              >
                {/* Popular Badge */}
                {tier.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-brand-primary text-white text-[11px] font-bold tracking-wider shadow-sm">
                    {tier.badge}
                  </div>
                )}

                <div className="space-y-6">
                  
                  {/* Tier Name & Subtitle */}
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {tier.name}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed font-medium">
                      {tier.subtitle}
                    </p>
                  </div>

                  {/* Price Banner */}
                  <div className="py-3 border-y border-slate-200 dark:border-slate-800 space-y-1">
                    <span className="text-2xl sm:text-3xl font-extrabold text-brand-primary block">
                      {tier.priceText}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400 font-medium">
                      <Clock size={13} className="text-brand-primary" />
                      <span>{tier.duration}</span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2.5">
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-300 tracking-wider block">
                      Tính năng bao gồm:
                    </span>
                    <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300 font-medium">
                      {tier.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <Check size={15} className="text-brand-primary shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* CTA Button */}
                <div className="pt-6 mt-6 border-t border-slate-200 dark:border-slate-800">
                  <button
                    onClick={() => onOpenRequestModal(`${tier.name} (${tier.priceText})`)}
                    className={`w-full py-3 px-4 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-2 ${
                      tier.isPopular
                        ? 'btn-primary'
                        : 'btn-secondary'
                    }`}
                  >
                    <MessageSquare size={14} />
                    <span>Trao đổi yêu cầu</span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Disclaimer Note */}
        <div className="mt-10 text-center text-xs text-slate-500 max-w-2xl mx-auto font-medium">
          <p>* Các mức giá trên mang tính chất tham khảo. Chi phí thực tế sẽ được thống nhất minh bạch sau khi tôi xem xét yêu cầu cụ thể của bạn.</p>
        </div>

      </div>
    </section>
  );
};
