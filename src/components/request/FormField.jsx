import React from 'react';

/**
 * FormField — Bao bọc label, input, mô tả hỗ trợ, trạng thái lỗi
 * Mental model: JLabel + JTextField/JComponent trong Java Swing
 */
export default function FormField({
  id,
  label,
  required = false,
  hint,
  error,
  children,
  className = ''
}) {
  return (
    <div className={`space-y-1.5 ${className}`}>
      {label && (
        <label
          htmlFor={id}
          className="block text-[14px] font-semibold text-[#1e293b] dark:text-[#f1f5f9] tracking-[-0.01em]"
        >
          {label}
          {required && (
            <span className="text-[#ef4444] ml-1 font-bold" title="Bắt buộc">*</span>
          )}
        </label>
      )}

      {children}

      {hint && !error && (
        <p className="text-[13px] text-[#64748b] dark:text-[#94a3b8] leading-relaxed">
          {hint}
        </p>
      )}

      {error && (
        <p className="text-[13px] text-[#ef4444] dark:text-[#f87171] font-medium flex items-center gap-1.5 animate-fadeIn">
          <svg className="w-4 h-4 shrink-0" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
}
