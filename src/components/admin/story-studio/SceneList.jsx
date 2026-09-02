import React from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { useStoryEditor } from '../../../store/useStoryEditor';
import { GripVertical, Plus, Trash2 } from 'lucide-react';

export const SceneList = () => {
  const { scenes, selectedSceneId, selectScene, reorderScenes, deleteScene } = useStoryEditor();

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    reorderScenes(result.source.index, result.destination.index);
  };

  return (
    <div className="flex flex-col h-full bg-studio-900 border-r border-slate-800">
      <div className="p-4 border-b border-slate-800 flex items-center justify-between sticky top-0 bg-studio-900 z-10">
        <h2 className="font-bold text-white text-sm">Scenes</h2>
        <span className="text-xs text-slate-500 bg-studio-950 px-2 py-0.5 rounded-full">{scenes.length}</span>
      </div>

      <div className="flex-1 overflow-y-auto p-3">
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="scene-list">
            {(provided) => (
              <div 
                {...provided.droppableProps} 
                ref={provided.innerRef}
                className="space-y-2"
              >
                {scenes.map((scene, index) => (
                  <Draggable key={scene.id} draggableId={scene.id} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        onClick={() => selectScene(scene.id)}
                        className={\`relative flex items-center gap-2 p-2 rounded-xl border transition-all cursor-pointer \${
                          selectedSceneId === scene.id 
                            ? 'bg-brand-primary/10 border-brand-primary' 
                            : 'bg-studio-950 border-slate-800 hover:border-slate-600'
                        } \${snapshot.isDragging ? 'shadow-2xl ring-2 ring-brand-primary' : ''}\`}
                      >
                        <div 
                          {...provided.dragHandleProps}
                          className="p-1 text-slate-500 hover:text-white cursor-grab"
                        >
                          <GripVertical size={14} />
                        </div>
                        
                        <div className="w-16 h-24 bg-black rounded-lg overflow-hidden shrink-0 border border-slate-800 relative">
                          <img 
                            src={scene.background.url} 
                            alt={\`Scene \${index + 1}\`}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute bottom-1 right-1 bg-black/60 backdrop-blur-md px-1.5 rounded text-[10px] text-white font-bold">
                            {scene.duration}s
                          </div>
                        </div>

                        <div className="flex-1 min-w-0">
                          <h4 className="text-xs font-bold text-white truncate">Scene {index + 1}</h4>
                          <p className="text-[10px] text-brand-primary truncate">{scene.background.animation?.preset || 'Static'}</p>
                        </div>

                        <button 
                          onClick={(e) => { e.stopPropagation(); deleteScene(scene.id); }}
                          className="p-1.5 text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 rounded-lg transition-colors"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>

      <div className="p-4 border-t border-slate-800">
        <button className="w-full py-2.5 rounded-xl border border-dashed border-slate-600 text-slate-400 hover:text-white hover:border-slate-400 hover:bg-slate-800/50 flex items-center justify-center gap-2 text-xs font-bold transition-all">
          <Plus size={14} /> Add Scene
        </button>
      </div>
    </div>
  );
};
