import React, { useState } from 'react';
import { useRequests } from '../../context/RequestContext';
import { INITIAL_USERS } from '../../data/seedData';
import { formatStatusBadge, formatDate } from '../../utils/formatters';
import { AdminRequestDetailModal } from './AdminRequestDetailModal';
import { DeleteConfirmModal } from './DeleteConfirmModal';
import { Search, Filter, Shield, Eye, Trash2, CheckCircle2, Clock, AlertCircle, RefreshCw, ChevronDown, Users, FileText, UserCheck, BookOpen } from 'lucide-react';

export const AdminDashboard = () => {
  const { requests, updateStatus, deleteRequest } = useRequests();

  const [activeTab, setActiveTab] = useState('requests'); // 'requests' | 'users'
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [sortOrder, setSortOrder] = useState('newest'); // 'newest' | 'oldest'

  const [activeRequestDetail, setActiveRequestDetail] = useState(null);
  const [deletingRequest, setDeletingRequest] = useState(null);

  // Statistics KPI calculations
  const totalRequests = (requests || []).length;
  const pendingCount = (requests || []).filter(r => r?.status === 'Pending').length;
  const reviewingCount = (requests || []).filter(r => r?.status === 'Reviewing').length;
  const inProgressCount = (requests || []).filter(r => r?.status === 'In Progress').length;
  const completedCount = (requests || []).filter(r => r?.status === 'Completed').length;

  // Filter & Search Logic for Requests
  const filteredRequests = (requests || []).filter(req => {
    const matchesSearch =
      (req?.clientName || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (req?.clientEmail || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (req?.projectName || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (req?.clientCompany || '').toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = selectedStatus === 'All' || req?.status === selectedStatus;
    const matchesType = selectedType === 'All' || req?.projectType === selectedType;

    return matchesSearch && matchesStatus && matchesType;
  }).sort((a, b) => {
    const timeA = new Date(a?.submittedAt || 0).getTime();
    const timeB = new Date(b?.submittedAt || 0).getTime();
    return sortOrder === 'newest' ? timeB - timeA : timeA - timeB;
  });

  // Filter Logic for Users
  const filteredUsers = INITIAL_USERS.filter(u => 
    (u.name || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
    (u.email || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
    (u.company || '').toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDeleteConfirm = () => {
    if (deletingRequest) {
      deleteRequest(deletingRequest.id);
      setDeletingRequest(null);
      if (activeRequestDetail?.id === deletingRequest.id) {
        setActiveRequestDetail(null);
      }
    }
  };

  return (
    <div className="min-h-screen bg-studio-950 text-slate-200 py-8 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Admin Top Title Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400">
                <Shield size={20} />
              </span>
              <h1 className="text-2xl font-extrabold text-white tracking-tight">
                Admin Control Center • Lead & User Management
              </h1>
            </div>
            <p className="text-xs text-slate-400 mt-1 font-medium">
              Quản lý các yêu cầu phát triển Web App từ khách hàng, phân quyền & danh sách tài khoản
            </p>
          </div>

          {/* Admin Section Tabs */}
          <div className="flex items-center gap-2 bg-studio-900 p-1 rounded-xl border border-white/10">
            <button
              onClick={() => setActiveTab('requests')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'requests'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <FileText size={14} />
              <span>Project Requests ({totalRequests})</span>
            </button>
            <button
              onClick={() => setActiveTab('users')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'users'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Users size={14} />
              <span>Users ({INITIAL_USERS.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('stories')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'stories'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <BookOpen size={14} />
              <span>Stories Studio</span>
            </button>

          </div>
        </div>

        {/* KPI Statistics Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          
          <div className="p-4 rounded-xl bg-studio-900 border border-white/5 space-y-1">
            <span className="text-[11px] font-bold text-slate-400 uppercase">Tổng số yêu cầu</span>
            <p className="text-2xl font-extrabold text-white">{totalRequests}</p>
          </div>

          <div className="p-4 rounded-xl bg-studio-900 border border-amber-500/20 space-y-1">
            <span className="text-[11px] font-bold text-amber-400 uppercase">Pending (Chờ duyệt)</span>
            <p className="text-2xl font-extrabold text-amber-400">{pendingCount}</p>
          </div>

          <div className="p-4 rounded-xl bg-studio-900 border border-blue-500/20 space-y-1">
            <span className="text-[11px] font-bold text-blue-400 uppercase">Reviewing (Đánh giá)</span>
            <p className="text-2xl font-extrabold text-blue-400">{reviewingCount}</p>
          </div>

          <div className="p-4 rounded-xl bg-studio-900 border border-indigo-500/20 space-y-1">
            <span className="text-[11px] font-bold text-indigo-400 uppercase">In Progress (Đang làm)</span>
            <p className="text-2xl font-extrabold text-indigo-400">{inProgressCount}</p>
          </div>

          <div className="p-4 rounded-xl bg-studio-900 border border-emerald-500/20 space-y-1">
            <span className="text-[11px] font-bold text-emerald-400 uppercase">Completed (Bàn giao)</span>
            <p className="text-2xl font-extrabold text-emerald-400">{completedCount}</p>
          </div>

        </div>

        {/* Main Content Area: Requests Tab vs Users Tab */}
        {activeTab === 'requests' ? (
          <>
            {/* Filter & Search Bar */}
            <div className="p-4 rounded-2xl bg-studio-900 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
              
              {/* Search Box */}
              <div className="relative w-full md:w-80">
                <Search size={16} className="absolute left-3 top-3 text-slate-500" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Tìm theo tên, email, công ty..."
                  className="w-full bg-studio-950 border border-slate-800 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-primary"
                />
              </div>

              {/* Filters */}
              <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <Filter size={14} />
                  <span>Trạng thái:</span>
                </div>
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="bg-studio-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-brand-primary font-semibold"
                >
                  <option value="All">Tất cả trạng thái</option>
                  <option value="Pending">Chờ tiếp nhận (Pending)</option>
                  <option value="Reviewing">Đang tư vấn (Reviewing)</option>
                  <option value="In Progress">Đang lập trình (In Progress)</option>
                  <option value="Completed">Đã bàn giao (Completed)</option>
                </select>

                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="bg-studio-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-brand-primary font-semibold"
                >
                  <option value="All">Tất cả loại hình</option>
                  <option value="Website cá nhân / Portfolio">Website cá nhân</option>
                  <option value="Landing Page bán hàng">Landing Page</option>
                  <option value="Website Doanh nghiệp / Shop">Doanh nghiệp / Shop</option>
                  <option value="Web App / Dashboard nhỏ">Web App / Dashboard</option>
                </select>
              </div>

            </div>

            {/* Requests Table */}
            <div className="rounded-2xl bg-studio-900 border border-slate-800 overflow-hidden shadow-xl">
              <div className="p-4 border-b border-slate-800 flex items-center justify-between">
                <span className="text-xs font-bold text-white uppercase">
                  Danh Sách Đơn Đặt Web ({filteredRequests.length})
                </span>
                <span className="text-[11px] text-slate-500 font-medium">Hiển thị {filteredRequests.length} trên {requests.length}</span>
              </div>

              {filteredRequests.length === 0 ? (
                <div className="p-12 text-center text-slate-400 space-y-3 font-medium">
                  <AlertCircle size={32} className="mx-auto text-slate-500" />
                  <p className="text-sm">Không tìm thấy yêu cầu làm web nào phù hợp với bộ lọc.</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead className="bg-studio-950 text-slate-400 uppercase text-[11px] border-b border-white/10 font-bold">
                      <tr>
                        <th className="py-3.5 px-6">Dự án & Khách hàng</th>
                        <th className="py-3.5 px-6">Phân loại & Ngân sách</th>
                        <th className="py-3.5 px-6">Trạng thái</th>
                        <th className="py-3.5 px-6">Ngày gửi</th>
                        <th className="py-3.5 px-6 text-right">Thao tác</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800 text-xs font-medium">
                      {filteredRequests.map((req) => {
                        const statusBadge = formatStatusBadge(req.status);
                        return (
                          <tr key={req.id} className="hover:bg-slate-800/40 transition-colors">
                            <td className="py-4 px-6">
                              <span className="font-bold text-white text-sm block">{req.projectName || req.projectType}</span>
                              <span className="text-slate-300 font-semibold block">{req.clientName} ({req.clientPhone || 'Không có SĐT'})</span>
                              <span className="text-slate-400 text-[11px] block">{req.clientEmail}</span>
                            </td>

                            <td className="py-4 px-6">
                              <span className="font-bold text-brand-primary block">{req.projectType}</span>
                              <span className="text-emerald-400 font-bold block">{req.budget}</span>
                            </td>

                            <td className="py-4 px-6">
                              <select
                                value={req.status}
                                onChange={(e) => updateStatus(req.id, e.target.value)}
                                className={`px-2.5 py-1 rounded-lg border text-[11px] font-bold focus:outline-none cursor-pointer ${statusBadge.bg} ${statusBadge.text} ${statusBadge.border}`}
                              >
                                <option value="Pending">Chờ tiếp nhận</option>
                                <option value="Reviewing">Đang tư vấn</option>
                                <option value="In Progress">Đang lập trình</option>
                                <option value="Completed">Đã bàn giao</option>
                              </select>
                            </td>

                            <td className="py-4 px-6 text-slate-400 text-[11px]">
                              {formatDate(req.submittedAt)}
                            </td>

                            <td className="py-4 px-6 text-right">
                              <div className="flex items-center justify-end gap-2">
                                <button
                                  onClick={() => setActiveRequestDetail(req)}
                                  className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                                  title="Xem chi tiết"
                                >
                                  <Eye size={15} />
                                </button>
                                <button
                                  onClick={() => setDeletingRequest(req)}
                                  className="p-1.5 rounded-lg bg-rose-500/10 text-rose-400 hover:bg-rose-500/20 transition-colors"
                                  title="Xóa yêu cầu"
                                >
                                  <Trash2 size={15} />
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </>
        
        ) : activeTab === 'stories' ? (
          <div className="rounded-2xl bg-studio-900 border border-slate-800 p-8 text-center space-y-4 shadow-xl">
            <BookOpen size={48} className="mx-auto text-amber-500/50" />
            <h2 className="text-xl font-bold text-white">Animation Story Studio</h2>
            <p className="text-slate-400 text-sm max-w-md mx-auto">Tạo và quản lý các trang truyện tranh tương tác với hiệu ứng chuyển động, âm thanh.</p>
            <button
              onClick={() => window.location.href = '/admin/stories/new/chapters/1/editor'}
              className="mt-4 px-6 py-3 rounded-xl bg-brand-primary text-white font-bold shadow-glow-primary hover:bg-brand-hover transition-all"
            >
              Tạo Story Mới
            </button>
          </div>

        ) : (
          /* Users Tab */
          <div className="rounded-2xl bg-studio-900 border border-slate-800 overflow-hidden shadow-xl font-medium">
            <div className="p-4 border-b border-slate-800 flex items-center justify-between">
              <span className="text-xs font-bold text-white uppercase">Danh sách tài khoản hệ thống</span>
              <span className="text-xs text-slate-400">Tổng cộng: {filteredUsers.length} tài khoản</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead className="bg-studio-950 text-slate-400 uppercase text-[11px] border-b border-white/10 font-bold">
                  <tr>
                    <th className="py-3.5 px-6">Họ và Tên</th>
                    <th className="py-3.5 px-6">Email</th>
                    <th className="py-3.5 px-6">Vai trò</th>
                    <th className="py-3.5 px-6">Tổ chức / Đơn vị</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-xs">
                  {filteredUsers.map((user) => (
                    <tr key={user.id} className="hover:bg-slate-800/40 transition-colors">
                      <td className="py-4 px-6 font-bold text-white">{user.name}</td>
                      <td className="py-4 px-6 text-slate-300">{user.email}</td>
                      <td className="py-4 px-6">
                        {user.role === 'ADMIN' ? (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-300 font-bold text-[11px]">
                            ADMIN
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-[11px]">
                            CLIENT
                          </span>
                        )}
                      </td>
                      <td className="py-4 px-6 text-slate-300">{user.company || 'Cá nhân'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>

      {/* Detail Modal */}
      {activeRequestDetail && (
        <AdminRequestDetailModal
          request={activeRequestDetail}
          onClose={() => setActiveRequestDetail(null)}
          onUpdateStatus={(status) => updateStatus(activeRequestDetail.id, status)}
          onDelete={() => setDeletingRequest(activeRequestDetail)}
        />
      )}

      {/* Delete Confirmation Modal */}
      {deletingRequest && (
        <DeleteConfirmModal
          request={deletingRequest}
          onClose={() => setDeletingRequest(null)}
          onConfirm={handleDeleteConfirm}
        />
      )}

    </div>
  );
};
