import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ArrowRight, Mail } from 'lucide-react';

export const CallToAction = ({ onOpenRequestModal }) => {
  const { t, language } = useLanguage();

  return (
    <section className="py-24 bg-studio-950 font-sans border-b border-white/10 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="studio-card p-10 sm:p-16 rounded-2xl bg-studio-900 border border-brand-primary/30 space-y-8 shadow-subtle-card">
          
          <div className="studio-badge">
            <span>{t('ctaTag')}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            {language === 'en' ? (
              <>Have a web application project in mind?</>
            ) : (
              <>Bạn đang có một sản phẩm cần được xây dựng?</>
            )}
          </h2>

          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            {language === 'en'
              ? "Tell us what you're building. We'll help you turn it into a scalable, production-ready web application."
              : "Hãy chia sẻ với chúng tôi về bài toán kinh doanh của bạn. Chúng tôi sẽ giúp bạn biến nó thành một phần mềm Web App đáng tin cậy."}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenRequestModal()}
              className="btn-primary py-3.5 px-8 text-sm"
            >
              <span>{t('btnStart')}</span>
              <ArrowRight size={16} />
            </button>

            <a
              href="mailto:hello@nexusstudio.dev"
              className="btn-secondary py-3.5 px-8 text-sm"
            >
              <Mail size={16} className="text-brand-primary" />
              <span>{t('ctaEmailBtn')}</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
