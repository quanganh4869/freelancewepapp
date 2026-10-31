import React, { useState } from 'react';

/**
 * ProjectSummaryPanel — Bản tóm tắt nhanh thông tin dự án
 * Desktop: Sidebar cố định (30-32%)
 * Mobile: Khung accordion có thể thu gọn "Xem thông tin dự án"
 */
export default function ProjectSummaryPanel({
  formData,
  onJumpToStep
}) {
  const [mobileExpanded, setMobileExpanded] = useState(false);

  // Ánh xạ tên loại dự án
  const getProjectTypeName = (type) => {
    switch (type) {
      case 'landing_page': return 'Landing Page bán hàng / giới thiệu';
      case 'business_website': return 'Website doanh nghiệp / dịch vụ';
      case 'ecommerce': return 'Website bán hàng trực tuyến';
      case 'personal_portfolio': return 'Website cá nhân / portfolio';
      case 'web_application': return 'Web App / Hệ thống quản lý riêng';
      case 'existing_website': return 'Nâng cấp / Cải thiện website hiện có';
      default: return 'Chưa chọn';
    }
  };

  const featureCount = formData.features?.length || 0;
  const userGroupCount = formData.userGroups?.length || 0;
  const workflowStepCount = formData.workflowSteps?.length || 0;
  const integrationsCount = formData.integrations?.length || 0;

  const content = (
    <div className="space-y-4 text-sm">
      {/* 1. Loại dự án */}
      <div className="flex items-start justify-between gap-2 border-b border-[#f1f5f9] dark:border-[#1e2030] pb-2.5">
        <div>
          <span className="text-xs uppercase font-bold text-[#64748b] dark:text-[#94a3b8]">
            Loại dự án
          </span>
          <p className="font-semibold text-[#0f172a] dark:text-[#f8fafc] mt-0.5">
            {getProjectTypeName(formData.requestType)}
          </p>
        </div>
        {formData.requestType && onJumpToStep && (
          <button
            type="button"
            onClick={() => onJumpToStep(1)}
            className="text-xs text-[#0284c7] hover:underline shrink-0"
          >
            Sửa
          </button>
        )}
      </div>

      {/* 2. Mục tiêu chính */}
      {(formData.projectGoal?.primaryGoal || formData.businessContext?.industry) && (
        <div className="flex items-start justify-between gap-2 border-b border-[#f1f5f9] dark:border-[#1e2030] pb-2.5">
          <div>
            <span className="text-xs uppercase font-bold text-[#64748b] dark:text-[#94a3b8]">
              Lĩnh vực & Mục tiêu
            </span>
            {formData.businessContext?.industry && (
              <p className="text-xs text-[#475569] dark:text-[#94a3b8]">
                Ngành: <span className="font-medium text-[#0f172a] dark:text-[#f8fafc]">{formData.businessContext.industry}</span>
              </p>
            )}
            {formData.projectGoal?.primaryGoal && (
              <p className="font-medium text-[#0f172a] dark:text-[#f8fafc] text-xs line-clamp-2 mt-0.5">
                {formData.projectGoal.primaryGoal}
              </p>
            )}
          </div>
          {onJumpToStep && (
            <button
              type="button"
              onClick={() => onJumpToStep(2)}
              className="text-xs text-[#0284c7] hover:underline shrink-0"
            >
              Sửa
            </button>
          )}
        </div>
      )}

      {/* 3. Tính năng */}
      {(featureCount > 0 || formData.customFeatures) && (
        <div className="flex items-start justify-between gap-2 border-b border-[#f1f5f9] dark:border-[#1e2030] pb-2.5">
          <div>
            <span className="text-xs uppercase font-bold text-[#64748b] dark:text-[#94a3b8]">
              Tính năng ({featureCount})
            </span>
            <p className="text-xs text-[#475569] dark:text-[#94a3b8] mt-0.5 line-clamp-2">
              {formData.features?.slice(0, 3).join(', ')}
              {featureCount > 3 ? ` và ${featureCount - 3} tính năng khác...` : ''}
            </p>
          </div>
          {onJumpToStep && (
            <button
              type="button"
              onClick={() => onJumpToStep(3)}
              className="text-xs text-[#0284c7] hover:underline shrink-0"
            >
              Sửa
            </button>
          )}
        </div>
      )}

      {/* 4. Web App specifics: Người dùng & quy trình */}
      {formData.requestType === 'web_application' && (userGroupCount > 0 || workflowStepCount > 0) && (
        <div className="flex items-start justify-between gap-2 border-b border-[#f1f5f9] dark:border-[#1e2030] pb-2.5">
          <div>
            <span className="text-xs uppercase font-bold text-[#64748b] dark:text-[#94a3b8]">
              Người dùng & Quy trình
            </span>
            <p className="text-xs text-[#0f172a] dark:text-[#f8fafc] mt-0.5">
              {userGroupCount} nhóm người dùng · {workflowStepCount} bước công việc
            </p>
          </div>
          {onJumpToStep && (
            <button
              type="button"
              onClick={() => onJumpToStep(4)}
              className="text-xs text-[#0284c7] hover:underline shrink-0"
            >
              Sửa
            </button>
          )}
        </div>
      )}

      {/* 5. Thiết kế */}
      {formData.designPreferences?.aestheticStyle && (
        <div className="flex items-start justify-between gap-2 border-b border-[#f1f5f9] dark:border-[#1e2030] pb-2.5">
          <div>
            <span className="text-xs uppercase font-bold text-[#64748b] dark:text-[#94a3b8]">
              Phong cách thiết kế
            </span>
            <p className="text-xs font-medium text-[#0f172a] dark:text-[#f8fafc] mt-0.5">
              {formData.designPreferences.aestheticStyle}
            </p>
          </div>
          {onJumpToStep && (
            <button
              type="button"
              onClick={() => onJumpToStep(5)}
              className="text-xs text-[#0284c7] hover:underline shrink-0"
            >
              Sửa
            </button>
          )}
        </div>
      )}

      {/* 6. Tích hợp */}
      {integrationsCount > 0 && (
        <div className="flex items-start justify-between gap-2 border-b border-[#f1f5f9] dark:border-[#1e2030] pb-2.5">
          <div>
            <span className="text-xs uppercase font-bold text-[#64748b] dark:text-[#94a3b8]">
              Kết nối ({integrationsCount})
            </span>
            <p className="text-xs text-[#475569] dark:text-[#94a3b8] mt-0.5 line-clamp-1">
              {formData.integrations.join(', ')}
            </p>
          </div>
          {onJumpToStep && (
            <button
              type="button"
              onClick={() => onJumpToStep(6)}
              className="text-xs text-[#0284c7] hover:underline shrink-0"
            >
              Sửa
            </button>
          )}
        </div>
      )}

      {/* 7. Ngân sách & thời gian */}
      {formData.budgetRange && (
        <div className="flex items-start justify-between gap-2 border-b border-[#f1f5f9] dark:border-[#1e2030] pb-2.5">
          <div>
            <span className="text-xs uppercase font-bold text-[#64748b] dark:text-[#94a3b8]">
              Ngân sách dự kiến
            </span>
            <p className="text-xs font-bold text-[#10b981] dark:text-[#34d399] mt-0.5">
              {formData.budgetRange}
            </p>
            {formData.desiredTimeline?.startTimeline && (
              <p className="text-xs text-[#64748b] dark:text-[#94a3b8]">
                Bắt đầu: {formData.desiredTimeline.startTimeline}
              </p>
            )}
          </div>
          {onJumpToStep && (
            <button
              type="button"
              onClick={() => onJumpToStep(7)}
              className="text-xs text-[#0284c7] hover:underline shrink-0"
            >
              Sửa
            </button>
          )}
        </div>
      )}

      {/* 8. Người liên hệ */}
      {formData.contactInformation?.fullName && (
        <div className="flex items-start justify-between gap-2">
          <div>
            <span className="text-xs uppercase font-bold text-[#64748b] dark:text-[#94a3b8]">
              Người liên hệ
            </span>
            <p className="text-xs font-semibold text-[#0f172a] dark:text-[#f8fafc] mt-0.5">
              {formData.contactInformation.fullName}
            </p>
            {formData.contactInformation.phone && (
              <p className="text-xs text-[#0284c7] font-medium">
                {formData.contactInformation.phone}
              </p>
            )}
          </div>
          {onJumpToStep && (
            <button
              type="button"
              onClick={() => onJumpToStep(8)}
              className="text-xs text-[#0284c7] hover:underline shrink-0"
            >
              Sửa
            </button>
          )}
        </div>
      )}
    </div>
  );

  return (
    <>
      {/* Mobile Collapsible Banner */}
      <div className="lg:hidden mb-6 rounded-xl border border-[#e2e8f0] dark:border-[#2a2c3d] bg-white dark:bg-[#121422] p-4 shadow-sm">
        <button
          type="button"
          onClick={() => setMobileExpanded(!mobileExpanded)}
          className="w-full flex items-center justify-between text-left"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0284c7]" />
            <span className="text-sm font-bold text-[#0f172a] dark:text-[#f8fafc]">
              Xem thông tin dự án
            </span>
            <span className="text-xs text-[#64748b] dark:text-[#94a3b8]">
              ({formData.requestType ? getProjectTypeName(formData.requestType) : 'Đang điền'})
            </span>
          </div>
          <svg
            className={`w-4 h-4 text-[#64748b] transition-transform ${mobileExpanded ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {mobileExpanded && <div className="mt-4 pt-4 border-t border-[#f1f5f9] dark:border-[#1e2030]">{content}</div>}
      </div>

      {/* Desktop Sticky Panel */}
      <aside className="hidden lg:block w-full sticky top-24">
        <div className="rounded-2xl border border-[#e2e8f0] dark:border-[#2a2c3d] bg-white dark:bg-[#121422] p-5 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-[#f1f5f9] dark:border-[#1e2030] pb-3">
            <h3 className="text-[15px] font-bold text-[#0f172a] dark:text-[#f8fafc] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0284c7]" />
              Thông tin dự án
            </h3>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#64748b] dark:text-[#94a3b8]">
              Tóm tắt thực tế
            </span>
          </div>
          {content}
        </div>
      </aside>
    </>
  );
}
