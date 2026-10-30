import React from 'react';
import { Check, X, Shield, User, HeartHandshake, Zap, ArrowRight } from 'lucide-react';

export const AboutSection = ({ onOpenRequestModal }) => {
  const techStack = ['React', 'Vite', 'Tailwind CSS', 'JavaScript (ES6+)', 'Node.js', 'Vercel'];
  
  const notAccept = [
    'Sàn thương mại điện tử khổng lồ (Shopee, Tiki) vì cần cả một đội ngũ vận hành 24/7',
    'Ứng dụng di động cài đặt qua App Store / Google Play (chỉ tập trung Web & Responsive Mobile)',
    'Các dự án cờ bạc, nội dung vi phạm pháp luật hoặc thiếu minh bạch'
  ];

  return (
    <section id="gioi-thieu" className="py-16 md:py-24 border-b border-brand-border font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-left space-y-3 reveal max-w-3xl">
          <span className="text-xs font-bold text-[#D05021] uppercase tracking-wider">
            Về tôi
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-primary dark:text-white">
            Một người, trực tiếp làm việc, tối đa hai dự án cùng lúc.
          </h2>
          <p className="text-brand-muted text-sm sm:text-base leading-relaxed font-medium">
            Tôi là Quang Anh — một web developer độc lập tại Việt Nam. Tôi thích sự rõ ràng, thẳng thắn và tập trung vào hiệu quả thực tế của sản phẩm.
          </p>
        </div>

        {/* 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Personal Story & Work Philosophy */}
          <div className="lg:col-span-7 space-y-5 reveal">
            <div className="p-6 rounded-2xl border border-brand-border bg-brand-paper dark:bg-studio-900 space-y-4 text-sm leading-relaxed text-brand-muted font-medium">
              <p>
                Khi thuê làm website tại các công ty lớn, bạn thường phải làm việc qua nhiều tầng lớp: nhân viên sale tư vấn một đằng, đội thiết kế làm một nẻo, còn lập trình viên thì bạn không bao giờ được nói chuyện trực tiếp. Kết quả là việc trao đổi rất mất thời gian và website không đúng như kỳ vọng ban đầu.
              </p>
              <p>
                Với <strong className="text-brand-primary dark:text-white">Quang Anh Studio</strong>, mô hình hoàn toàn khác: <strong>Bạn làm việc trực tiếp 1-1 với tôi</strong>. Tôi là người lắng nghe yêu cầu, trực tiếp vẽ giao diện và tự tay viết từng dòng code cho website của bạn.
              </p>
              <p>
                Tôi luôn giới hạn nhận tối đa <strong>2 dự án cùng một thời điểm</strong>. Việc này giúp tôi có đủ thời gian tập trung toàn bộ tâm huyết, trả lời tin nhắn của bạn nhanh chóng và luôn bàn giao đúng hẹn.
              </p>
            </div>

            {/* Commitments Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-brand-border bg-brand-paper dark:bg-studio-900 flex items-start gap-3">
                <HeartHandshake size={20} className="text-[#D05021] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="font-display font-bold text-xs text-brand-primary dark:text-white uppercase">
                    Trung thực & Tận tâm
                  </h4>
                  <p className="text-[11px] text-brand-muted leading-relaxed font-medium">
                    Có gì tôi nói nấy. Nếu nhu cầu của bạn chỉ cần một giải pháp miễn phí hoặc đơn giản hơn, tôi sẽ khuyên bạn thật lòng.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-brand-border bg-brand-paper dark:bg-studio-900 flex items-start gap-3">
                <Shield size={20} className="text-[#D05021] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="font-display font-bold text-xs text-brand-primary dark:text-white uppercase">
                    Không giữ tài khoản
                  </h4>
                  <p className="text-[11px] text-brand-muted leading-relaxed font-medium">
                    Toàn bộ mã nguồn, tên miền và quyền quản trị đều bàn giao 100% cho bạn. Bạn có toàn quyền quyết định tài sản số của mình.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Technology In Use & What I Don't Accept */}
          <div className="lg:col-span-5 space-y-5 reveal reveal-delay-2">
            
            {/* Tech Stack Actually Used */}
            <div className="p-6 rounded-2xl border border-brand-border bg-brand-paper dark:bg-studio-900 space-y-4">
              <h4 className="font-display font-bold text-sm text-brand-primary dark:text-white uppercase tracking-wider">
                Công nghệ tôi sử dụng thực tế:
              </h4>
              <p className="text-xs text-brand-muted font-medium leading-relaxed">
                Tôi dùng công nghệ hiện đại để website nhẹ, mở nhanh dưới 1 giây và không bị lỗi thời:
              </p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-brand-background dark:bg-studio-950 border border-brand-border text-xs font-semibold text-brand-primary dark:text-white flex items-center gap-1.5"
                  >
                    <Check size={13} className="text-[#D05021]" />
                    <span>{tech}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Clear Transparency on What I DON'T Accept */}
            <div className="p-6 rounded-2xl border border-brand-border bg-brand-paper dark:bg-studio-900 space-y-3">
              <h4 className="font-display font-bold text-sm text-brand-primary dark:text-white uppercase tracking-wider">
                Những dự án tôi thẳng thắn KHÔNG nhận:
              </h4>
              <p className="text-xs text-brand-muted font-medium leading-relaxed">
                Để không làm mất thời gian và tiền bạc của bạn, tôi từ chối ngay từ đầu những việc sau:
              </p>
              <div className="space-y-2 text-xs font-medium text-brand-muted">
                {notAccept.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <X size={15} className="text-rose-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Chat Action */}
            <div className="pt-1">
              <button
                onClick={() => onOpenRequestModal()}
                className="btn-primary w-full py-2.5 px-4 text-xs font-semibold justify-center"
              >
                <span>Nhắn tin trao đổi trực tiếp với Quang Anh</span>
                <ArrowRight size={13} />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
