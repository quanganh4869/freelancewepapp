import React, { useState } from 'react';
import { useRequests } from '../../context/RequestContext';
import { useAuth } from '../../context/AuthContext';
import { X, ArrowRight, ArrowLeft, CheckCircle2, Loader2, Sparkles, Building, Mail, Phone, User } from 'lucide-react';

export const ProjectRequestModal = ({ isOpen, onClose, initialService = '' }) => {
  const { submitProjectRequest } = useRequests();
  const { currentUser } = useAuth();

  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(null);

  // Form State
  const [formData, setFormData] = useState({
    clientName: currentUser?.name || '',
    clientEmail: currentUser?.email || '',
    clientPhone: '',
    clientCompany: currentUser?.company || '',

    projectName: initialService ? `Dự án ${initialService}` : 'Phát triển Web App tùy chỉnh',
    projectType: 'Business Web App',
    projectDescription: initialService ? `Yêu cầu tư vấn & báo giá chi tiết cho dịch vụ: ${initialService}` : '',
    mainFeatures: 'Đăng nhập/Đăng ký, Phân quyền Role, WebSockets, Payment Gateway',
    targetUsers: 'Khách hàng doanh nghiệp & Nhân viên nội bộ',

    budget: '$3,000 – $5,000',
    timeline: '1–2 months',
    preferredTechnologies: 'React 18, Node.js, PostgreSQL, Redis',
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
      if (!formData.projectName.trim()) newErrors.projectName = 'Vui lòng nhập Tên dự án.';
      if (!formData.projectDescription.trim() || formData.projectDescription.length < 10) {
        newErrors.projectDescription = 'Mô tả dự án cần ít nhất 10 ký tự.';
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn overflow-y-auto font-sans">
      <div
        className="bg-studio-900 border border-slate-800 rounded-xl max-w-2xl w-full my-8 shadow-2xl relative text-slate-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="bg-studio-950 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-brand-primary/10 border border-brand-primary/30 flex items-center justify-center text-brand-primary">
              <Sparkles size={16} />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">Start Your Web App Project</h3>
              <p className="text-xs text-slate-400 font-mono">Nexus Digital Product Studio • Báo giá trong 24h</p>
            </div>
          </div>

          <button
            onClick={handleResetAndClose}
            className="w-7 h-7 rounded-md bg-studio-950 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
          >
            <X size={15} />
          </button>
        </div>

        {/* Success View */}
        {submitSuccess ? (
          <div className="p-8 text-center space-y-6">
            <div className="w-14 h-14 rounded-full bg-brand-primary/10 border border-brand-primary/30 text-brand-primary flex items-center justify-center mx-auto">
              <CheckCircle2 size={32} />
            </div>

            <div className="space-y-2 max-w-md mx-auto">
              <h3 className="text-xl font-extrabold text-white">Gửi Yêu Cầu Thành Công!</h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                Mã yêu cầu của bạn là <span className="font-mono font-bold text-brand-primary px-2 py-0.5 rounded bg-brand-primary/10 border border-brand-primary/20">{submitSuccess.id}</span>. Đội ngũ Nexus Studio sẽ xem xét và phản hồi trong vòng 24h.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-studio-950 border border-slate-800 text-xs text-slate-400 space-y-1 font-mono text-left max-w-md mx-auto">
              <div className="flex justify-between"><span>Dự án:</span> <span className="text-white font-bold">{submitSuccess.projectName}</span></div>
              <div className="flex justify-between"><span>Loại hình:</span> <span className="text-slate-200">{submitSuccess.projectType}</span></div>
              <div className="flex justify-between"><span>Trạng thái:</span> <span className="text-amber-400 font-bold">Pending (Đang Chờ Duyệt)</span></div>
            </div>

            <div className="pt-2 flex items-center justify-center">
              <button
                onClick={handleResetAndClose}
                className="btn-primary py-2.5 px-6 text-xs font-semibold"
              >
                Hoàn tất & Đóng
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Step Progress Indicator Bar */}
            <div className="bg-studio-950 px-6 py-3 border-b border-slate-800 flex items-center justify-between text-xs font-mono">
              <div className={`flex items-center gap-2 ${step >= 1 ? 'text-brand-primary font-bold' : 'text-slate-500'}`}>
                <span className="w-5 h-5 rounded bg-brand-primary/10 border border-brand-primary/30 flex items-center justify-center text-[10px]">1</span>
                <span className="hidden sm:inline">Thông tin liên hệ</span>
              </div>
              <div className="text-slate-700">→</div>
              <div className={`flex items-center gap-2 ${step >= 2 ? 'text-brand-primary font-bold' : 'text-slate-500'}`}>
                <span className="w-5 h-5 rounded bg-brand-primary/10 border border-brand-primary/30 flex items-center justify-center text-[10px]">2</span>
                <span className="hidden sm:inline">Chi tiết Web App</span>
              </div>
              <div className="text-slate-700">→</div>
              <div className={`flex items-center gap-2 ${step >= 3 ? 'text-brand-primary font-bold' : 'text-slate-500'}`}>
                <span className="w-5 h-5 rounded bg-brand-primary/10 border border-brand-primary/30 flex items-center justify-center text-[10px]">3</span>
                <span className="hidden sm:inline">Ngân sách & Công nghệ</span>
              </div>
              <div className="text-slate-700">→</div>
              <div className={`flex items-center gap-2 ${step >= 4 ? 'text-brand-primary font-bold' : 'text-slate-500'}`}>
                <span className="w-5 h-5 rounded bg-brand-primary/10 border border-brand-primary/30 flex items-center justify-center text-[10px]">4</span>
                <span className="hidden sm:inline">Xác nhận</span>
              </div>
            </div>

            {/* Form Steps Body */}
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">

              {/* STEP 1 */}
              {step === 1 && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="border-b border-slate-800 pb-3">
                    <h4 className="text-sm font-bold text-white">1. Thông tin cá nhân & Doanh nghiệp</h4>
                    <p className="text-xs text-slate-400">Cho chúng tôi biết thông tin để KTS/Kỹ sư liên hệ tư vấn.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1">
                        Họ và Tên <span className="text-rose-400">*</span>
                      </label>
                      <div className="relative">
                        <User size={15} className="absolute left-3 top-3 text-slate-500" />
                        <input
                          type="text"
                          value={formData.clientName}
                          onChange={(e) => handleInputChange('clientName', e.target.value)}
                          placeholder="Nguyễn Văn A"
                          className="w-full bg-studio-950 border border-slate-800 rounded-lg pl-9 pr-3 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-brand-primary transition-colors"
                        />
                      </div>
                      {errors.clientName && <p className="text-[11px] text-rose-400 mt-1">{errors.clientName}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1">
                        Email liên hệ <span className="text-rose-400">*</span>
                      </label>
                      <div className="relative">
                        <Mail size={15} className="absolute left-3 top-3 text-slate-500" />
                        <input
                          type="email"
                          value={formData.clientEmail}
                          onChange={(e) => handleInputChange('clientEmail', e.target.value)}
                          placeholder="name@company.com"
                          className="w-full bg-studio-950 border border-slate-800 rounded-lg pl-9 pr-3 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-brand-primary transition-colors"
                        />
                      </div>
                      {errors.clientEmail && <p className="text-[11px] text-rose-400 mt-1">{errors.clientEmail}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1">
                        Số điện thoại / Zalo <span className="text-slate-500 text-[10px]">(Tùy chọn)</span>
                      </label>
                      <div className="relative">
                        <Phone size={15} className="absolute left-3 top-3 text-slate-500" />
                        <input
                          type="text"
                          value={formData.clientPhone}
                          onChange={(e) => handleInputChange('clientPhone', e.target.value)}
                          placeholder="+84 908 123 456"
                          className="w-full bg-studio-950 border border-slate-800 rounded-lg pl-9 pr-3 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-brand-primary transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1">
                        Công ty / Tổ chức <span className="text-slate-500 text-[10px]">(Tùy chọn)</span>
                      </label>
                      <div className="relative">
                        <Building size={15} className="absolute left-3 top-3 text-slate-500" />
                        <input
                          type="text"
                          value={formData.clientCompany}
                          onChange={(e) => handleInputChange('clientCompany', e.target.value)}
                          placeholder="Công ty TNHH Tech Asia"
                          className="w-full bg-studio-950 border border-slate-800 rounded-lg pl-9 pr-3 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-brand-primary transition-colors"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="border-b border-slate-800 pb-3">
                    <h4 className="text-sm font-bold text-white">2. Thông tin dự án Web App</h4>
                    <p className="text-xs text-slate-400">Mô tả tổng quan bài toán và mục tiêu phần mềm.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1">
                        Tên dự án <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.projectName}
                        onChange={(e) => handleInputChange('projectName', e.target.value)}
                        placeholder="VD: Nền tảng SaaS OmniDesk B2B"
                        className="w-full bg-studio-950 border border-slate-800 rounded-lg px-3 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-brand-primary transition-colors"
                      />
                      {errors.projectName && <p className="text-[11px] text-rose-400 mt-1">{errors.projectName}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1">
                        Loại dự án (Project Type) <span className="text-rose-400">*</span>
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => handleInputChange('projectType', e.target.value)}
                        className="w-full bg-studio-950 border border-slate-800 rounded-lg px-3 py-2.5 text-xs text-white focus:outline-none focus:border-brand-primary transition-colors font-semibold"
                      >
                        <option value="Business Web App">Business Web App (Ứng dụng doanh nghiệp)</option>
                        <option value="SaaS">SaaS Platform (Phần mềm dịch vụ)</option>
                        <option value="E-commerce">E-commerce Web App (Thương mại điện tử)</option>
                        <option value="Dashboard">Dashboard & Admin System</option>
                        <option value="Internal Tool">Internal Workflow Tool (Công cụ nội bộ)</option>
                        <option value="Other">Khác (Other)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">
                      Mô tả bài toán & Mục tiêu phần mềm <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      rows={3}
                      value={formData.projectDescription}
                      onChange={(e) => handleInputChange('projectDescription', e.target.value)}
                      placeholder="Mô tả ý tưởng, đối tượng người dùng và mục tiêu bạn muốn ứng dụng Web App đạt được..."
                      className="w-full bg-studio-950 border border-slate-800 rounded-lg px-3 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-brand-primary transition-colors resize-none"
                    />
                    {errors.projectDescription && <p className="text-[11px] text-rose-400 mt-1">{errors.projectDescription}</p>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1">
                        Các tính năng chính (Main Features)
                      </label>
                      <textarea
                        rows={2}
                        value={formData.mainFeatures}
                        onChange={(e) => handleInputChange('mainFeatures', e.target.value)}
                        placeholder="VD: Phân quyền Role, WebSockets Chat, Cổng thanh toán..."
                        className="w-full bg-studio-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-brand-primary transition-colors resize-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1">
                        Đối tượng sử dụng (Target Users)
                      </label>
                      <textarea
                        rows={2}
                        value={formData.targetUsers}
                        onChange={(e) => handleInputChange('targetUsers', e.target.value)}
                        placeholder="VD: Đội ngũ nhân viên kinh doanh, Khách hàng B2B..."
                        className="w-full bg-studio-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-brand-primary transition-colors resize-none"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3 */}
              {step === 3 && (
                <div className="space-y-5 animate-fadeIn">
                  <div className="border-b border-slate-800 pb-3">
                    <h4 className="text-sm font-bold text-white">3. Ngân sách, Thời gian & Công nghệ</h4>
                    <p className="text-xs text-slate-400">Ước tính khoảng ngân sách đầu tư và kỳ hạn bàn giao dự kiến.</p>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-2">
                      Mức ngân sách dự kiến (Estimated Budget)
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {['Dưới $1,000', '$1,000 – $3,000', '$3,000 – $5,000', '$5,000 – $10,000', 'Trên $10,000'].map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => handleInputChange('budget', b)}
                          className={`p-2.5 rounded-lg border text-xs font-mono transition-all text-center ${
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

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-2">
                      Thời gian dự kiến bàn giao (Timeline)
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {['ASAP', '1–2 tháng', '2–3 tháng', '3–6 tháng', 'Linh hoạt'].map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => handleInputChange('timeline', t)}
                          className={`p-2.5 rounded-lg border text-xs font-mono transition-all text-center ${
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
                      Công nghệ ưu tiên (React 18, Node.js, PostgreSQL, Docker...)
                    </label>
                    <input
                      type="text"
                      value={formData.preferredTechnologies}
                      onChange={(e) => handleInputChange('preferredTechnologies', e.target.value)}
                      placeholder="React, Next.js, Node.js, PostgreSQL..."
                      className="w-full bg-studio-950 border border-slate-800 rounded-lg px-3 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-brand-primary transition-colors font-mono"
                    />
                  </div>
                </div>
              )}

              {/* STEP 4 */}
              {step === 4 && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="border-b border-slate-800 pb-3">
                    <h4 className="text-sm font-bold text-white">4. Xác nhận thông tin hồ sơ</h4>
                    <p className="text-xs text-slate-400">Rà soát lại yêu cầu trước khi gửi cho Nexus Studio.</p>
                  </div>

                  <div className="p-4 rounded-lg bg-studio-950 border border-slate-800 space-y-3 text-xs text-slate-300 font-sans">
                    <div className="grid grid-cols-2 gap-2 border-b border-slate-800 pb-2">
                      <div><span className="text-slate-500 font-mono">Khách hàng:</span> <p className="font-bold text-white">{formData.clientName}</p></div>
                      <div><span className="text-slate-500 font-mono">Email:</span> <p className="text-white">{formData.clientEmail}</p></div>
                      <div><span className="text-slate-500 font-mono">SĐT / Zalo:</span> <p className="text-white">{formData.clientPhone || 'N/A'}</p></div>
                      <div><span className="text-slate-500 font-mono">Công ty:</span> <p className="text-white">{formData.clientCompany || 'N/A'}</p></div>
                    </div>

                    <div className="space-y-1">
                      <span className="text-slate-500 font-mono">Dự án:</span>
                      <p className="font-bold text-brand-primary">{formData.projectName} ({formData.projectType})</p>
                    </div>

                    <div className="space-y-1">
                      <span className="text-slate-500 font-mono">Mô tả bài toán:</span>
                      <p className="text-slate-300 italic">{formData.projectDescription}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-2 border-t border-slate-800 pt-2">
                      <div><span className="text-slate-500 font-mono">Ngân sách dự kiến:</span> <p className="font-bold text-emerald-400 font-mono">{formData.budget}</p></div>
                      <div><span className="text-slate-500 font-mono">Kỳ hạn bàn giao:</span> <p className="font-bold text-white font-mono">{formData.timeline}</p></div>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-brand-primary/10 border border-brand-primary/20 text-xs text-slate-300 flex items-start gap-2">
                    <Sparkles size={16} className="text-brand-primary shrink-0 mt-0.5" />
                    <span>Sau khi gửi, thông tin dự án của bạn sẽ lập tức hiển thị trong danh sách theo dõi của Admin & Client Portal.</span>
                  </div>
                </div>
              )}

              {/* Modal Buttons Footer */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={handleBack}
                    disabled={isSubmitting}
                    className="btn-secondary py-2 px-4 text-xs font-semibold"
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
                    className="btn-primary py-2 px-5 text-xs font-semibold ml-auto"
                  >
                    <span>Tiếp tục</span>
                    <ArrowRight size={14} />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary py-2.5 px-6 text-xs font-semibold ml-auto disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={15} className="animate-spin" />
                        <span>Đang gửi yêu cầu...</span>
                      </>
                    ) : (
                      <>
                        <span>Gửi Yêu Cầu Báo Giá</span>
                        <ArrowRight size={15} />
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
