import React, { useState } from 'react';
import { useRequests } from '../../context/RequestContext';
import { formatStatusBadge, formatDate } from '../../utils/formatters';
import { X, Save, Trash2, Calendar, DollarSign, Clock, Mail, Phone, Building, User, Globe, Code, MessageSquare, ShieldCheck, Check } from 'lucide-react';

export const AdminRequestDetailModal = ({ request, onClose, onDeleteClick }) => {
  const { updateStatus, updateNotes } = useRequests();

  const [status, setStatus] = useState(request.status);
  const [internalNotes, setInternalNotes] = useState(request.internalNotes || '');
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!request) return null;

  const handleSave = () => {
    updateStatus(request.id, status);
    updateNotes(request.id, internalNotes);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2000);
  };

  const statusOptions = ['Pending', 'Reviewing', 'Contacted', 'In Progress', 'Completed', 'Rejected'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div
        className="bg-studio-900 border border-white/10 rounded-2xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-studio-950 px-6 py-4 border-b border-white/10 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded">
              ADMIN CONTROL • {request.id}
            </span>
            <div>
              <h3 className="text-base font-bold text-white">{request.projectName}</h3>
              <p className="text-xs text-slate-400 font-mono">Khách hàng: {request.clientName} ({request.clientCompany || 'Cá nhân'})</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onDeleteClick(request)}
              className="p-2 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/20 text-rose-400 text-xs transition-colors"
              title="Xóa yêu cầu này"
            >
              <Trash2 size={16} />
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-studio-900 hover:bg-studio-800 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">

          {/* Admin Status & Action Box */}
          <div className="p-5 rounded-2xl bg-studio-950 border border-brand-primary/30 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-brand-primary uppercase tracking-wider flex items-center gap-1.5">
                <ShieldCheck size={16} /> Quản lý trạng thái & Ghi chú
              </span>
              {savedSuccess && (
                <span className="text-xs font-mono text-emerald-400 flex items-center gap-1 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20">
                  <Check size={13} /> Đã cập nhật!
                </span>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">Thay đổi Trạng Thái (Status)</label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="w-full bg-studio-900 border border-slate-700 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-brand-primary font-mono"
                >
                  {statusOptions.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div className="flex items-end">
                <button
                  onClick={handleSave}
                  className="w-full flex items-center justify-center gap-2 bg-brand-primary hover:bg-brand-hover text-white text-xs font-bold py-2.5 px-4 rounded-xl shadow-glow-primary transition-all"
                >
                  <Save size={15} />
                  <span>Lưu Thay Đổi Admin</span>
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-300 mb-1">Ghi chú nội bộ Admin (Internal Notes)</label>
              <textarea
                rows={3}
                value={internalNotes}
                onChange={(e) => setInternalNotes(e.target.value)}
                placeholder="Nhập ghi chú theo dõi hợp đồng, báo giá, hoặc trao đổi đội ngũ..."
                className="w-full bg-studio-900 border border-slate-700 rounded-xl p-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-primary resize-none"
              />
            </div>
          </div>

          {/* Client Info Grid */}
          <div>
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Thông tin khách hàng (Client Info)</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-studio-950 border border-slate-800 flex items-center gap-3">
                <User size={16} className="text-brand-primary" />
                <div>
                  <p className="text-slate-500 text-[10px]">Họ tên:</p>
                  <p className="font-bold text-white">{request.clientName}</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-studio-950 border border-slate-800 flex items-center gap-3">
                <Mail size={16} className="text-brand-primary" />
                <div>
                  <p className="text-slate-500 text-[10px]">Email:</p>
                  <p className="font-bold text-white">{request.clientEmail}</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-studio-950 border border-slate-800 flex items-center gap-3">
                <Phone size={16} className="text-brand-primary" />
                <div>
                  <p className="text-slate-500 text-[10px]">Số điện thoại:</p>
                  <p className="font-bold text-white">{request.clientPhone || 'Chưa cung cấp'}</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-studio-950 border border-slate-800 flex items-center gap-3">
                <Building size={16} className="text-brand-primary" />
                <div>
                  <p className="text-slate-500 text-[10px]">Công ty / Tổ chức:</p>
                  <p className="font-bold text-white">{request.clientCompany || 'Cá nhân'}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">Thông tin kỹ thuật & Yêu cầu</h4>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-studio-950 border border-slate-800">
                <span className="text-slate-500 font-mono text-[10px]">Loại Web App:</span>
                <p className="font-bold text-white">{request.projectType}</p>
              </div>
              <div className="p-3 rounded-xl bg-studio-950 border border-slate-800">
                <span className="text-slate-500 font-mono text-[10px]">Ngân sách:</span>
                <p className="font-bold text-emerald-400 font-mono">{request.budget}</p>
              </div>
              <div className="p-3 rounded-xl bg-studio-950 border border-slate-800">
                <span className="text-slate-500 font-mono text-[10px]">Kỳ hạn:</span>
                <p className="font-bold text-white font-mono">{request.timeline}</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-studio-950 border border-slate-800 text-xs space-y-1">
              <span className="text-slate-500 font-mono text-[10px]">Mô tả bài toán:</span>
              <p className="text-slate-300 leading-relaxed">{request.projectDescription}</p>
            </div>

            <div className="p-4 rounded-xl bg-studio-950 border border-slate-800 text-xs space-y-1">
              <span className="text-slate-500 font-mono text-[10px]">Tính năng chính:</span>
              <p className="text-slate-300 leading-relaxed">{request.mainFeatures}</p>
            </div>

            {request.targetUsers && (
              <div className="p-4 rounded-xl bg-studio-950 border border-slate-800 text-xs space-y-1">
                <span className="text-slate-500 font-mono text-[10px]">Đối tượng người dùng mục tiêu:</span>
                <p className="text-slate-300">{request.targetUsers}</p>
              </div>
            )}
          </div>

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
