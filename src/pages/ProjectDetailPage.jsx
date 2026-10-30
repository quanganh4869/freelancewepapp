import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, ArrowRight } from 'lucide-react';
import { INITIAL_PROJECTS } from '../data/seedData';

export const ProjectDetailPage = () => {
  const { slug } = useParams();
  const project = INITIAL_PROJECTS.find((p) => p.slug === slug || p.id === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const crpr = project.crpr;

  return (
    <div className="py-10 sm:py-14 md:py-20 font-sans animate-page-in">
      
      {/* 1. Back Navigation Link */}
      <div className="mb-10 sm:mb-14 pb-4 border-b border-[#DAD0C7] dark:border-[#332B26]">
        <Link
          to="/projects"
          className="text-[13px] sm:text-[14px] text-[#82766F] hover:text-[#38251F] dark:hover:text-[#EDE6DE] transition-colors inline-flex items-center gap-2 font-medium min-h-[44px] py-1"
        >
          <ArrowLeft size={16} />
          <span>Quay lại danh mục dự án</span>
        </Link>
      </div>

      {/* 2. Project Header (Monograph Chapter Style, max-w-[880px]) */}
      <header className="space-y-4 max-w-[880px] mb-10 sm:mb-14">
        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-[13px] font-mono text-[#82766F] dark:text-[#9E938B]">
          <span className="uppercase font-semibold">{project.category}</span>
          <span>·</span>
          <span className="text-[#38251F] dark:text-[#EDE6DE] font-semibold">{project.projectNature || project.client}</span>
          <span>·</span>
          <span>Năm {project.year}</span>
        </div>

        <h1 className="text-[32px] sm:text-[40px] md:text-[48px] font-[800] tracking-[-0.035em] text-[#38251F] dark:text-[#EDE6DE] leading-[1.1]">
          {project.title}
        </h1>

        <p className="text-[17px] sm:text-[18px] text-[#422B25] dark:text-[#CFC4B8] font-normal leading-[1.7] pt-1">
          {project.shortDesc}
        </p>
      </header>

      {/* 3. Primary Visual Showcase (Single large authentic screenshot) */}
      <div className="mb-16 sm:mb-20">
        <div className="w-full rounded-[2px] overflow-hidden border border-[#DAD0C7] dark:border-[#332B26] bg-[#FAF8F4] dark:bg-[#1E1916]">
          <img
            src={project.primaryImage}
            alt={project.title}
            className="w-full h-auto object-contain block max-h-[740px] mx-auto"
            loading="eager"
          />
        </div>
        {project.primaryCaption && (
          <p className="mt-3 text-xs sm:text-sm text-[#82766F] dark:text-[#9E938B] font-mono">
            {project.primaryCaption}
          </p>
        )}
      </div>

      {/* 4. Deep Editorial CRPR Case Study (max-w-[880px]) */}
      <article className="max-w-[880px] space-y-16 sm:space-y-20 border-t border-[#DAD0C7] dark:border-[#332B26] pt-12 sm:pt-16">

        {/* Section 1: Context (Bối cảnh & Bài toán) */}
        {crpr?.context && (
          <section className="space-y-4">
            <div className="text-[12px] font-mono font-bold uppercase tracking-[0.08em] text-[#82766F] dark:text-[#9E938B]">
              01. CONTEXT — BỐI CẢNH & BÀI TOÁN THỰC TẾ
            </div>
            <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold tracking-tight text-[#38251F] dark:text-[#EDE6DE] leading-[1.25]">
              {crpr.context.headline}
            </h2>
            <div className="text-[16px] sm:text-[17px] text-[#422B25] dark:text-[#CFC4B8] leading-[1.75] space-y-3">
              <p>{crpr.context.problem}</p>
              <p>
                <strong className="font-semibold text-[#38251F] dark:text-[#EDE6DE]">Người dùng mục tiêu: </strong>
                {crpr.context.targetUsers}
              </p>
              <p>
                <strong className="font-semibold text-[#38251F] dark:text-[#EDE6DE]">Hướng tiếp cận giải pháp: </strong>
                {crpr.context.approach}
              </p>
            </div>
          </section>
        )}

        {/* Section 2: Role (Vai trò & Phạm vi đảm nhiệm) */}
        {crpr?.role && (
          <section className="space-y-4 border-t border-[#DAD0C7]/80 dark:border-[#332B26]/80 pt-12 sm:pt-14">
            <div className="text-[12px] font-mono font-bold uppercase tracking-[0.08em] text-[#82766F] dark:text-[#9E938B]">
              02. ROLE — VAI TRÒ & PHẠM VI ĐẢM NHIỆM
            </div>
            <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold tracking-tight text-[#38251F] dark:text-[#EDE6DE] leading-[1.25]">
              {crpr.role.title}
            </h2>
            <p className="text-[16px] sm:text-[17px] text-[#422B25] dark:text-[#CFC4B8] leading-[1.75]">
              {crpr.role.scope}
            </p>
            <div className="pt-2">
              <h3 className="text-[14px] font-bold text-[#38251F] dark:text-[#EDE6DE] mb-3 uppercase tracking-wider font-mono">
                Các đầu việc chính đã thực hiện:
              </h3>
              <ul className="space-y-3 text-[16px] text-[#422B25] dark:text-[#CFC4B8] leading-[1.7] pl-5 list-disc marker:text-[#82766F]">
                {crpr.role.responsibilities.map((resp, idx) => (
                  <li key={idx} className="pl-1">
                    {resp}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Section 3: Process (Quy trình phát triển & Quyết định kỹ thuật) */}
        {crpr?.process && (
          <section className="space-y-6 border-t border-[#DAD0C7]/80 dark:border-[#332B26]/80 pt-12 sm:pt-14">
            <div className="text-[12px] font-mono font-bold uppercase tracking-[0.08em] text-[#82766F] dark:text-[#9E938B]">
              03. PROCESS — QUY TRÌNH PHÁT TRIỂN & KỸ THUẬT
            </div>
            <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold tracking-tight text-[#38251F] dark:text-[#EDE6DE] leading-[1.25]">
              {crpr.process.headline}
            </h2>

            {/* Step-by-step Stages */}
            <div className="space-y-6 pt-2 divide-y divide-[#DAD0C7]/60 dark:divide-[#332B26]/60">
              {crpr.process.stages.map((stage, idx) => (
                <div key={idx} className="space-y-2 pt-4 first:pt-0">
                  <h3 className="text-[17px] font-bold text-[#38251F] dark:text-[#EDE6DE]">
                    {stage.phase}
                  </h3>
                  <p className="text-[16px] text-[#422B25] dark:text-[#CFC4B8] leading-[1.75]">
                    {stage.detail}
                  </p>
                </div>
              ))}
            </div>

            {/* Key Technical Decision */}
            {crpr.process.keyDecisions && (
              <div className="mt-4 pt-4 border-t border-[#DAD0C7] dark:border-[#332B26]">
                <h4 className="text-[13px] font-mono font-bold text-[#38251F] dark:text-[#EDE6DE] mb-1.5 uppercase tracking-wider">
                  Quyết định kỹ thuật then chốt:
                </h4>
                <p className="text-[16px] text-[#422B25] dark:text-[#CFC4B8] leading-[1.75]">
                  {crpr.process.keyDecisions}
                </p>
              </div>
            )}
          </section>
        )}

        {/* Section 4: Result (Kết quả nghiệm thu & Trạng thái) */}
        {crpr?.result && (
          <section className="space-y-4 border-t border-[#DAD0C7]/80 dark:border-[#332B26]/80 pt-12 sm:pt-14">
            <div className="text-[12px] font-mono font-bold uppercase tracking-[0.08em] text-[#82766F] dark:text-[#9E938B]">
              04. RESULT — KẾT QUẢ NGHIỆM THU & TRẠNG THÁI
            </div>
            <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold tracking-tight text-[#38251F] dark:text-[#EDE6DE] leading-[1.25]">
              {crpr.result.headline}
            </h2>

            <div className="py-3 px-4 rounded-[2px] border border-[#DAD0C7] dark:border-[#332B26] bg-[#FAF8F4] dark:bg-[#221D1A] text-[14px] font-medium text-[#38251F] dark:text-[#EDE6DE]">
              <span className="text-[#82766F] mr-2">Trạng thái triển khai:</span>
              <span>{crpr.result.status}</span>
            </div>

            <div className="pt-2">
              <h3 className="text-[13px] font-mono font-bold text-[#38251F] dark:text-[#EDE6DE] mb-3 uppercase tracking-wider">
                Hạng mục đã hoàn thiện & chứng thực:
              </h3>
              <ul className="space-y-2.5 text-[16px] text-[#422B25] dark:text-[#CFC4B8] leading-[1.7] pl-5 list-disc marker:text-[#82766F]">
                {crpr.result.deliverables.map((item, idx) => (
                  <li key={idx} className="pl-1">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {crpr.result.honestMetrics && (
              <p className="text-[14px] text-[#82766F] dark:text-[#9E938B] italic pt-3 border-t border-[#DAD0C7] dark:border-[#332B26]">
                {crpr.result.honestMetrics}
              </p>
            )}
          </section>
        )}

        {/* Section 5: Tech Stack & Project Resources */}
        <section className="space-y-4 border-t border-[#DAD0C7]/80 dark:border-[#332B26]/80 pt-12 sm:pt-14">
          <h2 className="text-[20px] sm:text-[22px] font-bold tracking-tight text-[#38251F] dark:text-[#EDE6DE]">
            Công nghệ sử dụng & Tài nguyên mã nguồn
          </h2>

          <div className="flex flex-wrap gap-2 pt-1 text-[13px]">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-[2px] border border-[#DAD0C7] dark:border-[#332B26] text-[#38251F] dark:text-[#EDE6DE] bg-[#FAF8F4] dark:bg-[#221D1A] font-mono"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="space-y-2 text-sm pt-3">
            {project.liveUrl && (
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[#82766F]">Website đang hoạt động:</span>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#38251F] dark:text-[#EDE6DE] underline hover:text-[#985B3D] inline-flex items-center gap-1.5 min-h-[44px] py-1"
                >
                  <span>{project.liveUrl}</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            )}

            {project.sourceUrl && (
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[#82766F]">Mã nguồn trên GitHub:</span>
                <a
                  href={project.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#38251F] dark:text-[#EDE6DE] underline hover:text-[#985B3D] inline-flex items-center gap-1.5 min-h-[44px] py-1"
                >
                  <span>{project.sourceUrl.replace('https://github.com/', '')}</span>
                  <Github size={14} />
                </a>
              </div>
            )}
          </div>
        </section>

        {/* Section 6: Client Acquisition & Inquiry CTA (High-conversion footer) */}
        <section className="mt-14 pt-10 sm:pt-12 border-t-2 border-[#38251F] dark:border-[#EDE6DE]">
          <div className="space-y-4">
            <span className="text-[12px] font-mono font-bold uppercase tracking-[0.08em] text-[#82766F] dark:text-[#9E938B]">
              HỢP TÁC & TIẾP NHẬN YÊU CẦU
            </span>

            <h3 className="text-[24px] sm:text-[28px] font-bold text-[#38251F] dark:text-[#EDE6DE] leading-tight">
              {crpr?.cta?.prompt || `Bạn đang có ý tưởng phát triển sản phẩm tương tự ${project.title}?`}
            </h3>

            <p className="text-[16px] text-[#82766F] dark:text-[#9E938B] leading-[1.7]">
              Hãy chia sẻ mô hình hoặc bài toán website bạn muốn xây dựng. Tôi sẽ trực tiếp tư vấn giải pháp kỹ thuật, phân tích tính khả thi và ước lượng chi phí minh bạch cho bạn.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                to={`/start-project?reference=${encodeURIComponent(project.title)}&service=${crpr?.cta?.targetService || 'custom-webapp'}`}
                className="btn-primary py-3 px-6 text-[14px] font-semibold inline-flex items-center justify-center gap-2 min-h-[46px]"
              >
                <span>{crpr?.cta?.buttonText || 'Trao đổi về dự án tương tự'}</span>
                <ArrowRight size={16} />
              </Link>

              <Link
                to="/projects"
                className="btn-secondary py-3 px-5 text-[14px] font-semibold inline-flex items-center justify-center gap-2 min-h-[46px]"
              >
                <span>Xem các dự án khác</span>
              </Link>
            </div>
          </div>
        </section>

      </article>
    </div>
  );
};

export default ProjectDetailPage;
