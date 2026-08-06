import React from 'react';
import { AlertTriangle, X } from 'lucide-react';

export const DeleteConfirmModal = ({ isOpen, onClose, onConfirm, itemTitle }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div
        className="bg-studio-900 border border-rose-500/30 rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-6 relative text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white"
        >
          <X size={18} />
        </button>

        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 flex items-center justify-center shrink-0">
            <AlertTriangle size={24} />
          </div>
          <div>
            <h3 className="text-base font-bold text-white">Xác nhận xóa yêu cầu?</h3>
            <p className="text-xs text-slate-400">Hành động này không thể hoàn tác.</p>
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-studio-950 border border-white/5 text-xs text-slate-300">
          Bạn sắp xóa yêu cầu dự án: <span className="font-bold text-rose-400">{itemTitle}</span>
        </div>

        <div className="flex items-center justify-end gap-3 pt-2">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-studio-950 hover:bg-studio-800 text-xs font-semibold text-slate-300 border border-slate-800"
          >
            Hủy bỏ
          </button>
          <button
            onClick={onConfirm}
            className="px-5 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-xs font-bold text-white shadow-lg"
          >
            Xác nhận Xóa
          </button>
        </div>
      </div>
    </div>
  );
};
