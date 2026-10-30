import React from 'react';
import { MessageSquare, FileCheck2, Palette, ShieldCheck, ArrowRight } from 'lucide-react';

export const ProcessSection = ({ onOpenRequestModal }) => {
  const steps = [
    {
      num: '01',
      title: 'Trao đổi nhu cầu & Tư vấn',
      desc: 'Bạn nhắn qua form hoặc Zalo. Kể bạn đang kinh doanh gì và muốn website làm được gì. Tôi tư vấn gói phù hợp và tiết kiệm nhất.',
      deliverable: 'Đề xuất giải pháp & Tính năng cần có',
      icon: MessageSquare
    },
    {
      num: '02',
      title: 'Báo giá cố định & Đặt cọc 30%',
      desc: 'Tôi gửi báo giá trọn gói rõ ràng kèm mốc thời gian hoàn thành. Không phát sinh chi phí ngầm. Bạn đặt cọc 30% để tôi bắt đầu làm.',
      deliverable: 'Báo giá minh bạch & Cam kết tiến độ',
      icon: FileCheck2
    },
    {
      num: '03',
      title: 'Duyệt thiết kế & Lập trình',
      desc: 'Tôi gửi bạn xem bản thiết kế giao diện trước. Bạn duyệt ưng ý thì tôi mới tiến hành code. Trong lúc làm, có link xem thử tiến độ thực tế.',
      deliverable: 'Link xem thử website hoạt động',
      icon: Palette
    },
    {
      num: '04',
      title: 'Bàn giao, Hướng dẫn & Bảo hành',
      desc: 'Cài đặt lên tên miền của bạn, bàn giao toàn bộ mã nguồn, hướng dẫn tự sửa nội dung qua video/gọi điện. Bảo hành kỹ thuật miễn phí 6 – 12 tháng.',
      deliverable: 'Website chạy chính thức & Hỗ trợ lâu dài',
      icon: ShieldCheck
    }
  ];

  return (
    <section id="quy-trinh" className="py-16 md:py-24 border-b border-brand-border font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-left space-y-3 reveal max-w-3xl">
          <span className="text-xs font-bold text-[#D05021] uppercase tracking-wider">
            Quy trình làm việc
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-primary dark:text-white">
            Bốn bước hợp tác rõ ràng, an tâm từ đầu đến cuối
          </h2>
          <p className="text-brand-muted text-sm sm:text-base leading-relaxed font-medium">
            Mỗi giai đoạn đều có kết quả cụ thể để bạn nghiệm thu, không lo tình trạng nhận tiền rồi làm không đúng ý.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, index) => {
            const Icon = s.icon;
            const delayClass = `reveal-delay-${index + 1}`;
            return (
              <div
                key={s.num}
                className={`p-6 rounded-2xl border border-brand-border bg-brand-paper dark:bg-studio-900 flex flex-col justify-between space-y-4 hover:border-brand-muted transition-colors reveal ${delayClass}`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm font-extrabold text-[#D05021] bg-[#D05021]/10 px-2.5 py-0.5 rounded">
                      Bước {s.num}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-brand-background dark:bg-studio-950 border border-brand-border flex items-center justify-center text-brand-primary dark:text-white">
                      <Icon size={16} />
                    </div>
                  </div>

                  <h3 className="font-display text-lg font-bold text-brand-primary dark:text-white">
                    {s.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-medium">
                    {s.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-brand-border space-y-1">
                  <span className="text-[10px] uppercase font-bold text-brand-muted block">
                    Kết quả bạn nhận được:
                  </span>
                  <span className="text-xs font-semibold text-brand-primary dark:text-white block">
                    {s.deliverable}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Reassurance Callout */}
        <div className="p-5 rounded-xl border border-brand-border bg-brand-paper dark:bg-studio-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 reveal">
          <div className="space-y-1">
            <h4 className="font-display font-bold text-sm sm:text-base text-brand-primary dark:text-white">
              Sẵn sàng trao đổi về ý tưởng website của bạn?
            </h4>
            <p className="text-xs text-brand-muted font-medium">
              Chỉ cần 5 phút nhắn tin, tôi sẽ giúp bạn hình dung lộ trình và mức chi phí tối ưu nhất.
            </p>
          </div>
          <button
            onClick={() => onOpenRequestModal()}
            className="btn-primary py-2.5 px-5 text-xs font-semibold shrink-0"
          >
            <span>Bắt đầu trao đổi ngay</span>
            <ArrowRight size={13} />
          </button>
        </div>

      </div>
    </section>
  );
};
