import React from 'react';
import { ArrowRight, Sparkles, MessageSquare } from 'lucide-react';

export const CallToAction = ({ onOpenRequestModal }) => {
  return (
    <section className="py-24 bg-studio-950 relative overflow-hidden">
      {/* Glow Ambient background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-brand-primary/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="studio-card-border p-10 sm:p-16 rounded-3xl bg-studio-900/90 border-brand-primary/30 shadow-2xl space-y-8">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-mono font-medium">
            <Sparkles size={14} /> START A PROJECT TODAY
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Have an idea? <span className="text-brand-primary">Let's build it.</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Sẵn sàng nâng tầm doanh nghiệp với một ứng dụng Web App đẳng cấp, bảo mật và tối ưu quy mô? Nhận tư vấn kỹ thuật & báo giá chi tiết trong vòng 24 giờ.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenRequestModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-brand-primary hover:bg-brand-hover text-white text-base font-semibold px-8 py-4 rounded-xl shadow-glow-primary transition-all transform hover:-translate-y-0.5"
            >
              <span>Start Your Project</span>
              <ArrowRight size={18} />
            </button>

            <a
              href="mailto:hello@nexusstudio.dev"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-studio-950 hover:bg-studio-800 text-slate-300 border border-white/10 text-base font-medium px-7 py-4 rounded-xl transition-all"
            >
              <MessageSquare size={18} />
              <span>Liên hệ trực tiếp</span>
            </a>
          </div>

          <div className="pt-6 text-xs font-mono text-slate-400 flex items-center justify-center gap-6">
            <span>✓ Miễn phí tư vấn kiến trúc</span>
            <span>✓ Bảo mật NDA 100%</span>
            <span>✓ Phản hồi trong 24h</span>
          </div>

        </div>
      </div>
    </section>
  );
};
