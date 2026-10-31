import React from 'react';
import OptionCard from './OptionCard';
import FormField from './FormField';

const PREDEFINED_ROLES = [
  { id: 'role-client', name: 'Khách hàng', defaultWork: 'Đăng ký, gửi yêu cầu, xem thông tin cá nhân và lịch sử' },
  { id: 'role-staff', name: 'Nhân viên', defaultWork: 'Tiếp nhận công việc, cập nhật tiến độ, xử lý thông tin hàng ngày' },
  { id: 'role-manager', name: 'Người quản lý', defaultWork: 'Duyệt yêu cầu, phân công công việc, xem báo cáo tổng thể' },
  { id: 'role-owner', name: 'Chủ doanh nghiệp', defaultWork: 'Theo dõi toàn bộ số liệu doanh thu, chi phí và hiệu quả' },
  { id: 'role-partner', name: 'Đối tác / Đại lý', defaultWork: 'Xem dữ liệu được chia sẻ và cộng tác định kỳ' },
  { id: 'role-admin', name: 'Quản trị viên kỹ thuật', defaultWork: 'Cấu hình hệ thống, tạo tài khoản và quản trị' }
];

/**
 * UserGroupBuilder — Quản lý các nhóm người dùng trong Web App (Step 4)
 * Không dùng thuật ngữ kỹ thuật như RBAC, Super Admin
 */
export default function UserGroupBuilder({ groups = [], onGroupsChange }) {
  // Toggle role từ danh sách gợi ý
  const togglePredefinedRole = (role) => {
    const exists = groups.some((g) => g.name === role.name);
    if (exists) {
      onGroupsChange(groups.filter((g) => g.name !== role.name));
    } else {
      onGroupsChange([
        ...groups,
        {
          id: `ug-${Date.now()}-${Math.random().toString(36).substring(2, 5)}`,
          name: role.name,
          responsibilities: role.defaultWork,
          crossAccess: 'Không'
        }
      ]);
    }
  };

  // Thêm một nhóm tùy chỉnh
  const handleAddCustomGroup = () => {
    onGroupsChange([
      ...groups,
      {
        id: `ug-${Date.now()}-${Math.random().toString(36).substring(2, 5)}`,
        name: '',
        responsibilities: '',
        crossAccess: 'Chưa rõ'
      }
    ]);
  };

  const handleUpdateGroup = (index, field, value) => {
    const next = [...groups];
    next[index] = { ...next[index], [field]: value };
    onGroupsChange(next);
  };

  const handleRemoveGroup = (index) => {
    const next = groups.filter((_, i) => i !== index);
    onGroupsChange(next);
  };

  return (
    <div className="space-y-6">
      {/* 1. Nhóm gợi ý phổ biến */}
      <div className="space-y-2">
        <label className="block text-[14px] font-semibold text-[#1e293b] dark:text-[#f1f5f9]">
          1. Chọn nhanh những nhóm người sẽ dùng hệ thống:
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
          {PREDEFINED_ROLES.map((role) => {
            const isSelected = groups.some((g) => g.name === role.name);
            return (
              <OptionCard
                key={role.id}
                type="checkbox"
                selected={isSelected}
                onClick={() => togglePredefinedRole(role)}
                title={role.name}
                description={role.defaultWork}
                className="py-3 px-3.5"
              />
            );
          })}
        </div>
      </div>

      {/* 2. Chi tiết và thêm nhóm tùy chỉnh */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <label className="block text-[14px] font-semibold text-[#1e293b] dark:text-[#f1f5f9]">
            2. Trách nhiệm cụ thể của từng nhóm ({groups.length} nhóm đã chọn):
          </label>
          <button
            type="button"
            onClick={handleAddCustomGroup}
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border border-[#0284c7] text-[#0284c7] hover:bg-[#0284c7] hover:text-white transition"
          >
            + Thêm nhóm người dùng khác
          </button>
        </div>

        {groups.length === 0 ? (
          <div className="p-4 rounded-xl border border-dashed border-[#cbd5e1] dark:border-[#332b26] text-center text-sm text-[#64748b] dark:text-[#94a3b8]">
            Chưa có nhóm người dùng nào. Bạn hãy chọn từ danh sách phía trên hoặc bấm nút “Thêm nhóm”.
          </div>
        ) : (
          <div className="space-y-3">
            {groups.map((group, idx) => (
              <div
                key={group.id || idx}
                className="p-4 rounded-xl border border-[#e2e8f0] dark:border-[#2a2c3d] bg-white dark:bg-[#121422] space-y-3 shadow-sm"
              >
                <div className="flex items-center justify-between gap-2 border-b border-[#f1f5f9] dark:border-[#1e2030] pb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0284c7]">
                    Nhóm {idx + 1}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleRemoveGroup(idx)}
                    className="text-xs text-[#ef4444] hover:underline"
                    title="Xóa nhóm này"
                  >
                    Xóa nhóm
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <FormField label="Tên nhóm người sử dụng" required>
                    <input
                      type="text"
                      value={group.name}
                      onChange={(e) => handleUpdateGroup(idx, 'name', e.target.value)}
                      placeholder="Ví dụ: Kế toán, Thu ngân, Khách thuê phòng..."
                      className="w-full px-3 py-2 text-sm rounded-lg border border-[#cbd5e1] dark:border-[#332b26] bg-[#f8fafc] dark:bg-[#0f1120] text-[#0f172a] dark:text-[#f8fafc] focus:outline-none focus:ring-1 focus:ring-[#0284c7]"
                    />
                  </FormField>

                  <FormField label="Có cần xem thông tin nhóm khác?">
                    <select
                      value={group.crossAccess || 'Không'}
                      onChange={(e) => handleUpdateGroup(idx, 'crossAccess', e.target.value)}
                      className="w-full px-3 py-2 text-sm rounded-lg border border-[#cbd5e1] dark:border-[#332b26] bg-[#f8fafc] dark:bg-[#0f1120] text-[#0f172a] dark:text-[#f8fafc] focus:outline-none focus:ring-1 focus:ring-[#0284c7]"
                    >
                      <option value="Không">Không (Chỉ xem việc của mình)</option>
                      <option value="Có">Có (Xem được dữ liệu chung)</option>
                      <option value="Chưa rõ">Chưa rõ, cần tư vấn thêm</option>
                    </select>
                  </FormField>
                </div>

                <FormField label="Nhóm này sẽ làm những việc gì trên hệ thống?">
                  <textarea
                    rows={2}
                    value={group.responsibilities}
                    onChange={(e) => handleUpdateGroup(idx, 'responsibilities', e.target.value)}
                    placeholder="Mô tả công việc hàng ngày của họ bằng ngôn ngữ đời thường..."
                    className="w-full px-3 py-2 text-sm rounded-lg border border-[#cbd5e1] dark:border-[#332b26] bg-[#f8fafc] dark:bg-[#0f1120] text-[#0f172a] dark:text-[#f8fafc] focus:outline-none focus:ring-1 focus:ring-[#0284c7]"
                  />
                </FormField>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
