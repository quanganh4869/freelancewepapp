import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import { Code, Cpu, Sparkles, ShieldCheck, MessageSquare, Headphones } from 'lucide-react';

export const WhyUsSection = () => {
  const { t } = useLanguage();
  const { isDark } = useTheme();

  const advantages = [
    {
      num: '01',
      icon: Code,
      titleVi: '01 CODE TỰ VIẾT • Không Dùng Mẫu Sẵn',
      desc: 'Nói KHÔNG với các giao diện mẫu dựng sẵn cồng kềnh. Phần mềm của bạn được thiết kế và viết code riêng 100% phù hợp chính xác theo nhu cầu.'
    },
    {
      num: '02',
      icon: Cpu,
      titleVi: '02 TỐC ĐỘ NHANH • Chạy Ổn Định 24/7',
      desc: 'Áp dụng công nghệ lập trình hiện đại nhất giúp trang web mở siêu nhanh dưới 1 giây, chịu tải tốt và không lo gián đoạn công việc.'
    },
    {
      num: '03',
      icon: Sparkles,
      titleVi: '03 GIAO DIỆN ĐẸP • Dễ Dùng Cho Nhân Viên',
      desc: 'Giao diện thiết kế sang trọng, sắp xếp khoa học giúp nhân viên và khách hàng thao tác dễ dàng mà không cần tốn thời gian đào tạo phức tạp.'
    },
    {
      num: '04',
      icon: ShieldCheck,
      titleVi: '04 DỄ NÂNG CẤP • Sẵn Sàng Mở Rộng',
      desc: 'Phần mềm được xây dựng với cấu trúc mở, giúp bạn dễ dàng bổ sung thêm tính năng mới bất cứ khi nào doanh nghiệp phát triển mở rộng.'
    },
    {
      num: '05',
      icon: MessageSquare,
      titleVi: '05 MINH BẠCH • Báo Cáo Tiến Độ Tuần',
      desc: 'Bạn luôn được cập nhật tiến độ công việc hàng tuần, dùng thử các tính năng ngay khi vừa hoàn thành và chủ động đóng góp ý kiến.'
    },
    {
      num: '06',
      icon: Headphones,
      titleVi: '06 ĐỒNG HÀNH • Bảo Hành Hỗ Trợ 24/7',
      desc: 'Chúng tôi cam kết đồng hành lâu dài cùng doanh nghiệp bạn. Đội ngũ kỹ thuật túc trực xử lý nhanh chóng mọi thắc mắc 24/7.'
    }
  ];

  return (
    <section id="why-us" className={`py-24 border-b font-sans ${
      isDark ? 'bg-studio-900 border-white/10 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="studio-badge">
            <span>{t('whyUsTag')}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {t('whyUsTitle')}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
            {t('whyUsDesc')}
          </p>
        </div>

        {/* Editorial Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="studio-card p-8 rounded-2xl space-y-4 group hover:border-brand-primary transition-all duration-200 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm font-bold text-brand-primary">
                    {item.num}
                  </span>
                  <Icon size={20} className="text-slate-500 dark:text-slate-400 group-hover:text-brand-primary transition-colors" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-brand-primary transition-colors">
                  {item.titleVi}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
