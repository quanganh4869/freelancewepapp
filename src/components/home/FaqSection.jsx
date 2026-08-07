import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: 'Tôi chưa có sẵn nội dung, hình ảnh thì có làm web được không?',
      a: 'Không sao. Tôi làm trước với nội dung mẫu, bạn gửi dần. Nếu cần tôi giúp viết nội dung cơ bản hoặc chọn ảnh thì tính thêm khoảng 500k–1.5tr tuỳ số trang.'
    },
    {
      q: 'Chi phí tên miền và hosting tính thế nào?',
      a: 'Đúng. Tên miền .com khoảng 300k/năm, hosting cho website nhỏ thường 0đ đến 1tr/năm. Tôi đăng ký giúp và để bạn đứng tên, không giữ tài khoản của bạn.'
    },
    {
      q: 'Sau khi bàn giao, nếu tôi cần sửa nhỏ hoặc sửa lỗi thì sao?',
      a: 'Sửa nhỏ trong 30 ngày đầu là miễn phí. Sau đó tôi tính theo giờ 250k/giờ, hoặc báo giá trọn gói nếu là chức năng mới.'
    },
    {
      q: 'Tôi có nghe nói đến WordPress, sao ở đây lại code riêng?',
      a: 'Có dự án tôi vẫn dùng nếu bạn cần blog nhiều. Nhưng phần lớn web nhỏ tôi code riêng bằng React vì nhẹ hơn, nhanh hơn và bạn không phải trả tiền plugin hằng năm.'
    },
    {
      q: 'Tôi đã có web cũ nhưng bị chậm / hỏng, bạn có nhận sửa không?',
      a: 'Có, miễn là code còn đọc được. Tôi xem qua 30 phút rồi nói thật là nên sửa hay nên làm lại.'
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="hoi-dap" className="py-16 md:py-24 border-b border-brand-border font-sans">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="text-left space-y-2 reveal">
          <span className="text-xs font-semibold text-brand-muted uppercase tracking-wider">
            Câu hỏi hay gặp
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-brand-primary dark:text-white">
            Những thứ khách hay hỏi tôi
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3 reveal">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-lg border border-brand-border bg-brand-paper transition-colors overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-display font-bold text-sm text-brand-primary dark:text-white"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={16}
                    className={`text-brand-muted shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-brand-primary dark:text-white' : ''}`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-sm text-brand-muted leading-relaxed font-medium border-t border-brand-border pt-3">
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
