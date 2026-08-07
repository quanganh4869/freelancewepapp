import React from 'react';
import { Check, X } from 'lucide-react';

export const AboutSection = ({ onOpenRequestModal }) => {
  const techStack = ['React', 'Vite', 'TailwindCSS', 'Next.js', 'Node.js', 'Supabase', 'Figma'];
  const notAccept = [
    'Sàn thương mại điện tử lớn phức tạp',
    'Ứng dụng di động Native (iOS/Android)',
    'Dự án yêu cầu đội ngũ vận hành 24/7'
  ];

  return (
    <section id="gioi-thieu" className="py-16 md:py-24 border-b border-brand-border font-sans">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="text-left space-y-2 reveal">
          <span className="text-xs font-semibold text-brand-muted uppercase tracking-wider">
            Về tôi
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-brand-primary dark:text-white">
            Một người, một dự án tại một thời điểm.
          </h2>
        </div>

        {/* Story Text */}
        <div className="space-y-4 text-sm sm:text-base leading-relaxed text-brand-muted font-medium reveal">
          <p>
            Tôi là Quang Anh. Tôi nhận thiết kế và code website cho các cá nhân, cửa hàng và công ty nhỏ. Tôi trực tiếp trao đổi 1-1 với bạn từ khi thảo luận ý tưởng cho tới lúc đưa website chạy thực tế trên tên miền riêng của bạn.
          </p>
          <p>
            Tôi nhận tối đa hai dự án cùng lúc để không phải hẹn lại bạn. Tôi tự thiết kế và tự code nên bạn chỉ nói chuyện với một người từ đầu đến cuối — và cũng vì thế, nếu dự án quá lớn hoặc cần một đội ngũ, tôi sẽ nói thẳng thay vì nhận bừa.
          </p>
        </div>

        {/* Stack Tags */}
        <div className="space-y-3 pt-2 reveal">
          <h4 className="text-xs font-bold text-brand-primary dark:text-white uppercase tracking-wider">
            Thường làm việc với:
          </h4>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded bg-brand-paper border border-brand-border text-xs font-semibold text-brand-primary dark:text-white flex items-center gap-1.5"
              >
                <Check size={12} className="text-brand-primary dark:text-white" />
                <span>{tech}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Not Accept Items */}
        <div className="space-y-3 pt-2 reveal">
          <h4 className="text-xs font-bold text-brand-primary dark:text-white uppercase tracking-wider">
            Không nhận:
          </h4>
          <div className="space-y-2 text-xs font-medium text-brand-muted">
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
            className="btn-primary py-2.5 px-5 text-xs font-semibold"
          >
            <span>Nhắn trao đổi trực tiếp</span>
          </button>
        </div>

      </div>
    </section>
  );
};
