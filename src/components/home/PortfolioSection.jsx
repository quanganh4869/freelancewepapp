import React, { useState } from 'react';
import { INITIAL_PROJECTS } from '../../data/seedData';
import { useLanguage } from '../../context/LanguageContext';
import { ProjectDetailModal } from './ProjectDetailModal';
import { ArrowUpRight } from 'lucide-react';

export const PortfolioSection = ({ onOpenRequestModal }) => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { id: 'All', label: t('allProjects') },
    { id: 'SaaS', label: 'SaaS Platform' },
    { id: 'Dashboard', label: 'Enterprise Dashboard' },
    { id: 'E-commerce', label: 'E-commerce App' },
    { id: 'Business Web App', label: 'Business App' }
  ];

  const filteredProjects = selectedCategory === 'All'
    ? INITIAL_PROJECTS
    : INITIAL_PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <section id="portfolio" className="py-24 bg-studio-900 border-b border-white/10 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="studio-badge">
              <span>{t('portfolioTag')}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              {t('portfolioTitle')}
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              {t('portfolioDesc')}
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-brand-primary text-white'
                    : 'studio-card text-slate-400 hover:text-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => {
            const projectNum = String(index + 1).padStart(2, '0');
            return (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="studio-card overflow-hidden group cursor-pointer flex flex-col justify-between"
              >
                {/* Thumbnail Frame */}
                <div className="relative h-64 sm:h-72 overflow-hidden bg-studio-950">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-studio-950 via-studio-950/20 to-transparent"></div>
                  
                  {/* Category & Project Number Tag */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-brand-primary bg-studio-900 border border-slate-700 px-2.5 py-1 rounded">
                      CASE {projectNum}
                    </span>
                    <span className="font-mono text-xs text-slate-300 bg-studio-900/90 border border-slate-800 backdrop-blur-md px-3 py-1 rounded">
                      {project.categoryLabel}
                    </span>
                  </div>

                  {/* Hover Arrow Icon */}
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-md bg-brand-primary text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight size={18} />
                  </div>
                </div>

                {/* Card Info */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                    <span className="font-semibold text-slate-300">{project.client}</span>
                    <span className="text-brand-primary font-bold">{project.year}</span>
                  </div>

                  <h3 className="text-xl font-bold group-hover:text-brand-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                    {project.shortDesc}
                  </p>

                  {/* Tech Stack */}
                  <div className="pt-4 border-t border-slate-800 flex flex-wrap gap-1.5">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded bg-studio-950 border border-slate-800 text-[11px] font-mono text-slate-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2 flex items-center gap-1 text-xs font-bold text-brand-primary group-hover:translate-x-1 transition-transform">
                    <span>View Case Study</span>
                    <ArrowUpRight size={14} />
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
