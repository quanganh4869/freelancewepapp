import React from 'react';

/**
 * ProjectRequestHeader — Tiêu đề và lời dẫn mở đầu quy trình tư vấn
 */
export default function ProjectRequestHeader({ referenceProject, onClearReference }) {
  return (
    <div className="mb-8 md:mb-10 space-y-3">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#0284c7]/10 text-[#0284c7] dark:bg-[#0284c7]/20 dark:text-[#38bdf8]">
        <span className="w-2 h-2 rounded-full bg-[#0284c7] animate-pulse" />
        Bắt đầu dự án — Tư vấn trực tiếp 1-1
      </div>

      <h1 className="text-[28px] sm:text-[38px] md:text-[44px] font-[800] tracking-[-0.03em] text-[#0f172a] dark:text-[#f8fafc] leading-[1.15]">
        Hãy kể cho tôi nghe về dự án của bạn.
      </h1>

      <p className="text-[15px] sm:text-[16px] text-[#475569] dark:text-[#94a3b8] leading-relaxed max-w-3xl">
        Bạn chưa cần biết mình cần công nghệ gì hay hệ thống phải được xây dựng như thế nào. Chỉ cần chia sẻ công việc bạn muốn thực hiện, vấn đề bạn đang gặp phải và kết quả mong muốn. Tôi sẽ cùng bạn làm rõ giải pháp phù hợp.
      </p>

      <p className="text-[13px] text-[#64748b] dark:text-[#82766f] flex items-center gap-1.5 pt-1">
        <svg className="w-4 h-4 text-[#0284c7] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Quy trình gồm các bước ngắn. Bạn có thể quay lại chỉnh sửa thông tin và lưu bản nháp bất cứ lúc nào.
      </p>

      {referenceProject && (
        <div className="mt-3 p-3.5 rounded-xl border border-[#0284c7]/30 bg-[#f0f9ff] dark:bg-[#0369a1]/15 flex items-center justify-between gap-3 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase font-bold text-[#0284c7]">Dự án tham khảo:</span>
            <span className="font-semibold text-[#0f172a] dark:text-[#f8fafc]">{referenceProject}</span>
          </div>
          {onClearReference && (
            <button
              type="button"
              onClick={onClearReference}
              className="text-xs text-[#64748b] hover:text-[#ef4444] underline transition"
            >
              Bỏ tham chiếu
            </button>
          )}
        </div>
      )}
    </div>
  );
}
