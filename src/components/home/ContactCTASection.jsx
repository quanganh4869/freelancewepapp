import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Send, Mail, Phone, MessageCircle, CheckCircle } from 'lucide-react';

export const ContactCTASection = ({ onOpenRequestModal }) => {
  const { isDark } = useTheme();

  return (
    <section id="lien-he" className={`py-16 md:py-24 font-sans relative overflow-hidden ${
      isDark ? 'bg-studio-900 text-white border-b border-slate-800' : 'bg-slate-900 text-white border-b border-slate-800'
    }`}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-4xl mx-auto text-left sm:text-center space-y-6 reveal">

          <span className="text-xs font-bold text-brand-primary tracking-wider uppercase">
            ĐẶT LÀM WEBSITE
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Kể tôi nghe bạn cần gì
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl sm:mx-auto leading-relaxed font-medium">
            Điền khoảng một phút. Tôi đọc hết và trả lời trong ngày, kể cả khi thấy dự án chưa hợp với mình. Viết ngắn cũng được, thiếu gì tôi sẽ trao đổi lại.
          </p>

          {/* Key Advantages */}
          <div className="flex flex-wrap items-center sm:justify-center gap-6 text-xs font-bold text-slate-300 pt-2">
            <div className="flex items-center gap-2">
              <CheckCircle size={15} className="text-brand-primary" />
              <span>Báo giá trọn gói từ 1.000.000đ</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={15} className="text-brand-primary" />
              <span>Thời gian từ 1 tuần</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={15} className="text-brand-primary" />
              <span>Phản hồi trong ngày</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center sm:justify-center gap-4">
            <button
              onClick={() => onOpenRequestModal()}
              className="btn-primary py-4 px-9 text-sm font-bold shadow-lg w-full sm:w-auto"
            >
              <Send size={16} />
              <span>Gửi yêu cầu đặt làm website</span>
            </button>

            <a
              href="https://zalo.me/0935989872"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary py-4 px-8 text-sm font-bold w-full sm:w-auto"
            >
              <MessageCircle size={16} className="text-brand-primary" />
              <span>Chat trực tiếp qua Zalo (0935 989 872)</span>
            </a>
          </div>

          {/* Direct Email / Phone Line */}
          <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center sm:justify-center gap-6 text-xs text-slate-400 font-medium">
            <div className="flex items-center gap-2">
              <Mail size={14} className="text-brand-primary" />
              <span>Email: <a href="mailto:quanganhqb04@gmail.com" className="text-white hover:underline font-bold">quanganhqb04@gmail.com</a></span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-brand-primary" />
              <span>Zalo / SĐT: <a href="https://zalo.me/0935989872" target="_blank" rel="noreferrer" className="text-white hover:underline font-bold">0935 989 872</a></span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
