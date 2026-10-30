import React, { useEffect } from 'react';
import { 
  X, 
  ExternalLink, 
  Github, 
  CheckCircle2, 
  Calendar, 
  Users, 
  Code2, 
  Layers, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles,
  AlertCircle
} from 'lucide-react';

export const ProjectDetailModal = ({ project, onClose, onOpenRequestModal }) => {
  // Close on Esc key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn font-sans overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      onClick={onClose}
    >
      <div 
        className="bg-brand-paper dark:bg-studio-900 border border-brand-border rounded-2xl max-w-3xl w-full my-6 max-h-[92vh] overflow-y-auto shadow-2xl relative text-brand-primary dark:text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-brand-background/90 dark:bg-studio-950/90 border border-brand-border flex items-center justify-center text-brand-muted hover:text-brand-primary dark:hover:text-white transition-colors shadow-sm"
          aria-label="Đóng cửa sổ chi tiết dự án"
        >
          <X size={16} />
        </button>

        {/* Thumbnail Preview Banner */}
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-t-2xl bg-brand-background dark:bg-studio-950">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-6 text-white">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider bg-white/20 px-2.5 py-0.5 rounded backdrop-blur-sm">
                {project.category}
              </span>
              <span className="text-[11px] font-semibold text-white bg-black/40 px-2.5 py-0.5 rounded border border-white/20 backdrop-blur-sm">
                {project.statusTag}
              </span>
            </div>
            <h2 id="modal-project-title" className="font-display font-extrabold text-2xl sm:text-3xl leading-tight text-white">
              {project.title}
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-7">
          
          {/* Quick Facts Card */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-brand-background dark:bg-studio-950 border border-brand-border text-xs">
            <div>
              <span className="text-[10px] text-brand-muted uppercase font-bold tracking-wider block">Phân loại</span>
              <span className="font-bold text-brand-primary dark:text-white mt-0.5 block">{project.category}</span>
            </div>
            <div>
              <span className="text-[10px] text-brand-muted uppercase font-bold tracking-wider block">Trạng thái</span>
              <span className="font-bold text-[#D05021] mt-0.5 block">{project.statusTag}</span>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <span className="text-[10px] text-brand-muted uppercase font-bold tracking-wider block">Thời điểm thực hiện</span>
              <span className="font-bold text-brand-primary dark:text-white mt-0.5 block">Năm {project.year}</span>
            </div>
          </div>

          {/* Section 1: Overview & Problem Solved */}
          <div className="space-y-2">
            <h3 className="font-display font-bold text-xs uppercase tracking-wider text-[#D05021]">
              1. Mục đích & Bài toán giải quyết
            </h3>
            <p className="text-xs sm:text-sm text-brand-primary dark:text-slate-200 leading-relaxed font-medium">
              {project.fullDesc || project.shortDesc}
            </p>
            {project.targetUsers && (
              <div className="pt-1 flex items-start gap-2 text-xs text-brand-muted font-medium">
                <Users size={14} className="text-brand-primary dark:text-white shrink-0 mt-0.5" />
                <span><strong>Nhóm người dùng hướng đến:</strong> {project.targetUsers}</span>
              </div>
            )}
          </div>

          {/* Section 2: Verified Core Features */}
          {project.features && project.features.length > 0 && (
            <div className="space-y-3">
              <h3 className="font-display font-bold text-xs uppercase tracking-wider text-[#D05021]">
                2. Những chức năng tiêu biểu đã triển khai thực tế
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                {project.features.map((feat, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-brand-background dark:bg-studio-950 border border-brand-border flex items-start gap-2.5 text-brand-primary dark:text-slate-200 font-medium">
                    <CheckCircle2 size={15} className="text-[#D05021] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section 3: My Concrete Engineering Role */}
          {project.myRole && (
            <div className="p-4 rounded-xl bg-brand-background dark:bg-studio-950 border border-brand-border space-y-1.5">
              <span className="text-[11px] text-brand-muted uppercase font-bold tracking-wider block">
                3. Phần việc Quang Anh trực tiếp đảm nhiệm:
              </span>
              <p className="text-xs sm:text-sm text-brand-primary dark:text-slate-200 leading-relaxed font-medium">
                {project.myRole}
              </p>
            </div>
          )}

          {/* Section 4: Verified Tech Stack */}
          <div className="space-y-2">
            <span className="text-[11px] font-bold text-[#D05021] uppercase tracking-wider block">
              4. Công nghệ chính sử dụng trong dự án:
            </span>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span 
                  key={idx} 
                  className="px-3 py-1 rounded-md bg-brand-background dark:bg-studio-950 border border-brand-border text-xs font-semibold text-brand-primary dark:text-white flex items-center gap-1.5"
                >
                  <Code2 size={13} className="text-[#D05021]" />
                  <span>{tech}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Verification Notice */}
          {!project.liveUrl && project.sourceUrl && (
            <div className="p-3.5 rounded-lg bg-slate-100 dark:bg-studio-950 border border-brand-border flex items-start gap-2 text-xs text-brand-muted font-medium">
              <AlertCircle size={15} className="text-amber-500 shrink-0 mt-0.5" />
              <span>
                Dự án hiện chưa có bản demo trực tuyến công khai. Toàn bộ mã nguồn, tài liệu kiến trúc và hướng dẫn cài đặt có thể kiểm tra trực tiếp trên GitHub.
              </span>
            </div>
          )}

          {/* Modal Actions Footer */}
          <div className="pt-4 border-t border-brand-border flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              {/* Live URL Action */}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary py-2.5 px-4 text-xs font-semibold"
                >
                  <ExternalLink size={14} />
                  <span>Mở website đang chạy ({String(project.liveUrl || '').replace('https://', '').replace('/', '')})</span>
                </a>
              )}

              {/* Source Code Action */}
              {project.sourceUrl && (
                <a
                  href={project.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary py-2.5 px-4 text-xs font-semibold"
                >
                  <Github size={14} />
                  <span>Xem mã nguồn trên GitHub</span>
                </a>
              )}
            </div>

            <button
              onClick={() => {
                onClose();
                onOpenRequestModal(`Trao đổi về việc phát triển hệ thống tương tự ${project.title}`);
              }}
              className="text-xs font-bold text-[#D05021] hover:underline flex items-center gap-1 ml-auto"
            >
              <span>Tư vấn dự án tương tự</span>
              <ArrowRight size={13} />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
