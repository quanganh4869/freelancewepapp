import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Check, Mail, Phone, User, ShieldCheck, HeartHandshake } from 'lucide-react';

export const AboutSection = ({ onOpenRequestModal }) => {
  const { isDark } = useTheme();

  return (
    <section id="about" className={`py-16 md:py-24 border-b font-sans ${
      isDark ? 'bg-studio-950 border-white/10 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Personal Photo & Profile Card */}
          <div className="lg:col-span-5 reveal">
            <div className={`p-7 rounded-2xl border space-y-6 shadow-md ${
              isDark ? 'bg-studio-900 border-slate-800' : 'bg-white border-slate-200'
            }`}>
              
              <div className="flex items-center gap-4 border-b border-slate-200 dark:border-slate-800 pb-5">
                <div className="w-16 h-16 rounded-2xl bg-brand-primary text-white font-mono font-bold flex items-center justify-center text-xl shadow-md shrink-0">
                  QA
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white font-display">Nguyễn Quang Anh</h3>
                  <p className="text-xs font-mono text-brand-primary font-bold mt-0.5">Freelancer Web Developer</p>
                  <p className="text-[11px] text-slate-500 font-mono">Việt Nam • Hỗ trợ toàn quốc</p>
                </div>
              </div>

              <div className="space-y-3 text-xs font-mono">
                <div className="flex justify-between py-1.5 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-slate-500">Chuyên môn:</span>
                  <span className="font-bold text-slate-900 dark:text-white">React, Next.js, Node.js</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-slate-500">Hình thức:</span>
                  <span className="font-bold text-brand-primary">Trực tiếp 1-1 (Freelance)</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-slate-500">Ngân sách nhận làm:</span>
                  <span className="font-bold text-slate-900 dark:text-white">Từ 1.000.000đ trở lên</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-slate-500">Zalo / Hotline:</span>
                  <a href="tel:0935989872" className="font-bold text-brand-primary hover:underline">0935 989 872</a>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-brand-primary/10 border border-brand-primary/20 text-xs text-slate-700 dark:text-slate-300 space-y-1">
                <p className="font-bold text-brand-primary font-display flex items-center gap-1.5">
                  <HeartHandshake size={15} />
                  <span>Cam kết trách nhiệm</span>
                </p>
                <p className="text-[11px] leading-relaxed">
                  Làm việc trực tiếp không qua môi giới hay sale. Báo giá đúng, làm chuẩn và bàn giao đúng hẹn.
                </p>
              </div>

            </div>
          </div>

          {/* Right Column: Personal Story & Value Proposition */}
          <div className="lg:col-span-7 space-y-6 reveal reveal-delay-1">
            
            <div className="studio-badge">
              <User size={14} />
              <span>VỀ TÔI</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white font-display">
              Tôi Là Quang Anh — Freelancer Lập Trình Web Theo Yêu Cầu
            </h2>

            <div className="space-y-4 text-slate-700 dark:text-slate-300 text-sm leading-relaxed font-medium">
              <p>
                Tôi là freelancer chuyên thiết kế và phát triển website theo yêu cầu. Tôi trực tiếp trao đổi, xây dựng và bàn giao sản phẩm, giúp khách hàng có một website phù hợp với nhu cầu và ngân sách.
              </p>
              <p>
                Khác với các công ty agency hay đội ngũ cồng kềnh với nhiều chi phí vận hành, khi làm việc với tôi, bạn sẽ trao đổi trực tiếp 1-1 với người trực tiếp viết mã cho website của bạn.
              </p>
            </div>

            {/* Why Work With Quang Anh */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-bold font-display text-slate-800 dark:text-slate-200">
              <div className="p-3.5 rounded-xl bg-white dark:bg-studio-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-2.5">
                <ShieldCheck size={18} className="text-brand-primary shrink-0 mt-0.5" />
                <div>
                  <span>Chi phí hợp lý từ 1 triệuđ</span>
                  <p className="text-[11px] font-normal text-slate-500 font-sans mt-0.5">Không phát sinh chi phí thừa không cần thiết</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white dark:bg-studio-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-2.5">
                <ShieldCheck size={18} className="text-brand-primary shrink-0 mt-0.5" />
                <div>
                  <span>Giao diện đẹp & Tải nhanh</span>
                  <p className="text-[11px] font-normal text-slate-500 font-sans mt-0.5">Tối ưu mượt mà trên di động và máy tính</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white dark:bg-studio-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-2.5">
                <ShieldCheck size={18} className="text-brand-primary shrink-0 mt-0.5" />
                <div>
                  <span>Bàn giao mã nguồn 100%</span>
                  <p className="text-[11px] font-normal text-slate-500 font-sans mt-0.5">Bạn toàn quyền sở hữu website của mình</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white dark:bg-studio-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-2.5">
                <ShieldCheck size={18} className="text-brand-primary shrink-0 mt-0.5" />
                <div>
                  <span>Bảo hành & Hướng dẫn tận tình</span>
                  <p className="text-[11px] font-normal text-slate-500 font-sans mt-0.5">Hỗ trợ sửa lỗi và hướng dẫn cập nhật bài viết</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenRequestModal()}
                className="btn-primary py-3.5 px-8 text-sm font-bold font-display"
              >
                <span>Trao Đổi Trực Tiếp Với Quang Anh</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
