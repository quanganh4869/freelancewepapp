import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import { INITIAL_PROJECTS } from '../data/seedData';

export const ProjectsPage = () => {
  return (
    <div className="py-12 sm:py-16 md:py-20 font-sans animate-page-in">
      
      {/* =========================================================================
          PAGE HEADER / BEST PROJECTS
          Editorial Monograph Style
      ========================================================================= */}
      <header className="space-y-4 pb-12 sm:pb-16 border-b border-[#DAD0C7] dark:border-[#332B26]">
        <span className="text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.08em] text-[#82766F] dark:text-[#9E938B] block font-mono">
          SELECTED WORK / 2026
        </span>
        <h1 className="text-[44px] sm:text-[60px] md:text-[76px] font-[800] tracking-[-0.04em] text-[#38251F] dark:text-[#EDE6DE] leading-[0.98]">
          BEST PROJECTS
        </h1>
        <p className="text-[17px] sm:text-[19px] text-[#82766F] dark:text-[#9E938B] max-w-[760px] leading-[1.6]">
          Những website và ứng dụng tôi đã trực tiếp tham gia thiết kế giao diện, kiến trúc hệ thống và lập trình hoàn chỉnh. Tất cả hình ảnh đều là giao diện sản phẩm thực tế.
        </p>
      </header>

      {/* =========================================================================
          PROJECT CATALOGUE
          Large Authentic Screenshots, Static Visible On Scroll, No Sliders
      ========================================================================= */}
      <div className="divide-y divide-[#DAD0C7] dark:divide-[#332B26] space-y-20 sm:space-y-24 md:space-y-28">
        {INITIAL_PROJECTS.map((project, index) => (
          <article 
            key={project.id} 
            className={`space-y-8 ${index > 0 ? 'pt-20 sm:pt-24 md:pt-28' : 'pt-12 sm:pt-16'}`}
          >
            {/* Top: Metadata & Title & Narrative */}
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2 text-[12px] font-mono text-[#82766F] dark:text-[#9E938B]">
                <span>0{index + 1}</span>
                <span>/</span>
                <span className="uppercase">{project.category}</span>
                <span>·</span>
                <span className="text-[#38251F] dark:text-[#EDE6DE] font-semibold">{project.projectNature || project.client}</span>
                <span>·</span>
                <span>Năm {project.year}</span>
              </div>

              <h2 className="text-[30px] sm:text-[36px] md:text-[42px] font-bold text-[#38251F] dark:text-[#EDE6DE] leading-[1.15] tracking-tight">
                <Link 
                  to={`/projects/${project.slug}`}
                  className="hover:underline transition-all"
                >
                  {project.title}
                </Link>
              </h2>

              <p className="text-[16px] sm:text-[17px] text-[#422B25] dark:text-[#CFC4B8] leading-[1.7] max-w-[900px]">
                {project.shortDesc}
              </p>
            </div>

            {/* Visual Demo Showcase: Primary Large + Supplementary Static Grid */}
            <div className="space-y-6">
              
              {/* Primary Large Screenshot (Native Aspect Ratio, No Crop) */}
              <div className="space-y-2">
                <Link 
                  to={`/projects/${project.slug}`}
                  className="group block overflow-hidden rounded-[2px] border border-[#DAD0C7] dark:border-[#332B26] bg-[#FAF8F4] dark:bg-[#221D1A] transition-opacity duration-200 hover:opacity-[0.98]"
                  title={`Xem case study ${project.title}`}
                >
                  <img
                    src={project.primaryImage}
                    alt={project.primaryCaption || `Giao diện chính của ${project.title}`}
                    className="w-full h-auto object-contain transition-transform duration-300 ease-out group-hover:scale-[1.008]"
                    loading={index === 0 ? 'eager' : 'lazy'}
                  />
                </Link>
                {project.primaryCaption && (
                  <p className="text-[13px] text-[#82766F] dark:text-[#9E938B] leading-relaxed font-normal">
                    {project.primaryCaption}
                  </p>
                )}
              </div>

              {/* Supplementary Screenshots (Static 2-Column Grid, ~570-600px each) */}
              {project.secondaryImages && project.secondaryImages.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 pt-2">
                  {project.secondaryImages.slice(0, 2).map((sec, secIdx) => (
                    <div key={secIdx} className="space-y-2">
                      <Link 
                        to={`/projects/${project.slug}`}
                        className="group block overflow-hidden rounded-[2px] border border-[#DAD0C7] dark:border-[#332B26] bg-[#FAF8F4] dark:bg-[#221D1A] transition-opacity duration-200 hover:opacity-[0.98]"
                        title={`Xem case study ${project.title}`}
                      >
                        <img
                          src={sec.image}
                          alt={sec.caption || `${project.title} — Màn hình ${secIdx + 1}`}
                          className="w-full h-auto object-contain transition-transform duration-300 ease-out group-hover:scale-[1.01]"
                          loading="lazy"
                        />
                      </Link>
                      {sec.caption && (
                        <p className="text-[13px] text-[#82766F] dark:text-[#9E938B] leading-relaxed font-normal">
                          {sec.caption}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}

            </div>

            {/* Bottom: Plain Text Tech Stack & Single Primary Internal Action */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-[#DAD0C7]/80 dark:border-[#332B26]/80 pt-4">
              <div className="text-[14px] text-[#82766F] dark:text-[#9E938B]">
                <span className="font-semibold text-[#38251F] dark:text-[#EDE6DE]">Công nghệ: </span>
                <span>{project.techStack.join(' · ')}</span>
              </div>

              <div className="flex items-center gap-6">
                {/* Single Primary Action: Xem chi tiết dự án → */}
                <Link
                  to={`/projects/${project.slug}`}
                  className="text-[14px] sm:text-[15px] font-bold text-[#38251F] dark:text-[#EDE6DE] hover:text-[#985B3D] dark:hover:text-[#C0754F] transition-colors inline-flex items-center gap-1.5 min-h-[44px] py-1"
                >
                  <span>Xem case study chi tiết</span>
                  <ArrowRight size={15} />
                </Link>

                {/* Subtle external resource links if available */}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13px] text-[#82766F] hover:text-[#38251F] dark:hover:text-white transition-colors inline-flex items-center gap-1"
                    title="Truy cập website trực tiếp"
                  >
                    <span>Website</span>
                    <ExternalLink size={12} />
                  </a>
                )}

                {project.sourceUrl && (
                  <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13px] text-[#82766F] hover:text-[#38251F] dark:hover:text-white transition-colors inline-flex items-center gap-1"
                    title="Xem mã nguồn trên GitHub"
                  >
                    <Github size={13} />
                    <span>GitHub</span>
                  </a>
                )}
              </div>
            </div>

          </article>
        ))}
      </div>

    </div>
  );
};

export default ProjectsPage;
