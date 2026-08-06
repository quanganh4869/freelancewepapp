import React from 'react';
import { ArrowRight, CheckCircle2, Building2, PhoneCall, ShieldCheck, Home, Ruler, Award, Sparkles } from 'lucide-react';

export const HeroSection = ({ onOpenRequestModal }) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-16 md:pb-28 bg-grid-pattern border-b border-white/5 font-sans">
      
      {/* Ambient Red Glow Background */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-brand-primary/15 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-10 right-10 w-[350px] h-[350px] bg-brand-navy/30 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Headline & Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-studio-900 border border-brand-primary/30 text-xs font-mono text-slate-200 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-primary animate-pulse"></span>
              <span className="font-bold text-white uppercase tracking-wider">XÂY NHÀ ĐẸP STUDIO</span>
              <span className="text-slate-600">|</span>
              <span className="text-brand-primary font-semibold">Tư Vấn & Thi Công Trọn Gói 2026</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.18]">
              Thiết Kế & Thi Công <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-rose-400 to-amber-400">
                Xây Dựng Trọn Gói
              </span> Uy Tín.
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
              Kiến tạo không gian sống đẳng cấp cho <span className="text-white font-semibold">Biệt thự, Nhà phố & Nội thất</span>. Cam kết vật tư chính hãng 100%, đúng tiến độ hợp đồng & tuyệt đối không phát sinh chi phí phụ.
            </p>

            {/* Feature Highlights checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-300 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-brand-primary shrink-0" />
                <span>Bảo hành kết cấu công trình lên đến <strong className="text-white">10 năm</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-brand-primary shrink-0" />
                <span>Miễn phí 100% bản vẽ thiết kế 3D khi thi công</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-brand-primary shrink-0" />
                <span>Đội ngũ KTS & Kỹ sư hơn <strong className="text-white">15 năm kinh nghiệm</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-brand-primary shrink-0" />
                <span>Minh bạch chủng loại vật tư ngay từ hợp đồng</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                onClick={() => onOpenRequestModal()}
                className="flex items-center justify-center gap-3 bg-brand-primary hover:bg-brand-hover text-white text-sm font-bold px-8 py-4 rounded-xl shadow-glow-primary transition-all transform hover:-translate-y-0.5"
              >
                <span>Yêu Cầu Báo Giá Trọn Gói</span>
                <ArrowRight size={18} />
              </button>

              <a
                href="#cost-estimator"
                className="flex items-center justify-center gap-2 bg-studio-900 hover:bg-studio-850 text-slate-200 border border-white/10 text-sm font-semibold px-6 py-4 rounded-xl transition-all hover:border-brand-primary/40"
              >
                <Ruler size={16} className="text-brand-primary" />
                <span>Tính Chi Phí Xây Nhà</span>
              </a>
            </div>

            {/* Trust Metrics Bar */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 max-w-lg">
              <div>
                <p className="text-2xl font-extrabold text-white font-mono">15+</p>
                <p className="text-[11px] text-slate-400 font-medium">Năm Kinh Nghiệm</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-brand-primary font-mono">500+</p>
                <p className="text-[11px] text-slate-400 font-medium">Công Trình Bàn Giao</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-emerald-400 font-mono">100%</p>
                <p className="text-[11px] text-slate-400 font-medium">Chuẩn Tiến Độ 0 Phát Sinh</p>
              </div>
            </div>

          </div>

          {/* Right Column: Architectural Hero Image Card & Contact Floating Badge */}
          <div className="lg:col-span-5 relative">
            
            {/* Main Showcase Image Frame */}
            <div className="studio-card-border rounded-2xl overflow-hidden shadow-2xl relative border-brand-primary/20 group">
              <div className="h-96 sm:h-[420px] relative overflow-hidden bg-studio-900">
                <img
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80"
                  alt="Thiết Kế Thi Công Biệt Thự Xây Nhà Đẹp"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-studio-950 via-studio-950/40 to-transparent"></div>
                
                {/* Floating Top Badge */}
                <div className="absolute top-4 left-4 bg-studio-900/90 border border-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full flex items-center gap-2">
                  <Award size={14} className="text-brand-primary" />
                  <span className="font-mono text-xs font-bold text-white">DỰ ÁN TIÊU BIỂU 2026</span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-6 left-6 right-6 space-y-2">
                  <span className="text-[11px] font-mono text-brand-primary bg-brand-primary/20 px-2.5 py-0.5 rounded border border-brand-primary/30 font-bold">
                    BIỆT THỰ MODERN LUXURY • Q.7, TP.HCM
                  </span>
                  <h3 className="text-lg font-bold text-white">Kiến Trúc Đẳng Cấp & Thi Công Trọn Gói</h3>
                  <p className="text-xs text-slate-300 line-clamp-2 font-mono">Diện tích: 450m² • Hoàn thiện chìa khóa trao tay trong 6 tháng</p>
                </div>
              </div>
            </div>

            {/* Floating Hotline Card */}
            <div className="absolute -bottom-6 -left-6 sm:left-6 studio-card-border p-4 rounded-2xl bg-studio-900 border-brand-primary/40 shadow-2xl flex items-center gap-4 backdrop-blur-xl">
              <div className="w-12 h-12 rounded-xl bg-brand-primary text-white flex items-center justify-center shrink-0 shadow-glow-primary animate-pulse-slow">
                <PhoneCall size={22} />
              </div>
              <div>
                <p className="text-[10px] font-mono text-slate-400 uppercase font-bold">Hotline Tư Vấn KTS 24/7</p>
                <a href="tel:0908123456" className="text-base font-extrabold text-white hover:text-brand-primary font-mono tracking-tight transition-colors block">
                  0908.123.456
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
