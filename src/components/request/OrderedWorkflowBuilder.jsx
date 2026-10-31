import React from 'react';
import FormField from './FormField';

/**
 * OrderedWorkflowBuilder — Xây dựng chuỗi quy trình công việc theo thứ tự (Step 4 Web App)
 * Hỗ trợ nút lên / xuống thân thiện cho cả mobile & desktop
 */
export default function OrderedWorkflowBuilder({
  steps = [],
  onStepsChange,
  notifyOnStatusChange,
  onNotifyChange
}) {
  const handleAddStep = () => {
    onStepsChange([
      ...steps,
      {
        id: `step-${Date.now()}-${Math.random().toString(36).substring(2, 5)}`,
        stepName: '',
        actor: '',
        result: ''
      }
    ]);
  };

  const handleUpdateStep = (index, field, value) => {
    const next = [...steps];
    next[index] = { ...next[index], [field]: value };
    onStepsChange(next);
  };

  const handleMoveUp = (index) => {
    if (index === 0) return;
    const next = [...steps];
    const temp = next[index];
    next[index] = next[index - 1];
    next[index - 1] = temp;
    onStepsChange(next);
  };

  const handleMoveDown = (index) => {
    if (index === steps.length - 1) return;
    const next = [...steps];
    const temp = next[index];
    next[index] = next[index + 1];
    next[index + 1] = temp;
    onStepsChange(next);
  };

  const handleRemoveStep = (index) => {
    const next = steps.filter((_, i) => i !== index);
    onStepsChange(next);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div>
          <h4 className="text-[15px] font-semibold text-[#0f172a] dark:text-[#f8fafc]">
            Trình tự các bước diễn ra trong công việc:
          </h4>
          <p className="text-[13px] text-[#64748b] dark:text-[#94a3b8] mt-0.5">
            Sắp xếp theo thứ tự từ lúc bắt đầu cho đến khi hoàn thành xong việc.
          </p>
        </div>
        <button
          type="button"
          onClick={handleAddStep}
          className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#0284c7] text-white hover:bg-[#0369a1] transition shadow-sm"
        >
          + Thêm bước công việc
        </button>
      </div>

      {steps.length === 0 ? (
        <div className="p-5 rounded-xl border border-dashed border-[#cbd5e1] dark:border-[#332b26] text-center text-sm text-[#64748b] dark:text-[#94a3b8]">
          <p>Chưa có bước quy trình nào được tạo.</p>
          <button
            type="button"
            onClick={handleAddStep}
            className="mt-2 text-[#0284c7] font-semibold hover:underline"
          >
            Nhấn vào đây để thêm bước đầu tiên
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {steps.map((step, idx) => (
            <div
              key={step.id || idx}
              className="p-4 rounded-xl border border-[#e2e8f0] dark:border-[#2a2c3d] bg-white dark:bg-[#121422] space-y-3 shadow-sm transition"
            >
              <div className="flex items-center justify-between gap-2 border-b border-[#f1f5f9] dark:border-[#1e2030] pb-2">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#e0f2fe] dark:bg-[#0284c7]/20 text-[#0284c7] font-bold text-xs flex items-center justify-center">
                    {idx + 1}
                  </span>
                  <span className="text-xs font-semibold text-[#475569] dark:text-[#94a3b8]">
                    Bước {idx + 1}
                  </span>
                </div>

                <div className="flex items-center gap-1">
                  {/* Reorder buttons */}
                  <button
                    type="button"
                    disabled={idx === 0}
                    onClick={() => handleMoveUp(idx)}
                    className="p-1 rounded text-[#64748b] hover:text-[#0f172a] hover:bg-[#f1f5f9] dark:hover:bg-[#1e2030] disabled:opacity-30 disabled:cursor-not-allowed"
                    title="Chuyển lên trước"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    disabled={idx === steps.length - 1}
                    onClick={() => handleMoveDown(idx)}
                    className="p-1 rounded text-[#64748b] hover:text-[#0f172a] hover:bg-[#f1f5f9] dark:hover:bg-[#1e2030] disabled:opacity-30 disabled:cursor-not-allowed"
                    title="Chuyển xuống sau"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleRemoveStep(idx)}
                    className="p-1 rounded text-[#ef4444] hover:bg-[#fef2f2] dark:hover:bg-[#7f1d1d]/20 ml-1"
                    title="Xóa bước này"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <FormField label="Tên bước / Công việc">
                  <input
                    type="text"
                    value={step.stepName}
                    onChange={(e) => handleUpdateStep(idx, 'stepName', e.target.value)}
                    placeholder="Ví dụ: Khách gửi yêu cầu"
                    className="w-full px-3 py-2 text-sm rounded-lg border border-[#cbd5e1] dark:border-[#332b26] bg-[#f8fafc] dark:bg-[#0f1120] text-[#0f172a] dark:text-[#f8fafc] focus:outline-none focus:ring-1 focus:ring-[#0284c7]"
                  />
                </FormField>

                <FormField label="Ai thực hiện?">
                  <input
                    type="text"
                    value={step.actor}
                    onChange={(e) => handleUpdateStep(idx, 'actor', e.target.value)}
                    placeholder="Ví dụ: Khách hàng / Nhân viên"
                    className="w-full px-3 py-2 text-sm rounded-lg border border-[#cbd5e1] dark:border-[#332b26] bg-[#f8fafc] dark:bg-[#0f1120] text-[#0f172a] dark:text-[#f8fafc] focus:outline-none focus:ring-1 focus:ring-[#0284c7]"
                  />
                </FormField>

                <FormField label="Kết quả sau bước này">
                  <input
                    type="text"
                    value={step.result}
                    onChange={(e) => handleUpdateStep(idx, 'result', e.target.value)}
                    placeholder="Ví dụ: Tạo đơn mới / Đã thu tiền"
                    className="w-full px-3 py-2 text-sm rounded-lg border border-[#cbd5e1] dark:border-[#332b26] bg-[#f8fafc] dark:bg-[#0f1120] text-[#0f172a] dark:text-[#f8fafc] focus:outline-none focus:ring-1 focus:ring-[#0284c7]"
                  />
                </FormField>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Thông báo khi trạng thái thay đổi */}
      <div className="pt-4 border-t border-[#e2e8f0] dark:border-[#2a2c3d] space-y-2">
        <label className="block text-[14px] font-semibold text-[#1e293b] dark:text-[#f1f5f9]">
          Khi một công việc thay đổi trạng thái, bạn có muốn hệ thống tự động thông báo không?
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {[
            'Có, thông báo ngay lập tức',
            'Có, nhưng chỉ với một số trường hợp quan trọng',
            'Không cần thông báo tự động',
            'Chưa xác định, cần tư vấn'
          ].map((opt) => (
            <label
              key={opt}
              className={`flex items-center gap-2.5 p-3 rounded-lg border text-sm cursor-pointer transition ${
                notifyOnStatusChange === opt
                  ? 'border-[#0284c7] bg-[#f0f9ff] dark:bg-[#0369a1]/15 text-[#0369a1] dark:text-[#38bdf8] font-medium'
                  : 'border-[#e2e8f0] dark:border-[#332b26] text-[#475569] dark:text-[#94a3b8] hover:bg-[#f8fafc] dark:hover:bg-[#181b2e]'
              }`}
            >
              <input
                type="radio"
                name="notifyStatus"
                checked={notifyOnStatusChange === opt}
                onChange={() => onNotifyChange(opt)}
                className="text-[#0284c7] focus:ring-[#0284c7]"
              />
              <span>{opt}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
