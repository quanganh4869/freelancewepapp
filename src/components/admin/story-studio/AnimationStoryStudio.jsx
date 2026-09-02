import React, { useEffect } from 'react';
import { useStoryEditor } from '../../../store/useStoryEditor';
import { StudioHeader } from './StudioHeader';
import { SceneList } from './SceneList';
import { StoryCanvas } from './StoryCanvas';
import { PropertiesPanel } from './PropertiesPanel';
import { Timeline } from './Timeline';
import { StoryUploader } from './StoryUploader';
import { useKeyboardShortcuts } from '../../../hooks/useKeyboardShortcuts';

export const AnimationStoryStudio = ({ storyId, chapterId }) => {
  const { initializeStory, scenes } = useStoryEditor();
  
  useKeyboardShortcuts();

  useEffect(() => {
    // In a real app, fetch story/chapter data from API here.
    initializeStory(storyId, chapterId, { status: 'draft', scenes: [] });
  }, [storyId, chapterId, initializeStory]);

  // Debounced Autosave
  useEffect(() => {
    if (scenes.length === 0) return;
    
    const timer = setTimeout(() => {
      console.log('Autosaving draft...', scenes.length, 'scenes');
      // assetApi or storyApi.saveDraft(storyId, chapterId, scenes);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [scenes, storyId, chapterId]);

  if (scenes.length === 0) {
    return (
      <div className="flex flex-col h-screen w-full bg-studio-950 text-slate-200 overflow-hidden font-sans">
        <StudioHeader />
        <div className="flex-1 flex items-center justify-center overflow-auto">
          <StoryUploader />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen w-full bg-studio-950 text-slate-200 overflow-hidden font-sans">
      <StudioHeader />
      
      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar: Scene List */}
        <aside className="w-64 border-r border-slate-800 bg-studio-900 flex flex-col">
          <SceneList />
        </aside>

        {/* Center: Live Preview Canvas */}
        <main className="flex-1 flex flex-col bg-studio-950/50 relative overflow-hidden">
          <div className="flex-1 flex items-center justify-center p-8 overflow-auto">
            <StoryCanvas />
          </div>
          
          {/* Bottom: Timeline */}
          <div className="h-48 border-t border-slate-800 bg-studio-900">
            <Timeline />
          </div>
        </main>

        {/* Right Sidebar: Properties Panel */}
        <aside className="w-80 border-l border-slate-800 bg-studio-900 flex flex-col overflow-y-auto">
          <PropertiesPanel />
        </aside>
      </div>
    </div>
  );
};
