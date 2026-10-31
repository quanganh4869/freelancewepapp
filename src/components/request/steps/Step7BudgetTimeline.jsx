import React from 'react';
import ProjectStepLayout from '../ProjectStepLayout';
import FormField from '../FormField';

const BUDGET_RANGES = [
  { id: 'under_3m', label: 'Dưới 3 triệu đồng', note: 'Phù hợp landing page đơn giản hoặc CV cá nhân' },
  { id: '3m_5m', label: 'Từ 3 – 5 triệu đồng', note: 'Phù hợp website doanh nghiệp giới thiệu hoàn chỉnh' },
  { id: '5m_10m', label: 'Từ 5 – 10 triệu đồng', note: 'Phù hợp website bán hàng hoặc web app quản lý vừa' },
  { id: '10m_20m', label: 'Từ 10 – 20 triệu đồng', note: 'Phù hợp hệ thống web app quy trình nhiều người dùng' },
  { id: 'over_20m', label: 'Trên 20 triệu đồng', note: 'Dự án số hóa lớn hoặc nền tảng phần mềm chuyên sâu' },
  { id: 'not_sure', label: 'Tôi chưa xác định ngân sách', note: 'Cần thảo luận phạm vi để nhận báo giá chi tiết' }
];

const START_TIMELINES = [
  'Sớm nhất có thể (trong tuần này hoặc tuần tới)',
  'Trong vòng 2 – 4 tuần tới',
  'Trong khoảng 1 – 2 tháng tới',
  'Trong 3 tháng tới',
  'Chưa có thời gian cụ thể, đang tìm hiểu trước'
];

const PRIORITIES = [
  'Hoàn thành đúng nhu cầu với chi phí hợp lý nhất',
  'Chất lượng giao diện đẹp mắt, thẩm mỹ và trải nghiệm mượt mà',
  'Đầy đủ tính năng thực tế và có khả năng mở rộng lâu dài',
  'Tiến độ nhanh, có thể đưa vào vận hành sớm',
  'Cân bằng hài hòa giữa tất cả các yếu tố trên'
];

/**
 * BƯỚC 7 – NGÂN SÁCH VÀ THỜI GIAN DỰ KIẾN
 */
export default function Step7BudgetTimeline({
  formData,
  onChangeField
}) {
  const desiredTimeline = formData.desiredTimeline || {};

  const handleUpdateTimeline = (field, value) => {
    onChangeField('desiredTimeline', {
      ...desiredTimeline,
      [field]: value
    });
  };

  // Tính ngày hôm nay theo chuẩn ISO (YYYY-MM-DD) để làm mốc min
  const todayStr = new Date().toISOString().split('T')[0];

  return (
    <ProjectStepLayout
      title="Bạn dự kiến đầu tư bao nhiêu cho dự án?"
      description="Thông tin ngân sách giúp tôi đề xuất phạm vi và công nghệ phù hợp nhất. Đây chỉ là mức dự kiến để tham khảo, không phải cam kết về chi phí cuối cùng."
    >
      {/* 1. Mức ngân sách */}
      <div className="space-y-3">
        <label className="block text-[15px] font-semibold text-[#0f172a] dark:text-[#f8fafc]">
          1. Khoảng ngân sách dự kiến của bạn:
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {BUDGET_RANGES.map((b) => (
            <label
              key={b.id}
              className={`flex items-start gap-3 p-4 rounded-xl border text-sm cursor-pointer select-none transition ${
                formData.budgetRange === b.label
                  ? 'border-[#0284c7] bg-[#f0f9ff] dark:bg-[#0369a1]/15 text-[#0369a1] dark:text-[#38bdf8] font-medium ring-1 ring-[#0284c7]'
                  : 'border-[#e2e8f0] dark:border-[#332b26] text-[#475569] dark:text-[#94a3b8] hover:bg-[#f8fafc] dark:hover:bg-[#181b2e]'
              }`}
            >
              <input
                type="radio"
                name="budgetRange"
                checked={formData.budgetRange === b.label}
                onChange={() => onChangeField('budgetRange', b.label)}
                className="mt-1 text-[#0284c7] focus:ring-[#0284c7]"
              />
              <div>
                <p className="font-bold text-[#0f172a] dark:text-[#f8fafc]">
                  {b.label}
                </p>
                <p className="text-xs text-[#64748b] dark:text-[#94a3b8] mt-0.5 leading-relaxed">
                  {b.note}
                </p>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* 2. Thời điểm bắt đầu */}
      <div className="space-y-3 pt-3 border-t border-[#f1f5f9] dark:border-[#1e2030]">
        <label className="block text-[15px] font-semibold text-[#0f172a] dark:text-[#f8fafc]">
          2. Bạn muốn bắt đầu dự án khi nào?
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {START_TIMELINES.map((time) => (
            <label
              key={time}
              className={`flex items-center gap-2.5 p-3 rounded-xl border text-sm cursor-pointer select-none transition ${
                desiredTimeline.startTimeline === time
                  ? 'border-[#0284c7] bg-[#f0f9ff] dark:bg-[#0369a1]/15 text-[#0369a1] dark:text-[#38bdf8] font-medium'
                  : 'border-[#e2e8f0] dark:border-[#332b26] text-[#475569] dark:text-[#94a3b8] hover:bg-[#f8fafc] dark:hover:bg-[#181b2e]'
              }`}
            >
              <input
                type="radio"
                name="startTimeline"
                checked={desiredTimeline.startTimeline === time}
                onChange={() => handleUpdateTimeline('startTimeline', time)}
                className="text-[#0284c7] focus:ring-[#0284c7]"
              />
              <span>{time}</span>
            </label>
          ))}
        </div>
      </div>

      {/* 3. Yếu tố quan trọng nhất */}
      <div className="space-y-3 pt-3 border-t border-[#f1f5f9] dark:border-[#1e2030]">
        <label className="block text-[15px] font-semibold text-[#0f172a] dark:text-[#f8fafc]">
          3. Điều gì quan trọng nhất đối với dự án của bạn?
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {PRIORITIES.map((p) => (
            <label
              key={p}
              className={`flex items-center gap-2.5 p-3 rounded-xl border text-sm cursor-pointer select-none transition ${
                desiredTimeline.primaryPriority === p
                  ? 'border-[#0284c7] bg-[#f0f9ff] dark:bg-[#0369a1]/15 text-[#0369a1] dark:text-[#38bdf8] font-medium'
                  : 'border-[#e2e8f0] dark:border-[#332b26] text-[#475569] dark:text-[#94a3b8] hover:bg-[#f8fafc] dark:hover:bg-[#181b2e]'
              }`}
            >
              <input
                type="radio"
                name="primaryPriority"
                checked={desiredTimeline.primaryPriority === p}
                onChange={() => handleUpdateTimeline('primaryPriority', p)}
                className="text-[#0284c7] focus:ring-[#0284c7]"
              />
              <span>{p}</span>
            </label>
          ))}
        </div>
      </div>

      {/* 4. Ngày bàn giao mong muốn (tùy chọn) */}
      <div className="pt-3 border-t border-[#f1f5f9] dark:border-[#1e2030]">
        <FormField
          label="Bạn có ngày bàn giao mong muốn cụ thể không? (Không bắt buộc)"
          hint="Chỉ áp dụng nếu bạn có kế hoạch khai trương hoặc chiến dịch cụ thể."
        >
          <input
            type="date"
            min={todayStr}
            value={desiredTimeline.targetDeliveryDate || ''}
            onChange={(e) => handleUpdateTimeline('targetDeliveryDate', e.target.value)}
            className="w-full sm:w-72 px-4 py-2.5 text-sm rounded-xl border border-[#cbd5e1] dark:border-[#332b26] bg-[#f8fafc] dark:bg-[#0f1120] text-[#0f172a] dark:text-[#f8fafc] focus:outline-none focus:ring-2 focus:ring-[#0284c7]"
          />
        </FormField>
      </div>
    </ProjectStepLayout>
  );
}
