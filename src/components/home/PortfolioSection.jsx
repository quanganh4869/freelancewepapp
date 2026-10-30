import React, { useState } from 'react';
import { INITIAL_PROJECTS } from '../../data/seedData';
import { ProjectDetailModal } from './ProjectDetailModal';
import { ExternalLink, Github, ArrowRight, Eye, Code2, Sparkles, Layers } from 'lucide-react';

export const PortfolioSection = ({ onOpenRequestModal }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Separate featured live project from engineering repositories
  const liveProject = INITIAL_PROJECTS.find(p => p.isLive) || INITIAL_PROJECTS[2];
  const repoProjects = INITIAL_PROJECTS.filter(p => p.id !== liveProject?.id);

  return (
    <section id="du-an" className="py-16 md:py-24 border-b border-brand-border font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-left space-y-3 reveal max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D05021]/10 text-[#D05021] text-xs font-bold">
            <Sparkles size={13} />
            <span>Sản phẩm phát triển thực tế</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-primary dark:text-white">
            Các dự án tiêu biểu do Quang Anh trực tiếp phát triển
          </h2>
          <p className="text-brand-muted text-sm sm:text-base leading-relaxed font-medium">
            Thông tin minh bạch về mục đích, các chức năng đã hoàn thành và mã nguồn hoặc website đang chạy thực tế.
          </p>
        </div>

        {/* FEATURED PROJECT: Lời Ru Của Ác Mộng (Live Production Website) */}
        {liveProject && (
          <div className="rounded-3xl border border-brand-border bg-brand-paper dark:bg-studio-900 overflow-hidden shadow-lg reveal">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              
              {/* Left Column: Big Visual Preview */}
              <div 
                className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto overflow-hidden bg-black cursor-pointer group"
                onClick={() => setSelectedProject(liveProject)}
              >
                <img
                  src={liveProject.thumbnail}
                  alt={liveProject.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="text-[11px] font-bold text-amber-300 bg-black/75 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                    {liveProject.category}
                  </span>
                  <span className="text-[11px] font-bold text-emerald-300 bg-emerald-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-emerald-500/30 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>Đang hoạt động</span>
                  </span>
                </div>
              </div>

              {/* Right Column: Project Details & Direct Actions */}
              <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  
                  <div className="flex items-center justify-between text-xs text-brand-muted">
                    <span className="font-semibold text-brand-primary dark:text-white">
                      Tác phẩm: {liveProject.client}
                    </span>
                    <span className="font-medium">Năm {liveProject.year}</span>
                  </div>

                  <div>
                    <h3 
                      onClick={() => setSelectedProject(liveProject)}
                      className="font-display text-2xl sm:text-3xl font-bold text-brand-primary dark:text-white hover:text-[#D05021] transition-colors cursor-pointer leading-tight"
                    >
                      {liveProject.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-medium mt-2">
                      {liveProject.shortDesc}
                    </p>
                  </div>

                  {/* Tech Tags */}
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-bold text-brand-muted uppercase tracking-wider block">
                      Công nghệ chính:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {liveProject.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded bg-brand-background dark:bg-studio-950 border border-brand-border text-xs text-brand-primary dark:text-white font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-brand-border flex flex-wrap items-center gap-3">
                  <a
                    href={liveProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary py-2.5 px-5 text-xs font-semibold shadow-sm"
                  >
                    <span>Truy cập website</span>
                    <ExternalLink size={13} />
                  </a>

                  <button
                    onClick={() => setSelectedProject(liveProject)}
                    className="btn-secondary py-2.5 px-4 text-xs font-semibold"
                  >
                    <span>Xem chi tiết dự án</span>
                  </button>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* 2-COLUMN GRID: IELTS Learning Platform & RentFlow (Code Repositories) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {repoProjects.map((project, index) => {
            const delayClass = `reveal-delay-${index + 1}`;
            return (
              <div
                key={project.id}
                className={`rounded-2xl border border-brand-border bg-brand-paper dark:bg-studio-900 overflow-hidden shadow-sm flex flex-col justify-between hover:border-brand-muted hover:shadow-md transition-all duration-300 reveal ${delayClass}`}
              >
                
                {/* Image Showcase Frame with browser mock */}
                <div 
                  className="relative aspect-[16/10] overflow-hidden bg-brand-background dark:bg-studio-950 cursor-pointer group"
                  onClick={() => setSelectedProject(project)}
                >
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <span className="text-[11px] font-bold text-brand-primary dark:text-white bg-brand-paper/95 dark:bg-studio-900/95 backdrop-blur-md px-2.5 py-1 rounded border border-brand-border shadow-sm">
                      {project.category}
                    </span>
                    <span className="text-[10px] font-semibold text-slate-700 dark:text-slate-300 bg-brand-paper/95 dark:bg-studio-900/95 backdrop-blur-md px-2 py-1 rounded border border-brand-border">
                      {project.statusTag}
                    </span>
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs text-brand-muted">
                      <span className="font-semibold text-brand-primary dark:text-white truncate max-w-[220px]">
                        {project.client}
                      </span>
                      <span className="font-medium">Năm {project.year}</span>
                    </div>

                    <h3 
                      onClick={() => setSelectedProject(project)}
                      className="font-display text-xl font-bold text-brand-primary dark:text-white hover:text-[#D05021] transition-colors cursor-pointer leading-snug"
                    >
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-medium">
                      {project.shortDesc}
                    </p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded bg-brand-background dark:bg-studio-950 border border-brand-border text-[11px] text-brand-muted font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions for Code Project (GitHub + Details) */}
                  <div className="pt-4 border-t border-brand-border flex items-center justify-between gap-2">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="btn-primary py-2 px-4 text-xs font-semibold"
                    >
                      <span>Xem chi tiết dự án</span>
                    </button>

                    <a
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary py-2 px-3 text-xs font-semibold flex items-center gap-1.5 text-brand-muted hover:text-brand-primary"
                      title="Mở kho mã nguồn trên GitHub"
                    >
                      <Github size={14} />
                      <span className="hidden sm:inline">Xem mã nguồn</span>
                      <span className="sm:hidden">GitHub</span>
                    </a>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Accessible Project Detail Modal */}
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onOpenRequestModal={(scope) => {
            setSelectedProject(null);
            onOpenRequestModal(scope);
          }}
        />
      )}
    </section>
  );
};
