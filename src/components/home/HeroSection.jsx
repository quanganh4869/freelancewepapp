import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';

export const HeroSection = ({ onOpenRequestModal }) => {
  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 border-b border-brand-border font-sans">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-6 reveal">
        
        {/* Location Tag */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-paper border border-brand-border text-brand-muted text-xs font-medium">
          <MapPin size={13} className="text-brand-primary dark:text-white" />
          <span>Việt Nam · nhận việc từ xa</span>
        </div>

        {/* Headline */}
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] text-brand-primary dark:text-white">
          Chào bạn, tôi là Quang Anh.
        </h1>

        {/* Lead Paragraph */}
        <p className="text-base sm:text-lg leading-relaxed text-brand-muted font-medium max-w-2xl">
          Nhiều năm nay tôi nhận thiết kế và code website nhỏ và vừa — portfolio, landing page, web giới thiệu công ty, bán hàng, đặt lịch. Bạn nhắn thẳng cho tôi, không qua sales, không có bên thứ ba.
        </p>

        {/* Value Highlight Box */}
        <div className="p-4 rounded-lg bg-brand-paper border border-brand-border text-xs text-brand-muted font-medium leading-relaxed max-w-xl">
          Một người trực tiếp làm website cho bạn: <strong className="text-brand-primary dark:text-white font-bold">từ 1 triệu</strong>, xong trong <strong className="text-brand-primary dark:text-white font-bold">1 tuần đến 1 tháng</strong>. Xem dự án đã làm và gửi yêu cầu.
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <button
            onClick={() => onOpenRequestModal()}
            className="btn-primary py-2.5 px-5 text-xs font-semibold"
          >
            <span>Đặt làm website</span>
          </button>

          <a
            href="#du-an"
            className="btn-secondary py-2.5 px-5 text-xs font-semibold"
          >
            <span>Xem dự án đã làm</span>
            <ArrowRight size={14} />
          </a>
        </div>

      </div>
    </section>
  );
};
