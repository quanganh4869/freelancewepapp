import React, { useState } from 'react';
import { useRequests } from '../../context/RequestContext';
import { useAuth } from '../../context/AuthContext';
import { X, ArrowRight, ArrowLeft, CheckCircle2, AlertCircle, Loader2, Sparkles, Building, Mail, Phone, User, Home, Ruler, DollarSign, Clock, FileText } from 'lucide-react';

export const ProjectRequestModal = ({ isOpen, onClose, initialService = '' }) => {
  const { submitProjectRequest } = useRequests();
  const { currentUser } = useAuth();

  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(null);

  // Form State
  const [formData, setFormData] = useState({
    // Step 1: Basic Info
    clientName: currentUser?.name || '',
    clientEmail: currentUser?.email || '',
    clientPhone: '',
    clientCompany: currentUser?.company || '',

    // Step 2: Project Info
    projectName: initialService ? `Dự án ${initialService}` : 'Xây dựng nhà phố 3 tầng',
    projectType: 'Biệt thự', // Default
    projectDescription: initialService ? `Yêu cầu tư vấn & báo giá chi tiết cho dịch vụ: ${initialService}` : '',
    mainFeatures: 'Bao gồm 3 phòng ngủ, 1 phòng khách, 1 phòng bếp, sân vườn & gara ô tô',
    targetUsers: 'Gia đình 4 thành viên',

    // Step 3: Budget & Timeline & Tech
    budget: '$30,000 – $50,000',
    timeline: '2–3 tháng',
    referenceWebsites: '',
    preferredTechnologies: 'Gỗ An Cường, Thép Hòa Phát, Bê tông thương phẩm M250',
    additionalNotes: ''
  });

  // Validation Errors
  const [errors, setErrors] = useState({});

  if (!isOpen) return null;

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: null }));
    }
  };

  // Step Validation Logic
  const validateStep = (currentStep) => {
    const newErrors = {};

    if (currentStep === 1) {
      if (!formData.clientName.trim()) newErrors.clientName = 'Vui lòng nhập Họ & Tên của bạn.';
      if (!formData.clientEmail.trim()) {
        newErrors.clientEmail = 'Vui lòng nhập Email liên hệ.';
      } else if (!/\S+@\S+\.\S+/.test(formData.clientEmail)) {
        newErrors.clientEmail = 'Email không hợp lệ.';
      }
    }

    if (currentStep === 2) {
      if (!formData.projectName.trim()) newErrors.projectName = 'Vui lòng nhập Tên / Địa điểm công trình.';
      if (!formData.projectDescription.trim() || formData.projectDescription.length < 10) {
        newErrors.projectDescription = 'Mô tả nhu cầu cần ít nhất 10 ký tự.';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    setStep(prev => prev - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateStep(step)) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const createdRequest = submitProjectRequest(formData);
      setIsSubmitting(false);
      setSubmitSuccess(createdRequest);
    }, 1200);
  };

  const handleResetAndClose = () => {
    setStep(1);
    setSubmitSuccess(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn overflow-y-auto font-sans">
      <div
        className="bg-studio-900 border border-white/10 rounded-2xl max-w-2xl w-full my-8 shadow-2xl relative text-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="bg-studio-950 px-6 py-4 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-brand-primary/10 border border-brand-primary/30 flex items-center justify-center text-brand-primary shadow-glow-primary">
              <Home size={18} />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Yêu Cầu Tư Vấn & Báo Giá Xây Nhà</h3>
              <p className="text-xs text-slate-400 font-mono">Xây Nhà Đẹp Studio • Khảo sát & Dự toán miễn phí</p>
            </div>
          </div>

          <button
            onClick={handleResetAndClose}
            className="w-8 h-8 rounded-full bg-studio-900 hover:bg-studio-800 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {/* Success View */}
        {submitSuccess ? (
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-brand-primary/10 border border-brand-primary/30 text-brand-primary flex items-center justify-center mx-auto shadow-glow-primary">
              <CheckCircle2 size={36} />
            </div>

            <div className="space-y-2 max-w-md mx-auto">
              <h3 className="text-2xl font-extrabold text-white">Gửi Yêu Cầu Thành Công!</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Mã hồ sơ yêu cầu là <span className="font-mono font-bold text-brand-primary px-2 py-0.5 rounded bg-brand-primary/10 border border-brand-primary/20">{submitSuccess.id}</span>. Đội ngũ KTS Xây Nhà Đẹp sẽ gọi điện tư vấn trực tiếp trong vòng 24h.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-studio-950 border border-white/5 text-xs text-slate-400 space-y-1 font-mono text-left max-w-md mx-auto">
              <div className="flex justify-between"><span>Công trình:</span> <span className="text-white font-bold">{submitSuccess.projectName}</span></div>
              <div className="flex justify-between"><span>Hạng mục:</span> <span className="text-slate-200">{submitSuccess.projectType}</span></div>
              <div className="flex justify-between"><span>Trạng thái:</span> <span className="text-amber-400 font-bold">Pending (Đang Tiếp Nhận)</span></div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={handleResetAndClose}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-brand-primary text-white font-bold text-xs shadow-glow-primary hover:bg-brand-hover transition-all"
              >
                Hoàn tất & Đóng
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Step Progress Indicator Bar */}
            <div className="bg-studio-950/60 px-6 py-3 border-b border-white/5 flex items-center justify-between text-xs font-mono">
              <div className={`flex items-center gap-2 ${step >= 1 ? 'text-brand-primary font-bold' : 'text-slate-500'}`}>
                <span className="w-5 h-5 rounded-full bg-brand-primary/10 border border-brand-primary/30 flex items-center justify-center text-[10px]">1</span>
                <span className="hidden sm:inline">Thông tin chủ nhà</span>
              </div>
              <div className="text-slate-700">→</div>
              <div className={`flex items-center gap-2 ${step >= 2 ? 'text-brand-primary font-bold' : 'text-slate-500'}`}>
                <span className="w-5 h-5 rounded-full bg-brand-primary/10 border border-brand-primary/30 flex items-center justify-center text-[10px]">2</span>
                <span className="hidden sm:inline">Công trình</span>
              </div>
              <div className="text-slate-700">→</div>
              <div className={`flex items-center gap-2 ${step >= 3 ? 'text-brand-primary font-bold' : 'text-slate-500'}`}>
                <span className="w-5 h-5 rounded-full bg-brand-primary/10 border border-brand-primary/30 flex items-center justify-center text-[10px]">3</span>
                <span className="hidden sm:inline">Ngân sách & Tiến độ</span>
              </div>
              <div className="text-slate-700">→</div>
              <div className={`flex items-center gap-2 ${step >= 4 ? 'text-brand-primary font-bold' : 'text-slate-500'}`}>
                <span className="w-5 h-5 rounded-full bg-brand-primary/10 border border-brand-primary/30 flex items-center justify-center text-[10px]">4</span>
                <span className="hidden sm:inline">Xác nhận</span>
              </div>
            </div>

            {/* Form Steps Body */}
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">

              {/* STEP 1: Basic Information */}
              {step === 1 && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="border-b border-white/5 pb-3">
                    <h4 className="text-base font-bold text-white">1. Thông tin liên hệ gia chủ</h4>
                    <p className="text-xs text-slate-400">Cho chúng tôi biết thông tin để KTS liên hệ tư vấn trực tiếp.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1">
                        Họ và Tên chủ nhà <span className="text-rose-400">*</span>
                      </label>
                      <div className="relative">
                        <User size={15} className="absolute left-3 top-3 text-slate-500" />
                        <input
                          type="text"
                          value={formData.clientName}
                          onChange={(e) => handleInputChange('clientName', e.target.value)}
                          placeholder="Nguyễn Văn A"
                          className="w-full bg-studio-950 border border-slate-800 rounded-xl pl-9 pr-3 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-brand-primary transition-colors"
                        />
                      </div>
                      {errors.clientName && <p className="text-[11px] text-rose-400 mt-1">{errors.clientName}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1">
                        Email nhận bản vẽ / báo giá <span className="text-rose-400">*</span>
                      </label>
                      <div className="relative">
                        <Mail size={15} className="absolute left-3 top-3 text-slate-500" />
                        <input
                          type="email"
                          value={formData.clientEmail}
                          onChange={(e) => handleInputChange('clientEmail', e.target.value)}
                          placeholder="name@gmail.com"
                          className="w-full bg-studio-950 border border-slate-800 rounded-xl pl-9 pr-3 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-brand-primary transition-colors"
                        />
                      </div>
                      {errors.clientEmail && <p className="text-[11px] text-rose-400 mt-1">{errors.clientEmail}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1">
                        Số điện thoại / Zalo tư vấn
                      </label>
                      <div className="relative">
                        <Phone size={15} className="absolute left-3 top-3 text-slate-500" />
                        <input
                          type="text"
                          value={formData.clientPhone}
                          onChange={(e) => handleInputChange('clientPhone', e.target.value)}
                          placeholder="0908 123 456"
                          className="w-full bg-studio-950 border border-slate-800 rounded-xl pl-9 pr-3 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-brand-primary transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1">
                        Địa chỉ mảnh đất / Công trình
                      </label>
                      <div className="relative">
                        <Building size={15} className="absolute left-3 top-3 text-slate-500" />
                        <input
                          type="text"
                          value={formData.clientCompany}
                          onChange={(e) => handleInputChange('clientCompany', e.target.value)}
                          placeholder="Quận 7, TP. Hồ Chí Minh"
                          className="w-full bg-studio-950 border border-slate-800 rounded-xl pl-9 pr-3 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-brand-primary transition-colors"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: Project Specifications */}
              {step === 2 && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="border-b border-white/5 pb-3">
                    <h4 className="text-base font-bold text-white">2. Chi tiết công trình cần thi công</h4>
                    <p className="text-xs text-slate-400">Chọn loại hình, quy mô và diện tích dự kiến.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1">
                        Tên / Tóm tắt công trình <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.projectName}
                        onChange={(e) => handleInputChange('projectName', e.target.value)}
                        placeholder="VD: Xây mới biệt thự vườn 3 tầng"
                        className="w-full bg-studio-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-brand-primary transition-colors"
                      />
                      {errors.projectName && <p className="text-[11px] text-rose-400 mt-1">{errors.projectName}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1">
                        Loại hình công trình <span className="text-rose-400">*</span>
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => handleInputChange('projectType', e.target.value)}
                        className="w-full bg-studio-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-brand-primary transition-colors font-semibold"
                      >
                        <option value="Biệt thự">Biệt Thự Cao Cấp</option>
                        <option value="Nhà phố">Nhà Phố Hiện Đại</option>
                        <option value="Căn hộ">Nội Thất Căn Hộ / Penthouse</option>
                        <option value="Nội thất">Thi Thiết Kế Nội Thất Khách Sạn / Villa</option>
                        <option value="Sửa chữa">Sửa Chữa & Cải Tạo Nhà</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">
                      Mô tả mong muốn kiến trúc & Công năng <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      rows={3}
                      value={formData.projectDescription}
                      onChange={(e) => handleInputChange('projectDescription', e.target.value)}
                      placeholder="Mô tả phong cách kiến trúc mong muốn (Hiện đại, Tân cổ điển, Indochine...), số phòng ngủ, sân vườn, hồ bơi..."
                      className="w-full bg-studio-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-brand-primary transition-colors resize-none"
                    />
                    {errors.projectDescription && <p className="text-[11px] text-rose-400 mt-1">{errors.projectDescription}</p>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1">
                        Các tiện ích chính (Hồ bơi, Thang máy, Sân vườn...)
                      </label>
                      <textarea
                        rows={2}
                        value={formData.mainFeatures}
                        onChange={(e) => handleInputChange('mainFeatures', e.target.value)}
                        placeholder="VD: Thang máy gia đình, Hồ bơi vô cực, Sân thượng BBQ..."
                        className="w-full bg-studio-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-brand-primary transition-colors resize-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1">
                        Thành viên gia đình / Người sử dụng
                      </label>
                      <textarea
                        rows={2}
                        value={formData.targetUsers}
                        onChange={(e) => handleInputChange('targetUsers', e.target.value)}
                        placeholder="VD: Gia đình 6 người (3 thế hệ ông bà, bố mẹ, 2 con)..."
                        className="w-full bg-studio-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-brand-primary transition-colors resize-none"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: Budget & Timeline */}
              {step === 3 && (
                <div className="space-y-5 animate-fadeIn">
                  <div className="border-b border-white/5 pb-3">
                    <h4 className="text-base font-bold text-white">3. Ngân sách đầu tư & Tiến độ dự kiến</h4>
                    <p className="text-xs text-slate-400">Ước tính khoảng chi phí đầu tư và thời gian mong muốn khởi công.</p>
                  </div>

                  {/* Budget Options Tiers */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-2">
                      Ngân sách đầu tư dự kiến (VNĐ / USD)
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {['Dưới $10,000', '$10,000 – $30,000', '$30,000 – $50,000', '$50,000 – $100,000', 'Trên $100,000'].map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => handleInputChange('budget', b)}
                          className={`p-2.5 rounded-xl border text-xs font-mono transition-all text-center ${
                            formData.budget === b
                              ? 'bg-brand-primary/20 border-brand-primary text-white font-bold'
                              : 'bg-studio-950 border-slate-800 text-slate-400 hover:text-white'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Timeline Selection */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-2">
                      Thời gian dự kiến bàn giao
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {['Càng sớm càng tốt', '1–2 tháng', '2–3 tháng', '3–6 tháng', 'Linh hoạt'].map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => handleInputChange('timeline', t)}
                          className={`p-2.5 rounded-xl border text-xs font-mono transition-all text-center ${
                            formData.timeline === t
                              ? 'bg-brand-primary/20 border-brand-primary text-white font-bold'
                              : 'bg-studio-950 border-slate-800 text-slate-400 hover:text-white'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">
                      Vật liệu ưu tiên (Thép Hòa Phát, Gỗ An Cường, Đá Marble...)
                    </label>
                    <input
                      type="text"
                      value={formData.preferredTechnologies}
                      onChange={(e) => handleInputChange('preferredTechnologies', e.target.value)}
                      placeholder="Gỗ An Cường, Bê tông tươi M250, Nhôm XINGFA..."
                      className="w-full bg-studio-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-brand-primary transition-colors font-mono"
                    />
                  </div>
                </div>
              )}

              {/* STEP 4: Review & Submit */}
              {step === 4 && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="border-b border-white/5 pb-3">
                    <h4 className="text-base font-bold text-white">4. Xác nhận thông tin hồ sơ</h4>
                    <p className="text-xs text-slate-400">Rà soát lại yêu cầu trước khi gửi cho Xây Nhà Đẹp Studio.</p>
                  </div>

                  <div className="p-4 rounded-xl bg-studio-950 border border-white/5 space-y-3 text-xs text-slate-300">
                    <div className="grid grid-cols-2 gap-2 border-b border-slate-800 pb-2">
                      <div><span className="text-slate-500 font-mono">Gia chủ:</span> <p className="font-bold text-white">{formData.clientName}</p></div>
                      <div><span className="text-slate-500 font-mono">Email:</span> <p className="text-white">{formData.clientEmail}</p></div>
                      <div><span className="text-slate-500 font-mono">SĐT / Zalo:</span> <p className="text-white">{formData.clientPhone || 'N/A'}</p></div>
                      <div><span className="text-slate-500 font-mono">Địa chỉ:</span> <p className="text-white">{formData.clientCompany || 'N/A'}</p></div>
                    </div>

                    <div className="space-y-1">
                      <span className="text-slate-500 font-mono">Công trình:</span>
                      <p className="font-bold text-brand-primary">{formData.projectName} ({formData.projectType})</p>
                    </div>

                    <div className="space-y-1">
                      <span className="text-slate-500 font-mono">Mô tả mong muốn:</span>
                      <p className="text-slate-300 italic">{formData.projectDescription}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-2 border-t border-slate-800 pt-2">
                      <div><span className="text-slate-500 font-mono">Ngân sách dự kiến:</span> <p className="font-bold text-emerald-400 font-mono">{formData.budget}</p></div>
                      <div><span className="text-slate-500 font-mono">Thời gian thi công:</span> <p className="font-bold text-white font-mono">{formData.timeline}</p></div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-brand-primary/10 border border-brand-primary/20 text-xs text-slate-300 flex items-start gap-2">
                    <Sparkles size={16} className="text-brand-primary shrink-0 mt-0.5" />
                    <span>Sau khi gửi, thông tin hồ sơ của bạn sẽ tự động đồng bộ vào cổng theo dõi Client & Admin Control Center.</span>
                  </div>
                </div>
              )}

              {/* Modal Buttons Footer */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={handleBack}
                    disabled={isSubmitting}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-studio-950 border border-slate-800 text-xs font-semibold text-slate-300 hover:bg-studio-800 transition-all"
                  >
                    <ArrowLeft size={14} /> Quay lại
                  </button>
                ) : (
                  <div></div>
                )}

                {step < 4 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-brand-primary hover:bg-brand-hover text-white text-xs font-bold shadow-glow-primary transition-all ml-auto"
                  >
                    <span>Tiếp tục</span>
                    <ArrowRight size={14} />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center gap-2 px-7 py-3 rounded-xl bg-brand-primary hover:bg-brand-hover text-white text-xs font-bold shadow-glow-primary transition-all ml-auto disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        <span>Đang gửi hồ sơ...</span>
                      </>
                    ) : (
                      <>
                        <span>Gửi Hồ Sơ Yêu Cầu Báo Giá</span>
                        <ArrowRight size={16} />
                      </>
                    )}
                  </button>
                )}
              </div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
};
