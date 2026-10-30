import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, RefreshCw, ArrowRight } from 'lucide-react';

export const StartProjectSection = () => {
  return (
    <section className="audit py-20 sm:py-28 border-b border-[rgba(180,170,255,0.14)]" id="audit">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
        
        {/* Section Head */}
        <div className="sec-head">
          <div>
            <h2>
              Let's build <span className="grad">yours</span>
            </h2>
          </div>
        </div>

        {/* 2 Lane Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          
          {/* Lane 1: Start From Scratch */}
          <div className="group relative p-8 sm:p-10 rounded-2xl bg-[#0a0b14] border border-[rgba(180,170,255,0.18)] hover:border-[#00e7ff]/50 transition-all duration-300 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#00e7ff]/10 border border-[#00e7ff]/30 text-[#00e7ff] flex items-center justify-center">
                <Sparkles size={22} />
              </div>

              <span className="text-[11px] font-mono uppercase tracking-widest text-[#00e7ff] block">
                LỰA CHỌN 01 · TỪ Ý TƯỞNG ĐẾN SẢN PHẨM
              </span>

              <h3 className="font-disp font-bold text-[26px] sm:text-[30px] text-[#f3f2fb] leading-snug">
                Bắt đầu từ đầu
              </h3>

              <p className="text-[15px] text-[#a7a6c4] leading-relaxed">
                Dành cho bạn khi chưa có website và muốn xây dựng một sản phẩm hoàn chỉnh: từ định hình cấu trúc, thiết kế giao diện chuẩn thương hiệu đến lập trình chức năng và xuất bản tên miền.
              </p>

              <ul className="space-y-2 text-[13px] font-mono text-[#f3f2fb]/80 pt-2">
                <li className="flex items-center gap-2">
                  <span className="text-[#00e7ff]">✦</span>
                  <span>Chưa có website hoặc mới khởi nghiệp</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#00e7ff]">✦</span>
                  <span>Thiết kế độc bản theo phong cách riêng</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#00e7ff]">✦</span>
                  <span>Bàn giao 100% mã nguồn và quyền sở hữu</span>
                </li>
              </ul>
            </div>

            <div>
              <Link
                to="/start-project?type=new"
                className="btn-prism w-full text-center"
              >
                <span>Bắt đầu từ trang trắng</span>
                <span className="font-bold">↗</span>
              </Link>
            </div>
          </div>

          {/* Lane 2: Upgrade Existing Site */}
          <div className="group relative p-8 sm:p-10 rounded-2xl bg-[#0a0b14] border border-[rgba(180,170,255,0.18)] hover:border-[#ff00e7]/50 transition-all duration-300 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#ff00e7]/10 border border-[#ff00e7]/30 text-[#ff00e7] flex items-center justify-center">
                <RefreshCw size={22} />
              </div>

              <span className="text-[11px] font-mono uppercase tracking-widest text-[#ff00e7] block">
                LỰA CHỌN 02 · TỐI ƯU & HIỆN ĐẠI HÓA
              </span>

              <h3 className="font-disp font-bold text-[26px] sm:text-[30px] text-[#f3f2fb] leading-snug">
                Nâng cấp website hiện tại
              </h3>

              <p className="text-[15px] text-[#a7a6c4] leading-relaxed">
                Dành cho bạn khi đã có website nhưng giao diện đã lỗi thời, tốc độ tải chậm, hiển thị kém trên điện thoại hoặc cần thêm các tính năng nghiệp vụ mới phục vụ kinh doanh.
              </p>

              <ul className="space-y-2 text-[13px] font-mono text-[#f3f2fb]/80 pt-2">
                <li className="flex items-center gap-2">
                  <span className="text-[#ff00e7]">✦</span>
                  <span>Tái thiết kế giao diện hiện đại & cao cấp</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#ff00e7]">✦</span>
                  <span>Tăng tốc độ tải trang dưới 1 giây</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#ff00e7]">✦</span>
                  <span>Giữ nguyên nội dung và thứ hạng tên miền</span>
                </li>
              </ul>
            </div>

            <div>
              <Link
                to="/start-project?type=existing_website"
                className="btn-secondary w-full text-center"
              >
                <span>Nâng cấp website đang có</span>
                <span className="font-bold">↗</span>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default StartProjectSection;
