import React from 'react';
import { Send, Mail, MessageCircle } from 'lucide-react';

export const ContactCTASection = ({ onOpenRequestModal }) => {
  return (
    <section id="lien-he" className="py-16 md:py-24 border-b border-brand-border font-sans">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 reveal">
        
        {/* Section Header */}
        <div className="text-left space-y-2">
          <span className="text-xs font-semibold text-brand-muted uppercase tracking-wider">
            Đặt làm website
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-brand-primary dark:text-white">
            Kể tôi nghe bạn cần gì
          </h2>
          <p className="text-brand-muted text-sm leading-relaxed font-medium pt-1">
            Điền khoảng một phút. Tôi đọc hết và trả lời trong ngày, kể cả khi tôi thấy dự án chưa hợp với mình. Viết ngắn cũng được, thiếu gì tôi hỏi lại.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
          <button
            onClick={() => onOpenRequestModal()}
            className="btn-primary py-3 px-5 text-xs font-semibold"
          >
            <Send size={14} />
            <span>Gửi yêu cầu làm website</span>
          </button>

          <a
            href="https://zalo.me/0935989872"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary py-3 px-5 text-xs font-semibold"
          >
            <MessageCircle size={14} />
            <span>Chat qua Zalo (0935 989 872)</span>
          </a>
        </div>

        {/* Direct Contact Links */}
        <div className="pt-4 border-t border-brand-border space-y-2 text-xs font-medium text-brand-muted">
          <p className="font-semibold text-brand-primary dark:text-white">Hoặc nhắn trực tiếp:</p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <a
              href="https://zalo.me/0935989872"
              target="_blank"
              rel="noreferrer"
              className="text-brand-primary dark:text-white font-semibold hover:underline flex items-center gap-1.5"
            >
              <MessageCircle size={14} />
              <span>Zalo · 0935 989 872</span>
            </a>
            <span className="hidden sm:inline">•</span>
            <a
              href="mailto:quanganhqb04@gmail.com"
              className="text-brand-primary dark:text-white font-semibold hover:underline flex items-center gap-1.5"
            >
              <Mail size={14} />
              <span>quanganhqb04@gmail.com</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
