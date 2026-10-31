import React from 'react';
import ProjectStepLayout from '../ProjectStepLayout';
import FormField from '../FormField';

const CONTACT_METHODS = ['Zalo', 'Số điện thoại', 'Email', 'Tôi không có ưu tiên'];
const CONTACT_TIMES = ['Buổi sáng (8h – 12h)', 'Buổi chiều (13h – 17h)', 'Buổi tối (18h – 21h)', 'Bất cứ lúc nào phù hợp'];

/**
 * BƯỚC 8 – THÔNG TIN LIÊN HỆ VÀ KIỂM TRA YÊU CẦU
 */
export default function Step8ContactReview({
  formData,
  onChangeField,
  onJumpToStep,
  confirmed,
  onConfirmedChange,
  errors = {}
}) {
  const contact = formData.contactInformation || {};

  const handleUpdateContact = (field, value) => {
    onChangeField('contactInformation', {
      ...contact,
      [field]: value
    });
  };

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

  return (
    <ProjectStepLayout
      title="Tôi có thể liên hệ với bạn bằng cách nào?"
      description="Sau khi nhận được thông tin, tôi sẽ xem xét cẩn thận và chủ động liên hệ để cùng bạn làm rõ giải pháp và báo giá phù hợp nhất."
    >
      {/* 1. Các trường thông tin liên hệ */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FormField
          id="contact-fullName"
          label="Họ và tên của bạn"
          required
          error={errors.fullName}
        >
          <input
            id="contact-fullName"
            type="text"
            value={contact.fullName || ''}
            onChange={(e) => handleUpdateContact('fullName', e.target.value)}
            placeholder="Ví dụ: Nguyễn Văn A"
            className="w-full px-4 py-2.5 text-sm rounded-xl border border-[#cbd5e1] dark:border-[#332b26] bg-[#f8fafc] dark:bg-[#0f1120] text-[#0f172a] dark:text-[#f8fafc] focus:outline-none focus:ring-2 focus:ring-[#0284c7]"
          />
        </FormField>

        <FormField
          id="contact-email"
          label="Địa chỉ Email"
          required
          error={errors.email}
          hint="Tôi sẽ gửi bản tóm tắt phân tích và báo giá qua email này."
        >
          <input
            id="contact-email"
            type="email"
            value={contact.email || ''}
            onChange={(e) => handleUpdateContact('email', e.target.value)}
            placeholder="ban@example.com"
            className="w-full px-4 py-2.5 text-sm rounded-xl border border-[#cbd5e1] dark:border-[#332b26] bg-[#f8fafc] dark:bg-[#0f1120] text-[#0f172a] dark:text-[#f8fafc] focus:outline-none focus:ring-2 focus:ring-[#0284c7]"
          />
        </FormField>

        <FormField
          id="contact-phone"
          label="Số điện thoại / Zalo"
          required
          error={errors.phone}
          hint="Số điện thoại để trao đổi trực tiếp hoặc nhắn tin Zalo."
        >
          <input
            id="contact-phone"
            type="tel"
            value={contact.phone || ''}
            onChange={(e) => handleUpdateContact('phone', e.target.value)}
            placeholder="09xx xxx xxx"
            className="w-full px-4 py-2.5 text-sm rounded-xl border border-[#cbd5e1] dark:border-[#332b26] bg-[#f8fafc] dark:bg-[#0f1120] text-[#0f172a] dark:text-[#f8fafc] focus:outline-none focus:ring-2 focus:ring-[#0284c7]"
          />
        </FormField>

        <FormField
          id="contact-company"
          label="Tên doanh nghiệp / Cửa hàng (nếu có)"
        >
          <input
            id="contact-company"
            type="text"
            value={contact.company || ''}
            onChange={(e) => handleUpdateContact('company', e.target.value)}
            placeholder="Tên doanh nghiệp của bạn (không bắt buộc)"
            className="w-full px-4 py-2.5 text-sm rounded-xl border border-[#cbd5e1] dark:border-[#332b26] bg-[#f8fafc] dark:bg-[#0f1120] text-[#0f172a] dark:text-[#f8fafc] focus:outline-none focus:ring-2 focus:ring-[#0284c7]"
          />
        </FormField>
      </div>

      {/* 2. Kênh & Thời điểm ưu tiên */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-[#64748b] dark:text-[#94a3b8]">
            Cách liên hệ bạn ưu tiên:
          </label>
          <div className="grid grid-cols-2 gap-2">
            {CONTACT_METHODS.map((m) => (
              <label
                key={m}
                className={`flex items-center gap-2 p-2.5 rounded-lg border text-xs cursor-pointer select-none transition ${
                  contact.preferredContactMethod === m
                    ? 'border-[#0284c7] bg-[#f0f9ff] dark:bg-[#0369a1]/15 text-[#0284c7] font-semibold'
                    : 'border-[#e2e8f0] dark:border-[#332b26] text-[#475569] dark:text-[#94a3b8]'
                }`}
              >
                <input
                  type="radio"
                  name="preferredContactMethod"
                  checked={contact.preferredContactMethod === m}
                  onChange={() => handleUpdateContact('preferredContactMethod', m)}
                  className="text-[#0284c7] focus:ring-[#0284c7]"
                />
                <span>{m}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-[#64748b] dark:text-[#94a3b8]">
            Thời điểm thuận tiện để trao đổi:
          </label>
          <div className="grid grid-cols-2 gap-2">
            {CONTACT_TIMES.map((t) => (
              <label
                key={t}
                className={`flex items-center gap-2 p-2.5 rounded-lg border text-xs cursor-pointer select-none transition ${
                  contact.preferredContactTime === t
                    ? 'border-[#0284c7] bg-[#f0f9ff] dark:bg-[#0369a1]/15 text-[#0284c7] font-semibold'
                    : 'border-[#e2e8f0] dark:border-[#332b26] text-[#475569] dark:text-[#94a3b8]'
                }`}
              >
                <input
                  type="radio"
                  name="preferredContactTime"
                  checked={contact.preferredContactTime === t}
                  onChange={() => handleUpdateContact('preferredContactTime', t)}
                  className="text-[#0284c7] focus:ring-[#0284c7]"
                />
                <span className="truncate">{t}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Ghi chú thêm */}
      <div className="pt-2">
        <FormField label="Bạn có muốn chia sẻ thêm điều gì trước khi gửi yêu cầu không?">
          <textarea
            rows={2}
            value={formData.additionalNotes || ''}
            onChange={(e) => onChangeField('additionalNotes', e.target.value)}
            placeholder="Ví dụ: Có một số quy trình quan trọng tôi muốn gọi điện trao đổi trực tiếp..."
            className="w-full px-4 py-2.5 text-sm rounded-xl border border-[#cbd5e1] dark:border-[#332b26] bg-[#f8fafc] dark:bg-[#0f1120] text-[#0f172a] dark:text-[#f8fafc] focus:outline-none focus:ring-2 focus:ring-[#0284c7]"
          />
        </FormField>
      </div>

      {/* ================= KHU VỰC TÓM TẮT VÀ KIỂM TRA ================= */}
      <div className="pt-6 border-t-2 border-[#e2e8f0] dark:border-[#2a2c3d] space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-[17px] font-bold text-[#0f172a] dark:text-[#f8fafc] flex items-center gap-2">
            <svg className="w-5 h-5 text-[#0284c7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            Kiểm tra lại yêu cầu của bạn trước khi gửi
          </h3>
          <span className="text-xs text-[#64748b] dark:text-[#94a3b8]">
            Bạn có thể bấm "Chỉnh sửa" ở từng mục để thay đổi
          </span>
        </div>

        <div className="divide-y divide-[#f1f5f9] dark:divide-[#1e2030] rounded-2xl border border-[#e2e8f0] dark:border-[#2a2c3d] bg-white dark:bg-[#121422] p-5 shadow-sm text-sm space-y-3">
          {/* Mục 1: Loại dự án */}
          <div className="flex items-start justify-between gap-3 pt-2 first:pt-0">
            <div>
              <span className="text-xs uppercase font-bold text-[#64748b] dark:text-[#94a3b8] block">
                1. Loại dự án
              </span>
              <p className="font-bold text-[#0284c7] mt-0.5">
                {getProjectTypeName(formData.requestType)}
              </p>
            </div>
            <button
              type="button"
              data-edit-step="1"
              onClick={() => onJumpToStep(1)}
              className="text-xs text-[#0284c7] hover:underline font-semibold px-2 py-1 rounded hover:bg-[#e0f2fe]/50"
            >
              Chỉnh sửa
            </button>
          </div>

          {/* Mục 2: Mục tiêu dự án */}
          <div className="flex items-start justify-between gap-3 pt-3">
            <div>
              <span className="text-xs uppercase font-bold text-[#64748b] dark:text-[#94a3b8] block">
                2. Mục tiêu kinh doanh
              </span>
              <p className="text-[#0f172a] dark:text-[#f8fafc] mt-0.5">
                <strong>Ngành:</strong> {formData.businessContext?.customIndustry || formData.businessContext?.industry || 'Chưa cung cấp'}
              </p>
              {formData.projectGoal?.primaryGoal && (
                <p className="text-xs text-[#475569] dark:text-[#94a3b8] mt-1">
                  <strong>Mục đích:</strong> {formData.projectGoal.primaryGoal}
                </p>
              )}
            </div>
            <button
              type="button"
              onClick={() => onJumpToStep(2)}
              className="text-xs text-[#0284c7] hover:underline font-semibold"
            >
              Chỉnh sửa
            </button>
          </div>

          {/* Mục 3: Chức năng */}
          <div className="flex items-start justify-between gap-3 pt-3">
            <div>
              <span className="text-xs uppercase font-bold text-[#64748b] dark:text-[#94a3b8] block">
                3. Chức năng mong muốn ({formData.features?.length || 0})
              </span>
              <p className="text-xs text-[#475569] dark:text-[#94a3b8] mt-1 line-clamp-2">
                {formData.features?.join(', ') || 'Chưa chọn'}
              </p>
              {formData.customFeatures && (
                <p className="text-xs text-[#0284c7] mt-1">
                  <strong>Tính năng riêng:</strong> {formData.customFeatures}
                </p>
              )}
            </div>
            <button
              type="button"
              onClick={() => onJumpToStep(3)}
              className="text-xs text-[#0284c7] hover:underline font-semibold"
            >
              Chỉnh sửa
            </button>
          </div>

          {/* Mục 4: Người dùng & quy trình (nếu có) */}
          {formData.requestType === 'web_application' && (
            <div className="flex items-start justify-between gap-3 pt-3">
              <div>
                <span className="text-xs uppercase font-bold text-[#64748b] dark:text-[#94a3b8] block">
                  4. Người dùng & Quy trình
                </span>
                <p className="text-xs text-[#0f172a] dark:text-[#f8fafc] mt-0.5">
                  {formData.userGroups?.length || 0} nhóm người dùng · {formData.workflowSteps?.length || 0} bước quy trình
                </p>
              </div>
              <button
                type="button"
                onClick={() => onJumpToStep(4)}
                className="text-xs text-[#0284c7] hover:underline font-semibold"
              >
                Chỉnh sửa
              </button>
            </div>
          )}

          {/* Mục 5: Thiết kế */}
          <div className="flex items-start justify-between gap-3 pt-3">
            <div>
              <span className="text-xs uppercase font-bold text-[#64748b] dark:text-[#94a3b8] block">
                5. Thiết kế & Tài nguyên
              </span>
              <p className="text-xs text-[#0f172a] dark:text-[#f8fafc] mt-0.5">
                Phong cách: <strong>{formData.designPreferences?.aestheticStyle || 'Cần tư vấn'}</strong>
                {formData.attachments?.length > 0 ? ` · ${formData.attachments.length} tệp đính kèm` : ''}
              </p>
            </div>
            <button
              type="button"
              onClick={() => onJumpToStep(5)}
              className="text-xs text-[#0284c7] hover:underline font-semibold"
            >
              Chỉnh sửa
            </button>
          </div>

          {/* Mục 6: Kết nối */}
          <div className="flex items-start justify-between gap-3 pt-3">
            <div>
              <span className="text-xs uppercase font-bold text-[#64748b] dark:text-[#94a3b8] block">
                6. Công cụ kết nối
              </span>
              <p className="text-xs text-[#475569] dark:text-[#94a3b8] mt-0.5">
                {formData.integrations?.length > 0
                  ? formData.integrations.join(', ')
                  : 'Chưa có kết nối nào'}
              </p>
            </div>
            <button
              type="button"
              onClick={() => onJumpToStep(6)}
              className="text-xs text-[#0284c7] hover:underline font-semibold"
            >
              Chỉnh sửa
            </button>
          </div>

          {/* Mục 7: Ngân sách & thời gian */}
          <div className="flex items-start justify-between gap-3 pt-3">
            <div>
              <span className="text-xs uppercase font-bold text-[#64748b] dark:text-[#94a3b8] block">
                7. Ngân sách & Tiến độ
              </span>
              <p className="text-xs text-[#0f172a] dark:text-[#f8fafc] mt-0.5">
                Ngân sách: <strong className="text-[#10b981]">{formData.budgetRange || 'Cần tư vấn'}</strong> · Bắt đầu:{' '}
                {formData.desiredTimeline?.startTimeline || 'Thỏa thuận'}
              </p>
            </div>
            <button
              type="button"
              onClick={() => onJumpToStep(7)}
              className="text-xs text-[#0284c7] hover:underline font-semibold"
            >
              Chỉnh sửa
            </button>
          </div>
        </div>

        {/* Checkbox xác nhận & Chính sách */}
        <div className="space-y-2 pt-2">
          <label className="flex items-start gap-3 p-3.5 rounded-xl border border-[#0284c7]/40 bg-[#f0f9ff]/80 dark:bg-[#0369a1]/15 text-sm cursor-pointer select-none">
            <input
              type="checkbox"
              checked={confirmed}
              onChange={(e) => onConfirmedChange(e.target.checked)}
              className="mt-0.5 w-4 h-4 rounded text-[#0284c7] focus:ring-[#0284c7]"
            />
            <span className="font-semibold text-[#0369a1] dark:text-[#38bdf8]">
              Tôi xác nhận những thông tin trên là đúng theo nhu cầu hiện tại của mình.
            </span>
          </label>

          <p className="text-xs text-[#64748b] dark:text-[#94a3b8] flex items-center gap-1.5 px-1">
            <svg className="w-4 h-4 text-[#10b981] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            Thông tin này chỉ được sử dụng để tiếp nhận và trao đổi về yêu cầu dự án của bạn. Cam kết bảo mật 100%.
          </p>
        </div>
      </div>
    </ProjectStepLayout>
  );
}
