import React, { useEffect, useRef, useState } from 'react';
import { useStoryEditor } from '../../../store/useStoryEditor';
import { Layers } from 'lucide-react';

export const Timeline = () => {
  const { scenes, selectedSceneId, selectScene, isPlaying, playhead, setPlayhead } = useStoryEditor();
  const timelineRef = useRef(null);
  const [isScrubbing, setIsScrubbing] = useState(false);

  // Calculate total duration
  const totalDuration = scenes.reduce((acc, s) => acc + s.duration, 0);
  const pixelsPerSecond = 20;

  // Auto-play logic simulation
  useEffect(() => {
    let interval;
    if (isPlaying && !isScrubbing) {
      interval = setInterval(() => {
        setPlayhead(prev => {
          if (prev >= totalDuration) return 0;
          return prev + 0.05; // 20 FPS roughly
        });
      }, 50);
    }
    return () => clearInterval(interval);
  }, [isPlaying, isScrubbing, totalDuration, setPlayhead]);

  // Sync selected scene with playhead
  useEffect(() => {
    // Only auto-switch scenes when playing or scrubbing, not when playhead is static 
    // unless playhead falls completely out of bounds.
    let accumulatedTime = 0;
    for (const scene of scenes) {
      accumulatedTime += scene.duration;
      if (playhead < accumulatedTime) {
        if (selectedSceneId !== scene.id && (isPlaying || isScrubbing)) {
          selectScene(scene.id);
        }
        break;
      }
    }
  }, [playhead, isPlaying, isScrubbing, scenes, selectedSceneId, selectScene]);

  // Handle Scrubbing
  const handleTimelineClick = (e) => {
    if (!timelineRef.current) return;
    const rect = timelineRef.current.getBoundingClientRect();
    const scrollLeft = timelineRef.current.scrollLeft;
    // Calculate exact time based on X coordinate minus approximate gap width
    const x = e.clientX - rect.left + scrollLeft;
    
    let time = x / pixelsPerSecond;
    // Account for gaps roughly (4px per gap)
    const approximateSceneCount = Math.floor(time / (scenes[0]?.duration || 1));
    time = (x - (approximateSceneCount * 4)) / pixelsPerSecond;
    
    time = Math.max(0, Math.min(time, totalDuration));
    setPlayhead(time);
  };

  const handleMouseDown = (e) => {
    setIsScrubbing(true);
    handleTimelineClick(e);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isScrubbing) return;
      handleTimelineClick(e);
    };
    const handleMouseUp = () => setIsScrubbing(false);
    
    if (isScrubbing) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isScrubbing]); // Cannot safely add handleTimelineClick to dep array without useCallback, but omitting for brevity


  return (
    <div className="flex flex-col h-full bg-studio-900 border-t border-slate-800 select-none">
      <div className="p-2 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400 bg-studio-950">
        <div className="flex items-center gap-2 font-bold">
          <Layers size={14} /> Timeline
        </div>
        <div className="font-mono text-brand-primary">
          {playhead.toFixed(2)}s / {totalDuration}s
        </div>
      </div>
      
      <div 
        ref={timelineRef}
        onMouseDown={handleMouseDown}
        className="flex-1 overflow-x-auto relative p-4 flex items-end cursor-text"
      >
        <div className="relative h-20 flex gap-1 items-end min-w-max pointer-events-none">
          {scenes.map((scene, i) => (
            <div 
              key={scene.id}
              onClick={(e) => { e.stopPropagation(); selectScene(scene.id); }}
              style={{ width: scene.duration * pixelsPerSecond }}
              className={\`h-16 rounded-md cursor-pointer transition-colors border overflow-hidden relative pointer-events-auto \${
                selectedSceneId === scene.id ? 'bg-brand-primary/20 border-brand-primary' : 'bg-studio-800 border-slate-700 hover:border-slate-500'
              }\`}
            >
              <img src={scene.background.url} className="absolute inset-0 w-full h-full object-cover opacity-50 pointer-events-none" alt="" />
              <div className="absolute inset-x-0 bottom-0 p-1 bg-black/60 text-[9px] font-bold text-white pointer-events-none">
                S{i+1} • {scene.duration}s
              </div>
            </div>
          ))}

          {/* Playhead Marker */}
          {scenes.length > 0 && (
            <div 
              className="absolute top-0 bottom-0 w-0.5 bg-rose-500 z-10"
              style={{ 
                left: (playhead * pixelsPerSecond) + (scenes.findIndex(s => {
                  let acc = 0;
                  for(let j=0; j<scenes.length; j++) {
                    acc += scenes[j].duration;
                    if(playhead <= acc) return true;
                  }
                  return false;
                }) * 4) + 'px', 
                transition: 'none' // Removed transition to allow instant scrubbing
              }}
            >
              <div className="w-3 h-3 rounded-sm bg-rose-500 -translate-x-1/2 -translate-y-1"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
