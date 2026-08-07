import React from 'react';
import { ArrowRight } from 'lucide-react';

export const ProcessSection = ({ onOpenRequestModal }) => {
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
    <section id="quy-trinh" className="py-16 md:py-24 border-b border-brand-border font-sans">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-left space-y-2 reveal">
          <span className="text-xs font-semibold text-brand-muted uppercase tracking-wider">
            Quy trình
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-brand-primary dark:text-white">
            Bốn bước, không rườm rà
          </h2>
        </div>

        {/* 4 Steps Vertical Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {steps.map((s, index) => (
            <div
              key={s.num}
              className={`p-5 sm:p-6 rounded-lg border border-brand-border bg-brand-paper space-y-2 reveal reveal-delay-${index + 1}`}
            >
              <span className="font-mono text-xs font-bold text-brand-muted">
                Bước {s.num}
              </span>
              <h3 className="font-display text-base font-bold text-brand-primary dark:text-white">
                {s.title}
              </h3>
              <p className="text-sm text-brand-muted leading-relaxed font-medium">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="pt-2 reveal">
          <button
            onClick={() => onOpenRequestModal()}
            className="btn-primary py-2.5 px-5 text-xs font-semibold"
          >
            <span>Đặt làm website</span>
            <ArrowRight size={14} />
          </button>
        </div>

      </div>
    </section>
  );
};
