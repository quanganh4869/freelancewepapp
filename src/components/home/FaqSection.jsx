import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { ChevronDown } from 'lucide-react';

export const FaqSection = () => {
  const { isDark } = useTheme();
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
    <section id="hoi-dap" className="py-16 md:py-24 border-b border-[#E6E4DD] dark:border-[#2A2A28] font-sans">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="text-left space-y-2 reveal">
          <span className="text-xs font-semibold text-[#666663] dark:text-[#A1A19A]">
            Câu hỏi hay gặp
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1A1A1A] dark:text-white">
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
                className={`rounded-2xl border transition-colors overflow-hidden ${
                  isDark
                    ? 'bg-[#1A1A19] border-[#2A2A28]'
                    : 'bg-white border-[#E6E4DD]'
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-[#1A1A1A] dark:text-white"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={16}
                    className={`text-[#A1A19A] shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#1A1A1A] dark:text-white' : ''}`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-0 text-sm text-[#666663] dark:text-[#A1A19A] leading-relaxed font-medium border-t border-[#E6E4DD] dark:border-[#2A2A28] pt-3">
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
