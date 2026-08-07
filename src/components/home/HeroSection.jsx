import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { ArrowRight, MapPin } from 'lucide-react';

export const HeroSection = ({ onOpenRequestModal }) => {
  const { isDark } = useTheme();

  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 border-b border-[#E6E4DD] dark:border-[#2A2A28] font-sans">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-7 reveal">
        
        {/* Location Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white dark:bg-[#1A1A19] border border-[#E6E4DD] dark:border-[#2A2A28] text-[#666663] dark:text-[#A1A19A] text-xs font-medium shadow-none">
          <MapPin size={13} className="text-[#1A1A1A] dark:text-white" />
          <span>Việt Nam · nhận việc từ xa</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-[#1A1A1A] dark:text-white">
          Chào bạn, tôi là Quang Anh.
        </h1>

        {/* Lead Paragraph */}
        <p className="text-base sm:text-lg leading-relaxed text-[#666663] dark:text-[#A1A19A] font-medium max-w-2xl">
          Nhiều năm nay tôi nhận thiết kế và code website nhỏ và vừa — portfolio, landing page, web giới thiệu công ty, bán hàng, đặt lịch. Bạn nhắn thẳng cho tôi, không qua sales, không có bên thứ ba.
        </p>

        {/* Value Highlight Badge */}
        <div className="p-4 rounded-xl bg-white dark:bg-[#1A1A19] border border-[#E6E4DD] dark:border-[#2A2A28] text-xs text-[#666663] dark:text-[#A1A19A] font-medium leading-relaxed max-w-xl">
          Một người trực tiếp làm website cho bạn: <strong className="text-[#1A1A1A] dark:text-white font-bold">từ 1 triệu</strong>, xong trong <strong className="text-[#1A1A1A] dark:text-white font-bold">1 tuần đến 1 tháng</strong>. Xem dự án đã làm và gửi yêu cầu.
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3.5 pt-2">
          <button
            onClick={() => onOpenRequestModal()}
            className="btn-primary py-3 px-6 text-xs font-semibold shadow-none"
          >
            <span>Đặt làm website</span>
          </button>

          <a
            href="#du-an"
            className="btn-secondary py-3 px-6 text-xs font-semibold shadow-none"
          >
            <span>Xem dự án đã làm</span>
            <ArrowRight size={14} />
          </a>
        </div>

      </div>
    </section>
  );
};
