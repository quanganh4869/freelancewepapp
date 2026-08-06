import React, { useState } from 'react';
import { useRequests } from '../../context/RequestContext';
import { INITIAL_USERS } from '../../data/seedData';
import { formatStatusBadge, formatDate } from '../../utils/formatters';
import { AdminRequestDetailModal } from './AdminRequestDetailModal';
import { DeleteConfirmModal } from './DeleteConfirmModal';
import { Search, Filter, Shield, Eye, Trash2, CheckCircle2, Clock, AlertCircle, RefreshCw, ChevronDown, Users, FileText, UserCheck } from 'lucide-react';

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
            <p className="text-xs text-slate-400 font-mono mt-1">
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
          </div>
        </div>

        {/* KPI Statistics Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          
          <div className="p-4 rounded-xl bg-studio-900 border border-white/5 space-y-1">
            <span className="text-[11px] font-mono text-slate-400 uppercase">Tổng số yêu cầu</span>
            <p className="text-2xl font-extrabold text-white font-mono">{totalRequests}</p>
          </div>

          <div className="p-4 rounded-xl bg-studio-900 border border-amber-500/20 space-y-1">
            <span className="text-[11px] font-mono text-amber-400 uppercase">Pending (Chờ duyệt)</span>
            <p className="text-2xl font-extrabold text-amber-400 font-mono">{pendingCount}</p>
          </div>

          <div className="p-4 rounded-xl bg-studio-900 border border-blue-500/20 space-y-1">
            <span className="text-[11px] font-mono text-blue-400 uppercase">Reviewing (Đánh giá)</span>
            <p className="text-2xl font-extrabold text-blue-400 font-mono">{reviewingCount}</p>
          </div>

          <div className="p-4 rounded-xl bg-studio-900 border border-indigo-500/20 space-y-1">
            <span className="text-[11px] font-mono text-indigo-400 uppercase">In Progress (Đang làm)</span>
            <p className="text-2xl font-extrabold text-indigo-400 font-mono">{inProgressCount}</p>
          </div>

          <div className="p-4 rounded-xl bg-studio-900 border border-emerald-500/20 space-y-1">
            <span className="text-[11px] font-mono text-emerald-400 uppercase">Completed (Bàn giao)</span>
            <p className="text-2xl font-extrabold text-emerald-400 font-mono">{completedCount}</p>
          </div>

        </div>

        {/* Main Content Area: Requests Tab vs Users Tab */}
        {activeTab === 'requests' ? (
          <>
            {/* Filter & Search Bar */}
            <div className="studio-card-border p-4 rounded-2xl bg-studio-900 flex flex-col md:flex-row items-center justify-between gap-4">
              
              {/* Search Box */}
              <div className="relative w-full md:w-80">
                <Search size={16} className="absolute left-3 top-3 text-slate-500" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Tìm theo tên, email, công ty, dự án..."
                  className="w-full bg-studio-950 border border-slate-800 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-primary"
                />
              </div>

              {/* Filters */}
              <div className="flex items-center gap-3 flex-wrap w-full md:w-auto">
                {/* Status Filter */}
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <Filter size={14} />
                  <select
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                    className="bg-studio-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-brand-primary font-mono"
                  >
                    <option value="All">Tất cả Trạng thái</option>
                    <option value="Pending">Pending (Chờ duyệt)</option>
                    <option value="Reviewing">Reviewing (Đang xem)</option>
                    <option value="Contacted">Contacted (Đã liên hệ)</option>
                    <option value="In Progress">In Progress (Đang làm)</option>
                    <option value="Completed">Completed (Đã bàn giao)</option>
                    <option value="Rejected">Rejected (Đã từ chối)</option>
                  </select>
                </div>

                {/* Project Type Filter */}
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="bg-studio-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-brand-primary font-mono"
                >
                  <option value="All">Tất cả Loại Web App</option>
                  <option value="Business Web App">Business Web App</option>
                  <option value="SaaS">SaaS Platform</option>
                  <option value="E-commerce">E-commerce</option>
                  <option value="Dashboard">Dashboard & Admin</option>
                  <option value="Internal Tool">Internal Tool</option>
                  <option value="Other">Khác</option>
                </select>

                {/* Sort Toggle */}
                <button
                  onClick={() => setSortOrder(sortOrder === 'newest' ? 'oldest' : 'newest')}
                  className="px-3 py-2 rounded-xl bg-studio-950 border border-slate-800 text-xs font-mono text-slate-300 hover:text-white transition-colors"
                >
                  Sắp xếp: {sortOrder === 'newest' ? 'Mới nhất ↓' : 'Cũ nhất ↑'}
                </button>
              </div>

            </div>

            {/* Requests Management Data Table */}
            <div className="studio-card-border rounded-2xl bg-studio-900 overflow-hidden">
              
              <div className="p-4 px-6 border-b border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-white uppercase">
                  Danh sách Yêu cầu Dự án ({filteredRequests.length})
                </span>
                <span className="text-[11px] text-slate-500 font-mono">Hiển thị {filteredRequests.length} trên {requests.length}</span>
              </div>

              {filteredRequests.length === 0 ? (
                <div className="p-12 text-center text-slate-400 text-sm">
                  Không tìm thấy yêu cầu nào phù hợp với bộ lọc.
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs text-slate-300">
                    <thead className="bg-studio-950 text-slate-400 font-mono uppercase text-[11px] border-b border-white/10">
                      <tr>
                        <th className="py-3.5 px-6">Khách Hàng (Client)</th>
                        <th className="py-3.5 px-6">Tên & Loại Dự Án</th>
                        <th className="py-3.5 px-6">Ngân Sách & Timeline</th>
                        <th className="py-3.5 px-6">Trạng Thái (Quick Switch)</th>
                        <th className="py-3.5 px-6">Ngày Gửi</th>
                        <th className="py-3.5 px-6 text-right">Thao Tác</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {filteredRequests.map((req) => {
                        const statusBadge = formatStatusBadge(req.status);
                        return (
                          <tr key={req.id} className="hover:bg-studio-850/50 transition-colors">
                            
                            {/* Client Info */}
                            <td className="py-4 px-6">
                              <span className="font-bold text-white text-sm block">{req.clientName}</span>
                              <span className="text-slate-400 font-mono text-[11px] block">{req.clientEmail}</span>
                              {req.clientCompany && (
                                <span className="text-brand-primary text-[10px] font-mono block">{req.clientCompany}</span>
                              )}
                            </td>

                            {/* Project Info */}
                            <td className="py-4 px-6">
                              <span className="font-mono text-[10px] text-slate-500 block">{req.id}</span>
                              <span className="font-bold text-slate-200 text-sm block">{req.projectName}</span>
                              <span className="text-xs text-slate-400">{req.projectType}</span>
                            </td>

                            {/* Budget & Timeline */}
                            <td className="py-4 px-6 font-mono">
                              <span className="font-bold text-emerald-400 block">{req.budget}</span>
                              <span className="text-[11px] text-slate-400 block">Kỳ hạn: {req.timeline}</span>
                            </td>

                            {/* Status Selector */}
                            <td className="py-4 px-6">
                              <select
                                value={req.status}
                                onChange={(e) => updateStatus(req.id, e.target.value)}
                                className={`px-2.5 py-1 rounded-lg border text-[11px] font-bold font-mono focus:outline-none cursor-pointer ${statusBadge.bg} ${statusBadge.text} ${statusBadge.border}`}
                              >
                                <option value="Pending" className="bg-studio-900 text-amber-400">Pending</option>
                                <option value="Reviewing" className="bg-studio-900 text-blue-400">Reviewing</option>
                                <option value="Contacted" className="bg-studio-900 text-purple-400">Contacted</option>
                                <option value="In Progress" className="bg-studio-900 text-indigo-400">In Progress</option>
                                <option value="Completed" className="bg-studio-900 text-emerald-400">Completed</option>
                                <option value="Rejected" className="bg-studio-900 text-rose-400">Rejected</option>
                              </select>
                            </td>

                            {/* Date */}
                            <td className="py-4 px-6 font-mono text-slate-400 text-[11px]">
                              {formatDate(req.submittedAt)}
                            </td>

                            {/* Actions */}
                            <td className="py-4 px-6 text-right space-x-2">
                              <button
                                onClick={() => setActiveRequestDetail(req)}
                                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-studio-950 hover:bg-studio-800 border border-slate-800 text-slate-200 text-xs transition-colors"
                                title="Xem & Chỉnh sửa chi tiết"
                              >
                                <Eye size={13} />
                                <span>Chi tiết</span>
                              </button>

                              <button
                                onClick={() => setDeletingRequest(req)}
                                className="p-1.5 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/20 text-xs transition-colors"
                                title="Xóa yêu cầu"
                              >
                                <Trash2 size={13} />
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
          </>
        ) : (
          /* Users Tab View */
          <div className="space-y-6">
            <div className="studio-card-border p-4 rounded-2xl bg-studio-900 flex items-center justify-between">
              <div className="relative w-full md:w-80">
                <Search size={16} className="absolute left-3 top-3 text-slate-500" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Tìm kiếm tài khoản theo tên, email..."
                  className="w-full bg-studio-950 border border-slate-800 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-primary"
                />
              </div>
              <span className="text-xs font-mono text-slate-400">Tổng cộng: {filteredUsers.length} tài khoản</span>
            </div>

            <div className="studio-card-border rounded-2xl bg-studio-900 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-slate-300">
                  <thead className="bg-studio-950 text-slate-400 font-mono uppercase text-[11px] border-b border-white/10">
                    <tr>
                      <th className="py-3.5 px-6">Mã User</th>
                      <th className="py-3.5 px-6">Họ và Tên & Email</th>
                      <th className="py-3.5 px-6">Công Ty / Tổ Chức</th>
                      <th className="py-3.5 px-6">Vai Trò (Role)</th>
                      <th className="py-3.5 px-6">Ngày Đăng Ký</th>
                      <th className="py-3.5 px-6 text-right">Số Yêu Cầu</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {filteredUsers.map((user) => (
                      <tr key={user.id} className="hover:bg-studio-850/50 transition-colors">
                        <td className="py-4 px-6 font-mono text-slate-400 text-[11px]">
                          {user.id}
                        </td>
                        <td className="py-4 px-6">
                          <span className="font-bold text-white text-sm block">{user.name}</span>
                          <span className="text-slate-400 font-mono text-[11px]">{user.email}</span>
                        </td>
                        <td className="py-4 px-6 text-slate-300">
                          {user.company || 'Cá nhân'}
                        </td>
                        <td className="py-4 px-6">
                          {user.role === 'ADMIN' ? (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono font-bold text-[11px]">
                              <Shield size={12} /> ADMIN
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 font-mono text-[11px]">
                              <UserCheck size={12} /> CLIENT USER
                            </span>
                          )}
                        </td>
                        <td className="py-4 px-6 font-mono text-slate-400 text-[11px]">
                          {formatDate(user.joinedAt)}
                        </td>
                        <td className="py-4 px-6 text-right font-mono font-bold text-emerald-400">
                          {user.requestsCount} Yêu cầu
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Detail Modal */}
      {activeRequestDetail && (
        <AdminRequestDetailModal
          request={activeRequestDetail}
          onClose={() => setActiveRequestDetail(null)}
          onDeleteClick={(req) => {
            setDeletingRequest(req);
          }}
        />
      )}

      {/* Delete Confirmation Modal */}
      {deletingRequest && (
        <DeleteConfirmModal
          isOpen={!!deletingRequest}
          itemTitle={`${deletingRequest.projectName} (${deletingRequest.clientName})`}
          onClose={() => setDeletingRequest(null)}
          onConfirm={handleDeleteConfirm}
        />
      )}

    </div>
  );
};
