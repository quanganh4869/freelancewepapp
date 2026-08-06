import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Calculator, ArrowRight, CheckCircle2, PhoneCall, Cpu } from 'lucide-react';

export const CostEstimator = ({ onOpenRequestModal }) => {
  const { t } = useLanguage();

  const [appType, setAppType] = useState('saas');
  const [scale, setScale] = useState('medium');
  const [featuresCount, setFeaturesCount] = useState(8);
  const [slaTier, setSlaTier] = useState('standard');

  // Rates
  const appTypeRates = {
    'business': { name: 'Business Web App', rate: 2500 },
    'saas': { name: 'SaaS Platform (MVP)', rate: 4500 },
    'dashboard': { name: 'Enterprise Dashboard', rate: 3500 },
    'ecommerce': { name: 'E-commerce Web App', rate: 3800 },
    'internal': { name: 'Internal Workflow Tool', rate: 2800 }
  };

  const scaleFactors = {
    'small': { label: 'Startup (1K Users)', factor: 1.0 },
    'medium': { label: 'Growth (10K Users)', factor: 1.25 },
    'enterprise': { label: 'Enterprise (100K+ Users)', factor: 1.6 }
  };

  const slaAddons = {
    'basic': { label: 'Standard 6-Month Support', price: 0 },
    'standard': { label: '12-Month SLA 99.9% Maintenance', price: 800 },
    'dedicated': { label: '24/7 Dedicated Tech Team', price: 1800 }
  };

  const baseRate = appTypeRates[appType].rate;
  const scaleMultiplier = scaleFactors[scale].factor;
  const featureCost = featuresCount * 250;
  const slaCost = slaAddons[slaTier].price;

  const totalEstimatedUSD = Math.round((baseRate * scaleMultiplier) + featureCost + slaCost);
  const totalEstimatedVND = totalEstimatedUSD * 25400;

  const formatVND = (amount) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
  };

  return (
    <section id="cost-estimator" className="py-24 bg-studio-900 relative border-b border-white/5 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/30 text-brand-primary text-xs font-mono font-bold tracking-wider uppercase">
            <Calculator size={14} /> {t('calcTag')}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t('calcTitle')}
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            {t('calcDesc')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Form Inputs */}
          <div className="lg:col-span-7 studio-card-border p-6 sm:p-8 rounded-2xl bg-studio-950 space-y-6">
            
            {/* App Type Selector */}
            <div>
              <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-3">
                {t('calcStep1')}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {Object.keys(appTypeRates).map((key) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setAppType(key)}
                    className={`p-3.5 rounded-xl border text-xs text-left transition-all font-medium flex items-center justify-between ${
                      appType === key
                        ? 'bg-brand-primary/15 border-brand-primary text-white shadow-glow-primary'
                        : 'bg-studio-900 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                    }`}
                  >
                    <span>{appTypeRates[key].name}</span>
                    {appType === key && <CheckCircle2 size={16} className="text-brand-primary shrink-0 ml-2" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Scale Selector */}
            <div>
              <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-3">
                {t('calcStep2')}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {Object.keys(scaleFactors).map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setScale(s)}
                    className={`p-3 rounded-xl border text-xs font-semibold text-center transition-all ${
                      scale === s
                        ? 'bg-brand-primary text-white border-brand-primary shadow-glow-primary'
                        : 'bg-studio-900 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    {scaleFactors[s].label}
                  </button>
                ))}
              </div>
            </div>

            {/* Features Range */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-mono font-bold text-slate-300 uppercase">{t('calcStep3')}</label>
                <span className="font-mono text-sm font-bold text-brand-primary bg-brand-primary/10 px-2.5 py-0.5 rounded border border-brand-primary/20">{featuresCount} MVP Features</span>
              </div>
              <input
                type="range"
                min="3"
                max="20"
                step="1"
                value={featuresCount}
                onChange={(e) => setFeaturesCount(Number(e.target.value))}
                className="w-full accent-brand-primary cursor-pointer h-2 bg-slate-800 rounded-lg"
              />
            </div>

            {/* SLA Tier */}
            <div>
              <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-3">
                {t('calcStep4')}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {Object.keys(slaAddons).map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setSlaTier(t)}
                    className={`p-3 rounded-xl border text-xs font-mono text-center transition-all ${
                      slaTier === t
                        ? 'bg-brand-navy border-brand-primary text-white font-bold'
                        : 'bg-studio-900 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    {slaAddons[t].label}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Estimate Summary Panel */}
          <div className="lg:col-span-5 studio-card-border p-6 sm:p-8 rounded-2xl bg-studio-950 border-brand-primary/30 space-y-6 sticky top-24">
            
            <div className="border-b border-white/10 pb-4">
              <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">{t('calcTotalTime')}</span>
              <p className="text-3xl font-extrabold text-white font-mono mt-1">
                {Math.round(4 + featuresCount * 0.4)} <span className="text-sm font-normal text-slate-400">Weeks</span>
              </p>
            </div>

            <div className="space-y-3 text-xs font-mono">
              <div className="flex justify-between py-2 border-b border-slate-800 text-slate-300">
                <span>App Base ({appTypeRates[appType].name}):</span>
                <span className="text-white font-bold">${baseRate}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-800 text-slate-300">
                <span>Scale Multiplier ({scaleFactors[scale].label}):</span>
                <span className="text-white font-bold">x{scaleMultiplier}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-800 text-slate-300">
                <span>{featuresCount} Integrated Features:</span>
                <span className="text-white font-bold">${featureCost}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-800 text-slate-300">
                <span>SLA Support Addon:</span>
                <span className="text-emerald-400 font-bold">+${slaCost}</span>
              </div>
            </div>

            {/* Total Highlight Box */}
            <div className="p-5 rounded-2xl bg-brand-primary/10 border border-brand-primary/30 space-y-2 text-center">
              <span className="text-xs font-mono font-bold text-brand-primary uppercase">{t('calcTotalBudget')}</span>
              <p className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight">
                ${totalEstimatedUSD.toLocaleString()}
              </p>
              <p className="text-xs text-slate-300 font-mono font-bold">
                (~ {formatVND(totalEstimatedVND)})
              </p>
            </div>

            {/* CTAs */}
            <div className="space-y-3">
              <button
                onClick={() => onOpenRequestModal(`Web App ${appTypeRates[appType].name} (${featuresCount} features, scale ${scaleFactors[scale].label})`)}
                className="mona-btn-primary w-full py-3.5"
              >
                <span>{t('calcGetQuote')}</span>
                <ArrowRight size={16} />
              </button>

              <a
                href="tel:0908123456"
                className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-studio-900 border border-slate-800 hover:border-slate-700 text-slate-300 text-xs font-semibold transition-all"
              >
                <PhoneCall size={15} className="text-brand-primary" />
                <span>Hotline: +84 (0) 908 123 456</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
