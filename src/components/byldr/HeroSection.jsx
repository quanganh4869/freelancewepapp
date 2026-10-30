import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { INITIAL_PROJECTS } from '../../data/seedData';

export const HeroSection = () => {
  return (
    <section className="relative pt-12 sm:pt-16 md:pt-24 pb-12 sm:pb-16 overflow-hidden">
      
      {/* Background Radial Prism Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] pointer-events-none opacity-25 blur-[120px] bg-gradient-to-tr from-[#00e7ff] via-[#2a6bff] to-[#ff00e7] -z-10" />

      <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
        
        {/* Main Hero Pitch & Character 3D Integration */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column (7 Cols on desktop): Headline, Intro, CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-[rgba(180,170,255,0.18)] text-[12px] font-mono text-[#a7a6c4]">
              <span className="w-2 h-2 rounded-full bg-[#00e7ff] animate-pulse" />
              <span className="text-[#f3f2fb] font-semibold">Tôi là Nguyễn Quang Anh</span>
            </div>

            <h1 className="font-disp text-[40px] sm:text-[60px] md:text-[76px] lg:text-[84px] font-[800] tracking-[-0.035em] leading-[1.02] text-[#f3f2fb]">
              Tôi xây dựng website mà thương hiệu của bạn{' '}
              <span className="grad">xứng đáng có.</span>
            </h1>

            <p className="text-[16px] sm:text-[19px] text-[#a7a6c4] max-w-[620px] leading-[1.65] font-normal">
              Tôi trực tiếp thiết kế giao diện &amp; phát triển toàn bộ hệ thống web: tinh tế từng tương tác, mở trang dưới 1 giây, làm việc trực tiếp 1-1 và bàn giao 100% mã nguồn.
            </p>

            {/* Action CTAs */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <Link
                to="/start-project"
                className="btn-prism text-[14px]"
              >
                <span>Bắt đầu dự án</span>
                <span className="font-bold">↗</span>
              </Link>

              <a
                href="#work"
                className="btn-secondary text-[14px]"
              >
                <span>Xem sản phẩm đã làm</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>

          {/* Right Column (5 Cols on desktop): 3D Hero Developer Character */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="character-card relative w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[440px] flex items-center justify-center">
              <img
                src="/assets/hero-developer.png"
                alt="Minh họa nhân vật 3D đại diện nhà phát triển web Quang Anh Studio"
                width={896}
                height={1200}
                fetchPriority="high"
                loading="eager"
                decoding="async"
                className="w-full h-auto object-contain select-none pointer-events-none drop-shadow-[0_25px_35px_rgba(0,0,0,0.65)] animate-float-slow"
              />
            </div>
          </div>

        </div>

        {/* Stats Band (BYLDR Style 3-Column Glass Grid) */}
        <div className="stats-band mt-12 sm:mt-16">
          <div className="hero-stats">
            <div className="stat">
              <span className="num grad">03</span>
              <span className="lbl">Sản phẩm tiêu biểu</span>
            </div>
            <div className="stat">
              <span className="num grad">04</span>
              <span className="lbl">Nhóm dịch vụ</span>
            </div>
            <div className="stat">
              <span className="num grad">1–1</span>
              <span className="lbl">Làm việc trực tiếp</span>
            </div>
          </div>
        </div>

      </div>

      {/* Horizontal Project Names Ticker */}
      <div className="w-full overflow-hidden border-y border-[rgba(180,170,255,0.12)] bg-[#0a0b14]/50 py-3.5 mt-8">
        <div className="animate-ticker flex items-center gap-10 text-[13px] font-mono uppercase tracking-[0.14em] text-[#a7a6c4]/80 whitespace-nowrap">
          {[...INITIAL_PROJECTS, ...INITIAL_PROJECTS, ...INITIAL_PROJECTS].map((p, idx) => (
            <React.Fragment key={idx}>
              <span className="text-[#f3f2fb] font-semibold">{p.title}</span>
              <span className="text-[#00e7ff]">✦</span>
              <span>{p.category}</span>
              <span className="text-white/20">/</span>
            </React.Fragment>
          ))}
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
