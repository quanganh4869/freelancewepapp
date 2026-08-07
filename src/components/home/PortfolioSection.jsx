import React from 'react';
import { INITIAL_PROJECTS } from '../../data/seedData';
import { useTheme } from '../../context/ThemeContext';
import { ExternalLink } from 'lucide-react';

export const PortfolioSection = ({ onOpenRequestModal }) => {
  const { isDark } = useTheme();

  return (
    <section id="du-an" className="py-16 md:py-24 border-b border-[#E6E4DD] dark:border-[#2A2A28] font-sans">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-left space-y-2 reveal">
          <span className="text-xs font-semibold text-[#666663] dark:text-[#A1A19A]">
            Dự án đã làm
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1A1A1A] dark:text-white">
            Dự án đã làm
          </h2>
          <p className="text-[#666663] dark:text-[#A1A19A] text-sm leading-relaxed font-medium pt-1">
            Kèm luôn thời gian và chi phí thật của từng dự án để bạn dễ hình dung mức của mình.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-8">
          {INITIAL_PROJECTS.map((project, index) => {
            const delayClass = `reveal-delay-${(index % 3) + 1}`;
            return (
              <div
                key={project.id}
                className={`rounded-2xl border border-[#E6E4DD] dark:border-[#2A2A28] bg-white dark:bg-[#1A1A19] overflow-hidden space-y-4 p-6 sm:p-7 reveal ${delayClass}`}
              >
                {/* Image Frame */}
                <div className="relative h-52 sm:h-64 rounded-xl overflow-hidden bg-[#FAF9F6] dark:bg-[#121212]">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-[11px] font-semibold text-[#1A1A1A] bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-md border border-[#E6E4DD]">
                      {project.categoryLabel}
                    </span>
                  </div>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="absolute top-3 right-3 text-xs font-semibold text-[#1A1A1A] bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-md border border-[#E6E4DD] flex items-center gap-1"
                    >
                      <span>Xem demo</span>
                      <ExternalLink size={12} />
                    </a>
                  )}
                </div>

                {/* Info */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#666663] dark:text-[#A1A19A]">
                    <span className="font-semibold text-[#1A1A1A] dark:text-white">{project.client}</span>
                    <span className="font-medium">{project.priceTag} · {project.duration}</span>
                  </div>

                  <h3 className="text-lg font-bold text-[#1A1A1A] dark:text-white">
                    {project.title}
                  </h3>

                  <p className="text-sm text-[#666663] dark:text-[#A1A19A] leading-relaxed font-medium">
                    {project.shortDesc}
                  </p>

                  <div className="pt-2 flex items-center justify-between border-t border-[#E6E4DD] dark:border-[#2A2A28]">
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded bg-[#FAF9F6] dark:bg-[#121212] border border-[#E6E4DD] dark:border-[#2A2A28] text-[11px] text-[#666663] dark:text-[#A1A19A] font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => onOpenRequestModal(`Làm website tương tự ${project.title}`)}
                      className="text-xs font-semibold text-[#1A1A1A] dark:text-white hover:underline shrink-0 ml-2"
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
