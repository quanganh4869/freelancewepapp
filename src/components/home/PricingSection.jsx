import React from 'react';
import { PRICING_TIERS } from '../../data/seedData';
import { Check } from 'lucide-react';

export const PricingSection = ({ onOpenRequestModal }) => {
  return (
    <section id="chi-phi" className="py-16 md:py-24 border-b border-brand-border font-sans">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-left space-y-2 reveal">
          <span className="text-xs font-semibold text-brand-muted uppercase tracking-wider">
            Chi phí tham khảo
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-brand-primary dark:text-white">
            Ngân sách của bạn mua được gì
          </h2>
          <p className="text-brand-muted text-sm leading-relaxed font-medium pt-1">
            Tôi báo giá trọn gói cho từng dự án, không tính theo tháng. Bảng này để bạn ước lượng trước khi nhắn.
          </p>
        </div>

        {/* Pricing Tiers List */}
        <div className="space-y-5">
          {PRICING_TIERS.map((tier, index) => {
            const delayClass = `reveal-delay-${index + 1}`;
            return (
              <div
                key={tier.id}
                className={`p-6 sm:p-7 rounded-lg border bg-brand-paper space-y-4 reveal ${delayClass} ${
                  tier.isPopular ? 'border-brand-primary shadow-sm' : 'border-brand-border'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-brand-border pb-4">
                  <div>
                    <h3 className="font-display text-lg font-bold text-brand-primary dark:text-white">
                      {tier.name}
                    </h3>
                    <p className="text-xs text-brand-muted mt-0.5 font-medium">
                      {tier.subtitle}
                    </p>
                  </div>
                  <div className="text-left sm:text-right">
                    <span className="text-lg font-extrabold text-brand-primary dark:text-white block">
                      {tier.priceText}
                    </span>
                    <span className="text-xs text-brand-muted font-medium">{tier.duration}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-semibold text-brand-primary dark:text-white">Tính năng bao gồm:</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-brand-muted font-medium">
                    {tier.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Check size={14} className="text-brand-primary dark:text-white shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => onOpenRequestModal(`${tier.name} (${tier.priceText})`)}
                    className="btn-primary w-full py-2.5 text-xs font-semibold"
                  >
                    Nhắn yêu cầu gói này
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Lovable Terms Box */}
        <div className="p-4 rounded-lg bg-brand-background border border-brand-border text-xs text-brand-muted font-medium leading-relaxed">
          Chưa gồm tên miền, hosting và ảnh mua bản quyền. Cọc 30% khi bắt đầu, phần còn lại khi bàn giao. Nếu ngân sách của bạn thấp hơn, cứ nói — tôi sẽ cắt bớt phạm vi thay vì làm ẩu.
        </div>

      </div>
    </section>
  );
};
