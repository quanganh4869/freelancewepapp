import React, { useEffect } from 'react';

/**
 * ConfirmationDialog — Hộp thoại xác nhận (Java Swing JDialog mental model)
 * Dùng khi thoát, bắt đầu lại hoặc thao tác có khả năng làm mất dữ liệu
 */
export default function ConfirmationDialog({
  isOpen,
  onClose,
  title,
  message,
  confirmLabel = 'Xác nhận',
  cancelLabel = 'Hủy',
  onConfirm,
  isDangerous = false
}) {
  // Đóng bằng phím Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md bg-white dark:bg-[#121422] rounded-2xl border border-[#e2e8f0] dark:border-[#2a2c3d] p-6 shadow-2xl space-y-4 animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start gap-3.5">
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
              isDangerous
                ? 'bg-[#fef2f2] text-[#ef4444] dark:bg-[#7f1d1d]/30'
                : 'bg-[#f0f9ff] text-[#0284c7] dark:bg-[#0369a1]/20'
            }`}
          >
            {isDangerous ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            )}
          </div>
          <div>
            <h3 className="text-[17px] font-bold text-[#0f172a] dark:text-[#f8fafc] leading-snug">
              {title}
            </h3>
            <p className="mt-1.5 text-[14px] text-[#64748b] dark:text-[#94a3b8] leading-relaxed">
              {message}
            </p>
          </div>
        </div>

        <div className="pt-3 flex items-center justify-end gap-3 border-t border-[#f1f5f9] dark:border-[#1e2030]">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2.5 rounded-lg text-[14px] font-medium text-[#475569] dark:text-[#94a3b8] hover:bg-[#f1f5f9] dark:hover:bg-[#1a1d2e] transition"
          >
            {cancelLabel}
          </button>
          <button
            type="button"
            onClick={() => {
              onConfirm();
              onClose();
            }}
            className={`px-4 py-2.5 rounded-lg text-[14px] font-semibold text-white shadow-sm transition ${
              isDangerous
                ? 'bg-[#ef4444] hover:bg-[#dc2626]'
                : 'bg-[#0284c7] hover:bg-[#0369a1]'
            }`}
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
