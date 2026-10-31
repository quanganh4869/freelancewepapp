import React from 'react';

/**
 * OptionCard — Card lựa chọn (Radio / Checkbox)
 * Hỗ trợ chọn đơn hoặc nhiều, có tiêu đề, mô tả, ví dụ và badge
 */
export default function OptionCard({
  type = 'radio', // 'radio' | 'checkbox'
  selected = false,
  onClick,
  title,
  description,
  example,
  badge,
  icon: Icon,
  disabled = false,
  className = ''
}) {
  const handleKeyDown = (e) => {
    if (disabled) return;
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      onClick?.();
    }
  };

  return (
    <div
      role={type}
      aria-checked={selected}
      tabIndex={disabled ? -1 : 0}
      onClick={!disabled ? onClick : undefined}
      onKeyDown={handleKeyDown}
      className={`
        relative group text-left p-4 sm:p-5 rounded-xl border transition-all duration-200 cursor-pointer select-none
        focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0284c7] focus-visible:ring-offset-2
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:border-[#0284c7]/60 hover:shadow-md'}
        ${
          selected
            ? 'border-[#0284c7] bg-[#f0f9ff]/70 dark:bg-[#0369a1]/15 shadow-sm ring-1 ring-[#0284c7]'
            : 'border-[#e2e8f0] dark:border-[#332b26] bg-[#ffffff] dark:bg-[#121422] hover:bg-[#f8fafc] dark:hover:bg-[#181b2e]'
        }
        ${className}
      `}
    >
      <div className="flex items-start gap-3.5">
        {/* Indicator icon / control */}
        <div className="pt-0.5 shrink-0">
          {type === 'radio' ? (
            <div
              className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${
                selected
                  ? 'border-[#0284c7] bg-[#0284c7]'
                  : 'border-[#94a3b8] dark:border-[#64748b] bg-white dark:bg-[#0f1120]'
              }`}
            >
              {selected && <div className="w-2 h-2 rounded-full bg-white" />}
            </div>
          ) : (
            <div
              className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all ${
                selected
                  ? 'border-[#0284c7] bg-[#0284c7] text-white'
                  : 'border-[#94a3b8] dark:border-[#64748b] bg-white dark:bg-[#0f1120]'
              }`}
            >
              {selected && (
                <svg className="w-3.5 h-3.5 stroke-current stroke-[2.5]" viewBox="0 0 24 24" fill="none">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              )}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2 flex-wrap mb-1">
            <h4
              className={`text-[15px] font-semibold leading-snug tracking-[-0.01em] ${
                selected
                  ? 'text-[#0369a1] dark:text-[#38bdf8]'
                  : 'text-[#0f172a] dark:text-[#f8fafc]'
              }`}
            >
              {title}
            </h4>
            {badge && (
              <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-[#e0f2fe] text-[#0369a1] dark:bg-[#0284c7]/20 dark:text-[#7dd3fc]">
                {badge}
              </span>
            )}
          </div>

          {description && (
            <p className="text-[13px] sm:text-[14px] text-[#475569] dark:text-[#94a3b8] leading-relaxed">
              {description}
            </p>
          )}

          {example && (
            <p className="mt-2 text-[12px] text-[#64748b] dark:text-[#82766f] italic bg-[#f8fafc] dark:bg-[#0b0c16] p-2 rounded-md border border-[#f1f5f9] dark:border-[#1e2030]">
              <span className="font-semibold not-italic text-[#475569] dark:text-[#94a3b8]">Ví dụ: </span>
              {example}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
