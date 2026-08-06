import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

const translations = {
  vi: {
    // Topbar & Nav
    hotline: 'Hotline: +84 (0) 908 123 456',
    email: 'Email: hello@nexusstudio.dev',
    workingHours: 'Giờ làm việc: 8:00 - 18:00 (T2 - T7)',
    login: 'Đăng Nhập',
    logout: 'Đăng Xuất',
    myProjects: 'Dự Án Của Tôi',
    adminDashboard: 'Admin Dashboard',
    startProject: 'Bắt Đầu Dự Án',
    
    // Nav Items
    servicesNav: 'Dịch Vụ',
    calculatorNav: 'Tính Báo Giá',
    processNav: 'Quy Trình',
    portfolioNav: 'Dự Án',
    aboutNav: 'Về Chúng Tôi',
    whyUsNav: 'Ưu Thế',

    // Hero Section
    heroStatus: 'NEXUS DIGITAL PRODUCT STUDIO',
    heroBooking: 'Booking Q3/Q4 Open',
    heroTitlePart1: 'Biến ý tưởng của bạn thành',
    heroTitlePart2: 'Web App thực tế.',
    heroSubtitle: 'Chúng tôi là Digital Product Studio chuyên thiết kế & phát triển Web App cao cấp cho Doanh nghiệp & Startup. Tập trung vào',
    heroSubHighlight: 'hiệu năng, kiến trúc mở rộng và bảo mật Enterprise.',
    heroCheck1: 'Mã nguồn tùy chỉnh Custom Code 100%',
    heroCheck2: 'Bảo mật chuẩn Enterprise & SOC2 Ready',
    heroCheck3: 'Cam kết Uptime SLA 99.9% Uptime SLA',
    heroCheck4: 'Bàn giao MVP nhanh trong 3–8 tuần',
    btnStart: 'Bắt Đầu Dự Án Web App',
    btnCalc: 'Tính Chi Phí Lập Trình',
    stat1: 'Custom Architecture',
    stat2: 'Uptime SLA Guarantee',
    stat3: 'Average MVP Delivery',
    techSupport: 'Tư Vấn Kỹ Thuật 24/7',

    // Stats Bar
    statsCustomCode: 'Custom Code Architecture',
    statsCustomSub: 'Mã nguồn tùy chỉnh độc quyền 100%',
    statsUptime: 'Uptime SLA Guarantee',
    statsUptimeSub: 'Cam kết bảo trì hệ thống 24/7',
    statsApps: 'Web Apps Delivered',
    statsAppsSub: 'Sản phẩm phần mềm thực tế',
    statsExp: 'Years Experience',
    statsExpSub: 'Kinh nghiệm lập trình Enterprise',

    // Services Section
    servicesTag: 'DỊCH VỤ TRỌNG TÂM',
    servicesTitle: 'Giải Pháp Phát Triển Web App Toàn Diện',
    servicesDesc: 'Chúng tôi không sử dụng các mẫu dựng sẵn sơ sài. Mỗi ứng dụng Web App đều được thiết kế kiến trúc chuẩn hóa cho riêng mục tiêu tăng trưởng của bạn.',
    deliverablesLabel: 'Bao gồm:',
    requestServiceBtn: 'Gửi Yêu Cầu Dịch Vụ',

    // Calculator Section
    calcTag: 'CÔNG CỤ TÍNH CHI PHÍ WEB APP',
    calcTitle: 'Ước Tính Ngân Sách Phát Triển Web App',
    calcDesc: 'Dự toán chi phí thiết kế & lập trình phần mềm tùy chỉnh nhanh chóng trong 30 giây. Báo giá minh bạch, cam kết mã nguồn sạch và bảo mật cao.',
    calcStep1: '1. Chọn loại hình ứng dụng Web App:',
    calcStep2: '2. Quy mô người dùng dự kiến:',
    calcStep3: '3. Số lượng tính năng cốt lõi (MVP Features):',
    calcStep4: '4. Cấp độ bảo trì & Đồng hành SLA:',
    calcTotalTime: 'TỔNG THỜI GIAN PHÁT TRIỂN DỰ KIẾN',
    calcTotalBudget: 'DỰ TOÁN NGÂN SÁCH LẬP TRÌNH',
    calcGetQuote: 'Nhận Báo Giá Chi Tiết Theo Yêu Cầu',

    // Process Section
    processTag: 'QUY TRÌNH KỸ THUẬT',
    processTitle: 'Quy Trình Phát Triển Web App 7 Bước',
    processDesc: 'Từ ý tưởng sơ khai đến một sản phẩm Web App hoàn chỉnh được kiểm thử kỹ lưỡng, chúng tôi cam kết quy trình làm việc rõ ràng và chuẩn mực.',
    processStageBtn: 'Bắt Đầu Từ Bước 1',

    // Portfolio Section
    portfolioTag: 'FEATURED CASE STUDIES',
    portfolioTitle: 'Các Dự Án Web App Tiêu Biểu',
    portfolioDesc: 'Khám phá các sản phẩm phần mềm chúng tôi đã trực tiếp nghiên cứu, thiết kế kiến trúc và lập trình cho khách hàng doanh nghiệp.',
    allProjects: 'Tất cả Dự Án',
    requestSimilar: 'Xây Dựng Web App Tương Tự',

    // About Section
    aboutTag: 'STUDIO PHILOSOPHY',
    aboutTitle: 'Về Nexus Studio • Định Hướng Kỹ Thuật',
    aboutDesc: 'Chúng tôi không phải công ty gia công phần mềm giá rẻ đại trà. Nexus Studio là đối tác chiến lược về kỹ thuật phần mềm (Engineering Partner) đồng hành cùng Doanh nghiệp & SaaS Startup.',
    aboutSlaTitle: 'Cam Kết Chất Lượng Mã Nguồn & Hợp Đồng SLA',

    // Why Us Section
    whyUsTag: 'WHY CHOOSE NEXUS',
    whyUsTitle: 'Tại Sao Các Thương Hiệu Tin Tưởng Chúng Tôi?',
    whyUsDesc: 'Chúng tôi đặt chất lượng kỹ thuật, tính thẩm mỹ và độ tin cậy của phần mềm lên hàng đầu.',

    // CTA Section
    ctaTag: 'KHỞI TẠO DỰ ÁN NGAY HÔM NAY',
    ctaTitle: 'Have an idea? Let\'s build your Web App.',
    ctaDesc: 'Sẵn sàng nâng tầm doanh nghiệp với ứng dụng Web App đẳng cấp, bảo mật và tối ưu quy mô? Nhận tư vấn kỹ thuật & báo giá chi tiết trong vòng 24 giờ.',
    ctaEmailBtn: 'Liên Hệ Trực Tiếp Email',

    // Footer
    footerDesc: 'Studio chuyên nghiệp thiết kế và phát triển Web App cao cấp cho Doanh nghiệp & SaaS Startup. Chuyển hóa ý tưởng kinh doanh thành phần mềm thực tế, tối ưu hiệu năng và quy mô dài hạn.',
    copyright: 'Tất cả quyền được bảo lưu.'
  },
  en: {
    // Topbar & Nav
    hotline: 'Hotline: +84 (0) 908 123 456',
    email: 'Email: hello@nexusstudio.dev',
    workingHours: 'Business Hours: 8:00 AM - 6:00 PM (Mon - Sat)',
    login: 'Log In',
    logout: 'Log Out',
    myProjects: 'My Projects',
    adminDashboard: 'Admin Dashboard',
    startProject: 'Start a Project',

    // Nav Items
    servicesNav: 'Services',
    calculatorNav: 'Cost Calculator',
    processNav: 'Process',
    portfolioNav: 'Portfolio',
    aboutNav: 'About Us',
    whyUsNav: 'Why Us',

    // Hero Section
    heroStatus: 'NEXUS DIGITAL PRODUCT STUDIO',
    heroBooking: 'Booking Q3/Q4 Open',
    heroTitlePart1: 'Transform your vision into',
    heroTitlePart2: 'Production Web Apps.',
    heroSubtitle: 'We are a Digital Product Studio specializing in high-end Web App engineering for Enterprises & SaaS Startups. Focusing on',
    heroSubHighlight: 'performance, scalable architecture, and enterprise security.',
    heroCheck1: '100% Custom Code Architecture',
    heroCheck2: 'Enterprise Security & SOC2 Ready',
    heroCheck3: '99.9% Uptime SLA Commitment',
    heroCheck4: 'Fast 3–8 Weeks MVP Delivery',
    btnStart: 'Start Web App Project',
    btnCalc: 'Calculate Dev Budget',
    stat1: 'Custom Architecture',
    stat2: 'Uptime SLA Guarantee',
    stat3: 'Average MVP Delivery',
    techSupport: '24/7 Tech Consultation',

    // Stats Bar
    statsCustomCode: 'Custom Code Architecture',
    statsCustomSub: '100% Exclusive Custom Source Code',
    statsUptime: 'Uptime SLA Guarantee',
    statsUptimeSub: '24/7 System Maintenance Commitment',
    statsApps: 'Web Apps Delivered',
    statsAppsSub: 'Real Production Software Products',
    statsExp: 'Years Experience',
    statsExpSub: 'Enterprise Engineering Experience',

    // Services Section
    servicesTag: 'EXPERT SERVICES',
    servicesTitle: 'Comprehensive Web App Engineering Solutions',
    servicesDesc: 'We do not build generic templates. Every Web App is custom engineered specifically for your business growth goals.',
    deliverablesLabel: 'Deliverables:',
    requestServiceBtn: 'Request Service Quote',

    // Calculator Section
    calcTag: 'WEB APP COST ESTIMATOR',
    calcTitle: 'Estimate Your Web App Development Budget',
    calcDesc: 'Calculate custom software design & development budget in 30 seconds. Transparent pricing, clean code guarantee & high security.',
    calcStep1: '1. Select Web App Type:',
    calcStep2: '2. Expected User Scale:',
    calcStep3: '3. Number of Core MVP Features:',
    calcStep4: '4. SLA Maintenance Tier:',
    calcTotalTime: 'ESTIMATED TOTAL DEVELOPMENT TIMELINE',
    calcTotalBudget: 'ESTIMATED DEVELOPMENT BUDGET',
    calcGetQuote: 'Get Detailed Project Proposal',

    // Process Section
    processTag: 'WORKFLOW PIPELINE',
    processTitle: '7-Step Web App Engineering Process',
    processDesc: 'From initial concept to a fully tested production Web App, we guarantee transparent and standardized workflow execution.',
    processStageBtn: 'Start From Stage 1',

    // Portfolio Section
    portfolioTag: 'FEATURED CASE STUDIES',
    portfolioTitle: 'Featured Production Web Applications',
    portfolioDesc: 'Explore software products we have researched, architected, and engineered for enterprise clients.',
    allProjects: 'All Projects',
    requestSimilar: 'Build Similar Web App',

    // About Section
    aboutTag: 'STUDIO PHILOSOPHY',
    aboutTitle: 'About Nexus Studio • Engineering Philosophy',
    aboutDesc: 'We are not a cheap outsourcing factory. Nexus Studio is a strategic engineering partner collaborating with Enterprises & SaaS Startups.',
    aboutSlaTitle: 'Source Code Quality & SLA Commitment',

    // Why Us Section
    whyUsTag: 'WHY CHOOSE NEXUS',
    whyUsTitle: 'Why Global Brands Trust Nexus Studio',
    whyUsDesc: 'We prioritize technical excellence, aesthetic design, and software reliability above all else.',

    // CTA Section
    ctaTag: 'START A PROJECT TODAY',
    ctaTitle: 'Have an idea? Let\'s build your Web App.',
    ctaDesc: 'Ready to scale your business with a world-class, secure, and performant Web Application? Get a technical consultation & detailed proposal within 24 hours.',
    ctaEmailBtn: 'Direct Email Contact',

    // Footer
    footerDesc: 'Professional digital product studio engineering high-end Web Apps for Enterprises & SaaS Startups. Transforming business ideas into production-ready software.',
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
