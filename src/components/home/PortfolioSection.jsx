import React, { useState } from 'react';
import { INITIAL_PROJECTS } from '../../data/seedData';
import { ProjectDetailModal } from './ProjectDetailModal';
import { ArrowUpRight, Filter } from 'lucide-react';

export const PortfolioSection = ({ onOpenRequestModal }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { id: 'All', label: 'Tất cả' },
    { id: 'Dashboard', label: 'Dashboard' },
    { id: 'E-commerce', label: 'E-commerce' },
    { id: 'Business Web App', label: 'Doanh nghiệp' },
    { id: 'SaaS', label: 'SaaS Platform' }
  ];

  const filteredProjects = selectedCategory === 'All'
    ? INITIAL_PROJECTS
    : INITIAL_PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <section id="portfolio" className="py-24 bg-studio-950 relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-medium">
              FEATURED CASE STUDIES
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Các dự án Web App tiêu biểu
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Khám phá các sản phẩm phần mềm chúng tôi đã trực tiếp nghiên cứu, thiết kế và lập trình cho khách hàng.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-brand-primary text-white shadow-glow-primary'
                    : 'bg-studio-900 border border-white/10 text-slate-400 hover:text-white hover:border-slate-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="studio-card-border rounded-2xl overflow-hidden group cursor-pointer border-white/10 hover:border-brand-primary/40 transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between"
            >
              {/* Thumbnail Container */}
              <div className="relative h-64 overflow-hidden bg-studio-900">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-studio-950 via-studio-950/20 to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="font-mono text-[11px] font-semibold text-white bg-studio-900/90 border border-white/10 backdrop-blur-md px-3 py-1 rounded-full">
                    {project.categoryLabel}
                  </span>
                </div>

                {/* Hover CTA icon */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-brand-primary text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-glow-primary">
                  <ArrowUpRight size={20} />
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>{project.client}</span>
                  <span>{project.year}</span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-brand-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                  {project.shortDesc}
                </p>

                {/* Tech Stack Pills */}
                <div className="pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 rounded bg-studio-900 border border-white/5 text-[11px] font-mono text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Case Study Detail Modal */}
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
