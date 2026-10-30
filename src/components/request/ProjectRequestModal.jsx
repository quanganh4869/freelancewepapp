import React, { useState, useEffect } from 'react';
import { useRequests } from '../../context/RequestContext';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import { 
  X, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  Send, 
  Mail, 
  Phone, 
  User, 
  AlertCircle, 
  MessageCircle, 
  Copy, 
  Check, 
  FileText, 
  Layers 
} from 'lucide-react';

export const ProjectRequestModal = ({ isOpen, onClose, initialService = '' }) => {
  const { submitProjectRequest } = useRequests();
  const { currentUser } = useAuth();
  const { isDark } = useTheme();

  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null | 'success' | 'failed'
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedSummary, setCopiedSummary] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    clientName: currentUser?.name || '',
    clientContact: '',
    clientCompany: '',
    projectType: initialService || 'Website Cá Nhân & Portfolio',
    projectDescription: initialService ? `Tôi quan tâm đến: ${initialService}` : '',
    budget: 'Từ 1.000.000đ – 2.000.000đ',
    timeline: 'Khoảng 1 – 2 tuần',
    additionalNotes: ''
  });

  const [errors, setErrors] = useState({});

  // Sync initialService when modal opens
  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({
        ...prev,
        projectType: initialService,
        projectDescription: prev.projectDescription || `Tôi quan tâm đến gói: ${initialService}`
      }));
    }
  }, [initialService, isOpen]);

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
      if (!formData.clientName.trim()) {
        newErrors.clientName = 'Vui lòng nhập Họ và Tên của bạn.';
      }
      if (!formData.clientContact.trim() || formData.clientContact.length < 6) {
        newErrors.clientContact = 'Vui lòng nhập SĐT/Zalo hoặc Email để Quang Anh liên hệ.';
      }
    }

    if (currentStep === 2) {
      if (!formData.projectDescription.trim() || formData.projectDescription.length < 6) {
        newErrors.projectDescription = 'Vui lòng mô tả ngắn gọn mong muốn làm web của bạn.';
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

  const getSummaryText = () => {
    return `YÊU CẦU LÀM WEBSITE TỪ QUANG ANH STUDIO:
- Người liên hệ: ${formData.clientName}
- Phương thức liên hệ (SĐT/Zalo/Email): ${formData.clientContact}
- Đơn vị / Cá nhân: ${formData.clientCompany || 'Cá nhân'}
- Loại website: ${formData.projectType}
- Mô tả mong muốn: ${formData.projectDescription}
- Ngân sách tham khảo: ${formData.budget}
- Thời gian mong muốn: ${formData.timeline}
${formData.additionalNotes ? `- Ghi chú thêm: ${formData.additionalNotes}` : ''}`;
  };

  // Submit with REAL API VERIFICATION
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateStep(step)) return;

    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage('');

    const payload = {
      clientName: formData.clientName.trim(),
      clientPhone: formData.clientContact.trim(),
      clientEmail: formData.clientContact.includes('@') ? formData.clientContact.trim() : '',
      clientCompany: formData.clientCompany.trim() || 'Cá nhân',
      projectName: `Website ${formData.projectType}`,
      projectType: formData.projectType,
      projectDescription: formData.projectDescription.trim(),
      budget: formData.budget,
      timeline: formData.timeline,
      additionalNotes: formData.additionalNotes.trim()
    };

    try {
      const res = await fetch('/api/send-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        // API serverless thành công thực tế!
        submitProjectRequest(payload);
        setSubmitStatus('success');
      } else {
        // API lỗi (ví dụ chưa cấu hình RESEND_API_KEY ở môi trường hiện tại)
        // TUYỆT ĐỐI KHÔNG BÁO THÀNH CÔNG GIẢ
        submitProjectRequest(payload); // Lưu vào RequestContext để quản lý
        setSubmitStatus('failed');
        setErrorMessage('Không thể gửi tự động qua máy chủ email vào lúc này. Mọi thông tin bạn điền vẫn được giữ nguyên đầy đủ! Bạn có thể gửi ngay qua Zalo hoặc Email cá nhân bên dưới:');
      }
    } catch (err) {
      console.warn('Network error or API unreachable:', err);
      submitProjectRequest(payload); // Lưu vào RequestContext
      setSubmitStatus('failed');
      setErrorMessage('Chưa thể kết nối tới máy chủ gửi mail tự động. Toàn bộ thông tin bạn nhập đã được giữ nguyên — bạn có thể gửi ngay qua Zalo hoặc Email cá nhân bằng 1 chạm bên dưới:');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopySummary = () => {
    navigator.clipboard.writeText(getSummaryText());
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 2500);
  };

  const handleResetAndClose = () => {
    setStep(1);
    setSubmitStatus(null);
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn font-sans overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-request-title"
    >
      <div
        className="bg-brand-paper dark:bg-studio-900 border border-brand-border rounded-2xl max-w-xl w-full my-6 shadow-2xl relative overflow-hidden transition-colors text-brand-primary dark:text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="px-6 py-4 border-b border-brand-border bg-brand-background dark:bg-studio-950 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#24221E] dark:bg-white text-white dark:text-[#24221E] font-display font-extrabold flex items-center justify-center text-xs shadow-sm">
              QA
            </div>
            <div>
              <h3 id="modal-request-title" className="text-sm font-bold font-display">
                Đăng ký tư vấn làm website
              </h3>
              <p className="text-[11px] text-brand-muted font-medium">
                Quang Anh Studio · Trực tiếp trao đổi 1-1
              </p>
            </div>
          </div>

          <button
            onClick={handleResetAndClose}
            className="w-8 h-8 rounded-full border border-brand-border bg-brand-paper dark:bg-studio-900 flex items-center justify-center text-brand-muted hover:text-brand-primary dark:hover:text-white transition-colors"
            aria-label="Đóng biểu mẫu"
          >
            <X size={16} />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-7">
          
          {/* SUCCESS SCREEN */}
          {submitStatus === 'success' ? (
            <div className="text-center space-y-6 py-4 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 flex items-center justify-center mx-auto">
                <CheckCircle2 size={36} />
              </div>

              <div className="space-y-2">
                <h3 className="font-display text-2xl font-extrabold text-brand-primary dark:text-white">
                  Đã nhận yêu cầu thành công!
                </h3>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-medium">
                  Cảm ơn <strong className="text-brand-primary dark:text-white">{formData.clientName}</strong>. Tôi đã nhận được thông tin dự án của bạn và sẽ nhắn tin phản hồi qua <strong>{formData.clientContact}</strong> trong vòng vài giờ làm việc.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-brand-border bg-brand-background dark:bg-studio-950 text-left text-xs text-brand-muted space-y-1.5 font-medium">
                <div><strong>Loại website:</strong> {formData.projectType}</div>
                <div><strong>Ngân sách:</strong> {formData.budget}</div>
                <div><strong>Thời gian mong muốn:</strong> {formData.timeline}</div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <a
                  href="https://zalo.me/0935989872"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary py-2.5 px-5 text-xs font-semibold"
                >
                  <MessageCircle size={14} />
                  <span>Nhắn Zalo luôn để trao đổi ngay</span>
                </a>
                <button
                  onClick={handleResetAndClose}
                  className="btn-secondary py-2.5 px-5 text-xs font-semibold"
                >
                  Đóng cửa sổ
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Step indicator */}
              <div className="flex items-center justify-between text-xs text-brand-muted border-b border-brand-border pb-3">
                <span className="font-bold text-[#D05021]">Bước {step} / 3</span>
                <span>{step === 1 ? 'Thông tin người gửi' : step === 2 ? 'Chi tiết mong muốn' : 'Tóm tắt & Gửi'}</span>
              </div>

              {/* STEP 1: LIÊN HỆ */}
              {step === 1 && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="space-y-1">
                    <h4 className="font-display font-bold text-base text-brand-primary dark:text-white">
                      Cách thức thuận tiện để tôi liên hệ lại với bạn:
                    </h4>
                    <p className="text-xs text-brand-muted font-medium">
                      Bạn không cần cung cấp các thông tin cá nhân không liên quan.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-brand-primary dark:text-white flex items-center gap-1.5">
                        <User size={13} className="text-[#D05021]" />
                        <span>Họ và tên của bạn: *</span>
                      </label>
                      <input
                        type="text"
                        value={formData.clientName}
                        onChange={(e) => handleInputChange('clientName', e.target.value)}
                        placeholder="Ví dụ: Anh Tuấn, Chị Mai..."
                        className="w-full px-3.5 py-2.5 rounded-lg border border-brand-border bg-brand-background dark:bg-studio-950 text-xs text-brand-primary dark:text-white focus:outline-none focus:border-[#D05021]"
                      />
                      {errors.clientName && (
                        <p className="text-[11px] text-rose-500 font-semibold">{errors.clientName}</p>
                      )}
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-brand-primary dark:text-white flex items-center gap-1.5">
                        <Phone size={13} className="text-[#D05021]" />
                        <span>Số điện thoại / Zalo hoặc Email: *</span>
                      </label>
                      <input
                        type="text"
                        value={formData.clientContact}
                        onChange={(e) => handleInputChange('clientContact', e.target.value)}
                        placeholder="09xx xxx xxx hoặc email@gmail.com"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-brand-border bg-brand-background dark:bg-studio-950 text-xs text-brand-primary dark:text-white focus:outline-none focus:border-[#D05021]"
                      />
                      {errors.clientContact && (
                        <p className="text-[11px] text-rose-500 font-semibold">{errors.clientContact}</p>
                      )}
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-brand-primary dark:text-white">
                        Tên cửa hàng / Công ty (nếu có):
                      </label>
                      <input
                        type="text"
                        value={formData.clientCompany}
                        onChange={(e) => handleInputChange('clientCompany', e.target.value)}
                        placeholder="Ví dụ: Công ty TNHH Ánh Dương, Shop Thời trang..."
                        className="w-full px-3.5 py-2.5 rounded-lg border border-brand-border bg-brand-background dark:bg-studio-950 text-xs text-brand-primary dark:text-white focus:outline-none focus:border-[#D05021]"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end pt-3">
                    <button
                      type="button"
                      onClick={handleNext}
                      className="btn-primary py-2.5 px-5 text-xs font-semibold"
                    >
                      <span>Tiếp tục</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: YÊU CẦU WEBSITE */}
              {step === 2 && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="space-y-1">
                    <h4 className="font-display font-bold text-base text-brand-primary dark:text-white">
                      Mô tả website bạn mong muốn:
                    </h4>
                    <p className="text-xs text-brand-muted font-medium">
                      Viết ngắn gọn theo cách hiểu của bạn, không cần dùng thuật ngữ kỹ thuật.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-brand-primary dark:text-white">
                        Nhóm website bạn cần:
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => handleInputChange('projectType', e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-brand-border bg-brand-background dark:bg-studio-950 text-xs text-brand-primary dark:text-white focus:outline-none focus:border-[#D05021]"
                      >
                        <option value="Website Cá Nhân & Portfolio">Website Cá Nhân & Portfolio (từ 1.000.000đ)</option>
                        <option value="Landing Page Bán Hàng & Giới Thiệu">Landing Page Bán Hàng & Giới Thiệu (từ 1.500.000đ)</option>
                        <option value="Website Doanh Nghiệp & Bán Hàng Nhỏ">Website Doanh Nghiệp & Bán Hàng Nhỏ (từ 2.500.000đ)</option>
                        <option value="Web App & Hệ Thống Đặt Lịch Theo Yêu Cầu">Web App & Đặt Lịch Theo Yêu Cầu (từ 5.000.000đ+)</option>
                        <option value="Cần tư vấn trực tiếp">Chưa rõ, cần tư vấn trực tiếp</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-brand-primary dark:text-white">
                        Mô tả ngắn gọn về nhu cầu của bạn: *
                      </label>
                      <textarea
                        rows={3}
                        value={formData.projectDescription}
                        onChange={(e) => handleInputChange('projectDescription', e.target.value)}
                        placeholder="Ví dụ: Tôi muốn làm website giới thiệu dịch vụ và sản phẩm, có danh mục hình ảnh và nút bấm chat Zalo..."
                        className="w-full px-3.5 py-2.5 rounded-lg border border-brand-border bg-brand-background dark:bg-studio-950 text-xs text-brand-primary dark:text-white focus:outline-none focus:border-[#D05021]"
                      />
                      {errors.projectDescription && (
                        <p className="text-[11px] text-rose-500 font-semibold">{errors.projectDescription}</p>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-brand-primary dark:text-white">
                          Ngân sách tham khảo:
                        </label>
                        <select
                          value={formData.budget}
                          onChange={(e) => handleInputChange('budget', e.target.value)}
                          className="w-full px-3 py-2 rounded-lg border border-brand-border bg-brand-background dark:bg-studio-950 text-xs text-brand-primary dark:text-white focus:outline-none"
                        >
                          <option value="Từ 1.000.000đ – 2.000.000đ">Từ 1.000.000đ – 2.000.000đ</option>
                          <option value="Từ 2.500.000đ – 4.500.000đ">Từ 2.500.000đ – 4.500.000đ</option>
                          <option value="Từ 5.000.000đ trở lên">Từ 5.000.000đ trở lên</option>
                          <option value="Chưa biết ngân sách / Cần tư vấn">Chưa biết / Cần tư vấn</option>
                        </select>
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-bold text-brand-primary dark:text-white">
                          Thời gian mong muốn:
                        </label>
                        <select
                          value={formData.timeline}
                          onChange={(e) => handleInputChange('timeline', e.target.value)}
                          className="w-full px-3 py-2 rounded-lg border border-brand-border bg-brand-background dark:bg-studio-950 text-xs text-brand-primary dark:text-white focus:outline-none"
                        >
                          <option value="Gấp trong 5 – 7 ngày">Gấp trong 5 – 7 ngày</option>
                          <option value="Khoảng 1 – 2 tuần">Khoảng 1 – 2 tuần</option>
                          <option value="Thong thả / Không vội">Thong thả / Không vội</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="btn-secondary py-2 px-4 text-xs font-semibold"
                    >
                      <ArrowLeft size={14} />
                      <span>Quay lại</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      className="btn-primary py-2 px-5 text-xs font-semibold"
                    >
                      <span>Tiếp tục: Xem tóm tắt</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: TÓM TẮT & GỬI */}
              {step === 3 && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="space-y-1">
                    <h4 className="font-display font-bold text-base text-brand-primary dark:text-white">
                      Kiểm tra tóm tắt trước khi gửi:
                    </h4>
                    <p className="text-xs text-brand-muted font-medium">
                      Bạn có thể quay lại sửa bất kỳ lúc nào mà không mất thông tin.
                    </p>
                  </div>

                  {/* Summary Box */}
                  <div className="p-4 rounded-xl border border-brand-border bg-brand-background dark:bg-studio-950 text-xs space-y-2">
                    <div className="flex justify-between border-b border-brand-border pb-1.5">
                      <span className="text-brand-muted font-semibold">Người gửi:</span>
                      <span className="font-bold text-brand-primary dark:text-white">{formData.clientName}</span>
                    </div>
                    <div className="flex justify-between border-b border-brand-border pb-1.5">
                      <span className="text-brand-muted font-semibold">Liên hệ:</span>
                      <span className="font-bold text-brand-primary dark:text-white">{formData.clientContact}</span>
                    </div>
                    <div className="flex justify-between border-b border-brand-border pb-1.5">
                      <span className="text-brand-muted font-semibold">Gói website:</span>
                      <span className="font-bold text-[#D05021]">{formData.projectType}</span>
                    </div>
                    <div className="flex justify-between border-b border-brand-border pb-1.5">
                      <span className="text-brand-muted font-semibold">Ngân sách:</span>
                      <span className="font-medium text-brand-primary dark:text-white">{formData.budget}</span>
                    </div>
                    <div>
                      <span className="text-brand-muted font-semibold block mb-0.5">Mô tả mong muốn:</span>
                      <p className="text-brand-primary dark:text-white font-medium italic">{formData.projectDescription}</p>
                    </div>
                  </div>

                  {/* Error & Fallback Buttons */}
                  {submitStatus === 'failed' && (
                    <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 space-y-3 text-xs">
                      <div className="flex items-start gap-2">
                        <AlertCircle size={16} className="text-amber-500 shrink-0 mt-0.5" />
                        <span className="font-semibold text-brand-primary dark:text-white">
                          {errorMessage}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-2 pt-1">
                        <a
                          href={`mailto:quanganhqb04@gmail.com?subject=${encodeURIComponent(`[ĐƠN ĐẶT LÀM WEB] ${formData.clientName} - ${formData.projectType}`)}&body=${encodeURIComponent(getSummaryText())}`}
                          className="btn-primary py-2 px-3 text-xs font-semibold"
                        >
                          <Mail size={13} />
                          <span>1-Click mở Email gửi luôn</span>
                        </a>

                        <button
                          type="button"
                          onClick={handleCopySummary}
                          className="btn-secondary py-2 px-3 text-xs font-semibold"
                        >
                          {copiedSummary ? <Check size={13} className="text-emerald-500" /> : <Copy size={13} />}
                          <span>{copiedSummary ? 'Đã sao chép!' : 'Sao chép để gửi Zalo'}</span>
                        </button>

                        <a
                          href="https://zalo.me/0935989872"
                          target="_blank"
                          rel="noreferrer"
                          className="btn-secondary py-2 px-3 text-xs font-semibold"
                        >
                          <MessageCircle size={13} />
                          <span>Mở Zalo 0935 989 872</span>
                        </a>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-3 border-t border-brand-border">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="btn-secondary py-2 px-4 text-xs font-semibold"
                      disabled={isSubmitting}
                    >
                      <ArrowLeft size={14} />
                      <span>Sửa lại</span>
                    </button>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary py-2.5 px-6 text-xs font-semibold shadow-md disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                          <span>Đang gửi...</span>
                        </span>
                      ) : (
                        <span className="flex items-center gap-1.5">
                          <Send size={14} />
                          <span>Xác nhận & Gửi yêu cầu</span>
                        </span>
                      )}
                    </button>
                  </div>
                </div>
              )}

            </form>
          )}

        </div>

      </div>
    </div>
  );
};
