import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import { ShieldCheck, Code, Cpu, Users, CheckCircle2 } from 'lucide-react';

export const AboutSection = () => {
  const { t, language } = useLanguage();
  const { isDark } = useTheme();

  const principles = [
    {
      num: '01',
      icon: Code,
      title: 'Custom Architecture Only',
      titleVi: 'Kiến Trúc Tùy Chỉnh 100%',
      desc: 'Chúng tôi không sử dụng template có sẵn. Mọi dòng code và kiến trúc CSDL đều được thiết kế từ đầu tối ưu cho riêng bài toán kinh doanh của bạn.'
    },
    {
      num: '02',
      icon: Cpu,
      title: 'Performance & Scale',
      titleVi: 'Hiệu Năng & Khả Năng Mở Rộng',
      desc: 'Áp dụng Server-Side Rendering (SSR), Caching 3 lớp (Redis/CDN), và REST/GraphQL API chuẩn hóa để chịu tải hàng trăm nghìn truy cập cùng lúc.'
    },
    {
      num: '03',
      icon: ShieldCheck,
      title: 'Security & Enterprise Standards',
      titleVi: 'Bảo Mật Chuẩn Enterprise',
      desc: 'Tuân thủ các tiêu chuẩn mã hóa dữ liệu nghiêm ngặt (ISO 27001, OWASP Top 10), bảo vệ dữ liệu người dùng và phòng chống tấn công mạng.'
    },
    {
      num: '04',
      icon: Users,
      title: 'Transparent Communication',
      titleVi: 'Giao Tiếp Minh Bạch & Đồng Hành',
      desc: 'Báo cáo tiến độ Sprint hàng tuần qua Slack/Jira, cấp quyền truy cập Staging environment theo thời gian thực và hỗ trợ kỹ thuật SLA 24/7 sau bàn giao.'
    }
  ];

  return (
    <section id="about" className={`py-24 border-b font-sans ${
      isDark ? 'bg-studio-950 border-white/10 text-white' : 'bg-white border-slate-200 text-slate-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Heading Statement */}
        <div className="max-w-4xl mb-16 space-y-6">
          <div className="studio-badge">
            <span>{t('aboutTag')}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight text-slate-900 dark:text-white">
            {language === 'en' ? (
              <>
                "We don't just build interfaces. <br />
                We build systems that businesses can depend on."
              </>
            ) : (
              <>
                "Chúng tôi không chỉ dựng giao diện. <br />
                Chúng tôi xây dựng phần mềm để doanh nghiệp vận hành lâu dài."
              </>
            )}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed max-w-2xl">
            Nexus Studio là đối tác kỹ thuật số đồng hành cùng các Doanh nghiệp & SaaS Startup. Chúng tôi kết hợp tư duy kiến trúc hệ thống quy chuẩn với quy trình phát triển minh bạch.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {principles.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="studio-card p-8 rounded-2xl space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm font-bold text-brand-primary">
                    {item.num}
                  </span>
                  <IconComp size={20} className="text-slate-500 dark:text-slate-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{item.titleVi}</h3>
                  <p className="text-xs font-mono text-brand-primary font-bold">{item.title}</p>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Specs Banner */}
        <div className="studio-card p-8 rounded-2xl bg-slate-50 dark:bg-studio-900 flex flex-col lg:flex-row items-center justify-between gap-8 border-brand-primary/30">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">{t('aboutSlaTitle')}</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Tất cả dự án bàn giao đều đi kèm tài liệu mô tả kiến trúc API, bộ test tự động và cam kết hỗ trợ bảo hành nâng cấp dài hạn theo hợp đồng SLA.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
            <div className="p-3.5 rounded-xl bg-white dark:bg-studio-950 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 flex items-center gap-2 font-bold shadow-sm">
              <CheckCircle2 size={15} className="text-brand-primary" />
              <span>Full Source Code Transfer</span>
            </div>
            <div className="p-3.5 rounded-xl bg-white dark:bg-studio-950 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 flex items-center gap-2 font-bold shadow-sm">
              <CheckCircle2 size={15} className="text-brand-primary" />
              <span>SOC2 & OWASP Ready</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
