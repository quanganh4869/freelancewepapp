import React from 'react';
import { X, ExternalLink, Calendar, Layers, ShieldCheck, CheckCircle } from 'lucide-react';

export const ProjectDetailModal = ({ project, onClose, onOpenRequestModal }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div
        className="bg-studio-900 border border-white/10 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-studio-950/80 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-studio-800 transition-colors"
        >
          <X size={18} />
        </button>

        {/* Thumbnail Header Image */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden rounded-t-2xl">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-studio-900 via-studio-900/40 to-transparent"></div>
          
          <div className="absolute bottom-4 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <span className="font-mono text-xs text-brand-primary bg-brand-primary/10 border border-brand-primary/20 px-2.5 py-1 rounded-md font-semibold uppercase">
                {project.categoryLabel}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
                {project.title}
              </h2>
            </div>
            <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
              <Calendar size={13} /> {project.year}
            </span>
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Client & Short Description */}
          <div className="border-b border-white/10 pb-6">
            <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">Khách hàng / Doanh nghiệp</p>
            <p className="text-base font-semibold text-white mb-4">{project.client}</p>
            
            <p className="text-slate-300 text-sm leading-relaxed">
              {project.fullDesc || project.shortDesc}
            </p>
          </div>

          {/* Key Engineering Metrics */}
          {project.metrics && (
            <div>
              <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">Cam kết & Thông số kỹ thuật</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {project.metrics.map((metric, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-studio-950 border border-white/5 flex items-center gap-2">
                    <CheckCircle size={16} className="text-brand-primary shrink-0" />
                    <span className="text-xs font-semibold text-white font-mono">{metric}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack Tags */}
          <div>
            <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">Công nghệ sử dụng (Tech Stack)</p>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-studio-950 border border-slate-800 text-xs font-mono text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Modal Actions Footer */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={() => {
                onClose();
                onOpenRequestModal(`Tư vấn phát triển Web App tương tự ${project.title}`);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand-primary hover:bg-brand-hover text-white text-xs font-bold shadow-glow-primary transition-all ml-auto"
            >
              <span>Xây Dựng Web App Tương Tự</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
