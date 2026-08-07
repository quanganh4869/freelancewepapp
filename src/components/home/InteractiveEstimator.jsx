import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Sparkles, Calculator, Check, ArrowRight, Clock, ShieldCheck, FileCode, Zap } from 'lucide-react';

export const InteractiveEstimator = ({ onOpenRequestModal }) => {
  const { isDark } = useTheme();

  // State for project options
  const [selectedType, setSelectedType] = useState('personal'); // personal, landing, shop, app
  const [selectedFeatures, setSelectedFeatures] = useState(['responsive', 'speed', 'zalo']);
  const [selectedUrgency, setSelectedUrgency] = useState('standard'); // standard (1-2w), express (3-5d)

  const types = {
    personal: { name: 'Website cá nhân / CV / Portfolio', basePrice: 1000000, baseDays: 5 },
    landing: { name: 'Landing Page bán hàng / Sự kiện', basePrice: 1500000, baseDays: 6 },
    shop: { name: 'Website Doanh nghiệp nhỏ / Shop', basePrice: 3000000, baseDays: 10 },
    app: { name: 'Web App / Đặt lịch / Dashboard', basePrice: 5000000, baseDays: 18 }
  };

  const featureOptions = [
    { id: 'responsive', name: 'Tối ưu chuẩn điện thoại & máy tính', price: 0, required: true },
    { id: 'speed', name: 'Tối ưu tốc độ cực nhanh (< 1s)', price: 0, required: true },
    { id: 'zalo', name: 'Nút gọi điện & Zalo chat 1-click', price: 0, required: true },
    { id: 'admin', name: 'Trang quản trị bài viết / sản phẩm', price: 500000 },
    { id: 'seo', name: 'Tối ưu chuẩn SEO Google cơ bản', price: 300000 },
    { id: 'design', name: 'Làm theo file thiết kế sẵn (Figma/Drive)', price: 0 }
  ];

  const toggleFeature = (id) => {
    if (featureOptions.find(f => f.id === id)?.required) return;
    setSelectedFeatures(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  // Calculate total price & days
  const currentType = types[selectedType];
  const featuresTotal = selectedFeatures.reduce((acc, featId) => {
    const feat = featureOptions.find(f => f.id === featId);
    return acc + (feat ? feat.price : 0);
  }, 0);

  let totalPrice = currentType.basePrice + featuresTotal;
  let totalDays = currentType.baseDays;

  if (selectedUrgency === 'express') {
    totalPrice = Math.round(totalPrice * 1.25);
    totalDays = Math.max(3, Math.round(totalDays * 0.6));
  }

  const formatVND = (num) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(num);
  };

  return (
    <section id="estimator" className={`py-16 md:py-24 border-b font-sans ${
      isDark ? 'bg-studio-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 reveal space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Tính thử chi phí website của bạn
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-medium">
            Chọn nhu cầu và tính năng bên dưới để ước tính chi phí & thời gian bàn giao thực tế ngay lập tức.
          </p>
        </div>

        {/* Interactive Estimator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Options Selection Column */}
          <div className="lg:col-span-7 space-y-6 reveal">
            
            {/* Step 1: Website Type */}
            <div className={`p-6 rounded-2xl border ${
              isDark ? 'bg-studio-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-3">
                1. Chọn loại website cần làm
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {Object.keys(types).map((key) => {
                  const item = types[key];
                  const isSelected = selectedType === key;
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setSelectedType(key)}
                      className={`p-4 rounded-xl text-left border transition-all ${
                        isSelected
                          ? 'border-brand-primary bg-brand-primary/10 text-brand-primary font-bold shadow-sm'
                          : 'border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:border-slate-400 font-medium'
                      }`}
                    >
                      <div className="text-xs font-bold">{item.name}</div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 font-medium">
                        Từ {formatVND(item.basePrice)}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Features Checklist */}
            <div className={`p-6 rounded-2xl border ${
              isDark ? 'bg-studio-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-3">
                2. Chọn các tính năng mong muốn
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {featureOptions.map((feat) => {
                  const isChecked = selectedFeatures.includes(feat.id);
                  return (
                    <button
                      key={feat.id}
                      type="button"
                      onClick={() => toggleFeature(feat.id)}
                      className={`p-3 rounded-xl text-left border flex items-center justify-between text-xs transition-all ${
                        isChecked
                          ? 'border-brand-primary bg-brand-primary/10 text-slate-900 dark:text-white font-bold'
                          : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-400 font-medium'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <div className={`w-4 h-4 rounded flex items-center justify-center text-white ${
                          isChecked ? 'bg-brand-primary' : 'bg-slate-200 dark:bg-slate-800'
                        }`}>
                          {isChecked && <Check size={12} />}
                        </div>
                        <span>{feat.name}</span>
                      </div>
                      {feat.price > 0 && (
                        <span className="text-[10px] text-brand-primary font-bold">
                          +{formatVND(feat.price)}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Delivery Speed */}
            <div className={`p-6 rounded-2xl border ${
              isDark ? 'bg-studio-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-3">
                3. Tiến độ thực hiện
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedUrgency('standard')}
                  className={`p-4 rounded-xl text-left border transition-all ${
                    selectedUrgency === 'standard'
                      ? 'border-brand-primary bg-brand-primary/10 font-bold text-brand-primary'
                      : 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-medium'
                  }`}
                >
                  <div className="text-xs font-bold">Tiêu chuẩn ({currentType.baseDays} ngày)</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Tiến độ làm việc bình thường</div>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedUrgency('express')}
                  className={`p-4 rounded-xl text-left border transition-all ${
                    selectedUrgency === 'express'
                      ? 'border-orange-500 bg-orange-500/10 font-bold text-orange-500'
                      : 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-medium'
                  }`}
                >
                  <div className="text-xs font-bold flex items-center gap-1">
                    <Zap size={13} className="text-orange-500" />
                    <span>Hỏa tốc (Khoảng {Math.max(3, Math.round(currentType.baseDays * 0.6))} ngày)</span>
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Ưu tiên làm nhanh theo yêu cầu gấp</div>
                </button>
              </div>
            </div>

          </div>

          {/* Dynamic Result Summary Sticky Column */}
          <div className="lg:col-span-5 sticky top-24 reveal reveal-delay-1">
            <div className={`p-7 rounded-2xl border shadow-xl space-y-6 ${
              isDark ? 'bg-studio-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
            }`}>
              
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
                <div className="flex items-center gap-2 font-bold text-base">
                  <Calculator size={18} className="text-brand-primary" />
                  <span>Dự toán chi phí & thời gian</span>
                </div>
                <span className="text-[10px] bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 font-bold px-2 py-0.5 rounded-full">
                  BÁO GIÁ MINH BẠCH
                </span>
              </div>

              {/* Price Output Banner */}
              <div className="p-4 rounded-xl bg-brand-primary/10 border border-brand-primary/25 space-y-1 text-center">
                <span className="text-xs text-slate-500 dark:text-slate-400 block font-medium">Tổng chi phí ước tính</span>
                <span className="text-3xl font-extrabold text-brand-primary block">
                  {formatVND(totalPrice)}
                </span>
                <span className="text-xs text-slate-600 dark:text-slate-300 font-bold flex items-center justify-center gap-1 pt-1">
                  <Clock size={13} className="text-brand-primary" />
                  <span>Thời gian hoàn thành: {totalDays} ngày làm việc</span>
                </span>
              </div>

              {/* Breakdown List */}
              <div className="space-y-2 text-xs text-slate-600 dark:text-slate-300 font-medium">
                <div className="flex justify-between border-b border-slate-100 dark:border-slate-800 pb-1.5">
                  <span>Loại web:</span>
                  <span className="font-bold text-slate-900 dark:text-white">{currentType.name}</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 dark:border-slate-800 pb-1.5">
                  <span>Số tính năng đã chọn:</span>
                  <span className="font-bold text-brand-primary">{selectedFeatures.length} tính năng</span>
                </div>
                <div className="flex justify-between">
                  <span>Cam kết:</span>
                  <span className="font-bold text-emerald-500">100% Mã nguồn gốc + Bảo hành 12 tháng</span>
                </div>
              </div>

              {/* Guarantee bullets */}
              <div className="p-3 rounded-xl bg-slate-100 dark:bg-studio-950 border border-slate-200 dark:border-slate-800 text-[11px] text-slate-600 dark:text-slate-400 space-y-1 font-medium">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-brand-primary shrink-0" />
                  <span>Không phát sinh chi phí ẩn ngoài thỏa thuận</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <FileCode size={14} className="text-brand-primary shrink-0" />
                  <span>Hỗ trợ gửi file thiết kế hoặc link Figma</span>
                </div>
              </div>

              {/* Direct Order Button with Selected Scope */}
              <button
                onClick={() => onOpenRequestModal(`Làm gói ${currentType.name} (${formatVND(totalPrice)}, ${totalDays} ngày)`)}
                className="btn-primary w-full py-3.5 text-xs font-bold shadow-md"
              >
                <span>Gửi yêu cầu theo dự toán này</span>
                <ArrowRight size={15} />
              </button>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
