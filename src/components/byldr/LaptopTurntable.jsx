import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight, Github } from 'lucide-react';

export const LaptopTurntable = ({ projects = [] }) => {
  const containerRef = useRef(null);
  const [stageDim, setStageDim] = useState({ width: 1000, height: 480 });

  // Current rotation and target rotation
  const [rot, setRot] = useState(1); // Default center = index 1 (RentFlow)
  const [target, setTarget] = useState(1);

  // Active front index (0, 1, 2)
  const N = projects.length || 3;
  const rawIdx = ((Math.round(rot) % N) + N) % N;
  const activeProject = projects[rawIdx] || projects[0];

  // Drag interaction state
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startRot = useRef(0);
  const dragDist = useRef(0);

  // Measure stage dimensions on resize
  useEffect(() => {
    const updateDim = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setStageDim({
          width: rect.width || 1000,
          height: rect.height || 480,
        });
      }
    };
    updateDim();
    window.addEventListener('resize', updateDim);
    return () => window.removeEventListener('resize', updateDim);
  }, []);

  // Smooth animation loop to interpolate rot towards target
  useEffect(() => {
    let animId;
    const animate = () => {
      setRot((currentRot) => {
        const diff = target - currentRot;
        if (Math.abs(diff) < 0.002) {
          return target;
        }
        return currentRot + diff * 0.12; // Easing speed ~600-800ms
      });
      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [target]);

  // Rotate handlers
  const handlePrev = useCallback(() => {
    setTarget((t) => t - 1);
  }, []);

  const handleNext = useCallback(() => {
    setTarget((t) => t + 1);
  }, []);

  // Pointer Drag events for rotating the turntable
  const handlePointerDown = (e) => {
    // If clicking inside a scrollable screen on the hero laptop, do not start stage drag
    if (e.target.closest('.laptop-inner-screen')) return;

    isDragging.current = true;
    startX.current = e.clientX || (e.touches && e.touches[0]?.clientX) || 0;
    startRot.current = target;
    dragDist.current = 0;
  };

  const handlePointerMove = (e) => {
    if (!isDragging.current) return;
    const clientX = e.clientX || (e.touches && e.touches[0]?.clientX) || 0;
    const deltaX = clientX - startX.current;
    dragDist.current = deltaX;

    // Convert pixel drag to rotation angle
    const sensitivity = stageDim.width < 768 ? 0.0035 : 0.0025;
    setTarget(startRot.current - deltaX * sensitivity);
  };

  const handlePointerUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    // Snap to nearest integer
    setTarget((t) => Math.round(t));
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePrev, handleNext]);

  // Compute 3D positions for the 3 laptops
  const TAU = Math.PI * 2;
  const isMobile = stageDim.width < 768;
  const cx = stageDim.width / 2;
  const cy = stageDim.height * (isMobile ? 0.44 : 0.42);
  const rx = isMobile ? stageDim.width * 0.46 : Math.min(stageDim.width * 0.38, 480);
  const ry = Math.min(stageDim.height * (isMobile ? 0.12 : 0.14), isMobile ? 65 : 90);
  const backScale = isMobile ? 0.52 : 0.68;
  const frontScale = isMobile ? 1.05 : 1.15;
  const expo = isMobile ? 2.4 : 1.8;

  return (
    <div className="relative w-full pt-2 pb-6 select-none">
      
      {/* 3D Turntable Disc Stage */}
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className="disc-wrapper cursor-grab active:cursor-grabbing relative h-[440px] sm:h-[480px] md:h-[520px] overflow-visible"
      >
        {/* Ambient Floor Glow */}
        <div className="disc-glow" />

        {/* Arrow Navigation Controls */}
        <button
          onClick={handlePrev}
          type="button"
          aria-label="Dự án trước"
          className="disc-arrow prev text-[22px] font-mono leading-none"
        >
          ‹
        </button>
        <button
          onClick={handleNext}
          type="button"
          aria-label="Dự án tiếp theo"
          className="disc-arrow next text-[22px] font-mono leading-none"
        >
          ›
        </button>

        {/* 3 Floating Laptop Cards */}
        <div className="absolute inset-0 pointer-events-none" style={{ transformStyle: 'preserve-3d' }}>
          {projects.slice(0, 3).map((project, i) => {
            const theta = ((i - rot) / N) * TAU;
            const sinT = Math.sin(theta);
            const cosT = Math.cos(theta);
            const depth = (cosT + 1) / 2; // 0 = back, 1 = front
            const ease = Math.pow(depth, expo);
            const x = cx + sinT * rx;
            const y = cy + cosT * ry;
            const s = backScale + ease * (frontScale - backScale);
            const opacity = 0.35 + Math.pow(depth, 1.2) * 0.65;
            const zIndex = Math.round(depth * 1000);
            const isHero = depth > 0.88;

            return (
              <div
                key={project.id || i}
                onClick={() => {
                  if (!isHero) {
                    // Click side card spins it to front
                    const diff = i - (rawIdx % N);
                    const shortest = ((diff + 1) % 3) - 1;
                    setTarget((t) => t + shortest);
                  }
                }}
                className={`absolute top-0 left-0 pointer-events-auto transition-filter duration-300 ${
                  isHero ? 'cursor-default' : 'cursor-pointer hover:opacity-100'
                }`}
                style={{
                  width: isMobile ? '290px' : '460px',
                  transform: `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px) translate(-50%, -50%) scale(${s.toFixed(3)})`,
                  opacity: opacity.toFixed(3),
                  zIndex,
                  filter: isHero ? 'none' : `brightness(${0.55 + depth * 0.45})`,
                  willChange: 'transform, opacity',
                }}
              >
                {/* Modern Laptop Metallic Chassis */}
                <div
                  className={`relative rounded-t-[12px] sm:rounded-t-[14px] bg-[#12131a] p-[7px] sm:p-[9px] pb-[5px] sm:pb-[7px] border transition-all duration-300 ${
                    isHero
                      ? 'border-[#00e7ff]/60 shadow-[0_30px_70px_-15px_rgba(0,231,255,0.25)]'
                      : 'border-white/10 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.8)]'
                  }`}
                >
                  {/* Top Camera Dot */}
                  <div className="absolute top-[3px] left-1/2 -translate-x-1/2 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#05060c] border border-white/20" />
                  </div>

                  {/* 16:10 Laptop Screen (Scrollable on Hero) */}
                  <div
                    className={`laptop-inner-screen relative w-full aspect-[16/10] overflow-hidden rounded-[4px] bg-[#05060c] ${
                      isHero ? 'overflow-y-auto cursor-ns-resize' : 'overflow-hidden pointer-events-none'
                    }`}
                    onWheel={(e) => {
                      if (isHero) {
                        e.stopPropagation(); // Allow inner scroll without rotating stage
                      }
                    }}
                  >
                    <img
                      src={project.primaryImage || project.thumbnail}
                      alt={project.title}
                      className="w-full h-auto object-cover object-top transition-transform duration-300"
                      loading="eager"
                    />

                    {/* Glare Sheen Highlight */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.07]" />
                  </div>
                </div>

                {/* Laptop Lower Deck Profile & Hinge */}
                <div className="relative">
                  <div className="mx-auto w-[20%] h-[3px] bg-[#1e2029] rounded-t-sm" />
                  <div className="relative h-[9px] sm:h-[11px] rounded-b-[7px] bg-gradient-to-b from-[#2a2c3a] via-[#1b1c26] to-[#0e0f14] border-t border-white/15 shadow-[0_6px_15px_rgba(0,0,0,0.5)]">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 sm:w-16 h-[3px] bg-black/60 rounded-b-md" />
                  </div>
                </div>

                {/* Laptop Underbody Shadow */}
                <div className="w-[85%] mx-auto h-[10px] bg-black/60 blur-[6px] rounded-full -mt-0.5" />
              </div>
            );
          })}
        </div>
      </div>

      {/* Turntable Dot Indicators */}
      <div className="flex items-center justify-center gap-2 mt-4 mb-8">
        {projects.slice(0, 3).map((p, idx) => (
          <button
            key={p.id || idx}
            type="button"
            aria-label={p.title}
            onClick={() => {
              const diff = idx - (rawIdx % N);
              const shortest = ((diff + 1) % 3) - 1;
              setTarget((t) => t + shortest);
            }}
            className={`transition-all duration-300 rounded-full ${
              rawIdx === idx
                ? 'w-7 h-2 bg-gradient-to-r from-[#00e7ff] to-[#2a6bff]'
                : 'w-2 h-2 bg-white/20 hover:bg-white/40'
            }`}
          />
        ))}
      </div>

      {/* Active Project Caption Box (Synchronized with Hero Laptop) */}
      <div className="max-w-[760px] mx-auto px-4 text-center space-y-4">
        <div className="inline-flex items-center gap-2 text-[12px] font-mono text-[#a7a6c4]">
          <span className="text-[#00e7ff] font-bold">0{rawIdx + 1} / 03</span>
          <span>—</span>
          <span className="uppercase tracking-wider">{activeProject.category}</span>
          <span>·</span>
          <span>{activeProject.projectNature || activeProject.client}</span>
        </div>

        <h3 className="text-[28px] sm:text-[36px] font-bold text-[#f3f2fb] tracking-tight font-disp">
          {activeProject.title}
        </h3>

        <p className="text-[15px] sm:text-[16px] text-[#a7a6c4] max-w-[620px] mx-auto leading-relaxed">
          {activeProject.shortDesc}
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
          {activeProject.techStack?.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-white/[0.04] border border-white/10 text-[#f3f2fb]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Primary Case Study Link */}
        <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
          <Link
            to={`/projects/${activeProject.slug}`}
            className="btn-prism"
          >
            <span>Xem case study</span>
            <span className="font-sans font-bold">↗</span>
          </Link>

          {activeProject.liveUrl && (
            <a
              href={activeProject.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <span>Truy cập website</span>
              <ExternalLink size={13} />
            </a>
          )}
        </div>
      </div>

    </div>
  );
};

export default LaptopTurntable;
