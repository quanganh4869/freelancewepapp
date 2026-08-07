import React, { useState } from 'react';
import { INITIAL_PROJECTS } from '../../data/seedData';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import { ProjectDetailModal } from './ProjectDetailModal';
import { ArrowUpRight } from 'lucide-react';

export const PortfolioSection = ({ onOpenRequestModal }) => {
  const { t } = useLanguage();
  const { isDark } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { id: 'All', label: 'Tất cả Dự Án' },
    { id: 'SaaS', label: 'SaaS Platform' },
    { id: 'Dashboard', label: 'Dashboard' },
    { id: 'E-commerce', label: 'E-commerce' },
    { id: 'Business Web App', label: 'Business App' }
  ];

  const filteredProjects = selectedCategory === 'All'
    ? INITIAL_PROJECTS
    : INITIAL_PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <section id="portfolio" className={`py-20 border-b font-sans ${
      isDark ? 'bg-studio-900 border-white/10 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 reveal">
          <div className="space-y-2 max-w-2xl">
            <div className="studio-badge">
              <span>DỰ ÁN</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white font-display">
              Sản Phẩm Đã Bàn Giao
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold font-display transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-brand-primary text-white shadow-sm'
                    : 'bg-white dark:bg-studio-950 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => {
            const projectNum = String(index + 1).padStart(2, '0');
            const delayClass = `reveal-delay-${(index % 2) + 1}`;
            return (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`studio-card overflow-hidden group cursor-pointer flex flex-col justify-between rounded-2xl shadow-sm hover:shadow-md reveal ${delayClass}`}
              >
                {/* Thumbnail Frame */}
                <div className="relative h-60 sm:h-64 overflow-hidden bg-slate-950">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                  
                  {/* Category & Project Number Tag */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-brand-primary bg-white dark:bg-studio-900 border border-slate-200 dark:border-slate-700 px-2.5 py-1 rounded-md shadow-sm">
                      DỰ ÁN {projectNum}
                    </span>
                    <span className="font-mono text-xs text-slate-800 dark:text-slate-300 bg-white/90 dark:bg-studio-900/90 border border-slate-200 dark:border-slate-800 backdrop-blur-md px-3 py-1 rounded-md shadow-sm font-semibold">
                      {project.categoryLabel}
                    </span>
                  </div>

                  {/* Hover Arrow Icon */}
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-xl bg-brand-primary text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                    <ArrowUpRight size={18} />
                  </div>
                </div>

                {/* Card Info */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-600 dark:text-slate-400">
                    <span className="font-semibold text-slate-800 dark:text-slate-300">{project.client}</span>
                    <span className="text-brand-primary font-bold">{project.year}</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand-primary transition-colors font-display">
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2">
                    {project.shortDesc}
                  </p>

                  {/* Tech Stack */}
                  <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-1.5">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-studio-950 border border-slate-200 dark:border-slate-800 text-[11px] font-mono text-slate-700 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onOpenRequestModal={onOpenRequestModal}
        />
      )}
    </section>
  );
};
