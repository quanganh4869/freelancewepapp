import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Check, X } from 'lucide-react';

export const AboutSection = ({ onOpenRequestModal }) => {
  const { isDark } = useTheme();

  const techStack = ['React', 'Vite', 'TailwindCSS', 'Next.js', 'Node.js', 'Supabase', 'Figma'];
  const notAccept = [
    'Sàn thương mại điện tử lớn phức tạp',
    'Ứng dụng di động Native (iOS/Android)',
    'Dự án yêu cầu đội ngũ vận hành 24/7'
  ];

  return (
    <section id="gioi-thieu" className="py-16 md:py-24 border-b border-[#E6E4DD] dark:border-[#2A2A28] font-sans">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="text-left space-y-2 reveal">
          <span className="text-xs font-semibold text-[#666663] dark:text-[#A1A19A]">
            Về tôi
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1A1A1A] dark:text-white">
            Một người, một dự án tại một thời điểm.
          </h2>
        </div>

        {/* Story Text */}
        <div className="space-y-4 text-sm sm:text-base leading-relaxed text-[#666663] dark:text-[#A1A19A] font-medium reveal">
          <p>
            Tôi là Quang Anh. Tôi nhận thiết kế và code website cho các cá nhân, cửa hàng và công ty nhỏ. Tôi trực tiếp trao đổi 1-1 với bạn từ khi thảo luận ý tưởng cho tới lúc đưa website chạy thực tế trên tên miền riêng của bạn.
          </p>
          <p>
            Tôi nhận tối đa hai dự án cùng lúc để không phải hẹn lại bạn. Tôi tự thiết kế và tự code nên bạn chỉ nói chuyện với một người từ đầu đến cuối — và cũng vì thế, nếu dự án quá lớn hoặc cần một đội ngũ, tôi sẽ nói thẳng thay vì nhận bừa.
          </p>
        </div>

        {/* Stack Tags */}
        <div className="space-y-3 pt-2 reveal">
          <h4 className="text-xs font-bold text-[#1A1A1A] dark:text-white uppercase tracking-wider">
            Thường làm việc với:
          </h4>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-xl bg-white dark:bg-[#1A1A19] border border-[#E6E4DD] dark:border-[#2A2A28] text-xs font-semibold text-[#1A1A1A] dark:text-white flex items-center gap-1.5"
              >
                <Check size={12} className="text-[#1A1A1A] dark:text-white" />
                <span>{tech}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Not Accept Items */}
        <div className="space-y-3 pt-2 reveal">
          <h4 className="text-xs font-bold text-[#1A1A1A] dark:text-white uppercase tracking-wider">
            Không nhận:
          </h4>
          <div className="space-y-2 text-xs font-medium text-[#666663] dark:text-[#A1A19A]">
            {notAccept.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <X size={14} className="text-rose-500 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-2 reveal">
          <button
            onClick={() => onOpenRequestModal()}
            className="btn-primary py-3 px-6 text-xs font-semibold"
          >
            <span>Nhắn trao đổi trực tiếp</span>
          </button>
        </div>

      </div>
    </section>
  );
};
