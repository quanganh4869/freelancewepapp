import React from 'react';
import { PRICING_TIERS } from '../../data/seedData';
import { Check, HelpCircle, ArrowRight, ShieldCheck, Info } from 'lucide-react';

export const PricingSection = ({ onOpenRequestModal }) => {
  return (
    <section id="chi-phi" className="py-16 md:py-24 border-b border-brand-border font-sans bg-brand-background dark:bg-studio-950 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-left space-y-3 reveal max-w-3xl">
          <span className="text-xs font-bold text-[#D05021] uppercase tracking-wider">
            Bảng giá trọn gói
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-primary dark:text-white">
            Chi phí minh bạch, không phí ẩn
          </h2>
          <p className="text-brand-muted text-sm sm:text-base leading-relaxed font-medium">
            Báo giá cố định cho từng dự án, không thu phí duy trì hàng tháng vô lý. Bảng dưới đây giúp bạn ước lượng ngân sách trước khi bắt đầu.
          </p>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {PRICING_TIERS.map((tier, index) => {
            const delayClass = `reveal-delay-${index + 1}`;
            return (
              <div
                key={tier.id}
                className={`p-7 rounded-2xl border flex flex-col justify-between space-y-6 transition-all duration-200 reveal ${delayClass} ${
                  tier.isPopular
                    ? 'border-[#24221E] dark:border-white bg-brand-paper dark:bg-studio-900 shadow-xl ring-2 ring-[#D05021]/30 relative'
                    : 'border-brand-border bg-brand-paper dark:bg-studio-900 hover:border-brand-muted'
                }`}
              >
                <div className="space-y-5">
                  
                  {/* Badge & Tier Header */}
                  <div className="flex items-center justify-between">
                    <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded ${
                      tier.isPopular
                        ? 'bg-[#D05021] text-white'
                        : 'bg-brand-background dark:bg-studio-950 border border-brand-border text-brand-muted'
                    }`}>
                      {tier.badge}
                    </span>
                    <span className="text-xs font-semibold text-brand-muted">
                      {tier.duration}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display text-2xl font-bold text-brand-primary dark:text-white">
                      {tier.name}
                    </h3>
                    <p className="text-xs text-brand-muted font-medium mt-1 leading-relaxed">
                      {tier.subtitle}
                    </p>
                  </div>

                  {/* Price Tag */}
                  <div className="py-2 border-y border-brand-border">
                    <span className="font-display text-3xl font-extrabold text-brand-primary dark:text-white">
                      {tier.priceText}
                    </span>
                    <span className="text-[11px] text-brand-muted block mt-0.5 font-medium">
                      Báo giá trọn gói bàn giao 1 lần
                    </span>
                  </div>

                  {/* Features Checklist */}
                  <div className="space-y-2.5">
                    <span className="text-xs font-bold text-brand-primary dark:text-white block uppercase tracking-wider">
                      Hạng mục bao gồm:
                    </span>
                    <ul className="space-y-2 text-xs text-brand-muted font-medium">
                      {tier.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check size={15} className="text-[#D05021] shrink-0 mt-0.5" />
                          <span className="text-brand-primary dark:text-slate-200">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Card Action Button */}
                <div className="pt-4 border-t border-brand-border">
                  <button
                    onClick={() => onOpenRequestModal(`${tier.name} (${tier.priceText})`)}
                    className={`w-full py-2.5 px-4 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-1.5 ${
                      tier.isPopular
                        ? 'btn-primary'
                        : 'btn-secondary'
                    }`}
                  >
                    <span>Chọn gói {tier.name}</span>
                    <ArrowRight size={13} />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Transparent Cost Explanation Note */}
        <div className="p-5 rounded-2xl border border-brand-border bg-brand-paper dark:bg-studio-900 space-y-3 text-xs leading-relaxed font-medium text-brand-muted reveal">
          <div className="flex items-center gap-2 font-bold text-brand-primary dark:text-white">
            <Info size={15} className="text-[#D05021]" />
            <span>Những khoản chi phí cần lưu ý (minh bạch tuyệt đối):</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
            <div className="space-y-1">
              <strong className="text-brand-primary dark:text-white block">1. Tên miền (Domain):</strong>
              <p>Khoảng 250.000đ – 350.000đ/năm cho đuôi .com. Tôi sẽ hỗ trợ bạn đăng ký chính chủ tên bạn, bạn giữ toàn quyền tài khoản.</p>
            </div>
            <div className="space-y-1">
              <strong className="text-brand-primary dark:text-white block">2. Nơi lưu trữ (Hosting):</strong>
              <p>Với website vừa và nhỏ, tôi cấu hình lưu trữ đám mây tối ưu, hoàn toàn 0đ hoặc chi phí cực thấp không cần trả phí hàng tháng.</p>
            </div>
            <div className="space-y-1">
              <strong className="text-brand-primary dark:text-white block">3. Quy định đặt cọc:</strong>
              <p>Đặt cọc 30% khi bắt đầu sau khi thống nhất phạm vi, phần còn lại thanh toán khi nghiệm thu hoàn tất trên tên miền chính thức.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
