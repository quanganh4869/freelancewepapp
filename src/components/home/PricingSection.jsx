import React from 'react';
import { PRICING_TIERS } from '../../data/seedData';
import { useTheme } from '../../context/ThemeContext';
import { Check } from 'lucide-react';

export const PricingSection = ({ onOpenRequestModal }) => {
  const { isDark } = useTheme();

  return (
    <section id="chi-phi" className="py-16 md:py-24 border-b border-[#E6E4DD] dark:border-[#2A2A28] font-sans">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-left space-y-2 reveal">
          <span className="text-xs font-semibold text-[#666663] dark:text-[#A1A19A]">
            Chi phí tham khảo
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1A1A1A] dark:text-white">
            Ngân sách của bạn mua được gì
          </h2>
          <p className="text-[#666663] dark:text-[#A1A19A] text-sm leading-relaxed font-medium pt-1">
            Tôi báo giá trọn gói cho từng dự án, không tính theo tháng. Bảng này để bạn ước lượng trước khi nhắn.
          </p>
        </div>

        {/* Pricing Tiers List */}
        <div className="space-y-6">
          {PRICING_TIERS.map((tier, index) => {
            const delayClass = `reveal-delay-${index + 1}`;
            return (
              <div
                key={tier.id}
                className={`p-6 sm:p-7 rounded-2xl border bg-white dark:bg-[#1A1A19] space-y-5 reveal ${delayClass} ${
                  tier.isPopular ? 'border-[#1A1A1A] dark:border-white shadow-sm' : 'border-[#E6E4DD] dark:border-[#2A2A28]'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E6E4DD] dark:border-[#2A2A28] pb-4">
                  <div>
                    <h3 className="text-lg font-bold text-[#1A1A1A] dark:text-white">
                      {tier.name}
                    </h3>
                    <p className="text-xs text-[#666663] dark:text-[#A1A19A] mt-0.5 font-medium">
                      {tier.subtitle}
                    </p>
                  </div>
                  <div className="text-left sm:text-right">
                    <span className="text-lg font-extrabold text-[#1A1A1A] dark:text-white block">
                      {tier.priceText}
                    </span>
                    <span className="text-xs text-[#666663] dark:text-[#A1A19A] font-medium">{tier.duration}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-semibold text-[#1A1A1A] dark:text-white">Tính năng bao gồm:</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#666663] dark:text-[#A1A19A] font-medium">
                    {tier.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Check size={14} className="text-[#1A1A1A] dark:text-white shrink-0" />
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
        <div className="p-5 rounded-2xl bg-[#FAF9F6] dark:bg-[#121212] border border-[#E6E4DD] dark:border-[#2A2A28] text-xs text-[#666663] dark:text-[#A1A19A] font-medium leading-relaxed">
          Chưa gồm tên miền, hosting và ảnh mua bản quyền. Cọc 30% khi bắt đầu, phần còn lại khi bàn giao. Nếu ngân sách của bạn thấp hơn, cứ nói — tôi sẽ tư vấn cắt bớt phạm vi thay vì làm ẩu.
        </div>

      </div>
    </section>
  );
};
