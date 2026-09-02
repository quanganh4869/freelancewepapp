import React, { useState } from 'react';
import { ArrowLeft, Save, Send, CheckCircle2, MonitorPlay } from 'lucide-react';
import { useStoryEditor } from '../../../store/useStoryEditor';
import { PreviewPlayer } from './PreviewPlayer';

export const StudioHeader = () => {
  const { status, scenes } = useStoryEditor();
  const [isSaving, setIsSaving] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSave = () => {
    setIsSaving(true);
    // Mock API call
    setTimeout(() => {
      setIsSaving(false);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }, 1000);
  };

  const handlePublish = () => {
    // Validation Logic
    if (scenes.length === 0) {
      setErrorMsg("Không thể Publish Story trống.");
      setTimeout(() => setErrorMsg(''), 3000);
      return;
    }
    const invalidScene = scenes.find(s => !s.background?.url);
    if (invalidScene) {
      setErrorMsg(\`Scene \${invalidScene.order} bị lỗi hình ảnh.\`);
      setTimeout(() => setErrorMsg(''), 3000);
      return;
    }
    
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }, 1000);
  };

  return (
    <>
      <header className="h-16 flex items-center justify-between px-6 border-b border-slate-800 bg-studio-950 relative z-50">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => window.location.href = '/'}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-studio-900 transition-colors"
          >
            <ArrowLeft size={18} />
          </button>
          <div>
            <h1 className="text-sm font-bold text-white flex items-center gap-2">
              Animation Story Studio
              <span className={\`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase \${
                status === 'published' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
              }\`}>
                {status}
              </span>
            </h1>
            <p className="text-[11px] text-slate-500">{scenes.length} Scenes</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={() => setShowPreview(true)}
            className="px-4 py-2 rounded-lg text-slate-300 font-bold text-xs hover:text-white hover:bg-slate-800 transition-colors flex items-center gap-2"
          >
            <MonitorPlay size={14} />
            Reader Preview
          </button>
          <div className="w-px h-6 bg-slate-800 mx-2"></div>
          <button 
            onClick={handleSave}
            disabled={isSaving}
            className="px-4 py-2 rounded-lg bg-studio-900 text-white font-bold text-xs hover:bg-slate-800 transition-colors flex items-center gap-2 border border-slate-700"
          >
            <Save size={14} />
            {isSaving ? 'Saving...' : 'Save Draft'}
          </button>
          <button 
            onClick={handlePublish}
            disabled={isSaving}
            className="px-4 py-2 rounded-lg bg-brand-primary text-white font-bold text-xs hover:bg-brand-hover transition-colors flex items-center gap-2 shadow-glow-primary"
          >
            <Send size={14} />
            Publish
          </button>
        </div>

        {showToast && (
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 px-4 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold flex items-center gap-2 shadow-xl animate-fade-in">
            <CheckCircle2 size={16} />
            Thao tác thành công!
          </div>
        )}
        
        {errorMsg && (
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 px-4 py-2 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-bold flex items-center gap-2 shadow-xl animate-fade-in">
            {errorMsg}
          </div>
        )}
      </header>

      {showPreview && <PreviewPlayer onClose={() => setShowPreview(false)} />}
    </>
  );
};
