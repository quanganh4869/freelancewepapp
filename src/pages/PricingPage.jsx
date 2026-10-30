import React from 'react';
import { Link } from 'react-router-dom';
import { PRICING_TIERS } from '../data/seedData';
import { ArrowRight } from 'lucide-react';

export default function PricingPage() {
  return (
    <div className="py-12 sm:py-16 md:py-20 font-sans animate-page-in">
      
      {/* Header */}
      <div className="space-y-4 pb-12 sm:pb-16 border-b border-[#DAD0C7] dark:border-[#332B26]">
        <span className="text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.08em] text-[#82766F] dark:text-[#9E938B] block font-mono">
          PROJECT INVESTMENT / 2026
        </span>
        <h1 className="text-[40px] sm:text-[54px] md:text-[68px] font-[800] tracking-[-0.04em] text-[#38251F] dark:text-[#EDE6DE] leading-[1.02]">
          BẢNG GIÁ THAM KHẢO
        </h1>
        <p className="text-[17px] sm:text-[18px] text-[#82766F] dark:text-[#9E938B] max-w-[720px] leading-[1.65]">
          Mỗi website được định giá dựa trên khối lượng công việc thực tế, không có chi phí ẩn. Dưới đây là ba gói tham khảo phổ biến để bạn dễ dàng dự trù ngân sách ban đầu.
        </p>
      </div>

      {/* Pricing Tiers — Clean Editorial Layout, Separated by Delicate Rules */}
      <div className="border-b border-[#DAD0C7] dark:border-[#332B26] divide-y md:divide-y-0 md:divide-x divide-[#DAD0C7] dark:divide-[#332B26] grid grid-cols-1 md:grid-cols-3 mb-16">
        {PRICING_TIERS.map((tier) => (
          <div key={tier.id} className="py-8 md:py-12 md:px-8 first:pl-0 last:pr-0 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[12px] font-mono font-bold uppercase tracking-wider text-[#82766F] dark:text-[#9E938B]">
                  {tier.badge}
                </span>
                {tier.isPopular && (
                  <span className="text-[11px] font-mono font-bold px-2 py-0.5 bg-[#38251F] text-[#F4F0E9] dark:bg-[#EDE6DE] dark:text-[#1B1614]">
                    Khuyên dùng
                  </span>
                )}
              </div>

              <h2 className="text-[24px] sm:text-[26px] font-bold text-[#38251F] dark:text-[#EDE6DE]">
                {tier.name}
              </h2>

              <div className="text-[28px] sm:text-[32px] font-[800] text-[#38251F] dark:text-[#EDE6DE] font-mono tracking-tight">
                {tier.priceText}
              </div>

              <p className="text-[13px] text-[#82766F] dark:text-[#9E938B] font-mono font-medium">
                {tier.duration}
              </p>

              <p className="text-[15px] text-[#422B25] dark:text-[#CFC4B8] leading-[1.6]">
                {tier.subtitle}
              </p>

              <div className="pt-6 border-t border-[#DAD0C7]/70 dark:border-[#332B26]/70">
                <p className="text-[12px] font-mono font-bold uppercase tracking-wider text-[#38251F] dark:text-[#EDE6DE] mb-4">
                  Bao gồm trong gói:
                </p>
                <ul className="space-y-3 text-[14px] sm:text-[15px] text-[#422B25] dark:text-[#CFC4B8] leading-relaxed">
                  {tier.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-[#82766F] select-none leading-tight">—</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-8">
              <Link
                to={`/start-project?tier=${tier.id}`}
                className={`w-full text-center block py-3 px-4 text-[14px] font-semibold transition-all rounded-[2px] ${
                  tier.isPopular
                    ? 'bg-[#38251F] text-[#F4F0E9] hover:bg-[#261814] dark:bg-[#EDE6DE] dark:text-[#1B1614] dark:hover:bg-[#FFFFFF]'
                    : 'bg-[#FAF8F4] text-[#38251F] hover:bg-[#FFFFFF] border border-[#DAD0C7] dark:bg-[#221D1A] dark:text-[#EDE6DE] dark:border-[#332B26]'
                }`}
              >
                Chọn {tier.name}
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Explanations of Domain & Hosting Costs */}
      <div className="pb-16 border-b border-[#DAD0C7] dark:border-[#332B26]">
        <h2 className="text-[24px] sm:text-[30px] font-bold text-[#38251F] dark:text-[#EDE6DE] mb-6">
          Chi phí Tên miền và Máy chủ (Hosting) được tính thế nào?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#422B25] dark:text-[#CFC4B8] text-[15px] leading-[1.7]">
          <div className="space-y-2">
            <h3 className="font-bold text-[#38251F] dark:text-[#EDE6DE] text-[17px]">
              1. Tên miền riêng (.com, .vn, .com.vn)
            </h3>
            <p>
              Tên miền là địa chỉ website của bạn (ví dụ: <span className="font-mono text-[#38251F] dark:text-[#EDE6DE]">tencuaban.com</span>). Khách hàng là người trực tiếp đứng tên sở hữu tên miền để bảo đảm quyền làm chủ thương hiệu vĩnh viễn.
            </p>
            <p className="text-[13px] text-[#82766F] dark:text-[#9E938B]">
              Chi phí tên miền quốc tế (.com) thường khoảng 250.000đ – 300.000đ/năm. Tên miền Việt Nam (.vn) khoảng 550.000đ/năm. Tôi sẽ hỗ trợ bạn đăng ký và cấu hình hoàn toàn miễn phí.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-bold text-[#38251F] dark:text-[#EDE6DE] text-[17px]">
              2. Máy chủ lưu trữ (Hosting & Vận hành)
            </h3>
            <p>
              Với các website landing page, website công ty và portfolio tĩnh, tôi tối ưu kiến trúc để triển khai trên các nền tảng đám mây toàn cầu hiện đại (như Vercel/Cloudflare) với <strong className="font-bold text-[#38251F] dark:text-[#EDE6DE]">chi phí lưu trữ hàng tháng bằng 0đ</strong> cho lượng truy cập vừa và nhỏ.
            </p>
            <p className="text-[13px] text-[#82766F] dark:text-[#9E938B]">
              Bạn không phải gánh phí duy trì server 1–2 triệu/năm như các dịch vụ web cũ thông thường.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="pt-12 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div className="space-y-1">
          <h3 className="text-[20px] font-bold text-[#38251F] dark:text-[#EDE6DE]">
            Bạn cần tư vấn phương án phù hợp nhất với ngân sách?
          </h3>
          <p className="text-[14px] text-[#82766F] dark:text-[#9E938B]">
            Hãy gửi mô tả sơ bộ nhu cầu, tôi sẽ phản hồi kèm bảng dự toán cụ thể.
          </p>
        </div>

        <Link
          to="/start-project"
          className="btn-primary py-3 px-6 text-[14px] font-semibold shrink-0"
        >
          <span>Khởi động mô tả dự án</span>
          <ArrowRight size={14} />
        </Link>
      </div>

    </div>
  );
}
