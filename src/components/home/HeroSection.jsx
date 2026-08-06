import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import { ArrowRight, CheckCircle2, Cpu, Terminal, ShieldCheck, Database, Layers } from 'lucide-react';

export const HeroSection = ({ onOpenRequestModal }) => {
  const { language, t } = useLanguage();
  const { isDark } = useTheme();

  return (
    <section className="relative pt-16 pb-20 md:pt-24 md:pb-32 grid-bg-engineering border-b border-slate-200 dark:border-white/10 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Eyebrow, H1 Headline & Editorial Copy */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Technical Eyebrow */}
            <div className="studio-badge">
              <span className="w-2 h-2 rounded-full bg-brand-primary"></span>
              <span>NEXUS STUDIO / DIGITAL PRODUCT ENGINEERING</span>
            </div>

            {/* Headline H1 */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] text-slate-900 dark:text-white">
              {language === 'en' ? (
                <>
                  We build <br className="hidden sm:inline" />
                  <span className="text-brand-primary font-extrabold">production-ready</span> <br className="hidden sm:inline" />
                  Web Applications.
                </>
              ) : (
                <>
                  Chúng tôi xây dựng <br className="hidden sm:inline" />
                  những <span className="text-brand-primary font-extrabold">Web App</span> <br className="hidden sm:inline" />
                  được tạo để vận hành.
                </>
              )}
            </h1>

            {/* Callout Box */}
            <div className="studio-callout max-w-2xl">
              <p className="text-base sm:text-lg font-medium leading-relaxed text-slate-700 dark:text-slate-200">
                {language === 'en'
                  ? 'Nexus Studio is a digital product engineering firm. We design and build enterprise Web Apps, SaaS platforms, and operational software built for scale, speed, and security.'
                  : 'Nexus Studio là đối tác kỹ thuật số chuyên sâu. Chúng tôi thiết kế & lập trình Web App doanh nghiệp, nền tảng SaaS và công cụ vận hành tối ưu hiệu năng, quy mô và bảo mật.'}
              </p>
            </div>

            {/* Feature Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={16} className="text-brand-primary shrink-0" />
                <span>Custom Architecture 100% (No Templates)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={16} className="text-brand-primary shrink-0" />
                <span>Enterprise Security & SOC2 Compliant</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={16} className="text-brand-primary shrink-0" />
                <span>99.9% Uptime SLA Guarantee</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={16} className="text-brand-primary shrink-0" />
                <span>Fast MVP Delivery in 3–8 Weeks</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={() => onOpenRequestModal()}
                className="btn-primary py-3.5 px-6 text-sm"
              >
                <span>{t('startProject')}</span>
                <ArrowRight size={16} />
              </button>

              <a
                href="#cost-estimator"
                className="btn-secondary py-3.5 px-6 text-sm"
              >
                <Cpu size={16} className="text-brand-primary" />
                <span>{t('btnCalc')}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Engineering System Architecture Visual */}
          <div className="lg:col-span-5">
            <div className={`studio-card p-6 sm:p-8 space-y-5 rounded-2xl relative overflow-hidden border ${
              isDark ? 'bg-studio-900 border-slate-800' : 'bg-white border-slate-200 shadow-md'
            }`}>
              
              {/* Architecture Panel Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2 font-mono text-xs font-bold tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span className="text-slate-600 dark:text-slate-400 uppercase">SYSTEM ARCHITECTURE</span>
                </div>
                <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary font-semibold">
                  v2.4 SPEC
                </span>
              </div>

              {/* Layer 01: Experience */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-studio-950 border border-slate-200 dark:border-slate-800 space-y-1.5 font-mono text-xs">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Layers size={14} className="text-brand-primary" />
                    <span className="font-bold text-slate-900 dark:text-white">01 — EXPERIENCE LAYER</span>
                  </div>
                  <span className="text-[10px] text-slate-500 font-sans">SSR / Edge</span>
                </div>
                <p className="text-[11px] text-slate-600 dark:text-slate-400 font-sans">
                  React 18 • Next.js • Tailwind CSS Design Tokens
                </p>
              </div>

              {/* Layer Connector Arrow */}
              <div className="flex justify-center -my-2 text-slate-400 font-mono text-xs">
                ↓ API Interface
              </div>

              {/* Layer 02: Application Logic */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-studio-950 border border-slate-200 dark:border-slate-800 space-y-1.5 font-mono text-xs">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Terminal size={14} className="text-amber-500" />
                    <span className="font-bold text-slate-900 dark:text-white">02 — APPLICATION LOGIC</span>
                  </div>
                  <span className="text-[10px] text-slate-500 font-sans">REST & WebSockets</span>
                </div>
                <p className="text-[11px] text-slate-600 dark:text-slate-400 font-sans">
                  Node.js • Modular Microservices • JWT / OAuth2 Auth
                </p>
              </div>

              {/* Layer Connector Arrow */}
              <div className="flex justify-center -my-2 text-slate-400 font-mono text-xs">
                ↓ Database Connection Pool
              </div>

              {/* Layer 03: Data & Storage */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-studio-950 border border-slate-200 dark:border-slate-800 space-y-1.5 font-mono text-xs">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Database size={14} className="text-emerald-500" />
                    <span className="font-bold text-slate-900 dark:text-white">03 — DATA PERSISTENCE</span>
                  </div>
                  <span className="text-[10px] text-slate-500 font-sans">Redis Cache Layer</span>
                </div>
                <p className="text-[11px] text-slate-600 dark:text-slate-400 font-sans">
                  PostgreSQL • Encrypted Storage • Automated Backups
                </p>
              </div>

              {/* Layer 04: Infrastructure & Security */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-studio-950 border border-slate-200 dark:border-slate-800 space-y-1.5 font-mono text-xs">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={14} className="text-brand-primary" />
                    <span className="font-bold text-slate-900 dark:text-white">04 — INFRASTRUCTURE</span>
                  </div>
                  <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">99.9% Uptime SLA</span>
                </div>
                <p className="text-[11px] text-slate-600 dark:text-slate-400 font-sans">
                  AWS Docker Container • CDN Edge • SOC2 Compliance
                </p>
              </div>

              {/* Metadata Footer Line */}
              <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Standard: ISO 27001</span>
                <span className="text-brand-primary font-bold">NEXUS LABS</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
