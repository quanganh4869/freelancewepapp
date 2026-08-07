import React, { useState } from 'react';
import { INITIAL_PROJECTS } from '../../data/seedData';
import { useTheme } from '../../context/ThemeContext';
import { ExternalLink, Tag, Clock } from 'lucide-react';

export const PortfolioSection = ({ onOpenRequestModal }) => {
  const { isDark } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    { id: 'All', label: 'Tất cả Dự Án' },
    { id: 'Personal', label: 'Website Cá Nhân' },
    { id: 'Landing Page', label: 'Landing Page' },
    { id: 'E-commerce', label: 'Website Bán Hàng' },
    { id: 'Web App', label: 'Web App Đặt Lịch' }
  ];

  const filteredProjects = selectedCategory === 'All'
    ? INITIAL_PROJECTS
    : INITIAL_PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <section id="portfolio" className={`py-16 md:py-24 border-b font-sans ${
      isDark ? 'bg-studio-900 border-white/10 text-white' : 'bg-white border-slate-200 text-slate-900 shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 reveal">
          <div className="space-y-3 max-w-2xl">
            <div className="studio-badge">
              <span>SẢN PHẨM THỰC TẾ</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white font-display">
              Những Dự Án Tôi Đã Triển Khai
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Hình ảnh thực tế từ các website tôi trực tiếp thiết kế và lập trình cho khách hàng.
            </p>
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
                    : 'bg-slate-100 dark:bg-studio-950 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => {
            const delayClass = `reveal-delay-${(index % 2) + 1}`;
            return (
              <div
                key={project.id}
                className={`studio-card overflow-hidden rounded-2xl shadow-sm flex flex-col justify-between reveal ${delayClass}`}
              >
                {/* Thumbnail Frame */}
                <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-950 group">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="font-mono text-xs font-bold text-white bg-brand-primary px-3 py-1 rounded-md shadow-sm">
                      {project.categoryLabel}
                    </span>
                  </div>

                  {/* Demo Link Button */}
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="absolute top-4 right-4 px-3 py-1.5 rounded-lg bg-black/60 hover:bg-black/90 text-white text-xs font-mono font-bold backdrop-blur-md border border-white/20 flex items-center gap-1.5 transition-all"
                  >
                    <span>Xem Demo</span>
                    <ExternalLink size={13} />
                  </a>
                </div>

                {/* Card Info */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-600 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800 pb-2">
                    <span className="font-semibold text-slate-800 dark:text-slate-300">Khách hàng: {project.client}</span>
                    <span className="text-brand-primary font-bold">Năm {project.year}</span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mt-1.5">
                      {project.shortDesc}
                    </p>
                  </div>

                  {/* Price & Duration Tag */}
                  <div className="flex items-center gap-4 text-xs font-mono pt-1 text-slate-600 dark:text-slate-400">
                    <div className="flex items-center gap-1">
                      <Tag size={13} className="text-brand-primary" />
                      <span>Chi phí: <strong className="text-brand-primary font-bold">{project.priceTag}</strong></span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={13} className="text-brand-primary" />
                      <span>Thực hiện: <strong className="text-slate-800 dark:text-slate-200 font-bold">{project.duration}</strong></span>
                    </div>
                  </div>

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

                  <button
                    onClick={() => onOpenRequestModal(`Làm website tương tự như ${project.title}`)}
                    className="w-full py-2.5 text-xs font-bold font-display btn-secondary"
                  >
                    <span>Làm Website Tương Tự</span>
                  </button>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
