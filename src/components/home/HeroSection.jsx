import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Terminal, Code2, Server, Cpu, Play } from 'lucide-react';

export const HeroSection = ({ onOpenRequestModal }) => {
  const [activeTab, setActiveTab] = useState('architecture');

  return (
    <section className="relative overflow-hidden pt-12 pb-24 md:pt-20 md:pb-32 bg-grid-pattern border-b border-white/5">
      {/* Background glow ambient */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand-primary/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-studio-900 border border-white/10 text-xs font-mono text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>NEXUS DIGITAL PRODUCT STUDIO</span>
              <span className="text-slate-600">|</span>
              <span className="text-brand-primary font-semibold">Q3/Q4 Booking Open</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              Biến ý tưởng của bạn thành <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-indigo-400 to-cyan-400">Web App thực tế.</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed">
              Chúng tôi là Digital Product Studio chuyên thiết kế & lập trình Web App cao cấp cho Doanh nghiệp & Startup. Tập trung vào <span className="text-white font-medium">hiệu năng, kiến trúc mở rộng và trải nghiệm người dùng vượt trội.</span>
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenRequestModal}
                className="flex items-center justify-center gap-3 bg-brand-primary hover:bg-brand-hover text-white text-base font-semibold px-7 py-4 rounded-xl shadow-glow-primary transition-all transform hover:-translate-y-0.5"
              >
                <span>Bắt đầu dự án</span>
                <ArrowRight size={18} />
              </button>

              <a
                href="#services"
                className="flex items-center justify-center gap-2 bg-studio-900 hover:bg-studio-850 text-slate-200 border border-white/10 text-base font-medium px-6 py-4 rounded-xl transition-all"
              >
                <span>Xem dịch vụ</span>
              </a>
            </div>

            {/* Key Trust Signals */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 max-w-lg">
              <div>
                <p className="text-2xl font-bold text-white font-mono">100%</p>
                <p className="text-xs text-slate-400 font-medium">Custom Code & Architecture</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white font-mono">99.9%</p>
                <p className="text-xs text-slate-400 font-medium">Uptime Guarantee SLA</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white font-mono">3–8w</p>
                <p className="text-xs text-slate-400 font-medium">Average Delivery MVP</p>
              </div>
            </div>

          </div>

          {/* Right Column: Web App Interactive Architectural Preview */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-white/10 bg-studio-900 shadow-2xl overflow-hidden backdrop-blur-xl">
              
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
                  className={`px-4 py-2.5 text-xs font-mono font-medium flex items-center gap-2 transition-colors border-b-2 ${
                    activeTab === 'architecture'
                      ? 'border-brand-primary text-white bg-studio-900'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Cpu size={14} /> System Spec
                </button>
                <button
                  onClick={() => setActiveTab('api')}
                  className={`px-4 py-2.5 text-xs font-mono font-medium flex items-center gap-2 transition-colors border-b-2 ${
                    activeTab === 'api'
                      ? 'border-brand-primary text-white bg-studio-900'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Terminal size={14} /> API Payload
                </button>
                <button
                  onClick={() => setActiveTab('preview')}
                  className={`px-4 py-2.5 text-xs font-mono font-medium flex items-center gap-2 transition-colors border-b-2 ${
                    activeTab === 'preview'
                      ? 'border-brand-primary text-white bg-studio-900'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Code2 size={14} /> UI Component
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
                        <span className="text-cyan-400 font-bold">🛡️ Backend Architecture:</span>
                        <span className="text-slate-400">Node.js / REST & WebSockets</span>
                      </div>
                      <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-cyan-400 h-full w-[95%]"></div>
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
                      <span className="font-semibold text-white">Live Web App Widget</span>
                      <span className="text-emerald-400 font-mono text-[10px]">● Online</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="p-2 rounded bg-studio-900 border border-slate-800">
                        <p className="text-slate-400 text-[10px]">Monthly Active Users</p>
                        <p className="font-bold text-white text-sm font-mono">14,250</p>
                      </div>
                      <div className="p-2 rounded bg-studio-900 border border-slate-800">
                        <p className="text-slate-400 text-[10px]">Response Time</p>
                        <p className="font-bold text-emerald-400 text-sm font-mono">32ms</p>
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
