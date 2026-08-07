import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

const translations = {
  vi: {
    // Topbar & Nav
    hotline: 'Zalo / SĐT: 0908 123 456',
    email: 'Email: quanganhqb04@gmail.com',
    login: 'Quản Trị Admin',
    logout: 'Đăng Xuất',
    myProjects: 'Yêu Cầu Của Tôi',
    adminDashboard: 'Quản Trị Admin',
    startProject: 'Đặt Làm Website',
    
    // Nav Items
    servicesNav: 'Dịch Vụ',
    pricingNav: 'Bảng Giá',
    processNav: 'Quy Trình',
    portfolioNav: 'Sản Phẩm Đã Làm',
    aboutNav: 'Về Tôi',

    // Hero Section
    heroStatus: 'QUANG ANH • FREELANCER WEB DEVELOPER',
    heroTitlePart1: 'Nhận Làm Website',
    heroTitlePart2: 'Theo Yêu Cầu.',
    heroSubtitle: 'Từ website cá nhân, landing page đến web app nhỏ — tôi trực tiếp thiết kế và phát triển theo nhu cầu của bạn.',
    priceBadge: 'Từ 1.000.000đ · Thời gian từ 1 tuần',
    btnStart: 'Đặt Làm Website',
    btnPortfolio: 'Xem Sản Phẩm Đã Làm',

    // Services Section
    servicesTag: 'DỊCH VỤ THIẾT KẾ WEB',
    servicesTitle: 'Dịch Vụ Thiết Kế & Lập Trình Web Theo Nhu Cầu',
    servicesDesc: 'Làm việc trực tiếp 1-1, không qua trung gian. Tôi xây dựng sản phẩm tối ưu giao diện, tốc độ nhanh và dễ sử dụng.',

    // Pricing Section
    pricingTag: 'BẢNG GIÁ THAM KHẢO',
    pricingTitle: 'Chi Phí Phù Hợp Cho Mọi Quy Mô Dự Án',
    pricingDesc: 'Bảng giá minh bạch theo đúng quy mô và chức năng bạn cần. Có thể điều chỉnh linh hoạt theo ngân sách thực tế.',
    pricingNote: '* Các mức giá trên mang tính chất tham khảo. Chi phí chính xác sẽ được thống nhất sau khi trao đổi chi tiết yêu cầu.',
    btnDiscuss: 'Trao Đổi Yêu Cầu Cụ Thể',

    // Process Section
    processTag: 'QUY TRÌNH LÀM VIỆC',
    processTitle: 'Quy Trình 4 Bước Đơn Giản & Nhanh Gọn',
    processDesc: 'Trực tiếp trao đổi, minh bạch chi phí và tiến độ. Bàn giao đúng hẹn.',

    // Portfolio Section
    portfolioTag: 'SẢN PHẨM THỰC TẾ',
    portfolioTitle: 'Những Website Tôi Đã Trực Tiếp Triển Khai',
    portfolioDesc: 'Xem qua các sản phẩm thực tế tôi đã thiết kế và bàn giao cho khách hàng cá nhân, shop và doanh nghiệp.',

    // About Section
    aboutTag: 'VỀ TÔI',
    aboutTitle: 'Quang Anh — Freelancer Lập Trình Web Theo Yêu Cầu',
    aboutDesc: 'Tôi là freelancer chuyên thiết kế và phát triển website theo yêu cầu. Tôi trực tiếp trao đổi, xây dựng và bàn giao sản phẩm, giúp bạn có một website chuyên nghiệp, mượt mà với chi phí hợp lý nhất.',

    // Contact CTA
    ctaTitle: 'Bạn đang cần một website?',
    ctaDesc: 'Hãy gửi yêu cầu, tôi sẽ xem qua và trao đổi trực tiếp với bạn về chi phí, thời gian và giải pháp phù hợp nhất.',
    btnSubmitRequest: 'Gửi Yêu Cầu Ngay',

    // Footer
    footerDesc: 'Quang Anh Freelancer — Chuyên nhận làm website cá nhân, landing page, web bán hàng và web app theo yêu cầu với chi phí từ 1 triệu đồng.',
    copyright: 'Tất cả quyền được bảo lưu.'
  },
  en: {
    // Topbar & Nav
    hotline: 'Phone / Zalo: +84 908 123 456',
    email: 'Email: quanganhqb04@gmail.com',
    login: 'Admin Login',
    logout: 'Log Out',
    myProjects: 'My Requests',
    adminDashboard: 'Admin Center',
    startProject: 'Order a Website',

    // Nav Items
    servicesNav: 'Services',
    pricingNav: 'Pricing',
    processNav: 'Process',
    portfolioNav: 'Portfolio',
    aboutNav: 'About Me',

    // Hero Section
    heroStatus: 'QUANG ANH • FREELANCER WEB DEVELOPER',
    heroTitlePart1: 'Custom Web Development',
    heroTitlePart2: 'On Demand.',
    heroSubtitle: 'From personal websites, landing pages to small web apps — I directly design and develop tailored to your exact needs.',
    priceBadge: 'From 1,000,000 VND · Delivered from 1 week',
    btnStart: 'Order a Website',
    btnPortfolio: 'View Portfolio',

    // Services Section
    servicesTag: 'SERVICES',
    servicesTitle: 'Custom Web Design & Development Services',
    servicesDesc: 'Direct 1-on-1 collaboration with no middlemen. Fast, clean, responsive, and easy to use.',

    // Pricing Section
    pricingTag: 'TRANSPARENT PRICING',
    pricingTitle: 'Affordable Pricing for Any Project Scope',
    pricingDesc: 'Clear rates based on features and scope. Flexible to fit your budget.',
    pricingNote: '* Rates listed are reference starting prices and will be finalized after discussing your specific requirements.',
    btnDiscuss: 'Discuss Your Requirements',

    // Process Section
    processTag: 'WORKFLOW',
    processTitle: 'Simple 4-Step Process',
    processDesc: 'Clear communication, transparent costs, and on-time delivery.',

    // Portfolio Section
    portfolioTag: 'FEATURED WORK',
    portfolioTitle: 'Real Web Projects Delivered to Clients',
    portfolioDesc: 'Explore real-world websites designed and built directly for personal clients, shops, and small businesses.',

    // About Section
    aboutTag: 'ABOUT ME',
    aboutTitle: 'Quang Anh — Freelancer Web Developer',
    aboutDesc: 'I am a freelance developer specializing in custom website design and development. I directly handle every step to deliver clean, professional websites within your budget.',

    // Contact CTA
    ctaTitle: 'Need a website for your project?',
    ctaDesc: 'Send me your details. I will review and discuss estimated cost, timeline, and the best solution with you.',
    btnSubmitRequest: 'Submit Request',

    // Footer
    footerDesc: 'Quang Anh Freelancer — Custom website development starting from 1,000,000 VND.',
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
