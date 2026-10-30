import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { INITIAL_SERVICES } from '../data/seedData';

export const ServicesPage = () => {
  return (
    <div className="py-12 sm:py-16 md:py-20 font-sans animate-page-in">
      
      {/* Editorial Header */}
      <div className="space-y-4 pb-12 sm:pb-16 border-b border-[#DAD0C7] dark:border-[#332B26]">
        <span className="text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.08em] text-[#82766F] dark:text-[#9E938B] block font-mono">
          02 / SERVICES CATALOGUE
        </span>
        <h1 className="text-[40px] sm:text-[54px] md:text-[68px] font-[800] tracking-[-0.04em] text-[#38251F] dark:text-[#EDE6DE] leading-[1.02]">
          DỊCH VỤ NHẬN LÀM WEBSITE
        </h1>
        <p className="text-[17px] sm:text-[18px] text-[#82766F] dark:text-[#9E938B] max-w-[720px] leading-[1.65]">
          Bốn nhóm giải pháp website tôi trực tiếp nhận thiết kế và phát triển. Mỗi nhóm giải quyết một bài toán cụ thể và được báo giá trọn gói minh bạch.
        </p>
      </div>

      {/* Services List - Clean Un-boxed Editorial Flow */}
      <div className="divide-y divide-[#DAD0C7] dark:divide-[#332B26]">
        {INITIAL_SERVICES.map((service) => (
          <div 
            key={service.id}
            className="py-10 sm:py-12 first:pt-8 last:pb-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-start"
          >
            {/* Left: Number & Pricing Meta */}
            <div className="md:col-span-3 space-y-1.5">
              <span className="font-mono text-[14px] text-[#82766F] dark:text-[#9E938B] font-bold block">
                {service.number}
              </span>
              <p className="text-[17px] font-bold text-[#38251F] dark:text-[#EDE6DE]">
                {service.priceStarting}
              </p>
              <p className="text-[13px] text-[#82766F] dark:text-[#9E938B]">
                {service.timeline}
              </p>
            </div>

            {/* Middle: Title, Narrative & Suitability */}
            <div className="md:col-span-6 space-y-3">
              <h2 className="text-[24px] sm:text-[26px] font-bold text-[#38251F] dark:text-[#EDE6DE]">
                <Link to={`/services/${service.slug}`} className="hover:underline">
                  {service.title}
                </Link>
              </h2>
              <p className="text-[15px] sm:text-[16px] text-[#422B25] dark:text-[#CFC4B8] leading-[1.7] font-normal">
                {service.shortDesc}
              </p>
              <p className="text-[13px] text-[#82766F] dark:text-[#9E938B] leading-relaxed">
                <strong className="text-[#38251F] dark:text-[#EDE6DE]">Phù hợp nhất với: </strong> 
                {service.forWhom}
              </p>
            </div>

            {/* Right: Actions */}
            <div className="md:col-span-3 flex flex-col items-start md:items-end gap-2.5 pt-1">
              <Link
                to={`/services/${service.slug}`}
                className="btn-primary py-2.5 px-4 text-[13px] font-semibold w-full sm:w-auto md:w-full justify-center"
              >
                <span>Xem chi tiết dịch vụ</span>
                <ArrowRight size={13} />
              </Link>

              <Link
                to={`/start-project?service=${service.id}`}
                className="text-[13px] font-bold text-[#38251F] dark:text-[#EDE6DE] hover:text-[#985B3D] underline"
              >
                <span>Yêu cầu gói này →</span>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Cross-Link Note on Pricing & Custom Needs */}
      <div className="pt-12 border-t border-[#DAD0C7] dark:border-[#332B26] grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="space-y-2">
          <h3 className="text-[18px] font-bold text-[#38251F] dark:text-[#EDE6DE]">
            Xem chi tiết bảng giá và các khoản phí
          </h3>
          <p className="text-[14px] text-[#82766F] dark:text-[#9E938B] leading-relaxed">
            Toàn bộ chi phí tên miền, lưu trữ và các gói giá trọn gói được trình bày minh bạch tại trang Bảng giá.
          </p>
          <div className="pt-1">
            <Link to="/pricing" className="text-[14px] font-bold text-[#38251F] dark:text-[#EDE6DE] underline inline-flex items-center gap-1">
              <span>Mở trang bảng giá</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-[18px] font-bold text-[#38251F] dark:text-[#EDE6DE]">
            Bạn có yêu cầu chức năng đặc thù riêng?
          </h3>
          <p className="text-[14px] text-[#82766F] dark:text-[#9E938B] leading-relaxed">
            Hãy mô tả quy trình thực tế của bạn (đặt lịch, bán hàng, quản trị nội bộ). Tôi sẽ tư vấn phương án kỹ thuật và báo giá riêng.
          </p>
          <div className="pt-1">
            <Link to="/start-project" className="text-[14px] font-bold text-[#38251F] dark:text-[#EDE6DE] underline inline-flex items-center gap-1">
              <span>Khởi động mô tả dự án</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ServicesPage;
