import React from 'react';
import { 
  GraduationCap, 
  Briefcase, 
  Code2, 
  MapPin, 
  Mail, 
  Phone, 
  Github, 
  CheckCircle2, 
  Terminal, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { ABOUT_DATA } from '../../data/seedData';

export const AboutProfileSection = () => {
  return (
    <section className="py-20 sm:py-28 border-b border-[rgba(180,170,255,0.14)] relative overflow-hidden" id="about">
      
      {/* Background Accent Ambient Glow */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-gradient-to-br from-[#00e7ff]/10 via-[#2a6bff]/10 to-[#ff00e7]/10 blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
        
        {/* Section Head (BYLDR Style) */}
        <div className="sec-head">
          <div>
            <span className="idx">{'{ 01.5 } — Profile & Background'}</span>
            <h2>
              Về <span className="grad">Quang Anh</span>
            </h2>
          </div>
          <p>
            Software Engineer tốt nghiệp Đại học CNTT & Truyền thông Việt - Hàn (VKU), từng làm Backend Developer tại PICON Technology. Làm việc độc lập, trực tiếp 1-1 với khách hàng từ ý tưởng đến mã nguồn chạy thực tế.
          </p>
        </div>

        {/* Profile Card & Bio Spread (Grid Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start pt-2">
          
          {/* Left Column (5 Cols): Real Photo Avatar & Quick Meta Card */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Real Portrait Avatar Frame with BYLDR Prism Border - CLEAN, NO OVERLAY TEXT */}
            <div className="relative group p-[2px] rounded-3xl bg-gradient-to-tr from-[#00e7ff] via-[#2a6bff] to-[#ff00e7] shadow-[0_20px_50px_-15px_rgba(0,231,255,0.25)]">
              <div className="relative rounded-[22px] overflow-hidden bg-[#0a0b14] p-3">
                <div className="aspect-square w-full rounded-2xl overflow-hidden bg-[#05060c] relative">
                  <img
                    src={ABOUT_DATA.avatar || '/images/avatar.jpg'}
                    alt={ABOUT_DATA.name}
                    className="w-full h-full object-cover object-top filter brightness-[1.02] contrast-[1.03] transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
              </div>
            </div>

            {/* Status Badge PLACED OUTSIDE PHOTO */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-[#0a0b14] border border-[rgba(180,170,255,0.14)] text-[12px] font-mono">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00e7ff] animate-ping" />
                <span className="text-[#f3f2fb] font-semibold">Available for Projects</span>
              </div>
              <span className="text-[#a7a6c4] text-[11px]">Đà Nẵng, VN</span>
            </div>

            {/* Quick Contact & Verified Identity Box */}
            <div className="p-6 rounded-2xl bg-[#0a0b14] border border-[rgba(180,170,255,0.14)] space-y-3.5 text-[13px] font-mono">
              <div className="flex items-center gap-3 text-[#a7a6c4]">
                <MapPin size={16} className="text-[#00e7ff] shrink-0" />
                <span className="text-[#f3f2fb]">{ABOUT_DATA.location}</span>
              </div>

              <div className="flex items-center gap-3 text-[#a7a6c4]">
                <Phone size={16} className="text-[#00e7ff] shrink-0" />
                <a href={`tel:${ABOUT_DATA.phone.replace(/\s+/g, '')}`} className="text-[#f3f2fb] hover:text-[#00e7ff] transition-colors">
                  {ABOUT_DATA.phone} (Zalo)
                </a>
              </div>

              <div className="flex items-center gap-3 text-[#a7a6c4]">
                <Mail size={16} className="text-[#00e7ff] shrink-0" />
                <a href={`mailto:${ABOUT_DATA.email}`} className="text-[#f3f2fb] hover:text-[#00e7ff] transition-colors truncate">
                  {ABOUT_DATA.email}
                </a>
              </div>

              <div className="flex items-center gap-3 text-[#a7a6c4]">
                <Github size={16} className="text-[#00e7ff] shrink-0" />
                <a href={ABOUT_DATA.github} target="_blank" rel="noopener noreferrer" className="text-[#f3f2fb] hover:text-[#00e7ff] transition-colors truncate">
                  github.com/quanganh4869
                </a>
              </div>

              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-[#a7a6c4]">
                <span>Ngoại ngữ:</span>
                <span className="text-[#00e7ff] font-semibold">{ABOUT_DATA.skillsCategorized?.language || 'English (B1)'}</span>
              </div>
            </div>

            {/* 3D Developer Coding Illustration (Integrated in Profile Column) */}
            <div className="character-card pt-2 flex flex-col items-center">
              <div className="w-full max-w-[340px] sm:max-w-[380px]">
                <img
                  src="/assets/about-developer.png"
                  alt="Minh họa nhân vật 3D lập trình viên đang phát triển phần mềm hiện đại"
                  width={1200}
                  height={896}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-contain select-none pointer-events-none drop-shadow-[0_20px_30px_rgba(0,0,0,0.6)]"
                />
              </div>
            </div>

          </div>

          {/* Right Column (7 Cols): Detailed Narrative, Experience & Education */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* First-Person Bio & Stance */}
            <div className="space-y-4 text-[16px] text-[#a7a6c4] leading-[1.75]">
              <div className="space-y-1">
                <span className="text-[12px] font-mono uppercase tracking-widest text-[#00e7ff]">
                  SOFTWARE ENGINEER · FREELANCE DEVELOPER
                </span>
                <h3 className="font-disp font-bold text-[28px] sm:text-[34px] text-[#f3f2fb] leading-tight">
                  Nguyễn Quang Anh
                </h3>
              </div>

              <p className="text-[#f3f2fb] text-[17px] font-medium leading-relaxed">
                Tôi là kỹ sư phần mềm định hướng phát triển sản phẩm web toàn diện (Full-Stack &amp; Backend). Tôi theo đuổi phong cách lập trình thực tế: giao diện chuẩn xác, logic backend vững chắc, tốc độ tải trang dưới 1 giây và giải quyết đúng bài toán nghiệp vụ của bạn.
              </p>

              <p>
                Khác với các công ty agency qua nhiều tầng quản lý dự án hay nhân viên kinh doanh trung gian, khi làm việc với tôi, bạn trao đổi trực tiếp 1-1 với người viết từng dòng code. Mọi yêu cầu hay phản hồi đều được tiếp nhận và xử lý tức thì, không có khoảng cách hiểu lầm.
              </p>

              <p>
                Tôi tuân thủ nguyên tắc <strong className="text-[#f3f2fb] font-semibold">chỉ nhận tối đa 2 dự án cùng một thời điểm</strong> để tập trung trọn vẹn chất lượng, kiểm thử kỹ lưỡng và bàn giao đúng hẹn. Sau nghiệm thu, bạn nắm toàn quyền sở hữu 100% mã nguồn.
              </p>
            </div>

            {/* Experience & Education Timeline */}
            <div className="space-y-5 pt-2">
              <span className="text-[12px] font-mono uppercase tracking-widest text-[#00e7ff] block">
                KINH NGHIỆM LÀM VIỆC &amp; HỌC VẤN (TỪ CV CHÍNH THỨC)
              </span>

              {/* 1. Work Experience: PICON Technology */}
              <div className="p-6 rounded-2xl bg-[#0a0b14] border border-[rgba(180,170,255,0.14)] space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#2a6bff]/15 text-[#2a6bff] flex items-center justify-center">
                      <Briefcase size={16} />
                    </div>
                    <div>
                      <h4 className="font-disp font-bold text-[16px] text-[#f3f2fb]">
                        PICON TECHNOLOGY CO., LTD.
                      </h4>
                      <span className="text-[12px] font-mono text-[#00e7ff]">
                        Backend Developer
                      </span>
                    </div>
                  </div>
                  <span className="text-[12px] font-mono text-[#a7a6c4]">
                    Năm 2026
                  </span>
                </div>

                <p className="text-[14px] text-[#a7a6c4] leading-relaxed">
                  Tham gia phát triển các ứng dụng web backend mở rộng, hiệu năng cao trong môi trường Agile/Scrum. Xây dựng RESTful API với Python &amp; FastAPI, tối ưu hóa truy vấn PostgreSQL ORM và thực thi bảo mật JWT &amp; Role-Based Access Control (RBAC).
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[12px] font-mono text-[#f3f2fb]/90 pt-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[#00e7ff]">✦</span>
                    <span>RESTful APIs with Python &amp; FastAPI</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[#00e7ff]">✦</span>
                    <span>PostgreSQL &amp; SQLAlchemy ORM</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[#00e7ff]">✦</span>
                    <span>JWT Auth &amp; Role-Based Access Control</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[#00e7ff]">✦</span>
                    <span>Git/GitHub &amp; Code Review</span>
                  </div>
                </div>
              </div>

              {/* 2. Featured Project: Interview AI */}
              <div className="p-6 rounded-2xl bg-[#0a0b14] border border-[rgba(180,170,255,0.14)] space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#ff00e7]/15 text-[#ff00e7] flex items-center justify-center">
                      <Sparkles size={16} />
                    </div>
                    <div>
                      <h4 className="font-disp font-bold text-[16px] text-[#f3f2fb]">
                        Interview AI (Personal Project)
                      </h4>
                      <span className="text-[12px] font-mono text-[#ff00e7]">
                        Full-Stack AI-Powered Mock Interview Platform
                      </span>
                    </div>
                  </div>
                  <a
                    href="https://github.com/quanganh4869/InterviewAI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[12px] font-mono text-[#00e7ff] hover:underline inline-flex items-center gap-1"
                  >
                    <span>GitHub</span>
                    <ArrowRight size={12} />
                  </a>
                </div>

                <p className="text-[14px] text-[#a7a6c4] leading-relaxed">
                  Nền tảng phỏng vấn thử nghiệm bằng AI: Phân tích CV và JD bằng OCR &amp; semantic similarity, tự động sinh bộ câu hỏi cá nhân hóa, phỏng vấn thời gian thực bằng giọng nói (Whisper STT) và xuất báo cáo đánh giá tự động.
                </p>

                <div className="text-[11px] font-mono text-[#7c7ba0]">
                  Tech stack: ReactJS, Vite, Tailwind, Framer Motion, FastAPI, SQLAlchemy, PostgreSQL, Gemini API, Whisper, Cloudflare R2, Docker.
                </div>
              </div>

              {/* 3. Education: Vietnam - Korea University VKU */}
              <div className="p-6 rounded-2xl bg-[#0a0b14] border border-[rgba(180,170,255,0.14)] space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#00e7ff]/15 text-[#00e7ff] flex items-center justify-center">
                      <GraduationCap size={16} />
                    </div>
                    <div>
                      <h4 className="font-disp font-bold text-[16px] text-[#f3f2fb]">
                        Đại học Công nghệ Thông tin &amp; Truyền thông Việt - Hàn (VKU)
                      </h4>
                      <span className="text-[12px] font-mono text-[#a7a6c4]">
                        Chuyên ngành: Công nghệ Thông tin (Information Technology)
                      </span>
                    </div>
                  </div>
                  <span className="text-[12px] font-mono text-[#27c93f] font-semibold">
                    2022 – 2026 · Khá / Giỏi
                  </span>
                </div>
              </div>

            </div>

            {/* Categorized Technical Skills Chips */}
            <div className="space-y-4 pt-4">
              <span className="text-[12px] font-mono uppercase tracking-widest text-[#00e7ff] block">
                MA TRẬN KỸ NĂNG KỸ THUẬT
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-[13px] font-mono">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-1.5">
                  <span className="text-[#00e7ff] font-semibold block text-[11px] uppercase">Backend Development</span>
                  <p className="text-[#f3f2fb]">Python (FastAPI), Java (Spring Boot), Kotlin, SQLAlchemy ORM, Alembic</p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-1.5">
                  <span className="text-[#2a6bff] font-semibold block text-[11px] uppercase">Frontend &amp; UI/UX</span>
                  <p className="text-[#f3f2fb]">ReactJS, TypeScript, Vite, Tailwind CSS, Framer Motion, Flutter</p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-1.5">
                  <span className="text-[#8b3bff] font-semibold block text-[11px] uppercase">Database &amp; Storage</span>
                  <p className="text-[#f3f2fb]">PostgreSQL 16, MySQL, Supabase, Cloudflare R2, Redis</p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-1.5">
                  <span className="text-[#ff00e7] font-semibold block text-[11px] uppercase">DevOps, Cloud &amp; AI</span>
                  <p className="text-[#f3f2fb]">Docker, Git, Railway, Cloudflare, AWS, Gemini API, Whisper, OCR</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutProfileSection;
