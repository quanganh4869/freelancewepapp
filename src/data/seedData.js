export const INITIAL_SERVICES = [
  {
    id: 'xay-nha-tron-goi',
    title: 'Turnkey House Construction',
    titleVi: 'Xây Nhà Trọn Gói (Chìa Khóa Trao Tay)',
    iconName: 'Building2',
    shortDesc: 'Thi công trọn gói từ xin phép, móng, kết cấu phần thô đến hoàn thiện nội thất chìa khóa trao tay.',
    description: 'Giải pháp xây dựng nhà ở toàn diện giúp chủ nhà tiết kiệm tối đa thời gian và chi phí. Cam kết vật tư chính hãng 100%, đúng tiến độ hợp đồng và bảo hành công trình lên đến 10 năm.',
    deliverables: ['Bản vẽ thiết kế 3D & Hồ sơ xin phép', 'Thi công phần thô & Nhân công hoàn thiện', 'Vật tư thương hiệu uy tín chính hãng', 'Bảo hành kết cấu 10 năm & Miễn phí bản vẽ'],
    badge: 'Được Chọn Nhiều Nhất'
  },
  {
    id: 'thiet-ke-kien-truc',
    title: 'Architectural & 3D Design',
    titleVi: 'Thiết Kế Kiến Trúc & 3D Phối Cảnh',
    iconName: 'Compass',
    shortDesc: 'Thiết kế phối cảnh 3D ngoại thất & nội thất tối ưu công năng sử dụng, chuẩn phong thủy gia chủ.',
    description: 'Đội ngũ KTS giàu kinh nghiệm sáng tạo những mẫu thiết kế đẳng cấp từ hiện đại, tân cổ điển đến cổ điển. Bố trí không gian khoa học, đón gió và ánh sáng tự nhiên tối đa.',
    deliverables: ['Phối cảnh 3D kiến trúc ngoại thất', 'Hồ sơ bản vẽ thi công chi tiết', 'Mặt bằng bố trí công năng từng tầng', 'Bảng dự toán chi tiết khối lượng vật tư']
  },
  {
    id: 'thiet-ke-noi-that',
    title: 'Interior Design & Fit-out',
    titleVi: 'Thiết Kế & Thi Công Nội Thất',
    iconName: 'LayoutDashboard',
    shortDesc: 'Thiết kế và sản xuất lắp đặt nội thất trọn gói cho biệt thự, nhà phố, căn hộ chung cư cao cấp.',
    description: 'Sở hữu xưởng sản xuất nội thất quy mô lớn trang bị máy móc hiện đại. Cung cấp giải pháp nội thất đo đạc vừa vặn từng milimet, tinh tế và sang trọng.',
    deliverables: ['Thiết kế 3D không gian nội thất', 'Sản xuất nội thất trực tiếp tại xưởng', 'Chất liệu gỗ An Cường / Gỗ tự nhiên cao cấp', 'Bảo hành nội thất 3 năm & Bảo trì định kỳ']
  },
  {
    id: 'sua-chua-cai-tao',
    title: 'Home Renovation & Remodeling',
    titleVi: 'Sửa Chữa & Cải Tạo Nhà Trọn Gói',
    iconName: 'Hammer',
    shortDesc: 'Nâng cấp cải tạo diện mạo nhà cũ, nâng tầng, chống thấm và biến chuyển không gian sống mới.',
    description: 'Dịch vụ cải tạo chuyên sâu cho các ngôi nhà lâu năm bị xuống cấp. Xử lý triệt để tình trạng thấm dầm, nứt tường, mở rộng diện tích sinh hoạt với chi phí tối ưu nhất.',
    deliverables: ['Khảo sát hiện trạng công trình miễn phí', 'Phương án gia cố móng & đập phá an toàn', 'Xử lý chống thấm công nghệ cao', 'Thi công nhanh gọn đảm bảo an toàn']
  },
  {
    id: 'thi-cong-phan-tho',
    title: 'Structural Work & Labour',
    titleVi: 'Thi Công Phần Thô & Nhân Công',
    iconName: 'Ruler',
    shortDesc: 'Thi công kết cấu bê tông cốt thép chắc chắn, chuẩn quy chuẩn kỹ thuật ngành xây dựng.',
    description: 'Xây dựng phần khung xương nền móng vững chắc cho ngôi nhà. Sử dụng thép Hòa Phát, bê tông tươi thương phẩm M250/M300 và gạch tuynel chất lượng cao.',
    deliverables: ['Thi công cọc, móng & dầm sàn', 'Bê tông thương phẩm chuẩn mác', 'Tường gạch tuynel tô trát phẳng đẹp', 'Đường ống điện nước âm tường âm sàn']
  },
  {
    id: 'giam-sat-xay-dung',
    title: 'Construction Supervision',
    titleVi: 'Giám Sát & Tư Vấn Kỹ Thuật',
    iconName: 'ShieldCheck',
    shortDesc: 'Đội ngũ kỹ sư giám sát độc lập, kiểm tra chất lượng vật tư và nghiệm thu từng giai đoạn.',
    description: 'Đảm bảo công trình được thi công đúng bản vẽ thiết kế và đạt chất lượng cao nhất. Giám sát viên túc trực tại hiện trường ghi chép nhật ký công trình hàng ngày.',
    deliverables: ['Giám sát hiện trường thi công 24/7', 'Kiểm định mác bê tông & chất lượng thép', 'Báo cáo nhật ký tiến độ công trình', 'Nghiệm thu nghiêm ngặt từng giai đoạn']
  }
];

export const INITIAL_PROJECTS = [
  {
    id: 'proj-1',
    title: 'Biệt Thự Vườn Modern Luxury - Q.7, TP.HCM',
    client: 'Gia đình Anh Quốc Bảo',
    category: 'Biệt thự',
    categoryLabel: 'Biệt Thự Cao Cấp',
    thumbnail: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80',
    shortDesc: 'Biệt thự 3 tầng phong cách hiện đại với hồ bơi vô cực và sân vườn xanh mát trên diện tích 450m².',
    fullDesc: 'Dự án biệt thự vườn cao cấp được Xây Nhà Đẹp thiết kế & thi công trọn gói tại Quận 7. Điểm nhấn là kiến trúc mở tối đa hóa góc nhìn ra sân vườn, bể bơi vô cực tràn bờ và hệ thống nhà thông minh Smart Home tích hợp.',
    techStack: ['Diện tích: 450m²', 'Quy mô: 3 Tầng + Tum', 'Thời gian: 6 tháng', 'Phong cách: Modern Luxury'],
    metrics: ['100% Đúng Tiến Độ', 'Bảo Hành 10 Năm', 'Vật Tư Cao Cấp'],
    liveUrl: 'https://example.com/biet-thu-quan-7',
    year: '2026'
  },
  {
    id: 'proj-2',
    title: 'Nhà Phố Tân Cổ Điển - KĐT Sala, Thủ Đức',
    client: 'Gia đình Chị Hoàng Yến',
    category: 'Nhà phố',
    categoryLabel: 'Nhà Phố Sang Trọng',
    thumbnail: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
    shortDesc: 'Thiết kế & thi công trọn gói nhà phố 4 tầng 1 tum kiến trúc tân cổ điển đường nét phào chỉ tinh tế.',
    fullDesc: 'Ngôi nhà phố tân cổ điển gây ấn tượng mạnh bởi hoa văn phào chỉ xi măng thủ công tinh xảo, cột Corinthian thanh thoát và ban công sắt nghệ thuật sơn mạ vàng cao cấp. Không gian giếng trời đón nắng ấm.',
    techStack: ['Diện tích: 280m²', 'Quy mô: 4 Tầng 1 Tum', 'Thời gian: 4.5 tháng', 'Phong cách: Neo-Classic'],
    metrics: ['Bàn Giao Chìa Khóa', 'Đúng Ngân Sách', 'Nội Thất Gỗ Tự Nhiên'],
    liveUrl: 'https://example.com/nha-pho-sala',
    year: '2025'
  },
  {
    id: 'proj-3',
    title: 'Penthouse Duplex Grand Marina - Q.1, TP.HCM',
    client: 'Anh Marcus Vance',
    category: 'Căn hộ',
    categoryLabel: 'Căn Hộ & Penthouse',
    thumbnail: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80',
    shortDesc: 'Thi công hoàn thiện nội thất Penthouse thông tầng cao cấp sử dụng gỗ óc chó nhập khẩu & đá Marble Ý.',
    fullDesc: 'Căn Penthouse thông tầng diện tích 320m² với tầm nhìn toàn cảnh sông Sài Gòn. Toàn bộ nội thất được chế tác riêng từ gỗ Óc Chó Bắc Mỹ cao cấp kết hợp đá tự nhiên Marble Calacatta sang trọng.',
    techStack: ['Diện tích: 320m²', 'Quy mô: Duplex Penthouse', 'Thời gian: 3 tháng', 'Phong cách: Contemporary'],
    metrics: ['Gỗ Óc Chó Nhập Khẩu', 'Đá Marble Calacatta', 'Đèn Chùm Murano'],
    liveUrl: 'https://example.com/penthouse-grand-marina',
    year: '2025'
  },
  {
    id: 'proj-4',
    title: 'Nội Thất Tropical Villa Resort Phan Thiết',
    client: 'Dr. Linh Nguyen',
    category: 'Nội thất',
    categoryLabel: 'Nội Thất Resort',
    thumbnail: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80',
    shortDesc: 'Không gian nội thất nghỉ dưỡng nhiệt đới kết hợp vật liệu gỗ mây tự nhiên và ánh sáng ấm áp.',
    fullDesc: 'Biến không gian sống thành khu nghỉ dưỡng riêng tư 5 sao. Thiết kế tôn vinh nét đẹp văn hóa bản địa kết hợp phong cách Indochine & Tropical sống động.',
    techStack: ['Diện tích: 520m²', 'Quy mô: Resort Villa', 'Thời gian: 4 tháng', 'Phong cách: Tropical Indochine'],
    metrics: ['Mây Tre Tự Nhiên', 'Chống Ẩm Biển', 'Bảo Hành 5 Năm'],
    liveUrl: 'https://example.com/villa-phan-thiet',
    year: '2026'
  }
];

export const INITIAL_REQUESTS = [
  {
    id: 'YCKT-89421',
    clientName: 'Marcus Vance',
    clientEmail: 'marcus@vancetech.io',
    clientPhone: '+84 908 123 456',
    clientCompany: 'Vance Corp',
    projectName: 'Xây Dựng Biệt Thự Vườn 3 Tầng Q.7',
    projectType: 'Biệt thự',
    projectDescription: 'Yêu cầu thiết kế kiến trúc và thi công trọn gói chìa khóa trao tay biệt thự đơn lập có sân vườn và hồ bơi ngoài trời.',
    mainFeatures: 'Hồ bơi vô cực, Thang máy gia đình, Sân vườn cảnh quan, Hệ thống Smart Home, Gara 2 ô tô',
    targetUsers: 'Gia đình 6 thành viên (3 thế hệ).',
    budget: '$50,000 – $100,000',
    timeline: '3–6 tháng',
    referenceWebsites: 'https://xaynhadep2.monamedia.net',
    preferredTechnologies: 'Gỗ Óc Chó, Đá Marble, Bê tông mác 300',
    additionalNotes: 'Cần khởi công vào đầu tháng sau để hợp tuổi gia chủ.',
    status: 'In Progress',
    submittedAt: '2026-08-01T09:30:00Z',
    updatedAt: '2026-08-04T14:20:00Z',
    internalNotes: 'Khách hàng đã ký hợp đồng thi công $85,000 & tạm ứng 30% đợt 1. Đã đào móng xong và đang đan thép dầm sàn đợt 1.'
  },
  {
    id: 'YCKT-89422',
    clientName: 'Dr. Linh Nguyen',
    clientEmail: 'linh.nguyen@medicare.vn',
    clientPhone: '+84 912 888 999',
    clientCompany: 'MediCare Vietnam',
    projectName: 'Cải Tạo Nội Thất Phòng Khám Y Tế MediCare',
    projectType: 'Nội thất',
    projectDescription: 'Cải tạo diện mạo không gian sảnh đón tiếp, phòng chờ và 5 phòng khám chuyên khoa chuẩn vệ sinh y tế.',
    mainFeatures: 'Sảnh đón tiếp sang trọng, ốp tường nhựa PVC giả đá chống khuẩn, đèn âm trần LED 4000K, nội thất y tế cao cấp',
    targetUsers: 'Bệnh nhân và đội ngũ y bác sĩ.',
    budget: '$10,000 – $30,000',
    timeline: '1–2 tháng',
    referenceWebsites: '',
    preferredTechnologies: 'Tấm PVC Chống Kháng Khuẩn, Sàn Vinyl Y Tế',
    additionalNotes: 'Thi công ban đêm để không ảnh hưởng hoạt động khám chữa bệnh ban ngày.',
    status: 'Reviewing',
    submittedAt: '2026-08-03T11:15:00Z',
    updatedAt: '2026-08-04T08:00:00Z',
    internalNotes: 'Đã gửi bản phối cảnh 3D & dự toán chi tiết $22,500. Đang đợi BQT MediCare phê duyệt.'
  },
  {
    id: 'YCKT-89423',
    clientName: 'Trần Hoàng',
    clientEmail: 'hoang.tran@autoparts.vn',
    clientPhone: '+84 987 654 321',
    clientCompany: 'AutoParts Vietnam Group',
    projectName: 'Xây Nhà Phố 4 Tầng Trọn Gói Tại Bình Thạnh',
    projectType: 'Nhà phố',
    projectDescription: 'Xây dựng mới nhà phố diện tích 5x18m quy mô 1 trệt 3 lầu 1 tum làm văn phòng công ty kết hợp nhà ở gia đình.',
    mainFeatures: 'Tầng trệt đỗ ô tô & showroom, Tầng 2-3 văn phòng làm việc, Tầng 4 không gian gia đình, Tum sân thượng trồng cây',
    targetUsers: '15 nhân viên văn phòng và gia đình 4 người.',
    budget: '$30,000 – $50,000',
    timeline: '2–3 tháng',
    referenceWebsites: '',
    preferredTechnologies: 'Khung bê tông cốt thép, Kính cường lực 12mm',
    additionalNotes: 'Cần giấy phép xây dựng ép cọc nhà phố lân cận.',
    status: 'Pending',
    submittedAt: '2026-08-05T16:45:00Z',
    updatedAt: '2026-08-05T16:45:00Z',
    internalNotes: 'Yêu cầu báo giá mới gửi chiều qua. Cần hẹn anh Hoàng khảo sát hiện trạng khu đất vào Thứ 6.'
  },
  {
    id: 'YCKT-89424',
    clientName: 'Sarah Chen',
    clientEmail: 'sarah@eduskills.studio',
    clientPhone: '+84 903 555 123',
    clientCompany: 'EduSkills Studio',
    projectName: 'Thi Công Nội Thất Căn Hộ Vinhomes Central Park',
    projectType: 'Căn hộ',
    projectDescription: 'Hoàn thiện toàn bộ nội thất căn hộ 3 phòng ngủ 110m² phong cách Hiện đại Tối giản (Minimalism).',
    mainFeatures: 'Tủ bếp kịch trần An Cường, Giường thông minh lưu trữ, Sofa da bò Ý, Hệ chiếu sáng cảm ứng',
    targetUsers: 'Gia đình trẻ 3 người.',
    budget: '$10,000 – $30,000',
    timeline: '1–2 tháng',
    referenceWebsites: '',
    preferredTechnologies: 'Gỗ MDF An Cường Chống Ẩm, Sơn Inchem Mỹ',
    additionalNotes: 'Đã nghiệm thu bàn giao chìa khóa đạt chuẩn 100%.',
    status: 'Completed',
    submittedAt: '2026-06-10T10:00:00Z',
    updatedAt: '2026-07-28T17:30:00Z',
    internalNotes: 'Đã hoàn tất bàn giao & ký biên bản bảo hành 3 năm nội thất.'
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
    company: 'Xây Nhà Đẹp Studio'
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
    company: 'Xây Nhà Đẹp Studio',
    role: 'ADMIN',
    joinedAt: '2026-01-01T00:00:00Z',
    requestsCount: 0,
    status: 'Active'
  }
];
