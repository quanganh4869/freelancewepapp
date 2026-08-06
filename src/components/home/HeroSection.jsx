import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import { ArrowRight, CheckCircle2, Cpu, Terminal, ShieldCheck, Database, Layers, Smartphone, LayoutDashboard, Lock, Server } from 'lucide-react';

export const HeroSection = ({ onOpenRequestModal }) => {
  const { language, t } = useLanguage();
  const { isDark } = useTheme();

  return (
    <section className="relative pt-16 pb-20 md:pt-24 md:pb-32 grid-bg-engineering border-b border-slate-200 dark:border-white/10 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Eyebrow, H1 Headline & Editorial Copy */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Technical Eyebrow */}
            <div className="studio-badge">
              <span className="w-2 h-2 rounded-full bg-brand-primary"></span>
              <span>NEXUS STUDIO • THIẾT KẾ WEB APP CHO DOANH NGHIỆP</span>
            </div>

            {/* Headline H1 */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] text-slate-900 dark:text-white">
              {language === 'en' ? (
                <>
                  Turn your business ideas into <br className="hidden sm:inline" />
                  <span className="text-brand-primary font-extrabold">working Web Apps.</span>
                </>
              ) : (
                <>
                  Biến ý tưởng kinh doanh thành <br className="hidden sm:inline" />
                  <span className="text-brand-primary font-extrabold">Web App chạy thực tế.</span>
                </>
              )}
            </h1>

            {/* Callout Box */}
            <div className="studio-callout max-w-2xl">
              <p className="text-base sm:text-lg font-medium leading-relaxed text-slate-700 dark:text-slate-200">
                {language === 'en'
                  ? 'We help you build fast, easy-to-use web applications and software that streamline your business and boost sales.'
                  : 'Chúng tôi giúp bạn xây dựng ứng dụng web, phần mềm quản lý và hệ thống bán hàng dễ sử dụng, tốc độ nhanh, vận hành ổn định và bảo mật cao.'}
              </p>
            </div>

            {/* Feature Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={16} className="text-brand-primary shrink-0" />
                <span>Code tự viết 100% (Không dùng mẫu sẵn)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={16} className="text-brand-primary shrink-0" />
                <span>Bảo mật dữ liệu & vận hành an toàn</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={16} className="text-brand-primary shrink-0" />
                <span>Cam kết hỗ trợ kỹ thuật chu đáo 24/7</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={16} className="text-brand-primary shrink-0" />
                <span>Bàn giao nhanh chỉ từ 3–6 tuần</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={() => onOpenRequestModal()}
                className="btn-primary py-3.5 px-6 text-sm"
              >
                <span>{t('btnStart')}</span>
                <ArrowRight size={16} />
              </button>

              <a
                href="#cost-estimator"
                className="btn-secondary py-3.5 px-6 text-sm"
              >
                <Cpu size={16} className="text-brand-primary" />
                <span>{t('btnCalc')}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Simple Client-Friendly System Preview */}
          <div className="lg:col-span-5">
            <div className={`studio-card p-6 sm:p-8 space-y-5 rounded-2xl relative overflow-hidden border ${
              isDark ? 'bg-studio-900 border-slate-800' : 'bg-white border-slate-200 shadow-md'
            }`}>
              
              {/* Architecture Panel Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2 font-mono text-xs font-bold tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span className="text-slate-600 dark:text-slate-400 uppercase">MÔ HÌNH PHẦN MỀM CHUẨN ĐẸP</span>
                </div>
                <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary font-semibold">
                  HỆ THỐNG MẪU
                </span>
              </div>

              {/* Layer 01: Giao diện */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-studio-950 border border-slate-200 dark:border-slate-800 space-y-1.5 font-sans text-xs">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Smartphone size={15} className="text-brand-primary" />
                    <span className="font-bold text-slate-900 dark:text-white">01 — GIAO DIỆN NGƯỜI DÙNG DỄ THAO TÁC</span>
                  </div>
                </div>
                <p className="text-[11px] text-slate-600 dark:text-slate-400">
                  Đẹp mắt trên Điện thoại, Máy tính bảng & Máy tính bàn. Tải trang dưới 1 giây.
                </p>
              </div>

              {/* Layer 02: Xử lý nghiệp vụ */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-studio-950 border border-slate-200 dark:border-slate-800 space-y-1.5 font-sans text-xs">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <LayoutDashboard size={15} className="text-amber-500" />
                    <span className="font-bold text-slate-900 dark:text-white">02 — QUẢN LÝ BÁN HÀNG & DỮ LIỆU</span>
                  </div>
                </div>
                <p className="text-[11px] text-slate-600 dark:text-slate-400">
                  Tự động hóa đơn hàng, phân quyền nhân viên và thông báo đơn mới tức thì.
                </p>
              </div>

              {/* Layer 03: Lưu trữ dữ liệu */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-studio-950 border border-slate-200 dark:border-slate-800 space-y-1.5 font-sans text-xs">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Database size={15} className="text-emerald-500" />
                    <span className="font-bold text-slate-900 dark:text-white">03 — LƯU TRỮ AN TOÀN & BẢO MẬT</span>
                  </div>
                </div>
                <p className="text-[11px] text-slate-600 dark:text-slate-400">
                  Lưu trữ dữ liệu mã hóa, sao lưu tự động hàng ngày không lo mất dữ liệu.
                </p>
              </div>

              {/* Layer 04: Máy chủ & Vận hành */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-studio-950 border border-slate-200 dark:border-slate-800 space-y-1.5 font-sans text-xs">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Server size={15} className="text-brand-primary" />
                    <span className="font-bold text-slate-900 dark:text-white">04 — MÁY CHỦ CHẠY LIÊN TỤC 24/7</span>
                  </div>
                </div>
                <p className="text-[11px] text-slate-600 dark:text-slate-400">
                  Hệ thống điện toán mây giúp ứng dụng chạy mượt mà, chịu tải hàng ngàn người dùng cùng lúc.
                </p>
              </div>

              {/* Metadata Footer Line */}
              <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Tiêu chuẩn: An toàn & Bảo mật</span>
                <span className="text-brand-primary font-bold">NEXUS LABS</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
