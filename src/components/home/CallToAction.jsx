import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ArrowRight, Sparkles, MessageSquare } from 'lucide-react';

export const CallToAction = ({ onOpenRequestModal }) => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-studio-950 relative overflow-hidden font-sans">
      {/* Glow Ambient background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-brand-primary/15 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="studio-card-border p-10 sm:p-16 rounded-3xl bg-studio-900/90 border-brand-primary/30 shadow-2xl space-y-8">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-mono font-bold uppercase tracking-wider">
            <Sparkles size={14} /> {t('ctaTag')}
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {t('ctaTitle')}
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            {t('ctaDesc')}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenRequestModal()}
              className="mona-btn-primary"
            >
              <span>{t('btnStart')}</span>
              <ArrowRight size={18} />
            </button>

            <a
              href="mailto:hello@nexusstudio.dev"
              className="mona-btn-secondary"
            >
              <MessageSquare size={18} className="text-brand-primary" />
              <span>{t('ctaEmailBtn')}</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
