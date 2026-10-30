import React from 'react';

export const NoTemplateSection = () => {
  return (
    <section className="py-20 sm:py-28 border-b border-[rgba(180,170,255,0.14)] bg-[#070810]/60 relative overflow-hidden">
      
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-[#00e7ff]/10 via-[#2a6bff]/10 to-[#ff00e7]/10 blur-[100px] pointer-events-none" />

      <div className="max-w-[1100px] mx-auto px-5 sm:px-8 text-center space-y-8 relative">
        <p className="font-disp text-[28px] sm:text-[42px] md:text-[52px] font-bold text-[#f3f2fb] leading-[1.12] tracking-tight max-w-[920px] mx-auto">
          Ai cũng có thể kéo thả một template. Tôi viết từng dòng code để website của bạn làm được một điều quan trọng nhất — biến bạn thành <span className="grad">sự lựa chọn rõ ràng nhất.</span>
        </p>
      </div>
    </section>
  );
};

export default NoTemplateSection;
