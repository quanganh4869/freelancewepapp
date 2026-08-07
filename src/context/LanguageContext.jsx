import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

const translations = {
  vi: {
    // Topbar & Nav
    hotline: 'Hotline tư vấn: +84 (0) 908 123 456',
    email: 'Email: hello@nexusstudio.dev',
    workingHours: 'Giờ làm việc: 8:00 - 18:00 (T2 - T7)',
    login: 'Quản Trị Admin',
    logout: 'Đăng Xuất',
    myProjects: 'Dự Án Của Tôi',
    adminDashboard: 'Trang Quản Trị Admin',
    startProject: 'Bắt Đầu Dự Án',
    
    // Nav Items
    servicesNav: 'Dịch Vụ',
    calculatorNav: 'Tính Chi Phí',
    processNav: 'Quy Trình',
    portfolioNav: 'Dự Án Đã Làm',
    aboutNav: 'Về Chúng Tôi',
    whyUsNav: 'Vì Sao Chọn Nexus',

    // Hero Section
    heroStatus: 'QUANG ANH STUDIO',
    heroBooking: 'Đang Nhận Dự Án Mới',
    heroTitlePart1: 'Biến ý tưởng kinh doanh thành',
    heroTitlePart2: 'Web App chạy thực tế.',
    heroSubtitle: 'Chúng tôi giúp bạn xây dựng ứng dụng web, phần mềm quản lý và hệ thống bán hàng dễ sử dụng, tốc độ nhanh, vận hành ổn định và bảo mật cao.',
    heroSubHighlight: 'dễ sử dụng, tốc độ nhanh, vận hành ổn định và bảo mật cao.',
    heroCheck1: 'Code tự viết 100% (Không dùng mẫu sẵn)',
    heroCheck2: 'Bảo mật dữ liệu & vận hành an toàn',
    heroCheck3: 'Cam kết hỗ trợ kỹ thuật chu đáo 24/7',
    heroCheck4: 'Bàn giao nhanh chỉ từ 3–6 tuần',
    btnStart: 'Bắt Đầu Dự Án Ngay',
    btnCalc: 'Tính Dự Toán Chi Phí',
    stat1: 'Thiết Kế Tùy Chỉnh',
    stat2: 'Bảo Hành Chu Đáo',
    stat3: 'Thời Gian Bàn Giao',
    techSupport: 'Tư Vấn Trực Tiếp 24/7',

    // Stats Bar
    statsCustomCode: 'Code Viết Tay Tùy Chỉnh 100%',
    statsCustomSub: 'Thiết kế riêng theo nhu cầu kinh doanh',
    statsUptime: 'Vận Hành Ổn Định 24/7',
    statsUptimeSub: 'Cam kết hỗ trợ kỹ thuật lâu dài',
    statsApps: '500+ Web App Đã Bàn Giao',
    statsAppsSub: 'Sản phẩm phần mềm đang chạy thực tế',
    statsExp: '15+ Năm Kinh Nghiệm',
    statsExpSub: 'Đội ngũ lập trình viên chuyên nghiệp',

    // Services Section
    servicesTag: 'DỊCH VỤ CỦA CHÚNG TÔI',
    servicesTitle: 'Giải Pháp Phần Mềm Web Dễ Dùng Cho Doanh Nghiệp',
    servicesDesc: 'Chúng tôi không dùng các mẫu website dựng sẵn sơ sài. Mỗi ứng dụng web đều được lập trình riêng để giải quyết đúng bài toán và giúp doanh nghiệp bạn phát triển.',
    deliverablesLabel: 'Kết quả bàn giao:',
    requestServiceBtn: 'Nhận Báo Giá Dịch Vụ Này',

    // Calculator Section
    calcTag: 'CÔNG CỤ TÍNH CHI PHÍ DỰ KIẾN',
    calcTitle: 'Ước Tính Chi Phí Xây Dựng Web App',
    calcDesc: 'Tính toán nhanh ngân sách thiết kế & lập trình phần mềm trong 30 giây. Báo giá minh bạch, hợp lý theo đúng quy mô của bạn.',
    calcStep1: '1. Chọn loại hình ứng dụng Web bạn cần:',
    calcStep2: '2. Quy mô người dùng sử dụng:',
    calcStep3: '3. Số lượng tính năng chính cần có:',
    calcStep4: '4. Gói hỗ trợ bảo trì sau bàn giao:',
    calcTotalTime: 'THỜI GIAN HOÀN THÀNH DỰ KIẾN',
    calcTotalBudget: 'DỰ TOÁN CHI PHÍ DỰ KIẾN',
    calcGetQuote: 'Nhận Báo Giá Chi Tiết Ngay',

    // Process Section
    processTag: 'QUY TRÌNH LÀM VIỆC',
    processTitle: 'Quy Trình 7 Bước Đơn Giản & Minh Bạch',
    processDesc: 'Từ ý tưởng ban đầu đến khi ứng dụng chạy hoàn chỉnh, chúng tôi đồng hành cùng bạn từng bước một cách rõ ràng và dễ hiểu.',
    processStageBtn: 'Bắt Đầu Ngay Hôm Nay',

    // Portfolio Section
    portfolioTag: 'DỰ ÁN TIÊU BIỂU',
    portfolioTitle: 'Các Sản Phẩm Phần Mềm Đã Thực Hiện',
    portfolioDesc: 'Khám phá những ứng dụng web thực tế chúng tôi đã thiết kế và bàn giao cho các khách hàng doanh nghiệp.',
    allProjects: 'Tất cả Dự Án',
    requestSimilar: 'Làm Web App Tương Tự',

    // About Section
    aboutTag: 'TRIẾT LÝ LÀM VIỆC',
    aboutTitle: 'Về Quang Anh Studio • Định Hướng Tận Tâm',
    aboutDesc: 'Chúng tôi tạo ra những sản phẩm phần mềm thực sự mang lại hiệu quả kinh doanh, giúp doanh nghiệp tiết kiệm chi phí và quản lý dễ dàng hơn.',
    aboutSlaTitle: 'Cam Kết Chất Lượng & Hỗ Trợ Dài Hạn',

    // Why Us Section
    whyUsTag: 'VÌ SAO CHỌN QUANG ANH',
    whyUsTitle: 'Lý Do Khách Hàng Tin Tưởng Quang Anh Studio',
    whyUsDesc: 'Chúng tôi luôn đặt sự dễ dùng, tính ổn định và sự hài lòng của khách hàng lên hàng đầu.',

    // CTA Section
    ctaTag: 'BẮT ĐẦU DỰ ÁN NGAY',
    ctaTitle: 'Bạn đang có ý tưởng cần xây dựng thành phần mềm?',
    ctaDesc: 'Hãy chia sẻ với chúng tôi về mong muốn của bạn. Đội ngũ Quang Anh sẽ tư vấn giải pháp phù hợp nhất và gửi báo giá chi tiết trong 24 giờ.',
    ctaEmailBtn: 'Gửi Email Trực Tiếp',

    // Footer
    footerDesc: 'Quang Anh Studio chuyên thiết kế & lập trình Web App dễ sử dụng cho doanh nghiệp và các thương hiệu bán hàng. Giúp bạn quản lý hiệu quả và tăng trưởng doanh thu.',
    copyright: 'Tất cả quyền được bảo lưu.'
  },
  en: {
    // Topbar & Nav
    hotline: 'Hotline: +84 (0) 908 123 456',
    email: 'Email: hello@nexusstudio.dev',
    workingHours: 'Working Hours: 8:00 AM - 6:00 PM (Mon - Sat)',
    login: 'Admin Login',
    logout: 'Log Out',
    myProjects: 'My Projects',
    adminDashboard: 'Admin Control',
    startProject: 'Start a Project',

    // Nav Items
    servicesNav: 'Services',
    calculatorNav: 'Cost Calculator',
    processNav: 'Process',
    portfolioNav: 'Projects',
    aboutNav: 'About Us',
    whyUsNav: 'Why Choose Us',

    // Hero Section
    heroStatus: 'QUANG ANH STUDIO',
    heroBooking: 'Now Accepting New Projects',
    heroTitlePart1: 'Turn your business ideas into',
    heroTitlePart2: 'working Web Apps.',
    heroSubtitle: 'We help you build fast, easy-to-use web applications and software that streamline your business and boost sales.',
    heroSubHighlight: 'easy-to-use, fast, reliable, and secure.',
    heroCheck1: '100% Custom Code (No ready-made templates)',
    heroCheck2: 'Safe Data & Secure System Operation',
    heroCheck3: 'Dedicated 24/7 Tech Support & Warranty',
    heroCheck4: 'Fast Handover in 3–6 Weeks',
    btnStart: 'Start Your Project Now',
    btnCalc: 'Calculate Estimated Cost',
    stat1: 'Custom Design',
    stat2: 'Reliable Support',
    stat3: 'Fast Delivery',
    techSupport: '24/7 Direct Consultation',

    // Stats Bar
    statsCustomCode: '100% Custom Handcrafted Code',
    statsCustomSub: 'Tailored specifically for your business',
    statsUptime: '24/7 Reliable Operation',
    statsUptimeSub: 'Long-term technical support commitment',
    statsApps: '500+ Web Apps Delivered',
    statsAppsSub: 'Real working software products',
    statsExp: '15+ Years Experience',
    statsExpSub: 'Professional software engineering team',

    // Services Section
    servicesTag: 'OUR SERVICES',
    servicesTitle: 'Easy-to-Use Web Software Solutions for Businesses',
    servicesDesc: 'We do not build generic templates. Every web application is custom tailored to solve your exact business needs and help you grow.',
    deliverablesLabel: 'What you get:',
    requestServiceBtn: 'Get Quote For This Service',

    // Calculator Section
    calcTag: 'ESTIMATED COST CALCULATOR',
    calcTitle: 'Estimate Your Web App Development Cost',
    calcDesc: 'Quickly calculate your software development budget in 30 seconds. Transparent and affordable pricing tailored to your scale.',
    calcStep1: '1. Choose the type of Web App you need:',
    calcStep2: '2. Expected user scale:',
    calcStep3: '3. Number of core features:',
    calcStep4: '4. Maintenance & support package:',
    calcTotalTime: 'ESTIMATED COMPLETION TIME',
    calcTotalBudget: 'ESTIMATED COST BUDGET',
    calcGetQuote: 'Get Detailed Quote Now',

    // Process Section
    processTag: 'OUR WORKFLOW',
    processTitle: '7 Simple & Transparent Steps',
    processDesc: 'From initial idea to launch, we guide you step-by-step in a clear and easy-to-understand way.',
    processStageBtn: 'Get Started Today',

    // Portfolio Section
    portfolioTag: 'FEATURED PROJECTS',
    portfolioTitle: 'Real Software Products We Have Built',
    portfolioDesc: 'Explore real-world web applications we have designed and delivered for business clients.',
    allProjects: 'All Projects',
    requestSimilar: 'Build Similar Web App',

    // About Section
    aboutTag: 'OUR PHILOSOPHY',
    aboutTitle: 'About Quang Anh Studio • Dedicated & Caring',
    aboutDesc: 'We build web software that delivers real business results, helping you save costs and manage operations easily.',
    aboutSlaTitle: 'Quality Assurance & Long-Term Support',

    // Why Us Section
    whyUsTag: 'WHY CHOOSE QUANG ANH',
    whyUsTitle: 'Why Clients Trust Quang Anh Studio',
    whyUsDesc: 'We always prioritize ease of use, stability, and customer satisfaction.',

    // CTA Section
    ctaTag: 'START YOUR PROJECT TODAY',
    ctaTitle: 'Have a business idea ready to build into software?',
    ctaDesc: 'Tell us what you need. Our team will consult the best solution and send a detailed quote within 24 hours.',
    ctaEmailBtn: 'Send Direct Email',

    // Footer
    footerDesc: 'Quang Anh Studio specializes in building easy-to-use Web Apps for businesses and merchants. Helping you manage efficiently and boost revenue.',
    copyright: 'All rights reserved.'
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('nexus_lang');
    return saved ? saved : 'vi';
  });

  useEffect(() => {
    localStorage.setItem('nexus_lang', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'vi' ? 'en' : 'vi'));
  };

  const t = (key) => {
    return translations[language]?.[key] || translations['vi']?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
