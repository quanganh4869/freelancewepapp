import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import { ArrowRight, Check, Send, Sparkles } from 'lucide-react';

export const HeroSection = ({ onOpenRequestModal }) => {
  const { t } = useLanguage();
  const { isDark } = useTheme();

  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 border-b border-slate-200 dark:border-slate-800/80 font-sans overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Personal Freelancer Statement */}
          <div className="lg:col-span-7 space-y-6 text-left reveal">
            
            {/* Headline H1: Speaks Directly Without Eyebrow Kicker */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] text-slate-900 dark:text-white font-display">
              Nhận làm website <br />
              <span className="text-brand-primary">theo yêu cầu</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg leading-relaxed text-slate-700 dark:text-slate-300 max-w-2xl font-medium">
              Từ website cá nhân, landing page đến web app nhỏ — tôi trực tiếp trao đổi, thiết kế và phát triển theo đúng nhu cầu và ngân sách của bạn.
            </p>

            {/* Clear Price & Timeline Badge */}
            <div className="inline-flex items-center gap-3 p-3.5 rounded-2xl bg-orange-500/10 border border-orange-500/25 text-orange-600 dark:text-orange-400 font-mono text-xs font-bold shadow-sm">
              <Sparkles size={16} className="shrink-0 text-brand-primary" />
              <span>Giá từ <strong className="text-slate-900 dark:text-white text-sm underline font-display">1.000.000đ</strong> · Bàn giao từ <strong className="text-slate-900 dark:text-white text-sm font-display">1 tuần</strong></span>
            </div>

            {/* Core Value Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-bold text-slate-800 dark:text-slate-200 font-display pt-1">
              <div className="flex items-center gap-2">
                <Check size={16} className="text-brand-primary shrink-0" />
                <span>Trực tiếp trao đổi 1-1 (Không qua trung gian)</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={16} className="text-brand-primary shrink-0" />
                <span>Thiết kế giao diện đẹp, hiển thị mượt di động</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={16} className="text-brand-primary shrink-0" />
                <span>Bàn giao mã nguồn & Hướng dẫn sử dụng</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={16} className="text-brand-primary shrink-0" />
                <span>Bảo hành kỹ thuật & Hỗ trợ nhiệt tình</span>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-3">
              <button
                onClick={() => onOpenRequestModal()}
                className="btn-primary py-3.5 px-7 text-sm font-bold shadow-md font-display"
              >
                <Send size={16} />
                <span>Đặt làm website</span>
              </button>

              <a
                href="#portfolio"
                className="btn-secondary py-3.5 px-6 text-sm font-bold font-display"
              >
                <span>Xem sản phẩm đã làm</span>
                <ArrowRight size={16} className="text-brand-primary" />
              </a>
            </div>

          </div>

          {/* Right Column: Clean Personal Profile Card */}
          <div className="lg:col-span-5 reveal reveal-delay-1">
            <div className={`rounded-2xl border p-6 sm:p-7 space-y-5 shadow-lg ${
              isDark ? 'bg-studio-900/90 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
            }`}>
              
              {/* Profile Card Header */}
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-brand-primary text-white font-mono font-bold flex items-center justify-center text-sm shadow-md">
                    QA
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white font-display">Nguyễn Quang Anh</h3>
                    <p className="text-xs font-mono text-slate-400">Freelancer Web Developer</p>
                  </div>
                </div>

                <span className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 font-bold">
                  Sẵn sàng nhận web
                </span>
              </div>

              {/* Service Capabilities List */}
              <div className="space-y-2.5 text-xs font-medium">
                <div className="flex justify-between py-1.5 border-b border-slate-100 dark:border-slate-800/60">
                  <span className="text-slate-500">Website cá nhân / CV:</span>
                  <span className="font-bold text-brand-primary font-mono">Từ 1.000.000đ</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-100 dark:border-slate-800/60">
                  <span className="text-slate-500">Landing Page bán hàng:</span>
                  <span className="font-bold text-brand-primary font-mono">Từ 1.500.000đ</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-100 dark:border-slate-800/60">
                  <span className="text-slate-500">Web Doanh nghiệp / Shop:</span>
                  <span className="font-bold text-brand-primary font-mono">Từ 2.000.000đ - 5.000.000đ</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-100 dark:border-slate-800/60">
                  <span className="text-slate-500">Web App / Dashboard nhỏ:</span>
                  <span className="font-bold text-brand-primary font-mono">Từ 5.000.000đ+</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-slate-500">Thời gian bàn giao:</span>
                  <span className="font-bold text-slate-900 dark:text-white font-mono">1 - 2 tuần</span>
                </div>
              </div>

              {/* Direct Contact Footer */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-2 text-xs font-mono">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Zalo / SĐT:</span>
                  <a href="tel:0935989872" className="font-bold text-brand-primary hover:underline">0935 989 872</a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Email:</span>
                  <a href="mailto:quanganhqb04@gmail.com" className="font-bold text-slate-800 dark:text-slate-200 hover:underline">quanganhqb04@gmail.com</a>
                </div>
              </div>

              <button
                onClick={() => onOpenRequestModal()}
                className="btn-primary w-full py-3 text-xs font-bold font-display"
              >
                <span>Gửi yêu cầu cho Quang Anh</span>
              </button>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
