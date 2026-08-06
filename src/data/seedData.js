export const INITIAL_SERVICES = [
  {
    id: 'custom-webapp',
    title: 'Custom Web App Development',
    titleVi: 'Phát Triển Web App Tùy Chỉnh',
    iconName: 'Code2',
    shortDesc: 'Xây dựng ứng dụng web được đo đạc riêng theo logic nghiệp vụ doanh nghiệp, tối ưu tốc độ và khả năng mở rộng.',
    description: 'Giải pháp phát triển phần mềm tùy chỉnh toàn diện cho doanh nghiệp. Chúng tôi không sử dụng các CMS cồng kềnh, mọi sản phẩm đều được phát triển dựa trên kiến trúc mã nguồn sạch, bảo mật cao và tương thích API.',
    deliverables: ['Kiến trúc Frontend React/Next.js mượt mà', 'Backend Node.js/PostgreSQL chuẩn REST/GraphQL', 'Cấu hình Docker & Deployment CI/CD', 'Tài liệu API & Hướng dẫn bàn giao'],
    badge: 'Phổ Biến Nhất'
  },
  {
    id: 'saas-dev',
    title: 'SaaS Product Development',
    titleVi: 'Phát Triển Sản Phẩm SaaS Platform',
    iconName: 'Layers',
    shortDesc: 'Thiết kế và lập trình phần mềm dạng dịch vụ (SaaS) đa người dùng (Multi-tenant) với hệ thống đăng ký gói cước.',
    description: 'Đồng hành cùng các Startup và Doanh nghiệp xây dựng sản phẩm B2B/B2C SaaS từ giai đoạn MVP đến khi scale hàng trăm nghìn người dùng hàng tháng.',
    deliverables: ['Hệ thống Phân quyền & Multi-tenancy', 'Tích hợp thanh toán tự động (Stripe/VNPay)', 'Trang quản trị Admin Center quản lý User', 'Hệ thống gửi Email thông báo tự động']
  },
  {
    id: 'dashboard-admin',
    title: 'Enterprise Dashboard & Admin System',
    titleVi: 'Hệ Thống Dashboard & Quản Trị',
    iconName: 'LayoutDashboard',
    shortDesc: 'Xây dựng bảng điều khiển quản trị dữ liệu thông minh, trực quan hóa biểu đồ và báo cáo gian real-time.',
    description: 'Tối ưu hóa quy trình vận hành doanh nghiệp với hệ thống Dashboard trực quan. Giúp ban quản lý theo dõi chỉ số KPI, doanh thu và vận hành theo thời gian thực.',
    deliverables: ['Trực quan hóa dữ liệu biểu đồ Recharts/ChartJS', 'Xuất báo cáo Excel/PDF tự động', 'Quản lý kho hàng & đơn hàng chi tiết', 'Phân quyền linh hoạt theo vị trí công việc']
  },
  {
    id: 'ecommerce-app',
    title: 'E-commerce Web Application',
    titleVi: 'Web App Thương Mại Điện Tử',
    iconName: 'ShoppingBag',
    shortDesc: 'Phát triển sàn bán hàng trực tuyến cao cấp, tích hợp giỏ hàng, thanh toán online và quản lý tồn kho.',
    description: 'Nâng tầm trải nghiệm mua sắm trực tuyến cho thương hiệu. Tốc độ tải trang dưới 1 giây giúp tối đa hóa tỷ lệ chuyển đổi đơn hàng.',
    deliverables: ['Giao diện UX/UI mua sắm mượt mà', 'Giỏ hàng & Cổng thanh toán trực tuyến', 'Bộ lọc tìm kiếm sản phẩm thông minh', 'Quản lý mã giảm giá & Khách hàng thân thiết']
  },
  {
    id: 'business-app',
    title: 'Business Workflow Application',
    titleVi: 'Ứng Dụng Số Hóa Vận Hành',
    iconName: 'Building2',
    shortDesc: 'Số hóa và tự động hóa các quy trình làm việc thủ công nội bộ của doanh nghiệp.',
    description: 'Giải quyết bài toán quản lý dữ liệu phân tán, tự động hóa luồng duyệt chứng từ và tối ưu hiệu suất làm việc của các phòng ban.',
    deliverables: ['Chuẩn hóa luồng làm việc tự động (Workflow)', 'Lưu trữ & Mã hóa tài liệu bảo mật', 'Thông báo thời gian thực qua WebSockets', 'Tích hợp cổng kết nối API bên thứ 3']
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Architecture & Prototyping',
    titleVi: 'Thiết Kế UI/UX & Prototype',
    iconName: 'Figma',
    shortDesc: 'Nghiên cứu hành vi người dùng, thiết kế Design System và dựng bản mẫu tương tác mượt mà.',
    description: 'Tạo dựng bộ nhận diện sản phẩm số nhất quán, sang trọng chuẩn Editorial Digital Product Studio. Đảm bảo người dùng yêu thích ngay từ lần chạm đầu tiên.',
    deliverables: ['Design System đồng bộ trên Figma', 'Wireframes & Interactive Prototype', 'Kiểm thử trải nghiệm người dùng (UX Test)', 'Bàn giao UI Kits & Icon Assets đầy đủ']
  }
];

export const INITIAL_PROJECTS = [
  {
    id: 'proj-1',
    title: 'OmniDesk — B2B Customer Success SaaS',
    client: 'OmniDesk Inc (Singapore)',
    category: 'SaaS',
    categoryLabel: 'SaaS Platform',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
    shortDesc: 'Nền tảng SaaS quản lý chăm sóc khách hàng tự động hóa với hệ thống Ticketing real-time và AI Chatbot.',
    fullDesc: 'OmniDesk là dự án SaaS B2B được Nexus Studio nghiên cứu & lập trình từ giai đoạn MVP. Nền tảng tích hợp hệ thống WebSockets xử lý hàng chục nghìn ticket phản hồi mỗi ngày, kết hợp thanh toán tự động Stripe.',
    techStack: ['React 18', 'Node.js', 'PostgreSQL', 'Redis', 'WebSockets', 'Stripe API'],
    metrics: ['99.99% Uptime', '15,000+ MAU', 'Tốc độ phản hồi 28ms'],
    liveUrl: 'https://omnidesk.example.com',
    year: '2026'
  },
  {
    id: 'proj-2',
    title: 'PayFlow — FinTech Analytics Dashboard',
    client: 'PayFlow Global Ltd',
    category: 'Dashboard',
    categoryLabel: 'Enterprise Dashboard',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80',
    shortDesc: 'Hệ thống Dashboard theo dõi giao dịch tài chính thời gian thực với biểu đồ trực quan hóa dữ liệu lớn.',
    fullDesc: 'PayFlow giúp các chuyên gia tài chính theo dõi luồng tiền, phát hiện giao dịch bất thường bằng thuật toán AI và xuất báo cáo tuân thủ chuẩn ISO 27001.',
    techStack: ['Next.js SSR', 'TypeScript', 'ChartJS', 'PostgreSQL', 'Docker'],
    metrics: ['Xử lý 1M+ g/dịch', 'Chuẩn ISO 27001', 'Tải dưới 0.8s'],
    liveUrl: 'https://payflow.example.com',
    year: '2025'
  },
  {
    id: 'proj-3',
    title: 'RetailX — Premium E-commerce Web App',
    client: 'RetailX Group',
    category: 'E-commerce',
    categoryLabel: 'Thương Mại Điện Tử',
    thumbnail: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?auto=format&fit=crop&w=1000&q=80',
    shortDesc: 'Web App mua sắm thời trang cao cấp với trải nghiệm mượt mà, tích hợp thanh toán Momo & VNPay.',
    fullDesc: 'RetailX mang đến trải nghiệm mua sắm chuẩn 5 sao với bộ lọc sản phẩm cực nhanh, thanh toán 1-click và đồng bộ tồn kho tự động với kho hàng thực tế.',
    techStack: ['React', 'Node.js', 'Redis Cache', 'VNPay API', 'Momo Gateway'],
    metrics: ['Tăng 145% Conversion', 'Thanh toán 1-Click', 'Chuẩn SEO Google'],
    liveUrl: 'https://retailx.example.com',
    year: '2025'
  },
  {
    id: 'proj-4',
    title: 'MediCare — Digital Health Workspace',
    client: 'MediCare Vietnam',
    category: 'Business Web App',
    categoryLabel: 'Ứng Dụng Doanh Nghiệp',
    thumbnail: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80',
    shortDesc: 'Hệ thống số hóa hồ sơ y tế, đặt lịch khám trực tuyến và quản lý phòng khám chuyên khoa.',
    fullDesc: 'Ứng dụng Web quản lý toàn bộ quy trình tiếp nhận bệnh nhân, lưu trữ hồ sơ bệnh án mã hóa bảo mật và kết nối bác sĩ với bệnh nhân qua video call.',
    techStack: ['React', 'Express.js', 'PostgreSQL', 'WebRTC', 'AWS S3'],
    metrics: ['Mã hóa bảo mật HIPAA', 'Video Call 4K', '50,000+ Hồ sơ'],
    liveUrl: 'https://medicare.example.com',
    year: '2026'
  }
];

export const INITIAL_REQUESTS = [
  {
    id: 'REQ-89421',
    clientName: 'Marcus Vance',
    clientEmail: 'marcus@vancetech.io',
    clientPhone: '+84 908 123 456',
    clientCompany: 'Vance Corp',
    projectName: 'Xây Dựng Nền Tảng SaaS OmniDesk B2B',
    projectType: 'SaaS',
    projectDescription: 'Yêu cầu thiết kế kiến trúc phần mềm và lập trình trọn gói sản phẩm SaaS B2B quản lý khách hàng tích hợp AI Chatbot và Stripe.',
    mainFeatures: 'Multi-tenant, Phân quyền Role, WebSockets Ticketing, Stripe Payment, AI Chatbot',
    targetUsers: 'Đội ngũ chăm sóc khách hàng doanh nghiệp.',
    budget: '$5,000 – $10,000',
    timeline: '2–3 months',
    referenceWebsites: 'https://zendesk.com, https://intercom.com',
    preferredTechnologies: 'React, Node.js, PostgreSQL, Redis',
    additionalNotes: 'Cần hoàn thiện bản MVP trong vòng 8 tuần.',
    status: 'In Progress',
    submittedAt: '2026-08-01T09:30:00Z',
    updatedAt: '2026-08-04T14:20:00Z',
    internalNotes: 'Khách hàng đã ký hợp đồng MVP $8,500 & tạm ứng 30%. Đã hoàn tất thiết kế Wireframe trên Figma.'
  },
  {
    id: 'REQ-89422',
    clientName: 'Dr. Linh Nguyen',
    clientEmail: 'linh.nguyen@medicare.vn',
    clientPhone: '+84 912 888 999',
    clientCompany: 'MediCare Vietnam',
    projectName: 'Hệ Thống Web App Quản Lý Phòng Khám MediCare',
    projectType: 'Business Web App',
    projectDescription: 'Số hóa quy trình đặt lịch khám trực tuyến, quản lý bệnh án điện tử và báo cáo doanh thu phòng khám.',
    mainFeatures: 'Đặt lịch online, Quản lý hồ sơ bệnh án mã hóa, Dashboard báo cáo real-time',
    targetUsers: 'Bệnh nhân và đội ngũ bác sĩ.',
    budget: '$3,000 – $5,000',
    timeline: '1–2 months',
    referenceWebsites: '',
    preferredTechnologies: 'React, Node.js, PostgreSQL',
    additionalNotes: 'Cần tuân thủ mã hóa dữ liệu người dùng.',
    status: 'Reviewing',
    submittedAt: '2026-08-03T11:15:00Z',
    updatedAt: '2026-08-04T08:00:00Z',
    internalNotes: 'Đã gửi báo giá sơ bộ $4,200. Đang chờ họp phê duyệt với BQT MediCare.'
  },
  {
    id: 'REQ-89423',
    clientName: 'Trần Hoàng',
    clientEmail: 'hoang.tran@autoparts.vn',
    clientPhone: '+84 987 654 321',
    clientCompany: 'AutoParts Vietnam Group',
    projectName: 'Web App Thương Mại Điện Tử Phụ Tùng Ô Tô B2B',
    projectType: 'E-commerce',
    projectDescription: 'Phát triển nền tảng đặt hàng phụ tùng ô tô sỉ cho đại lý toàn quốc với bộ lọc tra cứu mã phụ tùng cực nhanh.',
    mainFeatures: 'Tra cứu mã OEM, Giỏ hàng B2B, Thanh toán VNPay, Đồng bộ tồn kho ERP',
    targetUsers: '500+ đại lý phụ tùng trên toàn quốc.',
    budget: '$5,000 – $10,000',
    timeline: '2–3 months',
    referenceWebsites: '',
    preferredTechnologies: 'Next.js, Node.js, Redis',
    additionalNotes: 'Cần kết nối API với hệ thống MISA ERP sẵn có.',
    status: 'Pending',
    submittedAt: '2026-08-05T16:45:00Z',
    updatedAt: '2026-08-05T16:45:00Z',
    internalNotes: 'Yêu cầu báo giá mới gửi chiều qua. Cần hẹn trao đổi trực tiếp với anh Hoàng.'
  },
  {
    id: 'REQ-89424',
    clientName: 'Sarah Chen',
    clientEmail: 'sarah@eduskills.studio',
    clientPhone: '+84 903 555 123',
    clientCompany: 'EduSkills Studio',
    projectName: 'Hệ Thống Dashboard Quản Lý Khóa Học Online',
    projectType: 'Dashboard',
    projectDescription: 'Xây dựng trang quản trị khóa học, theo dõi học viên và tự động xuất chứng chỉ học tập.',
    mainFeatures: 'Dashboard theo dõi tiến độ, Xuất chứng chỉ PDF, Tích hợp Zoom API',
    targetUsers: 'Học viên và giảng viên trực tuyến.',
    budget: '$1,000 – $3,000',
    timeline: '1–2 months',
    referenceWebsites: '',
    preferredTechnologies: 'React, TailwindCSS, Express.js',
    additionalNotes: 'Đã hoàn thành bàn giao 100%.',
    status: 'Completed',
    submittedAt: '2026-06-10T10:00:00Z',
    updatedAt: '2026-07-28T17:30:00Z',
    internalNotes: 'Đã hoàn tất nghiệm thu & bàn giao mã nguồn.'
  }
];

export const DEMO_USERS = {
  client: {
    id: 'user-client-1',
    name: 'Marcus Vance',
    email: 'marcus@vancetech.io',
    role: 'USER',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    company: 'Vance Corp'
  },
  admin: {
    id: 'user-admin-1',
    name: 'Quang Anh (Admin)',
    email: 'quanganhqb04@gmail.com',
    role: 'ADMIN',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    company: 'Nexus Digital Studio'
  }
};

export const INITIAL_USERS = [
  {
    id: 'USR-101',
    name: 'Marcus Vance',
    email: 'marcus@vancetech.io',
    company: 'Vance Corp',
    role: 'USER',
    joinedAt: '2026-07-01T08:00:00Z',
    requestsCount: 1,
    status: 'Active'
  },
  {
    id: 'USR-102',
    name: 'Dr. Linh Nguyen',
    email: 'linh.nguyen@medicare.vn',
    company: 'MediCare Vietnam',
    role: 'USER',
    joinedAt: '2026-07-12T10:30:00Z',
    requestsCount: 1,
    status: 'Active'
  },
  {
    id: 'USR-103',
    name: 'Trần Hoàng',
    email: 'hoang.tran@autoparts.vn',
    company: 'AutoParts Vietnam Group',
    role: 'USER',
    joinedAt: '2026-08-01T14:20:00Z',
    requestsCount: 1,
    status: 'Active'
  },
  {
    id: 'USR-104',
    name: 'Sarah Chen',
    email: 'sarah@eduskills.studio',
    company: 'EduSkills Studio',
    role: 'USER',
    joinedAt: '2026-05-20T09:00:00Z',
    requestsCount: 1,
    status: 'Active'
  },
  {
    id: 'USR-001',
    name: 'Quang Anh (Admin)',
    email: 'quanganhqb04@gmail.com',
    company: 'Nexus Digital Studio',
    role: 'ADMIN',
    joinedAt: '2026-01-01T00:00:00Z',
    requestsCount: 0,
    status: 'Active'
  }
];
