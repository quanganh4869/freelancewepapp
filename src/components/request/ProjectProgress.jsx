import React from 'react';

export const STEP_NAMES = [
  'Loại dự án',
  'Mục tiêu dự án',
  'Chức năng',
  'Người dùng & quy trình',
  'Thiết kế & nội dung',
  'Kết nối & tích hợp',
  'Ngân sách & thời gian',
  'Thông tin liên hệ'
];

/**
 * ProjectProgress — Thanh tiến trình ngang 8 bước
 */
export default function ProjectProgress({ currentStep = 1, maxStepReached = 1, onStepClick }) {
  const totalSteps = STEP_NAMES.length;
  const effectiveMax = Math.max(currentStep, maxStepReached);
  const progressPercent = Math.round(((effectiveMax - 1) / (totalSteps - 1)) * 100);

  return (
    <div className="mb-8 space-y-3">
      {/* Top indicator: Step number & progress % */}
      <div className="flex items-center justify-between text-xs sm:text-sm font-semibold">
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded bg-[#0284c7]/15 text-[#0284c7] font-bold">
            0{currentStep} / 0{totalSteps}
          </span>
          <span className="text-[#0f172a] dark:text-[#f8fafc]">
            {STEP_NAMES[currentStep - 1]}
          </span>
        </div>
        <span className="text-[#64748b] dark:text-[#94a3b8] font-medium">
          {progressPercent}% hoàn thành
        </span>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-2 rounded-full bg-[#e2e8f0] dark:bg-[#2a2c3d] overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#0284c7] to-[#0ea5e9] transition-all duration-300 ease-out"
          style={{ width: `${Math.max(8, progressPercent)}%` }}
        />
      </div>

      {/* Responsive step pills */}
      <div className="pt-2 overflow-x-auto no-scrollbar pb-1">
        <div className="flex items-center gap-1.5 min-w-max">
          {STEP_NAMES.map((name, index) => {
            const stepNum = index + 1;
            const isCurrent = currentStep === stepNum;
            const isReached = stepNum <= effectiveMax;
            const isCompleted = stepNum < currentStep || (stepNum <= effectiveMax && !isCurrent);
            const isClickable = isReached && !isCurrent && onStepClick;

            return (
              <button
                key={name}
                type="button"
                disabled={!isClickable}
                onClick={() => isClickable && onStepClick(stepNum)}
                className={`
                  flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all
                  ${
                    isCurrent
                      ? 'bg-[#0284c7] text-white shadow-sm ring-1 ring-[#0284c7]'
                      : isCompleted
                      ? 'bg-[#f0f9ff] dark:bg-[#0369a1]/15 text-[#0369a1] dark:text-[#38bdf8] hover:bg-[#e0f2fe] dark:hover:bg-[#0369a1]/25 cursor-pointer'
                      : 'text-[#94a3b8] dark:text-[#64748b] cursor-not-allowed opacity-60'
                  }
                `}
                title={isCompleted ? `Chuyển tới: ${name}` : name}
              >
                <span
                  className={`w-4 h-4 rounded-full text-[10px] flex items-center justify-center font-bold ${
                    isCurrent
                      ? 'bg-white text-[#0284c7]'
                      : isCompleted
                      ? 'bg-[#0284c7] text-white'
                      : 'border border-current'
                  }`}
                >
                  {isCompleted ? '✓' : stepNum}
                </span>
                <span className="hidden md:inline whitespace-nowrap">{name}</span>
                <span className="md:hidden whitespace-nowrap">{stepNum}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
