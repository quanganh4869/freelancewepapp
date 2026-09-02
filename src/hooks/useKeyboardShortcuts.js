import { useEffect } from 'react';
import { useStoryEditor } from '../store/useStoryEditor';

export const useKeyboardShortcuts = () => {
  const { undo, redo, deleteLayer, selectedSceneId, selectedLayerId, isPlaying, setPlaying } = useStoryEditor();

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Don't trigger if user is typing in an input or textarea
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      if ((e.ctrlKey || e.metaKey) && e.key === 'z') {
        if (e.shiftKey) {
          e.preventDefault();
          redo();
        } else {
          e.preventDefault();
          undo();
        }
      }

      if ((e.ctrlKey || e.metaKey) && e.key === 'y') {
        e.preventDefault();
        redo();
      }

      if (e.key === 'Delete' || e.key === 'Backspace') {
        if (selectedSceneId && selectedLayerId) {
          e.preventDefault();
          deleteLayer(selectedSceneId, selectedLayerId);
        }
      }

      if (e.key === ' ') {
        e.preventDefault();
        setPlaying(!isPlaying);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [undo, redo, deleteLayer, selectedSceneId, selectedLayerId, isPlaying, setPlaying]);
};
