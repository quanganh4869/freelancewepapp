import React from 'react';
import ProjectStepLayout from '../ProjectStepLayout';
import FormField from '../FormField';

const INTEGRATION_CATEGORIES = [
  {
    category: 'Liên hệ và giao tiếp',
    items: [
      'Zalo (nút chat nhanh hoặc Zalo OA)',
      'Email tự động',
      'Gmail hoặc Google Workspace',
      'Dịch vụ gửi tin nhắn SMS',
      'Công cụ chat / tư vấn trực tuyến'
    ]
  },
  {
    category: 'Thanh toán và kinh doanh',
    items: [
      'Cổng thanh toán trực tuyến (VNPay, MoMo, VietQR...)',
      'Dịch vụ vận chuyển / giao hàng',
      'Phần mềm quản lý bán hàng',
      'Phần mềm kế toán',
      'Hệ thống quản lý khách hàng (CRM)'
    ]
  },
  {
    category: 'Bản đồ và vị trí',
    items: [
      'Google Maps chỉ đường',
      'Dịch vụ bản đồ khác',
      'Định vị vị trí ngoài thực tế'
    ]
  },
  {
    category: 'Làm việc và dữ liệu',
    items: [
      'Đồng bộ với Google Sheets',
      'Lưu trữ file trên Google Drive',
      'Nhập xuất dữ liệu với file Excel',
      'Công cụ quản lý công việc (Trello, Notion...)',
      'Một hệ thống nội bộ đang sử dụng khác'
    ]
  }
];

const NO_INTEGRATION_KEY = 'Tôi chưa cần kết nối với công cụ nào';

/**
 * BƯỚC 6 – CÁC CÔNG CỤ VÀ DỊCH VỤ BẠN MUỐN KẾT NỐI (Tích hợp)
 */
export default function Step6Integrations({
  formData,
  onChangeField
}) {
  const selectedIntegrations = formData.integrations || [];
  const customIntegration = formData.customIntegration || '';
  const isNoIntegration = selectedIntegrations.includes(NO_INTEGRATION_KEY);

  const toggleIntegration = (item) => {
    if (item === NO_INTEGRATION_KEY) {
      if (isNoIntegration) {
        onChangeField('integrations', []);
      } else {
        onChangeField('integrations', [NO_INTEGRATION_KEY]);
      }
      return;
    }

    // Nếu chọn 1 công cụ khác thì bỏ lựa chọn "chưa cần kết nối"
    const nextList = selectedIntegrations.filter((x) => x !== NO_INTEGRATION_KEY);
    if (nextList.includes(item)) {
      onChangeField('integrations', nextList.filter((x) => x !== item));
    } else {
      onChangeField('integrations', [...nextList, item]);
    }
  };

  return (
    <ProjectStepLayout
      title="Bạn có muốn sản phẩm kết nối với những công cụ đang sử dụng không?"
      description="Nếu website hoặc hệ thống cần trao đổi thông tin với các công cụ quen thuộc hàng ngày, bạn có thể chọn ở đây. Nếu chưa rõ, hãy bỏ qua và tôi sẽ cùng bạn xác định sau."
    >
      {/* Mutual Exclusive Option: Chưa cần kết nối */}
      <div className="p-4 rounded-xl border border-[#cbd5e1] dark:border-[#332b26] bg-[#f8fafc] dark:bg-[#121422]">
        <label className="flex items-center gap-3 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={isNoIntegration}
            onChange={() => toggleIntegration(NO_INTEGRATION_KEY)}
            className="w-4 h-4 rounded text-[#0284c7] focus:ring-[#0284c7]"
          />
          <span className="text-sm font-bold text-[#0f172a] dark:text-[#f8fafc]">
            {NO_INTEGRATION_KEY}
          </span>
        </label>
        <p className="text-xs text-[#64748b] dark:text-[#94a3b8] mt-1 pl-7">
          Website / hệ thống sẽ hoạt động độc lập, không cần đồng bộ thêm với ứng dụng bên ngoài.
        </p>
      </div>

      {/* Danh sách 4 nhóm tích hợp */}
      <div className={`space-y-5 transition-opacity ${isNoIntegration ? 'opacity-40 pointer-events-none' : ''}`}>
        {INTEGRATION_CATEGORIES.map((cat) => (
          <div key={cat.category} className="space-y-2">
            <h4 className="text-[14px] font-bold text-[#0f172a] dark:text-[#f8fafc] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0284c7]" />
              {cat.category}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {cat.items.map((item) => (
                <label
                  key={item}
                  className={`flex items-center gap-2.5 p-3 rounded-xl border text-sm cursor-pointer select-none transition ${
                    selectedIntegrations.includes(item)
                      ? 'border-[#0284c7] bg-[#f0f9ff] dark:bg-[#0369a1]/15 text-[#0369a1] dark:text-[#38bdf8] font-medium'
                      : 'border-[#e2e8f0] dark:border-[#332b26] text-[#475569] dark:text-[#94a3b8] hover:bg-[#f8fafc] dark:hover:bg-[#181b2e]'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={selectedIntegrations.includes(item)}
                    onChange={() => toggleIntegration(item)}
                    disabled={isNoIntegration}
                    className="rounded text-[#0284c7] focus:ring-[#0284c7]"
                  />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Ô nhập công cụ khác */}
      <div className="pt-2 border-t border-[#f1f5f9] dark:border-[#1e2030]">
        <FormField label="Bạn có thể kể tên công cụ khác muốn kết nối (nếu có)">
          <input
            type="text"
            value={customIntegration}
            onChange={(e) => onChangeField('customIntegration', e.target.value)}
            disabled={isNoIntegration}
            placeholder="Ví dụ: Phần mềm bán hàng KiotViet, SAP, phần mềm quản lý phòng khám nội bộ..."
            className="w-full px-4 py-2.5 text-sm rounded-xl border border-[#cbd5e1] dark:border-[#332b26] bg-[#f8fafc] dark:bg-[#0f1120] text-[#0f172a] dark:text-[#f8fafc] focus:outline-none focus:ring-2 focus:ring-[#0284c7] disabled:opacity-50"
          />
        </FormField>
      </div>

      {/* Lựa chọn chưa rõ */}
      <label className="flex items-center gap-2.5 p-3 rounded-xl border border-[#0284c7]/30 bg-[#f0f9ff]/50 dark:bg-[#0369a1]/10 text-xs sm:text-sm text-[#0369a1] dark:text-[#38bdf8] cursor-pointer">
        <input
          type="checkbox"
          checked={formData.needIntegrationConsult || false}
          onChange={(e) => onChangeField('needIntegrationConsult', e.target.checked)}
          className="rounded text-[#0284c7] focus:ring-[#0284c7]"
        />
        <span>Tôi chưa rõ có cần kết nối hay không, cần được tư vấn giải pháp đơn giản nhất.</span>
      </label>
    </ProjectStepLayout>
  );
}
