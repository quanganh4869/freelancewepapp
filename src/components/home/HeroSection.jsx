import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Sparkles, Laptop, ShieldCheck, Clock, Layers } from 'lucide-react';
import { INITIAL_PROJECTS } from '../../data/seedData';

export const HeroSection = ({ onOpenRequestModal }) => {
  const [activePreviewIndex, setActivePreviewIndex] = useState(0);
  const currentProject = INITIAL_PROJECTS[activePreviewIndex] || INITIAL_PROJECTS[0];

  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 border-b border-brand-border font-sans overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-left reveal">
            
            {/* Status & Work Style Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-paper dark:bg-studio-900 border border-brand-border text-xs font-semibold text-brand-muted">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-brand-primary dark:text-white font-bold">Quang Anh</span>
              <span>· Nhận thiết kế & lập trình website trực tiếp 1-1</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.12] text-brand-primary dark:text-white">
              Website đẹp, dễ dùng và rõ ràng chi phí cho bạn.
            </h1>

            {/* Clear Plain Vietnamese Explanation */}
            <p className="text-base sm:text-lg leading-relaxed text-brand-muted font-medium max-w-2xl">
              Tôi giúp các cá nhân, chuyên gia, cửa hàng và doanh nghiệp nhỏ xây dựng website chất lượng cao — từ trang hồ sơ năng lực (portfolio), trang bán hàng (landing page) đến website doanh nghiệp và web app đặt lịch.
            </p>

            {/* Transparency Highlight Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
              <div className="p-3 rounded-lg border border-brand-border bg-brand-paper dark:bg-studio-900">
                <span className="text-[11px] font-semibold text-brand-muted uppercase block">Mức giá rõ ràng</span>
                <span className="font-display font-extrabold text-sm sm:text-base text-brand-primary dark:text-white mt-0.5 block">
                  Từ 1.000.000đ
                </span>
              </div>
              <div className="p-3 rounded-lg border border-brand-border bg-brand-paper dark:bg-studio-900">
                <span className="text-[11px] font-semibold text-brand-muted uppercase block">Thời gian bàn giao</span>
                <span className="font-display font-extrabold text-sm sm:text-base text-brand-primary dark:text-white mt-0.5 block">
                  Từ 5 – 7 ngày
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1 p-3 rounded-lg border border-brand-border bg-brand-paper dark:bg-studio-900">
                <span className="text-[11px] font-semibold text-brand-muted uppercase block">Hỗ trợ kỹ thuật</span>
                <span className="font-display font-extrabold text-sm sm:text-base text-brand-primary dark:text-white mt-0.5 block">
                  Bảo hành 6 – 12 tháng
                </span>
              </div>
            </div>

            {/* Direct Reassurances for Non-Tech Clients */}
            <div className="space-y-2 text-xs font-medium text-brand-muted pt-1">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-[#D05021] shrink-0" />
                <span>Bạn trao đổi thẳng với người trực tiếp viết code, không qua nhân viên kinh doanh trung gian.</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-[#D05021] shrink-0" />
                <span>Không cần hiểu thuật ngữ công nghệ — bạn mô tả mong muốn, tôi đưa ra giải pháp phù hợp nhất.</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href="#tim-dich-vu"
                className="btn-primary py-3 px-5 text-xs font-semibold shadow-sm"
              >
                <Sparkles size={14} className="text-amber-400" />
                <span>Tìm dịch vụ phù hợp & Tính chi phí</span>
              </a>

              <a
                href="#du-an"
                className="btn-secondary py-3 px-5 text-xs font-semibold"
              >
                <span>Xem các dự án đã làm</span>
                <ArrowRight size={14} />
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Real Project Showcase Window */}
          <div className="lg:col-span-5 reveal reveal-delay-2">
            <div className="rounded-xl border border-brand-border bg-brand-paper dark:bg-studio-900 shadow-xl overflow-hidden">
              
              {/* Browser Window Chrome */}
              <div className="px-4 py-3 border-b border-brand-border bg-brand-background dark:bg-studio-950 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-400/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80"></span>
                  <span className="text-[11px] font-mono text-brand-muted ml-2">quanganh-studio.vn</span>
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#D05021] bg-[#D05021]/10 px-2 py-0.5 rounded">
                  {currentProject.statusTag}
                </span>
              </div>

              {/* Project Image Preview with subtle zoom */}
              <div className="relative aspect-[16/10] overflow-hidden bg-brand-background">
                <img
                  src={currentProject.thumbnail}
                  alt={currentProject.title}
                  className="w-full h-full object-cover object-center transition-all duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex flex-col justify-end p-4 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider bg-white/20 px-2 py-0.5 rounded backdrop-blur-sm">
                      {currentProject.category}
                    </span>
                    <span className="text-[10px] font-semibold text-emerald-300 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                      {currentProject.statusTag}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-base sm:text-lg leading-snug">
                    {currentProject.title}
                  </h3>
                  <div className="flex items-center justify-between text-xs text-slate-200 mt-1 font-medium">
                    <span className="truncate max-w-[200px]">{currentProject.client}</span>
                    <span className="font-semibold text-xs text-slate-300 bg-white/10 px-2 py-0.5 rounded backdrop-blur-sm">
                      {currentProject.techStack[0]} + {currentProject.techStack[1]}
                    </span>
                  </div>
                </div>
              </div>

              {/* Interactive Tabs to Switch Demo Previews */}
              <div className="p-3 border-t border-brand-border bg-brand-background/60 dark:bg-studio-950/60">
                <span className="text-[11px] font-semibold text-brand-muted block mb-2">
                  Bấm để chuyển xem 3 sản phẩm thực tế:
                </span>
                <div className="grid grid-cols-3 gap-1.5">
                  {INITIAL_PROJECTS.map((proj, idx) => (
                    <button
                      key={proj.id}
                      onClick={() => setActivePreviewIndex(idx)}
                      className={`px-2 py-1.5 rounded text-left text-[11px] transition-colors flex flex-col justify-between ${
                        activePreviewIndex === idx
                          ? 'bg-[#24221E] text-white dark:bg-white dark:text-[#24221E] font-bold shadow-sm'
                          : 'bg-brand-paper dark:bg-studio-900 border border-brand-border text-brand-muted hover:text-brand-primary'
                      }`}
                    >
                      <span className="truncate font-bold">{proj.title.split('—')[0].trim()}</span>
                      <span className="text-[9px] opacity-80 truncate">{proj.category.split(' ')[0]}</span>
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
