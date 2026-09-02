import React from 'react';
import { useStoryEditor } from '../../../store/useStoryEditor';
import { Settings2, Clock, Image as ImageIcon, Type, Play, Square } from 'lucide-react';

export const PropertiesPanel = () => {
  const { scenes, selectedSceneId, updateScene, isPlaying, setPlaying } = useStoryEditor();
  const scene = scenes.find(s => s.id === selectedSceneId);

  if (!scene) return null;

  const handleUpdateBgAnim = (field, value) => {
    updateScene(scene.id, {
      background: {
        ...scene.background,
        animation: {
          ...scene.background.animation,
          [field]: value
        }
      }
    });
  };

  return (
    <div className="flex flex-col h-full bg-studio-900 border-l border-slate-800 text-xs">
      {/* Header / Play Controls */}
      <div className="p-4 border-b border-slate-800 flex items-center justify-between sticky top-0 bg-studio-900 z-10">
        <h2 className="font-bold text-white flex items-center gap-2 text-sm">
          <Settings2 size={16} /> Properties
        </h2>
        <button 
          onClick={() => setPlaying(!isPlaying)}
          className={\`p-1.5 rounded-lg flex items-center gap-1 font-bold \${
            isPlaying ? 'bg-rose-500/10 text-rose-400' : 'bg-brand-primary/10 text-brand-primary'
          }\`}
        >
          {isPlaying ? <Square size={14} fill="currentColor"/> : <Play size={14} fill="currentColor"/>}
          {isPlaying ? 'Stop' : 'Play Scene'}
        </button>
      </div>

      <div className="p-4 space-y-6 flex-1 overflow-y-auto">
        
        {/* Scene Settings */}
        <div className="space-y-3">
          <h3 className="font-bold text-slate-300 uppercase tracking-wider text-[10px]">Scene Settings</h3>
          
          <div>
            <label className="text-slate-400 mb-1.5 block">Duration (seconds)</label>
            <div className="flex items-center gap-2 bg-studio-950 border border-slate-800 rounded-lg px-3 py-2">
              <Clock size={14} className="text-slate-500" />
              <input 
                type="number" 
                min="1" max="60"
                value={scene.duration}
                onChange={(e) => updateScene(scene.id, { duration: Number(e.target.value) })}
                className="bg-transparent text-white w-full focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Background Animation Settings */}
        <div className="space-y-3">
          <h3 className="font-bold text-slate-300 uppercase tracking-wider text-[10px]">Background Animation</h3>
          
          <div>
            <label className="text-slate-400 mb-1.5 block">Preset</label>
            <select 
              value={scene.background.animation?.preset || 'none'}
              onChange={(e) => handleUpdateBgAnim('preset', e.target.value)}
              className="w-full bg-studio-950 border border-slate-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-brand-primary"
            >
              <option value="none">None</option>
              <option value="kenBurns">Ken Burns (Zoom)</option>
              <option value="panLeft">Pan Left</option>
              <option value="panRight">Pan Right</option>
              <option value="panUp">Pan Up</option>
              <option value="panDown">Pan Down</option>
              <option value="fade">Fade</option>
              <option value="zoomIn">Zoom In</option>
              <option value="zoomOut">Zoom Out</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-slate-400 mb-1 block">Scale From</label>
              <input 
                type="number" step="0.01"
                value={scene.background.animation?.scaleFrom || 1}
                onChange={(e) => handleUpdateBgAnim('scaleFrom', Number(e.target.value))}
                className="w-full bg-studio-950 border border-slate-800 rounded-lg px-3 py-1.5 text-white focus:outline-none"
              />
            </div>
            <div>
              <label className="text-slate-400 mb-1 block">Scale To</label>
              <input 
                type="number" step="0.01"
                value={scene.background.animation?.scaleTo || 1}
                onChange={(e) => handleUpdateBgAnim('scaleTo', Number(e.target.value))}
                className="w-full bg-studio-950 border border-slate-800 rounded-lg px-3 py-1.5 text-white focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Text Layers */}
        <div className="space-y-3 pt-4 border-t border-slate-800">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-slate-300 uppercase tracking-wider text-[10px]">Text Layers</h3>
            <button 
              onClick={() => {
                const newLayer = {
                  id: crypto.randomUUID(), type: 'text', content: 'Nhập nội dung...', x: 10, y: 80,
                  animation: { preset: 'fadeUp', duration: 1, delay: 0.5 }
                };
                updateScene(scene.id, { layers: [...(scene.layers || []), newLayer] });
              }}
              className="text-[10px] bg-slate-800 hover:bg-slate-700 px-2 py-1 rounded text-white font-bold transition-colors"
            >
              + Thêm Text
            </button>
          </div>

          {scene.layers?.filter(l => l.type === 'text').map((layer, idx) => (
            <div key={layer.id} className="p-3 bg-studio-950 border border-slate-800 rounded-lg space-y-3">
              <div className="flex justify-between items-center">
                <span className="font-bold text-brand-primary">Text {idx + 1}</span>
                <button 
                  onClick={() => {
                    updateScene(scene.id, { layers: scene.layers.filter(l => l.id !== layer.id) });
                  }}
                  className="text-rose-400 hover:text-rose-300"
                >
                  Xóa
                </button>
              </div>
              <textarea 
                value={layer.content}
                onChange={(e) => {
                  const newLayers = scene.layers.map(l => l.id === layer.id ? { ...l, content: e.target.value } : l);
                  updateScene(scene.id, { layers: newLayers });
                }}
                className="w-full bg-studio-900 border border-slate-700 rounded-lg p-2 text-white text-xs focus:outline-none focus:border-brand-primary"
                rows="2"
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
