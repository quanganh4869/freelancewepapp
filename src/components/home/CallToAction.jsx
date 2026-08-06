import React from 'react';
import { ArrowRight, Sparkles, PhoneCall } from 'lucide-react';

export const CallToAction = ({ onOpenRequestModal }) => {
  return (
    <section className="py-24 bg-studio-950 relative overflow-hidden font-sans">
      {/* Glow Ambient background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-brand-primary/15 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="studio-card-border p-10 sm:p-16 rounded-3xl bg-studio-900/90 border-brand-primary/30 shadow-2xl space-y-8">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-mono font-bold uppercase tracking-wider">
            <Sparkles size={14} /> KHỞI TẠO TƯ VẤN NGAY HÔM NAY
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Bạn Đang Cần Xây Nhà? <br />
            <span className="text-brand-primary">Để Xây Nhà Đẹp Đồng Hành Cùng Bạn.</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Sẵn sàng biến ý tưởng về ngôi nhà mơ ước thành hiện thực. Nhận tư vấn phương án thiết kế 3D & dự toán chi phí trọn gói trong vòng 24 giờ.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenRequestModal()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-brand-primary hover:bg-brand-hover text-white text-sm font-bold px-8 py-4 rounded-xl shadow-glow-primary transition-all transform hover:-translate-y-0.5"
            >
              <span>Đăng Ký Nhận Báo Giá Chi Tiết</span>
              <ArrowRight size={18} />
            </button>

            <a
              href="tel:0908123456"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-studio-950 hover:bg-studio-800 text-slate-200 border border-slate-800 text-sm font-bold px-7 py-4 rounded-xl transition-all"
            >
              <PhoneCall size={18} className="text-brand-primary" />
              <span>Hotline KTS: 0908.123.456</span>
            </a>
          </div>

          <div className="pt-6 text-xs font-mono text-slate-400 flex flex-wrap items-center justify-center gap-6">
            <span>✓ Miễn phí 100% bản vẽ 3D</span>
            <span>✓ Cam kết 0 phát sinh chi phí</span>
            <span>✓ Bảo hành kết cấu 10 năm</span>
          </div>

        </div>
      </div>
    </section>
  );
};
