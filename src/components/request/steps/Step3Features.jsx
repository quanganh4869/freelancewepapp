import React, { useState } from 'react';
import ProjectStepLayout from '../ProjectStepLayout';
import FormField from '../FormField';

/**
 * BƯỚC 3 – BẠN MUỐN SẢN PHẨM CÓ NHỮNG CHỨC NĂNG GÌ?
 * Phân nhánh hoàn toàn theo loại dự án đã chọn ở Bước 1
 */
export default function Step3Features({
  requestType,
  formData,
  onChangeField
}) {
  const selectedFeatures = formData.features || [];
  const customFeatures = formData.customFeatures || '';
  const [openWebAppModules, setOpenWebAppModules] = useState({
    1: true,
    2: true,
    3: true,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false
  });

  const toggleFeature = (featTitle) => {
    if (selectedFeatures.includes(featTitle)) {
      onChangeField('features', selectedFeatures.filter((f) => f !== featTitle));
    } else {
      onChangeField('features', [...selectedFeatures, featTitle]);
    }
  };

  const toggleAllInModule = (moduleFeatures) => {
    const allSelected = moduleFeatures.every((f) => selectedFeatures.includes(f));
    if (allSelected) {
      onChangeField(
        'features',
        selectedFeatures.filter((f) => !moduleFeatures.includes(f))
      );
    } else {
      const merged = Array.from(new Set([...selectedFeatures, ...moduleFeatures]));
      onChangeField('features', merged);
    }
  };

  const toggleAccordion = (modNum) => {
    setOpenWebAppModules((prev) => ({ ...prev, [modNum]: !prev[modNum] }));
  };

  return (
    <ProjectStepLayout
      title="Bạn muốn website hoặc hệ thống có thể làm những việc gì?"
      description="Chọn những tính năng gần với nhu cầu của bạn. Bạn không cần hiểu cách chúng được lập trình. Chúng ta chỉ cần xác định công việc mà sản phẩm cần hỗ trợ."
    >
      {/* ================= A. LANDING PAGE ================= */}
      {requestType === 'landing_page' && (
        <div className="space-y-6">
          {/* Nhóm 1: Nội dung trên trang */}
          <div className="space-y-2">
            <label className="block text-[15px] font-semibold text-[#0f172a] dark:text-[#f8fafc]">
              1. Bạn muốn những nội dung nào xuất hiện trên trang?
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                'Giới thiệu sản phẩm hoặc dịch vụ',
                'Giới thiệu lợi ích và điểm nổi bật',
                'Hình ảnh, video hoặc bộ sưu tập thực tế',
                'Bảng giá hoặc các gói dịch vụ',
                'Cảm nhận và đánh giá từ khách hàng (Testimonials)',
                'Câu hỏi thường gặp (FAQ)',
                'Thông tin doanh nghiệp và liên hệ',
                'Các nội dung riêng khác'
              ].map((item) => (
                <label
                  key={item}
                  className={`flex items-center gap-2.5 p-3 rounded-xl border text-sm cursor-pointer transition select-none ${
                    selectedFeatures.includes(item)
                      ? 'border-[#0284c7] bg-[#f0f9ff] dark:bg-[#0369a1]/15 text-[#0369a1] dark:text-[#38bdf8] font-medium'
                      : 'border-[#e2e8f0] dark:border-[#332b26] text-[#475569] dark:text-[#94a3b8] hover:bg-[#f8fafc] dark:hover:bg-[#181b2e]'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={selectedFeatures.includes(item)}
                    onChange={() => toggleFeature(item)}
                    className="rounded text-[#0284c7] focus:ring-[#0284c7]"
                  />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Nhóm 2: Hành động khách hàng */}
          <div className="space-y-2 pt-2">
            <label className="block text-[15px] font-semibold text-[#0f172a] dark:text-[#f8fafc]">
              2. Khách hàng có thể thực hiện những hành động nào trên trang?
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                'Nhấn nút gọi điện trực tiếp',
                'Điền form gửi thông tin tư vấn',
                'Nhấn nút nhắn tin nhanh qua Zalo',
                'Liên hệ trực tiếp qua Email',
                'Đặt lịch hẹn tư vấn trực tuyến',
                'Đặt mua sản phẩm trực tiếp',
                'Chỉ xem thông tin'
              ].map((act) => (
                <label
                  key={act}
                  className={`flex items-center gap-2.5 p-3 rounded-xl border text-sm cursor-pointer transition select-none ${
                    selectedFeatures.includes(act)
                      ? 'border-[#0284c7] bg-[#f0f9ff] dark:bg-[#0369a1]/15 text-[#0369a1] dark:text-[#38bdf8] font-medium'
                      : 'border-[#e2e8f0] dark:border-[#332b26] text-[#475569] dark:text-[#94a3b8] hover:bg-[#f8fafc] dark:hover:bg-[#181b2e]'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={selectedFeatures.includes(act)}
                    onChange={() => toggleFeature(act)}
                    className="rounded text-[#0284c7] focus:ring-[#0284c7]"
                  />
                  <span>{act}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Nhóm 3: Trọng tâm */}
          <div className="space-y-2 pt-2">
            <label className="block text-[15px] font-semibold text-[#0f172a] dark:text-[#f8fafc]">
              3. Bạn muốn trang web tập trung vào điều gì nhất?
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                'Giúp người xem hiểu rõ về sản phẩm / dịch vụ',
                'Khuyến khích khách hàng để lại thông tin tư vấn',
                'Tăng số lượng đơn đặt mua hàng',
                'Giúp khách đặt lịch hẹn hoặc đăng ký tham gia'
              ].map((foc) => (
                <label
                  key={foc}
                  className={`flex items-center gap-2.5 p-3 rounded-xl border text-sm cursor-pointer transition select-none ${
                    formData.landingFocus === foc
                      ? 'border-[#0284c7] bg-[#f0f9ff] dark:bg-[#0369a1]/15 text-[#0369a1] dark:text-[#38bdf8] font-medium'
                      : 'border-[#e2e8f0] dark:border-[#332b26] text-[#475569] dark:text-[#94a3b8] hover:bg-[#f8fafc] dark:hover:bg-[#181b2e]'
                  }`}
                >
                  <input
                    type="radio"
                    name="landingFocus"
                    checked={formData.landingFocus === foc}
                    onChange={() => onChangeField('landingFocus', foc)}
                    className="text-[#0284c7] focus:ring-[#0284c7]"
                  />
                  <span>{foc}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ================= B. WEBSITE DOANH NGHIỆP ================= */}
      {requestType === 'business_website' && (
        <div className="space-y-6">
          {/* Nhóm 1: Các trang muốn có */}
          <div className="space-y-2">
            <label className="block text-[15px] font-semibold text-[#0f172a] dark:text-[#f8fafc]">
              1. Bạn muốn website có những trang nội dung nào?
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {[
                'Trang chủ',
                'Giới thiệu doanh nghiệp',
                'Dịch vụ / Sản phẩm',
                'Dự án hoặc khách hàng tiêu biểu',
                'Tin tức / Bài viết chia sẻ',
                'Tuyển dụng',
                'Liên hệ & Bản đồ chỉ đường',
                'Câu hỏi thường gặp',
                'Trang riêng theo nhu cầu'
              ].map((pg) => (
                <label
                  key={pg}
                  className={`flex items-center gap-2.5 p-3 rounded-xl border text-sm cursor-pointer transition select-none ${
                    selectedFeatures.includes(pg)
                      ? 'border-[#0284c7] bg-[#f0f9ff] dark:bg-[#0369a1]/15 text-[#0369a1] dark:text-[#38bdf8] font-medium'
                      : 'border-[#e2e8f0] dark:border-[#332b26] text-[#475569] dark:text-[#94a3b8] hover:bg-[#f8fafc] dark:hover:bg-[#181b2e]'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={selectedFeatures.includes(pg)}
                    onChange={() => toggleFeature(pg)}
                    className="rounded text-[#0284c7] focus:ring-[#0284c7]"
                  />
                  <span>{pg}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Nhóm 2: Tự cập nhật nội dung */}
          <div className="space-y-2 pt-2">
            <label className="block text-[15px] font-semibold text-[#0f172a] dark:text-[#f8fafc]">
              2. Bạn có muốn tự cập nhật nội dung website sau khi bàn giao không?
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {[
                'Có. Tôi muốn tự thay đổi nội dung, hình ảnh và bài viết.',
                'Không. Tôi muốn nhờ người phát triển cập nhật khi cần.',
                'Tôi chưa rõ, cần được tư vấn.'
              ].map((cms) => (
                <label
                  key={cms}
                  className={`flex items-start gap-2.5 p-3 rounded-xl border text-sm cursor-pointer transition select-none ${
                    formData.contentManagement === cms
                      ? 'border-[#0284c7] bg-[#f0f9ff] dark:bg-[#0369a1]/15 text-[#0369a1] dark:text-[#38bdf8] font-medium'
                      : 'border-[#e2e8f0] dark:border-[#332b26] text-[#475569] dark:text-[#94a3b8] hover:bg-[#f8fafc] dark:hover:bg-[#181b2e]'
                  }`}
                >
                  <input
                    type="radio"
                    name="contentManagement"
                    checked={formData.contentManagement === cms}
                    onChange={() => onChangeField('contentManagement', cms)}
                    className="mt-0.5 text-[#0284c7] focus:ring-[#0284c7]"
                  />
                  <span>{cms}</span>
                </label>
              ))}
            </div>
            {formData.contentManagement?.startsWith('Có') && (
              <p className="text-xs text-[#0284c7] bg-[#f0f9ff] dark:bg-[#0369a1]/15 p-2.5 rounded-lg border border-[#0284c7]/20">
                💡 Bạn sẽ được bàn giao khu vực quản trị trực quan bằng tiếng Việt để dễ dàng đổi ảnh, sửa chữ, đăng bài viết mà không cần biết code.
              </p>
            )}
          </div>

          {/* Nhóm 3: Chức năng bổ sung */}
          <div className="space-y-2 pt-2">
            <label className="block text-[15px] font-semibold text-[#0f172a] dark:text-[#f8fafc]">
              3. Các chức năng tiện ích bổ sung:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                'Biểu mẫu liên hệ gửi về Email',
                'Đăng ký nhận bản tin',
                'Đặt lịch tư vấn trực tuyến',
                'Tìm kiếm nội dung',
                'Hỗ trợ nhiều ngôn ngữ (Anh/Việt)',
                'Tích hợp bản đồ Google Maps',
                'Nút gọi điện & Zalo 1-chạm',
                'Chức năng tiện ích khác'
              ].map((f) => (
                <label
                  key={f}
                  className={`flex items-center gap-2 p-2.5 rounded-xl border text-xs cursor-pointer transition select-none ${
                    selectedFeatures.includes(f)
                      ? 'border-[#0284c7] bg-[#f0f9ff] dark:bg-[#0369a1]/15 text-[#0369a1] dark:text-[#38bdf8] font-medium'
                      : 'border-[#e2e8f0] dark:border-[#332b26] text-[#475569] dark:text-[#94a3b8] hover:bg-[#f8fafc] dark:hover:bg-[#181b2e]'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={selectedFeatures.includes(f)}
                    onChange={() => toggleFeature(f)}
                    className="rounded text-[#0284c7] focus:ring-[#0284c7]"
                  />
                  <span>{f}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ================= C. WEBSITE BÁN HÀNG ================= */}
      {requestType === 'ecommerce' && (
        <div className="space-y-6">
          {/* Số lượng sản phẩm */}
          <div className="space-y-2">
            <label className="block text-[15px] font-semibold text-[#0f172a] dark:text-[#f8fafc]">
              1. Bạn dự kiến có khoảng bao nhiêu sản phẩm?
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
              {[
                'Dưới 20 sản phẩm',
                '20 – 100 sản phẩm',
                '100 – 500 sản phẩm',
                'Trên 500 sản phẩm',
                'Chưa xác định'
              ].map((qty) => (
                <label
                  key={qty}
                  className={`flex items-center gap-2 p-2.5 rounded-xl border text-xs sm:text-sm cursor-pointer select-none transition ${
                    formData.productCount === qty
                      ? 'border-[#0284c7] bg-[#f0f9ff] dark:bg-[#0369a1]/15 text-[#0369a1] dark:text-[#38bdf8] font-semibold'
                      : 'border-[#e2e8f0] dark:border-[#332b26] text-[#475569] dark:text-[#94a3b8] hover:bg-[#f8fafc] dark:hover:bg-[#181b2e]'
                  }`}
                >
                  <input
                    type="radio"
                    name="productCount"
                    checked={formData.productCount === qty}
                    onChange={() => onChangeField('productCount', qty)}
                    className="text-[#0284c7] focus:ring-[#0284c7]"
                  />
                  <span>{qty}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Quy trình mua hàng */}
          <div className="space-y-2 pt-2">
            <label className="block text-[15px] font-semibold text-[#0f172a] dark:text-[#f8fafc]">
              2. Khách hàng sẽ mua sản phẩm như thế nào?
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                'Xem sản phẩm rồi gọi điện hoặc nhắn tin đặt hàng',
                'Thêm sản phẩm vào giỏ hàng và gửi đơn hàng (COD / Chuyển khoản)',
                'Đặt hàng và thanh toán trực tuyến qua cổng thanh toán',
                'Tôi cần được tư vấn giải pháp tối ưu chi phí nhất'
              ].map((flow) => (
                <label
                  key={flow}
                  className={`flex items-center gap-2.5 p-3 rounded-xl border text-sm cursor-pointer select-none transition ${
                    formData.orderFlow === flow
                      ? 'border-[#0284c7] bg-[#f0f9ff] dark:bg-[#0369a1]/15 text-[#0369a1] dark:text-[#38bdf8] font-medium'
                      : 'border-[#e2e8f0] dark:border-[#332b26] text-[#475569] dark:text-[#94a3b8] hover:bg-[#f8fafc] dark:hover:bg-[#181b2e]'
                  }`}
                >
                  <input
                    type="radio"
                    name="orderFlow"
                    checked={formData.orderFlow === flow}
                    onChange={() => onChangeField('orderFlow', flow)}
                    className="text-[#0284c7] focus:ring-[#0284c7]"
                  />
                  <span>{flow}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Các chức năng bán hàng cụ thể */}
          <div className="space-y-2 pt-2">
            <label className="block text-[15px] font-semibold text-[#0f172a] dark:text-[#f8fafc]">
              3. Những chức năng bạn muốn có trên website bán hàng:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
              {[
                'Danh sách và chi tiết sản phẩm',
                'Tìm kiếm và bộ lọc sản phẩm',
                'Phân loại danh mục sản phẩm',
                'Giỏ hàng trực tuyến',
                'Theo dõi trạng thái đơn hàng',
                'Quản lý đơn hàng (Admin)',
                'Quản lý số lượng tồn kho',
                'Áp dụng mã giảm giá (Voucher)',
                'Quản lý danh sách khách hàng',
                'Đánh giá & nhận xét sản phẩm',
                'Thống kê doanh thu cơ bản',
                'Tự động gửi email xác nhận'
              ].map((feat) => (
                <label
                  key={feat}
                  className={`flex items-center gap-2 p-2.5 rounded-xl border text-xs cursor-pointer select-none transition ${
                    selectedFeatures.includes(feat)
                      ? 'border-[#0284c7] bg-[#f0f9ff] dark:bg-[#0369a1]/15 text-[#0369a1] dark:text-[#38bdf8] font-medium'
                      : 'border-[#e2e8f0] dark:border-[#332b26] text-[#475569] dark:text-[#94a3b8] hover:bg-[#f8fafc] dark:hover:bg-[#181b2e]'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={selectedFeatures.includes(feat)}
                    onChange={() => toggleFeature(feat)}
                    className="rounded text-[#0284c7] focus:ring-[#0284c7]"
                  />
                  <span>{feat}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ================= D. WEBSITE CÁ NHÂN ================= */}
      {requestType === 'personal_portfolio' && (
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="block text-[15px] font-semibold text-[#0f172a] dark:text-[#f8fafc]">
              1. Bạn muốn giới thiệu những thông tin gì về bản thân?
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                'Giới thiệu bản thân & chặng đường',
                'Kinh nghiệm làm việc',
                'Kỹ năng chuyên môn',
                'Dự án thực tế đã thực hiện',
                'Sản phẩm hoặc dịch vụ nhận làm',
                'Bài viết hoặc chia sẻ chuyên môn',
                'Thông tin liên hệ & Mạng xã hội',
                'Nút tải CV / Hồ sơ năng lực PDF'
              ].map((info) => (
                <label
                  key={info}
                  className={`flex items-center gap-2 p-3 rounded-xl border text-xs sm:text-sm cursor-pointer select-none transition ${
                    selectedFeatures.includes(info)
                      ? 'border-[#0284c7] bg-[#f0f9ff] dark:bg-[#0369a1]/15 text-[#0369a1] dark:text-[#38bdf8] font-medium'
                      : 'border-[#e2e8f0] dark:border-[#332b26] text-[#475569] dark:text-[#94a3b8] hover:bg-[#f8fafc] dark:hover:bg-[#181b2e]'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={selectedFeatures.includes(info)}
                    onChange={() => toggleFeature(info)}
                    className="rounded text-[#0284c7] focus:ring-[#0284c7]"
                  />
                  <span>{info}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-2 pt-2">
            <label className="block text-[15px] font-semibold text-[#0f172a] dark:text-[#f8fafc]">
              2. Mục đích chính của website:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {[
                'Tìm kiếm cơ hội việc làm tốt hơn',
                'Xây dựng thương hiệu cá nhân chuyên gia',
                'Tìm kiếm khách hàng tự do (Freelance)',
                'Giới thiệu dịch vụ và sản phẩm riêng',
                'Lưu trữ và trưng bày các dự án đã làm'
              ].map((goal) => (
                <label
                  key={goal}
                  className={`flex items-center gap-2.5 p-3 rounded-xl border text-sm cursor-pointer select-none transition ${
                    formData.portfolioGoal === goal
                      ? 'border-[#0284c7] bg-[#f0f9ff] dark:bg-[#0369a1]/15 text-[#0369a1] dark:text-[#38bdf8] font-medium'
                      : 'border-[#e2e8f0] dark:border-[#332b26] text-[#475569] dark:text-[#94a3b8] hover:bg-[#f8fafc] dark:hover:bg-[#181b2e]'
                  }`}
                >
                  <input
                    type="radio"
                    name="portfolioGoal"
                    checked={formData.portfolioGoal === goal}
                    onChange={() => onChangeField('portfolioGoal', goal)}
                    className="text-[#0284c7] focus:ring-[#0284c7]"
                  />
                  <span>{goal}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ================= E. WEB APP / HỆ THỐNG QUẢN LÝ (KHAI THÁC NGHIỆP VỤ 10 NHÓM) ================= */}
      {requestType === 'web_application' && (
        <div className="space-y-6">
          <div className="p-4 rounded-xl bg-[#0284c7]/10 dark:bg-[#0284c7]/20 border border-[#0284c7]/30 text-sm">
            <p className="font-semibold text-[#0284c7] dark:text-[#38bdf8] mb-1">
              ✨ Khai thác chức năng hệ thống Web App
            </p>
            <p className="text-xs text-[#475569] dark:text-[#94a3b8] leading-relaxed">
              Dưới đây là 8 nhóm chức năng phổ biến trong các hệ thống quản lý. Hãy đánh dấu vào những việc bạn muốn hệ thống tự động xử lý thay cho công việc thủ công.
            </p>
          </div>

          {/* 8 Accordion Module Groups */}
          {[
            {
              id: 1,
              title: 'Nhóm 1 – Tài khoản và người sử dụng',
              sub: 'Quản lý ai được vào hệ thống và vai trò của họ',
              items: [
                'Người dùng có thể đăng nhập bằng tài khoản riêng',
                'Có nhiều nhóm người dùng với quyền hạn khác nhau',
                'Khu vực quản lý riêng dành cho người phụ trách / chủ',
                'Có thể khóa hoặc kích hoạt tài khoản nhân viên',
                'Theo dõi lịch sử hoạt động và lượt truy cập'
              ]
            },
            {
              id: 2,
              title: 'Nhóm 2 – Quản lý thông tin và dữ liệu',
              sub: 'Lưu trữ và tìm kiếm các thông tin cốt lõi',
              items: [
                'Lưu trữ thông tin khách hàng (Họ tên, SĐT, lịch sử)',
                'Quản lý sản phẩm, phòng ốc hoặc thiết bị',
                'Quản lý hồ sơ nhân viên',
                'Quản lý danh mục dữ liệu theo nhóm',
                'Tìm kiếm, lọc và sắp xếp dữ liệu linh hoạt',
                'Nhập hoặc xuất dữ liệu qua file Excel'
              ]
            },
            {
              id: 3,
              title: 'Nhóm 3 – Quản lý công việc và quy trình',
              sub: 'Phân công, phê duyệt và theo dõi tiến độ',
              items: [
                'Giao việc trực tiếp cho từng nhân viên hoặc bộ phận',
                'Theo dõi tiến độ công việc theo thời gian thực',
                'Quy trình phê duyệt hoặc từ chối yêu cầu',
                'Theo dõi lịch sử xử lý từng bước của công việc',
                'Tạo lịch làm việc và nhắc việc khi sắp đến hạn',
                'Theo dõi trạng thái hoàn thành công việc'
              ]
            },
            {
              id: 4,
              title: 'Nhóm 4 – Quản lý tài chính và thanh toán',
              sub: 'Theo dõi thu chi, công nợ và doanh thu',
              items: [
                'Theo dõi các khoản tiền thu vào',
                'Theo dõi các khoản chi phí phát sinh',
                'Quản lý công nợ khách hàng và đối tác',
                'Xuất hóa đơn hoặc biên lai',
                'Quản lý các khoản phí định kỳ (tiền phòng, điện nước)',
                'Ghi nhận lịch sử thanh toán chi tiết',
                'Thanh toán trực tuyến nếu cần'
              ]
            },
            {
              id: 5,
              title: 'Nhóm 5 – Báo cáo và thống kê số liệu',
              sub: 'Biểu đồ trực quan và số liệu tổng hợp',
              items: [
                'Bảng điều khiển tổng quan (Dashboard)',
                'Thống kê theo ngày, tháng, năm',
                'Báo cáo doanh thu và chi phí',
                'Báo cáo hiệu suất công việc nhân viên',
                'Biểu đồ trực quan so sánh qua các thời kỳ',
                'Xuất báo cáo PDF hoặc Excel'
              ]
            },
            {
              id: 6,
              title: 'Nhóm 6 – Lịch và đặt lịch hẹn',
              sub: 'Quản lý khung giờ và thời gian sử dụng',
              items: [
                'Đặt lịch hẹn trực tuyến cho khách hàng',
                'Quản lý lịch phòng, tài sản hoặc thiết bị',
                'Kiểm tra tự động khung giờ còn trống',
                'Tự động gửi tin nhắc lịch hẹn',
                'Cho phép thay đổi hoặc hủy lịch hẹn'
              ]
            },
            {
              id: 7,
              title: 'Nhóm 7 – Trao đổi và thông báo',
              sub: 'Giao tiếp nội bộ và cập nhật tin tức',
              items: [
                'Thông báo ngay trong hệ thống (Chuông thông báo)',
                'Thông báo tự động qua Email',
                'Thông báo khi có công việc mới hoặc trạng thái thay đổi',
                'Trao đổi, nhắn tin giữa các thành viên',
                'Gửi và đính kèm tài liệu trao đổi'
              ]
            },
            {
              id: 8,
              title: 'Nhóm 8 – Định vị và hoạt động thực tế',
              sub: 'Bản đồ, địa điểm và định vị công việc',
              items: [
                'Hiển thị vị trí cơ sở / chi nhánh trên bản đồ',
                'Quản lý danh sách địa điểm phục vụ',
                'Theo dõi tuyến đường hoặc lịch trình di chuyển',
                'Ghi nhận trạng thái hoàn thành tại điểm đến'
              ]
            }
          ].map((mod) => {
            const isOpen = openWebAppModules[mod.id];
            const selectedCountInMod = mod.items.filter((item) =>
              selectedFeatures.includes(item)
            ).length;

            return (
              <div
                key={mod.id}
                className="rounded-xl border border-[#e2e8f0] dark:border-[#2a2c3d] bg-white dark:bg-[#121422] overflow-hidden shadow-sm"
              >
                {/* Header Accordion */}
                <button
                  type="button"
                  onClick={() => toggleAccordion(mod.id)}
                  className="w-full p-4 text-left flex items-center justify-between gap-3 hover:bg-[#f8fafc] dark:hover:bg-[#181b2e] transition"
                >
                  <div>
                    <h4 className="text-[15px] font-bold text-[#0f172a] dark:text-[#f8fafc]">
                      {mod.title}
                    </h4>
                    <p className="text-xs text-[#64748b] dark:text-[#94a3b8] mt-0.5">
                      {mod.sub}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    {selectedCountInMod > 0 && (
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#e0f2fe] dark:bg-[#0284c7]/20 text-[#0284c7]">
                        {selectedCountInMod}/{mod.items.length} đã chọn
                      </span>
                    )}
                    <svg
                      className={`w-4 h-4 text-[#64748b] transition-transform ${isOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                {/* Body Accordion */}
                {isOpen && (
                  <div className="p-4 pt-0 border-t border-[#f1f5f9] dark:border-[#1e2030] bg-[#fafafa]/50 dark:bg-[#0b0c16]/50 space-y-2.5">
                    <div className="flex justify-end pt-2">
                      <button
                        type="button"
                        onClick={() => toggleAllInModule(mod.items)}
                        className="text-xs text-[#0284c7] font-semibold hover:underline"
                      >
                        {mod.items.every((item) => selectedFeatures.includes(item))
                          ? 'Bỏ chọn cả nhóm'
                          : 'Chọn toàn bộ nhóm này'}
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {mod.items.map((item) => (
                        <label
                          key={item}
                          className={`flex items-start gap-2.5 p-2.5 rounded-lg border text-xs sm:text-sm cursor-pointer select-none transition ${
                            selectedFeatures.includes(item)
                              ? 'border-[#0284c7] bg-[#f0f9ff] dark:bg-[#0369a1]/15 text-[#0369a1] dark:text-[#38bdf8] font-medium'
                              : 'border-[#e2e8f0] dark:border-[#332b26] text-[#475569] dark:text-[#94a3b8] hover:bg-[#ffffff] dark:hover:bg-[#181b2e]'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={selectedFeatures.includes(item)}
                            onChange={() => toggleFeature(item)}
                            className="mt-0.5 rounded text-[#0284c7] focus:ring-[#0284c7]"
                          />
                          <span className="leading-snug">{item}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {/* Nhóm 9: Tính năng riêng (Textarea) */}
          <div className="space-y-2 pt-2">
            <label className="block text-[15px] font-semibold text-[#0f172a] dark:text-[#f8fafc]">
              Nhóm 9 – Có công việc nào bạn muốn hệ thống thực hiện nhưng chưa thấy trong danh sách?
            </label>
            <textarea
              rows={3}
              maxLength={1500}
              value={customFeatures}
              onChange={(e) => onChangeField('customFeatures', e.target.value)}
              placeholder="Ví dụ: Tôi muốn khi khách thanh toán tiền phòng thì hệ thống tự động cập nhật trạng thái đã thanh toán và gửi tin nhắn Zalo kèm hóa đơn cho khách..."
              className="w-full px-4 py-2.5 text-sm rounded-xl border border-[#cbd5e1] dark:border-[#332b26] bg-[#f8fafc] dark:bg-[#0f1120] text-[#0f172a] dark:text-[#f8fafc] focus:outline-none focus:ring-2 focus:ring-[#0284c7]"
            />
          </div>

          {/* Nhóm 10: Chưa rõ chức năng */}
          <label className="flex items-center gap-2.5 p-3.5 rounded-xl border border-[#0284c7]/40 bg-[#f0f9ff]/70 dark:bg-[#0369a1]/15 text-sm text-[#0369a1] dark:text-[#38bdf8] cursor-pointer">
            <input
              type="checkbox"
              checked={formData.needConsultation || false}
              onChange={(e) => onChangeField('needConsultation', e.target.checked)}
              className="rounded text-[#0284c7] focus:ring-[#0284c7]"
            />
            <span className="font-semibold">
              Tôi chưa biết rõ cần những chức năng gì. Tôi muốn mô tả công việc hiện tại để được tư vấn thiết kế giải pháp phù hợp nhất.
            </span>
          </label>
        </div>
      )}

      {/* ================= F. NÂNG CẤP WEBSITE HIỆN CÓ ================= */}
      {requestType === 'existing_website' && (
        <div className="space-y-6">
          <FormField label="Địa chỉ website hiện tại của bạn" required>
            <input
              type="url"
              value={formData.existingWebsiteUrl || ''}
              onChange={(e) => onChangeField('existingWebsiteUrl', e.target.value)}
              placeholder="https://tenmiencuaban.com"
              className="w-full px-4 py-2.5 text-sm rounded-xl border border-[#cbd5e1] dark:border-[#332b26] bg-[#f8fafc] dark:bg-[#0f1120] text-[#0f172a] dark:text-[#f8fafc] focus:outline-none focus:ring-2 focus:ring-[#0284c7]"
            />
          </FormField>

          <div className="space-y-2">
            <label className="block text-[15px] font-semibold text-[#0f172a] dark:text-[#f8fafc]">
              Bạn muốn cải thiện những phần nào trên website?
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                'Giao diện cũ, chưa chuyên nghiệp hoặc lỗi thời',
                'Website hiển thị chưa tốt hoặc bị vỡ trên điện thoại di động',
                'Website tải chậm, mở trang lâu hơn 3 giây',
                'Có lỗi chức năng hoặc các nút bấm không hoạt động',
                'Muốn bổ sung thêm các chức năng mới',
                'Muốn thêm các trang nội dung mới',
                'Muốn có khu vực quản trị tự sửa nội dung dễ dàng',
                'Muốn chuyển sang hệ thống công nghệ mới hiện đại hơn',
                'Vấn đề khác'
              ].map((prob) => (
                <label
                  key={prob}
                  className={`flex items-center gap-2.5 p-3 rounded-xl border text-sm cursor-pointer select-none transition ${
                    selectedFeatures.includes(prob)
                      ? 'border-[#0284c7] bg-[#f0f9ff] dark:bg-[#0369a1]/15 text-[#0369a1] dark:text-[#38bdf8] font-medium'
                      : 'border-[#e2e8f0] dark:border-[#332b26] text-[#475569] dark:text-[#94a3b8] hover:bg-[#f8fafc] dark:hover:bg-[#181b2e]'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={selectedFeatures.includes(prob)}
                    onChange={() => toggleFeature(prob)}
                    className="rounded text-[#0284c7] focus:ring-[#0284c7]"
                  />
                  <span>{prob}</span>
                </label>
              ))}
            </div>
          </div>

          <FormField label="Bạn muốn website sau khi nâng cấp sẽ hoạt động như thế nào?">
            <textarea
              rows={4}
              value={formData.upgradeNotes || ''}
              onChange={(e) => onChangeField('upgradeNotes', e.target.value)}
              placeholder="Hãy mô tả những điểm bạn muốn thay đổi hoặc những điều đang gây khó khăn khi sử dụng website hiện tại..."
              className="w-full px-4 py-2.5 text-sm rounded-xl border border-[#cbd5e1] dark:border-[#332b26] bg-[#f8fafc] dark:bg-[#0f1120] text-[#0f172a] dark:text-[#f8fafc] focus:outline-none focus:ring-2 focus:ring-[#0284c7]"
            />
          </FormField>
        </div>
      )}
    </ProjectStepLayout>
  );
}
