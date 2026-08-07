import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Zap, Shield, Smartphone, Terminal, CheckCircle2 } from 'lucide-react';

export const PersonalCraftSection = () => {
  const { isDark } = useTheme();
  const [activeTab, setActiveTab] = useState('performance');

  const codeSnippets = {
    performance: `// Tối ưu Tốc Độ & Rendering Chuẩn High-Performance
export const WebPerformanceEngine = {
  loadSpeed: '< 0.8s',
  lighthouseScore: 100,
  bundleSize: '278KB (Gzip compressed)',
  seoOptimized: true,
  mobileResponsive: '100% Mobile Fluid'
};`,
    cleanCode: `// Mã Nguồn Tinh Gọn, Dễ Quản Trị & Bàn Giao 100%
function PersonalWebsite({ clientReq, designFile }) {
  const customStack = ['React', 'TailwindCSS', 'Vite'];
  
  return (
    <Website 
      speed="Ultra-fast" 
      sourceHandover={true}
      warranty="12 Months Direct 1-1"
    />
  );
}`
  };

  return (
    <section className={`py-16 md:py-24 border-b font-sans ${
      isDark ? 'bg-studio-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900 shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Developer Philosophy */}
          <div className="lg:col-span-6 space-y-6 reveal">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Cam kết chất lượng mã nguồn & tốc độ
            </h2>

            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
              Không dùng theme đóng sẵn rác code hay plugin nặng nề. Mỗi website tôi làm ra đều được viết tay chuẩn chỉnh bằng công nghệ hiện đại (React, Vite, TailwindCSS) cho tốc độ tải cực nhanh và dễ nâng cấp.
            </p>

            {/* Feature Metrics List */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50 dark:bg-studio-950 border border-slate-200 dark:border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-brand-primary/10 border border-brand-primary/25 text-brand-primary flex items-center justify-center shrink-0 mt-0.5">
                  <Zap size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">Tốc độ tải dưới 1 giây</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-medium">Trang web load tức thì, tối ưu trải nghiệm khách hàng và tăng điểm SEO trên Google.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50 dark:bg-studio-950 border border-slate-200 dark:border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-brand-primary/10 border border-brand-primary/25 text-brand-primary flex items-center justify-center shrink-0 mt-0.5">
                  <Smartphone size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">Hiển thị hoàn hảo trên di động</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-medium">Tự động co giãn mượt mà trên iPhone, Android, Tablet và màn hình máy tính lớn.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50 dark:bg-studio-950 border border-slate-200 dark:border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-brand-primary/10 border border-brand-primary/25 text-brand-primary flex items-center justify-center shrink-0 mt-0.5">
                  <Shield size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">Bàn giao 100% mã nguồn gốc</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-medium">Bạn hoàn toàn sở hữu mã nguồn và tên miền của mình mà không bị phụ thuộc.</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Code Interactive Terminal Preview */}
          <div className="lg:col-span-6 reveal reveal-delay-1">
            <div className="rounded-2xl border border-slate-800 bg-slate-950 overflow-hidden shadow-2xl text-xs">
              
              {/* Terminal Titlebar */}
              <div className="bg-slate-900 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
                  <span className="text-[11px] text-slate-400 ml-2 font-bold flex items-center gap-1.5">
                    <Terminal size={14} className="text-brand-primary" />
                    quanganh-craft-engine.js
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setActiveTab('performance')}
                    className={`px-2.5 py-1 rounded-md text-[10px] font-bold transition-colors ${
                      activeTab === 'performance' ? 'bg-brand-primary text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Performance
                  </button>
                  <button
                    onClick={() => setActiveTab('cleanCode')}
                    className={`px-2.5 py-1 rounded-md text-[10px] font-bold transition-colors ${
                      activeTab === 'cleanCode' ? 'bg-brand-primary text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Source Code
                  </button>
                </div>
              </div>

              {/* Terminal Code Display */}
              <div className="p-5 text-slate-200 bg-slate-950/90 leading-relaxed space-y-4">
                <pre className="text-brand-primary font-bold overflow-x-auto text-[11px]">
                  {codeSnippets[activeTab]}
                </pre>

                <div className="pt-3 border-t border-slate-800/80 grid grid-cols-2 gap-3 text-[11px] font-semibold">
                  <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                    <span>Speed Score: 100/100</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                    <span>SEO Ready</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
