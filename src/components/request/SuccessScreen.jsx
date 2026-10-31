import React from 'react';
import { Link } from 'react-router-dom';

/**
 * SuccessScreen — Màn hình hoàn tất sau khi gửi yêu cầu thành công
 */
export default function SuccessScreen({ requestId, formData, onResetNewRequest }) {
  const getProjectTypeName = (type) => {
    switch (type) {
      case 'landing_page': return 'Landing Page bán hàng / giới thiệu';
      case 'business_website': return 'Website doanh nghiệp / dịch vụ';
      case 'ecommerce': return 'Website bán hàng trực tuyến';
      case 'personal_portfolio': return 'Website cá nhân / portfolio';
      case 'web_application': return 'Web App / Hệ thống quản lý riêng';
      case 'existing_website': return 'Nâng cấp / Cải thiện website hiện có';
      default: return 'Yêu cầu dự án';
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-12 text-center space-y-6 animate-scaleUp">
      {/* Icon checkmark */}
      <div className="w-16 h-16 mx-auto rounded-full bg-[#ecfdf5] dark:bg-[#064e3b]/30 text-[#10b981] flex items-center justify-center shadow-inner">
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
        </svg>
      </div>

      <div className="space-y-2">
        <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#f1f5f9] dark:bg-[#1e2030] text-[#0284c7]">
          MÃ YÊU CẦU: {requestId || 'REQ-GUEST'}
        </span>
        <h2 className="text-[28px] sm:text-[34px] font-[800] text-[#0f172a] dark:text-[#f8fafc] tracking-[-0.02em]">
          Yêu cầu của bạn đã được gửi thành công!
        </h2>
        <p className="text-[15px] sm:text-[16px] text-[#475569] dark:text-[#94a3b8] max-w-lg mx-auto leading-relaxed">
          Cảm ơn bạn đã chia sẻ về dự án. Tôi đã nhận được toàn bộ thông tin và sẽ xem xét kỹ lưỡng nội dung trước khi chủ động liên hệ lại với bạn.
        </p>
      </div>

      {/* Recap Box */}
      <div className="p-5 rounded-2xl border border-[#e2e8f0] dark:border-[#2a2c3d] bg-white dark:bg-[#121422] text-left text-sm space-y-3 shadow-sm">
        <h4 className="text-xs font-bold uppercase tracking-wider text-[#64748b] dark:text-[#94a3b8]">
          Tóm tắt yêu cầu đã gửi:
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div>
            <span className="text-[#64748b] dark:text-[#94a3b8] block">Người gửi:</span>
            <span className="font-semibold text-[#0f172a] dark:text-[#f8fafc]">
              {formData.contactInformation?.fullName} ({formData.contactInformation?.phone || formData.contactInformation?.email})
            </span>
          </div>
          <div>
            <span className="text-[#64748b] dark:text-[#94a3b8] block">Loại dự án:</span>
            <span className="font-semibold text-[#0284c7]">
              {getProjectTypeName(formData.requestType)}
            </span>
          </div>
          <div>
            <span className="text-[#64748b] dark:text-[#94a3b8] block">Ngân sách dự kiến:</span>
            <span className="font-semibold text-[#10b981]">
              {formData.budgetRange || 'Cần tư vấn'}
            </span>
          </div>
          <div>
            <span className="text-[#64748b] dark:text-[#94a3b8] block">Thời gian mong muốn:</span>
            <span className="font-semibold text-[#0f172a] dark:text-[#f8fafc]">
              {formData.desiredTimeline?.startTimeline || 'Thỏa thuận'}
            </span>
          </div>
        </div>
      </div>

      {/* Contact Note */}
      <p className="text-xs text-[#64748b] dark:text-[#94a3b8]">
        Nếu bạn cần bổ sung gấp tài liệu hoặc muốn trao đổi ngay, bạn có thể liên hệ trực tiếp qua Zalo / Hotline:{' '}
        <a href="tel:0968994869" className="font-bold text-[#0284c7] hover:underline">
          0968 994 869
        </a>
      </p>

      {/* Action Buttons */}
      <div className="pt-2 flex items-center justify-center gap-3 flex-wrap">
        <Link
          to="/"
          className="px-6 py-2.5 rounded-xl bg-[#0284c7] text-white text-sm font-semibold hover:bg-[#0369a1] transition shadow-md"
        >
          Về trang chủ
        </Link>
        {onResetNewRequest && (
          <button
            type="button"
            onClick={onResetNewRequest}
            className="px-5 py-2.5 rounded-xl border border-[#cbd5e1] dark:border-[#332b26] text-[#475569] dark:text-[#94a3b8] text-sm font-medium hover:bg-[#f8fafc] dark:hover:bg-[#181b2e] transition"
          >
            Tạo yêu cầu dự án khác
          </button>
        )}
      </div>
    </div>
  );
}
