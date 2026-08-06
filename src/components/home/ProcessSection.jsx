import React, { useState } from 'react';
import { PhoneCall, MapPin, Compass, FileCheck, HardHat, Key, ArrowRight } from 'lucide-react';

export const ProcessSection = ({ onOpenRequestModal }) => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'Tư Vấn & Tiếp Nhận',
      titleVi: '1. Tiếp Nhận Yêu Cầu & Tư Vấn',
      icon: PhoneCall,
      shortDesc: 'Lắng nghe mong muốn của chủ nhà về phong cách kiến trúc, quy mô và ngân sách đầu tư.',
      details: 'Đội ngũ KTS tư vấn định hướng phong cách thiết kế (Hiện đại, Tân cổ điển, Indochine...), phân tích diện tích xây dựng và dự trù ngân sách sơ bộ phù hợp khả năng tài chính của chủ nhà.'
    },
    {
      num: '02',
      title: 'Khảo Sát Hiện Trạng',
      titleVi: '2. Khảo Sát & Đo Đạc Hiện Trạng',
      icon: MapPin,
      shortDesc: 'Kỹ sư trực tiếp khảo sát lô đất, đo đạc kích thước và kiểm tra địa chất công trình.',
      details: 'Khảo sát hiện trạng lô đất, đo đạc ranh giới xây dựng, kiểm tra chất lượng địa chất nền móng để đưa ra giải pháp móng ép cọc hoặc móng băng tối ưu nhất.'
    },
    {
      num: '03',
      title: 'Thiết Kế 3D & Bản Vẽ',
      titleVi: '3. Thiết Kế 3D & Bản Vẽ Kỹ Thuật',
      icon: Compass,
      shortDesc: 'Triển khai phối cảnh 3D ngoại thất, nội thất và mặt bằng bố trí công năng từng tầng.',
      details: 'KTS thực hiện bản vẽ 3D sắc nét giúp chủ nhà hình dung trọn vẹn ngôi nhà trước khi thi công. Chỉnh sửa chi tiết theo ý gia chủ và bàn giao đầy đủ hồ sơ kỹ thuật thi công.'
    },
    {
      num: '04',
      title: 'Báo Giá & Hợp Đồng',
      titleVi: '4. Dự Toán Báo Giá & Ký Hợp Đồng',
      icon: FileCheck,
      shortDesc: 'Bóc tách khối lượng vật tư chi tiết, chốt đơn giá minh bạch và ký hợp đồng thi công.',
      details: 'Bảng bóc tách khối lượng vật tư minh bạch 100%. Cam kết sử dụng đúng thương hiệu vật tư đã ký kết (Thép Hòa Phát, Xi măng Hà Tiên, Gạch Tuynel, Sơn Inchem...) và không phát sinh chi phí.'
    },
    {
      num: '05',
      title: 'Thi Công & Giám Sát',
      titleVi: '5. Thi Công Phần Thô & Hoàn Thiện',
      icon: HardHat,
      shortDesc: 'Thi công bê tông móng dầm sàn, xây trát tường và hoàn thiện lắp đặt thiết bị.',
      details: 'Kỹ sư giám sát túc trực hiện trường 24/7. Thực hiện đầy đủ các bước nghiệm thu thép móng, cốp pha sàn, mác bê tông tươi và báo cáo nhật ký công trình hàng ngày cho chủ nhà.'
    },
    {
      num: '06',
      title: 'Bàn Giao & Bảo Hành',
      titleVi: '6. Bàn Giao Chìa Khóa & Bảo Hành',
      icon: Key,
      shortDesc: 'Vệ sinh công nghiệp, nghiệm thu tổng thể, bàn giao nhà và trao sổ bảo hành 10 năm.',
      details: 'Tiến hành vệ sinh công nghiệp sạch sẽ, nghiệm thu tổng thể cùng chủ nhà. Bàn giao chìa khóa trao tay và kích hoạt chính sách bảo hành kết cấu 10 năm & bảo trì định kỳ hàng năm.'
    }
  ];

  return (
    <section id="process" className="py-24 bg-studio-900 relative border-b border-white/5 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-mono font-bold tracking-wider uppercase">
            QUY TRÌNH CHUẨN MỰC
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Quy Trình Thi Công 6 Bước Chuyên Nghiệp
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Từ ý tưởng ban đầu đến ngôi nhà hoàn thiện trọn gói chìa khóa trao tay, chúng tôi cam kết quy trình minh bạch, an toàn và chuẩn mực.
          </p>
        </div>

        {/* Process Steps Horizontal Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
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
                BƯỚC {steps[activeStep].num}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {steps[activeStep].titleVi}
              </h3>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              {steps[activeStep].details}
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={() => onOpenRequestModal(`Tư vấn quy trình từ bước ${steps[activeStep].num}`)}
              className="flex items-center gap-2 bg-brand-primary hover:bg-brand-hover text-white text-xs font-bold px-6 py-3.5 rounded-xl shadow-glow-primary transition-all"
            >
              <span>Đăng Ký Tư Vấn Ngay</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
