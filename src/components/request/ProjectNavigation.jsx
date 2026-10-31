import React, { useState } from 'react';
import DraftStatus from './DraftStatus';

/**
 * ProjectNavigation — Quản lý nút quay lại, tiếp tục, lưu bản nháp và gửi yêu cầu
 */
export default function ProjectNavigation({
  currentStep,
  totalSteps = 8,
  onPrev,
  onNext,
  onSubmit,
  isSubmitting = false,
  nextDisabled = false,
  draftStatus,
  lastSavedAt,
  onSaveDraft,
  onReset,
  onExit
}) {
  const [showOptionsMenu, setShowOptionsMenu] = useState(false);

  return (
    <div className="pt-6 mt-8 border-t border-[#e2e8f0] dark:border-[#2a2c3d] flex flex-col sm:flex-row items-center justify-between gap-4">
      {/* Trái: Nút Quay lại & Tùy chọn */}
      <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-start">
        {currentStep > 1 ? (
          <button
            type="button"
            onClick={onPrev}
            disabled={isSubmitting}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-[#cbd5e1] dark:border-[#332b26] text-sm font-semibold text-[#475569] dark:text-[#94a3b8] hover:bg-[#f8fafc] dark:hover:bg-[#181b2e] hover:text-[#0f172a] dark:hover:text-[#f8fafc] transition"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Quay lại
          </button>
        ) : (
          <div />
        )}

        {/* Menu Tùy chọn (Bắt đầu lại / Thoát) */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setShowOptionsMenu(!showOptionsMenu)}
            className="p-2 rounded-lg text-[#64748b] hover:text-[#0f172a] dark:hover:text-[#f8fafc] hover:bg-[#f1f5f9] dark:hover:bg-[#181b2e] transition"
            title="Tùy chọn biểu mẫu"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
            </svg>
          </button>

          {showOptionsMenu && (
            <>
              <div
                className="fixed inset-0 z-40"
                onClick={() => setShowOptionsMenu(false)}
              />
              <div className="absolute left-0 sm:left-auto sm:right-0 bottom-full mb-2 w-48 rounded-xl border border-[#e2e8f0] dark:border-[#2a2c3d] bg-white dark:bg-[#121422] shadow-xl p-1.5 z-50 text-sm">
                <button
                  type="button"
                  onClick={() => {
                    setShowOptionsMenu(false);
                    onReset?.();
                  }}
                  className="w-full text-left px-3 py-2 rounded-lg text-[#ef4444] hover:bg-[#fef2f2] dark:hover:bg-[#7f1d1d]/20 transition flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                  Bắt đầu lại từ đầu
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowOptionsMenu(false);
                    onExit?.();
                  }}
                  className="w-full text-left px-3 py-2 rounded-lg text-[#475569] dark:text-[#94a3b8] hover:bg-[#f1f5f9] dark:hover:bg-[#181b2e] transition flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  Rời khỏi biểu mẫu
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Phải: Autosave status & Nút Tiếp tục / Gửi */}
      <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
        <DraftStatus
          status={draftStatus}
          lastSavedAt={lastSavedAt}
          onSaveNow={onSaveDraft}
        />

        {currentStep < totalSteps ? (
          <button
            type="button"
            onClick={onNext}
            disabled={nextDisabled || isSubmitting}
            className={`
              inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold text-white shadow-md transition-all
              ${
                nextDisabled
                  ? 'bg-[#94a3b8] dark:bg-[#475569] cursor-not-allowed opacity-60'
                  : 'bg-[#0284c7] hover:bg-[#0369a1] active:scale-[0.98]'
              }
            `}
          >
            Tiếp tục
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        ) : (
          <button
            type="button"
            onClick={onSubmit}
            disabled={isSubmitting || nextDisabled}
            className={`
              inline-flex items-center gap-2 px-7 py-3 rounded-xl text-sm font-bold text-white shadow-lg transition-all
              ${
                isSubmitting || nextDisabled
                  ? 'bg-[#94a3b8] dark:bg-[#475569] cursor-not-allowed opacity-70'
                  : 'bg-gradient-to-r from-[#0284c7] to-[#0ea5e9] hover:from-[#0369a1] hover:to-[#0284c7] active:scale-[0.98]'
              }
            `}
          >
            {isSubmitting ? (
              <>
                <svg className="w-4 h-4 animate-spin text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Đang gửi yêu cầu...
              </>
            ) : (
              <>
                Gửi yêu cầu dự án
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
}
