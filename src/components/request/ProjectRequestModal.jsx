import React, { useState, useEffect } from 'react';
import { useRequests } from '../../context/RequestContext';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import { X, ArrowRight, ArrowLeft, CheckCircle2, Loader2, Send, Mail, Phone, User } from 'lucide-react';

export const ProjectRequestModal = ({ isOpen, onClose, initialService = '' }) => {
  const { submitProjectRequest } = useRequests();
  const { currentUser } = useAuth();
  const { isDark } = useTheme();

  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(null);

  // Close modal on Esc key press
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
    clientName: currentUser?.name || '',
    clientEmail: currentUser?.email || '',
    clientPhone: '',
    clientCompany: '',
    projectName: initialService ? `Dự án ${initialService}` : 'Làm website theo yêu cầu',
    projectType: initialService || 'Website cá nhân / Portfolio',
    projectDescription: initialService ? `Tôi cần tư vấn & trao đổi chi tiết cho gói: ${initialService}` : '',
    budget: 'Từ 1.000.000đ – 2.000.000đ',
    timeline: '1 tuần (5–7 ngày)',
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

  const validateForm = () => {
    const newErrors = {};
    if (!formData.clientName.trim()) newErrors.clientName = 'Vui lòng nhập Họ & Tên của bạn.';
    if (!formData.clientEmail.trim() && !formData.clientPhone.trim()) {
      newErrors.clientEmail = 'Vui lòng nhập Email hoặc SĐT/Zalo để Quang Anh liên hệ.';
    }
    if (!formData.projectDescription.trim()) {
      newErrors.projectDescription = 'Vui lòng mô tả sơ bộ yêu cầu làm website.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn overflow-y-auto font-sans">
      <div
        className={`border rounded-2xl max-w-xl w-full my-6 shadow-2xl relative overflow-hidden transition-colors ${
          isDark ? 'bg-studio-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className={`px-6 py-4 border-b flex items-center justify-between ${
          isDark ? 'bg-studio-950 border-slate-800' : 'bg-slate-50 border-slate-200'
        }`}>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-brand-primary text-white font-mono font-bold flex items-center justify-center text-xs shadow-sm">
              QA
            </div>
            <div>
              <h3 className="text-base font-bold font-display">Gửi Yêu Cầu Đặt Làm Website</h3>
              <p className="text-xs text-slate-500 font-mono">Quang Anh Freelancer • Trực tiếp phản hồi trong 24h</p>
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
          <div className="p-8 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-brand-primary/10 border border-brand-primary/30 text-brand-primary flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 size={36} />
            </div>

            <div className="space-y-2 max-w-md mx-auto">
              <h3 className="text-2xl font-extrabold font-display">Đã Gửi Yêu Cầu Thành Công!</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                Yêu cầu của bạn đã được gửi trực tiếp đến Email & Zalo của Quang Anh (<span className="font-mono font-bold text-brand-primary">quanganhqb04@gmail.com</span>). Tôi sẽ xem và nhắn lại bạn ngay!
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-studio-950 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 space-y-2 font-mono text-left max-w-md mx-auto">
              <div className="flex justify-between border-b border-slate-200 dark:border-slate-800 pb-1.5">
                <span>Họ tên:</span> <span className="text-slate-900 dark:text-white font-bold">{submitSuccess.clientName}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 dark:border-slate-800 pb-1.5">
                <span>Loại website:</span> <span className="text-brand-primary font-bold">{submitSuccess.projectType}</span>
              </div>
              <div className="flex justify-between">
                <span>Ngân sách:</span> <span className="text-emerald-600 dark:text-emerald-400 font-bold">{submitSuccess.budget}</span>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-center">
              <button
                onClick={handleResetAndClose}
                className="btn-primary py-3 px-8 text-xs font-bold font-display"
              >
                Hoàn Tất & Đóng
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-7 space-y-5 max-h-[78vh] overflow-y-auto">
            
            {/* Step 1: Personal Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono font-semibold mb-1 text-slate-700 dark:text-slate-300">
                  Họ & Tên của bạn <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <User size={15} className="absolute left-3 top-3 text-slate-400" />
                  <input
                    type="text"
                    value={formData.clientName}
                    onChange={(e) => handleInputChange('clientName', e.target.value)}
                    placeholder="VD: Anh Tuấn"
                    className="w-full bg-slate-50 dark:bg-studio-950 border border-slate-200 dark:border-slate-800 rounded-xl pl-9 pr-3 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-brand-primary transition-colors"
                  />
                </div>
                {errors.clientName && <p className="text-[11px] text-rose-500 mt-1">{errors.clientName}</p>}
              </div>

              <div>
                <label className="block text-xs font-mono font-semibold mb-1 text-slate-700 dark:text-slate-300">
                  Số điện thoại / Zalo <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <Phone size={15} className="absolute left-3 top-3 text-slate-400" />
                  <input
                    type="text"
                    value={formData.clientPhone}
                    onChange={(e) => handleInputChange('clientPhone', e.target.value)}
                    placeholder="0908 123 456"
                    className="w-full bg-slate-50 dark:bg-studio-950 border border-slate-200 dark:border-slate-800 rounded-xl pl-9 pr-3 py-2.5 text-xs text-slate-900 dark:text-white font-mono focus:outline-none focus:border-brand-primary transition-colors"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono font-semibold mb-1 text-slate-700 dark:text-slate-300">
                Email liên hệ <span className="text-slate-400 text-[10px]">(Nếu có)</span>
              </label>
              <div className="relative">
                <Mail size={15} className="absolute left-3 top-3 text-slate-400" />
                <input
                  type="email"
                  value={formData.clientEmail}
                  onChange={(e) => handleInputChange('clientEmail', e.target.value)}
                  placeholder="email@example.com"
                  className="w-full bg-slate-50 dark:bg-studio-950 border border-slate-200 dark:border-slate-800 rounded-xl pl-9 pr-3 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-brand-primary transition-colors font-mono"
                />
              </div>
              {errors.clientEmail && <p className="text-[11px] text-rose-500 mt-1">{errors.clientEmail}</p>}
            </div>

            {/* Select Website Type */}
            <div>
              <label className="block text-xs font-mono font-semibold mb-1 text-slate-700 dark:text-slate-300">
                Loại website bạn cần làm
              </label>
              <select
                value={formData.projectType}
                onChange={(e) => handleInputChange('projectType', e.target.value)}
                className="w-full bg-slate-50 dark:bg-studio-950 border border-slate-200 dark:border-slate-800 rounded-xl px-3 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-brand-primary font-bold font-display"
              >
                <option value="Website cá nhân / Portfolio">Website cá nhân / Profile / Portfolio (Từ 1 triệu)</option>
                <option value="Landing Page bán hàng">Landing Page bán hàng / Khóa học (Từ 1.5 triệu)</option>
                <option value="Website Doanh nghiệp / Shop">Website Doanh nghiệp nhỏ / Shop bán hàng (2–5 triệu)</option>
                <option value="Web App / Dashboard nhỏ">Web App nhỏ / Đặt lịch / Dashboard (Từ 5 triệu+)</option>
                <option value="Khác">Khác / Chưa xác định</option>
              </select>
            </div>

            {/* Project Description */}
            <div>
              <label className="block text-xs font-mono font-semibold mb-1 text-slate-700 dark:text-slate-300">
                Mô tả sơ bộ mong muốn / bài toán của bạn <span className="text-rose-500">*</span>
              </label>
              <textarea
                rows={3}
                value={formData.projectDescription}
                onChange={(e) => handleInputChange('projectDescription', e.target.value)}
                placeholder="VD: Mình cần làm 1 trang landing page bán đồ handmade có nút chat Zalo và form cho khách để lại SĐT..."
                className="w-full bg-slate-50 dark:bg-studio-950 border border-slate-200 dark:border-slate-800 rounded-xl px-3 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-brand-primary transition-colors resize-none"
              />
              {errors.projectDescription && <p className="text-[11px] text-rose-500 mt-1">{errors.projectDescription}</p>}
            </div>

            {/* Budget & Timeline Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono font-semibold mb-1 text-slate-700 dark:text-slate-300">
                  Ngân sách dự kiến
                </label>
                <select
                  value={formData.budget}
                  onChange={(e) => handleInputChange('budget', e.target.value)}
                  className="w-full bg-slate-50 dark:bg-studio-950 border border-slate-200 dark:border-slate-800 rounded-xl px-3 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-brand-primary font-mono font-bold"
                >
                  <option value="Từ 1.000.000đ – 2.000.000đ">Khoảng 1 – 2 Triệu VNĐ</option>
                  <option value="Từ 2.000.000đ – 5.000.000đ">Khoảng 2 – 5 Triệu VNĐ</option>
                  <option value="Trên 5.000.000đ+">Trên 5 Triệu VNĐ (Web App)</option>
                  <option value="Cần tư vấn báo giá">Cần tư vấn thêm</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono font-semibold mb-1 text-slate-700 dark:text-slate-300">
                  Thời gian mong muốn
                </label>
                <select
                  value={formData.timeline}
                  onChange={(e) => handleInputChange('timeline', e.target.value)}
                  className="w-full bg-slate-50 dark:bg-studio-950 border border-slate-200 dark:border-slate-800 rounded-xl px-3 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-brand-primary font-mono"
                >
                  <option value="1 tuần (5–7 ngày)">1 tuần (5–7 ngày)</option>
                  <option value="1–2 tuần">1–2 tuần</option>
                  <option value="2–4 tuần">2–4 tuần</option>
                  <option value="Linh hoạt">Linh hoạt</option>
                </select>
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-end font-display">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full py-3.5 px-6 text-xs font-bold disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    <span>Đang gửi yêu cầu...</span>
                  </>
                ) : (
                  <>
                    <Send size={15} />
                    <span>Gửi Yêu Cầu Cho Quang Anh</span>
                  </>
                )}
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
