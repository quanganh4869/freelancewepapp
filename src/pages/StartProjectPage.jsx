import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useRequests } from '../context/RequestContext';
import { requestDraftService } from '../services/requestDraftService';

// Header, Progress, Navigation & Dialog
import ProjectRequestHeader from '../components/request/ProjectRequestHeader';
import ProjectProgress, { STEP_NAMES } from '../components/request/ProjectProgress';
import ProjectSummaryPanel from '../components/request/ProjectSummaryPanel';
import ProjectNavigation from '../components/request/ProjectNavigation';
import ConfirmationDialog from '../components/request/ConfirmationDialog';
import SuccessScreen from '../components/request/SuccessScreen';

// 8 Step Components
import Step1ProjectType from '../components/request/steps/Step1ProjectType';
import Step2BusinessGoal from '../components/request/steps/Step2BusinessGoal';
import Step3Features from '../components/request/steps/Step3Features';
import Step4UsersWorkflow from '../components/request/steps/Step4UsersWorkflow';
import Step5DesignAssets from '../components/request/steps/Step5DesignAssets';
import Step6Integrations from '../components/request/steps/Step6Integrations';
import Step7BudgetTimeline from '../components/request/steps/Step7BudgetTimeline';
import Step8ContactReview from '../components/request/steps/Step8ContactReview';

const DEFAULT_FORM_DATA = {
  requestType: '', // 'landing_page' | 'business_website' | 'ecommerce' | 'personal_portfolio' | 'web_application' | 'existing_website'
  businessContext: {
    industry: 'Dịch vụ và tư vấn',
    customIndustry: ''
  },
  projectGoal: {
    primaryGoal: 'Tôi muốn giới thiệu doanh nghiệp hoặc dịch vụ chuyên nghiệp hơn.',
    detailedGoal: '',
    currentSituation: 'Tôi đang bắt đầu từ đầu.',
    existingTool: ''
  },
  features: [],
  customFeatures: '',
  needConsultation: false,
  landingFocus: 'Giúp người xem hiểu rõ về sản phẩm / dịch vụ',
  contentManagement: 'Có. Tôi muốn tự thay đổi nội dung, hình ảnh và bài viết.',
  productCount: '20 – 100 sản phẩm',
  orderFlow: 'Thêm sản phẩm vào giỏ hàng và gửi đơn hàng (COD / Chuyển khoản)',
  portfolioGoal: 'Xây dựng thương hiệu cá nhân chuyên gia',
  existingWebsiteUrl: '',
  upgradeNotes: '',
  contentCategories: ['Giới thiệu thương hiệu', 'Dịch vụ cung cấp', 'Thông tin liên hệ & Mạng xã hội'],
  userGroups: [
    {
      id: 'ug-1',
      name: 'Khách hàng',
      responsibilities: 'Xem thông tin, đặt hàng hoặc gửi yêu cầu tư vấn',
      crossAccess: 'Không'
    },
    {
      id: 'ug-2',
      name: 'Quản trị viên / Chủ',
      responsibilities: 'Xem toàn bộ dữ liệu, phân công và kiểm soát hoạt động',
      crossAccess: 'Có'
    }
  ],
  workflowSteps: [
    {
      id: 'ws-1',
      stepName: 'Khách hàng gửi yêu cầu / đặt lịch',
      actor: 'Khách hàng',
      result: 'Tạo phiếu yêu cầu mới trên hệ thống'
    },
    {
      id: 'ws-2',
      stepName: 'Tiếp nhận và xử lý yêu cầu',
      actor: 'Nhân viên phụ trách',
      result: 'Cập nhật trạng thái đang xử lý'
    },
    {
      id: 'ws-3',
      stepName: 'Xác nhận và hoàn tất',
      actor: 'Quản trị viên',
      result: 'Hoàn thành và gửi thông báo kết quả'
    }
  ],
  notifyOnStatusChange: 'Có, thông báo ngay lập tức',
  designPreferences: {
    aestheticStyle: 'Tối giản, hiện đại',
    referenceNotes: ''
  },
  referenceUrls: [''],
  referenceProject: '',
  availableAssets: [],
  attachments: [],
  integrations: ['Zalo (nút chat nhanh hoặc Zalo OA)', 'Email tự động'],
  customIntegration: '',
  needIntegrationConsult: false,
  budgetRange: 'Từ 3 – 5 triệu đồng',
  desiredTimeline: {
    startTimeline: 'Trong vòng 2 – 4 tuần tới',
    primaryPriority: 'Hoàn thành đúng nhu cầu với chi phí hợp lý nhất',
    targetDeliveryDate: ''
  },
  contactInformation: {
    fullName: '',
    email: '',
    phone: '',
    company: '',
    preferredContactMethod: 'Zalo',
    preferredContactTime: 'Bất cứ lúc nào phù hợp'
  },
  additionalNotes: ''
};

export default function StartProjectPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { submitProjectRequest } = useRequests();

  // Step state
  const [currentStep, setCurrentStep] = useState(1);
  const [confirmed, setConfirmed] = useState(false);
  const [errors, setErrors] = useState({});

  // Autosave & draft state
  const [draftStatus, setDraftStatus] = useState('idle'); // 'idle' | 'saving' | 'saved' | 'error'
  const [lastSavedAt, setLastSavedAt] = useState(null);
  const saveTimeoutRef = useRef(null);

  // Dialog states
  const [exitDialogOpen, setExitDialogOpen] = useState(false);
  const [resetDialogOpen, setResetDialogOpen] = useState(false);

  // Submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedResult, setSubmittedResult] = useState(null);

  // Form Data with Draft recovery
  const [formData, setFormData] = useState(() => {
    const savedDraft = requestDraftService.getDraft();
    if (savedDraft) {
      return savedDraft;
    }
    return DEFAULT_FORM_DATA;
  });

  // Sync reference from searchParams on mount
  useEffect(() => {
    const refParam = searchParams.get('reference');
    const serviceParam = searchParams.get('service');
    const tierParam = searchParams.get('tier');

    setFormData((prev) => {
      const updated = { ...prev };
      if (refParam && !prev.referenceProject) {
        updated.referenceProject = refParam;
      }
      if (serviceParam) {
        if (serviceParam === 'landing-page') updated.requestType = 'landing_page';
        else if (serviceParam === 'business-web') updated.requestType = 'business_website';
        else if (serviceParam === 'custom-webapp') updated.requestType = 'web_application';
      } else if (tierParam) {
        if (tierParam === 'tier-basic') updated.requestType = 'landing_page';
        else if (tierParam === 'tier-standard') updated.requestType = 'business_website';
        else if (tierParam === 'tier-custom') updated.requestType = 'web_application';
      }
      return updated;
    });
  }, [searchParams]);

  // Debounced Autosave (700ms)
  useEffect(() => {
    if (submittedResult) return;

    if (saveTimeoutRef.current) {
      clearTimeout(saveTimeoutRef.current);
    }

    setDraftStatus('saving');
    saveTimeoutRef.current = setTimeout(() => {
      const res = requestDraftService.saveDraft(formData);
      if (res.success) {
        setDraftStatus('saved');
        setLastSavedAt(res.savedAt);
      } else {
        setDraftStatus('error');
      }
    }, 700);

    return () => {
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current);
      }
    };
  }, [formData, submittedResult]);

  // Update a single field in form data
  const handleChangeField = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value
    }));
    // Clear relevant error if any
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  // Immediate save on user trigger
  const handleSaveDraftNow = () => {
    setDraftStatus('saving');
    const res = requestDraftService.saveDraft(formData);
    if (res.success) {
      setDraftStatus('saved');
      setLastSavedAt(res.savedAt);
    } else {
      setDraftStatus('error');
    }
  };

  // Validation per step
  const validateStep = (stepNumber) => {
    const newErrors = {};

    if (stepNumber === 1) {
      if (!formData.requestType) {
        newErrors.requestType = 'Vui lòng chọn loại dự án bạn muốn xây dựng.';
      }
    }

    if (stepNumber === 8) {
      const contact = formData.contactInformation || {};
      if (!contact.fullName?.trim()) {
        newErrors.fullName = 'Vui lòng nhập họ và tên của bạn.';
      }

      if (!contact.email?.trim()) {
        newErrors.email = 'Vui lòng nhập địa chỉ email.';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email.trim())) {
        newErrors.email = 'Email chưa đúng định dạng (Ví dụ: ban@example.com).';
      }

      if (!contact.phone?.trim()) {
        newErrors.phone = 'Vui lòng nhập số điện thoại hoặc Zalo để tôi liên hệ.';
      }

      if (!confirmed) {
        newErrors.confirmed = 'Vui lòng xác nhận thông tin trước khi gửi yêu cầu.';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Navigation handlers
  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (currentStep < STEP_NAMES.length) {
        setCurrentStep((prev) => prev + 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleJumpToStep = (stepNumber) => {
    if (stepNumber <= currentStep || validateStep(currentStep)) {
      setCurrentStep(stepNumber);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Exit & Reset
  const handleConfirmReset = () => {
    requestDraftService.clearDraft();
    setFormData(DEFAULT_FORM_DATA);
    setCurrentStep(1);
    setConfirmed(false);
    setErrors({});
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleConfirmExit = () => {
    requestDraftService.saveDraft(formData);
    navigate('/');
  };

  // Form Submission
  const handleSubmit = async () => {
    if (!validateStep(8)) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      // 1. Lưu vào RequestContext
      const createdRequest = submitProjectRequest(formData);
      const generatedId = createdRequest.id;

      // 2. Gửi về API backend
      const payloadToSend = {
        ...formData,
        id: generatedId,
        clientName: formData.contactInformation?.fullName,
        clientEmail: formData.contactInformation?.email,
        clientPhone: formData.contactInformation?.phone,
        clientCompany: formData.contactInformation?.company,
        projectType: formData.requestType,
        budget: formData.budgetRange,
        timeline: formData.desiredTimeline?.startTimeline,
        notes: formData.additionalNotes
      };

      const res = await fetch('/api/send-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payloadToSend)
      });

      const responseData = await res.json().catch(() => ({}));
      const finalId = responseData.requestId || generatedId;

      // 3. Xóa bản nháp đã nộp
      requestDraftService.clearDraft();

      setSubmittedResult({
        requestId: finalId,
        formData
      });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      console.warn('Lỗi kết nối khi gửi yêu cầu, dùng dữ liệu nội bộ đã lưu:', err);
      // Vẫn thông báo thành công cho client vì đã lưu vào localStorage RequestContext an toàn
      const fallbackId = `REQ-${Math.floor(10000 + Math.random() * 90000)}`;
      requestDraftService.clearDraft();
      setSubmittedResult({
        requestId: fallbackId,
        formData
      });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Render Completion Screen if submitted
  if (submittedResult) {
    return (
      <div className="py-12 sm:py-16 md:py-20 font-sans">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <SuccessScreen
            requestId={submittedResult.requestId}
            formData={submittedResult.formData}
            onResetNewRequest={handleConfirmReset}
          />
        </div>
      </div>
    );
  }

  // Render Main Multi-step Form
  return (
    <div className="py-8 sm:py-12 md:py-16 font-sans animate-page-in">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <ProjectRequestHeader
          referenceProject={formData.referenceProject}
          onClearReference={() => handleChangeField('referenceProject', '')}
        />

        {/* 8-Step Progress Bar */}
        <ProjectProgress
          currentStep={currentStep}
          onStepClick={handleJumpToStep}
        />

        {/* 2-Column Responsive Layout: 68% Main Form / 32% Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Form Area (68%) */}
          <main className="lg:col-span-8">
            <div className="rounded-2xl border border-[#e2e8f0] dark:border-[#2a2c3d] bg-white/80 dark:bg-[#0c0d18]/80 backdrop-blur-sm p-6 sm:p-8 shadow-sm">
              {/* Step 1 */}
              {currentStep === 1 && (
                <Step1ProjectType
                  selectedType={formData.requestType}
                  onSelectType={(typeId) => handleChangeField('requestType', typeId)}
                />
              )}

              {/* Step 2 */}
              {currentStep === 2 && (
                <Step2BusinessGoal
                  formData={formData}
                  onChangeField={handleChangeField}
                  errors={errors}
                />
              )}

              {/* Step 3 */}
              {currentStep === 3 && (
                <Step3Features
                  requestType={formData.requestType}
                  formData={formData}
                  onChangeField={handleChangeField}
                />
              )}

              {/* Step 4 */}
              {currentStep === 4 && (
                <Step4UsersWorkflow
                  requestType={formData.requestType}
                  formData={formData}
                  onChangeField={handleChangeField}
                />
              )}

              {/* Step 5 */}
              {currentStep === 5 && (
                <Step5DesignAssets
                  formData={formData}
                  onChangeField={handleChangeField}
                />
              )}

              {/* Step 6 */}
              {currentStep === 6 && (
                <Step6Integrations
                  formData={formData}
                  onChangeField={handleChangeField}
                />
              )}

              {/* Step 7 */}
              {currentStep === 7 && (
                <Step7BudgetTimeline
                  formData={formData}
                  onChangeField={handleChangeField}
                />
              )}

              {/* Step 8 */}
              {currentStep === 8 && (
                <Step8ContactReview
                  formData={formData}
                  onChangeField={handleChangeField}
                  onJumpToStep={handleJumpToStep}
                  confirmed={confirmed}
                  onConfirmedChange={setConfirmed}
                  errors={errors}
                />
              )}

              {/* Global Error Banner if any */}
              {errors.requestType && currentStep === 1 && (
                <p className="mt-4 text-sm text-[#ef4444] font-medium flex items-center gap-1.5">
                  <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  {errors.requestType}
                </p>
              )}

              {errors.confirmed && currentStep === 8 && (
                <p className="mt-4 text-sm text-[#ef4444] font-medium flex items-center gap-1.5">
                  <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  {errors.confirmed}
                </p>
              )}

              {/* Navigation Controls */}
              <ProjectNavigation
                currentStep={currentStep}
                totalSteps={STEP_NAMES.length}
                onPrev={handlePrev}
                onNext={handleNext}
                onSubmit={handleSubmit}
                isSubmitting={isSubmitting}
                nextDisabled={currentStep === 1 && !formData.requestType}
                draftStatus={draftStatus}
                lastSavedAt={lastSavedAt}
                onSaveDraft={handleSaveDraftNow}
                onReset={() => setResetDialogOpen(true)}
                onExit={() => setExitDialogOpen(true)}
              />
            </div>
          </main>

          {/* Right Summary Sidebar (32%) */}
          <aside className="lg:col-span-4">
            <ProjectSummaryPanel
              formData={formData}
              onJumpToStep={handleJumpToStep}
            />
          </aside>
        </div>

        {/* Exit Confirmation Dialog */}
        <ConfirmationDialog
          isOpen={exitDialogOpen}
          onClose={() => setExitDialogOpen(false)}
          title="Bạn muốn rời khỏi biểu mẫu?"
          message="Những thay đổi chưa được lưu có thể bị mất. Bạn muốn lưu lại bản nháp trước khi rời đi không?"
          confirmLabel="Lưu và rời đi"
          cancelLabel="Tiếp tục điền"
          onConfirm={handleConfirmExit}
        />

        {/* Reset Confirmation Dialog */}
        <ConfirmationDialog
          isOpen={resetDialogOpen}
          onClose={() => setResetDialogOpen(false)}
          title="Bạn có chắc muốn bắt đầu lại từ đầu?"
          message="Toàn bộ thông tin đã nhập trong biểu mẫu hiện tại sẽ bị xóa sạch. Thao tác này không thể hoàn tác."
          confirmLabel="Xóa dữ liệu"
          cancelLabel="Tiếp tục điền"
          isDangerous={true}
          onConfirm={handleConfirmReset}
        />
      </div>
    </div>
  );
}
