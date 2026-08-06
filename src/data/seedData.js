export const INITIAL_SERVICES = [
  {
    id: 'custom-webapp',
    title: 'Custom Web App Development',
    titleVi: 'Phát triển Web App Chuyên Sâu',
    iconName: 'Code2',
    shortDesc: 'Xây dựng ứng dụng web tùy chỉnh theo yêu cầu kinh doanh phức tạp, từ kiến trúc đến triển khai.',
    description: 'Chúng tôi thiết kế và xây dựng các Web App hiệu năng cao từ con số 0. Tối ưu hóa cho quy mô lớn, tính năng phức tạp và độ tin cậy tuyệt đối.',
    deliverables: ['Kiến trúc Frontend & Backend', 'CSDL tối ưu hóa', 'Bảo mật chuẩn Enterprise', 'Tích hợp CI/CD deployment'],
    badge: 'Phổ biến nhất'
  },
  {
    id: 'saas-dev',
    title: 'SaaS Platform Development',
    titleVi: 'Phát Triển Nền Tảng SaaS',
    iconName: 'Layers',
    shortDesc: 'Biến mô hình kinh doanh phần mềm thành sản phẩm SaaS đa người dùng (Multi-tenant) sẵn sàng thương mại.',
    description: 'Giải pháp trọn gói xây dựng ứng dụng SaaS: Phân quyền đa cấp, thanh toán đăng ký (Subscription), quản lý Org, Billing & User Analytics.',
    deliverables: ['Multi-tenant Architecture', 'Stripe / PayOS Billing', 'User Management & RBAC', 'Analytics Dashboard']
  },
  {
    id: 'dashboard-admin',
    title: 'Dashboard & Admin System',
    titleVi: 'Hệ Thống Dashboard & Admin',
    iconName: 'LayoutDashboard',
    shortDesc: 'Bảng điều khiển dữ liệu trực quan, báo cáo thời gian thực và công cụ quản trị nội bộ tối ưu UX.',
    description: 'Thiết kế hệ thống Admin chuyên nghiệp với khả năng hiển thị biểu đồ dữ liệu lớn, quản lý quyền hạn chi tiết và xử lý dữ liệu chuẩn xác.',
    deliverables: ['Data Visualization', 'Export PDF/Excel', 'Real-time WebSockets', 'Audit Log & History']
  },
  {
    id: 'ecommerce-app',
    title: 'E-commerce Web App',
    titleVi: 'Web App Thương Mại Điện Tử',
    iconName: 'ShoppingBag',
    shortDesc: 'Nền tảng bán hàng thương mại điện tử chuyên sâu với trải nghiệm giỏ hàng và thanh toán mượt mà.',
    description: 'Xây dựng trải nghiệm mua sắm mượt như app bản địa. Tích hợp cổng thanh toán tự động, quản lý kho hàng và đơn hàng thời gian thực.',
    deliverables: ['Custom Checkout Engine', 'Inventory Sync', 'Payment Gateway Integration', 'Mobile-Optimized PWA']
  },
  {
    id: 'business-app',
    title: 'Business Web Application',
    titleVi: 'Web App Quản Lý Doanh Nghiệp',
    iconName: 'Building2',
    shortDesc: 'Chuyển đổi số quy trình vận hành, quản lý nhân sự, CRM và ERP nội bộ doanh nghiệp.',
    description: 'Tự động hóa các thao tác thủ công phức tạp thành quy trình trên Web App với phân quyền chặt chẽ, tối ưu năng suất làm việc.',
    deliverables: ['Quy trình Workflow tự động', 'Tích hợp Email/SMS OTP', 'Phân quyền phòng ban', 'Báo cáo hiệu suất']
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design & Architecture',
    titleVi: 'Thiết Kế Giao Diện UI/UX',
    iconName: 'Figma',
    shortDesc: 'Nghiên cứu người dùng, thiết kế Design System và Wireframe prototype sắc nét cho Web App.',
    description: 'Thiết kế giao diện chuẩn Editorial & Product Studio. Chú trọng trải nghiệm người dùng thực tế, luồng thao tác ngắn nhất và tính thẩm mỹ vượt trội.',
    deliverables: ['Figma Design System', 'Interactive Prototype', 'User Journey Map', 'Design Token Handoff']
  },
  {
    id: 'api-integration',
    title: 'API & System Integration',
    titleVi: 'Tích Hợp API & Hệ Thống',
    iconName: 'Cpu',
    shortDesc: 'Kết nối Web App với các hệ thống bên thứ 3 (Payment, CRM, AI Models, Cloud Services).',
    description: 'Xây dựng RESTful / GraphQL API chắc chắn. Tích hợp OpenAPI, kết nối hệ thống legacy cũ với ứng dụng web hiện đại.',
    deliverables: ['RESTful / GraphQL APIs', 'Third-party Webhooks', 'High Performance Caching', 'API Documentation']
  },
  {
    id: 'sla-maintenance',
    title: 'Web App SLA & Maintenance',
    titleVi: 'Bảo Trì & Nâng Cấp Web App',
    iconName: 'ShieldCheck',
    shortDesc: 'Hỗ trợ kỹ thuật dài hạn, giám sát Uptime 99.9%, cập nhật bảo mật và tối ưu tốc độ.',
    description: 'Cam kết đồng hành cùng doanh nghiệp sau khi bàn giao. Đảm bảo ứng dụng hoạt động liên tục, ổn định và sẵn sàng mở rộng khi truy cập tăng đột biến.',
    deliverables: ['24/7 Server Monitoring', 'Security Patches', 'Performance Tuning', 'Dedicated Support Line']
  }
];

export const INITIAL_PROJECTS = [
  {
    id: 'proj-1',
    title: 'FinTech Pulse Engine',
    client: 'Apex Global Financials',
    category: 'Dashboard',
    categoryLabel: 'Bảng Điều Khiển Tài Chính',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
    shortDesc: 'Nền tảng giám sát giao dịch tài chính B2B thời gian thực với xử lý hơn 100,000 giao dịch/giây.',
    fullDesc: 'FinTech Pulse được thiết kế để giải quyết bài toán hiển thị và cảnh báo biến động giao dịch tức thì cho các tổ chức tài chính. Hệ thống kết nối dữ liệu Stream qua WebSockets, hiển thị đồ thị nến và biểu đồ heat-map trực quan.',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'WebSockets', 'TailwindCSS'],
    metrics: ['99.99% Uptime', '< 40ms Latency', '100k+ TPS'],
    liveUrl: 'https://example.com/fintech-pulse',
    year: '2026'
  },
  {
    id: 'proj-2',
    title: 'Nova Commerce Headless Platform',
    client: 'Nova Retail Group',
    category: 'E-commerce',
    categoryLabel: 'Thương Mại Điện Tử',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80',
    shortDesc: 'Hệ thống thương mại điện tử đa quốc gia tích hợp Headless CMS và Stripe Custom Checkout.',
    fullDesc: 'Dự án biến đổi trải nghiệm mua sắm trực tuyến cho Nova Group. Kiến trúc tách rời Frontend (React/Next) và Backend giúp tải trang dưới 0.8 giây, gia tăng tỷ lệ chuyển đổi đơn hàng thêm 34%.',
    techStack: ['React', 'Next.js', 'GraphQL', 'Stripe API', 'TailwindCSS'],
    metrics: ['+34% Conversion', '0.7s Load Time', '12 Countries Supported'],
    liveUrl: 'https://example.com/nova-commerce',
    year: '2025'
  },
  {
    id: 'proj-3',
    title: 'HealthSync EHR Workspace',
    client: 'MediCare Health Alliance',
    category: 'Business Web App',
    categoryLabel: 'Ứng Dụng Doanh Nghiệp',
    thumbnail: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80',
    shortDesc: 'Web App quản lý hồ sơ bệnh án điện tử & lịch trình bác sĩ chuẩn mã hóa HIPAA.',
    fullDesc: 'HealthSync tối ưu hóa quy trình tiếp nhận và quản lý dữ liệu bệnh nhân cho hệ thống 15 phòng khám. Giao diện được tinh chỉnh loại bỏ mọi thao tác thừa, giúp bác sĩ tiết kiệm 45 phút mỗi ngày.',
    techStack: ['React', 'TypeScript', 'Node.js', 'Docker', 'PostgreSQL'],
    metrics: ['HIPAA Certified', '15 Clinics Onboarded', '45m Saved/Doctor/Day'],
    liveUrl: 'https://example.com/healthsync',
    year: '2025'
  },
  {
    id: 'proj-4',
    title: 'CloudScale AI Workbench',
    client: 'ScaleLabs Inc',
    category: 'SaaS',
    categoryLabel: 'Nền Tảng SaaS',
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80',
    shortDesc: 'SaaS Web App thử nghiệm và quản lý các prompt LLM cùng luồng xử lý dữ liệu AI.',
    fullDesc: 'Studio tương tác dành cho các kỹ sư AI thử nghiệm, so sánh kết quả và triển khai các API LLM. Tính năng chia sẻ không gian làm việc và kiểm soát chi phí API theo thời gian thực.',
    techStack: ['React', 'Python FastAPI', 'Redis', 'TailwindCSS', 'Docker'],
    metrics: ['50k Active Devs', '1M+ API Calls/Day', 'Enterprise SSO'],
    liveUrl: 'https://example.com/cloudscale',
    year: '2026'
  }
];

export const INITIAL_REQUESTS = [
  {
    id: 'REQ-89421',
    clientName: 'Marcus Vance',
    clientEmail: 'marcus@vancetech.io',
    clientPhone: '+84 908 123 456',
    clientCompany: 'Vance Tech Corp',
    projectName: 'OmniDesk B2B SaaS Platform',
    projectType: 'SaaS',
    projectDescription: 'Chúng tôi muốn phát triển nền tảng SaaS quản lý CSKH đa kênh (Email, Zalo, Messenger, LiveChat) tập trung vào một giao diện Web App duy nhất.',
    mainFeatures: 'Multi-tenant routing, Real-time inbox WebSockets, Billing & Subscription via Stripe, Role-based team permission, Analytics dashboard',
    targetUsers: 'Các doanh nghiệp vừa và nhỏ (SMBs) có đội ngũ hỗ trợ từ 5 - 50 nhân viên.',
    budget: '$5,000 – $10,000',
    timeline: '2–3 months',
    referenceWebsites: 'https://intercom.com, https://crisp.chat',
    preferredTechnologies: 'React, Node.js, PostgreSQL, WebSockets',
    additionalNotes: 'Cần hoàn thành phiên bản MVP để pitch vòng Seed trong quý 4.',
    status: 'In Progress',
    submittedAt: '2026-08-01T09:30:00Z',
    updatedAt: '2026-08-04T14:20:00Z',
    internalNotes: 'Khách hàng đã chốt hợp đồng & thanh toán 40% đợt 1. Đã hoàn thành Figma UI System và đang làm Sprint 2 API Backend.'
  },
  {
    id: 'REQ-89422',
    clientName: 'Dr. Linh Nguyen',
    clientEmail: 'linh.nguyen@medicare.vn',
    clientPhone: '+84 912 888 999',
    clientCompany: 'MediCare Vietnam',
    projectName: 'MediCare Specialist Portal',
    projectType: 'Dashboard',
    projectDescription: 'Xây dựng Bảng điều khiển quản lý lịch hẹn tư vấn sức khỏe từ xa và kết nối kết quả xét nghiệm cho bệnh nhân.',
    mainFeatures: 'Lịch hẹn thông minh, Tích hợp Video Call WebRTC, Nhập kết quả cận lâm sàng, Xuất báo cáo PDF',
    targetUsers: 'Bác sĩ chuyên khoa và điều dưỡng viên tại trung tâm y tế.',
    budget: '$3,000 – $5,000',
    timeline: '1–2 months',
    referenceWebsites: 'https://docplanner.com',
    preferredTechnologies: 'React, TailwindCSS, WebRTC',
    additionalNotes: 'Cần đảm bảo tiêu chuẩn bảo mật dữ liệu y tế.',
    status: 'Reviewing',
    submittedAt: '2026-08-03T11:15:00Z',
    updatedAt: '2026-08-04T08:00:00Z',
    internalNotes: 'Đã gửi bản đề xuất kiến trúc System Architecture & báo giá chi tiết $4,500. Đang chờ phản hồi từ Giám đốc Y khoa.'
  },
  {
    id: 'REQ-89423',
    clientName: 'Trần Hoàng',
    clientEmail: 'hoang.tran@autoparts.vn',
    clientPhone: '+84 987 654 321',
    clientCompany: 'AutoParts Vietnam Group',
    projectName: 'AutoFlow ERP Inventory Web App',
    projectType: 'Business Web App',
    projectDescription: 'Ứng dụng quản lý kho hàng và chuỗi cung ứng phụ tùng ô tô trên 12 chi nhánh toàn quốc.',
    mainFeatures: 'Quản lý mã QR/Barcode kho, Cảnh báo tồn kho tối thiểu, Đồng bộ đơn hàng chi nhánh, Phân quyền thủ kho & kế toán',
    targetUsers: '120 nhân viên kho, nhân viên thu mua và ban quản lý.',
    budget: '$10,000+',
    timeline: 'ASAP',
    referenceWebsites: '',
    preferredTechnologies: 'React, Node.js/Golang, PostgreSQL',
    additionalNotes: 'Yêu cầu tốc độ quét mã vạch và tải danh mục 50,000 sản phẩm thật mượt.',
    status: 'Pending',
    submittedAt: '2026-08-05T16:45:00Z',
    updatedAt: '2026-08-05T16:45:00Z',
    internalNotes: 'Yêu cầu mới gửi chiều qua. Cần sắp xếp cuộc họp Discovery với anh Hoàng trước Thứ 6.'
  },
  {
    id: 'REQ-89424',
    clientName: 'Sarah Chen',
    clientEmail: 'sarah@eduskills.studio',
    clientPhone: '+84 903 555 123',
    clientCompany: 'EduSkills Studio',
    projectName: 'EduLearn Micro-Learning Hub',
    projectType: 'E-commerce',
    projectDescription: 'Nền tảng bán khóa học video tương tác và cấp chứng chỉ tự động cho học viên công nghệ.',
    mainFeatures: 'Trình phát video bảo mật chống tải lậu, Thanh toán VNPay / MoMo, Kiểm tra trắc nghiệm, Cấp chứng chỉ PDF tự động',
    targetUsers: 'Học viên cá nhân và các nhóm đào tạo doanh nghiệp.',
    budget: '$3,000 – $5,000',
    timeline: '3–6 months',
    referenceWebsites: 'https://coursera.org, https://masterclass.com',
    preferredTechnologies: 'React, Next.js, AWS S3/CloudFront',
    additionalNotes: 'Đã hoàn thành và chạy chính thức rất ổn định.',
    status: 'Completed',
    submittedAt: '2026-06-10T10:00:00Z',
    updatedAt: '2026-07-28T17:30:00Z',
    internalNotes: 'Đã bàn giao mã nguồn & hoàn tất thanh toán đợt cuối. Đã chuyển sang gói SLA Bảo trì 12 tháng.'
  },
  {
    id: 'REQ-89425',
    clientName: 'Alex Miller',
    clientEmail: 'alex@apextrading.net',
    clientPhone: '+1 415 999 1234',
    clientCompany: 'Apex Trading',
    projectName: 'Crypto Bot Dashboard',
    projectType: 'Other',
    projectDescription: 'Dashboard kết nối bot giao dịch tiền mã hóa cá nhân với cảnh báo qua Telegram.',
    mainFeatures: 'Live ticker, Bot controls, Telegram notification webhook',
    targetUsers: 'Chỉ cá nhân người dùng.',
    budget: 'Under $1,000',
    timeline: 'Flexible',
    referenceWebsites: '',
    preferredTechnologies: 'React',
    additionalNotes: '',
    status: 'Rejected',
    submittedAt: '2026-07-15T14:00:00Z',
    updatedAt: '2026-07-16T09:00:00Z',
    internalNotes: 'Từ chối do ngân sách $800 quá thấp so với khối lượng công việc và yêu cầu kết nối bảo mật API sàn giao dịch.'
  }
];

export const DEMO_USERS = {
  client: {
    id: 'user-client-1',
    name: 'Marcus Vance',
    email: 'marcus@vancetech.io',
    role: 'USER',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    company: 'Vance Tech Corp'
  },
  admin: {
    id: 'user-admin-1',
    name: 'Quang Anh (Admin)',
    email: 'quanganhqb04@gmail.com',
    role: 'ADMIN',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    company: 'Nexus Web App Studio'
  }
};
