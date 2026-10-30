import React from 'react';
import { Terminal, CheckCircle2, UserCheck, ShieldCheck, Zap } from 'lucide-react';

export const DirectCollaborationSection = () => {
  return (
    <section className="py-20 sm:py-28 border-b border-[rgba(180,170,255,0.14)]" id="collaboration">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
        
        {/* Section Head */}
        <div className="sec-head">
          <div>
            <h2>
              Làm việc trực tiếp với <span className="grad">người xây dựng</span>
            </h2>
          </div>
          <p>
            Bạn trao đổi thẳng với người trực tiếp thiết kế và lập trình website. Không qua nhiều cấp nhân viên kinh doanh hay quản lý trung gian, giúp thông tin luôn chính xác và phản hồi tức thì.
          </p>
        </div>

        {/* 2-Column Split: Editorial Commitments & Interactive Terminal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column (5 Cols): 3 Core Promises */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-7 rounded-2xl bg-[#0a0b14]/90 border border-[rgba(180,170,255,0.14)] space-y-5">
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#00e7ff] block">
                NGUYÊN TẮC HỢP TÁC
              </span>

              <div className="space-y-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-[15px] font-bold text-[#f3f2fb]">
                    <UserCheck size={16} className="text-[#00e7ff]" />
                    <span>Trực tiếp 1-1 từ đầu đến cuối</span>
                  </div>
                  <p className="text-[13px] text-[#a7a6c4] leading-relaxed pl-6">
                    Mọi ý kiến chỉnh sửa và câu hỏi kỹ thuật đều được xử lý ngay bởi chính lập trình viên.
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-[15px] font-bold text-[#f3f2fb]">
                    <ShieldCheck size={16} className="text-[#00e7ff]" />
                    <span>Toàn quyền sở hữu 100% mã nguồn</span>
                  </div>
                  <p className="text-[13px] text-[#a7a6c4] leading-relaxed pl-6">
                    Bàn giao đầy đủ source code sạch, khách hàng tự đứng tên tài khoản máy chủ và tên miền.
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-[15px] font-bold text-[#f3f2fb]">
                    <Zap size={16} className="text-[#00e7ff]" />
                    <span>Giới hạn tối đa 2 dự án đồng thời</span>
                  </div>
                  <p className="text-[13px] text-[#a7a6c4] leading-relaxed pl-6">
                    Dành trọn tâm huyết, kiểm thử kỹ lưỡng trên mọi kích thước màn hình và bàn giao đúng hẹn.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (7 Cols): BYLDR Style Command Terminal */}
          <div className="lg:col-span-7">
            <div className="rounded-xl overflow-hidden border border-[rgba(180,170,255,0.22)] bg-[#070810] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)]">
              
              {/* Terminal Window Header Chrome */}
              <div className="px-4 py-3 bg-[#0c0e18] border-b border-[rgba(180,170,255,0.12)] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
                  <span className="text-[12px] font-mono text-[#a7a6c4] ml-2 font-medium">
                    quanganh@studio: ~/workflow
                  </span>
                </div>
                <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest hidden sm:inline">
                  BASH · DIRECT 1-1
                </span>
              </div>

              {/* Terminal Execution Body */}
              <div className="p-5 sm:p-7 font-mono text-[13px] sm:text-[14px] space-y-4 leading-relaxed">
                <div>
                  <span className="text-[#00e7ff] font-bold">$</span>{' '}
                  <span className="text-[#f3f2fb]">quanganh brief</span>{' '}
                  <span className="text-[#ff00e7]">--client="bạn"</span>
                  <div className="text-[#a7a6c4] text-[12px] pl-4 mt-1">
                    ✔ Phân tích bài toán, xác định các tính năng cốt lõi & phạm vi cần làm
                  </div>
                </div>

                <div>
                  <span className="text-[#00e7ff] font-bold">$</span>{' '}
                  <span className="text-[#f3f2fb]">quanganh quote</span>{' '}
                  <span className="text-[#2a6bff]">--fixed-scope</span>{' '}
                  <span className="text-[#2a6bff]">--no-hidden-fees</span>
                  <div className="text-[#a7a6c4] text-[12px] pl-4 mt-1">
                    ✔ Báo giá trọn gói một lần duy nhất, thống nhất trước khi viết dòng code đầu tiên
                  </div>
                </div>

                <div>
                  <span className="text-[#00e7ff] font-bold">$</span>{' '}
                  <span className="text-[#f3f2fb]">quanganh build</span>{' '}
                  <span className="text-[#ff00e7]">--stack=react-ts</span>{' '}
                  <span className="text-[#00e7ff]">--perf=&lt;1s</span>
                  <div className="text-[#a7a6c4] text-[12px] pl-4 mt-1">
                    ✔ Lập trình giao diện chuẩn responsive, tối ưu CDN & gửi link demo xem tiến độ
                  </div>
                </div>

                <div>
                  <span className="text-[#00e7ff] font-bold">$</span>{' '}
                  <span className="text-[#f3f2fb]">quanganh ship</span>{' '}
                  <span className="text-[#27c93f]">--status=ready</span>{' '}
                  <span className="text-[#27c93f]">--warranty=12m</span>
                  <div className="text-[#a7a6c4] text-[12px] pl-4 mt-1">
                    ✔ Bàn giao toàn bộ source code sạch, hướng dẫn tự quản trị & bảo hành lâu dài
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-2 text-[#27c93f] text-[12px]">
                  <span className="w-2 h-2 rounded-full bg-[#27c93f] animate-ping" />
                  <span>Sẵn sàng tiếp nhận dự án mới trực tiếp cùng bạn.</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default DirectCollaborationSection;
