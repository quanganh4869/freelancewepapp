import React, { useState } from 'react';
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
    projectStage: 'Đã có ý tưởng sơ khai & Yêu cầu tính năng',
    projectDescription: initialService ? `Yêu cầu tư vấn & báo giá chi tiết cho dịch vụ: ${initialService}` : '',
    targetUsers: 'Khách hàng doanh nghiệp B2B & Nhân viên điều hành',
    
    // Step 3: Feature Scope & Integrations
    selectedFeatures: [
      'Xác thực tài khoản & Phân quyền Role (RBAC)',
      'Bảng điều khiển Analytics & Báo cáo',
      'Tích hợp Cổng thanh toán (VNPay/MOMO/Stripe)'
    ],
    preferredTechnologies: 'React 18 / Next.js, Node.js, PostgreSQL, Redis, Docker',
    referenceWebsites: '',

    // Step 4: Budget, Timeline & SLA
    budget: '30 – 50 Triệu VNĐ',
    timeline: '2–3 tháng',
    slaTier: '12 Tháng SLA 99.9% Maintenance (Khuyên dùng)',
    needNda: 'Có (Cần ký thỏa thuận bảo mật NDA trước khi chia sẻ tài liệu)',
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
      if (!formData.clientName.trim()) newErrors.clientName = 'Vui lòng nhập Họ & Tên của bạn.';
      if (!formData.clientEmail.trim()) {
        newErrors.clientEmail = 'Vui lòng nhập Email doanh nghiệp.';
      } else if (!/\S+@\S+\.\S+/.test(formData.clientEmail)) {
        newErrors.clientEmail = 'Email không hợp lệ.';
      }
    }

    if (currentStep === 2) {
      if (!formData.projectName.trim()) newErrors.projectName = 'Vui lòng nhập Tên dự án dự kiến.';
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
      // Call Vercel Serverless Function to send email notification to quanganhqb04@gmail.com
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

  // Feature Options List
  const availableFeatures = [
    'Xác thực tài khoản & Phân quyền Role (RBAC)',
    'Bảng điều khiển Analytics & Báo cáo Real-time',
    'Tích hợp Cổng thanh toán (VNPay/MOMO/Stripe)',
    'Thông báo đẩy & WebSockets Real-time Chat',
    'Xuất/Nhập dữ liệu tự động (Excel / PDF / CSV)',
    'Hỗ trợ Đa ngôn ngữ (Multi-language Support)',
    'Tích hợp Trí tuệ nhân tạo (AI / LLM API)',
    'Hệ thống Workflow & Tự động hóa quy trình',
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
              <h3 className="text-base font-bold">Khởi Tạo Hồ Sơ Yêu Cầu Dự Án Web App</h3>
              <p className="text-xs text-slate-500 font-mono">Quang Anh Studio • Báo giá nhanh trong 24h</p>
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
              <h3 className="text-2xl font-extrabold">Đã Gửi Hồ Sơ Dự Án Thành Công!</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                Mã theo dõi yêu cầu của bạn là <span className="font-mono font-bold text-brand-primary px-2.5 py-1 rounded bg-brand-primary/10 border border-brand-primary/20">{submitSuccess.id}</span>. Quang Anh Studio sẽ xem xét hồ sơ và liên hệ báo giá trong vòng 24 giờ.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 dark:bg-studio-950 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 space-y-2 font-mono text-left max-w-md mx-auto">
              <div className="flex justify-between border-b border-slate-200 dark:border-slate-800 pb-1.5">
                <span>Khách hàng:</span> <span className="text-slate-900 dark:text-white font-bold">{submitSuccess.clientName}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 dark:border-slate-800 pb-1.5">
                <span>Dự án:</span> <span className="text-brand-primary font-bold">{submitSuccess.projectName}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 dark:border-slate-800 pb-1.5">
                <span>Loại hình:</span> <span className="text-slate-900 dark:text-slate-200">{submitSuccess.projectType}</span>
              </div>
              <div className="flex justify-between">
                <span>Trạng thái hồ sơ:</span> <span className="text-amber-600 dark:text-amber-400 font-bold">Pending (Đang Đánh Giá)</span>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-center">
              <button
                onClick={handleResetAndClose}
                className="btn-primary py-3 px-8 text-sm font-semibold"
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
                { s: 1, label: '1. Khách Hàng' },
                { s: 2, label: '2. Yêu Cầu' },
                { s: 3, label: '3. Tính Năng' },
                { s: 4, label: '4. Ngân Sách' },
                { s: 5, label: '5. Xác Nhận' }
              ].map((item) => (
                <div key={item.s} className={`flex items-center gap-1.5 ${step >= item.s ? 'text-brand-primary font-bold' : 'text-slate-400'}`}>
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${
                    step >= item.s ? 'bg-brand-primary text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-500'
                  }`}>{item.s}</span>
                  <span className="hidden md:inline">{item.label}</span>
                </div>
              ))}
            </div>

            {/* Form Steps Body */}
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">

              {/* STEP 1: Client & Company Information */}
              {step === 1 && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
                    <h4 className="text-base font-bold">1. Thông tin cá nhân & Doanh nghiệp</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Cung cấp thông tin người đại diện để kỹ sư tư vấn liên hệ phản hồi.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-semibold mb-1 text-slate-700 dark:text-slate-300">
                        Họ và Tên đại diện <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <User size={15} className="absolute left-3 top-3 text-slate-400" />
                        <input
                          type="text"
                          value={formData.clientName}
                          onChange={(e) => handleInputChange('clientName', e.target.value)}
                          placeholder="VD: Nguyễn Văn Anh"
                          className="w-full bg-slate-50 dark:bg-studio-950 border border-slate-200 dark:border-slate-800 rounded-xl pl-9 pr-3 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-brand-primary transition-colors"
                        />
                      </div>
                      {errors.clientName && <p className="text-[11px] text-rose-500 mt-1">{errors.clientName}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-semibold mb-1 text-slate-700 dark:text-slate-300">
                        Email công việc <span className="text-rose-500">*</span>
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
                          className="w-full bg-slate-50 dark:bg-studio-950 border border-slate-200 dark:border-slate-800 rounded-xl pl-9 pr-3 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-brand-primary transition-colors"
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
                          placeholder="Công ty TNHH Công Nghệ Asia"
                          className="w-full bg-slate-50 dark:bg-studio-950 border border-slate-200 dark:border-slate-800 rounded-xl pl-9 pr-3 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-brand-primary transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-semibold mb-1 text-slate-700 dark:text-slate-300">
                        Lĩnh vực hoạt động doanh nghiệp
                      </label>
                      <select
                        value={formData.businessSector}
                        onChange={(e) => handleInputChange('businessSector', e.target.value)}
                        className="w-full bg-slate-50 dark:bg-studio-950 border border-slate-200 dark:border-slate-800 rounded-xl px-3 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-brand-primary transition-colors font-semibold"
                      >
                        <option value="B2B SaaS / Công Nghệ">B2B SaaS / Công Nghệ</option>
                        <option value="Thương Mại Điện Tử & Bán Lẻ">Thương Mại Điện Tử & Bán Lẻ</option>
                        <option value="FinTech & Tài Chính">FinTech & Tài Chính</option>
                        <option value="Logistics & Chuỗi Cung Ứng">Logistics & Chuỗi Cung Ứng</option>
                        <option value="Y Tế & Chăm Sóc Sức Khỏe">Y Tế & Chăm Sóc Sức Khỏe</option>
                        <option value="Giáo Dục EdTech">Giáo Dục EdTech</option>
                        <option value="Bất Động Sản & Xây Dựng">Bất Động Sản & Xây Dựng</option>
                        <option value="Khác">Lĩnh vực khác</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-semibold mb-1 text-slate-700 dark:text-slate-300">
                        Quy mô nhân sự công ty
                      </label>
                      <select
                        value={formData.companyScale}
                        onChange={(e) => handleInputChange('companyScale', e.target.value)}
                        className="w-full bg-slate-50 dark:bg-studio-950 border border-slate-200 dark:border-slate-800 rounded-xl px-3 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-brand-primary transition-colors font-semibold"
                      >
                        <option value="Dưới 10 nhân sự">Dưới 10 nhân sự (Startup nhỏ)</option>
                        <option value="10–50 nhân sự">10–50 nhân sự (Doanh nghiệp vừa)</option>
                        <option value="50–200 nhân sự">50–200 nhân sự (Tăng trưởng nhanh)</option>
                        <option value="Trên 200 nhân sự">Trên 200 nhân sự (Enterprise)</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: Project Scope & Core Requirements */}
              {step === 2 && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
                    <h4 className="text-base font-bold">2. Loại hình & Mục tiêu phần mềm Web App</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Mô tả bài toán kinh doanh và kết quả mong muốn thu được.</p>
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
                        placeholder="VD: Nền tảng SaaS OmniDesk B2B"
                        className="w-full bg-slate-50 dark:bg-studio-950 border border-slate-200 dark:border-slate-800 rounded-xl px-3 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-brand-primary transition-colors"
                      />
                      {errors.projectName && <p className="text-[11px] text-rose-500 mt-1">{errors.projectName}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-semibold mb-1 text-slate-700 dark:text-slate-300">
                        Phân loại phần mềm Web App <span className="text-rose-500">*</span>
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
                        <option value="API & Data Integration Platform">API & Data Integration Platform</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold mb-1 text-slate-700 dark:text-slate-300">
                      Giai đoạn chuẩn bị hiện tại của dự án
                    </label>
                    <select
                      value={formData.projectStage}
                      onChange={(e) => handleInputChange('projectStage', e.target.value)}
                      className="w-full bg-slate-50 dark:bg-studio-950 border border-slate-200 dark:border-slate-800 rounded-xl px-3 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-brand-primary transition-colors font-semibold"
                    >
                      <option value="Đã có ý tưởng sơ khai & Yêu cầu tính năng">Đã có ý tưởng sơ khai & Yêu cầu tính năng</option>
                      <option value="Đã có tài liệu mô tả yêu cầu (BRD / PRD)">Đã có tài liệu mô tả yêu cầu (BRD / PRD)</option>
                      <option value="Đã có thiết kế Wireframe / UI Figma hoàn chỉnh">Đã có thiết kế Wireframe / UI Figma hoàn chỉnh</option>
                      <option value="Đã có phần mềm cũ cần nâng cấp đập đi xây lại">Đã có phần mềm cũ cần nâng cấp đập đi xây lại</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold mb-1 text-slate-700 dark:text-slate-300">
                      Mô tả chi tiết bài toán kinh doanh & Mục tiêu phần mềm <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      rows={3}
                      value={formData.projectDescription}
                      onChange={(e) => handleInputChange('projectDescription', e.target.value)}
                      placeholder="Mô tả quy trình nghiệp vụ hiện tại, nỗi đau cần giải quyết và các kết quả kinh doanh bạn mong muốn đạt được..."
                      className="w-full bg-slate-50 dark:bg-studio-950 border border-slate-200 dark:border-slate-800 rounded-xl px-3 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-brand-primary transition-colors resize-none"
                    />
                    {errors.projectDescription && <p className="text-[11px] text-rose-500 mt-1">{errors.projectDescription}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold mb-1 text-slate-700 dark:text-slate-300">
                      Đối tượng người dùng mục tiêu & Phân quyền Role
                    </label>
                    <input
                      type="text"
                      value={formData.targetUsers}
                      onChange={(e) => handleInputChange('targetUsers', e.target.value)}
                      placeholder="VD: Ban giám đốc (SuperAdmin), Nhân viên kinh doanh (Sales), Khách hàng B2B"
                      className="w-full bg-slate-50 dark:bg-studio-950 border border-slate-200 dark:border-slate-800 rounded-xl px-3 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-brand-primary transition-colors"
                    />
                  </div>
                </div>
              )}

              {/* STEP 3: Feature Scope & Integrations */}
              {step === 3 && (
                <div className="space-y-5 animate-fadeIn">
                  <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
                    <h4 className="text-base font-bold">3. Danh sách tính năng cốt lõi & Công nghệ</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Chọn các khối mô-đun chức năng bạn cần tích hợp vào sản phẩm Web App.</p>
                  </div>

                  {/* Multi-Select Features Pills */}
                  <div>
                    <label className="block text-xs font-mono font-semibold mb-2 text-slate-700 dark:text-slate-300">
                      Chọn các tính năng cốt lõi cần lập trình (Multi-select):
                    </label>
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

                  <div>
                    <label className="block text-xs font-mono font-semibold mb-1 text-slate-700 dark:text-slate-300">
                      Công nghệ ưu tiên sử dụng (Nếu có yêu cầu riêng)
                    </label>
                    <input
                      type="text"
                      value={formData.preferredTechnologies}
                      onChange={(e) => handleInputChange('preferredTechnologies', e.target.value)}
                      placeholder="React 18, Next.js, Node.js, PostgreSQL, Redis, Docker..."
                      className="w-full bg-slate-50 dark:bg-studio-950 border border-slate-200 dark:border-slate-800 rounded-xl px-3 py-2.5 text-xs text-slate-900 dark:text-white font-mono focus:outline-none focus:border-brand-primary transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold mb-1 text-slate-700 dark:text-slate-300">
                      Link sản phẩm mẫu tham khảo hoặc ứng dụng tương tự (Tùy chọn)
                    </label>
                    <input
                      type="text"
                      value={formData.referenceWebsites}
                      onChange={(e) => handleInputChange('referenceWebsites', e.target.value)}
                      placeholder="https://example-app.com, https://figma.com/file/..."
                      className="w-full bg-slate-50 dark:bg-studio-950 border border-slate-200 dark:border-slate-800 rounded-xl px-3 py-2.5 text-xs text-slate-900 dark:text-white font-mono focus:outline-none focus:border-brand-primary transition-colors"
                    />
                  </div>
                </div>
              )}

              {/* STEP 4: Budget, Timeline & SLA */}
              {step === 4 && (
                <div className="space-y-5 animate-fadeIn">
                  <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
                    <h4 className="text-base font-bold">4. Ngân sách, Kỳ hạn bàn giao & Cam kết bảo mật NDA</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Xác định khung ngân sách đầu tư dự kiến để Quang Anh Studio cân đối giải pháp phù hợp thị trường Việt Nam.</p>
                  </div>

                  {/* Budget Options in VNĐ */}
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

                  {/* Timeline Selection */}
                  <div>
                    <label className="block text-xs font-mono font-semibold mb-2 text-slate-700 dark:text-slate-300">
                      Thời gian triển khai & Bàn giao sản phẩm mong muốn
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

                  {/* SLA Level */}
                  <div>
                    <label className="block text-xs font-mono font-semibold mb-2 text-slate-700 dark:text-slate-300">
                      Cấp độ bảo trì & Đồng hành SLA sau bàn giao
                    </label>
                    <select
                      value={formData.slaTier}
                      onChange={(e) => handleInputChange('slaTier', e.target.value)}
                      className="w-full bg-slate-50 dark:bg-studio-950 border border-slate-200 dark:border-slate-800 rounded-xl px-3 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-brand-primary transition-colors font-semibold"
                    >
                      <option value="6 Tháng Bảo Hành Tiêu Chuẩn">6 Tháng Bảo Hành Tiêu Chuẩn (Miễn phí)</option>
                      <option value="12 Tháng SLA 99.9% Maintenance (Khuyên dùng)">12 Tháng SLA 99.9% Maintenance (Khuyên dùng)</option>
                      <option value="24/7 Dedicated Tech Team (Đội kỹ thuật túc trực riêng)">24/7 Dedicated Tech Team (Đội kỹ thuật túc trực riêng)</option>
                    </select>
                  </div>

                  {/* NDA Option */}
                  <div>
                    <label className="block text-xs font-mono font-semibold mb-2 text-slate-700 dark:text-slate-300">
                      Thỏa thuận bảo mật thông tin (NDA)
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {[
                        'Có (Cần ký thỏa thuận bảo mật NDA trước khi chia sẻ tài liệu)',
                        'Không (Trao đổi trực tiếp bình thường)'
                      ].map((nda) => (
                        <button
                          key={nda}
                          type="button"
                          onClick={() => handleInputChange('needNda', nda)}
                          className={`p-3 rounded-xl border text-xs text-left transition-all font-medium ${
                            formData.needNda === nda
                              ? 'bg-brand-primary/10 border-brand-primary text-brand-primary font-bold'
                              : 'bg-slate-50 dark:bg-studio-950 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300'
                          }`}
                        >
                          {nda}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 5: Review & Submit */}
              {step === 5 && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
                    <h4 className="text-base font-bold">5. Rà soát & Xác nhận gửi hồ sơ yêu cầu</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Kiểm tra lại toàn bộ thông tin trước khi chuyển hồ sơ cho Quang Anh Studio.</p>
                  </div>

                  <div className="p-5 rounded-xl bg-slate-50 dark:bg-studio-950 border border-slate-200 dark:border-slate-800 space-y-4 text-xs">
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 border-b border-slate-200 dark:border-slate-800 pb-3">
                      <div>
                        <span className="text-slate-500 font-mono">Người đại diện:</span>
                        <p className="font-bold text-slate-900 dark:text-white text-sm">{formData.clientName}</p>
                      </div>
                      <div>
                        <span className="text-slate-500 font-mono">Email liên hệ:</span>
                        <p className="font-bold text-slate-900 dark:text-white">{formData.clientEmail}</p>
                      </div>
                      <div>
                        <span className="text-slate-500 font-mono">Số điện thoại / Zalo:</span>
                        <p className="text-slate-800 dark:text-slate-200 font-mono">{formData.clientPhone || 'N/A'}</p>
                      </div>
                      <div>
                        <span className="text-slate-500 font-mono">Công ty ({formData.businessSector}):</span>
                        <p className="text-slate-800 dark:text-slate-200">{formData.clientCompany || 'Chưa cập nhật'} ({formData.companyScale})</p>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <span className="text-slate-500 font-mono">Dự án Web App:</span>
                      <p className="font-bold text-brand-primary text-sm">{formData.projectName} — <span className="text-slate-700 dark:text-slate-300 font-normal">{formData.projectType}</span></p>
                      <p className="text-slate-500 font-mono text-[11px]">Giai đoạn: {formData.projectStage}</p>
                    </div>

                    <div className="space-y-1">
                      <span className="text-slate-500 font-mono">Mô tả bài toán:</span>
                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed italic">{formData.projectDescription}</p>
                    </div>

                    <div className="space-y-1.5 border-t border-slate-200 dark:border-slate-800 pt-3">
                      <span className="text-slate-500 font-mono">Tính năng cốt lõi đã chọn ({formData.selectedFeatures.length} mục):</span>
                      <div className="flex flex-wrap gap-1.5">
                        {formData.selectedFeatures.map((f, idx) => (
                          <span key={idx} className="px-2.5 py-1 rounded bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-[11px] font-mono font-semibold">
                            ✓ {f}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 border-t border-slate-200 dark:border-slate-800 pt-3">
                      <div>
                        <span className="text-slate-500 font-mono">Ngân sách dự kiến:</span>
                        <p className="font-bold text-emerald-600 dark:text-emerald-400 font-mono text-sm">{formData.budget}</p>
                      </div>
                      <div>
                        <span className="text-slate-500 font-mono">Kỳ hạn bàn giao:</span>
                        <p className="font-bold text-slate-900 dark:text-white font-mono">{formData.timeline}</p>
                      </div>
                    </div>

                    <div className="border-t border-slate-200 dark:border-slate-800 pt-2 text-[11px] text-slate-500 font-mono">
                      <span>Gói SLA: {formData.slaTier}</span> • <span>Thỏa thuận NDA: {formData.needNda}</span>
                    </div>

                  </div>

                  <div className="p-3.5 rounded-xl bg-brand-primary/10 border border-brand-primary/20 text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2.5">
                    <ShieldCheck size={18} className="text-brand-primary shrink-0 mt-0.5" />
                    <span>Hồ sơ yêu cầu của bạn sẽ được gửi thẳng về Email của Quang Anh & bảo mật 100%. Thông tin dự án sẽ hiển thị ngay trong danh sách theo dõi của Admin Control Center và Client Dashboard.</span>
                  </div>
                </div>
              )}

              {/* Modal Buttons Footer */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={handleBack}
                    disabled={isSubmitting}
                    className="btn-secondary py-2.5 px-5 text-xs font-semibold"
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
                    className="btn-primary py-2.5 px-6 text-xs font-semibold ml-auto"
                  >
                    <span>Tiếp tục</span>
                    <ArrowRight size={14} />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary py-3 px-7 text-xs font-semibold ml-auto disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        <span>Đang gửi hồ sơ...</span>
                      </>
                    ) : (
                      <>
                        <span>Gửi Hồ Sơ Yêu Cầu Dự Án</span>
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
