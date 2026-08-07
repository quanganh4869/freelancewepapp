import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import { ArrowRight, Check, Send, Sparkles, MapPin } from 'lucide-react';

export const HeroSection = ({ onOpenRequestModal }) => {
  const { t } = useLanguage();
  const { isDark } = useTheme();

  return (
    <section className="relative pt-10 pb-16 md:pt-16 md:pb-24 border-b border-slate-200 dark:border-slate-800/80 font-sans overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Personal Freelancer Statement */}
          <div className="lg:col-span-7 space-y-6 text-left reveal">
            
            {/* Top Location Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-studio-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold shadow-sm">
              <MapPin size={14} className="text-brand-primary" />
              <span>Việt Nam · nhận việc từ xa</span>
            </div>

            {/* Headline H1 */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] text-slate-900 dark:text-white">
              Chào bạn, <br />
              tôi là <span className="text-brand-primary">Quang Anh</span>.
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg leading-relaxed text-slate-700 dark:text-slate-300 max-w-2xl font-medium">
              Tôi nhận thiết kế và code website cá nhân, landing page, web giới thiệu doanh nghiệp, bán hàng và web app nhỏ. Bạn nhắn thẳng cho tôi, không qua sales, không có bên thứ ba.
            </p>

            {/* Clear Price & Timeline Badge */}
            <div className="inline-flex items-center gap-3 p-3.5 rounded-2xl bg-orange-500/10 border border-orange-500/25 text-orange-600 dark:text-orange-400 text-xs font-bold shadow-sm">
              <Sparkles size={16} className="shrink-0 text-brand-primary" />
              <span>Một người trực tiếp làm website cho bạn: <strong className="text-slate-900 dark:text-white text-sm underline">từ 1 triệu</strong>, xong trong <strong className="text-slate-900 dark:text-white text-sm">1 tuần đến 1 tháng</strong>.</span>
            </div>

            {/* Core Value Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-bold text-slate-800 dark:text-slate-200 pt-1">
              <div className="flex items-center gap-2">
                <Check size={16} className="text-brand-primary shrink-0" />
                <span>Trao đổi 1-1 trực tiếp với người code</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={16} className="text-brand-primary shrink-0" />
                <span>Giao diện thiết kế gọn gàng, mượt di động</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={16} className="text-brand-primary shrink-0" />
                <span>Bàn giao mã nguồn gốc & hướng dẫn tự sửa</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={16} className="text-brand-primary shrink-0" />
                <span>Bảo hành kỹ thuật 12 tháng trực tiếp</span>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-3">
              <button
                onClick={() => onOpenRequestModal()}
                className="btn-primary py-3.5 px-7 text-sm font-bold shadow-md"
              >
                <Send size={16} />
                <span>Đặt làm website</span>
              </button>

              <a
                href="#du-an"
                className="btn-secondary py-3.5 px-6 text-sm font-bold"
              >
                <span>Xem dự án đã làm</span>
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
                  <div className="w-11 h-11 rounded-xl bg-brand-primary text-white font-bold flex items-center justify-center text-sm shadow-md">
                    QA
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">Nguyễn Quang Anh</h3>
                    <p className="text-xs text-slate-400 font-medium">Freelancer Web Developer</p>
                  </div>
                </div>

                <span className="text-[11px] px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 font-bold">
                  Nhận việc toàn quốc
                </span>
              </div>

              {/* Service Capabilities List */}
              <div className="space-y-2.5 text-xs font-medium">
                <div className="flex justify-between py-1.5 border-b border-slate-100 dark:border-slate-800/60">
                  <span className="text-slate-500">Portfolio & Landing page:</span>
                  <span className="font-bold text-brand-primary">Từ 1.000.000đ · 1 tuần</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-100 dark:border-slate-800/60">
                  <span className="text-slate-500">Web giới thiệu công ty nhỏ:</span>
                  <span className="font-bold text-brand-primary">Từ 4.000.000đ · 2 tuần</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-100 dark:border-slate-800/60">
                  <span className="text-slate-500">Bán hàng cơ bản / Zalo:</span>
                  <span className="font-bold text-brand-primary">Từ 7.000.000đ · 3 tuần</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-100 dark:border-slate-800/60">
                  <span className="text-slate-500">Đặt lịch & Web app nhỏ:</span>
                  <span className="font-bold text-brand-primary">Từ 10.000.000đ · 1 tháng</span>
                </div>
              </div>

              {/* Direct Contact Footer */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-2 text-xs font-medium">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Zalo / SĐT:</span>
                  <a href="https://zalo.me/0935989872" target="_blank" rel="noreferrer" className="font-bold text-brand-primary hover:underline">0935 989 872</a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Email:</span>
                  <a href="mailto:quanganhqb04@gmail.com" className="font-bold text-slate-800 dark:text-slate-200 hover:underline">quanganhqb04@gmail.com</a>
                </div>
              </div>

              <button
                onClick={() => onOpenRequestModal()}
                className="btn-primary w-full py-3 text-xs font-bold"
              >
                <span>Nhắn yêu cầu cho Quang Anh</span>
              </button>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
