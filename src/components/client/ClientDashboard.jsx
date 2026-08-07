import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useRequests } from '../../context/RequestContext';
import { formatStatusBadge, formatDate } from '../../utils/formatters';
import { RequestDetailModal } from './RequestDetailModal';
import { Plus, LayoutDashboard, Clock, CheckCircle2, Eye } from 'lucide-react';

export const ClientDashboard = ({ onOpenRequestModal }) => {
  const { currentUser } = useAuth();
  const { requests } = useRequests();
  const [selectedRequest, setSelectedRequest] = useState(null);

  // Filter requests belonging to this client or match email
  const userRequests = requests.filter(r => 
    (r?.clientEmail || '').toLowerCase() === (currentUser?.email || '').toLowerCase() ||
    (r?.clientName || '').toLowerCase() === (currentUser?.name || '').toLowerCase()
  );

  const totalSubmitted = userRequests.length;
  const inProgressCount = userRequests.filter(r => r?.status === 'In Progress').length;
  const completedCount = userRequests.filter(r => r?.status === 'Completed').length;
  const pendingCount = userRequests.filter(r => r?.status === 'Pending' || r?.status === 'Reviewing').length;

  return (
    <div className="min-h-screen bg-studio-950 text-slate-200 py-10 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Welcome Top Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-studio-900 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 font-sans">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-brand-primary/40 shrink-0">
                <img src={currentUser?.avatar} alt={currentUser?.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <h1 className="text-2xl font-extrabold text-white">
                  Xin chào, {currentUser?.name || 'Khách hàng'}!
                </h1>
                <p className="text-xs text-slate-400 font-medium">
                  {currentUser?.company} • {currentUser?.email}
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={onOpenRequestModal}
            className="flex items-center justify-center gap-2 bg-brand-primary hover:bg-brand-hover text-white text-xs font-bold px-5 py-3 rounded-xl shadow-glow-primary transition-all shrink-0 font-sans"
          >
            <Plus size={16} />
            <span>Gửi Yêu Cầu Dự Án Mới</span>
          </button>
        </div>

        {/* Overview Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-sans">
          <div className="p-5 rounded-xl bg-studio-900 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
              <span>Tổng yêu cầu đã gửi</span>
              <LayoutDashboard size={16} className="text-brand-primary" />
            </div>
            <p className="text-3xl font-extrabold text-white">{totalSubmitted}</p>
          </div>

          <div className="p-5 rounded-xl bg-studio-900 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
              <span>Đang chờ duyệt/đánh giá</span>
              <Clock size={16} className="text-amber-400" />
            </div>
            <p className="text-3xl font-extrabold text-amber-400">{pendingCount}</p>
          </div>

          <div className="p-5 rounded-xl bg-studio-900 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
              <span>Đang thực hiện (In Progress)</span>
              <LayoutDashboard size={16} className="text-indigo-400" />
            </div>
            <p className="text-3xl font-extrabold text-indigo-400">{inProgressCount}</p>
          </div>

          <div className="p-5 rounded-xl bg-studio-900 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
              <span>Đã hoàn thành bàn giao</span>
              <CheckCircle2 size={16} className="text-emerald-400" />
            </div>
            <p className="text-3xl font-extrabold text-emerald-400">{completedCount}</p>
          </div>
        </div>

        {/* My Projects Table Section */}
        <div className="rounded-2xl bg-studio-900 border border-slate-800 overflow-hidden font-sans">
          
          {/* Table Header Title */}
          <div className="p-6 border-b border-slate-800 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-white">My Projects / Danh Sách Yêu Cầu</h2>
              <p className="text-xs text-slate-400 font-medium">Theo dõi trạng thái tiến độ các dự án bạn đã đăng ký</p>
            </div>
            <span className="text-xs text-slate-400 font-semibold">{userRequests.length} Yêu cầu</span>
          </div>

          {/* Table Container */}
          {userRequests.length === 0 ? (
            <div className="p-12 text-center space-y-4 font-sans">
              <p className="text-slate-400 text-sm font-medium">Bạn chưa có yêu cầu dự án nào trong hệ thống.</p>
              <button
                onClick={onOpenRequestModal}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-primary text-white text-xs font-semibold shadow-glow-primary"
              >
                <Plus size={15} /> Bắt đầu dự án đầu tiên
              </button>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-300 font-sans">
                <thead className="bg-studio-950 text-slate-400 uppercase text-[11px] border-b border-white/10 font-bold">
                  <tr>
                    <th className="py-3.5 px-6">Mã & Tên Dự Án</th>
                    <th className="py-3.5 px-6">Loại Web App</th>
                    <th className="py-3.5 px-6">Ngân Sách</th>
                    <th className="py-3.5 px-6">Trạng Thái</th>
                    <th className="py-3.5 px-6">Ngày Gửi</th>
                    <th className="py-3.5 px-6 text-right">Thao Tác</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 font-medium">
                  {userRequests.map((req) => {
                    const statusBadge = formatStatusBadge(req.status);
                    return (
                      <tr key={req.id} className="hover:bg-slate-800/40 transition-colors">
                        <td className="py-4 px-6">
                          <span className="text-[10px] text-slate-500 block font-semibold">{req.id}</span>
                          <span className="font-bold text-white text-sm block">{req.projectName}</span>
                        </td>
                        <td className="py-4 px-6 font-medium text-slate-300">
                          {req.projectType}
                        </td>
                        <td className="py-4 px-6 text-emerald-400 font-semibold">
                          {req.budget}
                        </td>
                        <td className="py-4 px-6">
                          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[11px] font-medium ${statusBadge.bg} ${statusBadge.text} ${statusBadge.border}`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${statusBadge.dot}`} />
                            <span>{statusBadge.label}</span>
                          </span>
                        </td>
                        <td className="py-4 px-6 text-slate-400">
                          {formatDate(req.submittedAt)}
                        </td>
                        <td className="py-4 px-6 text-right">
                          <button
                            onClick={() => setSelectedRequest(req)}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-studio-950 hover:bg-slate-800 border border-slate-800 text-xs font-medium text-slate-200 transition-colors"
                          >
                            <Eye size={14} />
                            <span>Chi tiết</span>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}

        </div>

      </div>

      {/* Request Detail Modal */}
      {selectedRequest && (
        <RequestDetailModal
          request={selectedRequest}
          onClose={() => setSelectedRequest(null)}
        />
      )}
    </div>
  );
};
