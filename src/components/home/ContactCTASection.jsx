import React from 'react';
import { Send, MessageCircle, Mail, Phone, Clock, ShieldCheck, ArrowRight } from 'lucide-react';

export const ContactCTASection = ({ onOpenRequestModal }) => {
  return (
    <section id="lien-he" className="py-16 md:py-24 border-b border-brand-border font-sans bg-brand-background dark:bg-studio-950 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main CTA Card Container */}
        <div className="p-8 sm:p-12 rounded-3xl border border-brand-border bg-brand-paper dark:bg-studio-900 shadow-xl reveal space-y-8">
          
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold text-[#D05021] uppercase tracking-wider">
              Bắt đầu dự án của bạn
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-primary dark:text-white leading-tight">
              Kể cho tôi nghe về website bạn mong muốn.
            </h2>
            <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-medium">
              Bạn chỉ cần mô tả ngắn gọn mong muốn theo cách hiểu của mình. Tôi sẽ đọc kỹ và phản hồi lại ngay trong ngày với lộ trình và phương án tiết kiệm nhất.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => onOpenRequestModal()}
              className="btn-primary py-3.5 px-6 text-xs sm:text-sm font-semibold shadow-md"
            >
              <Send size={15} />
              <span>Gửi biểu mẫu yêu cầu làm website</span>
            </button>

            <a
              href="https://zalo.me/0935989872"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary py-3.5 px-6 text-xs sm:text-sm font-semibold"
            >
              <MessageCircle size={15} className="text-blue-500" />
              <span>Nhắn tin Zalo (0935 989 872)</span>
            </a>
          </div>

          {/* Direct Contact Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-brand-border">
            
            <div className="p-4 rounded-xl border border-brand-border bg-brand-background dark:bg-studio-950 space-y-1">
              <span className="text-[10px] font-bold text-brand-muted uppercase tracking-wider block">
                Zalo / Hotline trực tiếp:
              </span>
              <a
                href="https://zalo.me/0935989872"
                target="_blank"
                rel="noreferrer"
                className="font-display font-bold text-sm text-brand-primary dark:text-white hover:text-[#D05021] transition-colors flex items-center gap-1.5"
              >
                <Phone size={13} className="text-[#D05021]" />
                <span>0935 989 872</span>
              </a>
            </div>

            <div className="p-4 rounded-xl border border-brand-border bg-brand-background dark:bg-studio-950 space-y-1">
              <span className="text-[10px] font-bold text-brand-muted uppercase tracking-wider block">
                Email trao đổi:
              </span>
              <a
                href="mailto:quanganhqb04@gmail.com"
                className="font-display font-bold text-sm text-brand-primary dark:text-white hover:text-[#D05021] transition-colors flex items-center gap-1.5"
              >
                <Mail size={13} className="text-[#D05021]" />
                <span>quanganhqb04@gmail.com</span>
              </a>
            </div>

            <div className="p-4 rounded-xl border border-brand-border bg-brand-background dark:bg-studio-950 space-y-1">
              <span className="text-[10px] font-bold text-brand-muted uppercase tracking-wider block">
                Thời gian phản hồi:
              </span>
              <div className="font-display font-bold text-sm text-brand-primary dark:text-white flex items-center gap-1.5">
                <Clock size={13} className="text-[#D05021]" />
                <span>Trong vòng 2 – 4 giờ</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
