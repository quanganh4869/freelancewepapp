import React, { useState } from 'react';
import { useRequests } from '../../context/RequestContext';
import { 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  Clock, 
  ShieldCheck, 
  Send, 
  Mail, 
  Phone, 
  User, 
  AlertCircle, 
  MessageCircle, 
  Copy, 
  Check, 
  FileText 
} from 'lucide-react';

export const InteractiveEstimator = ({ onOpenRequestModal }) => {
  const { submitProjectRequest } = useRequests();

  // Step state (1: Mục đích, 2: Chức năng, 3: Ngân sách & Tiến độ, 4: Liên hệ & Tóm tắt)
  const [step, setStep] = useState(1);

  // Selections
  const [goal, setGoal] = useState('portfolio'); // 'portfolio', 'landing', 'store', 'webapp'
  const [features, setFeatures] = useState(['responsive', 'speed', 'zalo']);
  const [budget, setBudget] = useState('standard'); // 'budget_1', 'budget_2', 'budget_custom', 'consult'
  const [timeline, setTimeline] = useState('standard'); // 'fast', 'standard', 'flexible'
  
  // Contact details
  const [clientName, setClientName] = useState('');
  const [clientContact, setClientContact] = useState(''); // SĐT/Zalo hoặc Email
  const [clientNote, setClientNote] = useState('');
  
  // Submission & API state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null | 'success' | 'failed'
  const [errorMessage, setErrorMessage] = useState('');
  const [validationError, setValidationError] = useState('');
  const [copiedSummary, setCopiedSummary] = useState(false);

  // Goal options
  const goalOptions = [
    {
      id: 'portfolio',
      title: 'Xây dựng uy tín cá nhân / Hồ sơ năng lực',
      desc: 'Giới thiệu bản thân, chuyên môn, dự án đã làm hoặc CV online ấn tượng.',
      serviceName: 'Website Cá Nhân & Portfolio',
      basePrice: 'Từ 1.000.000đ',
      typicalDays: '5 – 7 ngày'
    },
    {
      id: 'landing',
      title: 'Quảng bá 1 sản phẩm / Khóa học / Sự kiện',
      desc: 'Trang đích tập trung cao độ để khách hiểu rõ giá trị và bấm mua/đăng ký.',
      serviceName: 'Landing Page Bán Hàng & Giới Thiệu',
      basePrice: 'Từ 1.500.000đ',
      typicalDays: '5 – 7 ngày'
    },
    {
      id: 'store',
      title: 'Giới thiệu công ty / Cửa hàng bán đồ',
      desc: 'Nhiều trang: danh mục sản phẩm, dịch vụ, bảng giá, bài viết tin tức.',
      serviceName: 'Website Doanh Nghiệp & Bán Hàng Nhỏ',
      basePrice: 'Từ 2.500.000đ – 4.500.000đ',
      typicalDays: '1 – 2 tuần'
    },
    {
      id: 'webapp',
      title: 'Đặt lịch hẹn / Ứng dụng web theo yêu cầu',
      desc: 'Hệ thống tự động hóa lịch, quản lý đơn, tài khoản có đăng nhập.',
      serviceName: 'Web App & Hệ Thống Đặt Lịch Theo Yêu Cầu',
      basePrice: 'Từ 5.000.000đ+',
      typicalDays: '2 – 4 tuần'
    }
  ];

  // Feature options based on chosen goal
  const featureOptions = [
    { id: 'responsive', label: 'Tối ưu hoàn hảo trên điện thoại & máy tính', desc: 'Giao diện tự căn chỉnh đẹp mắt trên mọi kích cỡ màn hình', default: true },
    { id: 'speed', label: 'Tối ưu tốc độ tải trang cực nhanh (< 1s)', desc: 'Khách bấm vào là xem được ngay, không bị chờ đợi', default: true },
    { id: 'zalo', label: 'Nút gọi điện & chat Zalo 1-click', desc: 'Khách bấm là mở Zalo hoặc gọi thẳng cho bạn', default: true },
    { id: 'cms', label: 'Tự thay đổi bài viết & hình ảnh dễ dàng', desc: 'Có trang quản trị đơn giản, không cần biết lập trình' },
    { id: 'cart', label: 'Danh mục sản phẩm & giỏ hàng chốt đơn', desc: 'Khách chọn nhiều món rồi bấm gửi đơn hàng' },
    { id: 'booking', label: 'Khách tự chọn ngày giờ đặt lịch hẹn', desc: 'Tránh trùng giờ, nhận thông báo lịch mới tức thì' },
    { id: 'seo', label: 'Hỗ trợ hiển thị tìm kiếm Google (SEO cơ bản)', desc: 'Cài đặt thẻ tiêu đề, mô tả và từ khóa tìm kiếm' }
  ];

  // Budget options
  const budgetOptions = [
    { id: 'budget_1', label: 'Từ 1.000.000đ – 2.000.000đ', desc: 'Thích hợp cho website cá nhân, CV online hoặc landing page ngắn' },
    { id: 'budget_2', label: 'Từ 2.500.000đ – 4.500.000đ', desc: 'Thích hợp cho website doanh nghiệp đầy đủ trang hoặc shop bán hàng' },
    { id: 'budget_custom', label: 'Từ 5.000.000đ trở lên', desc: 'Dành cho web app đặt lịch hoặc hệ thống quản lý chuyên sâu' },
    { id: 'consult', label: 'Chưa biết ngân sách / Cần tư vấn', desc: 'Quang Anh sẽ lắng nghe chi tiết rồi tư vấn mức chi phí tiết kiệm nhất' }
  ];

  // Timeline options
  const timelineOptions = [
    { id: 'fast', label: 'Cần gấp trong 5 – 7 ngày', desc: 'Ưu tiên triển khai nhanh gọn' },
    { id: 'standard', label: 'Khoảng 1 – 2 tuần', desc: 'Thời gian tiêu chuẩn để hoàn thiện chỉn chu' },
    { id: 'flexible', label: 'Thong thả / Không vội', desc: 'Tập trung tối đa vào độ chi tiết' }
  ];

  const currentGoalObj = goalOptions.find(g => g.id === goal) || goalOptions[0];
  const currentBudgetObj = budgetOptions.find(b => b.id === budget) || budgetOptions[0];
  const currentTimelineObj = timelineOptions.find(t => t.id === timeline) || timelineOptions[1];

  const toggleFeature = (fId) => {
    // Không cho bỏ chọn các tính năng mặc định bắt buộc
    if (['responsive', 'speed', 'zalo'].includes(fId)) return;
    setFeatures(prev => prev.includes(fId) ? prev.filter(x => x !== fId) : [...prev, fId]);
  };

  // Compile summary text
  const getSelectedFeatureNames = () => {
    return features.map(fId => {
      const match = featureOptions.find(item => item.id === fId);
      return match ? match.label : fId;
    });
  };

  const getSummaryText = () => {
    return `YÊU CẦU LÀM WEBSITE TỪ QUANG ANH STUDIO:
- Người liên hệ: ${clientName || 'Khách hàng'}
- Phương thức liên hệ (SĐT/Zalo/Email): ${clientContact}
- Loại website: ${currentGoalObj.serviceName}
- Mục đích: ${currentGoalObj.title}
- Ngân sách tham khảo: ${currentBudgetObj.label}
- Thời gian mong muốn: ${currentTimelineObj.label}
- Tiện ích cần có:
${getSelectedFeatureNames().map(f => `  • ${f}`).join('\n')}
${clientNote ? `- Ghi chú thêm: ${clientNote}` : ''}`;
  };

  // Handle Submit with REAL API CHECK
  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    setValidationError('');

    if (!clientName.trim()) {
      setValidationError('Vui lòng nhập Họ và Tên của bạn.');
      return;
    }
    if (!clientContact.trim() || clientContact.length < 6) {
      setValidationError('Vui lòng nhập Số điện thoại/Zalo hoặc Email để Quang Anh liên hệ.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage('');

    const payload = {
      clientName: clientName.trim(),
      clientPhone: clientContact.trim(),
      clientEmail: clientContact.includes('@') ? clientContact.trim() : '',
      clientCompany: 'Khách hàng liên hệ qua website',
      projectName: `Website ${currentGoalObj.serviceName}`,
      projectType: currentGoalObj.serviceName,
      projectDescription: `Mục đích: ${currentGoalObj.title}. Tính năng mong muốn: ${getSelectedFeatureNames().join(', ')}.`,
      budget: currentBudgetObj.label,
      timeline: currentTimelineObj.label,
      additionalNotes: clientNote.trim()
    };

    try {
      const res = await fetch('/api/send-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        // API serverless gửi thành công thực sự!
        submitProjectRequest(payload);
        setSubmitStatus('success');
      } else {
        // API trả về lỗi (ví dụ không cấu hình key trên server hoặc Vercel serverless offline)
        // TUYỆT ĐỐI KHÔNG BÁO THÀNH CÔNG GIẢ
        console.warn('API returned non-200 status:', res.status);
        submitProjectRequest(payload); // Vẫn lưu local để xem trong dashboard
        setSubmitStatus('failed');
        setErrorMessage('Không thể gửi tự động qua máy chủ email lúc này (có thể do kết nối mạng hoặc máy chủ). Bạn có thể bấm gửi ngay bằng 1 chạm qua Email cá nhân hoặc Zalo bên dưới!');
      }
    } catch (err) {
      console.warn('Network error or API unreachable:', err);
      submitProjectRequest(payload); // Vẫn lưu local
      setSubmitStatus('failed');
      setErrorMessage('Chưa thể kết nối tới máy chủ gửi mail tự động. Đừng lo lắng, toàn bộ lựa chọn của bạn đã được lưu lại — bạn có thể gửi ngay qua Zalo hoặc Email bên dưới!');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopySummary = () => {
    navigator.clipboard.writeText(getSummaryText());
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 2500);
  };

  const handleReset = () => {
    setStep(1);
    setSubmitStatus(null);
    setClientName('');
    setClientContact('');
    setClientNote('');
  };

  return (
    <section id="tim-dich-vu" className="py-16 md:py-24 border-b border-brand-border font-sans bg-brand-paper dark:bg-studio-950 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-left space-y-3 reveal max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D05021]/10 text-[#D05021] text-xs font-bold">
            <Sparkles size={13} />
            <span>Hướng dẫn chọn dịch vụ cho người mới</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-primary dark:text-white">
            Tìm dịch vụ phù hợp & Ước tính ngân sách
          </h2>
          <p className="text-brand-muted text-sm sm:text-base leading-relaxed font-medium">
            Chỉ với 4 bước đơn giản, không cần hiểu thuật ngữ lập trình. Bạn sẽ biết ngay website mình cần thuộc nhóm nào và khoảng chi phí tham khảo.
          </p>
        </div>

        {/* Wizard Container */}
        <div className="rounded-2xl border border-brand-border bg-brand-background dark:bg-studio-900 shadow-sm overflow-hidden reveal">
          
          {/* Progress Bar & Steps Tabs */}
          <div className="border-b border-brand-border bg-brand-paper dark:bg-studio-950 px-4 sm:px-8 py-4">
            <div className="grid grid-cols-4 gap-2 text-center">
              {[
                { s: 1, label: '1. Mục đích web' },
                { s: 2, label: '2. Tiện ích cần có' },
                { s: 3, label: '3. Ngân sách & Tiến độ' },
                { s: 4, label: '4. Tóm tắt & Gửi' }
              ].map((item) => (
                <button
                  key={item.s}
                  onClick={() => {
                    if (submitStatus !== 'success') setStep(item.s);
                  }}
                  className={`py-2 px-1 rounded-lg text-xs font-bold transition-all ${
                    step === item.s
                      ? 'bg-[#24221E] text-white dark:bg-white dark:text-[#24221E] shadow-sm'
                      : step > item.s
                      ? 'text-[#D05021] hover:bg-brand-background dark:hover:bg-studio-800'
                      : 'text-brand-muted opacity-60'
                  }`}
                >
                  <span className="hidden sm:inline">{item.label}</span>
                  <span className="sm:hidden">B{item.s}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Main Wizard Step Content */}
          <div className="p-6 sm:p-8 lg:p-10">
            
            {/* SUCCESS SCREEN */}
            {submitStatus === 'success' ? (
              <div className="max-w-xl mx-auto text-center space-y-6 py-6 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 flex items-center justify-center mx-auto">
                  <CheckCircle2 size={36} />
                </div>
                <div className="space-y-2">
                  <h3 className="font-display text-2xl font-extrabold text-brand-primary dark:text-white">
                    Đã gửi yêu cầu thành công!
                  </h3>
                  <p className="text-sm text-brand-muted leading-relaxed font-medium">
                    Cảm ơn <strong className="text-brand-primary dark:text-white">{clientName}</strong>. Thông tin đã được chuyển thẳng tới hòm thư cá nhân của Quang Anh.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-brand-border bg-brand-paper dark:bg-studio-950 text-left text-xs text-brand-muted space-y-2 font-medium">
                  <div className="flex items-center justify-between border-b border-brand-border pb-2">
                    <span className="font-bold text-brand-primary dark:text-white">Gói dịch vụ đã chọn:</span>
                    <span className="text-[#D05021] font-bold">{currentGoalObj.serviceName}</span>
                  </div>
                  <div>
                    <span className="font-bold text-brand-primary dark:text-white">Bước tiếp theo:</span> Quang Anh sẽ đọc kỹ và nhắn tin trao đổi lại qua <strong>{clientContact}</strong> trong vòng vài giờ làm việc.
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                  <a
                    href="https://zalo.me/0935989872"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary py-2.5 px-5 text-xs font-semibold"
                  >
                    <MessageCircle size={14} />
                    <span>Nhắn Zalo luôn để trao đổi nhanh</span>
                  </a>
                  <button
                    onClick={handleReset}
                    className="btn-secondary py-2.5 px-5 text-xs font-semibold"
                  >
                    Tạo yêu cầu mới
                  </button>
                </div>
              </div>
            ) : (
              <div>
                
                {/* STEP 1: CHỌN MỤC ĐÍCH */}
                {step === 1 && (
                  <div className="space-y-6 animate-fadeIn">
                    <div className="space-y-1">
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-brand-primary dark:text-white">
                        Bạn muốn website giúp ích gì nhiều nhất cho công việc của mình?
                      </h3>
                      <p className="text-xs sm:text-sm text-brand-muted font-medium">
                        Chọn một mục tiêu gần nhất với nhu cầu hiện tại của bạn:
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {goalOptions.map((opt) => {
                        const isSelected = goal === opt.id;
                        return (
                          <div
                            key={opt.id}
                            onClick={() => setGoal(opt.id)}
                            className={`p-5 rounded-xl border cursor-pointer transition-all duration-200 text-left flex flex-col justify-between space-y-3 ${
                              isSelected
                                ? 'border-[#24221E] dark:border-white bg-brand-paper dark:bg-studio-950 shadow-md ring-2 ring-[#D05021]/30'
                                : 'border-brand-border bg-brand-paper dark:bg-studio-950/50 hover:border-brand-muted'
                            }`}
                          >
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <span className="text-[11px] font-bold text-[#D05021] bg-[#D05021]/10 px-2 py-0.5 rounded">
                                  {opt.serviceName}
                                </span>
                                <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                                  isSelected ? 'border-[#D05021] bg-[#D05021] text-white' : 'border-brand-border'
                                }`}>
                                  {isSelected && <Check size={12} strokeWidth={3} />}
                                </div>
                              </div>
                              <h4 className="font-display font-bold text-base text-brand-primary dark:text-white">
                                {opt.title}
                              </h4>
                              <p className="text-xs text-brand-muted leading-relaxed font-medium">
                                {opt.desc}
                              </p>
                            </div>

                            <div className="pt-2 border-t border-brand-border flex items-center justify-between text-xs text-brand-muted font-medium">
                              <span>Mức khởi điểm: <strong className="text-brand-primary dark:text-white">{opt.basePrice}</strong></span>
                              <span>{opt.typicalDays}</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="flex justify-end pt-4">
                      <button
                        onClick={() => setStep(2)}
                        className="btn-primary py-2.5 px-6 text-xs font-semibold"
                      >
                        <span>Tiếp tục: Chọn tiện ích</span>
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 2: CHỌN TIỆN ÍCH / TÍNH NĂNG */}
                {step === 2 && (
                  <div className="space-y-6 animate-fadeIn">
                    <div className="space-y-1">
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-brand-primary dark:text-white">
                        Website của bạn cần có những tiện ích hoặc chức năng nào?
                      </h3>
                      <p className="text-xs sm:text-sm text-brand-muted font-medium">
                        Bạn có thể chọn nhiều mục. Ba mục đầu tiên đã được tôi tích hợp sẵn và miễn phí:
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {featureOptions.map((feat) => {
                        const isChecked = features.includes(feat.id);
                        const isDefault = feat.default;
                        return (
                          <div
                            key={feat.id}
                            onClick={() => toggleFeature(feat.id)}
                            className={`p-4 rounded-xl border cursor-pointer transition-all ${
                              isChecked
                                ? 'border-[#24221E] dark:border-white bg-brand-paper dark:bg-studio-950 shadow-sm'
                                : 'border-brand-border bg-brand-paper/50 hover:border-brand-muted'
                            }`}
                          >
                            <div className="flex items-start gap-3">
                              <div className={`w-5 h-5 rounded border mt-0.5 shrink-0 flex items-center justify-center transition-colors ${
                                isChecked ? 'bg-[#D05021] border-[#D05021] text-white' : 'border-brand-border'
                              }`}>
                                {isChecked && <Check size={12} strokeWidth={3} />}
                              </div>
                              <div className="space-y-1">
                                <div className="flex items-center gap-2">
                                  <span className="font-display font-bold text-xs sm:text-sm text-brand-primary dark:text-white">
                                    {feat.label}
                                  </span>
                                  {isDefault && (
                                    <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/40 px-1.5 py-0.2 rounded border border-emerald-200">
                                      Có sẵn
                                    </span>
                                  )}
                                </div>
                                <p className="text-[11px] text-brand-muted leading-relaxed font-medium">
                                  {feat.desc}
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="flex items-center justify-between pt-4">
                      <button
                        onClick={() => setStep(1)}
                        className="btn-secondary py-2.5 px-4 text-xs font-semibold"
                      >
                        <ArrowLeft size={14} />
                        <span>Quay lại</span>
                      </button>

                      <button
                        onClick={() => setStep(3)}
                        className="btn-primary py-2.5 px-6 text-xs font-semibold"
                      >
                        <span>Tiếp tục: Ngân sách & Thời gian</span>
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 3: NGÂN SÁCH & TIẾN ĐỘ */}
                {step === 3 && (
                  <div className="space-y-6 animate-fadeIn">
                    <div className="space-y-1">
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-brand-primary dark:text-white">
                        Ngân sách tham khảo và thời gian bạn mong muốn
                      </h3>
                      <p className="text-xs sm:text-sm text-brand-muted font-medium">
                        Tất cả mức giá đều được công khai minh bạch để bạn yên tâm cân đối:
                      </p>
                    </div>

                    {/* Budget Selection */}
                    <div className="space-y-3">
                      <label className="text-xs font-bold uppercase tracking-wider text-brand-primary dark:text-white block">
                        Khoảng ngân sách dự kiến:
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {budgetOptions.map((b) => {
                          const isSelected = budget === b.id;
                          return (
                            <div
                              key={b.id}
                              onClick={() => setBudget(b.id)}
                              className={`p-4 rounded-xl border cursor-pointer transition-all ${
                                isSelected
                                  ? 'border-[#24221E] dark:border-white bg-brand-paper dark:bg-studio-950 shadow-sm ring-1 ring-[#D05021]'
                                  : 'border-brand-border bg-brand-paper/50 hover:border-brand-muted'
                              }`}
                            >
                              <div className="flex items-center justify-between mb-1">
                                <span className="font-display font-bold text-xs sm:text-sm text-brand-primary dark:text-white">
                                  {b.label}
                                </span>
                                <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                                  isSelected ? 'border-[#D05021] bg-[#D05021] text-white' : 'border-brand-border'
                                }`}>
                                  {isSelected && <Check size={10} strokeWidth={3} />}
                                </div>
                              </div>
                              <p className="text-[11px] text-brand-muted font-medium leading-relaxed">
                                {b.desc}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Timeline Selection */}
                    <div className="space-y-3 pt-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-brand-primary dark:text-white block">
                        Thời gian bạn cần hoàn thành:
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {timelineOptions.map((t) => {
                          const isSelected = timeline === t.id;
                          return (
                            <div
                              key={t.id}
                              onClick={() => setTimeline(t.id)}
                              className={`p-4 rounded-xl border cursor-pointer transition-all ${
                                isSelected
                                  ? 'border-[#24221E] dark:border-white bg-brand-paper dark:bg-studio-950 shadow-sm ring-1 ring-[#D05021]'
                                  : 'border-brand-border bg-brand-paper/50 hover:border-brand-muted'
                              }`}
                            >
                              <div className="flex items-center justify-between mb-1">
                                <span className="font-display font-bold text-xs text-brand-primary dark:text-white">
                                  {t.label}
                                </span>
                                <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                                  isSelected ? 'border-[#D05021] bg-[#D05021] text-white' : 'border-brand-border'
                                }`}>
                                  {isSelected && <Check size={10} strokeWidth={3} />}
                                </div>
                              </div>
                              <p className="text-[11px] text-brand-muted font-medium">
                                {t.desc}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4">
                      <button
                        onClick={() => setStep(2)}
                        className="btn-secondary py-2.5 px-4 text-xs font-semibold"
                      >
                        <ArrowLeft size={14} />
                        <span>Quay lại</span>
                      </button>

                      <button
                        onClick={() => setStep(4)}
                        className="btn-primary py-2.5 px-6 text-xs font-semibold"
                      >
                        <span>Tiếp tục: Xem tóm tắt & Gửi</span>
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 4: TÓM TẮT & THÔNG TIN LIÊN HỆ */}
                {step === 4 && (
                  <div className="space-y-6 animate-fadeIn">
                    <div className="space-y-1">
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-brand-primary dark:text-white">
                        Tóm tắt phương án & Nhận tư vấn trực tiếp từ Quang Anh
                      </h3>
                      <p className="text-xs sm:text-sm text-brand-muted font-medium">
                        Bạn có thể kiểm tra lại các lựa chọn dưới đây trước khi gửi:
                      </p>
                    </div>

                    {/* Summary Review Card */}
                    <div className="p-5 rounded-xl border border-brand-border bg-brand-paper dark:bg-studio-950 space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-brand-border pb-3">
                        <div>
                          <span className="text-[11px] font-semibold text-brand-muted uppercase">Dịch vụ phù hợp:</span>
                          <h4 className="font-display font-bold text-base text-[#D05021]">
                            {currentGoalObj.serviceName}
                          </h4>
                        </div>
                        <div className="text-left sm:text-right">
                          <span className="text-[11px] font-semibold text-brand-muted uppercase">Ngân sách:</span>
                          <span className="font-bold text-xs sm:text-sm text-brand-primary dark:text-white block">
                            {currentBudgetObj.label}
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                        <div>
                          <span className="text-brand-muted font-semibold block mb-1">Mục đích chính:</span>
                          <span className="text-brand-primary dark:text-white font-medium">{currentGoalObj.title}</span>
                        </div>
                        <div>
                          <span className="text-brand-muted font-semibold block mb-1">Thời gian mong muốn:</span>
                          <span className="text-brand-primary dark:text-white font-medium">{currentTimelineObj.label}</span>
                        </div>
                      </div>

                      <div className="text-xs">
                        <span className="text-brand-muted font-semibold block mb-1.5">Tiện ích đã chọn ({features.length}):</span>
                        <div className="flex flex-wrap gap-1.5">
                          {getSelectedFeatureNames().map((name, idx) => (
                            <span key={idx} className="px-2 py-0.5 rounded bg-brand-background dark:bg-studio-900 border border-brand-border text-[11px] text-brand-primary dark:text-white font-medium">
                              {name}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Contact Inputs */}
                    <div className="space-y-4 pt-1">
                      <h4 className="font-display font-bold text-sm text-brand-primary dark:text-white">
                        Thông tin để tôi liên hệ lại với bạn:
                      </h4>

                      {validationError && (
                        <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-500 text-xs font-semibold flex items-center gap-2">
                          <AlertCircle size={15} className="shrink-0" />
                          <span>{validationError}</span>
                        </div>
                      )}

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold text-brand-primary dark:text-white flex items-center gap-1.5">
                            <User size={13} className="text-[#D05021]" />
                            <span>Họ và tên của bạn: *</span>
                          </label>
                          <input
                            type="text"
                            value={clientName}
                            onChange={(e) => setClientName(e.target.value)}
                            placeholder="Ví dụ: Anh Tuấn, Chị Mai..."
                            className="w-full px-3.5 py-2.5 rounded-lg border border-brand-border bg-brand-paper dark:bg-studio-950 text-xs text-brand-primary dark:text-white focus:outline-none focus:border-[#D05021]"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-xs font-bold text-brand-primary dark:text-white flex items-center gap-1.5">
                            <Phone size={13} className="text-[#D05021]" />
                            <span>Số điện thoại / Zalo hoặc Email: *</span>
                          </label>
                          <input
                            type="text"
                            value={clientContact}
                            onChange={(e) => setClientContact(e.target.value)}
                            placeholder="09xx xxx xxx hoặc email@gmail.com"
                            className="w-full px-3.5 py-2.5 rounded-lg border border-brand-border bg-brand-paper dark:bg-studio-950 text-xs text-brand-primary dark:text-white focus:outline-none focus:border-[#D05021]"
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-brand-primary dark:text-white flex items-center gap-1.5">
                          <FileText size={13} className="text-[#D05021]" />
                          <span>Ghi chú thêm (không bắt buộc):</span>
                        </label>
                        <textarea
                          rows={2}
                          value={clientNote}
                          onChange={(e) => setClientNote(e.target.value)}
                          placeholder="Bạn có thể nói thêm về ngành nghề, sản phẩm hoặc mẫu web bạn thích..."
                          className="w-full px-3.5 py-2.5 rounded-lg border border-brand-border bg-brand-paper dark:bg-studio-950 text-xs text-brand-primary dark:text-white focus:outline-none focus:border-[#D05021]"
                        />
                      </div>
                    </div>

                    {/* Server Error & Fallback Buttons Notice */}
                    {submitStatus === 'failed' && (
                      <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 space-y-3 text-xs text-brand-primary dark:text-white">
                        <div className="flex items-start gap-2">
                          <AlertCircle size={16} className="text-amber-500 shrink-0 mt-0.5" />
                          <div className="space-y-1">
                            <span className="font-bold block">{errorMessage}</span>
                            <span className="text-brand-muted text-[11px] block">
                              Mọi thông tin bạn vừa chọn vẫn được giữ nguyên đầy đủ. Hãy chọn 1 trong 2 cách gửi dự phòng dưới đây:
                            </span>
                          </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-2 pt-1">
                          {/* Fallback 1: mailto */}
                          <a
                            href={`mailto:quanganhqb04@gmail.com?subject=${encodeURIComponent(`[YÊU CẦU LÀM WEB] ${clientName} - ${currentGoalObj.serviceName}`)}&body=${encodeURIComponent(getSummaryText())}`}
                            className="btn-primary py-2 px-3.5 text-xs font-semibold"
                          >
                            <Mail size={13} />
                            <span>1-Click mở Email cá nhân gửi</span>
                          </a>

                          {/* Fallback 2: Copy to Zalo */}
                          <button
                            onClick={handleCopySummary}
                            className="btn-secondary py-2 px-3.5 text-xs font-semibold"
                          >
                            {copiedSummary ? <Check size={13} className="text-emerald-500" /> : <Copy size={13} />}
                            <span>{copiedSummary ? 'Đã sao chép nội dung!' : 'Sao chép nội dung để gửi Zalo'}</span>
                          </button>

                          <a
                            href="https://zalo.me/0935989872"
                            target="_blank"
                            rel="noreferrer"
                            className="btn-secondary py-2 px-3.5 text-xs font-semibold"
                          >
                            <MessageCircle size={13} />
                            <span>Mở Zalo (0935 989 872)</span>
                          </a>
                        </div>
                      </div>
                    )}

                    {/* Navigation Buttons */}
                    <div className="flex items-center justify-between pt-4 border-t border-brand-border">
                      <button
                        onClick={() => setStep(3)}
                        className="btn-secondary py-2.5 px-4 text-xs font-semibold"
                        disabled={isSubmitting}
                      >
                        <ArrowLeft size={14} />
                        <span>Sửa lại lựa chọn</span>
                      </button>

                      <button
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className="btn-primary py-2.5 px-6 text-xs font-semibold shadow-md disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                            <span>Đang kiểm tra & gửi...</span>
                          </span>
                        ) : (
                          <span className="flex items-center gap-2">
                            <Send size={14} />
                            <span>Xác nhận & Gửi yêu cầu</span>
                          </span>
                        )}
                      </button>
                    </div>

                  </div>
                )}

              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
