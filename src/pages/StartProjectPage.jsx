import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { INITIAL_SERVICES, PRICING_TIERS } from '../data/seedData';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const STEP_LABELS = [
  'Mục đích',
  'Tính năng',
  'Ngân sách & Thời gian',
  'Thông tin & Gửi'
];

const SERVICE_OPTIONS = [
  {
    id: 'landing-page',
    title: 'Landing Page & Giới Thiệu Sản Phẩm',
    desc: 'Trang đơn tập trung bán một sản phẩm, dịch vụ hoặc sự kiện cụ thể.',
    defaultBudget: '1.000.000đ – 2.000.000đ'
  },
  {
    id: 'business-web',
    title: 'Website Doanh Nghiệp & Cửa Hàng',
    desc: 'Website nhiều trang hoàn chỉnh (Trang chủ, Dịch vụ, Bảng giá, Liên hệ) tạo uy tín.',
    defaultBudget: '2.500.000đ – 4.500.000đ'
  },
  {
    id: 'personal-portfolio',
    title: 'Website Cá Nhân & Hồ Sơ Năng Lực',
    desc: 'Trang hồ sơ chuyên nghiệp giới thiệu kỹ năng, kinh nghiệm và dự án thực tế.',
    defaultBudget: '1.000.000đ – 2.000.000đ'
  },
  {
    id: 'custom-webapp',
    title: 'Web App & Hệ Thống Quản Lý Riêng',
    desc: 'Ứng dụng nghiệp vụ tùy biến: đặt lịch hẹn, quản lý phòng trọ, theo dõi sổ sách.',
    defaultBudget: 'Từ 5.000.000đ+'
  }
];

const FEATURE_OPTIONS = [
  { id: 'mobile-opt', title: 'Tối ưu hoàn hảo cho điện thoại di động', required: true },
  { id: 'fast-speed', title: 'Tốc độ tải trang nhanh dưới 1 giây', required: true },
  { id: 'zalo-call', title: 'Nút gọi điện & nhắn Zalo 1-chạm' },
  { id: 'contact-form', title: 'Biểu mẫu nhận tin nhắn gửi về Email của bạn' },
  { id: 'admin-cms', title: 'Trang quản trị dễ dùng (tự đổi ảnh, sửa chữ không cần biết code)' },
  { id: 'booking-system', title: 'Chức năng đặt lịch hẹn trực tuyến' },
  { id: 'seo-google', title: 'Cấu hình chuẩn tìm kiếm Google (SEO cơ bản)' },
  { id: 'auth-portal', title: 'Đăng nhập tài khoản & phân quyền quản lý' }
];

const BUDGET_OPTIONS = [
  'Gói tiết kiệm (1.000.000đ – 2.000.000đ)',
  'Gói tiêu chuẩn (2.500.000đ – 4.500.000đ)',
  'Gói tùy chỉnh / Web App (Từ 5.000.000đ+)',
  'Chưa rõ, cần tư vấn giải pháp tối ưu chi phí'
];

const TIMELINE_OPTIONS = [
  'Càng sớm càng tốt (dưới 1 tuần)',
  'Trong khoảng 1 – 2 tuần',
  'Trong khoảng 3 – 4 tuần',
  'Không vội, ưu tiên hoàn thiện kỹ lưỡng'
];

export default function StartProjectPage() {
  const [searchParams] = useSearchParams();
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    serviceId: 'landing-page',
    selectedFeatures: ['mobile-opt', 'fast-speed', 'zalo-call', 'contact-form'],
    budget: BUDGET_OPTIONS[1],
    timeline: TIMELINE_OPTIONS[1],
    clientName: '',
    clientPhone: '',
    clientEmail: '',
    notes: '',
    referenceProject: searchParams.get('reference') || ''
  });

  const [submitting, setSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState(null);

  // Sync with searchParams on mount
  useEffect(() => {
    const serviceParam = searchParams.get('service');
    const tierParam = searchParams.get('tier');
    const refParam = searchParams.get('reference');

    if (refParam) {
      setFormData((prev) => ({
        ...prev,
        referenceProject: refParam,
        notes: prev.notes || `Tôi muốn tìm hiểu và xây dựng dự án tương tự: ${refParam}`
      }));
    }

    if (serviceParam && SERVICE_OPTIONS.some((s) => s.id === serviceParam)) {
      setFormData((prev) => ({ ...prev, serviceId: serviceParam }));
    } else if (tierParam) {
      if (tierParam === 'tier-basic') {
        setFormData((prev) => ({
          ...prev,
          serviceId: 'landing-page',
          budget: BUDGET_OPTIONS[0]
        }));
      } else if (tierParam === 'tier-standard') {
        setFormData((prev) => ({
          ...prev,
          serviceId: 'business-web',
          budget: BUDGET_OPTIONS[1]
        }));
      } else if (tierParam === 'tier-custom') {
        setFormData((prev) => ({
          ...prev,
          serviceId: 'custom-webapp',
          budget: BUDGET_OPTIONS[2]
        }));
      }
    }
  }, [searchParams]);

  const toggleFeature = (featureId) => {
    setFormData((prev) => {
      const exists = prev.selectedFeatures.includes(featureId);
      if (exists) {
        return {
          ...prev,
          selectedFeatures: prev.selectedFeatures.filter((id) => id !== featureId)
        };
      } else {
        return {
          ...prev,
          selectedFeatures: [...prev.selectedFeatures, featureId]
        };
      }
    });
  };

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.clientName || !formData.clientPhone) {
      alert('Vui lòng nhập Họ tên và Số điện thoại hoặc Zalo để tôi liên hệ.');
      return;
    }

    setSubmitting(true);
    const selectedServiceObj = SERVICE_OPTIONS.find((s) => s.id === formData.serviceId);
    const featureLabels = formData.selectedFeatures
      .map((id) => FEATURE_OPTIONS.find((f) => f.id === id)?.title)
      .filter(Boolean);

    const payload = {
      clientName: formData.clientName,
      clientPhone: formData.clientPhone,
      clientEmail: formData.clientEmail,
      referenceProject: formData.referenceProject || undefined,
      serviceName: selectedServiceObj?.title || formData.serviceId,
      features: featureLabels,
      budget: formData.budget,
      timeline: formData.timeline,
      notes: formData.notes,
      submittedAt: new Date().toISOString()
    };

    try {
      const response = await fetch('/api/send-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        const data = await response.json();
        setSubmissionResult({
          status: 'success',
          requestId: data.id || `REQ-${Date.now().toString().slice(-4)}`,
          payload
        });
      } else {
        throw new Error('API server unavailable');
      }
    } catch (err) {
      // Fallback state with full pre-filled brief
      setSubmissionResult({
        status: 'fallback',
        payload
      });
    } finally {
      setSubmitting(false);
    }
  };

  const selectedServiceObj = SERVICE_OPTIONS.find((s) => s.id === formData.serviceId);
  const selectedFeatureNames = formData.selectedFeatures
    .map((id) => FEATURE_OPTIONS.find((f) => f.id === id)?.title)
    .filter(Boolean);

  return (
    <div className="py-12 sm:py-16 md:py-20 font-sans animate-page-in">
      {/* Header */}
      <div className="max-w-4xl mb-8 md:mb-10">
        <p className="text-[11px] uppercase tracking-[0.08em] text-[#82766F] dark:text-[#9E938B] font-mono font-semibold mb-3">
          KHỞI ĐỘNG DỰ ÁN / BRIEF
        </p>
        <h1 className="text-[34px] sm:text-[46px] md:text-[54px] font-[800] tracking-[-0.035em] text-[#38251F] dark:text-[#EDE6DE] mb-4 leading-[1.08]">
          Mô Tả Nhu Cầu Làm Website
        </h1>
        <p className="text-[16px] sm:text-[17px] text-[#82766F] dark:text-[#9E938B] leading-relaxed max-w-2xl">
          Chỉ cần 4 bước đơn giản, bằng ngôn ngữ đời thường không cần kiến thức kỹ thuật. Tôi sẽ dựa trên thông tin này để tư vấn giải pháp và báo giá phù hợp nhất.
        </p>

        {formData.referenceProject && (
          <div className="mt-6 p-4 rounded-[2px] border border-[#DAD0C7] dark:border-[#332B26] bg-[#FAF8F4] dark:bg-[#221D1A] flex items-center justify-between gap-3 text-sm">
            <div>
              <span className="text-[#82766F] dark:text-[#9E938B] block text-xs uppercase font-mono font-semibold">Dự án tham khảo:</span>
              <span className="font-bold text-[#38251F] dark:text-[#EDE6DE]">{formData.referenceProject}</span>
            </div>
            <button
              type="button"
              onClick={() => setFormData((p) => ({ ...p, referenceProject: '' }))}
              className="text-xs text-[#82766F] hover:text-[#38251F] dark:hover:text-[#EDE6DE] underline"
            >
              Bỏ tham chiếu
            </button>
          </div>
        )}
      </div>

      {/* Wizard Step Indicator — Minimal Tab Bar */}
      <div className="border-t border-b border-[#DAD0C7] dark:border-[#332B26] py-3.5 mb-10 overflow-x-auto">
        <div className="flex items-center gap-6 min-w-max text-xs tracking-wider uppercase font-mono font-semibold">
          {STEP_LABELS.map((label, index) => {
            const stepNum = index + 1;
            const isActive = currentStep === stepNum;
            const isCompleted = currentStep > stepNum;

            return (
              <div
                key={stepNum}
                className={`flex items-center gap-2 ${
                  isActive
                    ? 'text-[#38251F] dark:text-[#EDE6DE] font-bold'
                    : isCompleted
                    ? 'text-[#82766F] dark:text-[#9E938B]'
                    : 'text-[#DAD0C7] dark:text-[#4D423B]'
                }`}
              >
                <span>{`0${stepNum}`}</span>
                <span>{label}</span>
                {index < STEP_LABELS.length - 1 && (
                  <span className="text-[#DAD0C7] dark:text-[#4D423B] ml-4 select-none">/</span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Wizard Content */}
      {submissionResult ? (
        // Completed State
        <div className="border-t border-[#DAD0C7] dark:border-[#332B26] pt-8 max-w-2xl">
          {submissionResult.status === 'success' ? (
            <div>
              <p className="text-xs uppercase tracking-widest text-[#82766F] dark:text-[#9E938B] font-mono font-semibold mb-2">
                ĐÃ TIẾP NHẬN YÊU CẦU
              </p>
              <h2 className="text-[26px] font-bold text-[#38251F] dark:text-[#EDE6DE] mb-4">
                Cảm ơn bạn! Yêu cầu mã #{submissionResult.requestId} đã được gửi.
              </h2>
              <p className="text-[#422B25] dark:text-[#CFC4B8] text-[15px] leading-relaxed mb-6">
                Tôi đã nhận được bản mô tả dự án của bạn và sẽ chủ động liên hệ lại qua Zalo ({submissionResult.payload.clientPhone}) 
                trong vòng 2 – 4 giờ làm việc để trao đổi chi tiết và gửi báo giá chính xác.
              </p>
            </div>
          ) : (
            <div>
              <p className="text-xs uppercase tracking-widest text-[#82766F] dark:text-[#9E938B] font-mono font-semibold mb-2">
                HOÀN TẤT THÔNG TIN
              </p>
              <h2 className="text-[26px] font-bold text-[#38251F] dark:text-[#EDE6DE] mb-4">
                Thông tin dự án đã sẵn sàng!
              </h2>
              <p className="text-[#422B25] dark:text-[#CFC4B8] text-[15px] leading-relaxed mb-6">
                Hệ thống gửi tự động hiện không khả dụng. Để không làm mất các thông tin bạn vừa chọn, 
                bạn có thể bấm gửi nhanh qua Zalo hoặc Email trực tiếp cho tôi:
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <a
                  href={`https://zalo.me/0935989872`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary py-3 px-5 text-[14px]"
                >
                  Gửi qua Zalo: 0935 989 872
                </a>
                <a
                  href={`mailto:quanganhqb04@gmail.com?subject=${encodeURIComponent(`Yêu cầu làm web: ${submissionResult.payload.serviceName}`)}&body=${encodeURIComponent(
                    `Họ tên: ${submissionResult.payload.clientName}\nSố điện thoại/Zalo: ${submissionResult.payload.clientPhone}\nLoại website: ${submissionResult.payload.serviceName}\nNgân sách: ${submissionResult.payload.budget}\nThời gian: ${submissionResult.payload.timeline}\nTính năng: ${submissionResult.payload.features.join(', ')}\nGhi chú: ${submissionResult.payload.notes}`
                  )}`}
                  className="btn-secondary py-3 px-5 text-[14px]"
                >
                  Gửi qua Email
                </a>
              </div>
            </div>
          )}

          {/* Selections Summary */}
          <div className="border-t border-[#DAD0C7] dark:border-[#332B26] pt-6 space-y-3 text-[15px] text-[#422B25] dark:text-[#CFC4B8]">
            <div>
              <strong className="text-[#38251F] dark:text-[#EDE6DE]">Khách hàng: </strong>
              {submissionResult.payload.clientName} ({submissionResult.payload.clientPhone})
            </div>
            <div>
              <strong className="text-[#38251F] dark:text-[#EDE6DE]">Loại website: </strong>
              {submissionResult.payload.serviceName}
            </div>
            <div>
              <strong className="text-[#38251F] dark:text-[#EDE6DE]">Ngân sách dự kiến: </strong>
              {submissionResult.payload.budget}
            </div>
            <div>
              <strong className="text-[#38251F] dark:text-[#EDE6DE]">Thời gian mong muốn: </strong>
              {submissionResult.payload.timeline}
            </div>
          </div>

          <div className="pt-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-[14px] font-bold text-[#38251F] dark:text-[#EDE6DE] underline"
            >
              <span>Trở về Trang chủ</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      ) : (
        // Active Wizard Steps
        <div className="max-w-3xl">
          {/* STEP 1: SERVICE SELECTION */}
          {currentStep === 1 && (
            <div>
              <h2 className="text-[22px] sm:text-[26px] font-bold text-[#38251F] dark:text-[#EDE6DE] mb-2">
                Bước 1: Bạn muốn xây dựng loại website nào?
              </h2>
              <p className="text-[15px] text-[#82766F] dark:text-[#9E938B] mb-6">
                Chọn loại website gần nhất với mục tiêu của bạn.
              </p>

              <div className="divide-y divide-[#DAD0C7] dark:divide-[#332B26] border-t border-b border-[#DAD0C7] dark:border-[#332B26]">
                {SERVICE_OPTIONS.map((opt) => {
                  const isSelected = formData.serviceId === opt.id;
                  return (
                    <label
                      key={opt.id}
                      className={`block py-5 cursor-pointer transition-colors ${
                        isSelected ? 'bg-[#FAF8F4] dark:bg-[#221D1A] px-4 -mx-4' : 'hover:bg-[#FAF8F4]/50'
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <input
                          type="radio"
                          name="serviceId"
                          value={opt.id}
                          checked={isSelected}
                          onChange={(e) =>
                            setFormData((prev) => ({ ...prev, serviceId: e.target.value }))
                          }
                          className="mt-1 text-[#38251F] focus:ring-0"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between gap-4 mb-1">
                            <span className="font-bold text-[#38251F] dark:text-[#EDE6DE] text-[17px]">
                              {opt.title}
                            </span>
                            <span className="text-[13px] text-[#82766F] dark:text-[#9E938B] font-mono">
                              {opt.defaultBudget}
                            </span>
                          </div>
                          <p className="text-[15px] text-[#82766F] dark:text-[#9E938B] leading-relaxed">
                            {opt.desc}
                          </p>
                        </div>
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 2: FEATURES SELECTION */}
          {currentStep === 2 && (
            <div>
              <h2 className="text-[22px] sm:text-[26px] font-bold text-[#38251F] dark:text-[#EDE6DE] mb-2">
                Bước 2: Những tính năng quan trọng bạn cần?
              </h2>
              <p className="text-[15px] text-[#82766F] dark:text-[#9E938B] mb-6">
                Bạn có thể chọn một hoặc nhiều tính năng bên dưới.
              </p>

              <div className="divide-y divide-[#DAD0C7] dark:divide-[#332B26] border-t border-b border-[#DAD0C7] dark:border-[#332B26]">
                {FEATURE_OPTIONS.map((feat) => {
                  const isChecked = formData.selectedFeatures.includes(feat.id);
                  return (
                    <label
                      key={feat.id}
                      className={`block py-4 cursor-pointer transition-colors ${
                        isChecked ? 'bg-[#FAF8F4] dark:bg-[#221D1A] px-4 -mx-4' : 'hover:bg-[#FAF8F4]/50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          disabled={feat.required}
                          onChange={() => !feat.required && toggleFeature(feat.id)}
                          className="text-[#38251F] focus:ring-0"
                        />
                        <span className={`text-[15px] ${isChecked ? 'text-[#38251F] dark:text-[#EDE6DE] font-semibold' : 'text-[#422B25] dark:text-[#CFC4B8]'}`}>
                          {feat.title}
                        </span>
                        {feat.required && (
                          <span className="text-xs text-[#82766F] font-mono">
                            (Mặc định luôn có)
                          </span>
                        )}
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 3: BUDGET & TIMELINE */}
          {currentStep === 3 && (
            <div className="space-y-10">
              <div>
                <h2 className="text-[22px] sm:text-[26px] font-bold text-[#38251F] dark:text-[#EDE6DE] mb-2">
                  Bước 3: Ngân sách dự kiến & Thời gian mong muốn
                </h2>
                <p className="text-[15px] text-[#82766F] dark:text-[#9E938B] mb-6">
                  Thông tin này giúp tôi đề xuất cấu trúc trang phù hợp nhất với khả năng tài chính của bạn.
                </p>

                <h3 className="text-[13px] font-mono font-bold uppercase tracking-wider text-[#38251F] dark:text-[#EDE6DE] mb-3">
                  Khoảng ngân sách dự trù:
                </h3>
                <div className="space-y-2 border-t border-b border-[#DAD0C7] dark:border-[#332B26] py-3">
                  {BUDGET_OPTIONS.map((opt) => (
                    <label
                      key={opt}
                      className="flex items-center gap-3 py-2 cursor-pointer text-[15px] text-[#422B25] dark:text-[#CFC4B8] hover:text-[#38251F]"
                    >
                      <input
                        type="radio"
                        name="budget"
                        value={opt}
                        checked={formData.budget === opt}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, budget: e.target.value }))
                        }
                        className="text-[#38251F] focus:ring-0"
                      />
                      <span>{opt}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-[13px] font-mono font-bold uppercase tracking-wider text-[#38251F] dark:text-[#EDE6DE] mb-3">
                  Thời gian bạn mong muốn hoàn thành:
                </h3>
                <div className="space-y-2 border-t border-b border-[#DAD0C7] dark:border-[#332B26] py-3">
                  {TIMELINE_OPTIONS.map((opt) => (
                    <label
                      key={opt}
                      className="flex items-center gap-3 py-2 cursor-pointer text-[15px] text-[#422B25] dark:text-[#CFC4B8] hover:text-[#38251F]"
                    >
                      <input
                        type="radio"
                        name="timeline"
                        value={opt}
                        checked={formData.timeline === opt}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, timeline: e.target.value }))
                        }
                        className="text-[#38251F] focus:ring-0"
                      />
                      <span>{opt}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: CONTACT & REVIEW */}
          {currentStep === 4 && (
            <div>
              <h2 className="text-[22px] sm:text-[26px] font-bold text-[#38251F] dark:text-[#EDE6DE] mb-2">
                Bước 4: Thông tin liên hệ & Xem lại yêu cầu
              </h2>
              <p className="text-[15px] text-[#82766F] dark:text-[#9E938B] mb-6">
                Tôi sẽ gửi tư vấn chi tiết và liên hệ trực tiếp với bạn qua thông tin bên dưới.
              </p>

              {/* Selections Review */}
              <div className="border border-[#DAD0C7] dark:border-[#332B26] py-5 mb-8 bg-[#FAF8F4] dark:bg-[#221D1A] px-5 text-[15px] text-[#422B25] dark:text-[#CFC4B8] space-y-2 rounded-[2px]">
                <p className="font-bold text-[#38251F] dark:text-[#EDE6DE] mb-2 uppercase text-xs font-mono">Tóm tắt cấu hình bạn đã chọn:</p>
                <p>
                  <strong className="text-[#38251F] dark:text-[#EDE6DE]">Loại website: </strong> {selectedServiceObj?.title}
                </p>
                <p>
                  <strong className="text-[#38251F] dark:text-[#EDE6DE]">Ngân sách: </strong> {formData.budget}
                </p>
                <p>
                  <strong className="text-[#38251F] dark:text-[#EDE6DE]">Thời gian: </strong> {formData.timeline}
                </p>
                <p>
                  <strong className="text-[#38251F] dark:text-[#EDE6DE]">Tính năng ({selectedFeatureNames.length}): </strong>{' '}
                  {selectedFeatureNames.join('; ')}
                </p>
              </div>

              {/* Contact Inputs */}
              <div className="space-y-5">
                <div>
                  <label htmlFor="clientName" className="block text-[13px] font-semibold text-[#38251F] dark:text-[#EDE6DE] mb-1.5">
                    Họ và tên của bạn *
                  </label>
                  <input
                    type="text"
                    id="clientName"
                    required
                    value={formData.clientName}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, clientName: e.target.value }))
                    }
                    placeholder="Ví dụ: Nguyễn Văn A"
                    className="w-full px-4 py-3 text-sm border border-[#DAD0C7] dark:border-[#332B26] rounded-[2px] focus:outline-none focus:border-[#38251F] bg-[#FAF8F4] dark:bg-[#221D1A] text-[#38251F] dark:text-[#EDE6DE]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="clientPhone" className="block text-[13px] font-semibold text-[#38251F] dark:text-[#EDE6DE] mb-1.5">
                      Số điện thoại / Zalo *
                    </label>
                    <input
                      type="tel"
                      id="clientPhone"
                      required
                      value={formData.clientPhone}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, clientPhone: e.target.value }))
                      }
                      placeholder="0912 345 678"
                      className="w-full px-4 py-3 text-sm border border-[#DAD0C7] dark:border-[#332B26] rounded-[2px] focus:outline-none focus:border-[#38251F] bg-[#FAF8F4] dark:bg-[#221D1A] text-[#38251F] dark:text-[#EDE6DE]"
                    />
                  </div>

                  <div>
                    <label htmlFor="clientEmail" className="block text-[13px] font-semibold text-[#38251F] dark:text-[#EDE6DE] mb-1.5">
                      Địa chỉ Email (tùy chọn)
                    </label>
                    <input
                      type="email"
                      id="clientEmail"
                      value={formData.clientEmail}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, clientEmail: e.target.value }))
                      }
                      placeholder="email@example.com"
                      className="w-full px-4 py-3 text-sm border border-[#DAD0C7] dark:border-[#332B26] rounded-[2px] focus:outline-none focus:border-[#38251F] bg-[#FAF8F4] dark:bg-[#221D1A] text-[#38251F] dark:text-[#EDE6DE]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="notes" className="block text-[13px] font-semibold text-[#38251F] dark:text-[#EDE6DE] mb-1.5">
                    Ghi chú thêm về website mong muốn (tùy chọn)
                  </label>
                  <textarea
                    id="notes"
                    rows="3"
                    value={formData.notes}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, notes: e.target.value }))
                    }
                    placeholder="Mô tả ngành nghề, liên kết website mẫu bạn thích hoặc bất kỳ lưu ý nào..."
                    className="w-full px-4 py-3 text-sm border border-[#DAD0C7] dark:border-[#332B26] rounded-[2px] focus:outline-none focus:border-[#38251F] bg-[#FAF8F4] dark:bg-[#221D1A] text-[#38251F] dark:text-[#EDE6DE]"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="border-t border-[#DAD0C7] dark:border-[#332B26] mt-10 pt-6 flex items-center justify-between">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={handlePrev}
                className="btn-secondary py-2.5 px-5 text-sm font-semibold inline-flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Quay lại</span>
              </button>
            ) : (
              <div />
            )}

            {currentStep < 4 ? (
              <button
                type="button"
                onClick={handleNext}
                className="btn-primary py-2.5 px-6 text-sm font-semibold inline-flex items-center gap-2"
              >
                <span>Tiếp tục</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={submitting}
                className="btn-primary py-3 px-8 text-sm font-bold inline-flex items-center gap-2 disabled:opacity-50"
              >
                <span>{submitting ? 'Đang gửi thông tin...' : 'Gửi yêu cầu dự án'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
