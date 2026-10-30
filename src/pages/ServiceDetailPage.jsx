import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { INITIAL_SERVICES } from '../data/seedData';

export const ServiceDetailPage = () => {
  const { slug } = useParams();
  const service = INITIAL_SERVICES.find((s) => s.slug === slug || s.id === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="py-10 sm:py-14 md:py-20 space-y-12 font-sans max-w-4xl mx-auto animate-page-in">
      
      {/* Back Link */}
      <div className="pb-4 border-b border-[#DAD0C7] dark:border-[#332B26]">
        <Link
          to="/services"
          className="text-[13px] sm:text-[14px] text-[#82766F] hover:text-[#38251F] dark:hover:text-[#EDE6DE] transition-colors inline-flex items-center gap-2 font-medium min-h-[44px] py-1"
        >
          <ArrowLeft size={15} />
          <span>Quay lại danh mục dịch vụ</span>
        </Link>
      </div>

      {/* Header Info */}
      <div className="space-y-4">
        <div className="flex items-center gap-3 text-[12px] font-mono text-[#82766F] dark:text-[#9E938B]">
          <span className="font-bold">{service.number}</span>
          <span>·</span>
          <span className="font-semibold text-[#38251F] dark:text-[#EDE6DE]">{service.priceStarting}</span>
          <span>·</span>
          <span>{service.timeline}</span>
        </div>

        <h1 className="text-[32px] sm:text-[40px] md:text-[46px] font-[800] tracking-tight text-[#38251F] dark:text-[#EDE6DE] leading-[1.1]">
          {service.title}
        </h1>

        <p className="text-[17px] sm:text-[18px] text-[#422B25] dark:text-[#CFC4B8] leading-[1.7] font-normal">
          {service.shortDesc}
        </p>

        <div className="pt-3">
          <Link
            to={`/start-project?service=${service.id}`}
            className="btn-primary py-3 px-6 text-[14px] font-semibold inline-flex items-center gap-2 min-h-[46px]"
          >
            <span>Yêu cầu thực hiện dịch vụ này</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      {/* Detail Sections (Clean Typography, Natural Flow, No Boxed Cards) */}
      <div className="space-y-10 pt-4 divide-y divide-[#DAD0C7] dark:divide-[#332B26]">
        
        {/* Section 1: For Whom & Problem Solved */}
        <section className="space-y-4 pt-8 first:pt-0">
          <h2 className="text-[14px] font-mono font-bold uppercase tracking-wider text-[#38251F] dark:text-[#EDE6DE]">
            Dịch vụ này phù hợp với ai & giải quyết vấn đề gì?
          </h2>
          <div className="space-y-3 text-[16px] text-[#422B25] dark:text-[#CFC4B8] leading-[1.75]">
            <p>
              <strong className="text-[#38251F] dark:text-[#EDE6DE]">Đối tượng phù hợp: </strong> {service.forWhom}
            </p>
            <p>
              <strong className="text-[#38251F] dark:text-[#EDE6DE]">Vấn đề giải quyết: </strong> {service.problemSolved}
            </p>
          </div>
        </section>

        {/* Section 2: What is Included (Plain Text List, No Green Checks) */}
        <section className="space-y-4 pt-8">
          <h2 className="text-[14px] font-mono font-bold uppercase tracking-wider text-[#38251F] dark:text-[#EDE6DE]">
            Hạng mục thường bao gồm trong gói
          </h2>
          <ul className="space-y-3 text-[16px] text-[#422B25] dark:text-[#CFC4B8] leading-[1.7] pl-5 list-disc marker:text-[#82766F]">
            {service.deliverables.map((item, idx) => (
              <li key={idx} className="pl-1">
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Section 3: What is NOT Included */}
        {service.notIncluded && service.notIncluded.length > 0 && (
          <section className="space-y-4 pt-8">
            <h2 className="text-[14px] font-mono font-bold uppercase tracking-wider text-[#38251F] dark:text-[#EDE6DE]">
              Những khoản không nằm trong phạm vi phát triển cơ bản
            </h2>
            <ul className="space-y-3 text-[16px] text-[#82766F] dark:text-[#9E938B] leading-[1.7] pl-5 list-disc marker:text-[#82766F]">
              {service.notIncluded.map((item, idx) => (
                <li key={idx} className="pl-1">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Section 4: Collaboration Steps */}
        {service.collaborationSteps && (
          <section className="space-y-4 pt-8">
            <h2 className="text-[14px] font-mono font-bold uppercase tracking-wider text-[#38251F] dark:text-[#EDE6DE]">
              Quy trình làm việc 4 bước
            </h2>
            <div className="space-y-4 text-[16px] text-[#422B25] dark:text-[#CFC4B8]">
              {service.collaborationSteps.map((step, idx) => (
                <div key={idx} className="p-4 bg-[#FAF8F4] dark:bg-[#221D1A] border border-[#DAD0C7] dark:border-[#332B26] rounded-[2px]">
                  {step}
                </div>
              ))}
            </div>
          </section>
        )}

      </div>

      {/* Bottom CTA */}
      <div className="pt-8 border-t border-[#DAD0C7] dark:border-[#332B26] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="font-bold text-[17px] text-[#38251F] dark:text-[#EDE6DE] block">
            Bạn muốn bắt đầu với gói {service.title}?
          </span>
          <span className="text-[14px] text-[#82766F] dark:text-[#9E938B]">
            Mô tả yêu cầu qua form để nhận phản hồi và dự toán chi phí chi tiết.
          </span>
        </div>

        <Link
          to={`/start-project?service=${service.id}`}
          className="btn-primary py-3 px-6 text-[14px] font-semibold shrink-0"
        >
          <span>Khởi động dự án này</span>
          <ArrowRight size={14} />
        </Link>
      </div>

    </div>
  );
};

export default ServiceDetailPage;
