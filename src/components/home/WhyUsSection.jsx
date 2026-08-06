import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Code, Cpu, Sparkles, ShieldCheck, MessageSquare, Headphones } from 'lucide-react';

export const WhyUsSection = () => {
  const { t } = useLanguage();

  const advantages = [
    {
      num: '01',
      icon: Code,
      title: 'CUSTOM ENGINEERING',
      titleVi: '01 CUSTOM ENGINEERING • Không Template',
      desc: 'Nói KHÔNG với template dựng sẵn hoặc CMS cồng kềnh. Mỗi dòng code Web App đều được viết tay chính xác theo logic kinh doanh của bạn.'
    },
    {
      num: '02',
      icon: Cpu,
      title: 'BUSINESS-FIRST ARCHITECTURE',
      titleVi: '02 BUSINESS-FIRST • Công Nghệ Tối Ưu',
      desc: 'Sử dụng React 18, Next.js, Node.js, PostgreSQL và Docker. Đảm bảo tốc độ tải dưới 1 giây, bảo mật cao và tương thích chuẩn OpenAPI.'
    },
    {
      num: '03',
      icon: Sparkles,
      title: 'EDITORIAL UI/UX DESIGN',
      titleVi: '03 EDITORIAL UI/UX • Chuẩn Studio',
      desc: 'Giao diện sang trọng, đẳng cấp chuẩn Editorial Digital Product Studio. Tập trung tối đa hóa tỷ lệ chuyển đổi và trải nghiệm thao tác người dùng.'
    },
    {
      num: '04',
      icon: ShieldCheck,
      title: 'SCALABLE BY DESIGN',
      titleVi: '04 SCALABLE BY DESIGN • Sẵn Sàng Mở Rộng',
      desc: 'Hệ thống thiết kế theo mô hình Microservices/Modular, giúp bạn dễ dàng nâng cấp thêm tính năng mà không phải đập đi xây lại.'
    },
    {
      num: '05',
      icon: MessageSquare,
      title: 'TRANSPARENT WORKFLOW',
      titleVi: '05 TRANSPARENT WORKFLOW • Minh Bạch 24/7',
      desc: 'Báo cáo tiến độ theo tuần qua Slack & Jira. Bạn được cập nhật liên tục từng Sprint và thử nghiệm tính năng ngay khi hoàn tất.'
    },
    {
      num: '06',
      icon: Headphones,
      title: 'LONG-TERM PARTNERSHIP',
      titleVi: '06 LONG-TERM PARTNERSHIP • Bảo Trì Dài Hạn',
      desc: 'Cam kết Uptime 99.9%. Đội ngũ kỹ thuật túc trực xử lý sự cố tức thì và bảo hành hệ thống lâu dài sau khi triển khai.'
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-studio-900 border-b border-white/10 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="studio-badge">
            <span>{t('whyUsTag')}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            {t('whyUsTitle')}
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            {t('whyUsDesc')}
          </p>
        </div>

        {/* Editorial Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="studio-card p-8 rounded-xl space-y-4 group hover:border-brand-primary transition-all duration-200"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm font-bold text-brand-primary">
                    {item.num}
                  </span>
                  <Icon size={20} className="text-slate-400 group-hover:text-brand-primary transition-colors" />
                </div>
                <h3 className="text-base font-bold group-hover:text-brand-primary transition-colors">
                  {item.titleVi}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
