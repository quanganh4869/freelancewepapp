import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Search, Compass, Palette, Code, CheckSquare, Rocket, Shield, ArrowRight } from 'lucide-react';

export const ProcessSection = ({ onOpenRequestModal }) => {
  const { language, t } = useLanguage();
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'DISCOVER',
      titleVi: '01 DISCOVER • Khám Phá & Nghiên Cứu',
      titleEn: '01 DISCOVER • Discovery & Research',
      icon: Search,
      details: language === 'en'
        ? 'We conduct discovery workshops to clarify business goals, define MVP feature scope, analyze competitors, and choose optimal technical architecture.'
        : 'Chúng tôi tổ chức workshop discovery để làm rõ bài toán kinh doanh, định hình các tính năng cốt lõi (MVP scope), phân tích đối thủ cạnh tranh và xác định kiến trúc kỹ thuật tối ưu nhất.'
    },
    {
      num: '02',
      title: 'ARCHITECT',
      titleVi: '02 ARCHITECT • Lập Kế Hoạch & Kiến Trúc',
      titleEn: '02 ARCHITECT • Planning & Architecture',
      icon: Compass,
      details: language === 'en'
        ? 'Establishing ERD data schemas, selecting Tech Stack, defining API endpoints, and organizing sprint roadmaps.'
        : 'Thiết lập sơ đồ thực thể dữ liệu (ERD), lựa chọn Tech Stack, xác định các API Endpoints và chia nhỏ tiến độ thành từng Sprint 2 tuần minh bạch.'
    },
    {
      num: '03',
      title: 'DESIGN',
      titleVi: '03 DESIGN • Thiết Kế UI/UX & Prototype',
      titleEn: '03 DESIGN • UI/UX & Prototyping',
      icon: Palette,
      details: language === 'en'
        ? 'Crafting modern, consistent Design Systems in Figma. Validating interactive user experience before writing production code.'
        : 'Đảm bảo giao diện hiện đại, nhất quán theo thẩm mỹ Digital Product Studio. Thử nghiệm trải nghiệm người dùng thực tế trước khi viết bất kỳ dòng code nào.'
    },
    {
      num: '04',
      title: 'BUILD',
      titleVi: '04 BUILD • Lập Trình Frontend & Backend',
      titleEn: '04 BUILD • Full-stack Engineering',
      icon: Code,
      details: language === 'en'
        ? 'Engineering smooth React/Next.js frontend with robust Node.js/PostgreSQL backend under strict CI/CD pipelines.'
        : 'Lập trình Frontend mượt mà với React/Next.js kết hợp Backend chắc chắn Node.js/PostgreSQL. Đảm bảo mã nguồn được quản lý chặt chẽ qua Git & CI/CD.'
    },
    {
      num: '05',
      title: 'TEST',
      titleVi: '05 TEST • Kiểm Thử & Tối Ưu',
      titleEn: '05 TEST • Testing & QA Optimization',
      icon: CheckSquare,
      details: language === 'en'
        ? 'Executing unit tests, E2E tests, OWASP security audits, and Core Web Vitals optimization.'
        : 'Thực hiện Unit Test, End-to-End Test, kiểm tra lỗ hổng bảo mật chuẩn OWASP và đo đạc chỉ số Core Web Vitals tối đa hóa tốc độ tải trang.'
    },
    {
      num: '06',
      title: 'DEPLOY',
      titleVi: '06 DEPLOY • Triển Khai Production',
      titleEn: '06 DEPLOY • Production Deployment',
      icon: Rocket,
      details: language === 'en'
        ? 'Configuring domain, SSL, server monitoring, and launching production code seamlessly.'
        : 'Cấu hình Domain, SSL Certificate, Server Monitoring và tiến hành Launch sản phẩm chính thức mà không làm gián đoạn vận hành của bạn.'
    },
    {
      num: '07',
      title: 'MAINTAIN',
      titleVi: '07 MAINTAIN • Bảo Trì & Đồng Hành SLA',
      titleEn: '07 MAINTAIN • SLA Maintenance & Support',
      icon: Shield,
      details: language === 'en'
        ? 'Monitoring 24/7 uptime metrics, applying security patches, and scaling feature upgrades.'
        : 'Theo dõi chỉ số hệ thống 24/7, cập nhật các bản vá bảo mật và hỗ trợ nâng cấp thêm tính năng khi lượng người dùng doanh nghiệp tăng trưởng.'
    }
  ];

  return (
    <section id="process" className="py-24 bg-studio-950 border-b border-white/10 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="studio-badge">
            <span>{t('processTag')}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            {t('processTitle')}
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            {t('processDesc')}
          </p>
        </div>

        {/* Process Step Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 mb-10">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isActive = activeStep === idx;
            return (
              <button
                key={step.num}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-lg text-left border transition-all ${
                  isActive
                    ? 'bg-brand-primary text-white border-brand-primary font-bold'
                    : 'studio-card text-slate-400 hover:text-slate-200'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`font-mono text-xs ${isActive ? 'text-white' : 'text-brand-primary font-bold'}`}>
                    {step.num}
                  </span>
                  <Icon size={16} />
                </div>
                <p className="text-xs font-bold truncate">{step.title}</p>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detail Panel */}
        <div className="studio-card p-8 rounded-xl flex flex-col md:flex-row items-center justify-between gap-8 border-brand-primary/30">
          <div className="space-y-4 max-w-2xl">
            <h3 className="text-xl sm:text-2xl font-bold">
              {language === 'en' ? steps[activeStep].titleEn : steps[activeStep].titleVi}
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              {steps[activeStep].details}
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={() => onOpenRequestModal()}
              className="btn-primary py-3 px-6 text-sm"
            >
              <span>{t('processStageBtn')}</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
