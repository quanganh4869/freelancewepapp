import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import { ABOUT_DATA, INITIAL_PROJECTS } from '../data/seedData';

export default function AboutPage() {
  return (
    <div className="py-12 sm:py-16 md:py-20 font-sans animate-page-in">
      
      {/* =========================================================================
          01. INTRODUCTION / ABOUT ME
          Editorial 2-Column Monograph Style
      ========================================================================= */}
      <section className="pb-16 sm:pb-20 border-b border-[#DAD0C7] dark:border-[#332B26]">
        
        {/* Metadata + Huge Heading */}
        <div className="space-y-3 mb-12 sm:mb-16">
          <span className="text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.08em] text-[#82766F] dark:text-[#9E938B] block font-mono">
            01 — INTRODUCTION / PROFILE
          </span>
          <h1 className="text-[44px] sm:text-[60px] md:text-[76px] font-[800] tracking-[-0.04em] text-[#38251F] dark:text-[#EDE6DE] leading-[0.98]">
            ABOUT ME
          </h1>
          <p className="text-[17px] sm:text-[19px] text-[#82766F] dark:text-[#9E938B] max-w-[700px] leading-[1.6]">
            Lập trình viên độc lập, người trực tiếp thiết kế trải nghiệm và hiện thực hóa các sản phẩm web từ ý tưởng đến mã nguồn chạy thực tế.
          </p>
        </div>

        {/* 2-Column Editorial Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: First-Person Narrative */}
          <div className="lg:col-span-7 space-y-6 text-[16px] sm:text-[17px] text-[#422B25] dark:text-[#CFC4B8] leading-[1.75]">
            <p className="text-[20px] sm:text-[22px] font-semibold text-[#38251F] dark:text-[#EDE6DE] leading-snug">
              Tôi là Nguyễn Quang Anh. Tôi làm việc độc lập trong lĩnh vực thiết kế giao diện và phát triển phần mềm website.
            </p>
            <p>
              Khác với mô hình agency qua nhiều tầng quản lý dự án và nhân viên kinh doanh, khi làm việc với tôi, bạn trao đổi trực tiếp với người trực tiếp viết từng dòng mã cho sản phẩm của bạn. Điều này loại bỏ hoàn toàn sự sai lệch thông tin và đảm bảo mọi cam kết về kỹ thuật được thực hiện chính xác.
            </p>
            <p>
              Tôi duy trì nguyên tắc <strong className="font-bold text-[#38251F] dark:text-[#EDE6DE]">chỉ nhận tối đa 2 dự án cùng một thời điểm</strong>. Sự tập trung này cho phép tôi đào sâu vào chi tiết, tối ưu hóa tốc độ mở trang, kiểm thử kỹ lưỡng trên các thiết bị và bàn giao đúng thời hạn cam kết.
            </p>
            <p>
              Mọi giải pháp đều được giải thích bằng ngôn ngữ phổ thông, thực tế. Khách hàng không cần phải hiểu các thuật ngữ kỹ thuật phức tạp để có thể cùng tôi xây dựng một website hoàn chỉnh và ưng ý.
            </p>
          </div>

          {/* Right Column: Key Tenets & Authentic Visual */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 bg-[#FAF8F4] dark:bg-[#221D1A] border border-[#DAD0C7] dark:border-[#332B26] rounded-[2px] space-y-5">
              <span className="text-[12px] font-mono font-semibold uppercase tracking-wider text-[#82766F] dark:text-[#9E938B] block">
                NGUYÊN TẮC HÀNH NGHỀ
              </span>

              <div className="space-y-4 text-[15px] text-[#422B25] dark:text-[#CFC4B8]">
                <div className="space-y-1">
                  <h4 className="font-bold text-[#38251F] dark:text-[#EDE6DE]">1. Trực tiếp 1-1</h4>
                  <p className="text-[14px] text-[#82766F] dark:text-[#9E938B]">Không qua trung gian bán hàng. Người tư vấn chính là người viết code.</p>
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-[#38251F] dark:text-[#EDE6DE]">2. Chi phí minh bạch</h4>
                  <p className="text-[14px] text-[#82766F] dark:text-[#9E938B]">Báo giá trọn gói một lần theo khối lượng việc, không phụ phí phát sinh.</p>
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-[#38251F] dark:text-[#EDE6DE]">3. 100% sở hữu mã nguồn</h4>
                  <p className="text-[14px] text-[#82766F] dark:text-[#9E938B]">Khách hàng toàn quyền nắm giữ tài khoản tên miền, lưu trữ và toàn bộ source code.</p>
                </div>
              </div>
            </div>

            {/* Authentic Project Composition Peek */}
            <div className="space-y-2">
              <div className="overflow-hidden border border-[#DAD0C7] dark:border-[#332B26] bg-[#FFFFFF] dark:bg-[#1B1614] rounded-[2px]">
                <img
                  src="/images/projects/loi-ru/overview.png"
                  alt="Giao diện website truyện Lời Ru Của Ác Mộng"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
              </div>
              <span className="text-[11px] font-mono uppercase text-[#82766F] dark:text-[#9E938B] block">
                Sản phẩm thực tế: Lời Ru Của Ác Mộng (loiru.vercel.app)
              </span>
            </div>

          </div>

        </div>

      </section>

      {/* =========================================================================
          02. MY WORK EXPERIENCE / DỰ ÁN ĐÃ THỰC HIỆN
          Independent Development Track Record
      ========================================================================= */}
      <section className="py-16 sm:py-20 border-b border-[#DAD0C7] dark:border-[#332B26]">
        
        <div className="space-y-3 mb-10 sm:mb-12">
          <span className="text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.08em] text-[#82766F] dark:text-[#9E938B] block font-mono">
            02 — WORK EXPERIENCE / TRACK RECORD
          </span>
          <h2 className="text-[32px] sm:text-[44px] md:text-[52px] font-[800] tracking-tight text-[#38251F] dark:text-[#EDE6DE] leading-[1.05]">
            KINH NGHIỆM PHÁT TRIỂN
          </h2>
          <p className="text-[16px] text-[#82766F] dark:text-[#9E938B] max-w-[700px]">
            Quá trình nghiên cứu và xây dựng hoàn chỉnh các sản phẩm phần mềm độc lập, chứng thực năng lực thực chiến qua mã nguồn và sản phẩm thực tế.
          </p>
        </div>

        {/* 3 Chronological Milestones */}
        <div className="space-y-10 divide-y divide-[#DAD0C7] dark:divide-[#332B26]">
          
          <div className="pt-8 first:pt-0 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            <div className="md:col-span-4 space-y-1">
              <span className="text-[13px] font-mono text-[#82766F] dark:text-[#9E938B]">2026 · Đang vận hành</span>
              <h3 className="text-[22px] font-bold text-[#38251F] dark:text-[#EDE6DE]">Lời Ru Của Ác Mộng</h3>
              <span className="text-[14px] text-[#985B3D] font-medium block">Digital Storytelling Platform</span>
            </div>
            <div className="md:col-span-8 space-y-3 text-[15px] sm:text-[16px] text-[#422B25] dark:text-[#CFC4B8] leading-[1.7]">
              <p>
                Phát triển website truyện tương tác trực quan chuyển thể tác phẩm nghệ thuật của San Anh & Mr.Ngài. Lập trình engine hoạt họa phân cảnh đa tầng (layered animations), tối ưu chạm lướt trên di động và xuất bản trực tiếp lên mạng đám mây Vercel.
              </p>
              <div className="text-[13px] font-mono text-[#82766F] dark:text-[#9E938B]">
                Trạng thái: Vận hành trực tiếp tại <a href="https://loiru.vercel.app/" target="_blank" rel="noopener noreferrer" className="underline text-[#38251F] dark:text-[#EDE6DE]">loiru.vercel.app</a>
              </div>
            </div>
          </div>

          <div className="pt-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            <div className="md:col-span-4 space-y-1">
              <span className="text-[13px] font-mono text-[#82766F] dark:text-[#9E938B]">2026 · Hoàn thành</span>
              <h3 className="text-[22px] font-bold text-[#38251F] dark:text-[#EDE6DE]">RentFlow — Quản lý phòng trọ</h3>
              <span className="text-[14px] text-[#985B3D] font-medium block">SaaS Web Application</span>
            </div>
            <div className="md:col-span-8 space-y-3 text-[15px] sm:text-[16px] text-[#422B25] dark:text-[#CFC4B8] leading-[1.7]">
              <p>
                Thiết kế trải nghiệm người dùng và lập trình toàn diện hệ thống web app quản lý căn hộ dịch vụ và phòng cho thuê: sơ đồ lưới phòng thời gian thực, nhập chỉ số điện nước tự động tính tiền bậc thang và xuất hóa đơn số.
              </p>
              <div className="text-[13px] font-mono text-[#82766F] dark:text-[#9E938B]">
                Mã nguồn: <a href="https://github.com/quanganh4869/retalroom" target="_blank" rel="noopener noreferrer" className="underline text-[#38251F] dark:text-[#EDE6DE]">github.com/quanganh4869/retalroom</a>
              </div>
            </div>
          </div>

          <div className="pt-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            <div className="md:col-span-4 space-y-1">
              <span className="text-[13px] font-mono text-[#82766F] dark:text-[#9E938B]">2026 · Hoàn thành</span>
              <h3 className="text-[22px] font-bold text-[#38251F] dark:text-[#EDE6DE]">IELTS Learning Platform</h3>
              <span className="text-[14px] text-[#985B3D] font-medium block">Education Platform</span>
            </div>
            <div className="md:col-span-8 space-y-3 text-[15px] sm:text-[16px] text-[#422B25] dark:text-[#CFC4B8] leading-[1.7]">
              <p>
                Xây dựng kiến trúc frontend và phòng thi máy mô phỏng chuẩn Cambridge CDI cho kỹ năng Reading & Listening. Hiện thực thuật toán chấm điểm Band Score 0–9.0 và thuật toán ghi nhớ từ vựng Spaced Repetition (SRS).
              </p>
              <div className="text-[13px] font-mono text-[#82766F] dark:text-[#9E938B]">
                Mã nguồn: <a href="https://github.com/quanganh4869/ielts_learning" target="_blank" rel="noopener noreferrer" className="underline text-[#38251F] dark:text-[#EDE6DE]">github.com/quanganh4869/ielts_learning</a>
              </div>
            </div>
          </div>

        </div>

      </section>

      {/* =========================================================================
          03. MY PERSONAL SKILLS / NĂNG LỰC & CÔNG NGHỆ
          Clean Multi-Column Editorial Text Layout (No Badge Clutter)
      ========================================================================= */}
      <section className="py-16 sm:py-20 border-b border-[#DAD0C7] dark:border-[#332B26]">
        
        <div className="space-y-3 mb-12 sm:mb-14">
          <span className="text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.08em] text-[#82766F] dark:text-[#9E938B] block font-mono">
            03 — PERSONAL SKILLS
          </span>
          <h2 className="text-[34px] sm:text-[48px] md:text-[56px] font-[800] tracking-tight text-[#38251F] dark:text-[#EDE6DE] leading-[1.05]">
            MY PERSONAL SKILLS
          </h2>
          <p className="text-[16px] text-[#82766F] dark:text-[#9E938B] max-w-[680px]">
            Các nhóm kỹ năng và công nghệ được kiểm chứng trực tiếp qua những sản phẩm đã lập trình, không liệt kê tràn lan.
          </p>
        </div>

        {/* 3 Domain Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
          
          {/* Col 1: Frontend Architecture */}
          <div className="space-y-4 pt-4 border-t-2 border-[#38251F] dark:border-[#EDE6DE]">
            <span className="text-[12px] font-mono uppercase text-[#82766F] dark:text-[#9E938B]">
              LĨNH VỰC 01
            </span>
            <h3 className="text-[20px] font-bold text-[#38251F] dark:text-[#EDE6DE]">
              Frontend & UI Engineering
            </h3>
            <p className="text-[15px] text-[#82766F] dark:text-[#9E938B] leading-[1.6]">
              Thiết kế giao diện người dùng hiện đại, tối ưu tương tác chạm và độ mượt 60fps trên mọi thiết bị.
            </p>
            <div className="space-y-2 pt-2 text-[15px] font-medium text-[#38251F] dark:text-[#EDE6DE]">
              <div>— React 18 & TypeScript</div>
              <div>— Tailwind CSS & Responsive Design</div>
              <div>— Vite & Tối ưu Bundle Build</div>
              <div>— CSS Animations & Canvas Interaction</div>
            </div>
          </div>

          {/* Col 2: Backend & Database */}
          <div className="space-y-4 pt-4 border-t-2 border-[#38251F] dark:border-[#EDE6DE]">
            <span className="text-[12px] font-mono uppercase text-[#82766F] dark:text-[#9E938B]">
              LĨNH VỰC 02
            </span>
            <h3 className="text-[20px] font-bold text-[#38251F] dark:text-[#EDE6DE]">
              Backend & Data Integrity
            </h3>
            <p className="text-[15px] text-[#82766F] dark:text-[#9E938B] leading-[1.6]">
              Xây dựng API bảo mật, xử lý nghiệp vụ tính toán tài chính và thiết kế cơ sở dữ liệu quan hệ chuẩn hóa.
            </p>
            <div className="space-y-2 pt-2 text-[15px] font-medium text-[#38251F] dark:text-[#EDE6DE]">
              <div>— Spring Boot 3 & RESTful API</div>
              <div>— PostgreSQL 16 & ACID Transactions</div>
              <div>— JWT & Role-Based Access Control</div>
              <div>— Supabase & Cloud Storage</div>
            </div>
          </div>

          {/* Col 3: Workflow & Quality */}
          <div className="space-y-4 pt-4 border-t-2 border-[#38251F] dark:border-[#EDE6DE]">
            <span className="text-[12px] font-mono uppercase text-[#82766F] dark:text-[#9E938B]">
              LĨNH VỰC 03
            </span>
            <h3 className="text-[20px] font-bold text-[#38251F] dark:text-[#EDE6DE]">
              Deployment & Delivery
            </h3>
            <p className="text-[15px] text-[#82766F] dark:text-[#9E938B] leading-[1.6]">
              Quy trình đóng gói gọn gàng, đưa sản phẩm lên internet với độ trễ thấp và cấu hình chuẩn SEO Google.
            </p>
            <div className="space-y-2 pt-2 text-[15px] font-medium text-[#38251F] dark:text-[#EDE6DE]">
              <div>— Vercel Edge Network Deployment</div>
              <div>— Docker Compose Containerization</div>
              <div>— Web Vitals & Tốc độ tải dưới 1s</div>
              <div>— SEO Onpage & Semantic HTML5</div>
            </div>
          </div>

        </div>

      </section>

      {/* =========================================================================
          04. WHAT IS NOT ACCEPTED / DỰ ÁN TỪ CHỐI
          Transparent Boundary Setting
      ========================================================================= */}
      <section className="py-16 sm:py-20 border-b border-[#DAD0C7] dark:border-[#332B26]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5 space-y-2">
            <span className="text-[11px] font-mono uppercase text-[#82766F] dark:text-[#9E938B]">
              MINH BẠCH GIỚI HẠN
            </span>
            <h2 className="text-[28px] sm:text-[34px] font-bold text-[#38251F] dark:text-[#EDE6DE] leading-snug">
              Những dự án tôi không nhận
            </h2>
            <p className="text-[15px] text-[#82766F] dark:text-[#9E938B]">
              Để tránh làm mất thời gian quý báu của bạn, tôi luôn làm rõ những phạm vi công việc nằm ngoài định hướng solo developer.
            </p>
          </div>

          <div className="lg:col-span-7 space-y-4">
            {ABOUT_DATA.notAccepted.map((item, idx) => (
              <div key={idx} className="p-5 bg-[#FAF8F4] dark:bg-[#221D1A] border border-[#DAD0C7] dark:border-[#332B26] rounded-[2px] text-[15px] text-[#422B25] dark:text-[#CFC4B8] leading-relaxed">
                <span className="font-bold text-[#38251F] dark:text-[#EDE6DE] mr-2">✕</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          05. NEXT STEPS & NAVIGATION
      ========================================================================= */}
      <section className="pt-16 sm:pt-20 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div className="space-y-1">
          <h3 className="text-[22px] font-bold text-[#38251F] dark:text-[#EDE6DE]">
            Khám phá các sản phẩm đã hoàn thành
          </h3>
          <p className="text-[15px] text-[#82766F] dark:text-[#9E938B]">
            Xem giao diện chi tiết và phân tích giải pháp kỹ thuật cho từng dự án.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Link
            to="/projects"
            className="btn-primary py-3 px-5 text-[14px] font-semibold"
          >
            <span>Xem trang Dự án</span>
            <ArrowRight size={14} />
          </Link>
          <Link
            to="/start-project"
            className="btn-secondary py-3 px-5 text-[14px] font-semibold"
          >
            <span>Yêu cầu làm website</span>
          </Link>
        </div>
      </section>

    </div>
  );
}
