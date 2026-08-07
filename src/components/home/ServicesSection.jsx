import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { ArrowRight } from 'lucide-react';

export const ServicesSection = ({ onSelectService }) => {
  const { isDark } = useTheme();

  const services = [
    {
      number: '01',
      title: 'Portfolio & landing page',
      desc: 'Một trang gọn gàng để giới thiệu bạn hoặc một sản phẩm, có nút liên hệ rõ ràng. Hợp với freelancer, nhiếp ảnh, kiến trúc sư, khoá học.',
      priceTimeline: 'từ 1.000.000đ · khoảng 1 tuần'
    },
    {
      number: '02',
      title: 'Website giới thiệu công ty nhỏ',
      desc: '5–8 trang: giới thiệu, dịch vụ, bảng giá, tin tức, liên hệ. Bạn tự sửa nội dung được, không cần gọi tôi mỗi lần đổi chữ.',
      priceTimeline: 'từ 4.000.000đ · khoảng 2 tuần'
    },
    {
      number: '03',
      title: 'Bán hàng cơ bản',
      desc: 'Danh mục sản phẩm, giỏ hàng, đặt hàng gửi về email hoặc Zalo. Cần thanh toán online thì gắn thêm cổng thanh toán.',
      priceTimeline: 'từ 7.000.000đ · khoảng 3 tuần'
    },
    {
      number: '04',
      title: 'Đặt lịch & web app nhỏ',
      desc: 'Đặt lịch hẹn, quản lý đơn, trang quản trị riêng có đăng nhập. Loại này tôi sẽ trao đổi kỹ trước khi báo giá.',
      priceTimeline: 'từ 10.000.000đ · khoảng 1 tháng'
    }
  ];

  return (
    <section id="dich-vu" className="py-16 md:py-24 border-b border-[#E6E4DD] dark:border-[#2A2A28] font-sans">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-left space-y-2 reveal">
          <span className="text-xs font-semibold text-[#666663] dark:text-[#A1A19A]">
            Dịch vụ
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1A1A1A] dark:text-white">
            Bốn nhóm việc tôi làm thường xuyên nhất
          </h2>
          <p className="text-[#666663] dark:text-[#A1A19A] text-sm leading-relaxed font-medium pt-1">
            Giá dưới đây là mức khởi điểm cho phạm vi cơ bản, còn con số cuối cùng phụ thuộc vào số trang và chức năng.
          </p>
        </div>

        {/* 4 Service Cards List (Lovable Minimalist Style) */}
        <div className="space-y-6">
          {services.map((service, index) => {
            const delayClass = `reveal-delay-${(index % 3) + 1}`;
            return (
              <div
                key={service.number}
                className={`p-6 sm:p-7 rounded-2xl border border-[#E6E4DD] dark:border-[#2A2A28] bg-white dark:bg-[#1A1A19] flex flex-col justify-between space-y-4 hover:border-[#C8C5B9] dark:hover:border-[#444440] transition-colors reveal ${delayClass}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="text-sm font-bold text-[#A1A19A] dark:text-[#666663]">
                    {service.number}
                  </span>
                  <span className="text-xs font-medium text-[#666663] dark:text-[#A1A19A] bg-[#FAF9F6] dark:bg-[#121212] border border-[#E6E4DD] dark:border-[#2A2A28] px-3 py-1 rounded-full">
                    {service.priceTimeline}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#1A1A1A] dark:text-white">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#666663] dark:text-[#A1A19A] leading-relaxed font-medium mt-2">
                    {service.desc}
                  </p>
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    onClick={() => onSelectService(service.title)}
                    className="text-xs font-semibold text-[#1A1A1A] dark:text-white hover:underline flex items-center gap-1"
                  >
                    <span>Đặt làm gói này</span>
                    <ArrowRight size={13} />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
