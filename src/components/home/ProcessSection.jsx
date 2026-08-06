import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Search, Compass, Palette, Code, CheckSquare, Rocket, Shield, ArrowRight } from 'lucide-react';

export const ProcessSection = ({ onOpenRequestModal }) => {
  const { language, t } = useLanguage();
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'Discovery',
      titleVi: '1. Khám Phá & Nghiên Cứu',
      titleEn: '1. Discovery & Research',
      icon: Search,
      shortDesc: 'Tìm hiểu sâu nhu cầu kinh doanh, đối tượng người dùng mục tiêu và mục tiêu sản phẩm.',
      details: language === 'en'
        ? 'We conduct discovery workshops to clarify business goals, define MVP feature scope, analyze competitors, and choose optimal technical architecture.'
        : 'Chúng tôi tổ chức workshop discovery để làm rõ bài toán kinh doanh, định hình các tính năng cốt lõi (MVP scope), phân tích đối thủ cạnh tranh và xác định kiến trúc kỹ thuật tối ưu nhất.'
    },
    {
      num: '02',
      title: 'Planning',
      titleVi: '2. Lập Kế Hoạch & Kiến Trúc',
      titleEn: '2. Planning & Architecture',
      icon: Compass,
      shortDesc: 'Xây dựng Wireframe, sơ đồ CSDL và Lộ trình phát triển (Roadmap) chi tiết.',
      details: language === 'en'
        ? 'Establishing ERD data schemas, selecting Tech Stack, defining API endpoints, and organizing sprint roadmaps.'
        : 'Thiết lập sơ đồ thực thể dữ liệu (ERD), lựa chọn Tech Stack, xác định các API Endpoints và chia nhỏ tiến độ thành từng Sprint 2 tuần minh bạch.'
    },
    {
      num: '03',
      title: 'UI/UX Design',
      titleVi: '3. Thiết Kế UI/UX & Prototype',
      titleEn: '3. UI/UX & Prototyping',
      icon: Palette,
      shortDesc: 'Tạo dựng Design System và bản vẽ thiết kế tương tác trên Figma.',
      details: language === 'en'
        ? 'Crafting modern, consistent Design Systems in Figma. Validating interactive user experience before writing production code.'
        : 'Đảm bảo giao diện hiện đại, nhất quán theo thẩm mỹ Digital Product Studio. Thử nghiệm trải nghiệm người dùng thực tế trước khi viết bất kỳ dòng code nào.'
    },
    {
      num: '04',
      title: 'Development',
      titleVi: '4. Lập Trình Frontend & Backend',
      titleEn: '4. Full-stack Engineering',
      icon: Code,
      shortDesc: 'Viết code sạch (Clean Code), tối ưu hiệu năng và cấu trúc chuẩn Enterprise.',
      details: language === 'en'
        ? 'Engineering smooth React/Next.js frontend with robust Node.js/PostgreSQL backend under strict CI/CD pipelines.'
        : 'Lập trình Frontend mượt mà với React/Next.js kết hợp Backend chắc chắn Node.js/PostgreSQL. Đảm bảo mã nguồn được quản lý chặt chẽ qua Git & CI/CD.'
    },
    {
      num: '05',
      title: 'Testing',
      titleVi: '5. Kiểm Thử & Tối Ưu',
      titleEn: '5. Testing & QA Optimization',
      icon: CheckSquare,
      shortDesc: 'Kiểm tra bảo mật, tải trọng Uptime và trải nghiệm trên mọi thiết bị.',
      details: language === 'en'
        ? 'Executing unit tests, E2E tests, OWASP security audits, and Core Web Vitals optimization.'
        : 'Thực hiện Unit Test, End-to-End Test, kiểm tra lỗ hổng bảo mật chuẩn OWASP và đo đạc chỉ số Core Web Vitals tối đa hóa tốc độ tải trang.'
    },
    {
      num: '06',
      title: 'Deployment',
      titleVi: '6. Triển Khai Production',
      titleEn: '6. Production Deployment',
      icon: Rocket,
      shortDesc: 'Đưa Web App lên máy chủ Cloud (AWS, Vercel, Docker) an toàn.',
      details: language === 'en'
        ? 'Configuring domain, SSL, server monitoring, and launching production code seamlessly.'
        : 'Cấu hình Domain, SSL Certificate, Server Monitoring và tiến hành Launch sản phẩm chính thức mà không làm gián đoạn vận hành của bạn.'
    },
    {
      num: '07',
      title: 'Maintenance',
      titleVi: '7. Bảo Trì & Đồng Hành SLA',
      titleEn: '7. SLA Maintenance & Support',
      icon: Shield,
      shortDesc: 'Hỗ trợ kỹ thuật dài hạn, giám sát Uptime 99.9% và cập nhật tính năng mới.',
      details: language === 'en'
        ? 'Monitoring 24/7 uptime metrics, applying security patches, and scaling feature upgrades.'
        : 'Theo dõi chỉ số hệ thống 24/7, cập nhật các bản vá bảo mật và hỗ trợ nâng cấp thêm tính năng khi lượng người dùng doanh nghiệp tăng trưởng.'
    }
  ];

  return (
    <section id="process" className="py-24 bg-studio-900 relative border-b border-white/5 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-mono font-bold tracking-wider uppercase">
            {t('processTag')}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t('processTitle')}
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            {t('processDesc')}
          </p>
        </div>

        {/* Process Steps Horizontal Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 mb-10">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isActive = activeStep === idx;
            return (
              <button
                key={step.num}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-xl text-left border transition-all relative overflow-hidden ${
                  isActive
                    ? 'bg-studio-850 border-brand-primary text-white shadow-glow-primary'
                    : 'bg-studio-950/60 border-white/5 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`font-mono text-xs font-bold ${isActive ? 'text-brand-primary' : 'text-slate-500'}`}>
                    {step.num}
                  </span>
                  <Icon size={16} className={isActive ? 'text-brand-primary' : 'text-slate-400'} />
                </div>
                <p className="text-xs font-bold truncate">{step.title}</p>
              </button>
            );
          })}
        </div>

        {/* Active Step Detail Banner */}
        <div className="studio-card-border p-8 rounded-2xl bg-studio-950 flex flex-col md:flex-row items-center justify-between gap-8 border-brand-primary/20">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs px-2.5 py-1 rounded bg-brand-primary/10 border border-brand-primary/20 text-brand-primary font-bold">
                STAGE {steps[activeStep].num}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {language === 'en' ? steps[activeStep].titleEn : steps[activeStep].titleVi}
              </h3>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              {steps[activeStep].details}
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={() => onOpenRequestModal()}
              className="mona-btn-primary"
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
