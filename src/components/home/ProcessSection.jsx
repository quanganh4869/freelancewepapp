import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { MessageSquare, CheckCircle, ArrowRight, FileCheck, Code2 } from 'lucide-react';

export const ProcessSection = ({ onOpenRequestModal }) => {
  const { isDark } = useTheme();

  const steps = [
    {
      number: '1',
      title: 'Bạn nhắn cho tôi',
      desc: 'Gửi form hoặc nhắn Zalo. Nói bạn làm gì và muốn website làm được gì là đủ.',
      icon: MessageSquare
    },
    {
      number: '2',
      title: 'Chốt phạm vi & giá',
      desc: 'Tôi hỏi lại vài câu, gửi báo giá cố định kèm mốc thời gian. Cọc 30%.',
      icon: FileCheck
    },
    {
      number: '3',
      title: 'Thiết kế & code',
      desc: 'Bạn xem bản thiết kế trước, duyệt xong tôi mới code. Có link xem tiến độ mỗi vài ngày.',
      icon: Code2
    },
    {
      number: '4',
      title: 'Bàn giao & bảo hành',
      desc: 'Đưa lên tên miền của bạn, hướng dẫn tự sửa nội dung, bảo hành 12 tháng.',
      icon: CheckCircle
    }
  ];

  return (
    <section id="quy-trinh" className={`py-16 md:py-24 border-b font-sans ${
      isDark ? 'bg-studio-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-14 reveal space-y-3">
          <span className="text-xs font-bold text-brand-primary tracking-wider uppercase">
            QUY TRÌNH
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Bốn bước, không rườm rà
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed font-medium">
            Trao đổi trực tiếp 1-1, làm việc nhanh gọn và bàn giao đúng cam kết.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const delayClass = `reveal-delay-${index + 1}`;
            return (
              <div
                key={index}
                className={`p-6 rounded-2xl border flex flex-col justify-between space-y-4 reveal ${delayClass} ${
                  isDark ? 'bg-studio-900 border-slate-800' : 'bg-white border-slate-200'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-brand-primary/10 border border-brand-primary/25 flex items-center justify-center text-brand-primary">
                      <IconComponent size={20} />
                    </div>
                    <span className="text-xl font-extrabold text-slate-400 dark:text-slate-600">
                      0{step.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="mt-12 text-left reveal">
          <button
            onClick={() => onOpenRequestModal()}
            className="btn-primary py-3.5 px-8 text-sm font-bold"
          >
            <span>Bắt đầu đặt làm website</span>
            <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
};
