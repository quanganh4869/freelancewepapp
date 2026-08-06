import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Code2, ShieldCheck, Rocket, Award } from 'lucide-react';

export const StatsBar = () => {
  const { t } = useLanguage();

  const stats = [
    {
      icon: Code2,
      number: '100%',
      label: t('statsCustomCode'),
      sub: t('statsCustomSub')
    },
    {
      icon: ShieldCheck,
      number: '99.9%',
      label: t('statsUptime'),
      sub: t('statsUptimeSub')
    },
    {
      icon: Rocket,
      number: '500+',
      label: t('statsApps'),
      sub: t('statsAppsSub')
    },
    {
      icon: Award,
      number: '15+',
      label: t('statsExp'),
      sub: t('statsExpSub')
    }
  ];

  return (
    <section className="py-12 bg-studio-900 border-b border-white/10 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-slate-800">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="flex flex-col space-y-2 px-4 py-3 md:py-0 first:pl-0 last:pr-0">
                <div className="flex items-center gap-2 text-brand-primary">
                  <Icon size={18} />
                  <span className="text-3xl sm:text-4xl font-extrabold font-mono tracking-tight">
                    {stat.number}
                  </span>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider">{stat.label}</p>
                  <p className="text-[11px] text-slate-400 opacity-90 mt-0.5">{stat.sub}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
