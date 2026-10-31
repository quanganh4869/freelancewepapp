import React from 'react';

/**
 * DraftStatus — Hiển thị trạng thái lưu tự động (Autosave)
 */
export default function DraftStatus({ status = 'idle', lastSavedAt = null, onSaveNow }) {
  const formatTime = (isoString) => {
    if (!isoString) return '';
    try {
      const d = new Date(isoString);
      return d.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' });
    } catch {
      return '';
    }
  };

  return (
    <div className="flex items-center gap-2 text-[12px] font-medium text-[#64748b] dark:text-[#94a3b8]">
      {status === 'saving' && (
        <span className="flex items-center gap-1.5 text-[#0284c7]">
          <span className="w-2 h-2 rounded-full bg-[#0284c7] animate-ping" />
          Đang lưu bản nháp...
        </span>
      )}

      {status === 'saved' && (
        <span className="flex items-center gap-1 text-[#10b981] dark:text-[#34d399]">
          <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          Đã lưu {lastSavedAt ? `(${formatTime(lastSavedAt)})` : ''}
        </span>
      )}

      {status === 'error' && (
        <span className="flex items-center gap-1 text-[#ef4444]">
          <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          </svg>
          Không thể lưu
        </span>
      )}

      {status === 'idle' && onSaveNow && (
        <button
          type="button"
          onClick={onSaveNow}
          className="hover:text-[#0284c7] underline transition"
        >
          Lưu bản nháp
        </button>
      )}
    </div>
  );
}
