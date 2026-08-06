import React from 'react';
import { ShieldCheck, Building2, HardHat, Compass, Users, CheckCircle2, Award } from 'lucide-react';

export const AboutSection = () => {
  const principles = [
    {
      icon: Compass,
      title: 'Architectural Excellence',
      titleVi: 'Kiến Trúc Độc Bản & Đẳng Cấp',
      desc: 'Mỗi bản thiết kế là một tác phẩm kiến trúc độc bản hòa hợp phong thủy, tối ưu hóa công năng sinh hoạt và thể hiện cá tính riêng của từng gia chủ.'
    },
    {
      icon: ShieldCheck,
      title: '100% Genuine Materials',
      titleVi: 'Vật Tư Chính Hãng Minh Bạch',
      desc: 'Cam kết 100% vật tư đầu vào đúng chủng loại thương hiệu đã ký kết (Thép Hòa Phát, Xi măng Hà Tiên, Gạch Tuynel, Sơn Inchem...). Phạt 200% nếu phát hiện vật tư giả.'
    },
    {
      icon: HardHat,
      title: 'Rigorous Quality Control',
      titleVi: 'Giám Sát & Thi Công Chuẩn Mực',
      desc: 'Đội ngũ kỹ sư kết cấu nhiều năm kinh nghiệm túc trực giám sát hiện trường 24/7. Nghiệm thu nghiêm ngặt từng giai đoạn đan thép, đổ bê tông móng dầm sàn.'
    },
    {
      icon: Award,
      title: 'Zero Cost Overrun Guarantee',
      titleVi: 'Cam Kết Không Phát Sinh Chi Phí',
      desc: 'Dự toán báo giá trọn gói chi tiết minh bạch ngay từ hợp đồng ban đầu. Chủ nhà hoàn toàn yên tâm tâm lý tài chính không phát sinh bất kỳ khoản phí phụ nào.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-studio-950 relative border-b border-white/5 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-mono font-bold tracking-wider uppercase">
            VỀ XÂY NHÀ ĐẸP
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Giá Trị Cốt Lõi & Cam Kết Kỹ Thuật
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Chúng tôi tự hào là đơn vị hàng đầu trong lĩnh vực thiết kế kiến trúc và thi công xây dựng trọn gói. Đặt sự an tâm của khách hàng làm thước đo thành công.
          </p>
        </div>

        {/* Studio Core Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {principles.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="studio-card-border p-8 rounded-2xl space-y-4 hover:border-brand-primary/40 transition-all duration-300 bg-studio-900"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-primary/10 border border-brand-primary/30 flex items-center justify-center text-brand-primary shadow-glow-primary">
                  <IconComp size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{item.titleVi}</h3>
                  <p className="text-xs font-mono text-brand-primary font-bold">{item.title}</p>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Specs Banner */}
        <div className="studio-card-border p-8 rounded-2xl bg-studio-900 flex flex-col lg:flex-row items-center justify-between gap-8 border-brand-primary/30">
          <div className="space-y-3 max-w-xl">
            <h3 className="text-xl font-bold text-white">Chính Sách Bảo Hành Công Trình 10 Năm</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Tất cả công trình do Xây Nhà Đẹp thi công trọn gói đều được cấp Sổ Bảo Hành Kết Cấu 10 năm và bảo trì kiểm tra định kỳ hàng năm hoàn toàn miễn phí.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
            <div className="p-3.5 rounded-xl bg-studio-950 border border-slate-800 text-slate-200 flex items-center gap-2 font-bold">
              <CheckCircle2 size={16} className="text-brand-primary" />
              <span>Bảo Hành Kết Cấu 10 Năm</span>
            </div>
            <div className="p-3.5 rounded-xl bg-studio-950 border border-slate-800 text-slate-200 flex items-center gap-2 font-bold">
              <CheckCircle2 size={16} className="text-brand-primary" />
              <span>Miễn Phí Thiết Kế 100%</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
