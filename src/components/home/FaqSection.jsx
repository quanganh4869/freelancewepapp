import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';

export const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'Tôi chưa có sẵn bài viết, hình ảnh hoặc logo thì có làm website được không?',
      a: 'Hoàn toàn được. Trong quá trình làm, tôi sẽ tạo khung giao diện với nội dung mẫu chuẩn ngành nghề của bạn. Sau đó tôi hỗ trợ bạn chọn hình ảnh đẹp, miễn phí bản quyền và gợi ý cách viết nội dung từng mục. Khi bạn duyệt xong, chúng ta chỉ việc thay vào.'
    },
    {
      q: 'Chi phí mua tên miền (domain) và hosting hàng năm tính thế nào? Ai đứng tên?',
      a: 'Tên miền .com thường có giá khoảng 250k – 350k/năm. Nơi lưu trữ (hosting) cho website vừa và nhỏ tôi sẽ tối ưu trên hạ tầng đám mây hiện đại, giúp bạn hoàn toàn không tốn tiền duy trì hosting hoặc chỉ tốn rất ít. Tôi hướng dẫn bạn đăng ký chính chủ tên bạn, bạn giữ toàn bộ mật khẩu, không qua bất kỳ tài khoản trung gian nào.'
    },
    {
      q: 'Sau khi bàn giao, tôi có thể tự sửa chữ, thay số điện thoại hoặc đăng ảnh mới không?',
      a: 'Chắc chắn được. Với các gói có trang quản trị, tôi thiết kế giao diện quản lý cực kỳ trực quan bằng tiếng Việt — thao tác dễ như đăng bài Facebook. Tôi cũng quay video hướng dẫn riêng cho website của bạn để bạn hoặc nhân viên có thể xem lại bất cứ lúc nào.'
    },
    {
      q: 'Nếu website gặp sự cố hoặc lỗi kỹ thuật sau khi bàn giao thì sao?',
      a: 'Tất cả website do tôi làm đều được bảo hành kỹ thuật miễn phí từ 6 đến 12 tháng (tùy gói). Nếu có bất kỳ lỗi hiển thị nào phát sinh, bạn chỉ cần nhắn tin cho tôi qua Zalo, tôi sẽ kiểm tra và khắc phục trực tiếp trong ngày mà không thu thêm bất kỳ chi phí nào.'
    },
    {
      q: 'Sau khi thanh toán xong, tôi có được nhận toàn bộ mã nguồn website không?',
      a: 'Có, 100%. Tôi bàn giao đầy đủ mã nguồn (source code) và hướng dẫn cách lưu trữ an toàn. Website là tài sản của bạn, bạn có toàn quyền chuyển giao hoặc thuê kỹ thuật khác nâng cấp sau này mà không bị ràng buộc bất cứ điều gì.'
    },
    {
      q: 'Quy trình thanh toán như thế nào?',
      a: 'Sau khi trao đổi và thống nhất phạm vi công việc, bạn đặt cọc 30% để tôi bắt đầu lên bản vẽ giao diện. Trong suốt quá trình làm, tôi gửi link xem thử để bạn theo dõi. Khi website hoàn thiện 100%, chạy thử nghiệm mượt mà trên tên miền của bạn và bạn hài lòng, bạn mới thanh toán 70% còn lại.'
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="hoi-dap" className="py-16 md:py-24 border-b border-brand-border font-sans bg-brand-paper dark:bg-studio-950 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-left space-y-3 reveal">
          <span className="text-xs font-bold text-[#D05021] uppercase tracking-wider">
            Câu hỏi thường gặp
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-primary dark:text-white">
            Giải đáp mọi băn khoăn trước khi bắt đầu
          </h2>
          <p className="text-brand-muted text-sm sm:text-base leading-relaxed font-medium">
            Những thắc mắc phổ biến nhất của các khách hàng lần đầu thuê làm website độc lập:
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5 reveal">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-xl border transition-all overflow-hidden ${
                  isOpen
                    ? 'border-[#24221E] dark:border-white bg-brand-background dark:bg-studio-900 shadow-sm'
                    : 'border-brand-border bg-brand-paper dark:bg-studio-900/50 hover:border-brand-muted'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={isOpen}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-display font-bold text-sm sm:text-base text-brand-primary dark:text-white focus:outline-none"
                >
                  <span className="leading-snug">{faq.q}</span>
                  <div className={`w-6 h-6 rounded-full border border-brand-border flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 bg-[#D05021] border-[#D05021] text-white' : 'text-brand-muted'
                  }`}>
                    <ChevronDown size={14} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-brand-muted leading-relaxed font-medium border-t border-brand-border pt-3 animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions */}
        <div className="p-5 rounded-xl border border-brand-border bg-brand-background dark:bg-studio-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 reveal">
          <div className="space-y-1">
            <h4 className="font-display font-bold text-sm text-brand-primary dark:text-white">
              Bạn vẫn còn câu hỏi khác chưa có ở đây?
            </h4>
            <p className="text-xs text-brand-muted font-medium">
              Cứ nhắn trực tiếp cho tôi qua Zalo hoặc Email, tôi sẽ giải thích cặn kẽ và dễ hiểu nhất.
            </p>
          </div>
          <a
            href="https://zalo.me/0935989872"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary py-2 px-4 text-xs font-semibold shrink-0"
          >
            Hỏi qua Zalo ngay
          </a>
        </div>

      </div>
    </section>
  );
};
