import React from 'react';
import { formatStatusBadge, formatDate } from '../../utils/formatters';
import { X, Calendar, Clock, DollarSign, Building, Mail, Phone, ExternalLink, CheckCircle2, MessageSquare } from 'lucide-react';

export const RequestDetailModal = ({ request, onClose }) => {
  if (!request) return null;

  const statusBadge = formatStatusBadge(request.status);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div
        className="bg-studio-900 border border-white/10 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-studio-950 px-6 py-4 border-b border-white/10 flex items-center justify-between sticky top-0 z-10">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold text-brand-primary bg-brand-primary/10 border border-brand-primary/20 px-2 py-0.5 rounded">
                {request.id}
              </span>
              <h3 className="text-lg font-bold text-white">{request.projectName}</h3>
            </div>
            <p className="text-xs text-slate-400 font-mono mt-0.5">Gửi ngày: {formatDate(request.submittedAt)}</p>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-studio-900 hover:bg-studio-800 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">

          {/* Status Bar */}
          <div className="p-4 rounded-xl bg-studio-950 border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <p className="text-xs font-mono text-slate-400 uppercase">Trạng thái hiện tại</p>
              <div className="flex items-center gap-2 mt-1">
                <span className={`w-2.5 h-2.5 rounded-full ${statusBadge.dot}`} />
                <span className={`text-sm font-bold ${statusBadge.text}`}>
                  {statusBadge.label} ({request.status})
                </span>
              </div>
            </div>

            <div className="text-right">
              <p className="text-xs font-mono text-slate-400 uppercase">Cập nhật gần nhất</p>
              <p className="text-xs text-slate-300 font-mono mt-1">{formatDate(request.updatedAt)}</p>
            </div>
          </div>

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-3.5 rounded-xl bg-studio-950 border border-slate-800 space-y-1">
              <span className="text-slate-500 font-mono">Loại hình Web App:</span>
              <p className="font-bold text-white">{request.projectType}</p>
            </div>
            <div className="p-3.5 rounded-xl bg-studio-950 border border-slate-800 space-y-1">
              <span className="text-slate-500 font-mono">Mức Ngân Sách Dự Kiến:</span>
              <p className="font-bold text-emerald-400 font-mono">{request.budget}</p>
            </div>
            <div className="p-3.5 rounded-xl bg-studio-950 border border-slate-800 space-y-1">
              <span className="text-slate-500 font-mono">Thời Gian Bàn Giao:</span>
              <p className="font-bold text-white font-mono">{request.timeline}</p>
            </div>
            <div className="p-3.5 rounded-xl bg-studio-950 border border-slate-800 space-y-1">
              <span className="text-slate-500 font-mono">Công Nghệ Mong Muốn:</span>
              <p className="font-medium text-slate-300">{request.preferredTechnologies || 'Để Nexus tư vấn'}</p>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono font-bold text-slate-300 uppercase">Mô tả bài toán</h4>
            <p className="text-xs text-slate-300 bg-studio-950 p-4 rounded-xl border border-slate-800 leading-relaxed">
              {request.projectDescription}
            </p>
          </div>

          {/* Main Features */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono font-bold text-slate-300 uppercase">Tính năng chính yêu cầu</h4>
            <p className="text-xs text-slate-300 bg-studio-950 p-4 rounded-xl border border-slate-800 leading-relaxed">
              {request.mainFeatures}
            </p>
          </div>

          {/* Reference Websites if any */}
          {request.referenceWebsites && (
            <div className="space-y-2">
              <h4 className="text-xs font-mono font-bold text-slate-300 uppercase">Website / App tham khảo</h4>
              <p className="text-xs text-brand-primary bg-studio-950 p-3 rounded-xl border border-slate-800 font-mono truncate">
                {request.referenceWebsites}
              </p>
            </div>
          )}

          {/* Admin Note if visible */}
          {request.internalNotes && (
            <div className="p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/20 space-y-1">
              <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs font-bold">
                <MessageSquare size={14} /> Ghi chú từ Studio Admin:
              </div>
              <p className="text-xs text-indigo-200">{request.internalNotes}</p>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-studio-950 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-studio-800 hover:bg-studio-700 text-xs font-semibold text-white transition-colors"
          >
            Đóng
          </button>
        </div>

      </div>
    </div>
  );
};
