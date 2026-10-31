import React from 'react';
import ProjectStepLayout from '../ProjectStepLayout';
import UserGroupBuilder from '../UserGroupBuilder';
import OrderedWorkflowBuilder from '../OrderedWorkflowBuilder';

/**
 * BƯỚC 4 – AI SẼ SỬ DỤNG VÀ QUY TRÌNH HOẠT ĐỘNG RA SAO?
 * Web App: Khai thác nhóm người dùng & xây dựng chuỗi quy trình có thứ tự
 * Website thông thường: Xác định cơ cấu nội dung và mức độ quản lý
 */
export default function Step4UsersWorkflow({
  requestType,
  formData,
  onChangeField
}) {
  const isWebApp = requestType === 'web_application';

  return (
    <ProjectStepLayout
      title={
        isWebApp
          ? 'Ai sẽ sử dụng hệ thống và quy trình hoạt động ra sao?'
          : 'Bạn muốn tổ chức các nhóm nội dung như thế nào?'
      }
      description={
        isWebApp
          ? 'Một hệ thống có thể phục vụ nhiều nhóm người khác nhau với vai trò khác nhau. Hãy chia sẻ ai sẽ dùng và các bước công việc thực tế diễn ra như thế nào.'
          : 'Xác định các nhóm nội dung chính trên website và cách bạn muốn quản lý hoặc cập nhật thông tin sau khi bàn giao.'
      }
    >
      {isWebApp ? (
        <div className="space-y-8">
          {/* 1. Nhóm người dùng */}
          <section className="space-y-4">
            <div className="border-b border-[#f1f5f9] dark:border-[#1e2030] pb-2">
              <h3 className="text-[17px] font-bold text-[#0f172a] dark:text-[#f8fafc]">
                Phần 1: Các nhóm người sử dụng hệ thống
              </h3>
              <p className="text-xs text-[#64748b] dark:text-[#94a3b8] mt-0.5">
                Mỗi nhóm người dùng sẽ có nhiệm vụ và quyền hạn riêng.
              </p>
            </div>
            <UserGroupBuilder
              groups={formData.userGroups || []}
              onGroupsChange={(updatedGroups) => onChangeField('userGroups', updatedGroups)}
            />
          </section>

          {/* 2. Chuỗi quy trình công việc */}
          <section className="space-y-4 pt-4 border-t border-[#e2e8f0] dark:border-[#2a2c3d]">
            <div className="border-b border-[#f1f5f9] dark:border-[#1e2030] pb-2">
              <h3 className="text-[17px] font-bold text-[#0f172a] dark:text-[#f8fafc]">
                Phần 2: Trình tự các bước trong quy trình công việc
              </h3>
              <p className="text-xs text-[#64748b] dark:text-[#94a3b8] mt-0.5">
                Mô tả các bước thực tế từ khi bắt đầu tiếp nhận đến khi hoàn thành xong một công việc.
              </p>
            </div>
            <OrderedWorkflowBuilder
              steps={formData.workflowSteps || []}
              onStepsChange={(updatedSteps) => onChangeField('workflowSteps', updatedSteps)}
              notifyOnStatusChange={formData.notifyOnStatusChange || 'Có, thông báo ngay lập tức'}
              onNotifyChange={(val) => onChangeField('notifyOnStatusChange', val)}
            />
          </section>
        </div>
      ) : (
        /* Nhánh Website thông thường */
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="block text-[15px] font-semibold text-[#0f172a] dark:text-[#f8fafc]">
              1. Bạn muốn website có những nhóm nội dung nào?
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                'Giới thiệu thương hiệu',
                'Dịch vụ cung cấp',
                'Sản phẩm kinh doanh',
                'Dự án tiêu biểu',
                'Bài viết & Tin tức',
                'Hình ảnh thực tế / Thư viện ảnh',
                'Thông tin liên hệ & Mạng xã hội',
                'Nhóm nội dung khác'
              ].map((grp) => {
                const selectedList = formData.contentCategories || [];
                const isSelected = selectedList.includes(grp);
                return (
                  <label
                    key={grp}
                    className={`flex items-center gap-2.5 p-3 rounded-xl border text-sm cursor-pointer select-none transition ${
                      isSelected
                        ? 'border-[#0284c7] bg-[#f0f9ff] dark:bg-[#0369a1]/15 text-[#0369a1] dark:text-[#38bdf8] font-medium'
                        : 'border-[#e2e8f0] dark:border-[#332b26] text-[#475569] dark:text-[#94a3b8] hover:bg-[#f8fafc] dark:hover:bg-[#181b2e]'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => {
                        const next = isSelected
                          ? selectedList.filter((x) => x !== grp)
                          : [...selectedList, grp];
                        onChangeField('contentCategories', next);
                      }}
                      className="rounded text-[#0284c7] focus:ring-[#0284c7]"
                    />
                    <span>{grp}</span>
                  </label>
                );
              })}
            </div>
          </div>

          <div className="space-y-2 pt-2">
            <label className="block text-[15px] font-semibold text-[#0f172a] dark:text-[#f8fafc]">
              2. Bạn có muốn tự thay đổi nội dung trên website sau khi bàn giao không?
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {[
                'Có, tôi muốn tự quản trị nội dung dễ dàng',
                'Không, tôi muốn nhờ lập trình viên hỗ trợ khi có thay đổi',
                'Chưa rõ, cần được tư vấn'
              ].map((ans) => (
                <label
                  key={ans}
                  className={`flex items-center gap-2.5 p-3.5 rounded-xl border text-sm cursor-pointer select-none transition ${
                    formData.contentManagement === ans
                      ? 'border-[#0284c7] bg-[#f0f9ff] dark:bg-[#0369a1]/15 text-[#0369a1] dark:text-[#38bdf8] font-medium'
                      : 'border-[#e2e8f0] dark:border-[#332b26] text-[#475569] dark:text-[#94a3b8] hover:bg-[#f8fafc] dark:hover:bg-[#181b2e]'
                  }`}
                >
                  <input
                    type="radio"
                    name="websiteContentManagement"
                    checked={formData.contentManagement === ans}
                    onChange={() => onChangeField('contentManagement', ans)}
                    className="text-[#0284c7] focus:ring-[#0284c7]"
                  />
                  <span>{ans}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      )}
    </ProjectStepLayout>
  );
}
