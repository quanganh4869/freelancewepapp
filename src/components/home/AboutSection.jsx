import React from 'react';
import { ShieldCheck, Code, Layers, Cpu, Users, Terminal, CheckCircle2 } from 'lucide-react';

export const AboutSection = () => {
  const principles = [
    {
      icon: Code,
      title: 'Custom Architecture Only',
      titleVi: 'Kiến Trúc Tùy Chỉnh 100%',
      desc: 'Chúng tôi không sử dụng template có sẵn. Mọi dòng code và kiến trúc CSDL đều được thiết kế từ đầu tối ưu cho riêng bài toán kinh doanh của bạn.'
    },
    {
      icon: Cpu,
      title: 'Performance & Scale',
      titleVi: 'Hiệu Năng & Khả Năng Mở Rộng',
      desc: 'Áp dụng Server-Side Rendering (SSR), Caching 3 lớp (Redis/CDN), và REST/GraphQL API chuẩn hóa để chịu tải hàng trăm nghìn truy cập cùng lúc.'
    },
    {
      icon: ShieldCheck,
      title: 'Security & Enterprise Standards',
      titleVi: 'Bảo Mật Chuẩn Enterprise',
      desc: 'Tuân thủ các tiêu chuẩn mã hóa dữ liệu nghiêm ngặt (ISO 27001, OWASP Top 10), bảo vệ dữ liệu người dùng và phòng chống tấn công mạng.'
    },
    {
      icon: Users,
      title: 'Transparent Communication',
      titleVi: 'Giao Tiếp Minh Bạch & Đồng Hành',
      desc: 'Báo cáo tiến độ Sprint hàng tuần qua Slack/Jira, cấp quyền truy cập Staging environment theo thời gian thực và hỗ trợ kỹ thuật SLA 24/7 sau bàn giao.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-studio-950 relative border-b border-white/5 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium">
            PRODUCT STUDIO PHILOSOPHY
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Về Nexus Studio • Định Hướng Kỹ Thuật
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Chúng tôi không phải công ty gia công phần mềm giá rẻ đại trà. Nexus Studio là đối tác chiến lược về kỹ thuật phần mềm (Engineering Partner) đồng hành cùng Doanh nghiệp & SaaS Startup.
          </p>
        </div>

        {/* Studio Core Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {principles.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="studio-card-border p-8 rounded-2xl space-y-4 hover:border-brand-primary/40 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary">
                  <IconComp size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{item.titleVi}</h3>
                  <p className="text-xs font-mono text-brand-primary">{item.title}</p>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Studio Specs Banner */}
        <div className="studio-card-border p-8 rounded-2xl bg-studio-900 flex flex-col lg:flex-row items-center justify-between gap-8 border-cyan-500/20">
          <div className="space-y-3 max-w-xl">
            <h3 className="text-xl font-bold text-white">Cam kết chất lượng mã nguồn & Hợp đồng SLA</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Tất cả các dự án bàn giao bởi Nexus Studio đều đi kèm tài liệu mô tả kiến trúc API, bộ test tự động (Automated Tests) và cam kết bảo hành nâng cấp dài hạn theo tiêu chuẩn SLA.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
            <div className="p-3.5 rounded-xl bg-studio-950 border border-slate-800 text-slate-300 flex items-center gap-2">
              <CheckCircle2 size={16} className="text-emerald-400" />
              <span>Full Source Code Transfer</span>
            </div>
            <div className="p-3.5 rounded-xl bg-studio-950 border border-slate-800 text-slate-300 flex items-center gap-2">
              <CheckCircle2 size={16} className="text-emerald-400" />
              <span>SOC2 & OWASP Ready</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
