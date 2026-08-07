export const INITIAL_SERVICES = [
  {
    id: 'personal-web',
    title: 'Website Cá Nhân & Portfolio',
    titleVi: 'Website Cá Nhân & Portfolio',
    iconName: 'User',
    shortDesc: 'CV online, trang cá nhân, profile uy tín giúp bạn tạo ấn tượng chuyên nghiệp với tuyển dụng và đối tác.',
    description: 'Thiết kế trang cá nhân đẹp mắt, gọn gàng, hiển thị hoàn hảo trên điện thoại và máy tính.',
    forWhom: 'Sinh viên, Freelancer, Chuyên gia, Cá nhân cần xây dựng thương hiệu',
    timeline: '5 – 7 ngày',
    priceStarting: 'Từ 1.000.000đ',
    deliverables: ['1 – 3 Trang giao diện tùy chỉnh', 'Tối ưu hiển thị điện thoại (Responsive)', 'Tích hợp Form liên hệ & Mạng xã hội', 'Bàn giao mã nguồn & Hướng dẫn sử dụng'],
    badge: 'Tiết Kiệm'
  },
  {
    id: 'landing-page',
    title: 'Landing Page Bán Hàng & Giới Thiệu',
    titleVi: 'Landing Page Bán Hàng & Giới Thiệu',
    iconName: 'Layout',
    shortDesc: 'Trang đích tập trung giới thiệu sản phẩm, dịch vụ, khóa học hoặc sự kiện để tối đa hóa lượt chuyển đổi.',
    description: 'Thiết kế giao diện bắt mắt, tốc độ tải dưới 1s, giúp thu hút và thúc đẩy khách hàng hành động.',
    forWhom: 'Cửa hàng online, Chủ khóa học, Campaign khuyến mãi, Sản phẩm mới',
    timeline: '5 – 7 ngày',
    priceStarting: 'Từ 1.500.000đ',
    deliverables: ['Giao diện Landing Page chuẩn conversion', 'Nút gọi điện & Zalo chat nhanh 1-click', 'Form thu thập thông tin khách hàng', 'Tối ưu tốc độ tải trang cực nhanh'],
    badge: 'Hot'
  },
  {
    id: 'business-store',
    title: 'Website Doanh Nghiệp & Bán Hàng',
    titleVi: 'Website Doanh Nghiệp & Bán Hàng',
    iconName: 'ShoppingBag',
    shortDesc: 'Website giới thiệu công ty, dịch vụ hoặc shop bán hàng đơn giản với danh mục sản phẩm và tin tức.',
    description: 'Trang web đầy đủ chức năng giới thiệu doanh nghiệp, danh mục sản phẩm và tin tức giúp khẳng định uy tín thương hiệu.',
    forWhom: 'Doanh nghiệp nhỏ, Shop bán hàng, Spa, Nhà hàng, Dịch vụ tận nơi',
    timeline: '1 – 2 tuần',
    priceStarting: 'Từ 2.000.000đ – 5.000.000đ',
    deliverables: ['Giao diện 5 – 10 trang hoàn chỉnh', 'Danh mục sản phẩm & Giỏ hàng đơn giản', 'Trang tin tức / Bài viết chuẩn SEO', 'Trang quản trị cập nhật nội dung dễ dàng']
  },
  {
    id: 'custom-webapp',
    title: 'Web App & Dashboard Theo Yêu Cầu',
    titleVi: 'Web App & Dashboard Theo Yêu Cầu',
    iconName: 'Code2',
    shortDesc: 'Hệ thống quản lý nhỏ, đặt lịch, đăng ký dịch vụ, dashboard hoặc tính năng riêng theo ý tưởng của bạn.',
    description: 'Lập trình chức năng tùy chỉnh theo đúng bài toán kinh doanh riêng của bạn với database và bảo mật an toàn.',
    forWhom: 'Startup nhỏ, Chủ shop cần quản lý đơn, Dịch vụ đặt lịch hẹn',
    timeline: '2 – 4 tuần+',
    priceStarting: 'Từ 5.000.000đ+',
    deliverables: ['Lập trình tính năng riêng theo yêu cầu', 'Hệ thống Quản trị Dashboard & Database', 'Đăng nhập / Phân quyền người dùng', 'Tích hợp API & Bảo trì hỗ trợ lâu dài']
  }
];

export const INITIAL_PROJECTS = [
  {
    id: 'proj-1',
    title: 'Portfolio & Profile Kiến Trúc Sư Cá Nhân',
    client: 'KTS. Minh Hoàng',
    category: 'Personal',
    categoryLabel: 'Website Cá Nhân',
    thumbnail: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1000&q=80',
    shortDesc: 'Website cá nhân hiển thị bộ sưu tập công trình kiến trúc, thông tin tiểu sử và form nhận tư vấn thiết kế.',
    fullDesc: 'Dự án website cá nhân cho KTS Minh Hoàng với phong cách tối giản, tôn lên các bộ sưu tập hình ảnh công trình và thông tin liên hệ trực tiếp qua Zalo/Email.',
    techStack: ['React', 'TailwindCSS', 'Vite'],
    priceTag: '1.500.000đ',
    duration: '5 ngày',
    liveUrl: 'https://minhhoang-architecture.demo',
    year: '2026'
  },
  {
    id: 'proj-2',
    title: 'Landing Page Giới Thiệu Khóa Học Tiếng Anh',
    client: 'English Master Hub',
    category: 'Landing Page',
    categoryLabel: 'Landing Page',
    thumbnail: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80',
    shortDesc: 'Landing page giới thiệu chương trình học giao tiếp với form đăng ký học thử và countdown ưu đãi.',
    fullDesc: 'Trang đích tối ưu cho chiến dịch quảng cáo Facebook/Google Ads, giúp trung tâm tiếng Anh tăng 120% lượng học viên đăng ký tư vấn.',
    techStack: ['HTML5', 'TailwindCSS', 'JavaScript', 'Google Sheet API'],
    priceTag: '2.000.000đ',
    duration: '6 ngày',
    liveUrl: 'https://englishmaster.demo',
    year: '2026'
  },
  {
    id: 'proj-3',
    title: 'Website Shop Thời Trang HandMade Organic',
    client: 'Mây Handmade Shop',
    category: 'E-commerce',
    categoryLabel: 'Website Bán Hàng',
    thumbnail: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80',
    shortDesc: 'Website giới thiệu danh mục sản phẩm thủ công, bảng màu vải và nút đặt hàng nhanh qua Zalo.',
    fullDesc: 'Thiết kế tone màu ấm áp phù hợp sản phẩm thủ công. Khách xem sản phẩm và bấm chốt đơn nhanh qua Zalo tiện lợi.',
    techStack: ['React', 'TailwindCSS', 'Node.js API'],
    priceTag: '3.500.000đ',
    duration: '10 ngày',
    liveUrl: 'https://mayhandmade.demo',
    year: '2025'
  },
  {
    id: 'proj-4',
    title: 'Web App Đặt Lịch Hẹn & Quản Lý Spa Nét Việt',
    client: 'Nét Việt Spa',
    category: 'Web App',
    categoryLabel: 'Web App Đặt Lịch',
    thumbnail: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80',
    shortDesc: 'Hệ thống web app giúp khách hàng chọn giờ làm đẹp trực tuyến và trang quản trị lịch hẹn cho chủ Spa.',
    fullDesc: 'Giải pháp số hóa giúp spa giảm 80% tình trạng trùng lịch. Chủ spa quản lý danh sách kỹ thuật viên và lịch hẹn ngay trên điện thoại.',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'TailwindCSS'],
    priceTag: '6.000.000đ',
    duration: '3 tuần',
    liveUrl: 'https://netvietspa.demo',
    year: '2026'
  }
];

export const PRICING_TIERS = [
  {
    id: 'basic',
    name: 'Gói Cơ Bản',
    priceText: 'Từ 1.000.000đ',
    priceNumber: 1000000,
    subtitle: 'Phù hợp cho website cá nhân, CV online hoặc landing page giới thiệu ngắn.',
    duration: 'Thời gian: 5 – 7 ngày',
    badge: 'Tiết Kiệm',
    features: [
      '1 – 3 Trang giao diện tùy chỉnh',
      'Tối ưu hiển thị điện thoại (Responsive)',
      'Tối ưu tốc độ tải trang cực nhanh',
      'Form liên hệ gửi về Email / Zalo',
      'Hướng dẫn quản trị & Bàn giao mã nguồn',
      'Bảo hành kỹ thuật 6 tháng'
    ]
  },
  {
    id: 'standard',
    name: 'Gói Tiêu Chuẩn',
    priceText: 'Từ 2.000.000đ – 5.000.000đ',
    priceNumber: 3000000,
    subtitle: 'Phù hợp cho công ty nhỏ, shop bán hàng hoặc trang dịch vụ chuyên nghiệp.',
    duration: 'Thời gian: 1 – 2 tuần',
    badge: 'Phổ Biến Nhất',
    isPopular: true,
    features: [
      'Giao diện 5 – 10 trang hoàn chỉnh',
      'Thiết kế UI/UX theo yêu cầu riêng',
      'Danh mục sản phẩm / Dịch vụ / Tin tức',
      'Nút gọi điện & chat Zalo 1-click',
      'Tối ưu chuẩn SEO Google cơ bản',
      'Trang quản trị cập nhật bài viết / sản phẩm',
      'Bảo hành kỹ thuật 12 tháng'
    ]
  },
  {
    id: 'custom',
    name: 'Gói Tùy Chỉnh / Web App',
    priceText: 'Từ 5.000.000đ+',
    priceNumber: 5000000,
    subtitle: 'Phù hợp cho ứng dụng web có chức năng riêng như đặt lịch, quản lý, dashboard...',
    duration: 'Thời gian: 2 – 4 tuần+',
    badge: 'Chuyên Sâu',
    features: [
      'Lập trình Web App / Dashboard theo yêu cầu',
      'Cơ sở dữ liệu Database & Bảo mật',
      'Hệ thống Đăng nhập / Phân quyền người dùng',
      'Tích hợp thanh toán online / API bên thứ 3',
      'Tự động hóa quy trình nghiệp vụ',
      'Bảo trì & Hỗ trợ kỹ thuật lâu dài'
    ]
  }
];

export const INITIAL_REQUESTS = [
  {
    id: 'REQ-101',
    clientName: 'Anh Tuấn',
    clientEmail: 'tuan.design@gmail.com',
    clientPhone: '0908123456',
    clientCompany: 'Cá nhân',
    projectName: 'Làm Website Portfolio Cá Nhân',
    projectType: 'Website cá nhân',
    projectDescription: 'Cần làm trang portfolio cá nhân trình bày dự án thiết kế nội thất và form nhận yêu cầu tư vấn.',
    mainFeatures: 'Trang chủ, Bộ sưu tập ảnh, Form liên hệ, Zalo button',
    targetUsers: 'Khách hàng cá nhân làm nhà',
    budget: '1 – 2 Triệu VNĐ',
    timeline: '1 tuần',
    referenceWebsites: 'https://example.com',
    preferredTechnologies: 'React, TailwindCSS',
    additionalNotes: 'Cần hoàn thành trước cuối tuần.',
    status: 'In Progress',
    submittedAt: '2026-08-01T09:30:00Z',
    updatedAt: '2026-08-04T14:20:00Z',
    internalNotes: 'Đã nhận cọc 50%. Đang tiến hành ghép giao diện.'
  },
  {
    id: 'REQ-102',
    clientName: 'Chị Mai',
    clientEmail: 'mai.spa@gmail.com',
    clientPhone: '0912888999',
    clientCompany: 'Mây Spa',
    projectName: 'Website Giới Thiệu Spa & Đặt Lịch Hẹn',
    projectType: 'Web App nhỏ',
    projectDescription: 'Cần trang web giới thiệu spa và chức năng khách chọn dịch vụ chốt lịch hẹn gửi về Zalo/Email.',
    mainFeatures: 'Bảng giá dịch vụ, Đặt lịch online, Bản đồ chỉ đường',
    targetUsers: 'Khách hàng làm đẹp',
    budget: '3 – 5 Triệu VNĐ',
    timeline: '1–2 tuần',
    referenceWebsites: '',
    preferredTechnologies: 'React, Node.js',
    additionalNotes: '',
    status: 'Pending',
    submittedAt: '2026-08-05T16:45:00Z',
    updatedAt: '2026-08-05T16:45:00Z',
    internalNotes: 'Đã hẹn trao đổi yêu cầu chi tiết qua Zalo.'
  }
];

export const DEMO_USERS = {
  client: {
    id: 'user-client-1',
    name: 'Anh Tuấn',
    email: 'tuan.design@gmail.com',
    role: 'USER',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    company: 'Khách hàng cá nhân'
  },
  admin: {
    id: 'user-admin-1',
    name: 'Quang Anh (Freelancer)',
    email: 'quanganhqb04@gmail.com',
    role: 'ADMIN',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    company: 'Quang Anh Freelancer'
  }
};

export const INITIAL_USERS = [
  {
    id: 'USR-101',
    name: 'Anh Tuấn',
    email: 'tuan.design@gmail.com',
    company: 'Khách hàng cá nhân',
    role: 'USER',
    joinedAt: '2026-07-01T08:00:00Z',
    requestsCount: 1,
    status: 'Active'
  },
  {
    id: 'USR-102',
    name: 'Chị Mai',
    email: 'mai.spa@gmail.com',
    company: 'Mây Spa',
    role: 'USER',
    joinedAt: '2026-07-12T10:30:00Z',
    requestsCount: 1,
    status: 'Active'
  },
  {
    id: 'USR-001',
    name: 'Quang Anh (Admin)',
    email: 'quanganhqb04@gmail.com',
    company: 'Quang Anh Freelancer',
    role: 'ADMIN',
    joinedAt: '2026-01-01T00:00:00Z',
    requestsCount: 0,
    status: 'Active'
  }
];
