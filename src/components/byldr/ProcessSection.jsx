import React from 'react';

export const ProcessSection = () => {
  const steps = [
    {
      num: '01',
      name: 'Brief',
      title: 'Trao đổi mục tiêu & Nhu cầu',
      desc: 'Khách hàng chia sẻ mục tiêu kinh doanh, đối tượng sử dụng và những vấn đề cần giải quyết. Quang Anh trao đổi trực tiếp 1-1 để hiểu rõ bài toán và xác định phạm vi dự án phù hợp nhất.',
      tag: 'Miễn phí 100%',
    },
    {
      num: '02',
      name: 'Direction',
      title: 'Định hướng & Báo giá cố định',
      desc: 'Thống nhất cấu trúc các trang, chức năng cần có, phong cách giao diện và thời gian bàn giao. Gửi báo giá trọn gói cố định một lần, cam kết không phát sinh chi phí ẩn.',
      tag: 'Trong 24 giờ',
    },
    {
      num: '03',
      name: 'Build',
      title: 'Thiết kế giao diện & Lập trình',
      desc: 'Thiết kế giao diện trực quan và lập trình hoàn chỉnh bằng React/TypeScript. Tối ưu tốc độ mở trang dưới 1 giây, kiểm thử trên điện thoại và gửi link demo cập nhật tiến độ.',
      tag: 'Link demo theo dõi',
    },
    {
      num: '04',
      name: 'Live',
      title: 'Bàn giao 100% mã nguồn & Bảo hành',
      desc: 'Cài đặt lên tên miền chính thức, chuyển giao toàn bộ mã nguồn sạch, quay video hướng dẫn sử dụng và đồng hành bảo hành kỹ thuật chu đáo từ 6 đến 12 tháng.',
      tag: 'Toàn quyền sở hữu',
    },
  ];

  return (
    <section className="process py-20 sm:py-28 border-b border-[rgba(180,170,255,0.14)]" id="process">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
        
        {/* Section Head */}
        <div className="sec-head">
          <div>
            <h2>
              Brief to <span className="grad">live</span>
            </h2>
          </div>
        </div>

        {/* 4-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {steps.map((s) => (
            <div
              key={s.num}
              className="p-6 sm:p-7 rounded-2xl bg-[#0a0b14] border border-[rgba(180,170,255,0.14)] hover:border-[rgba(180,170,255,0.35)] transition-all duration-300 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-disp text-[28px] font-bold text-[#00e7ff]">
                    {s.num}
                  </span>
                  <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/10 text-[#a7a6c4]">
                    {s.tag}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#a7a6c4]">
                    Giai đoạn {s.name}
                  </span>
                  <h3 className="font-disp font-bold text-[18px] text-[#f3f2fb] leading-snug">
                    {s.title}
                  </h3>
                </div>

                <p className="text-[14px] text-[#a7a6c4] leading-relaxed">
                  {s.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-white/[0.06] text-[12px] font-mono text-[#00e7ff] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00e7ff]" />
                <span>Bước 0{s.num} hoàn tất</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProcessSection;
