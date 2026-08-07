import React, { useState } from 'react';
import { useRequests } from '../../context/RequestContext';
import { formatDate } from '../../utils/formatters';
import { X, Save, Trash2, Mail, Phone, Building, User, ShieldCheck, Check } from 'lucide-react';

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn font-sans">
      <div
        className="bg-studio-900 border border-slate-800 rounded-xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative text-slate-100 font-sans"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-studio-950 px-6 py-4 border-b border-slate-800 flex items-center justify-between sticky top-0 z-10 font-sans">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-brand-primary bg-brand-primary/10 border border-brand-primary/20 px-2.5 py-1 rounded">
              ADMIN CONTROL • {request.id}
            </span>
            <div>
              <h3 className="text-base font-bold text-white">{request.projectName}</h3>
              <p className="text-xs text-slate-400 font-medium">Khách hàng: {request.clientName} ({request.clientCompany || 'Cá nhân'})</p>
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
              className="w-8 h-8 rounded-lg bg-studio-950 hover:bg-studio-800 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 font-sans">

          {/* Admin Status & Action Box */}
          <div className="p-5 rounded-xl bg-studio-950 border border-brand-primary/30 space-y-4 font-sans">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-brand-primary uppercase tracking-wider flex items-center gap-1.5">
                <ShieldCheck size={16} /> Quản lý trạng thái & Ghi chú
              </span>
              {savedSuccess && (
                <span className="text-xs font-bold text-emerald-400 flex items-center gap-1 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20">
                  <Check size={13} /> Đã cập nhật!
                </span>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-slate-300 mb-1 font-semibold">Thay đổi Trạng Thái (Status)</label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="w-full bg-studio-900 border border-slate-700 rounded-lg px-3 py-2.5 text-xs text-white focus:outline-none focus:border-brand-primary font-bold"
                >
                  {statusOptions.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div className="flex items-end">
                <button
                  onClick={handleSave}
                  className="btn-primary w-full py-2.5 text-xs font-semibold"
                >
                  <Save size={15} />
                  <span>Lưu Thay Đổi Admin</span>
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs text-slate-300 mb-1 font-semibold">Ghi chú nội bộ Admin (Internal Notes)</label>
              <textarea
                rows={3}
                value={internalNotes}
                onChange={(e) => setInternalNotes(e.target.value)}
                placeholder="Nhập ghi chú theo dõi hợp đồng, báo giá, hoặc trao đổi đội ngũ..."
                className="w-full bg-studio-900 border border-slate-700 rounded-lg p-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-primary resize-none font-medium"
              />
            </div>
          </div>

          {/* Client Info Grid */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Thông tin khách hàng & Doanh nghiệp</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-medium">
              <div className="p-3.5 rounded-lg bg-studio-950 border border-slate-800 flex items-center gap-3">
                <User size={16} className="text-brand-primary" />
                <div>
                  <p className="text-slate-500 text-[10px]">Họ tên:</p>
                  <p className="font-bold text-white">{request.clientName}</p>
                </div>
              </div>

              <div className="p-3.5 rounded-lg bg-studio-950 border border-slate-800 flex items-center gap-3">
                <Mail size={16} className="text-brand-primary" />
                <div>
                  <p className="text-slate-500 text-[10px]">Email:</p>
                  <p className="font-bold text-white">{request.clientEmail}</p>
                </div>
              </div>

              <div className="p-3.5 rounded-lg bg-studio-950 border border-slate-800 flex items-center gap-3">
                <Phone size={16} className="text-brand-primary" />
                <div>
                  <p className="text-slate-500 text-[10px]">Số điện thoại / Zalo:</p>
                  <p className="font-bold text-white">{request.clientPhone || 'Chưa cung cấp'}</p>
                </div>
              </div>

              <div className="p-3.5 rounded-lg bg-studio-950 border border-slate-800 flex items-center gap-3">
                <Building size={16} className="text-brand-primary" />
                <div>
                  <p className="text-slate-500 text-[10px]">Công ty & Lĩnh vực:</p>
                  <p className="font-bold text-white">{request.clientCompany || 'Cá nhân'} ({request.businessSector || 'Chưa chọn'})</p>
                  {request.companyScale && <p className="text-[10px] text-slate-400">Quy mô: {request.companyScale}</p>}
                </div>
              </div>
            </div>
          </div>

          {/* Project Technical Specifications */}
          <div className="space-y-3 font-sans">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Thông tin kỹ thuật & Phạm vi tính năng</h4>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-medium">
              <div className="p-3 rounded-lg bg-studio-950 border border-slate-800">
                <span className="text-slate-500 text-[10px]">Phân loại Web App:</span>
                <p className="font-bold text-white">{request.projectType}</p>
              </div>
              <div className="p-3 rounded-lg bg-studio-950 border border-slate-800">
                <span className="text-slate-500 text-[10px]">Ngân sách dự kiến:</span>
                <p className="font-bold text-emerald-400">{request.budget}</p>
              </div>
              <div className="p-3 rounded-lg bg-studio-950 border border-slate-800">
                <span className="text-slate-500 text-[10px]">Kỳ hạn bàn giao:</span>
                <p className="font-bold text-white">{request.timeline}</p>
              </div>
            </div>

            {request.projectStage && (
              <div className="p-3.5 rounded-lg bg-studio-950 border border-slate-800 text-xs">
                <span className="text-slate-500 text-[10px]">Giai đoạn chuẩn bị hiện tại:</span>
                <p className="text-slate-200 font-semibold">{request.projectStage}</p>
              </div>
            )}

            <div className="p-4 rounded-lg bg-studio-950 border border-slate-800 text-xs space-y-1">
              <span className="text-slate-500 text-[10px]">Mô tả bài toán kinh doanh & Mục tiêu:</span>
              <p className="text-slate-200 leading-relaxed font-medium">{request.projectDescription}</p>
            </div>

            {/* Selected Features Checklist */}
            {request.selectedFeatures && request.selectedFeatures.length > 0 && (
              <div className="p-4 rounded-lg bg-studio-950 border border-slate-800 text-xs space-y-2 font-sans">
                <span className="text-slate-500 text-[10px]">Các tính năng cốt lõi đã chọn ({request.selectedFeatures.length}):</span>
                <div className="flex flex-wrap gap-1.5">
                  {request.selectedFeatures.map((f, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-[11px] font-semibold">
                      ✓ {f}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {request.targetUsers && (
              <div className="p-3.5 rounded-lg bg-studio-950 border border-slate-800 text-xs space-y-1 font-medium">
                <span className="text-slate-500 text-[10px]">Đối tượng người dùng mục tiêu:</span>
                <p className="text-slate-200">{request.targetUsers}</p>
              </div>
            )}

            {request.preferredTechnologies && (
              <div className="p-3.5 rounded-lg bg-studio-950 border border-slate-800 text-xs space-y-1 font-medium">
                <span className="text-slate-500 text-[10px]">Công nghệ ưu tiên:</span>
                <p className="text-slate-200">{request.preferredTechnologies}</p>
              </div>
            )}

            {request.slaTier && (
              <div className="p-3.5 rounded-lg bg-studio-950 border border-slate-800 text-xs space-y-1 font-medium">
                <span className="text-slate-500 text-[10px]">Gói bảo trì SLA & NDA:</span>
                <p className="text-slate-200">SLA: <strong className="text-white">{request.slaTier}</strong> • NDA: <strong className="text-slate-300">{request.needNda || 'Không'}</strong></p>
              </div>
            )}
          </div>

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
