import React, { useState, useEffect, useRef } from 'react';
import { X, Play, Pause, Maximize, Minimize, ChevronLeft, ChevronRight } from 'lucide-react';
import { useStoryEditor } from '../../../store/useStoryEditor';

export const PreviewPlayer = ({ onClose }) => {
  const { scenes } = useStoryEditor();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef(null);

  const currentScene = scenes[currentIndex];

  useEffect(() => {
    if (!isPlaying || !currentScene) return;
    
    // Auto advance to next scene when duration ends
    const timer = setTimeout(() => {
      if (currentIndex < scenes.length - 1) {
        setCurrentIndex(prev => prev + 1);
      } else {
        setIsPlaying(false); // End of story
      }
    }, currentScene.duration * 1000);

    return () => clearTimeout(timer);
  }, [currentIndex, isPlaying, currentScene, scenes.length]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen().catch(err => console.log(err));
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const handleNext = () => {
    if (currentIndex < scenes.length - 1) setCurrentIndex(prev => prev + 1);
  };
  
  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(prev => prev - 1);
  };

  if (!currentScene) return null;

  const bgAnim = currentScene.background.animation;
  const animDuration = \`\${currentScene.duration}s\`;
  
  let bgTransform = 'scale(1) translate(0%, 0%)';
  if (isPlaying && bgAnim) {
    bgTransform = \`scale(\${bgAnim.scaleTo || 1}) translate(\${bgAnim.xTo || 0}%, \${bgAnim.yTo || 0}%)\`;
  } else if (bgAnim) {
    bgTransform = \`scale(\${bgAnim.scaleFrom || 1}) translate(\${bgAnim.xFrom || 0}%, \${bgAnim.yFrom || 0}%)\`;
  }

  return (
    <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center font-sans">
      
      {/* Top Controls Overlay */}
      <div className="absolute top-0 inset-x-0 p-4 flex items-center justify-between z-50 bg-gradient-to-b from-black/80 to-transparent">
        <button 
          onClick={onClose}
          className="p-2 rounded-full bg-black/50 text-white hover:bg-white/20 transition-colors backdrop-blur-md"
        >
          <X size={20} />
        </button>
        <div className="flex gap-2">
          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-2 rounded-full bg-black/50 text-white hover:bg-white/20 transition-colors backdrop-blur-md"
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>
          <button 
            onClick={toggleFullscreen}
            className="p-2 rounded-full bg-black/50 text-white hover:bg-white/20 transition-colors backdrop-blur-md"
          >
            {isFullscreen ? <Minimize size={20} /> : <Maximize size={20} />}
          </button>
        </div>
      </div>

      {/* Reader Container (Simulates Mobile Phone Ratio by default, expands in Fullscreen) */}
      <div 
        ref={containerRef}
        className={\`relative bg-black shadow-2xl overflow-hidden flex items-center justify-center \${
          isFullscreen ? 'w-full h-full' : 'w-full max-w-[400px] aspect-[9/16] rounded-2xl ring-4 ring-white/10'
        }\`}
      >
        {/* Preload Cache (Invisible) */}
        <div className="hidden">
          {scenes[currentIndex - 1]?.background.url && <img src={scenes[currentIndex - 1].background.url} alt="preload prev" />}
          {scenes[currentIndex + 1]?.background.url && <img src={scenes[currentIndex + 1].background.url} alt="preload next" />}
          {scenes[currentIndex + 2]?.background.url && <img src={scenes[currentIndex + 2].background.url} alt="preload next next" />}
        </div>

        {/* Progress Bar Top */}
        <div className="absolute top-0 inset-x-0 h-1 bg-white/20 z-50 flex gap-1 px-2 pt-2">
          {scenes.map((s, idx) => (
            <div key={s.id} className="h-full flex-1 bg-white/30 rounded-full overflow-hidden">
              <div 
                className="h-full bg-white transition-all ease-linear"
                style={{ 
                  width: idx < currentIndex ? '100%' : (idx === currentIndex && isPlaying ? '100%' : '0%'),
                  transitionDuration: idx === currentIndex && isPlaying ? \`\${s.duration}s\` : '0s'
                }}
              />
            </div>
          ))}
        </div>

        {/* Scene Image Render */}
        {currentScene.background.url && (
          <img 
            key={currentScene.id} // force re-render on scene change
            src={currentScene.background.url}
            alt="Story Scene"
            className="absolute inset-0 w-full h-full object-cover origin-center"
            style={{
              transform: bgTransform,
              transition: isPlaying ? \`transform \${animDuration} \${bgAnim?.easing || 'linear'}\` : 'none'
            }}
          />
        )}

        {/* Swipe/Click Hitboxes for Navigation */}
        <div className="absolute inset-0 z-40 flex">
          <div className="w-1/3 h-full cursor-pointer" onClick={handlePrev} />
          <div className="w-1/3 h-full cursor-pointer" onClick={() => setIsPlaying(!isPlaying)} />
          <div className="w-1/3 h-full cursor-pointer" onClick={handleNext} />
        </div>

        {/* Navigation Hints (Hidden on small screens) */}
        {!isFullscreen && (
          <>
            <button onClick={handlePrev} className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white hover:bg-white/20 transition-colors z-50">
              <ChevronLeft size={24} />
            </button>
            <button onClick={handleNext} className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white hover:bg-white/20 transition-colors z-50">
              <ChevronRight size={24} />
            </button>
          </>
        )}
      </div>
    </div>
  );
};
