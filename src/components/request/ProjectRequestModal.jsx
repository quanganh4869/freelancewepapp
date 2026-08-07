import React, { useState, useEffect } from 'react';
import { useRequests } from '../../context/RequestContext';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import { X, ArrowRight, ArrowLeft, CheckCircle2, Loader2, Send, Mail, Phone, User, Upload, Link as LinkIcon, FileText, Trash2, Building } from 'lucide-react';

export const ProjectRequestModal = ({ isOpen, onClose, initialService = '' }) => {
  const { submitProjectRequest } = useRequests();
  const { currentUser } = useAuth();
  const { isDark } = useTheme();

  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(null);

  // Form State
  const [formData, setFormData] = useState({
    clientName: currentUser?.name || '',
    clientEmail: currentUser?.email || '',
    clientPhone: '',
    clientCompany: '',
    projectName: initialService ? `Dự án ${initialService}` : 'Website theo yêu cầu',
    projectType: initialService || 'Website cá nhân',
    projectDescription: initialService ? `Tôi cần làm gói dịch vụ: ${initialService}` : '',
    budget: 'Từ 1.000.000đ - 2.000.000đ',
    timeline: '1 tuần (5-7 ngày)',
    designLink: '',
    attachedFileName: '',
    attachedFileData: '',
    additionalNotes: ''
  });

  const [errors, setErrors] = useState({});

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

  // Handle File Upload Selection
  const handleFileUpload = (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    if (file.size > 10 * 1024 * 1024) {
      alert('Kích thước file không được vượt quá 10MB.');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setFormData(prev => ({
        ...prev,
        attachedFileName: file.name,
        attachedFileData: reader.result
      }));
    };
    reader.readAsDataURL(file);
  };

  const removeAttachedFile = () => {
    setFormData(prev => ({
      ...prev,
      attachedFileName: '',
      attachedFileData: ''
    }));
  };

  const validateStep = (currentStep) => {
    const newErrors = {};

    if (currentStep === 1) {
      if (!formData.clientName.trim()) newErrors.clientName = 'Vui lòng nhập Họ và Tên.';
      if (!formData.clientPhone.trim() && !formData.clientEmail.trim()) {
        newErrors.clientPhone = 'Nhập SĐT hoặc Email để Quang Anh liên hệ.';
      }
    }

    if (currentStep === 2) {
      if (!formData.projectDescription.trim() || formData.projectDescription.length < 8) {
        newErrors.projectDescription = 'Vui lòng mô tả yêu cầu làm web (ít nhất 8 ký tự).';
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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn overflow-y-auto font-sans">
      <div
        className={`border rounded-2xl max-w-2xl w-full my-6 shadow-2xl relative overflow-hidden transition-colors ${
          isDark ? 'bg-studio-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className={`px-6 py-4 border-b flex items-center justify-between ${
          isDark ? 'bg-studio-950 border-slate-800' : 'bg-slate-50 border-slate-200'
        }`}>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-brand-primary text-white font-bold flex items-center justify-center text-xs shadow-sm">
              QA
            </div>
            <div>
              <h3 className="text-base font-bold">Chi Tiết Đơn Đặt Làm Website</h3>
              <p className="text-xs text-slate-400 font-medium">Quang Anh Freelancer • Trực tiếp tư vấn 1-1</p>
            </div>
          </div>

          <button
            onClick={handleResetAndClose}
            className="w-8 h-8 rounded-lg bg-slate-200 dark:bg-studio-950 border border-slate-300 dark:border-slate-800 flex items-center justify-center text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {/* Conditional Content Rendering */}
        {submitSuccess ? (
          <div className="p-8 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-brand-primary/10 border border-brand-primary/30 text-brand-primary flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 size={36} />
            </div>

            <div className="space-y-2 max-w-md mx-auto">
              <h3 className="text-2xl font-extrabold">Đã Gửi Đơn Hàng Thành Công!</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-medium">
                Yêu cầu làm web của bạn đã được gửi thẳng về Email và Zalo của Quang Anh. Tôi sẽ liên hệ tư vấn báo giá ngay!
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-studio-950 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 space-y-2 font-medium text-left max-w-md mx-auto">
              <div className="flex justify-between border-b border-slate-200 dark:border-slate-800 pb-1.5">
                <span>Khách hàng:</span> <span className="text-slate-900 dark:text-white font-bold">{submitSuccess.clientName}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 dark:border-slate-800 pb-1.5">
                <span>Loại website:</span> <span className="text-brand-primary font-bold">{submitSuccess.projectType}</span>
              </div>
              {formData.attachedFileName ? (
                <div className="flex justify-between border-b border-slate-200 dark:border-slate-800 pb-1.5">
                  <span>File đính kèm:</span> <span className="text-slate-900 dark:text-white font-bold">{formData.attachedFileName}</span>
                </div>
              ) : null}
              <div className="flex justify-between">
                <span>Ngân sách dự kiến:</span> <span className="text-emerald-600 dark:text-emerald-400 font-bold">{submitSuccess.budget}</span>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-center">
              <button
                onClick={handleResetAndClose}
                className="btn-primary py-3 px-8 text-xs font-bold"
              >
                Hoàn Tất và Đóng
              </button>
            </div>
          </div>
        ) : (
          <div className="w-full">
            {/* 3-Step Progress */}
            <div className="bg-slate-50 dark:bg-studio-950/80 px-6 py-2.5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs font-semibold">
              {[
                { s: 1, label: '1. Liên Hệ' },
                { s: 2, label: '2. Chi Tiết Dự Án' },
                { s: 3, label: '3. File Thiết Kế và Gửi' }
              ].map((item) => (
                <div key={item.s} className={`flex items-center gap-1.5 ${step >= item.s ? 'text-brand-primary font-bold' : 'text-slate-400'}`}>
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${
                    step >= item.s ? 'bg-brand-primary text-white font-bold' : 'bg-slate-200 dark:bg-slate-800 text-slate-500'
                  }`}>{item.s}</span>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="p-6 sm:p-7 space-y-5 max-h-[75vh] overflow-y-auto font-sans">

              {/* STEP 1 */}
              {step === 1 ? (
                <div className="space-y-4 animate-fadeIn">
                  <div className="border-b border-slate-200 dark:border-slate-800 pb-2">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
                      1. Thông tin liên hệ
                    </h4>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold mb-1 text-slate-700 dark:text-slate-300">
                        Họ và Tên của bạn <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <User size={15} className="absolute left-3 top-3 text-slate-400" />
                        <input
                          type="text"
                          value={formData.clientName}
                          onChange={(e) => handleInputChange('clientName', e.target.value)}
                          placeholder="VD: Anh Tuấn"
                          className="w-full bg-slate-50 dark:bg-studio-950 border border-slate-200 dark:border-slate-800 rounded-xl pl-9 pr-3 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-brand-primary transition-colors font-medium"
                        />
                      </div>
                      {errors.clientName ? <p className="text-[11px] text-rose-500 mt-1">{errors.clientName}</p> : null}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold mb-1 text-slate-700 dark:text-slate-300">
                        Số điện thoại hoặc Zalo <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <Phone size={15} className="absolute left-3 top-3 text-slate-400" />
                        <input
                          type="text"
                          value={formData.clientPhone}
                          onChange={(e) => handleInputChange('clientPhone', e.target.value)}
                          placeholder="0935 989 872"
                          className="w-full bg-slate-50 dark:bg-studio-950 border border-slate-200 dark:border-slate-800 rounded-xl pl-9 pr-3 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-brand-primary transition-colors font-semibold"
                        />
                      </div>
                      {errors.clientPhone ? <p className="text-[11px] text-rose-500 mt-1">{errors.clientPhone}</p> : null}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold mb-1 text-slate-700 dark:text-slate-300">
                        Email liên hệ <span className="text-slate-400 text-[10px]">(Tùy chọn)</span>
                      </label>
                      <div className="relative">
                        <Mail size={15} className="absolute left-3 top-3 text-slate-400" />
                        <input
                          type="email"
                          value={formData.clientEmail}
                          onChange={(e) => handleInputChange('clientEmail', e.target.value)}
                          placeholder="email@example.com"
                          className="w-full bg-slate-50 dark:bg-studio-950 border border-slate-200 dark:border-slate-800 rounded-xl pl-9 pr-3 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-brand-primary transition-colors font-medium"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold mb-1 text-slate-700 dark:text-slate-300">
                        Tên Shop hoặc Đơn vị <span className="text-slate-400 text-[10px]">(Tùy chọn)</span>
                      </label>
                      <div className="relative">
                        <Building size={15} className="absolute left-3 top-3 text-slate-400" />
                        <input
                          type="text"
                          value={formData.clientCompany}
                          onChange={(e) => handleInputChange('clientCompany', e.target.value)}
                          placeholder="Mây Shop Handmade"
                          className="w-full bg-slate-50 dark:bg-studio-950 border border-slate-200 dark:border-slate-800 rounded-xl pl-9 pr-3 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-brand-primary transition-colors font-medium"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}

              {/* STEP 2 */}
              {step === 2 ? (
                <div className="space-y-4 animate-fadeIn">
                  <div className="border-b border-slate-200 dark:border-slate-800 pb-2">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
                      2. Yêu cầu làm website
                    </h4>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold mb-1 text-slate-700 dark:text-slate-300">
                        Loại hình website <span className="text-rose-500">*</span>
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => handleInputChange('projectType', e.target.value)}
                        className="w-full bg-slate-50 dark:bg-studio-950 border border-slate-200 dark:border-slate-800 rounded-xl px-3 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-brand-primary font-bold"
                      >
                        <option value="Website cá nhân / Portfolio">Website cá nhân - Portfolio - CV (Từ 1 tr)</option>
                        <option value="Landing Page bán hàng">Landing Page bán hàng - Giới thiệu (Từ 1.5 tr)</option>
                        <option value="Website Doanh nghiệp / Shop">Website Doanh nghiệp nhỏ - Shop (2-5 tr)</option>
                        <option value="Web App / Dashboard nhỏ">Web App - Đặt lịch - Dashboard (Từ 5 tr+)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold mb-1 text-slate-700 dark:text-slate-300">
                        Tên dự án dự kiến
                      </label>
                      <input
                        type="text"
                        value={formData.projectName}
                        onChange={(e) => handleInputChange('projectName', e.target.value)}
                        placeholder="VD: Website Bán Áo Thun Local Brand"
                        className="w-full bg-slate-50 dark:bg-studio-950 border border-slate-200 dark:border-slate-800 rounded-xl px-3 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-brand-primary transition-colors font-semibold"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1 text-slate-700 dark:text-slate-300">
                      Mô tả chi tiết mong muốn và các chức năng cần có <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      rows={4}
                      value={formData.projectDescription}
                      onChange={(e) => handleInputChange('projectDescription', e.target.value)}
                      placeholder="Mô tả kỹ nội dung bạn cần làm (ví dụ: Cần 3 trang: Trang chủ, Danh mục sản phẩm, Trang liên hệ có nút chat Zalo)..."
                      className="w-full bg-slate-50 dark:bg-studio-950 border border-slate-200 dark:border-slate-800 rounded-xl px-3 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-brand-primary transition-colors resize-none font-medium"
                    />
                    {errors.projectDescription ? <p className="text-[11px] text-rose-500 mt-1">{errors.projectDescription}</p> : null}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold mb-1 text-slate-700 dark:text-slate-300">
                        Ngân sách dự kiến
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => handleInputChange('budget', e.target.value)}
                        className="w-full bg-slate-50 dark:bg-studio-950 border border-slate-200 dark:border-slate-800 rounded-xl px-3 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-brand-primary font-bold"
                      >
                        <option value="Từ 1.000.000đ – 2.000.000đ">Khoảng 1 - 2 Triệu VNĐ</option>
                        <option value="Từ 2.000.000đ – 5.000.000đ">Khoảng 2 - 5 Triệu VNĐ</option>
                        <option value="Trên 5.000.000đ+">Trên 5 Triệu VNĐ (Web App)</option>
                        <option value="Cần tư vấn báo giá">Cần tư vấn thêm</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold mb-1 text-slate-700 dark:text-slate-300">
                        Thời gian mong muốn
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => handleInputChange('timeline', e.target.value)}
                        className="w-full bg-slate-50 dark:bg-studio-950 border border-slate-200 dark:border-slate-800 rounded-xl px-3 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-brand-primary font-medium"
                      >
                        <option value="1 tuần (5–7 ngày)">1 tuần (5-7 ngày)</option>
                        <option value="1–2 tuần">1-2 tuần</option>
                        <option value="2–4 tuần">2-4 tuần</option>
                        <option value="Linh hoạt">Linh hoạt</option>
                      </select>
                    </div>
                  </div>
                </div>
              ) : null}

              {/* STEP 3 */}
              {step === 3 ? (
                <div className="space-y-4 animate-fadeIn">
                  <div className="border-b border-slate-200 dark:border-slate-800 pb-2">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
                      3. Đính kèm File thiết kế hoặc Link tham khảo (Nếu có)
                    </h4>
                  </div>

                  {/* Design Link */}
                  <div>
                    <label className="block text-xs font-semibold mb-1 text-slate-700 dark:text-slate-300">
                      Link Figma hoặc Drive hoặc Link web mẫu (Tùy chọn)
                    </label>
                    <div className="relative">
                      <LinkIcon size={15} className="absolute left-3 top-3 text-slate-400" />
                      <input
                        type="text"
                        value={formData.designLink}
                        onChange={(e) => handleInputChange('designLink', e.target.value)}
                        placeholder="Dán link Figma hoặc Google Drive..."
                        className="w-full bg-slate-50 dark:bg-studio-950 border border-slate-200 dark:border-slate-800 rounded-xl pl-9 pr-3 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-brand-primary transition-colors font-medium"
                      />
                    </div>
                  </div>

                  {/* File Upload Dropzone */}
                  <div>
                    <label className="block text-xs font-semibold mb-1 text-slate-700 dark:text-slate-300">
                      Tải file thiết kế hoặc ảnh mẫu (Ảnh, PDF, Zip tối đa 10MB)
                    </label>
                    
                    {formData.attachedFileName ? (
                      <div className="p-3.5 rounded-xl bg-brand-primary/10 border border-brand-primary/30 flex items-center justify-between">
                        <div className="flex items-center gap-2.5 text-xs font-bold text-brand-primary overflow-hidden">
                          <FileText size={18} className="shrink-0" />
                          <span className="truncate">{formData.attachedFileName}</span>
                        </div>
                        <button
                          type="button"
                          onClick={removeAttachedFile}
                          className="p-1.5 rounded-lg text-rose-500 hover:bg-rose-500/10 transition-colors"
                          title="Xóa file"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    ) : (
                      <label className="border-2 border-dashed border-slate-300 dark:border-slate-700 hover:border-brand-primary rounded-2xl p-5 flex flex-col items-center justify-center cursor-pointer transition-colors bg-slate-50 dark:bg-studio-950 group">
                        <Upload size={24} className="text-slate-400 group-hover:text-brand-primary transition-colors mb-2" />
                        <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                          Bấm để chọn file từ máy tính
                        </span>
                        <span className="text-[11px] text-slate-400 mt-0.5 font-medium">
                          Hỗ trợ PNG, JPG, PDF, DOCX, ZIP tối đa 10MB
                        </span>
                        <input
                          type="file"
                          onChange={handleFileUpload}
                          className="hidden"
                        />
                      </label>
                    )}
                  </div>

                  {/* Summary Box */}
                  <div className="p-4 rounded-xl bg-slate-100 dark:bg-studio-950 border border-slate-200 dark:border-slate-800 text-xs space-y-1.5 font-medium">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Khách hàng:</span>
                      <span className="font-bold text-slate-900 dark:text-white">{formData.clientName} ({formData.clientPhone})</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Loại web:</span>
                      <span className="font-bold text-brand-primary">{formData.projectType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Dự toán ngân sách:</span>
                      <span className="font-bold text-emerald-600 dark:text-emerald-400">{formData.budget}</span>
                    </div>
                  </div>

                </div>
              ) : null}

              {/* Wizard Footer Buttons */}
              <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
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

                {step < 3 ? (
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
                    className="btn-primary py-3.5 px-7 text-xs font-bold ml-auto disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        <span>Đang gửi đơn...</span>
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        <span>Gửi Đơn Đặt Làm Website</span>
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
