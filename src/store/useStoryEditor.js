import { create } from 'zustand';

// Simple history implementation
const MAX_HISTORY = 20;

const initialEditorState = {
  storyId: null,
  chapterId: null,
  status: 'draft',
  scenes: [],
  selectedSceneId: null,
  selectedLayerId: null,
  isPlaying: false,
  playhead: 0,
  zoomLevel: 100,
  jobStatus: 'READY', // UPLOADING, PROCESSING, GENERATING, READY, FAILED
  jobProgress: 0,
};

export const useStoryEditor = create((set, get) => ({
  ...initialEditorState,
  
  // History stack
  past: [],
  future: [],

  _saveHistory: (currentState) => {
    const { scenes, past } = currentState;
    const newPast = [...past, { scenes: JSON.parse(JSON.stringify(scenes)) }];
    if (newPast.length > MAX_HISTORY) newPast.shift();
    return { past: newPast, future: [] };
  },

  undo: () => set((state) => {
    if (state.past.length === 0) return state;
    const previous = state.past[state.past.length - 1];
    const newPast = state.past.slice(0, state.past.length - 1);
    const newFuture = [{ scenes: state.scenes }, ...state.future];
    return {
      scenes: previous.scenes,
      past: newPast,
      future: newFuture
    };
  }),

  redo: () => set((state) => {
    if (state.future.length === 0) return state;
    const next = state.future[0];
    const newFuture = state.future.slice(1);
    const newPast = [...state.past, { scenes: state.scenes }];
    return {
      scenes: next.scenes,
      past: newPast,
      future: newFuture
    };
  }),

  // Actions
  initializeStory: (storyId, chapterId, initialData) => set({
    storyId,
    chapterId,
    status: initialData?.status || 'draft',
    scenes: initialData?.scenes || [],
    selectedSceneId: initialData?.scenes?.[0]?.id || null,
    past: [],
    future: [],
    jobStatus: 'READY',
  }),

  setJobStatus: (status, progress = 0) => set({ jobStatus: status, jobProgress: progress }),

  setScenes: (scenes, skipHistory = false) => set((state) => {
    const updates = { scenes };
    if (!skipHistory) {
      Object.assign(updates, state._saveHistory(state));
    }
    return updates;
  }),

  updateScene: (id, updates) => set((state) => {
    const newScenes = state.scenes.map((scene) =>
      scene.id === id ? { ...scene, ...updates } : scene
    );
    return { scenes: newScenes, ...state._saveHistory(state) };
  }),

  deleteScene: (id) => set((state) => {
    const newScenes = state.scenes.filter((s) => s.id !== id).map((s, i) => ({ ...s, order: i + 1 }));
    const selectedSceneId = state.selectedSceneId === id
      ? (newScenes[0]?.id || null)
      : state.selectedSceneId;
    return { scenes: newScenes, selectedSceneId, ...state._saveHistory(state) };
  }),

  reorderScenes: (startIndex, endIndex) => set((state) => {
    const newScenes = Array.from(state.scenes);
    const [removed] = newScenes.splice(startIndex, 1);
    newScenes.splice(endIndex, 0, removed);
    const updatedScenes = newScenes.map((s, i) => ({ ...s, order: i + 1 }));
    return { scenes: updatedScenes, ...state._saveHistory(state) };
  }),

  selectScene: (id) => set({ selectedSceneId: id, selectedLayerId: null }),

  // Layer Actions
  addLayer: (sceneId, layer) => set((state) => {
    const newScenes = state.scenes.map((scene) =>
      scene.id === sceneId
        ? { ...scene, layers: [...(scene.layers || []), layer] }
        : scene
    );
    return { scenes: newScenes, selectedLayerId: layer.id, ...state._saveHistory(state) };
  }),

  updateLayer: (sceneId, layerId, updates) => set((state) => {
    const newScenes = state.scenes.map((scene) =>
      scene.id === sceneId
        ? {
            ...scene,
            layers: scene.layers.map((layer) =>
              layer.id === layerId ? { ...layer, ...updates } : layer
            ),
          }
        : scene
    );
    return { scenes: newScenes, ...state._saveHistory(state) };
  }),

  deleteLayer: (sceneId, layerId) => set((state) => {
    const newScenes = state.scenes.map((scene) =>
      scene.id === sceneId
        ? { ...scene, layers: scene.layers.filter((l) => l.id !== layerId) }
        : scene
    );
    return { 
      scenes: newScenes, 
      selectedLayerId: state.selectedLayerId === layerId ? null : state.selectedLayerId,
      ...state._saveHistory(state) 
    };
  }),

  selectLayer: (id) => set({ selectedLayerId: id }),

  // Runtime / Playback
  setPlaying: (isPlaying) => set({ isPlaying }),
  setPlayhead: (playhead) => set({ playhead }),
}));
