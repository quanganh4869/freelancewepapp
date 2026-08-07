import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection = () => {
  const { isDark } = useTheme();
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: 'Tôi chưa có sẵn nội dung, hình ảnh thì có làm web được không?',
      a: 'Hoàn toàn được. Tôi sẽ dựng giao diện trước bằng nội dung và hình ảnh mẫu chuẩn ngành của bạn. Trong quá trình làm, bạn gửi nội dung dần. Nếu cần trợ giúp chuẩn hóa văn bản hoặc tìm kiếm hình ảnh đẹp, tôi sẽ hỗ trợ thêm.'
    },
    {
      q: 'Chi phí tên miền (domain) và hosting tính như thế nào?',
      a: 'Báo giá website của tôi là chi phí lập trình trọn gói. Tên miền (.com khoảng 300k/năm) và hosting sẽ do bạn trực tiếp đứng tên sở hữu. Tôi sẽ tư vấn gói tối ưu nhất và hỗ trợ đăng ký cài đặt 100% miễn phí.'
    },
    {
      q: 'Sau khi bàn giao, tôi có tự sửa bài viết, thông tin trên web được không?',
      a: 'Có. Mỗi website tôi bàn giao đều có trang quản trị hoặc file cấu hình cực kỳ dễ dùng. Tôi có video hướng dẫn chi tiết 1-1 để bạn hoặc nhân viên có thể tự thay đổi bài viết, sản phẩm, thông tin liên hệ mà không cần biết viết code.'
    },
    {
      q: 'WordPress vs Lập trình tay (React/Code riêng) khác gì nhau?',
      a: 'Code riêng bằng React/Tailwind giúp trang web load cực nhanh (< 1 giây), không sợ lỗi bảo mật hay xung đột plugin như WordPress. Bạn cũng không phải trả phí gia hạn plugin hàng năm.'
    },
    {
      q: 'Website của tôi làm xong có được bảo hành không?',
      a: 'Có. Tôi cam kết bảo hành kỹ thuật 12 tháng trực tiếp 1-1. Mọi lỗi phát sinh do mã nguồn sẽ được xử lý lập tức. Ngoài ra, tôi hỗ trợ miễn phí các chỉnh sửa nhỏ trong 30 ngày đầu sau bàn giao.'
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="hoi-dap" className={`py-16 md:py-24 border-b font-sans ${
      isDark ? 'bg-studio-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
    }`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left space-y-3 mb-12 reveal">
          <span className="text-xs font-bold text-brand-primary tracking-wider uppercase">
            CÂU HỎI HAY GẶP
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Những thứ khách hay hỏi tôi
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed font-medium">
            Trả lời minh bạch các thắc mắc phổ biến trước khi bạn quyết định đặt làm website.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4 reveal">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isDark
                    ? isOpen ? 'bg-studio-900 border-brand-primary/40 shadow-lg' : 'bg-studio-900/60 border-slate-800 hover:border-slate-700'
                    : isOpen ? 'bg-white border-brand-primary/40 shadow-md' : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 dark:text-white"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle size={18} className="text-brand-primary shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-slate-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-brand-primary' : ''}`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-slate-600 dark:text-slate-300 text-sm leading-relaxed border-t border-slate-100 dark:border-slate-800/80 font-medium">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
