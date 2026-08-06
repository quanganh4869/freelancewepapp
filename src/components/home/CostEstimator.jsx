import React, { useState } from 'react';
import { Calculator, ArrowRight, CheckCircle2, ShieldCheck, PhoneCall, Sparkles, Cpu, Layers } from 'lucide-react';

export const CostEstimator = ({ onOpenRequestModal }) => {
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
    'basic': { label: 'Bảo Hành Tiêu Chuẩn 6 Tháng', price: 0 },
    'standard': { label: 'Bảo Trì & SLA 99.9% 12 Tháng', price: 800 },
    'dedicated': { label: 'Đội Ngũ Kỹ Thuật Độc Quyền 24/7', price: 1800 }
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
            <Calculator size={14} /> CÔNG CỤ TÍNH CHI PHÍ WEB APP
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Ước Tính Ngân Sách Phát Triển Web App
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Dự toán chi phí thiết kế & lập trình phần mềm tùy chỉnh nhanh chóng trong 30 giây. Báo giá minh bạch, cam kết mã nguồn sạch và bảo mật cao.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Form Inputs */}
          <div className="lg:col-span-7 studio-card-border p-6 sm:p-8 rounded-2xl bg-studio-950 space-y-6">
            
            {/* App Type Selector */}
            <div>
              <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-3">
                1. Chọn loại hình ứng dụng Web App:
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
                2. Quy mô người dùng dự kiến:
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
                <label className="text-xs font-mono font-bold text-slate-300 uppercase">3. Số lượng tính năng cốt lõi (MVP Features):</label>
                <span className="font-mono text-sm font-bold text-brand-primary bg-brand-primary/10 px-2.5 py-0.5 rounded border border-brand-primary/20">{featuresCount} Tính năng</span>
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
                4. Cấp độ bảo trì & Đồng hành SLA:
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
              <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">TỔNG THỜI GIAN PHÁT TRIỂN DỰ KIẾN</span>
              <p className="text-3xl font-extrabold text-white font-mono mt-1">
                {Math.round(4 + featuresCount * 0.4)} <span className="text-sm font-normal text-slate-400">tuần làm việc (Weeks)</span>
              </p>
            </div>

            <div className="space-y-3 text-xs font-mono">
              <div className="flex justify-between py-2 border-b border-slate-800 text-slate-300">
                <span>Khung ứng dụng ({appTypeRates[appType].name}):</span>
                <span className="text-white font-bold">${baseRate}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-800 text-slate-300">
                <span>Hệ số quy mô ({scaleFactors[scale].label}):</span>
                <span className="text-white font-bold">x{scaleMultiplier}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-800 text-slate-300">
                <span>{featuresCount} tính năng tích hợp:</span>
                <span className="text-white font-bold">${featureCost}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-800 text-slate-300">
                <span>Gói bảo trì SLA:</span>
                <span className="text-emerald-400 font-bold">+${slaCost}</span>
              </div>
            </div>

            {/* Total Highlight Box */}
            <div className="p-5 rounded-2xl bg-brand-primary/10 border border-brand-primary/30 space-y-2 text-center">
              <span className="text-xs font-mono font-bold text-brand-primary uppercase">DỰ TOÁN NGÂN SÁCH LẬP TRÌNH</span>
              <p className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight">
                ${totalEstimatedUSD.toLocaleString()}
              </p>
              <p className="text-xs text-slate-300 font-mono font-bold">
                (~ {formatVND(totalEstimatedVND)})
              </p>
              <p className="text-[11px] text-slate-400 italic">
                * Báo giá sơ bộ cho sản phẩm chuẩn Clean Code. Đã bao gồm thiết kế UI/UX & bàn giao mã nguồn 100%.
              </p>
            </div>

            {/* CTAs */}
            <div className="space-y-3">
              <button
                onClick={() => onOpenRequestModal(`Web App ${appTypeRates[appType].name} (${featuresCount} tính năng, quy mô ${scaleFactors[scale].label})`)}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-brand-primary hover:bg-brand-hover text-white text-xs font-bold shadow-glow-primary transition-all transform hover:-translate-y-0.5"
              >
                <span>Nhận Báo Giá Chi Tiết Theo Yêu Cầu</span>
                <ArrowRight size={16} />
              </button>

              <a
                href="tel:0908123456"
                className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-studio-900 border border-slate-800 hover:border-slate-700 text-slate-300 text-xs font-semibold transition-all"
              >
                <PhoneCall size={15} className="text-brand-primary" />
                <span>Tư Vấn Kỹ Thuật Trực Tiếp: 0908.123.456</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
