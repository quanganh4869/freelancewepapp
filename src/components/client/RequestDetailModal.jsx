import React from 'react';
import { formatStatusBadge, formatDate } from '../../utils/formatters';
import { X, MessageSquare } from 'lucide-react';

export const RequestDetailModal = ({ request, onClose }) => {
  if (!request) return null;

  const statusBadge = formatStatusBadge(request.status);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn font-sans">
      <div
        className="bg-studio-900 border border-slate-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative text-slate-100 font-sans"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-studio-950 px-6 py-4 border-b border-slate-800 flex items-center justify-between sticky top-0 z-10 font-sans">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-brand-primary bg-brand-primary/10 border border-brand-primary/20 px-2.5 py-0.5 rounded">
                {request.id}
              </span>
              <h3 className="text-base font-bold text-white">{request.projectName}</h3>
            </div>
            <p className="text-xs text-slate-400 font-medium mt-0.5">Gửi ngày: {formatDate(request.submittedAt)}</p>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-studio-950 hover:bg-studio-800 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 font-sans">

          {/* Status Bar */}
          <div className="p-4 rounded-xl bg-studio-950 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <p className="text-xs text-slate-400 uppercase font-bold">Trạng thái xử lý</p>
              <div className="flex items-center gap-2 mt-1">
                <span className={`w-2.5 h-2.5 rounded-full ${statusBadge.dot}`} />
                <span className={`text-xs font-bold ${statusBadge.text}`}>
                  {statusBadge.label} ({request.status})
                </span>
              </div>
            </div>

            <div className="text-right">
              <p className="text-xs text-slate-400 uppercase font-bold">Cập nhật gần nhất</p>
              <p className="text-xs text-slate-300 font-medium mt-1">{formatDate(request.updatedAt)}</p>
            </div>
          </div>

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-medium">
            <div className="p-3.5 rounded-lg bg-studio-950 border border-slate-800 space-y-1">
              <span className="text-slate-500">Loại hình Web App:</span>
              <p className="font-bold text-white">{request.projectType}</p>
            </div>
            <div className="p-3.5 rounded-lg bg-studio-950 border border-slate-800 space-y-1">
              <span className="text-slate-500">Ngân Sách Dự Kiến:</span>
              <p className="font-bold text-emerald-400">{request.budget}</p>
            </div>
            <div className="p-3.5 rounded-lg bg-studio-950 border border-slate-800 space-y-1">
              <span className="text-slate-500">Thời Gian Bàn Giao:</span>
              <p className="font-bold text-white">{request.timeline}</p>
            </div>
            <div className="p-3.5 rounded-lg bg-studio-950 border border-slate-800 space-y-1">
              <span className="text-slate-500">Công Nghệ Yêu Cầu:</span>
              <p className="font-semibold text-slate-300">{request.preferredTechnologies || 'Để tư vấn'}</p>
            </div>
          </div>

          {/* Business Sector & Stage */}
          {(request.businessSector || request.projectStage) && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-medium">
              {request.businessSector && (
                <div className="p-3.5 rounded-lg bg-studio-950 border border-slate-800 space-y-1">
                  <span className="text-slate-500">Lĩnh Vực Hoạt Động:</span>
                  <p className="font-semibold text-slate-200">{request.businessSector}</p>
                </div>
              )}
              {request.projectStage && (
                <div className="p-3.5 rounded-lg bg-studio-950 border border-slate-800 space-y-1">
                  <span className="text-slate-500">Giai Đoạn Chuẩn Bị:</span>
                  <p className="font-semibold text-slate-200">{request.projectStage}</p>
                </div>
              )}
            </div>
          )}

          {/* Description */}
          <div className="space-y-2 font-sans">
            <h4 className="text-xs font-bold text-slate-400 uppercase">Mô tả bài toán & Mục tiêu</h4>
            <p className="text-xs text-slate-300 bg-studio-950 p-4 rounded-xl border border-slate-800 leading-relaxed font-medium">
              {request.projectDescription}
            </p>
          </div>

          {/* Selected Features */}
          {request.selectedFeatures && request.selectedFeatures.length > 0 && (
            <div className="space-y-2 font-sans">
              <h4 className="text-xs font-bold text-slate-400 uppercase">Các tính năng cốt lõi đã chọn ({request.selectedFeatures.length})</h4>
              <div className="flex flex-wrap gap-1.5 p-4 rounded-xl bg-studio-950 border border-slate-800">
                {request.selectedFeatures.map((f, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-[11px] font-semibold">
                    ✓ {f}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* SLA & NDA */}
          {request.slaTier && (
            <div className="p-4 rounded-xl bg-studio-950 border border-slate-800 text-xs space-y-1 font-medium">
              <span className="text-slate-500 text-[10px]">Gói bảo trì SLA & NDA:</span>
              <p className="text-slate-200">SLA: <strong className="text-white">{request.slaTier}</strong> • NDA: <strong className="text-slate-300">{request.needNda || 'Không'}</strong></p>
            </div>
          )}

          {/* Admin Note if visible */}
          {request.internalNotes && (
            <div className="p-4 rounded-xl bg-brand-primary/10 border border-brand-primary/20 space-y-1 font-sans">
              <div className="flex items-center gap-2 text-brand-primary text-xs font-bold">
                <MessageSquare size={14} /> Ghi chú từ Admin:
              </div>
              <p className="text-xs text-slate-200 font-medium">{request.internalNotes}</p>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-studio-950 border-t border-slate-800 flex justify-end font-sans">
          <button
            onClick={onClose}
            className="btn-secondary py-2 px-5 text-xs font-semibold"
          >
            Đóng
          </button>
        </div>

      </div>
    </div>
  );
};
