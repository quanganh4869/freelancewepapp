import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import { ShieldCheck, Code, Cpu, Users, CheckCircle2 } from 'lucide-react';

export const AboutSection = () => {
  const { t, language } = useLanguage();
  const { isDark } = useTheme();

  const principles = [
    {
      num: '01',
      icon: Code,
      title: 'Code Tự Viết Tùy Chỉnh 100%',
      titleVi: 'Code Tự Viết Tùy Chỉnh 100%',
      desc: 'Chúng tôi không sử dụng các giao diện mẫu có sẵn chất lượng kém. Mọi dòng code đều được lập trình riêng tối ưu đúng theo nhu cầu quản lý của bạn.'
    },
    {
      num: '02',
      icon: Cpu,
      title: 'Tốc Độ Nhanh & Dễ Mở Rộng',
      titleVi: 'Tốc Độ Nhanh & Dễ Mở Rộng',
      desc: 'Áp dụng các công nghệ ứng dụng web hiện đại giúp trang web tải cực nhanh dưới 1 giây, hoạt động mượt mà và dễ dàng thêm tính năng mới về sau.'
    },
    {
      num: '03',
      icon: ShieldCheck,
      title: 'Bảo Mật & An Toàn Dữ Liệu',
      titleVi: 'Bảo Mật & An Toàn Dữ Liệu',
      desc: 'Tuân thủ các tiêu chuẩn bảo mật dữ liệu nghiêm ngặt, tự động sao lưu định kỳ giúp bảo vệ thông tin khách hàng và tài sản của doanh nghiệp.'
    },
    {
      num: '04',
      icon: Users,
      title: 'Hỗ Trợ Chu Đáo & Đồng Hành',
      titleVi: 'Hỗ Trợ Chu Đáo & Đồng Hành',
      desc: 'Báo cáo tiến độ rõ ràng hàng tuần, hướng dẫn sử dụng tận tình cho nhân viên và luôn sẵn sàng hỗ trợ kỹ thuật nhanh chóng sau khi bàn giao.'
    }
  ];

  return (
    <section id="about" className={`py-24 border-b font-sans ${
      isDark ? 'bg-studio-950 border-white/10 text-white' : 'bg-white border-slate-200 text-slate-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Heading Statement */}
        <div className="max-w-4xl mb-16 space-y-6">
          <div className="studio-badge">
            <span>{t('aboutTag')}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight text-slate-900 dark:text-white">
            {language === 'en' ? (
              <>
                "We don't just build websites. <br />
                We build tools that help your business grow."
              </>
            ) : (
              <>
                "Chúng tôi không chỉ làm website đẹp, <br />
                chúng tôi tạo ra công cụ giúp doanh nghiệp của bạn phát triển."
              </>
            )}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed max-w-2xl">
            Nexus Studio là đối tác đồng hành cùng các Doanh nghiệp & Cửa hàng kinh doanh. Chúng tôi tập trung tạo ra phần mềm thực sự hữu ích, dễ sử dụng và đem lại giá trị thực tế.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {principles.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="studio-card p-8 rounded-2xl space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm font-bold text-brand-primary">
                    {item.num}
                  </span>
                  <IconComp size={20} className="text-slate-500 dark:text-slate-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{item.titleVi}</h3>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Specs Banner */}
        <div className="studio-card p-8 rounded-2xl bg-slate-50 dark:bg-studio-900 flex flex-col lg:flex-row items-center justify-between gap-8 border-brand-primary/30">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">{t('aboutSlaTitle')}</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Tất cả phần mềm khi bàn giao đều được bàn giao đầy đủ mã nguồn (Full Source Code), tài liệu hướng dẫn và cam kết bảo hành hỗ trợ dài hạn theo hợp đồng.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
            <div className="p-3.5 rounded-xl bg-white dark:bg-studio-950 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 flex items-center gap-2 font-bold shadow-sm">
              <CheckCircle2 size={15} className="text-brand-primary" />
              <span>Bàn Giao Trọn Bộ Mã Nguồn</span>
            </div>
            <div className="p-3.5 rounded-xl bg-white dark:bg-studio-950 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 flex items-center gap-2 font-bold shadow-sm">
              <CheckCircle2 size={15} className="text-brand-primary" />
              <span>Bảo Hành & Hỗ Trợ 24/7</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
