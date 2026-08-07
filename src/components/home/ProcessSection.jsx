import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { MessageSquare, Layout, Code, CheckCircle, ArrowRight } from 'lucide-react';

export const ProcessSection = ({ onOpenRequestModal }) => {
  const { isDark } = useTheme();

  const steps = [
    {
      title: 'Trao đổi yêu cầu',
      desc: 'Tiếp nhận nhu cầu, mong muốn giao diện và ngân sách dự kiến của bạn.',
      icon: MessageSquare
    },
    {
      title: 'Thống nhất giao diện & chi phí',
      desc: 'Chốt cấu trúc trang, giao diện mẫu và báo giá minh bạch trước khi làm.',
      icon: Layout
    },
    {
      title: 'Tiến hành phát triển',
      desc: 'Lập trình, tối ưu tốc độ và kiểm thử hiển thị mượt trên di động & máy tính.',
      icon: Code
    },
    {
      title: 'Bàn giao website',
      desc: 'Hướng dẫn bạn quản trị, bàn giao mã nguồn và bảo hành kỹ thuật lâu dài.',
      icon: CheckCircle
    }
  ];

  return (
    <section id="process" className={`py-16 md:py-24 border-b font-sans ${
      isDark ? 'bg-studio-950 border-white/10 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 reveal space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white font-display">
            Quy trình 4 bước đơn giản
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
            Trao đổi trực tiếp 1-1, làm việc nhanh gọn và bàn giao đúng hẹn.
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
                className={`studio-card p-6 rounded-2xl flex flex-col justify-between space-y-4 reveal ${delayClass}`}
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 border border-brand-primary/25 flex items-center justify-center text-brand-primary">
                    <IconComponent size={22} />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display">
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
        <div className="mt-12 text-center reveal">
          <button
            onClick={() => onOpenRequestModal()}
            className="btn-primary py-3.5 px-8 text-sm font-bold font-display"
          >
            <span>Bắt đầu đặt làm website</span>
            <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
};
