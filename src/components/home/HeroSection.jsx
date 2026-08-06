import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import { ArrowRight, CheckCircle, Cpu, ShieldCheck, Mail, Terminal, Clock, Sparkles, Layers, Database, Lock, Code2 } from 'lucide-react';

export const HeroSection = ({ onOpenRequestModal }) => {
  const { language, t } = useLanguage();
  const { isDark } = useTheme();
  const [activeTab, setActiveTab] = useState('stack');

  return (
    <section className="relative pt-16 pb-24 md:pt-28 md:pb-36 border-b border-slate-200 dark:border-slate-800 font-sans overflow-hidden">
      
      {/* Background Accent Grids */}
      <div className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-20 bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:32px_32px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          
          {/* Left Column: Bold Personal & Professional Statement */}
          <div className="lg:col-span-7 space-y-8 text-left reveal">
            
            {/* Direct Studio Eyebrow Tag */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/30 text-brand-primary text-xs font-mono font-bold tracking-wide uppercase">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
              <span>QUANG ANH STUDIO • LẬP TRÌNH WEB APP CHO DOANH NGHIỆP</span>
            </div>

            {/* Headline H1: Large & Striking */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] text-slate-900 dark:text-white">
              Biến Ý Tưởng Kinh Doanh <br className="hidden sm:inline" />
              Thành <span className="text-brand-primary underline decoration-brand-primary/30 underline-offset-8">Web App Chạy Thực Tế.</span>
            </h1>

            {/* Distinctive Callout Box */}
            <div className="hero-highlight-box max-w-2xl">
              <p className="text-base sm:text-lg font-medium leading-relaxed text-slate-800 dark:text-slate-200">
                Tôi là <strong className="text-brand-primary">Quang Anh</strong> — Kỹ sư lập trình chuyên thiết kế & xây dựng ứng dụng web tùy chỉnh cho Doanh nghiệp & Startup Việt Nam. Giúp tự động hóa quy trình quản lý, mượt mà, tốc độ dưới 1 giây và bảo mật 100%.
              </p>
            </div>

            {/* 4 Crisp Commitments Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-bold text-slate-800 dark:text-slate-200">
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white dark:bg-studio-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                <CheckCircle size={18} className="text-brand-primary shrink-0" />
                <span>Code tự viết 100% (Không mẫu dựng sẵn)</span>
              </div>
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white dark:bg-studio-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                <CheckCircle size={18} className="text-brand-primary shrink-0" />
                <span>Bàn giao full Source Code & Hướng dẫn</span>
              </div>
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white dark:bg-studio-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                <CheckCircle size={18} className="text-brand-primary shrink-0" />
                <span>Tốc độ mở siêu nhanh & Bảo mật cao</span>
              </div>
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white dark:bg-studio-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                <CheckCircle size={18} className="text-brand-primary shrink-0" />
                <span>Hỗ trợ kỹ thuật 24/7 trực tiếp dài hạn</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={() => onOpenRequestModal()}
                className="btn-primary py-4 px-8 text-sm font-bold shadow-lg"
              >
                <span>Bắt Đầu Khởi Tạo Dự Án</span>
                <ArrowRight size={18} />
              </button>

              <a
                href="#cost-estimator"
                className="btn-secondary py-4 px-8 text-sm font-bold"
              >
                <Cpu size={18} className="text-brand-primary" />
                <span>Tính Dự Toán Chi Phí Dự Dự Án</span>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Studio Technical Console */}
          <div className="lg:col-span-5 reveal reveal-delay-1">
            <div className={`rounded-2xl border p-6 sm:p-8 space-y-6 shadow-xl ${
              isDark ? 'bg-studio-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
            }`}>
              
              {/* Console Header */}
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-slate-900 dark:text-white">
                  <Terminal size={16} className="text-brand-primary" />
                  <span>STUDIO TECHNICAL CONSOLE</span>
                </div>

                <span className="font-mono text-[11px] px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 font-bold">
                  SẴN SÀNG ĐẢM NHẬN
                </span>
              </div>

              {/* Tabs selector */}
              <div className="flex bg-slate-100 dark:bg-studio-950 p-1 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-mono">
                <button
                  onClick={() => setActiveTab('stack')}
                  className={`flex-1 py-2 rounded-lg font-bold transition-all ${
                    activeTab === 'stack' ? 'bg-brand-primary text-white shadow-sm' : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  Công Nghệ
                </button>
                <button
                  onClick={() => setActiveTab('guarantee')}
                  className={`flex-1 py-2 rounded-lg font-bold transition-all ${
                    activeTab === 'guarantee' ? 'bg-brand-primary text-white shadow-sm' : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  Cam Kết SLA
                </button>
              </div>

              {/* Tab 1: Stack Specs */}
              {activeTab === 'stack' ? (
                <div className="space-y-3 font-mono text-xs animate-fadeIn">
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-studio-950 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                    <span className="text-slate-500">Giao Diện User:</span>
                    <span className="font-bold text-brand-primary">React 18 / Next.js 15 / Tailwind</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-studio-950 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                    <span className="text-slate-500">Hệ Thống Backend:</span>
                    <span className="font-bold text-slate-900 dark:text-white">Node.js Express / Python API</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-studio-950 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                    <span className="text-slate-500">Cơ Sở Dữ Liệu:</span>
                    <span className="font-bold text-slate-900 dark:text-white">PostgreSQL / Redis / MongoDB</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-studio-950 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                    <span className="text-slate-500">Vận Hành Server:</span>
                    <span className="font-bold text-emerald-600 dark:text-emerald-400">AWS / Vercel / Docker (24/7)</span>
                  </div>
                </div>
              ) : (
                /* Tab 2: Guarantees */
                <div className="space-y-3 font-mono text-xs animate-fadeIn">
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-studio-950 border border-slate-200 dark:border-slate-800 space-y-1">
                    <p className="font-bold text-brand-primary">1. Kiểm Thử Chất Lượng (QA/QC):</p>
                    <p className="text-[11px] text-slate-600 dark:text-slate-400">Chạy thử nghiệm toàn bộ tính năng trên Điện thoại & Máy tính trước bàn giao.</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-studio-950 border border-slate-200 dark:border-slate-800 space-y-1">
                    <p className="font-bold text-emerald-600 dark:text-emerald-400">2. Bảo Hành 24/7 Dài Hạn:</p>
                    <p className="text-[11px] text-slate-600 dark:text-slate-400">Cam kết khắc phục sự cố kỹ thuật tức thì trong suốt quá trình vận hành.</p>
                  </div>
                </div>
              )}

              {/* Direct Contact Banner */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300 font-bold">
                  <Mail size={15} className="text-brand-primary" />
                  <a href="mailto:quanganhqb04@gmail.com" className="hover:underline">quanganhqb04@gmail.com</a>
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
