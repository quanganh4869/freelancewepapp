import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { ArrowRight, CheckCircle2, Upload } from 'lucide-react';

export const ServicesSection = ({ onSelectService }) => {
  const { isDark } = useTheme();

  const services = [
    {
      number: '01',
      title: 'Portfolio & landing page',
      desc: 'Một trang gọn gàng để giới thiệu bạn hoặc một sản phẩm, có nút liên hệ rõ ràng. Hợp với freelancer, nhiếp ảnh, kiến trúc sư, khoá học.',
      priceTimeline: 'từ 1.000.000đ · khoảng 1 tuần',
      deliverables: ['1 trang gọn gàng tối ưu di động', 'Nút gọi điện & Zalo chat 1-click', 'Form liên hệ gửi trực tiếp', 'Tốc độ tải trang dưới 1 giây']
    },
    {
      number: '02',
      title: 'Website giới thiệu công ty nhỏ',
      desc: '5–8 trang: giới thiệu, dịch vụ, bảng giá, tin tức, liên hệ. Bạn tự sửa nội dung được, không cần gọi tôi mỗi lần đổi chữ.',
      priceTimeline: 'từ 4.000.000đ · khoảng 2 tuần',
      deliverables: ['Giao diện 5–8 trang hoàn chỉnh', 'Trang tin tức & Bài viết chuẩn SEO', 'Trang quản trị cập nhật nội dung', 'Bàn giao mã nguồn & Hướng dẫn']
    },
    {
      number: '03',
      title: 'Bán hàng cơ bản',
      desc: 'Danh mục sản phẩm, giỏ hàng, đặt hàng gửi về email hoặc Zalo. Cần thanh toán online thì gắn thêm cổng thanh toán.',
      priceTimeline: 'từ 7.000.000đ · khoảng 3 tuần',
      deliverables: ['Danh mục sản phẩm & Giỏ hàng', 'Chốt đơn gửi thẳng về Zalo / Email', 'Tùy chọn tích hợp cổng thanh toán', 'Bảo hành kỹ thuật 12 tháng']
    },
    {
      number: '04',
      title: 'Đặt lịch & web app nhỏ',
      desc: 'Đặt lịch hẹn, quản lý đơn, trang quản trị riêng có đăng nhập. Loại này tôi sẽ trao đổi kỹ trước khi báo giá.',
      priceTimeline: 'từ 10.000.000đ · khoảng 1 tháng',
      deliverables: ['Hệ thống đặt lịch & Quản lý đơn', 'Đăng nhập & Phân quyền Admin', 'Tự động hóa thông báo Zalo/Email', 'Bảo trì & Hỗ trợ lâu dài']
    }
  ];

  return (
    <section id="dich-vu" className={`py-16 md:py-24 border-b font-sans ${
      isDark ? 'bg-studio-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-14 reveal space-y-3">
          <span className="text-xs font-bold text-brand-primary tracking-wider uppercase">
            DỊCH VỤ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Bốn nhóm việc tôi làm thường xuyên nhất
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed font-medium">
            Giá dưới đây là mức khởi điểm cho phạm vi cơ bản, còn con số cuối cùng phụ thuộc vào số trang và chức năng.
          </p>
        </div>

        {/* 4 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const delayClass = `reveal-delay-${(index % 2) + 1}`;
            return (
              <div
                key={service.number}
                className={`p-7 sm:p-8 rounded-2xl border flex flex-col justify-between group hover:border-brand-primary transition-all duration-250 shadow-sm reveal ${delayClass} ${
                  isDark ? 'bg-studio-900 border-slate-800' : 'bg-white border-slate-200'
                }`}
              >
                <div className="space-y-5">
                  
                  {/* Card Number & Header */}
                  <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
                    <span className="text-2xl font-extrabold text-brand-primary">
                      {service.number}
                    </span>
                    <span className="text-xs font-bold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-studio-950 border border-slate-200 dark:border-slate-800 px-3 py-1 rounded-full">
                      {service.priceTimeline}
                    </span>
                  </div>

                  {/* Title & Desc */}
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium mt-2">
                      {service.desc}
                    </p>
                  </div>

                  {/* Deliverables */}
                  <div className="space-y-2 pt-1">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400 font-medium">
                          <CheckCircle2 size={14} className="text-brand-primary shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Design File Notice */}
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-600 dark:text-orange-400 text-[11px] font-bold">
                    <Upload size={14} className="shrink-0" />
                    <span>Có thể đính kèm file thiết kế hoặc link Figma khi gửi yêu cầu</span>
                  </div>

                </div>

                {/* Bottom Action Button */}
                <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800">
                  <button
                    onClick={() => onSelectService(service.title)}
                    className="btn-primary w-full py-3 text-xs font-bold"
                  >
                    <span>Đặt làm gói này</span>
                    <ArrowRight size={14} />
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
