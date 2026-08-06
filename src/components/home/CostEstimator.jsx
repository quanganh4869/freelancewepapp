import React, { useState } from 'react';
import { Calculator, ArrowRight, CheckCircle2, ShieldCheck, PhoneCall, Sparkles } from 'lucide-react';

export const CostEstimator = ({ onOpenRequestModal }) => {
  const [packageType, setPackageType] = useState('tron-goi-tieu-chuan');
  const [buildingType, setBuildingType] = useState('nha-pho');
  const [area, setArea] = useState(80);
  const [floors, setFloors] = useState(3);
  const [roofType, setRoofType] = useState('mai-btct');

  // Rates in VND per m2
  const packageRates = {
    'tron-goi-tiet-kiem': { name: 'Xây Trọn Gói (Gói Tiết Kiệm)', rate: 5800000 },
    'tron-goi-tieu-chuan': { name: 'Xây Trọn Gói (Gói Tiêu Chuẩn)', rate: 6800000 },
    'tron-goi-cao-cap': { name: 'Xây Trọn Gói (Gói Cao Cấp)', rate: 8500000 },
    'thi-cong-phan-tho': { name: 'Thi Công Phần Thô & Nhân Công', rate: 3600000 },
    'thiet-ke-noi-that': { name: 'Thiết Kế & Thi Công Nội Thất', rate: 3200000 }
  };

  // Building factors
  const buildingFactors = {
    'nha-pho': 1.0,
    'biet-thu': 1.2,
    'can-ho': 0.9,
    'nha-cap-4': 0.85
  };

  // Roof factor
  const roofFactors = {
    'mai-ton': 0.3,
    'mai-btct': 0.5,
    'mai-thai': 0.7
  };

  // Calculation
  const totalFloorArea = area * floors;
  const foundationArea = area * 0.5; // Foundation estimation 50%
  const roofArea = area * (roofFactors[roofType] || 0.5);
  const totalConstructedArea = totalFloorArea + foundationArea + roofArea;

  const ratePerM2 = packageRates[packageType].rate * (buildingFactors[buildingType] || 1.0);
  const totalEstimatedCostVND = Math.round(totalConstructedArea * ratePerM2);

  const formatVND = (amount) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
  };

  return (
    <section id="cost-estimator" className="py-24 bg-studio-900 relative border-b border-white/5 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/30 text-brand-primary text-xs font-mono font-bold tracking-wider uppercase">
            <Calculator size={14} /> CÔNG CỤ TÍNH CHI PHÍ XÂY DỰNG
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Dự Toán Chi Phí Xây Nhà Trực Tuyến
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Ước tính ngân sách thi công công trình của bạn nhanh chóng & chính xác chỉ trong 30 giây. Bảng giá minh bạch, cam kết không phát sinh chi phí phụ.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Form Inputs */}
          <div className="lg:col-span-7 studio-card-border p-6 sm:p-8 rounded-2xl bg-studio-950 space-y-6">
            
            {/* Package Selector */}
            <div>
              <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-3">
                1. Chọn gói dịch vụ xây dựng:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {Object.keys(packageRates).map((key) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setPackageType(key)}
                    className={`p-3.5 rounded-xl border text-xs text-left transition-all font-medium flex items-center justify-between ${
                      packageType === key
                        ? 'bg-brand-primary/15 border-brand-primary text-white shadow-glow-primary'
                        : 'bg-studio-900 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                    }`}
                  >
                    <span>{packageRates[key].name}</span>
                    {packageType === key && <CheckCircle2 size={16} className="text-brand-primary shrink-0 ml-2" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Building Type */}
            <div>
              <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-3">
                2. Loại hình công trình:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { id: 'nha-pho', label: 'Nhà Phố' },
                  { id: 'biet-thu', label: 'Biệt Thự' },
                  { id: 'can-ho', label: 'Căn Hộ' },
                  { id: 'nha-cap-4', label: 'Nhà Cấp 4' }
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setBuildingType(item.id)}
                    className={`p-3 rounded-xl border text-xs font-semibold text-center transition-all ${
                      buildingType === item.id
                        ? 'bg-brand-primary text-white border-brand-primary shadow-glow-primary'
                        : 'bg-studio-900 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Area & Floors Controls */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-mono font-bold text-slate-300 uppercase">Diện tích sàn (m²):</label>
                  <span className="font-mono text-sm font-bold text-brand-primary bg-brand-primary/10 px-2.5 py-0.5 rounded border border-brand-primary/20">{area} m²</span>
                </div>
                <input
                  type="range"
                  min="30"
                  max="500"
                  step="5"
                  value={area}
                  onChange={(e) => setArea(Number(e.target.value))}
                  className="w-full accent-brand-primary cursor-pointer h-2 bg-slate-800 rounded-lg"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-mono font-bold text-slate-300 uppercase">Số tầng thi công:</label>
                  <span className="font-mono text-sm font-bold text-brand-primary bg-brand-primary/10 px-2.5 py-0.5 rounded border border-brand-primary/20">{floors} Tầng</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="8"
                  step="1"
                  value={floors}
                  onChange={(e) => setFloors(Number(e.target.value))}
                  className="w-full accent-brand-primary cursor-pointer h-2 bg-slate-800 rounded-lg"
                />
              </div>
            </div>

            {/* Roof Type */}
            <div>
              <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-3">
                3. Loại mái công trình:
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'mai-ton', label: 'Mái Tôn (30%)' },
                  { id: 'mai-btct', label: 'Mái Bê Tông (50%)' },
                  { id: 'mai-thai', label: 'Mái Thái / Nhật (70%)' }
                ].map((r) => (
                  <button
                    key={r.id}
                    type="button"
                    onClick={() => setRoofType(r.id)}
                    className={`p-2.5 rounded-xl border text-xs font-mono text-center transition-all ${
                      roofType === r.id
                        ? 'bg-brand-navy border-brand-primary text-white font-bold'
                        : 'bg-studio-900 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    {r.label}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Estimate Summary Panel */}
          <div className="lg:col-span-5 studio-card-border p-6 sm:p-8 rounded-2xl bg-studio-950 border-brand-primary/30 space-y-6 sticky top-24">
            
            <div className="border-b border-white/10 pb-4">
              <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">TỔNG KHỐI LƯỢNG THI CÔNG</span>
              <p className="text-3xl font-extrabold text-white font-mono mt-1">
                {Math.round(totalConstructedArea)} <span className="text-sm font-normal text-slate-400">m² sàn quy đổi</span>
              </p>
            </div>

            <div className="space-y-3 text-xs font-mono">
              <div className="flex justify-between py-2 border-b border-slate-800 text-slate-300">
                <span>Diện tích móng ước tính:</span>
                <span className="text-white font-bold">{foundationArea} m²</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-800 text-slate-300">
                <span>Tổng diện tích các tầng ({floors} tầng):</span>
                <span className="text-white font-bold">{totalFloorArea} m²</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-800 text-slate-300">
                <span>Diện tích mái quy đổi:</span>
                <span className="text-white font-bold">{roofArea} m²</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-800 text-slate-300">
                <span>Đơn giá trung bình / m²:</span>
                <span className="text-emerald-400 font-bold">{formatVND(ratePerM2)}/m²</span>
              </div>
            </div>

            {/* Total Highlight Box */}
            <div className="p-5 rounded-2xl bg-brand-primary/10 border border-brand-primary/30 space-y-2 text-center">
              <span className="text-xs font-mono font-bold text-brand-primary uppercase">DỰ TOÁN CHI PHÍ THI CÔNG</span>
              <p className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight">
                {formatVND(totalEstimatedCostVND)}
              </p>
              <p className="text-[11px] text-slate-400 italic">
                * Mức giá ước tính tham khảo. Đơn giá thực tế phụ thuộc vào bản vẽ chi tiết & vị trí hiện trường công trình.
              </p>
            </div>

            {/* CTAs */}
            <div className="space-y-3">
              <button
                onClick={() => onOpenRequestModal(`Thi công ${packageRates[packageType].name} (${area}m², ${floors} tầng)`)}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-brand-primary hover:bg-brand-hover text-white text-xs font-bold shadow-glow-primary transition-all transform hover:-translate-y-0.5"
              >
                <span>Tải Bảng Dự Toán Chi Tiết theo Mẫu</span>
                <ArrowRight size={16} />
              </button>

              <a
                href="tel:0908123456"
                className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-studio-900 border border-slate-800 hover:border-slate-700 text-slate-300 text-xs font-semibold transition-all"
              >
                <PhoneCall size={15} className="text-brand-primary" />
                <span>Gọi KTS Tư Vấn Trực Tiếp: 0908.123.456</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
