import React, { useMemo, useRef, useState, useEffect } from 'react';
import { useStoryEditor } from '../../../store/useStoryEditor';
import { BoundingBox } from './BoundingBox';
import { AnimationEngine } from '../../../engine/AnimationEngine';

export const StoryCanvas = () => {
  const { scenes, selectedSceneId, selectedLayerId, isPlaying, playhead } = useStoryEditor();
  const canvasRef = useRef(null);

  const currentScene = useMemo(() => 
    scenes.find(s => s.id === selectedSceneId) || scenes[0],
    [scenes, selectedSceneId]
  );

  // Calculate local time for this scene based on global playhead
  const [localTime, setLocalTime] = useState(0);

  useEffect(() => {
    let accumulated = 0;
    for (const s of scenes) {
      if (s.id === currentScene?.id) {
        setLocalTime(Math.max(0, playhead - accumulated));
        break;
      }
      accumulated += s.duration;
    }
  }, [playhead, scenes, currentScene]);


  if (!currentScene) return <div className="text-slate-500">No Scene Selected</div>;

  const bgAnim = currentScene.background.animation;
  
  // Realtime transform based on localTime / duration
  let progress = 0;
  if (isPlaying) {
     progress = Math.min(1, localTime / currentScene.duration);
  }

  const bgTransform = AnimationEngine.getTransform(
    bgAnim?.preset, 
    bgAnim?.scaleFrom || 1, 
    bgAnim?.scaleTo || 1, 
    progress
  );

  // Calculate Parallax shifts for layers
  // If background pans left (X goes negative), layers with depth > 0 should pan faster
  let bgXPercent = 0;
  let bgYPercent = 0;
  
  if (bgAnim?.preset === 'panLeft') bgXPercent = 5 * progress;
  if (bgAnim?.preset === 'panRight') bgXPercent = -5 * progress;
  if (bgAnim?.preset === 'panUp') bgYPercent = 5 * progress;
  if (bgAnim?.preset === 'panDown') bgYPercent = -5 * progress;


  return (
    <div 
      ref={canvasRef}
      className="relative bg-black w-full max-w-[400px] aspect-[9/16] rounded-lg shadow-2xl overflow-hidden border border-slate-800 ring-4 ring-studio-950"
    >
      {/* Background Image Layer */}
      {currentScene.background.url && (
        <img 
          src={currentScene.background.url}
          alt="Scene Background"
          className="absolute inset-0 w-full h-full object-cover origin-center"
          style={{
            transform: bgTransform,
            // CSS transition is omitted because requestAnimationFrame / state is driving it frame-by-frame
            // In a real optimized app, we use CSS transition if not scrubbing timeline.
            transition: isPlaying ? 'none' : 'transform 0.3s ease'
          }}
        />
      )}

      {/* Layers rendering with Bounding Box */}
      {currentScene.layers?.map(layer => {
        const isSelected = selectedLayerId === layer.id;
        const layerAnimStyles = AnimationEngine.getLayerStyles(layer.animation, localTime);
        
        // Apply Parallax effect based on depth (default depth = 1)
        const depth = layer.depth !== undefined ? layer.depth : 1.2; 
        // Background depth is 1.0, layer depth > 1 means it moves faster
        const parallaxX = bgXPercent * (depth - 1);
        const parallaxY = bgYPercent * (depth - 1);
        
        // Combine AnimationEngine transforms with parallax
        const combinedTransform = \`\${layerAnimStyles.transform !== 'none' ? layerAnimStyles.transform : ''} translate(\${parallaxX}%, \${parallaxY}%)\`;

        return (
          <BoundingBox 
            key={layer.id} 
            layer={layer} 
            isSelected={isSelected} 
            canvasRef={canvasRef} 
            sceneId={currentScene.id}
          >
            <div style={{...layerAnimStyles, transform: combinedTransform}}>
              {layer.type === 'text' && (
                <p className="text-white text-xl font-bold drop-shadow-md whitespace-nowrap">
                  {layer.content}
                </p>
              )}
              {layer.type === 'image' && (
                <img src={layer.assetUrl} alt="layer" className="w-full h-full object-contain" />
              )}
            </div>
          </BoundingBox>
        );
      })}
    </div>
  );
};
