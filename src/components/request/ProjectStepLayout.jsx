import React from 'react';

/**
 * ProjectStepLayout — Khung nội dung dùng chung cho từng bước (JPanel mental model)
 */
export default function ProjectStepLayout({
  title,
  description,
  children,
  className = ''
}) {
  return (
    <div className={`space-y-6 animate-fadeIn ${className}`}>
      {/* Tiêu đề & mô tả bước */}
      <div className="space-y-1.5 border-b border-[#f1f5f9] dark:border-[#1e2030] pb-4">
        <h2 className="text-[22px] sm:text-[26px] md:text-[28px] font-[700] text-[#0f172a] dark:text-[#f8fafc] tracking-[-0.02em] leading-snug">
          {title}
        </h2>
        {description && (
          <p className="text-[14px] sm:text-[15px] text-[#475569] dark:text-[#94a3b8] leading-relaxed">
            {description}
          </p>
        )}
      </div>

      {/* Nội dung câu hỏi */}
      <div className="space-y-6">
        {children}
      </div>
    </div>
  );
}
