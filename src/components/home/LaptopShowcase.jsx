import React, { useState, useRef } from 'react';
import { LaptopMockup } from './LaptopMockup';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export const LaptopShowcase = ({ projects = [] }) => {
  // Identify the 3 canonical projects
  const rentflow = projects.find((p) => p.slug === 'rentflow') || projects[1] || projects[0];
  const ielts = projects.find((p) => p.slug === 'ielts-learning') || projects[0];
  const loiru = projects.find((p) => p.slug === 'loi-ru') || projects[2] || projects[0];

  const threeProjects = [
    { key: 'ielts', data: ielts, position: 'left', label: 'IELTS Learning' },
    { key: 'rentflow', data: rentflow, position: 'center', label: 'RentFlow' },
    { key: 'loiru', data: loiru, position: 'right', label: 'Lời Ru' },
  ];

  // Interactive mouse parallax state for desktop
  const containerRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hoveredIdx, setHoveredIdx] = useState(null);

  // Active tab index for mobile view (0: IELTS, 1: RentFlow, 2: Lời Ru)
  const [mobileActiveIdx, setMobileActiveIdx] = useState(1); // Default to RentFlow

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const xRatio = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
    const yRatio = (e.clientY - rect.top) / rect.height - 0.5; // -0.5 to 0.5
    setTilt({
      x: xRatio * 4, // Max tilt deg
      y: -yRatio * 3,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setHoveredIdx(null);
  };

  return (
    <div className="w-full select-none pt-4 pb-2">
      
      {/* =====================================================================
          DESKTOP 3-LAPTOP STAGE COMPOSITION (>= 1024px)
          Center: RentFlow (Largest, Primary, Forefront)
          Left: IELTS Platform (Slight perspective tilt, Receded)
          Right: Lời Ru (Slight perspective tilt, Receded)
      ===================================================================== */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="hidden lg:block relative max-w-[1180px] mx-auto px-4"
        style={{
          perspective: '1400px',
        }}
      >
        <div
          className="relative transition-transform duration-300 ease-out grid grid-cols-12 items-center min-h-[520px]"
          style={{
            transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
            transformStyle: 'preserve-3d',
          }}
        >
          {/* 1. LEFT LAPTOP — IELTS Learning (Cols 1-5, overlaps center by negative margin) */}
          <div
            className={`col-span-5 col-start-1 -mr-16 transition-all duration-500 ease-out ${
              hoveredIdx === 0
                ? 'z-30'
                : hoveredIdx !== null
                ? 'opacity-65 filter blur-[0.3px] z-10'
                : 'opacity-90 z-10'
            }`}
            style={{
              transform:
                hoveredIdx === 0
                  ? 'rotateY(2deg) scale(0.96) translateY(-4px)'
                  : 'rotateY(7deg) rotateZ(-1deg) scale(0.85) translateY(24px)',
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Separate wrapper for CSS floating animation to avoid transform collision */}
            <div className="animate-laptop-side relative">
              <span className="absolute -top-7 left-4 text-[11px] font-mono font-bold uppercase tracking-wider text-[#82766F] dark:text-[#9E938B]">
                01 · Nền tảng học tập
              </span>
              <LaptopMockup
                project={ielts}
                isDimmed={hoveredIdx !== null && hoveredIdx !== 0}
                isHovered={hoveredIdx === 0}
                onMouseEnter={() => setHoveredIdx(0)}
                onMouseLeave={() => setHoveredIdx(null)}
              />
            </div>
          </div>

          {/* 2. CENTER LAPTOP — RentFlow (Cols 4-9, Primary & Largest) */}
          <div
            className={`col-span-6 col-start-4 transition-all duration-500 ease-out ${
              hoveredIdx === 1
                ? 'z-30'
                : hoveredIdx !== null
                ? 'opacity-75 filter blur-[0.2px] z-20'
                : 'opacity-100 z-20'
            }`}
            style={{
              transform:
                hoveredIdx === 1
                  ? 'scale(1.05) translateY(-8px)'
                  : 'scale(1) translateY(0px)',
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Separate wrapper for CSS floating animation */}
            <div className="animate-laptop-center relative">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-[#985B3D]/10 text-[#985B3D] dark:bg-[#C0754F]/20 dark:text-[#E8A585] border border-[#985B3D]/20">
                  <Sparkles size={11} />
                  <span>Dự án tiêu biểu · 2026</span>
                </span>
              </div>
              <LaptopMockup
                project={rentflow}
                isCenter={true}
                isDimmed={hoveredIdx !== null && hoveredIdx !== 1}
                isHovered={hoveredIdx === 1}
                onMouseEnter={() => setHoveredIdx(1)}
                onMouseLeave={() => setHoveredIdx(null)}
              />
            </div>
          </div>

          {/* 3. RIGHT LAPTOP — Lời Ru Của Ác Mộng (Cols 8-12) */}
          <div
            className={`col-span-5 col-start-8 -ml-16 transition-all duration-500 ease-out ${
              hoveredIdx === 2
                ? 'z-30'
                : hoveredIdx !== null
                ? 'opacity-65 filter blur-[0.3px] z-10'
                : 'opacity-90 z-10'
            }`}
            style={{
              transform:
                hoveredIdx === 2
                  ? 'rotateY(-2deg) scale(0.96) translateY(-4px)'
                  : 'rotateY(-7deg) rotateZ(1deg) scale(0.85) translateY(24px)',
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Separate wrapper for CSS floating animation */}
            <div
              className="animate-laptop-side relative"
              style={{ animationDelay: '1.4s' }}
            >
              <span className="absolute -top-7 right-4 text-[11px] font-mono font-bold uppercase tracking-wider text-[#82766F] dark:text-[#9E938B]">
                03 · Tác phẩm số
              </span>
              <LaptopMockup
                project={loiru}
                isDimmed={hoveredIdx !== null && hoveredIdx !== 2}
                isHovered={hoveredIdx === 2}
                onMouseEnter={() => setHoveredIdx(2)}
                onMouseLeave={() => setHoveredIdx(null)}
              />
            </div>
          </div>

        </div>

        {/* Ambient Stage Reflection Floor */}
        <div className="w-[85%] mx-auto h-[1px] bg-gradient-to-r from-transparent via-[#DAD0C7] dark:via-[#332B26] to-transparent mt-4 opacity-70" />
      </div>

      {/* =====================================================================
          TABLET STACKED DUAL / CAROUSEL VIEW (768px - 1023px)
      ===================================================================== */}
      <div className="hidden md:block lg:hidden max-w-[720px] mx-auto px-4">
        {/* Tab Pills */}
        <div className="flex items-center justify-center gap-2 mb-6">
          {threeProjects.map((item, idx) => (
            <button
              key={item.key}
              onClick={() => setMobileActiveIdx(idx)}
              className={`px-4 py-2 rounded-full text-[13px] font-semibold transition-all ${
                mobileActiveIdx === idx
                  ? 'bg-[#38251F] text-[#F4F0E9] dark:bg-[#EDE6DE] dark:text-[#1B1614] shadow-md'
                  : 'bg-[#FAF8F4] dark:bg-[#221D1A] text-[#82766F] dark:text-[#9E938B] border border-[#DAD0C7] dark:border-[#332B26] hover:text-[#38251F]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Laptop Mockup Display for Active Item */}
        <div className="transition-all duration-300">
          <LaptopMockup
            project={threeProjects[mobileActiveIdx].data}
            isCenter={true}
          />
        </div>
      </div>

      {/* =====================================================================
          MOBILE CLEAN DEDICATED VIEW (< 768px)
          Clear segmented pill switcher + 100% wide crisp laptop mockup
          NO squishing, NO tiny unreadable previews, NO phone mockups!
      ===================================================================== */}
      <div className="block md:hidden px-2">
        {/* Segmented Switcher */}
        <div className="flex items-center justify-between p-1 bg-[#EAE4DC] dark:bg-[#221D1A] rounded-full border border-[#DAD0C7] dark:border-[#332B26] mb-5 max-w-[360px] mx-auto">
          {threeProjects.map((item, idx) => (
            <button
              key={item.key}
              onClick={() => setMobileActiveIdx(idx)}
              className={`flex-1 py-1.5 px-2 rounded-full text-[12px] font-semibold transition-all text-center ${
                mobileActiveIdx === idx
                  ? 'bg-[#38251F] text-[#F4F0E9] dark:bg-[#EDE6DE] dark:text-[#1B1614] shadow-sm'
                  : 'text-[#82766F] dark:text-[#9E938B]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Crisp Laptop Mockup with navigation controls */}
        <div className="relative">
          <LaptopMockup
            project={threeProjects[mobileActiveIdx].data}
            isCenter={true}
          />

          {/* Mobile Prev / Next overlay arrows */}
          <div className="flex items-center justify-between mt-3 px-1">
            <button
              onClick={() =>
                setMobileActiveIdx((prev) => (prev === 0 ? 2 : prev - 1))
              }
              aria-label="Dự án trước"
              className="p-2 rounded-full bg-[#FAF8F4] dark:bg-[#221D1A] border border-[#DAD0C7] dark:border-[#332B26] text-[#38251F] dark:text-[#EDE6DE] active:scale-95 text-xs inline-flex items-center gap-1"
            >
              <ChevronLeft size={14} />
              <span>Trước</span>
            </button>

            <span className="text-[11px] font-mono text-[#82766F] dark:text-[#9E938B]">
              0{mobileActiveIdx + 1} / 03
            </span>

            <button
              onClick={() =>
                setMobileActiveIdx((prev) => (prev === 2 ? 0 : prev + 1))
              }
              aria-label="Dự án kế tiếp"
              className="p-2 rounded-full bg-[#FAF8F4] dark:bg-[#221D1A] border border-[#DAD0C7] dark:border-[#332B26] text-[#38251F] dark:text-[#EDE6DE] active:scale-95 text-xs inline-flex items-center gap-1"
            >
              <span>Tiếp</span>
              <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default LaptopShowcase;
