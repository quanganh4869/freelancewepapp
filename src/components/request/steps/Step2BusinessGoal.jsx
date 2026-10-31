import React from 'react';
import ProjectStepLayout from '../ProjectStepLayout';
import FormField from '../FormField';

const INDUSTRIES = [
  'Kinh doanh và bán lẻ',
  'Giáo dục và đào tạo',
  'Dịch vụ và tư vấn',
  'Công nghệ và phần mềm',
  'Bất động sản và cho thuê',
  'Sản xuất và phân phối',
  'Cá nhân / freelancer',
  'Lĩnh vực khác'
];

const PRIMARY_GOALS = [
  'Tôi muốn giới thiệu doanh nghiệp hoặc dịch vụ chuyên nghiệp hơn.',
  'Tôi muốn tìm kiếm khách hàng và tăng số lượng liên hệ.',
  'Tôi muốn bán sản phẩm trực tuyến.',
  'Tôi muốn quản lý công việc thay vì ghi chép thủ công.',
  'Tôi muốn thay thế quy trình đang sử dụng nhiều file Excel hoặc giấy tờ.',
  'Tôi muốn kết nối nhiều bộ phận và theo dõi công việc tập trung.',
  'Tôi muốn mở rộng một website hoặc hệ thống đang có.',
  'Mục đích khác / Tôi chưa xác định rõ.'
];

const CURRENT_SITUATIONS = [
  'Tôi đang bắt đầu từ đầu.',
  'Tôi đã có cửa hàng / doanh nghiệp / công việc đang hoạt động.',
  'Tôi đang sử dụng Excel, Google Sheets hoặc giấy tờ.',
  'Tôi đang dùng một phần mềm hoặc website khác.',
  'Tôi đã có website nhưng cần mở rộng thêm.'
];

/**
 * BƯỚC 2 – TÌM HIỂU NHU CẦU CỦA BẠN (Mục tiêu dự án)
 */
export default function Step2BusinessGoal({
  formData,
  onChangeField,
  errors = {}
}) {
  const businessContext = formData.businessContext || {};
  const projectGoal = formData.projectGoal || {};

  const handleUpdateContext = (field, value) => {
    onChangeField('businessContext', {
      ...businessContext,
      [field]: value
    });
  };

  const handleUpdateGoal = (field, value) => {
    onChangeField('projectGoal', {
      ...projectGoal,
      [field]: value
    });
  };

  const descriptionLength = (projectGoal.detailedGoal || '').length;

  return (
    <ProjectStepLayout
      title="Hãy cho tôi biết một chút về công việc của bạn."
      description="Trước khi đề xuất cách xây dựng, tôi muốn hiểu bạn đang kinh doanh, làm việc hoặc gặp vấn đề gì. Bạn chỉ cần mô tả theo cách của mình."
    >
      {/* Nhóm câu hỏi A – Lĩnh vực hoạt động */}
      <div className="space-y-3">
        <label className="block text-[15px] font-semibold text-[#0f172a] dark:text-[#f8fafc]">
          A. Bạn đang làm trong lĩnh vực nào?
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {INDUSTRIES.map((ind) => (
            <label
              key={ind}
              className={`flex items-center gap-2 p-3 rounded-xl border text-xs sm:text-sm cursor-pointer select-none transition ${
                businessContext.industry === ind
                  ? 'border-[#0284c7] bg-[#f0f9ff] dark:bg-[#0369a1]/15 text-[#0369a1] dark:text-[#38bdf8] font-semibold'
                  : 'border-[#e2e8f0] dark:border-[#332b26] text-[#475569] dark:text-[#94a3b8] hover:bg-[#f8fafc] dark:hover:bg-[#181b2e]'
              }`}
            >
              <input
                type="radio"
                name="industry"
                checked={businessContext.industry === ind}
                onChange={() => handleUpdateContext('industry', ind)}
                className="text-[#0284c7] focus:ring-[#0284c7]"
              />
              <span className="truncate">{ind}</span>
            </label>
          ))}
        </div>

        {businessContext.industry === 'Lĩnh vực khác' && (
          <div className="pt-2 animate-fadeIn">
            <FormField label="Bạn có thể mô tả lĩnh vực của mình">
              <input
                type="text"
                value={businessContext.customIndustry || ''}
                onChange={(e) => handleUpdateContext('customIndustry', e.target.value)}
                placeholder="Ví dụ: Dịch vụ chăm sóc thú cưng, studio ảnh cưới, xưởng mộc..."
                className="w-full px-4 py-2.5 text-sm rounded-xl border border-[#cbd5e1] dark:border-[#332b26] bg-[#f8fafc] dark:bg-[#0f1120] text-[#0f172a] dark:text-[#f8fafc] focus:outline-none focus:ring-2 focus:ring-[#0284c7]"
              />
            </FormField>
          </div>
        )}
      </div>

      {/* Nhóm câu hỏi B – Mục tiêu chính */}
      <div className="space-y-3 pt-2">
        <label className="block text-[15px] font-semibold text-[#0f172a] dark:text-[#f8fafc]">
          B. Điều gì khiến bạn muốn làm dự án này? <span className="text-[#64748b] text-xs font-normal">(Chọn mục tiêu chính)</span>
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {PRIMARY_GOALS.map((goal) => (
            <label
              key={goal}
              className={`flex items-start gap-3 p-3.5 rounded-xl border text-sm cursor-pointer select-none transition ${
                projectGoal.primaryGoal === goal
                  ? 'border-[#0284c7] bg-[#f0f9ff] dark:bg-[#0369a1]/15 text-[#0369a1] dark:text-[#38bdf8] font-medium'
                  : 'border-[#e2e8f0] dark:border-[#332b26] text-[#475569] dark:text-[#94a3b8] hover:bg-[#f8fafc] dark:hover:bg-[#181b2e]'
              }`}
            >
              <input
                type="radio"
                name="primaryGoal"
                checked={projectGoal.primaryGoal === goal}
                onChange={() => handleUpdateGoal('primaryGoal', goal)}
                className="mt-0.5 text-[#0284c7] focus:ring-[#0284c7]"
              />
              <span className="leading-snug">{goal}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Nhóm câu hỏi C – Mô tả kỹ hơn */}
      <div className="space-y-2 pt-2">
        <div className="flex items-center justify-between">
          <label className="block text-[15px] font-semibold text-[#0f172a] dark:text-[#f8fafc]">
            C. Bạn muốn thay đổi hoặc đạt được điều gì?
          </label>
          <span className="text-xs text-[#64748b] dark:text-[#94a3b8]">
            {descriptionLength}/1500 ký tự
          </span>
        </div>
        <textarea
          rows={4}
          maxLength={1500}
          value={projectGoal.detailedGoal || ''}
          onChange={(e) => handleUpdateGoal('detailedGoal', e.target.value)}
          placeholder="Ví dụ: Hiện tại tôi đang quản lý các phòng cho thuê bằng Excel. Khi khách trả phòng, tôi thường phải kiểm tra thủ công tiền điện, tiền nước và lịch thanh toán. Tôi muốn có một hệ thống giúp quản lý phòng, khách thuê và các khoản thanh toán tại một nơi."
          className="w-full px-4 py-3 text-sm rounded-xl border border-[#cbd5e1] dark:border-[#332b26] bg-[#f8fafc] dark:bg-[#0f1120] text-[#0f172a] dark:text-[#f8fafc] focus:outline-none focus:ring-2 focus:ring-[#0284c7] leading-relaxed"
        />
        <p className="text-xs text-[#64748b] dark:text-[#82766f]">
          Bạn không cần dùng thuật ngữ kỹ thuật. Cứ mô tả công việc đang diễn ra và điều bạn muốn cải thiện.
        </p>
      </div>

      {/* Nhóm câu hỏi D – Hiện trạng hoạt động */}
      <div className="space-y-3 pt-2">
        <label className="block text-[15px] font-semibold text-[#0f172a] dark:text-[#f8fafc]">
          D. Bạn đã có hoạt động hoặc hệ thống nào chưa?
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {CURRENT_SITUATIONS.map((sit) => (
            <label
              key={sit}
              className={`flex items-center gap-2.5 p-3 rounded-xl border text-sm cursor-pointer select-none transition ${
                projectGoal.currentSituation === sit
                  ? 'border-[#0284c7] bg-[#f0f9ff] dark:bg-[#0369a1]/15 text-[#0369a1] dark:text-[#38bdf8] font-medium'
                  : 'border-[#e2e8f0] dark:border-[#332b26] text-[#475569] dark:text-[#94a3b8] hover:bg-[#f8fafc] dark:hover:bg-[#181b2e]'
              }`}
            >
              <input
                type="radio"
                name="currentSituation"
                checked={projectGoal.currentSituation === sit}
                onChange={() => handleUpdateGoal('currentSituation', sit)}
                className="text-[#0284c7] focus:ring-[#0284c7]"
              />
              <span>{sit}</span>
            </label>
          ))}
        </div>

        {(projectGoal.currentSituation === 'Tôi đang sử dụng Excel, Google Sheets hoặc giấy tờ.' ||
          projectGoal.currentSituation === 'Tôi đang dùng một phần mềm hoặc website khác.' ||
          projectGoal.currentSituation === 'Tôi đã có website nhưng cần mở rộng thêm.') && (
          <div className="pt-2 animate-fadeIn">
            <FormField label="Bạn đang sử dụng công cụ hoặc website nào?">
              <input
                type="text"
                value={projectGoal.existingTool || ''}
                onChange={(e) => handleUpdateGoal('existingTool', e.target.value)}
                placeholder="Ví dụ: Excel, Google Sheets, phần mềm quản lý bán hàng, https://mywebsite.com..."
                className="w-full px-4 py-2.5 text-sm rounded-xl border border-[#cbd5e1] dark:border-[#332b26] bg-[#f8fafc] dark:bg-[#0f1120] text-[#0f172a] dark:text-[#f8fafc] focus:outline-none focus:ring-2 focus:ring-[#0284c7]"
              />
            </FormField>
          </div>
        )}
      </div>
    </ProjectStepLayout>
  );
}
