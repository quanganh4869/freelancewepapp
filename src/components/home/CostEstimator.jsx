import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import { Calculator, ArrowRight, CheckCircle2 } from 'lucide-react';

export const CostEstimator = ({ onOpenRequestModal }) => {
  const { t } = useLanguage();
  const { isDark } = useTheme();

  const [appType, setAppType] = useState('saas');
  const [scale, setScale] = useState('medium');
  const [featuresCount, setFeaturesCount] = useState(8);
  const [slaTier, setSlaTier] = useState('standard');

  const appTypeRates = {
    'business': { name: 'Business Web App', rate: 12000000, label: '12 Triệu VNĐ' },
    'saas': { name: 'SaaS Platform (MVP)', rate: 25000000, label: '25 Triệu VNĐ' },
    'dashboard': { name: 'Enterprise Dashboard', rate: 18000000, label: '18 Triệu VNĐ' },
    'ecommerce': { name: 'E-commerce Web App', rate: 15000000, label: '15 Triệu VNĐ' },
    'internal': { name: 'Internal Workflow Tool', rate: 14000000, label: '14 Triệu VNĐ' }
  };

  const scaleFactors = {
    'small': { label: 'Startup (Dưới 1K Users)', factor: 1.0 },
    'medium': { label: 'Growth (1K - 10K Users)', factor: 1.2 },
    'enterprise': { label: 'Enterprise (Trên 10K Users)', factor: 1.4 }
  };

  const slaAddons = {
    'basic': { label: 'Bảo hành 6 tháng (Miễn phí)', price: 0 },
    'standard': { label: 'Gói 12 Tháng SLA 99.9% Maintenance', price: 3000000 },
    'dedicated': { label: 'Đội kỹ thuật túc trực riêng 24/7', price: 8000000 }
  };

  const baseRate = appTypeRates[appType].rate;
  const scaleMultiplier = scaleFactors[scale].factor;
  const featureCost = featuresCount * 1000000;
  const slaCost = slaAddons[slaTier].price;

  const totalEstimatedVND = Math.round((baseRate * scaleMultiplier) + featureCost + slaCost);

  const formatVND = (amount) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
  };

  const formatMillionVND = (amount) => {
    const millions = (amount / 1000000).toFixed(1).replace('.0', '');
    return `${millions} Triệu VNĐ`;
  };

  return (
    <section id="cost-estimator" className={`py-24 border-b font-sans ${
      isDark ? 'bg-studio-900 border-white/10 text-white' : 'bg-white border-slate-200 text-slate-900 shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="studio-badge">
            <Calculator size={14} />
            <span>{t('calcTag')}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {t('calcTitle')}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
            Ước tính ngân sách phát triển ứng dụng Web App tùy chỉnh phù hợp với nhu cầu doanh nghiệp Việt Nam. Chi phí minh bạch, mã nguồn sạch và bảo mật cao.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Form Controls */}
          <div className="lg:col-span-7 studio-card p-6 sm:p-8 rounded-2xl space-y-6">
            
            {/* Step 1: App Type */}
            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider mb-3 text-slate-800 dark:text-slate-200">
                {t('calcStep1')}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {Object.keys(appTypeRates).map((key) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setAppType(key)}
                    className={`p-3.5 rounded-xl border text-xs text-left transition-all font-semibold flex items-center justify-between ${
                      appType === key
                        ? 'bg-brand-primary/10 border-brand-primary text-brand-primary font-bold'
                        : 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300'
                    }`}
                  >
                    <div>
                      <p>{appTypeRates[key].name}</p>
                      <p className="text-[11px] font-mono text-slate-500 font-normal mt-0.5">{appTypeRates[key].label}</p>
                    </div>
                    {appType === key && <CheckCircle2 size={16} className="text-brand-primary shrink-0 ml-2" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Scale */}
            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider mb-3 text-slate-800 dark:text-slate-200">
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
                        ? 'bg-brand-primary text-white border-brand-primary shadow-sm'
                        : 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300'
                    }`}
                  >
                    {scaleFactors[s].label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Features Count */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-mono font-bold uppercase text-slate-800 dark:text-slate-200">{t('calcStep3')}</label>
                <span className="font-mono text-xs font-bold text-brand-primary bg-brand-primary/10 px-2.5 py-0.5 rounded-full border border-brand-primary/20">
                  {featuresCount} MVP Features
                </span>
              </div>
              <input
                type="range"
                min="3"
                max="20"
                step="1"
                value={featuresCount}
                onChange={(e) => setFeaturesCount(Number(e.target.value))}
                className="w-full accent-brand-primary cursor-pointer h-2 bg-slate-200 dark:bg-slate-800 rounded-lg"
              />
            </div>

            {/* Step 4: SLA */}
            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider mb-3 text-slate-800 dark:text-slate-200">
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
                        ? 'bg-brand-primary/15 border-brand-primary text-brand-primary font-bold'
                        : 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300'
                    }`}
                  >
                    {slaAddons[t].label}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Summary Panel */}
          <div className="lg:col-span-5 studio-card p-6 sm:p-8 rounded-2xl space-y-6 sticky top-24 border border-brand-primary/30 shadow-md">
            
            <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
              <span className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                {t('calcTotalTime')}
              </span>
              <p className="text-3xl font-extrabold font-mono mt-1 text-slate-900 dark:text-white">
                {Math.round(3 + featuresCount * 0.3)} <span className="text-sm font-normal text-slate-500">Tuần</span>
              </p>
            </div>

            <div className="space-y-3 text-xs font-mono">
              <div className="flex justify-between py-2 border-b border-slate-100 dark:border-slate-800/60 text-slate-600 dark:text-slate-400">
                <span>Khung giá cơ bản ({appTypeRates[appType].name}):</span>
                <span className="text-slate-900 dark:text-slate-200 font-bold">{formatVND(baseRate)}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-100 dark:border-slate-800/60 text-slate-600 dark:text-slate-400">
                <span>Hệ số quy mô ({scaleFactors[scale].label}):</span>
                <span className="text-slate-900 dark:text-slate-200 font-bold">x{scaleMultiplier}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-100 dark:border-slate-800/60 text-slate-600 dark:text-slate-400">
                <span>{featuresCount} Tính năng cốt lõi tích hợp:</span>
                <span className="text-slate-900 dark:text-slate-200 font-bold">{formatVND(featureCost)}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-100 dark:border-slate-800/60 text-slate-600 dark:text-slate-400">
                <span>Dịch vụ bảo trì SLA:</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">+{formatVND(slaCost)}</span>
              </div>
            </div>

            {/* Total Highlight */}
            <div className="p-5 rounded-xl bg-brand-primary/10 border border-brand-primary/20 text-center space-y-1">
              <span className="text-xs font-mono font-bold text-brand-primary uppercase">{t('calcTotalBudget')}</span>
              <p className="text-3xl sm:text-4xl font-extrabold font-mono tracking-tight text-brand-primary">
                {formatMillionVND(totalEstimatedVND)}
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-400 font-mono font-bold">
                ({formatVND(totalEstimatedVND)})
              </p>
            </div>

            {/* CTA */}
            <button
              onClick={() => onOpenRequestModal(`Web App ${appTypeRates[appType].name} (${featuresCount} tính năng, quy mô ${scaleFactors[scale].label})`)}
              className="btn-primary w-full py-3.5 text-sm"
            >
              <span>{t('calcGetQuote')}</span>
              <ArrowRight size={16} />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};
