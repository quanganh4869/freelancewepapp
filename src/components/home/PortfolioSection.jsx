import React from 'react';
import { INITIAL_PROJECTS } from '../../data/seedData';
import { ExternalLink } from 'lucide-react';

export const PortfolioSection = ({ onOpenRequestModal }) => {
  return (
    <section id="du-an" className="py-16 md:py-24 border-b border-brand-border font-sans">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-left space-y-2 reveal">
          <span className="text-xs font-semibold text-brand-muted uppercase tracking-wider">
            Dự án đã làm
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-brand-primary dark:text-white">
            Dự án đã làm
          </h2>
          <p className="text-brand-muted text-sm leading-relaxed font-medium pt-1">
            Kèm luôn thời gian và chi phí thật của từng dự án để bạn dễ hình dung mức của mình.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-6">
          {INITIAL_PROJECTS.map((project, index) => {
            const delayClass = `reveal-delay-${(index % 3) + 1}`;
            return (
              <div
                key={project.id}
                className={`rounded-lg border border-brand-border bg-brand-paper overflow-hidden space-y-4 p-5 sm:p-6 reveal ${delayClass}`}
              >
                {/* Image Frame */}
                <div className="relative h-48 sm:h-56 rounded-md overflow-hidden bg-brand-background">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-[11px] font-semibold text-brand-primary bg-brand-paper/90 backdrop-blur-sm px-2.5 py-1 rounded border border-brand-border">
                      {project.categoryLabel}
                    </span>
                  </div>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="absolute top-3 right-3 text-xs font-semibold text-brand-primary bg-brand-paper/90 backdrop-blur-sm px-2.5 py-1 rounded border border-brand-border flex items-center gap-1"
                    >
                      <span>Xem demo</span>
                      <ExternalLink size={12} />
                    </a>
                  )}
                </div>

                {/* Info */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-brand-muted">
                    <span className="font-semibold text-brand-primary dark:text-white">{project.client}</span>
                    <span className="font-medium">{project.priceTag} · {project.duration}</span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-brand-primary dark:text-white">
                    {project.title}
                  </h3>

                  <p className="text-sm text-brand-muted leading-relaxed font-medium">
                    {project.shortDesc}
                  </p>

                  <div className="pt-2 flex items-center justify-between border-t border-brand-border">
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded bg-brand-background border border-brand-border text-[11px] text-brand-muted font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => onOpenRequestModal(`Làm website tương tự ${project.title}`)}
                      className="text-xs font-semibold text-brand-primary dark:text-white hover:underline shrink-0 ml-2"
                    >
                      Làm website tương tự →
                    </button>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
