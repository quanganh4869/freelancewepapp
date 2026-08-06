import React from 'react';
import { ShieldCheck, HardHat, Compass, Sparkles, Award, PhoneCall } from 'lucide-react';

export const WhyUsSection = () => {
  const advantages = [
    {
      icon: Compass,
      title: 'Custom Architecture',
      titleVi: 'Kiến Trúc Độc Bản 100%',
      desc: 'Nói KHÔNG với thiết kế rập khuôn. Mỗi ngôi nhà đều được KTS nghiên cứu ánh sáng, hướng gió và phong thủy riêng cho gia chủ.'
    },
    {
      icon: ShieldCheck,
      title: 'Genuine Materials',
      titleVi: 'Vật Tư Chính Hãng Minh Bạch',
      desc: 'Cam kết 100% vật tư đầu vào đúng thương hiệu niêm yết trong hợp đồng (Thép Hòa Phát, Xi măng Hà Tiên, Gạch Tuynel...)'
    },
    {
      icon: HardHat,
      title: '24/7 Site Supervision',
      titleVi: 'Giám Sát Hiện Trường 24/7',
      desc: 'Kỹ sư công trình thường trực tại hiện trường kiểm tra từng khâu đan thép móng, đổ bê tông và cập nhật tiến độ hàng ngày.'
    },
    {
      icon: Award,
      title: 'Zero Extra Fee Guarantee',
      titleVi: 'Tuyệt Đối Không Phát Sinh Phí',
      desc: 'Dự toán báo giá chính xác 100% ngay từ đầu. Cam kết không nảy sinh chi phí vô lý trong suốt quá trình thi công.'
    },
    {
      icon: Sparkles,
      title: 'Free 3D Design Package',
      titleVi: 'Tặng 100% Bản Vẽ Thiết Kế',
      desc: 'Miễn phí hoàn toàn bộ hồ sơ thiết kế 3D kiến trúc & kết cấu khi chủ nhà ký hợp đồng thi công trọn gói.'
    },
    {
      icon: PhoneCall,
      title: '10-Year Warranty SLA',
      titleVi: 'Bảo Hành Kết Cấu 10 Năm',
      desc: 'Sổ bảo hành kết cấu 10 năm kèm chính sách kiểm tra bảo trì định kỳ hàng năm hoàn toàn miễn phí.'
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-studio-900 relative border-b border-white/5 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-mono font-bold tracking-wider uppercase">
            ƯU THẾ NỔI BẬT
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Tại Sao Chọn Xây Nhà Đẹp Studio?
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Chúng tôi tự hào trao gửi những ngôi nhà kiên cố, sang trọng và bền vững cùng thời gian.
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
