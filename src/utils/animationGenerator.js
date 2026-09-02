// Automatic Animation Generator

const PRESETS = [
  'kenBurns', 
  'panLeft', 
  'panRight', 
  'panUp', 
  'panDown', 
  'fade', 
  'zoomIn', 
  'zoomOut'
];

export const generateAnimationPreset = (index, totalScenes) => {
  // Use deterministic selection based on index to create a rhythm
  // e.g. alternate pan left/right, with occasional kenBurns
  
  if (index === 0) {
    // First scene often looks good with a slow zoom in (kenBurns)
    return {
      preset: 'kenBurns',
      scaleFrom: 1,
      scaleTo: 1.05,
      xFrom: 0,
      xTo: 0,
      yFrom: 0,
      yTo: 0,
      easing: 'ease-out'
    };
  }

  const modulo = index % 4;
  
  switch (modulo) {
    case 0:
      return {
        preset: 'kenBurns',
        scaleFrom: 1.05,
        scaleTo: 1,
        easing: 'ease-in-out'
      };
    case 1:
      return {
        preset: 'panRight',
        scaleFrom: 1.02,
        scaleTo: 1.02,
        xFrom: -1,
        xTo: 1,
        easing: 'linear'
      };
    case 2:
      return {
        preset: 'panLeft',
        scaleFrom: 1.02,
        scaleTo: 1.02,
        xFrom: 1,
        xTo: -1,
        easing: 'linear'
      };
    case 3:
      return {
        preset: 'zoomIn',
        scaleFrom: 1,
        scaleTo: 1.03,
        easing: 'ease-out'
      };
    default:
      return { preset: 'fade', scaleFrom: 1, scaleTo: 1 };
  }
};

export const createSceneObject = (fileUrl, index, total) => {
  const animation = generateAnimationPreset(index, total);
  
  return {
    id: crypto.randomUUID(),
    order: index + 1,
    duration: 6, // Default duration in seconds
    transition: {
      type: 'fade', // fade, crossfade, none
      duration: 1
    },
    background: {
      url: fileUrl,
      animation
    },
    layers: [],
    audio: null
  };
};
