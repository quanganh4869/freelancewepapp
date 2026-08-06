import React from 'react';
import { X, Calendar, CheckCircle } from 'lucide-react';

export const ProjectDetailModal = ({ project, onClose, onOpenRequestModal }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div
        className="bg-studio-900 border border-slate-800 rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative text-slate-100 font-sans"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-md bg-studio-950/80 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
        >
          <X size={16} />
        </button>

        {/* Thumbnail Header Image */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden rounded-t-xl">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-studio-900 via-studio-900/40 to-transparent"></div>
          
          <div className="absolute bottom-4 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <span className="font-mono text-xs text-brand-primary bg-brand-primary/10 border border-brand-primary/20 px-2.5 py-1 rounded font-semibold uppercase">
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
          
          {/* Client & Description */}
          <div className="border-b border-slate-800 pb-6">
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
                  <div key={idx} className="p-3 rounded-lg bg-studio-950 border border-slate-800 flex items-center gap-2">
                    <CheckCircle size={15} className="text-brand-primary shrink-0" />
                    <span className="text-xs font-semibold text-slate-200 font-mono">{metric}</span>
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
                  className="px-3 py-1 rounded bg-studio-950 border border-slate-800 text-xs font-mono text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Modal Actions Footer */}
          <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={() => {
                onClose();
                onOpenRequestModal(`Tư vấn phát triển Web App tương tự ${project.title}`);
              }}
              className="btn-primary w-full sm:w-auto py-2.5 px-6 text-xs font-semibold ml-auto"
            >
              <span>Xây Dựng Web App Tương Tự</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
