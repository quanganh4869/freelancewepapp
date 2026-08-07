import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { ArrowRight } from 'lucide-react';

export const ProcessSection = ({ onOpenRequestModal }) => {
  const { isDark } = useTheme();

  const steps = [
    {
      num: '1',
      title: 'Bạn nhắn cho tôi',
      desc: 'Gửi form hoặc nhắn Zalo. Nói bạn làm gì và muốn website làm được gì là đủ.'
    },
    {
      num: '2',
      title: 'Chốt phạm vi & giá',
      desc: 'Tôi hỏi lại vài câu, gửi báo giá cố định kèm mốc thời gian. Cọc 30%.'
    },
    {
      num: '3',
      title: 'Thiết kế & code',
      desc: 'Bạn xem bản thiết kế trước, duyệt xong tôi mới code. Có link xem tiến độ mỗi vài ngày.'
    },
    {
      num: '4',
      title: 'Bàn giao & bảo hành',
      desc: 'Đưa lên tên miền của bạn, hướng dẫn tự sửa nội dung, sửa lỗi miễn phí 30 ngày.'
    }
  ];

  return (
    <section id="quy-trinh" className="py-16 md:py-24 border-b border-[#E6E4DD] dark:border-[#2A2A28] font-sans">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-left space-y-2 reveal">
          <span className="text-xs font-semibold text-[#666663] dark:text-[#A1A19A]">
            Quy trình
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1A1A1A] dark:text-white">
            Bốn bước, không rườm rà
          </h2>
        </div>

        {/* 4 Steps Vertical Grid (Lovable Minimalist Style) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {steps.map((s, index) => (
            <div
              key={s.num}
              className={`p-6 rounded-2xl border border-[#E6E4DD] dark:border-[#2A2A28] bg-white dark:bg-[#1A1A19] space-y-3 reveal reveal-delay-${index + 1}`}
            >
              <div className="text-xs font-bold text-[#A1A19A]">
                Bước {s.num}
              </div>
              <h3 className="text-base font-bold text-[#1A1A1A] dark:text-white">
                {s.title}
              </h3>
              <p className="text-sm text-[#666663] dark:text-[#A1A19A] leading-relaxed font-medium">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="pt-2 reveal">
          <button
            onClick={() => onOpenRequestModal()}
            className="btn-primary py-3 px-6 text-xs font-semibold"
          >
            <span>Đặt làm website</span>
            <ArrowRight size={14} />
          </button>
        </div>

      </div>
    </section>
  );
};
