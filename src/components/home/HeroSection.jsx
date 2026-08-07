import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import { ArrowRight, Check, Mail, Phone, Cpu } from 'lucide-react';

export const HeroSection = ({ onOpenRequestModal }) => {
  const { language, t } = useLanguage();
  const { isDark } = useTheme();
  const [activeTab, setActiveTab] = useState('stack');

  return (
    <section className="relative pt-14 pb-20 md:pt-24 md:pb-28 border-b border-slate-200 dark:border-slate-800 font-sans overflow-hidden">
      
      {/* Background Accent Grids */}
      <div className="absolute inset-0 pointer-events-none opacity-30 dark:opacity-15 bg-[radial-gradient(#F97316_1px,transparent_1px)] [background-size:32px_32px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Direct, Human Editorial Statement */}
          <div className="lg:col-span-7 space-y-7 text-left reveal">
            
            {/* Direct Studio Eyebrow Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/30 text-brand-primary text-xs font-mono font-bold tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>QUANG ANH STUDIO</span>
            </div>

            {/* Headline H1 */}
            <h1 className="text-4xl sm:text-6xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-slate-900 dark:text-white font-display">
              Lập Trình Web App <br className="hidden sm:inline" />
              Tùy Chỉnh Cho <span className="text-brand-primary">Doanh Nghiệp</span>
            </h1>

            {/* Concise Human Callout */}
            <div className="hero-highlight-box max-w-2xl">
              <p className="text-base sm:text-lg font-medium leading-relaxed text-slate-800 dark:text-slate-200">
                Tôi giúp các doanh nghiệp biến quy trình quản lý thành ứng dụng web mượt mà, dễ dùng, chạy ổn định và bảo mật cao.
              </p>
            </div>

            {/* 4 Crisp Commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-bold text-slate-800 dark:text-slate-200 font-display">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white dark:bg-studio-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                <Check size={16} className="text-brand-primary shrink-0" />
                <span>Code tự viết tùy chỉnh 100%</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white dark:bg-studio-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                <Check size={16} className="text-brand-primary shrink-0" />
                <span>Bàn giao trọn bộ mã nguồn</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white dark:bg-studio-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                <Check size={16} className="text-brand-primary shrink-0" />
                <span>Tốc độ mượt mà dưới 1 giây</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white dark:bg-studio-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                <Check size={16} className="text-brand-primary shrink-0" />
                <span>Bảo hành & Hỗ trợ kỹ thuật 24/7</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={() => onOpenRequestModal()}
                className="btn-primary py-3.5 px-7 text-sm font-bold shadow-md"
              >
                <span>Gửi Yêu Cầu Dự Án</span>
                <ArrowRight size={16} />
              </button>

              <a
                href="#cost-estimator"
                className="btn-secondary py-3.5 px-6 text-sm font-bold"
              >
                <Cpu size={16} className="text-brand-primary" />
                <span>Tính Chi Phí Dự Kiến</span>
              </a>
            </div>

          </div>

          {/* Right Column: Clean Spec Card */}
          <div className="lg:col-span-5 reveal reveal-delay-1">
            <div className={`rounded-2xl border p-6 sm:p-7 space-y-5 shadow-lg ${
              isDark ? 'bg-studio-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
            }`}>
              
              {/* Profile Card Header */}
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-primary text-white font-mono font-bold flex items-center justify-center text-sm shadow-sm">
                    QA
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white font-display">QUANG ANH</h3>
                    <p className="text-[11px] font-mono text-slate-500">Web App Engineer</p>
                  </div>
                </div>

                <span className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 font-bold">
                  ONLINE
                </span>
              </div>

              {/* Specification Grid */}
              <div className="space-y-2.5 font-mono text-xs">
                <div className="flex justify-between py-2 border-b border-slate-100 dark:border-slate-800/60">
                  <span className="text-slate-500">Công nghệ:</span>
                  <span className="font-bold text-slate-900 dark:text-white">React, Next.js, Node.js, Postgres</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100 dark:border-slate-800/60">
                  <span className="text-slate-500">Kinh nghiệm:</span>
                  <span className="font-bold text-slate-900 dark:text-white">15+ Năm Lập Trình</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100 dark:border-slate-800/60">
                  <span className="text-slate-500">Bàn giao:</span>
                  <span className="font-bold text-brand-primary">3 – 6 Tuần / Dự án</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100 dark:border-slate-800/60">
                  <span className="text-slate-500">Bảo hành:</span>
                  <span className="font-bold text-slate-900 dark:text-white">Bảo Hành Kỹ Thuật 24/7</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-slate-500">Email nhận thông báo:</span>
                  <a href="mailto:quanganhqb04@gmail.com" className="font-bold text-brand-primary hover:underline">quanganhqb04@gmail.com</a>
                </div>
              </div>

              {/* Direct Contact Banner */}
              <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300 font-bold">
                  <Mail size={14} className="text-brand-primary" />
                  <span>Gửi Mail Tức Thì</span>
                </div>
                <span className="text-slate-500 font-bold">Zalo: 0908 123 456</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
