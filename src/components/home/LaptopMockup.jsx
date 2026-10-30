import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight } from 'lucide-react';

export const LaptopMockup = ({
  project,
  isCenter = false,
  className = '',
  style = {},
  isDimmed = false,
  isHovered = false,
  onMouseEnter,
  onMouseLeave,
}) => {
  if (!project) return null;

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={style}
      className={`group relative transition-all duration-500 ease-out ${
        isDimmed ? 'opacity-60 filter blur-[0.3px] scale-[0.98]' : 'opacity-100'
      } ${isHovered ? 'z-30' : ''} ${className}`}
    >
      {/* Laptop Upper Lid (Screen Bezel & Display) */}
      <div className="relative rounded-t-[12px] sm:rounded-t-[16px] bg-[#1a1817] dark:bg-[#12100e] p-[8px] sm:p-[11px] pb-[6px] sm:pb-[8px] border border-[#3d3835] dark:border-[#2e2926] shadow-[0_20px_45px_-10px_rgba(0,0,0,0.35)] dark:shadow-[0_25px_50px_-10px_rgba(0,0,0,0.7)] transition-all duration-300 group-hover:border-[#985B3D]/60 dark:group-hover:border-[#C0754F]/60">
        
        {/* Top Bezel / Camera & Mic Indent */}
        <div className="absolute top-[3px] sm:top-[4px] left-1/2 -translate-x-1/2 flex items-center justify-center pointer-events-none">
          <div className="w-[5px] h-[5px] sm:w-[6px] sm:h-[6px] rounded-full bg-[#0d0c0b] border border-[#2b2725] flex items-center justify-center">
            <span className="w-[1.5px] h-[1.5px] sm:w-[2px] sm:h-[2px] rounded-full bg-[#2a4365]" />
          </div>
        </div>

        {/* 16:10 Display Viewport */}
        <div className="relative w-full aspect-[16/10] overflow-hidden rounded-[4px] bg-[#0c0a09]">
          <img
            src={project.primaryImage || project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.025]"
            loading="eager"
          />

          {/* Glare / Sheen gradient reflection */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.07]" />
        </div>
      </div>

      {/* Laptop Hinge & Keyboard Deck */}
      <div className="relative">
        {/* Recessed Screen Hinge */}
        <div className="mx-auto w-[22%] h-[3px] bg-[#2a2624] dark:bg-[#1f1b19] rounded-t-sm" />

        {/* Lower Base Deck (Aluminum Finish) */}
        <div className="relative h-[11px] sm:h-[13px] rounded-b-[7px] sm:rounded-b-[9px] bg-gradient-to-b from-[#e5dfd8] via-[#d6cec5] to-[#b8aca0] dark:from-[#2e2824] dark:via-[#221c19] dark:to-[#171311] border-t border-white/60 dark:border-white/10 shadow-[0_8px_20px_-3px_rgba(0,0,0,0.3)]">
          {/* Opening Thumb Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 sm:w-16 h-[3px] sm:h-[4px] bg-[#82766f]/40 dark:bg-black/50 rounded-b-md" />
          
          {/* Subtle base shadow strip */}
          <div className="absolute -bottom-[2px] left-1/2 -translate-x-1/2 w-[92%] h-[2px] bg-black/40 blur-[1px]" />
        </div>
      </div>

      {/* Floating Ambient Shadow Underneath */}
      <div className="w-[88%] mx-auto h-[12px] bg-black/25 dark:bg-black/50 blur-[8px] rounded-full -mt-1 transition-all duration-500 group-hover:h-[16px] group-hover:bg-black/35" />

      {/* Project Quick Pill Label */}
      <div className="mt-3 text-center transition-all duration-300">
        <Link
          to={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px] font-semibold bg-[#F4F0E9] dark:bg-[#221D1A] border border-[#DAD0C7] dark:border-[#332B26] text-[#38251F] dark:text-[#EDE6DE] hover:border-[#985B3D] dark:hover:border-[#C0754F] hover:text-[#985B3D] transition-colors shadow-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#985B3D] dark:bg-[#C0754F]" />
          <span>{project.title}</span>
          <ArrowRight size={11} className="transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </div>
  );
};

export default LaptopMockup;
