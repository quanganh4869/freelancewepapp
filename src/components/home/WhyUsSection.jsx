import React from 'react';
import { ShieldCheck, Code, Sparkles, Cpu, MessageSquare, Headphones } from 'lucide-react';

export const WhyUsSection = () => {
  const advantages = [
    {
      icon: Code,
      title: 'Custom Solutions',
      titleVi: 'Giải Pháp Độc Quyền 100%',
      desc: 'Nói KHÔNG với template dựng sẵn hoặc CMS cồng kềnh. Mỗi dòng code Web App đều được viết tay chính xác theo logic kinh doanh của bạn.'
    },
    {
      icon: Cpu,
      title: 'Modern Technology',
      titleVi: 'Công Nghệ Hiện Đại Nhất',
      desc: 'Sử dụng React 18, Next.js, Node.js, PostgreSQL và Docker. Đảm bảo tốc độ tải dưới 1 giây, bảo mật cao và tương thích chuẩn OpenAPI.'
    },
    {
      icon: Sparkles,
      title: 'Clean UI/UX Architecture',
      titleVi: 'Thiết Kế UI/UX Chuẩn Studio',
      desc: 'Giao diện sang trọng, đẳng cấp chuẩn Editorial & Digital Product Studio. Tập trung tối đa hóa tỷ lệ chuyển đổi và trải nghiệm thao tác người dùng.'
    },
    {
      icon: ShieldCheck,
      title: 'Scalable Architecture',
      titleVi: 'Kiến Trúc Sẵn Sàng Mở Rộng',
      desc: 'Hệ thống thiết kế theo mô hình Microservices/Modular, giúp bạn dễ dàng nâng cấp thêm tính năng mà không phải đập đi xây lại.'
    },
    {
      icon: MessageSquare,
      title: 'Transparent Communication',
      titleVi: 'Giao Tiếp Minh Bạch 24/7',
      desc: 'Báo cáo tiến độ theo tuần qua Slack & Jira. Bạn được cập nhật liên tục từng Sprint và thử nghiệm tính năng ngay khi hoàn tất.'
    },
    {
      icon: Headphones,
      title: 'Long-term Support & SLA',
      titleVi: 'Đồng Hành & Bảo Trì Dài Hạn',
      desc: 'Cam kết Uptime 99.9%. Đội ngũ kỹ thuật túc trực xử lý sự cố tức thì và bảo hành hệ thống lâu dài sau khi triển khai.'
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-studio-900 relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-mono font-medium">
            WHY CHOOSE NEXUS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Tại sao các thương hiệu tin tưởng chúng tôi?
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Chúng tôi đặt chất lượng kỹ thuật, tính thẩm mỹ và độ tin cậy của phần mềm lên hàng đầu.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-studio-950 border border-white/5 hover:border-brand-primary/40 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all mb-6 shadow-glow-primary">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-brand-primary transition-colors">
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
