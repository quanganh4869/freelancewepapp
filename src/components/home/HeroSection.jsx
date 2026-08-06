import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Terminal, Code2, Cpu, Sparkles, Layers, ShieldCheck } from 'lucide-react';

export const HeroSection = ({ onOpenRequestModal }) => {
  const [activeTab, setActiveTab] = useState('architecture');

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-16 md:pb-28 bg-grid-pattern border-b border-white/5 font-sans">
      
      {/* Ambient Red Glow Background */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-brand-primary/15 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-10 right-10 w-[350px] h-[350px] bg-brand-navy/30 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-studio-900 border border-brand-primary/30 text-xs font-mono text-slate-200 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-primary animate-pulse"></span>
              <span className="font-bold text-white uppercase tracking-wider">NEXUS DIGITAL PRODUCT STUDIO</span>
              <span className="text-slate-600">|</span>
              <span className="text-brand-primary font-semibold">Booking Q3/Q4 Open</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.18]">
              Biến ý tưởng của bạn thành <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-rose-400 to-amber-400">
                Web App thực tế.
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
              Chúng tôi là Digital Product Studio chuyên thiết kế & lập trình Web App cao cấp cho Doanh nghiệp & Startup. Tập trung vào <span className="text-white font-semibold">hiệu năng, kiến trúc mở rộng và trải nghiệm người dùng vượt trội.</span>
            </p>

            {/* Feature Highlights checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-300 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-brand-primary shrink-0" />
                <span>Mã nguồn tùy chỉnh <strong className="text-white">Custom Code 100%</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-brand-primary shrink-0" />
                <span>Bảo mật chuẩn <strong className="text-white">Enterprise & SOC2 Ready</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-brand-primary shrink-0" />
                <span>Cam kết Uptime SLA <strong className="text-white">99.9% Uptime SLA</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-brand-primary shrink-0" />
                <span>Bàn giao MVP nhanh chóng trong <strong className="text-white">3–8 tuần</strong></span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                onClick={() => onOpenRequestModal()}
                className="flex items-center justify-center gap-3 bg-brand-primary hover:bg-brand-hover text-white text-sm font-bold px-8 py-4 rounded-xl shadow-glow-primary transition-all transform hover:-translate-y-0.5"
              >
                <span>Bắt Đầu Dự Án Web App</span>
                <ArrowRight size={18} />
              </button>

              <a
                href="#cost-estimator"
                className="flex items-center justify-center gap-2 bg-studio-900 hover:bg-studio-850 text-slate-200 border border-white/10 text-sm font-semibold px-6 py-4 rounded-xl transition-all hover:border-brand-primary/40"
              >
                <Cpu size={16} className="text-brand-primary" />
                <span>Tính Chi Phí Lập Trình</span>
              </a>
            </div>

            {/* Key Trust Signals */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 max-w-lg">
              <div>
                <p className="text-2xl font-extrabold text-white font-mono">100%</p>
                <p className="text-[11px] text-slate-400 font-medium">Custom Architecture</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-brand-primary font-mono">99.9%</p>
                <p className="text-[11px] text-slate-400 font-medium">Uptime SLA Guarantee</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-emerald-400 font-mono">3–8w</p>
                <p className="text-[11px] text-slate-400 font-medium">Average MVP Delivery</p>
              </div>
            </div>

          </div>

          {/* Right Column: Web App Interactive Architectural Preview */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-white/10 bg-studio-900 shadow-2xl overflow-hidden backdrop-blur-xl border-brand-primary/20">
              
              {/* Window Header Bar */}
              <div className="bg-studio-950 px-4 py-3 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="ml-2 font-mono text-xs text-slate-400">nexus-architecture-v2.config</span>
                </div>
                <div className="flex items-center gap-1 font-mono text-[11px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                  <span>BUILD OK</span>
                </div>
              </div>

              {/* Window Navigation Tabs */}
              <div className="flex border-b border-white/10 bg-studio-950/50">
                <button
                  onClick={() => setActiveTab('architecture')}
                  className={`px-4 py-2.5 text-xs font-mono font-bold flex items-center gap-2 transition-colors border-b-2 ${
                    activeTab === 'architecture'
                      ? 'border-brand-primary text-white bg-studio-900'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Cpu size={14} /> System Spec
                </button>
                <button
                  onClick={() => setActiveTab('api')}
                  className={`px-4 py-2.5 text-xs font-mono font-bold flex items-center gap-2 transition-colors border-b-2 ${
                    activeTab === 'api'
                      ? 'border-brand-primary text-white bg-studio-900'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Terminal size={14} /> API Payload
                </button>
                <button
                  onClick={() => setActiveTab('preview')}
                  className={`px-4 py-2.5 text-xs font-mono font-bold flex items-center gap-2 transition-colors border-b-2 ${
                    activeTab === 'preview'
                      ? 'border-brand-primary text-white bg-studio-900'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Code2 size={14} /> Live UI Widget
                </button>
              </div>

              {/* Window Content Body */}
              <div className="p-5 font-mono text-xs space-y-4">
                {activeTab === 'architecture' && (
                  <div className="space-y-3">
                    <div className="p-3 rounded-lg bg-studio-950 border border-white/5 space-y-2">
                      <div className="flex items-center justify-between text-slate-300">
                        <span className="text-brand-primary font-bold">⚡ Frontend Core:</span>
                        <span className="text-slate-400">React 18 / Next.js SSR</span>
                      </div>
                      <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-brand-primary h-full w-full"></div>
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-studio-950 border border-white/5 space-y-2">
                      <div className="flex items-center justify-between text-slate-300">
                        <span className="text-amber-400 font-bold">🛡️ Backend Architecture:</span>
                        <span className="text-slate-400">Node.js / REST & WebSockets</span>
                      </div>
                      <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-amber-400 h-full w-[95%]"></div>
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-studio-950 border border-white/5 space-y-2">
                      <div className="flex items-center justify-between text-slate-300">
                        <span className="text-emerald-400 font-bold">🗄️ Database & Cache:</span>
                        <span className="text-slate-400">PostgreSQL + Redis Caching</span>
                      </div>
                      <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-emerald-400 h-full w-[98%]"></div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'api' && (
                  <pre className="p-3 rounded-lg bg-studio-950 border border-white/5 text-slate-300 overflow-x-auto text-[11px] leading-relaxed">
{`// POST /api/v1/projects/start
{
  "status": 201,
  "client": "Marcus Vance",
  "project": "OmniDesk B2B SaaS",
  "estimatedDelivery": "8 Weeks",
  "securityAudit": "PASSED (SOC2 Ready)",
  "techStack": ["React", "Node", "PostgreSQL"],
  "slaSupport": true
}`}
                  </pre>
                )}

                {activeTab === 'preview' && (
                  <div className="p-4 rounded-lg bg-studio-950 border border-white/5 space-y-3 font-sans">
                    <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
                      <span className="font-bold text-white">Live App System Status</span>
                      <span className="text-emerald-400 font-mono text-[10px]">● Operational</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="p-2 rounded bg-studio-900 border border-slate-800">
                        <p className="text-slate-400 text-[10px]">Active Users</p>
                        <p className="font-bold text-white text-sm font-mono">14,250</p>
                      </div>
                      <div className="p-2 rounded bg-studio-900 border border-slate-800">
                        <p className="text-slate-400 text-[10px]">Response Time</p>
                        <p className="font-bold text-emerald-400 text-sm font-mono">28ms</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Footer status line */}
                <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>Standard: ISO 27001 Clean Code</span>
                  <span className="text-brand-primary font-bold">NEXUS STUDIO</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
