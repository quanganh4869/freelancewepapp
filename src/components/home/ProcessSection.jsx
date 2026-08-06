import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import { Search, Compass, Palette, Code, CheckSquare, Rocket, Shield, ArrowRight } from 'lucide-react';

export const ProcessSection = ({ onOpenRequestModal }) => {
  const { language, t } = useLanguage();
  const { isDark } = useTheme();
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'TƯ VẤN',
      titleVi: '01 TƯ VẤN • Lắng Nghe & Lập Kế Hoạch',
      titleEn: '01 CONSULTING • Discovery & Planning',
      icon: Search,
      details: language === 'en'
        ? 'We listen to your business challenges, clarify core requirements, and create a clear roadmap.'
        : 'Chúng tôi lắng nghe nhu cầu và bài toán kinh doanh của bạn, tư vấn giải pháp tối ưu nhất và lập kế hoạch triển khai rõ ràng từng bước.'
    },
    {
      num: '02',
      title: 'LẬP SƠ ĐỒ',
      titleVi: '02 QUY TRÌNH • Sơ Đồ & Cấu Trúc Phần Mềm',
      titleEn: '02 ARCHITECT • Workflow & System Architecture',
      icon: Compass,
      details: language === 'en'
        ? 'Organizing database structures, system workflows, and breaking down features into clear stages.'
        : 'Thống nhất sơ đồ quy trình công việc, cách thức quản lý dữ liệu và chia nhỏ tiến độ bàn giao minh bạch để bạn dễ theo dõi.'
    },
    {
      num: '03',
      title: 'THIẾT KẾ',
      titleVi: '03 DESIGN • Thiết Kế Giao Diện Đẹp Mắt',
      titleEn: '03 DESIGN • Beautiful UI/UX Prototyping',
      icon: Palette,
      details: language === 'en'
        ? 'Crafting clean, attractive user interfaces. You can view and test the interactive design preview before coding begins.'
        : 'Vẽ giao diện phần mềm hiện đại, sang trọng và dễ sử dụng. Bạn được duyệt mẫu thiết kế tương tác thực tế trước khi tiến hành viết code.'
    },
    {
      num: '04',
      title: 'LẬP TRÌNH',
      titleVi: '04 BUILD • Lập Trình Code Tự Viết 100%',
      titleEn: '04 BUILD • Software Engineering',
      icon: Code,
      details: language === 'en'
        ? 'Writing high-quality custom code for front-end interface and back-end database system.'
        : 'Lập trình viên viết code chuẩn tay 100%, không dùng mẫu dựng sẵn. Đảm bảo ứng dụng chạy mượt mà, tốc độ cực nhanh và bảo mật an toàn.'
    },
    {
      num: '05',
      title: 'KIỂM THỬ',
      titleVi: '05 TEST • Kiểm Tra Chất Lượng Kỹ Càng',
      titleEn: '05 TEST • Quality Testing & Verification',
      icon: CheckSquare,
      details: language === 'en'
        ? 'Testing all features thoroughly on phones, tablets, and computers to ensure zero bugs.'
        : 'Chạy thử nghiệm toàn bộ tính năng trên Điện thoại, Máy tính bảng và Máy tính để bàn. Kiểm tra độ ổn định và xử lý triệt để mọi lỗi nhỏ.'
    },
    {
      num: '06',
      title: 'BÀN GIAO',
      titleVi: '06 DEPLOY • Đưa Phần Mềm Vào Vận Hành',
      titleEn: '06 DEPLOY • Launch & Training',
      icon: Rocket,
      details: language === 'en'
        ? 'Deploying to your domain name and guiding your team on how to use the admin control panel.'
        : 'Đưa ứng dụng chạy chính thức trên tên miền của bạn, chuyển giao toàn bộ mã nguồn và hướng dẫn nhân viên thao tác quản trị dễ dàng.'
    },
    {
      num: '07',
      title: 'BẢO HÀNH',
      titleVi: '07 MAINTAIN • Bảo Hành & Hỗ Trợ 24/7',
      titleEn: '07 MAINTAIN • 24/7 Support & Maintenance',
      icon: Shield,
      details: language === 'en'
        ? 'Providing continuous technical support, regular data backups, and quick troubleshooting.'
        : 'Túc trực hỗ trợ kỹ thuật 24/7, sao lưu dữ liệu tự động hàng ngày và sẵn sàng nâng cấp thêm tính năng mới khi công ty bạn mở rộng.'
    }
  ];

  return (
    <section id="process" className={`py-24 border-b font-sans ${
      isDark ? 'bg-studio-950 border-white/10 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="studio-badge">
            <span>{t('processTag')}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {t('processTitle')}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
            {t('processDesc')}
          </p>
        </div>

        {/* Process Step Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 mb-10">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isActive = activeStep === idx;
            return (
              <button
                key={step.num}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-xl text-left border transition-all ${
                  isActive
                    ? 'bg-brand-primary text-white border-brand-primary font-bold shadow-sm'
                    : 'bg-white dark:bg-studio-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`font-mono text-xs ${isActive ? 'text-white' : 'text-brand-primary font-bold'}`}>
                    {step.num}
                  </span>
                  <Icon size={16} />
                </div>
                <p className="text-xs font-bold truncate">{step.title}</p>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detail Panel */}
        <div className="studio-card p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8 border-brand-primary/30 shadow-md">
          <div className="space-y-4 max-w-2xl">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              {language === 'en' ? steps[activeStep].titleEn : steps[activeStep].titleVi}
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              {steps[activeStep].details}
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={() => onOpenRequestModal()}
              className="btn-primary py-3 px-6 text-sm"
            >
              <span>{t('processStageBtn')}</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
