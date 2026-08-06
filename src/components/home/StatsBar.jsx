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
    <section className="bg-gradient-to-r from-brand-primary via-rose-600 to-brand-navy py-10 relative overflow-hidden font-sans border-y border-white/10 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-white/20">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="flex items-center gap-4 px-4 py-3 md:py-0 first:pl-0 last:pr-0">
                <div className="w-12 h-12 rounded-xl bg-white/15 border border-white/30 flex items-center justify-center text-white shrink-0 shadow-lg">
                  <Icon size={24} />
                </div>
                <div>
                  <p className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight leading-none mb-1">
                    {stat.number}
                  </p>
                  <p className="text-xs font-bold text-white uppercase tracking-wider">{stat.label}</p>
                  <p className="text-[11px] text-slate-200 opacity-90 hidden sm:block">{stat.sub}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
