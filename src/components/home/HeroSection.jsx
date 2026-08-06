import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import { ArrowRight, Check, Code, ShieldCheck, Mail, Terminal, Clock, Cpu } from 'lucide-react';

export const HeroSection = ({ onOpenRequestModal }) => {
  const { language, t } = useLanguage();
  const { isDark } = useTheme();

  return (
    <section className="relative pt-16 pb-24 md:pt-24 md:pb-32 border-b border-slate-200 dark:border-slate-800/80 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-start">
          
          {/* Left Column: Authentic Editorial Copy */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Technical Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 dark:bg-studio-900 border border-slate-200 dark:border-slate-800 text-brand-primary text-xs font-mono font-bold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>QUANG ANH • INDEPENDENT WEB APP ARCHITECT</span>
            </div>

            {/* Headline H1 */}
            <h1 className="text-4xl sm:text-6xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] text-slate-900 dark:text-white">
              {language === 'en' ? (
                <>
                  Custom Web Apps Built for <br className="hidden sm:inline" />
                  <span className="text-brand-primary">Real Business Impact.</span>
                </>
              ) : (
                <>
                  Lập Trình Web App Tùy Chỉnh <br className="hidden sm:inline" />
                  <span className="text-brand-primary">Cho Doanh Nghiệp Việt Nam.</span>
                </>
              )}
            </h1>

            {/* Editorial Lead Paragraph */}
            <p className="text-base sm:text-lg font-normal leading-relaxed text-slate-700 dark:text-slate-300 max-w-2xl">
              Tôi giúp các Doanh nghiệp & Startup biến các quy trình nghiệp vụ phức tạp thành ứng dụng Web App mượt mà, dễ dùng, chạy ổn định và bảo mật cao. Nói KHÔNG với các mẫu dựng sẵn sơ sài.
            </p>

            {/* Direct Commitments Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-semibold text-slate-800 dark:text-slate-200">
              <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 dark:bg-studio-900 border border-slate-200 dark:border-slate-800">
                <Check size={16} className="text-brand-primary shrink-0" />
                <span>Code tự viết 100% (Không dùng mẫu sẵn)</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 dark:bg-studio-900 border border-slate-200 dark:border-slate-800">
                <Check size={16} className="text-brand-primary shrink-0" />
                <span>Bàn giao trọn bộ Mã nguồn (Full Source Code)</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 dark:bg-studio-900 border border-slate-200 dark:border-slate-800">
                <Check size={16} className="text-brand-primary shrink-0" />
                <span>Bảo mật dữ liệu & Vận hành mượt mà</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 dark:bg-studio-900 border border-slate-200 dark:border-slate-800">
                <Check size={16} className="text-brand-primary shrink-0" />
                <span>Bảo hành & Hỗ trợ kỹ thuật 24/7 trực tiếp</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                onClick={() => onOpenRequestModal()}
                className="btn-primary py-3.5 px-7 text-sm font-semibold"
              >
                <span>Bắt Đầu Dự Án Ngay</span>
                <ArrowRight size={16} />
              </button>

              <a
                href="#cost-estimator"
                className="btn-secondary py-3.5 px-6 text-sm font-semibold"
              >
                <Cpu size={16} className="text-brand-primary" />
                <span>Tính Dự Toán Chi Phí</span>
              </a>
            </div>

          </div>

          {/* Right Column: Architectural Developer Specs Card */}
          <div className="lg:col-span-5">
            <div className={`p-6 sm:p-8 rounded-2xl border space-y-6 ${
              isDark ? 'bg-studio-900 border-slate-800 text-slate-200' : 'bg-white border-slate-200 text-slate-800 shadow-sm'
            }`}>
              
              {/* Header Profile */}
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-primary text-white font-mono font-bold flex items-center justify-center text-sm shadow-sm">
                    QA
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">QUANG ANH</h3>
                    <p className="text-[11px] font-mono text-slate-500">Lead Web App Engineer</p>
                  </div>
                </div>

                <span className="font-mono text-[11px] px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 font-bold">
                  SẴN SÀNG NHẬN DỰ ÁN
                </span>
              </div>

              {/* Specification Grid */}
              <div className="space-y-3 font-mono text-xs">
                <div className="flex justify-between py-2 border-b border-slate-100 dark:border-slate-800/60">
                  <span className="text-slate-500">Chuyên môn:</span>
                  <span className="font-bold text-slate-900 dark:text-white">React, Next.js, Node.js, Postgres</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100 dark:border-slate-800/60">
                  <span className="text-slate-500">Kinh nghiệm:</span>
                  <span className="font-bold text-slate-900 dark:text-white">15+ Năm Lập Trình Phần Mềm</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100 dark:border-slate-800/60">
                  <span className="text-slate-500">Thời gian bàn giao:</span>
                  <span className="font-bold text-brand-primary">3 – 6 Tuần / Dự án</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100 dark:border-slate-800/60">
                  <span className="text-slate-500">Bảo hành hỗ trợ:</span>
                  <span className="font-bold text-slate-900 dark:text-white">Bảo hành 24/7 Dài Hạn</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-slate-500">Email trực tiếp:</span>
                  <a href="mailto:quanganhqb04@gmail.com" className="font-bold text-brand-primary hover:underline">quanganhqb04@gmail.com</a>
                </div>
              </div>

              {/* Callout Footer */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-studio-950 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 space-y-1">
                <p className="font-bold text-slate-900 dark:text-white">Cam kết chất lượng mã nguồn:</p>
                <p className="text-[11px] leading-relaxed">
                  Mọi sản phẩm bàn giao đều đi kèm báo cáo kiểm thử, cấu trúc code sạch (Clean Code), chuẩn SEO và tài liệu hướng dẫn vận hành chi tiết.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
