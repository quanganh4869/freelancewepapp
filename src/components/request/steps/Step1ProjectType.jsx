import React from 'react';
import ProjectStepLayout from '../ProjectStepLayout';
import OptionCard from '../OptionCard';

const PROJECT_TYPES = [
  {
    id: 'landing_page',
    title: 'Landing Page bán hàng và giới thiệu',
    description: 'Một trang web tập trung giới thiệu sản phẩm, dịch vụ hoặc một chiến dịch cụ thể, giúp khách hàng tìm hiểu và liên hệ với bạn.',
    example: 'Trang giới thiệu khóa học, trang bán một sản phẩm, trang quảng bá sự kiện.'
  },
  {
    id: 'business_website',
    title: 'Website doanh nghiệp và dịch vụ',
    description: 'Website nhiều trang giúp khách hàng tìm hiểu về doanh nghiệp, sản phẩm, dịch vụ, thông tin liên hệ và hoạt động của bạn.',
    example: 'Công ty, cửa hàng, trung tâm đào tạo, doanh nghiệp dịch vụ.'
  },
  {
    id: 'ecommerce',
    title: 'Website bán hàng trực tuyến',
    description: 'Website cho phép khách hàng xem sản phẩm, tìm kiếm, đặt hàng và theo dõi đơn hàng.',
    example: 'Cửa hàng thời trang, mỹ phẩm, đồ gia dụng hoặc sản phẩm riêng.'
  },
  {
    id: 'personal_portfolio',
    title: 'Website cá nhân và hồ sơ năng lực',
    description: 'Không gian trực tuyến để giới thiệu bản thân, công việc, sản phẩm đã thực hiện và cách liên hệ với bạn.',
    example: 'Portfolio cá nhân, hồ sơ freelancer, website giới thiệu chuyên gia.'
  },
  {
    id: 'web_application',
    title: 'Web App và hệ thống quản lý theo yêu cầu',
    description: 'Một hệ thống có thể giúp bạn quản lý công việc, dữ liệu, khách hàng, nhân sự, quy trình hoặc hoạt động kinh doanh thay vì thực hiện thủ công.',
    example: 'Quản lý phòng cho thuê, quản lý đơn hàng, đặt lịch, quản lý nhân viên, hệ thống dành cho nhiều nhóm người dùng.',
    badge: 'Hệ thống chuyên sâu'
  },
  {
    id: 'existing_website',
    title: 'Nâng cấp hoặc cải thiện website hiện có',
    description: 'Bạn đã có website nhưng muốn thay đổi giao diện, bổ sung chức năng, cải thiện tốc độ hoặc sửa các vấn đề đang gặp phải.',
    example: 'Làm mới giao diện, thêm chức năng quản lý, sửa lỗi hoặc tối ưu website hiện tại.'
  }
];

/**
 * BƯỚC 1 – BẠN ĐANG MUỐN XÂY DỰNG ĐIỀU GÌ?
 */
export default function Step1ProjectType({ selectedType, onSelectType }) {
  return (
    <ProjectStepLayout
      title="Bạn đang muốn xây dựng điều gì?"
      description="Có nhiều loại website và hệ thống khác nhau. Hãy chọn phương án gần nhất với điều bạn đang cần. Nếu chưa chắc chắn, bạn có thể chọn phương án gần nhất."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {PROJECT_TYPES.map((type) => (
          <OptionCard
            key={type.id}
            type="radio"
            selected={selectedType === type.id}
            onClick={() => onSelectType(type.id)}
            title={type.title}
            description={type.description}
            example={type.example}
            badge={type.badge}
          />
        ))}
      </div>

      <div className="p-4 rounded-xl border border-[#e2e8f0] dark:border-[#2a2c3d] bg-[#f8fafc] dark:bg-[#121422] flex items-center gap-3 text-sm text-[#64748b] dark:text-[#94a3b8]">
        <svg className="w-5 h-5 text-[#0284c7] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>
          <strong>Bạn chưa biết nên chọn loại nào?</strong> Không sao, hãy chọn phương án gần nhất. Tôi sẽ cùng bạn phân tích và làm rõ giải pháp kỹ càng sau.
        </span>
      </div>
    </ProjectStepLayout>
  );
}
