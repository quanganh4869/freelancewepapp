import React, { useState, useEffect } from 'react';
import { useRequests } from '../../context/RequestContext';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import { X, ArrowRight, ArrowLeft, CheckCircle2, Loader2, Sparkles, Building, Mail, Phone, User, ShieldCheck, Check } from 'lucide-react';

export const ProjectRequestModal = ({ isOpen, onClose, initialService = '' }) => {
  const { submitProjectRequest } = useRequests();
  const { currentUser } = useAuth();
  const { isDark } = useTheme();

  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(null);

  // Close modal on Esc key press (UI/UX Improvement)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Form State
  const [formData, setFormData] = useState({
    // Step 1: Client & Company Info
    clientName: currentUser?.name || '',
    clientEmail: currentUser?.email || '',
    clientPhone: '',
    clientCompany: currentUser?.company || '',
    businessSector: 'B2B SaaS / Công Nghệ',
    companyScale: '10–50 nhân sự',

    // Step 2: Project Scope & Core Requirements
    projectName: initialService ? `Dự án ${initialService}` : 'Phát triển Web App tùy chỉnh',
    projectType: 'SaaS Platform (Phần mềm dịch vụ)',
    projectStage: 'Đã có ý tưởng sơ khai',
    projectDescription: initialService ? `Yêu cầu tư vấn & báo giá chi tiết cho dịch vụ: ${initialService}` : '',
    targetUsers: 'Khách hàng doanh nghiệp & Nhân viên điều hành',
    
    // Step 3: Feature Scope & Integrations
    selectedFeatures: [
      'Xác thực tài khoản & Phân quyền Role (RBAC)',
      'Bảng điều khiển Analytics & Báo cáo',
      'Tích hợp Cổng thanh toán (VNPay/MOMO/Stripe)'
    ],
    preferredTechnologies: 'React 18 / Next.js, Node.js, PostgreSQL',
    referenceWebsites: '',

    // Step 4: Budget, Timeline & SLA
    budget: '30 – 50 Triệu VNĐ',
    timeline: '2–3 tháng',
    slaTier: '12 Tháng SLA Maintenance (Khuyên dùng)',
    needNda: 'Có (Ký thỏa thuận NDA bảo mật)',
    additionalNotes: ''
  });

  const [errors, setErrors] = useState({});

  if (!isOpen) return null;

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: null }));
    }
  };

  const toggleFeature = (featureName) => {
    setFormData(prev => {
      const exists = prev.selectedFeatures.includes(featureName);
      const updated = exists
        ? prev.selectedFeatures.filter(f => f !== featureName)
        : [...prev.selectedFeatures, featureName];
      return { ...prev, selectedFeatures: updated };
    });
  };

  const validateStep = (currentStep) => {
    const newErrors = {};

    if (currentStep === 1) {
      if (!formData.clientName.trim()) newErrors.clientName = 'Vui lòng nhập Họ & Tên.';
      if (!formData.clientEmail.trim()) {
        newErrors.clientEmail = 'Vui lòng nhập Email.';
      } else if (!/\S+@\S+\.\S+/.test(formData.clientEmail)) {
        newErrors.clientEmail = 'Email không hợp lệ.';
      }
    }

    if (currentStep === 2) {
      if (!formData.projectName.trim()) newErrors.projectName = 'Vui lòng nhập Tên dự án.';
      if (!formData.projectDescription.trim() || formData.projectDescription.length < 10) {
        newErrors.projectDescription = 'Mô tả bài toán cần ít nhất 10 ký tự.';
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

    try {
      await fetch('/api/send-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      }).catch(err => console.log('Email API notice:', err));
    } catch (err) {
      console.log('Error triggering email API:', err);
    }

    const createdRequest = submitProjectRequest(formData);
    setIsSubmitting(false);
    setSubmitSuccess(createdRequest);
  };

  const handleResetAndClose = () => {
    setStep(1);
    setSubmitSuccess(null);
    onClose();
  };

  const availableFeatures = [
    'Xác thực tài khoản & Phân quyền Role (RBAC)',
    'Bảng điều khiển Analytics & Báo cáo',
    'Tích hợp Cổng thanh toán (VNPay/MOMO/Stripe)',
    'Thông báo đẩy & Real-time Chat',
    'Xuất/Nhập dữ liệu tự động (Excel / PDF)',
    'Hỗ trợ Đa ngôn ngữ',
    'Tích hợp Trí tuệ nhân tạo (AI API)',
    'Hệ thống Workflow & Tự động hóa',
    'API Gateway & Tích hợp phần mềm bên thứ 3'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn overflow-y-auto font-sans">
      <div
        className={`border rounded-2xl max-w-3xl w-full my-6 shadow-2xl relative overflow-hidden transition-colors ${
          isDark ? 'bg-studio-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className={`px-6 py-4 border-b flex items-center justify-between ${
          isDark ? 'bg-studio-950 border-slate-800' : 'bg-slate-50 border-slate-200'
        }`}>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-brand-primary/10 border border-brand-primary/30 flex items-center justify-center text-brand-primary">
              <Sparkles size={18} />
            </div>
            <div>
              <h3 className="text-base font-bold font-display">Gửi Yêu Cầu Báo Giá Dự Án Web App</h3>
              <p className="text-xs text-slate-500 font-mono">Quang Anh Studio • Phản hồi trong 24h</p>
            </div>
          </div>

          <button
            onClick={handleResetAndClose}
            className="w-8 h-8 rounded-lg bg-slate-200 dark:bg-studio-950 border border-slate-300 dark:border-slate-800 flex items-center justify-center text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {/* Success View */}
        {submitSuccess ? (
          <div className="p-8 sm:p-12 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-brand-primary/10 border border-brand-primary/30 text-brand-primary flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 size={36} />
            </div>

            <div className="space-y-2 max-w-md mx-auto">
              <h3 className="text-2xl font-extrabold font-display">Đã Gửi Yêu Cầu Thành Công!</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                Thông tin dự án đã được gửi trực tiếp về email <span className="font-mono font-bold text-brand-primary">quanganhqb04@gmail.com</span>. Quang Anh sẽ liên hệ tư vấn báo giá trong vòng 24 giờ.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 dark:bg-studio-950 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 space-y-2 font-mono text-left max-w-md mx-auto">
              <div className="flex justify-between border-b border-slate-200 dark:border-slate-800 pb-1.5">
                <span>Khách hàng:</span> <span className="text-slate-900 dark:text-white font-bold">{submitSuccess.clientName}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 dark:border-slate-800 pb-1.5">
                <span>Dự án:</span> <span className="text-brand-primary font-bold">{submitSuccess.projectName}</span>
              </div>
              <div className="flex justify-between">
                <span>Ngân sách dự kiến:</span> <span className="text-emerald-600 dark:text-emerald-400 font-bold">{submitSuccess.budget}</span>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-center">
              <button
                onClick={handleResetAndClose}
                className="btn-primary py-3 px-8 text-sm font-bold font-display"
              >
                Hoàn Tất & Đóng
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* 5-Step Progress Indicator */}
            <div className="bg-slate-50 dark:bg-studio-950/80 px-6 py-3 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs font-mono">
              {[
                { s: 1, label: '1. Liên Hệ' },
                { s: 2, label: '2. Yêu Cầu' },
                { s: 3, label: '3. Tính Năng' },
                { s: 4, label: '4. Ngân Sách' },
                { s: 5, label: '5. Xác Nhận' }
              ].map((item) => (
                <div key={item.s} className={`flex items-center gap-1.5 ${step >= item.s ? 'text-brand-primary font-bold' : 'text-slate-400'}`}>
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${
                    step >= item.s ? 'bg-brand-primary text-white font-bold' : 'bg-slate-200 dark:bg-slate-800 text-slate-500'
                  }`}>{item.s}</span>
                  <span className="hidden md:inline font-display">{item.label}</span>
                </div>
              ))}
            </div>

            {/* Form Steps Body */}
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">

              {/* STEP 1: Client Information */}
              {step === 1 && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
                    <h4 className="text-base font-bold font-display">1. Thông tin người đại diện</h4>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-semibold mb-1 text-slate-700 dark:text-slate-300">
                        Họ và Tên <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <User size={15} className="absolute left-3 top-3 text-slate-400" />
                        <input
                          type="text"
                          value={formData.clientName}
                          onChange={(e) => handleInputChange('clientName', e.target.value)}
                          placeholder="VD: Nguyễn Văn A"
                          className="w-full bg-slate-50 dark:bg-studio-950 border border-slate-200 dark:border-slate-800 rounded-xl pl-9 pr-3 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-brand-primary transition-colors"
                        />
                      </div>
                      {errors.clientName && <p className="text-[11px] text-rose-500 mt-1">{errors.clientName}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-semibold mb-1 text-slate-700 dark:text-slate-300">
                        Email liên hệ <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <Mail size={15} className="absolute left-3 top-3 text-slate-400" />
                        <input
                          type="email"
                          value={formData.clientEmail}
                          onChange={(e) => handleInputChange('clientEmail', e.target.value)}
                          placeholder="name@company.com"
                          className="w-full bg-slate-50 dark:bg-studio-950 border border-slate-200 dark:border-slate-800 rounded-xl pl-9 pr-3 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-brand-primary transition-colors"
                        />
                      </div>
                      {errors.clientEmail && <p className="text-[11px] text-rose-500 mt-1">{errors.clientEmail}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-semibold mb-1 text-slate-700 dark:text-slate-300">
                        Số điện thoại / Zalo <span className="text-slate-400 text-[10px]">(Tùy chọn)</span>
                      </label>
                      <div className="relative">
                        <Phone size={15} className="absolute left-3 top-3 text-slate-400" />
                        <input
                          type="text"
                          value={formData.clientPhone}
                          onChange={(e) => handleInputChange('clientPhone', e.target.value)}
                          placeholder="+84 908 123 456"
                          className="w-full bg-slate-50 dark:bg-studio-950 border border-slate-200 dark:border-slate-800 rounded-xl pl-9 pr-3 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-brand-primary transition-colors font-mono"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-semibold mb-1 text-slate-700 dark:text-slate-300">
                        Tên Công ty / Đơn vị <span className="text-slate-400 text-[10px]">(Tùy chọn)</span>
                      </label>
                      <div className="relative">
                        <Building size={15} className="absolute left-3 top-3 text-slate-400" />
                        <input
                          type="text"
                          value={formData.clientCompany}
                          onChange={(e) => handleInputChange('clientCompany', e.target.value)}
                          placeholder="Công ty TNHH Asia"
                          className="w-full bg-slate-50 dark:bg-studio-950 border border-slate-200 dark:border-slate-800 rounded-xl pl-9 pr-3 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-brand-primary transition-colors"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: Project Requirements */}
              {step === 2 && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
                    <h4 className="text-base font-bold font-display">2. Thông tin dự án</h4>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-semibold mb-1 text-slate-700 dark:text-slate-300">
                        Tên dự án dự kiến <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.projectName}
                        onChange={(e) => handleInputChange('projectName', e.target.value)}
                        placeholder="VD: Nền tảng SaaS B2B"
                        className="w-full bg-slate-50 dark:bg-studio-950 border border-slate-200 dark:border-slate-800 rounded-xl px-3 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-brand-primary transition-colors font-semibold"
                      />
                      {errors.projectName && <p className="text-[11px] text-rose-500 mt-1">{errors.projectName}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-semibold mb-1 text-slate-700 dark:text-slate-300">
                        Loại hình phần mềm <span className="text-rose-500">*</span>
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => handleInputChange('projectType', e.target.value)}
                        className="w-full bg-slate-50 dark:bg-studio-950 border border-slate-200 dark:border-slate-800 rounded-xl px-3 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-brand-primary transition-colors font-semibold"
                      >
                        <option value="SaaS Platform (Phần mềm dịch vụ)">SaaS Platform (Phần mềm dịch vụ)</option>
                        <option value="Business Web App (Ứng dụng doanh nghiệp)">Business Web App (Ứng dụng doanh nghiệp)</option>
                        <option value="Enterprise Dashboard & Admin System">Enterprise Dashboard & Admin System</option>
                        <option value="E-commerce & Marketplace Web App">E-commerce & Marketplace Web App</option>
                        <option value="Internal Workflow Automation Tool">Internal Workflow Automation Tool</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold mb-1 text-slate-700 dark:text-slate-300">
                      Mô tả bài toán kinh doanh <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      rows={3}
                      value={formData.projectDescription}
                      onChange={(e) => handleInputChange('projectDescription', e.target.value)}
                      placeholder="Mô tả quy trình làm việc hiện tại và các yêu cầu bạn mong muốn đạt được..."
                      className="w-full bg-slate-50 dark:bg-studio-950 border border-slate-200 dark:border-slate-800 rounded-xl px-3 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-brand-primary transition-colors resize-none"
                    />
                    {errors.projectDescription && <p className="text-[11px] text-rose-500 mt-1">{errors.projectDescription}</p>}
                  </div>
                </div>
              )}

              {/* STEP 3: Feature Scope */}
              {step === 3 && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
                    <h4 className="text-base font-bold font-display">3. Chọn tính năng cốt lõi</h4>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {availableFeatures.map((feat) => {
                      const isSelected = formData.selectedFeatures.includes(feat);
                      return (
                        <button
                          key={feat}
                          type="button"
                          onClick={() => toggleFeature(feat)}
                          className={`p-3 rounded-xl border text-xs text-left transition-all flex items-center justify-between font-medium ${
                            isSelected
                              ? 'bg-brand-primary/10 border-brand-primary text-brand-primary font-bold'
                              : 'bg-slate-50 dark:bg-studio-950 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300'
                          }`}
                        >
                          <span className="pr-2">{feat}</span>
                          <div className={`w-4 h-4 rounded flex items-center justify-center border shrink-0 ${
                            isSelected ? 'bg-brand-primary border-brand-primary text-white' : 'border-slate-400'
                          }`}>
                            {isSelected && <Check size={12} />}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP 4: Budget & Timeline */}
              {step === 4 && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
                    <h4 className="text-base font-bold font-display">4. Ngân sách & Thời gian triển khai</h4>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold mb-2 text-slate-700 dark:text-slate-300">
                      Khoảng ngân sách đầu tư dự kiến (VNĐ)
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {[
                        'Dưới 15 Triệu VNĐ',
                        '15 – 30 Triệu VNĐ',
                        '30 – 50 Triệu VNĐ',
                        '50 – 100 Triệu VNĐ',
                        'Trên 100 Triệu VNĐ'
                      ].map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => handleInputChange('budget', b)}
                          className={`p-3 rounded-xl border text-xs font-mono transition-all text-left ${
                            formData.budget === b
                              ? 'bg-brand-primary/10 border-brand-primary text-brand-primary font-bold'
                              : 'bg-slate-50 dark:bg-studio-950 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold mb-2 text-slate-700 dark:text-slate-300">
                      Thời gian triển khai mong muốn
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {['Cần gấp trong 1 tháng', '1–2 tháng', '2–3 tháng', 'Linh hoạt'].map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => handleInputChange('timeline', t)}
                          className={`p-2.5 rounded-xl border text-xs font-mono transition-all text-center ${
                            formData.timeline === t
                              ? 'bg-brand-primary text-white border-brand-primary font-bold'
                              : 'bg-slate-50 dark:bg-studio-950 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 5: Confirm & Submit */}
              {step === 5 && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
                    <h4 className="text-base font-bold font-display">5. Xác nhận & Gửi yêu cầu</h4>
                  </div>

                  <div className="p-5 rounded-xl bg-slate-50 dark:bg-studio-950 border border-slate-200 dark:border-slate-800 space-y-3 text-xs font-mono">
                    <div className="flex justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                      <span>Người liên hệ:</span> <span className="font-bold text-slate-900 dark:text-white">{formData.clientName} ({formData.clientEmail})</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                      <span>Dự án:</span> <span className="font-bold text-brand-primary">{formData.projectName}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                      <span>Ngân sách dự kiến:</span> <span className="font-bold text-emerald-600 dark:text-emerald-400">{formData.budget}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Thời gian:</span> <span className="font-bold text-slate-900 dark:text-white">{formData.timeline}</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-brand-primary/10 border border-brand-primary/20 text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2">
                    <ShieldCheck size={16} className="text-brand-primary shrink-0 mt-0.5" />
                    <span>Thông tin của bạn sẽ được gửi thẳng về Email admin `quanganhqb04@gmail.com` và bảo mật 100%.</span>
                  </div>
                </div>
              )}

              {/* Modal Footer Buttons */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between font-display">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={handleBack}
                    disabled={isSubmitting}
                    className="btn-secondary py-2.5 px-5 text-xs font-bold"
                  >
                    <ArrowLeft size={14} /> Quay lại
                  </button>
                ) : (
                  <div></div>
                )}

                {step < 5 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="btn-primary py-2.5 px-6 text-xs font-bold ml-auto"
                  >
                    <span>Tiếp tục</span>
                    <ArrowRight size={14} />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary py-3 px-7 text-xs font-bold ml-auto disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        <span>Đang gửi mail...</span>
                      </>
                    ) : (
                      <>
                        <span>Gửi Báo Giá Ngay</span>
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
