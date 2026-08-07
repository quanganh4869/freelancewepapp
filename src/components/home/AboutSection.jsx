import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { HeartHandshake, CheckCircle, XCircle } from 'lucide-react';

export const AboutSection = ({ onOpenRequestModal }) => {
  const { isDark } = useTheme();

  const techStack = ['React', 'Vite', 'TailwindCSS', 'Next.js', 'Node.js', 'Supabase', 'Figma'];
  const notAccept = [
    'Sàn thương mại điện tử lớn phức tạp',
    'Ứng dụng di động Native (iOS/Android)',
    'Dự án yêu cầu đội ngũ vận hành 24/7'
  ];

  return (
    <section id="gioi-thieu" className={`py-16 md:py-24 border-b font-sans ${
      isDark ? 'bg-studio-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Profile Card */}
          <div className="lg:col-span-5 reveal">
            <div className={`p-7 rounded-2xl border space-y-6 shadow-md ${
              isDark ? 'bg-studio-900 border-slate-800' : 'bg-white border-slate-200'
            }`}>
              
              <div className="flex items-center gap-4 border-b border-slate-200 dark:border-slate-800 pb-5">
                <div className="w-16 h-16 rounded-2xl bg-brand-primary text-white font-bold flex items-center justify-center text-xl shadow-md shrink-0">
                  QA
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">Nguyễn Quang Anh</h3>
                  <p className="text-xs text-brand-primary font-bold mt-0.5">Freelancer Web Developer</p>
                  <p className="text-[11px] text-slate-500 font-medium">Việt Nam • Nhận việc toàn quốc</p>
                </div>
              </div>

              <div className="space-y-3 text-xs font-medium">
                <div className="flex justify-between py-1.5 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-slate-500">Hình thức làm việc:</span>
                  <span className="font-bold text-brand-primary">Trực tiếp 1-1 (Freelance)</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-slate-500">Ngân sách nhận làm:</span>
                  <span className="font-bold text-slate-900 dark:text-white">Từ 1.000.000đ trở lên</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-slate-500">Zalo / Hotline:</span>
                  <a href="https://zalo.me/0935989872" target="_blank" rel="noreferrer" className="font-bold text-brand-primary hover:underline">0935 989 872</a>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-slate-500">Email:</span>
                  <a href="mailto:quanganhqb04@gmail.com" className="font-bold text-slate-800 dark:text-slate-200 hover:underline">quanganhqb04@gmail.com</a>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-brand-primary/10 border border-brand-primary/20 text-xs text-slate-700 dark:text-slate-300 space-y-1">
                <p className="font-bold text-brand-primary flex items-center gap-1.5">
                  <HeartHandshake size={15} />
                  <span>Cam kết trách nhiệm</span>
                </p>
                <p className="text-[11px] leading-relaxed font-medium">
                  Làm việc trực tiếp không qua môi giới hay sale. Báo giá cố định, mã nguồn sạch và bàn giao đúng hẹn.
                </p>
              </div>

            </div>
          </div>

          {/* Right Column: Story & Tech Badges */}
          <div className="lg:col-span-7 space-y-6 reveal reveal-delay-1">

            <span className="text-xs font-bold text-brand-primary tracking-wider uppercase">
              VỀ TÔI
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Một người, một dự án tại một thời điểm
            </h2>

            <div className="space-y-4 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed font-medium">
              <p>
                Tôi là Quang Anh. Tôi nhận thiết kế và code website theo yêu cầu. Tôi trực tiếp trao đổi 1-1 với bạn từ khi thảo luận ý tưởng cho tới lúc đưa website chạy thực tế trên tên miền riêng của bạn.
              </p>
              <p>
                Tôi nhận số lượng dự án vừa đủ cùng lúc để đảm bảo không bị quá tải hay thất hứa. Vì tự thiết kế và tự code nên bạn chỉ cần nói chuyện với một người duy nhất từ đầu đến cuối — và cũng vì thế, nếu dự án vượt quá phạm vi hoặc cần một đội ngũ cồng kềnh, tôi sẽ nói thẳng thay vì nhận bừa.
              </p>
            </div>

            {/* Stack Tags */}
            <div className="space-y-3 pt-2">
              <p className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                Thường làm việc với:
              </p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-xl bg-white dark:bg-studio-900 border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-800 dark:text-slate-200 shadow-sm flex items-center gap-1.5"
                  >
                    <CheckCircle size={13} className="text-brand-primary" />
                    <span>{tech}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Not Accept Items */}
            <div className="space-y-3 pt-2">
              <p className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                Không nhận:
              </p>
              <div className="space-y-2 text-xs font-medium text-slate-600 dark:text-slate-400">
                {notAccept.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <XCircle size={14} className="text-rose-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenRequestModal()}
                className="btn-primary py-3.5 px-8 text-sm font-bold"
              >
                <span>Trao đổi trực tiếp với Quang Anh</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
