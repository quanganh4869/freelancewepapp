export class AnimationEngine {
  static getTransform(preset, scaleFrom, scaleTo, progress) {
    // progress is 0 to 1
    
    // Easing linear for simplicity in this version, can add easeInOut
    const ease = progress; 
    
    let scale = scaleFrom + (scaleTo - scaleFrom) * ease;
    let x = 0;
    let y = 0;

    switch (preset) {
      case 'kenBurns':
        // Zoom in slowly
        break;
      case 'panLeft':
        x = 5 * ease; // pan 5%
        break;
      case 'panRight':
        x = -5 * ease;
        break;
      case 'panUp':
        y = 5 * ease;
        break;
      case 'panDown':
        y = -5 * ease;
        break;
      case 'zoomIn':
        scale = 1 + 0.1 * ease;
        break;
      case 'zoomOut':
        scale = 1.1 - 0.1 * ease;
        break;
      default:
        break;
    }

    return \`scale(\${scale}) translate(\${x}%, \${y}%)\`;
  }

  static getLayerStyles(animationConfig, currentTime) {
    if (!animationConfig) return { opacity: 1, transform: 'none' };
    
    const { preset, duration = 1, delay = 0 } = animationConfig;
    
    let progress = 0;
    if (currentTime > delay) {
      progress = Math.min(1, (currentTime - delay) / duration);
    }
    
    // Default hidden before delay
    if (progress === 0 && preset !== 'none') {
      return { opacity: 0, transform: preset.includes('Up') ? 'translateY(20px)' : 'none' };
    }

    const ease = progress; // linear easing

    switch (preset) {
      case 'fade':
        return { opacity: ease, transform: 'none' };
      case 'fadeUp':
        return { opacity: ease, transform: \`translateY(\${20 - 20 * ease}px)\` };
      case 'fadeDown':
        return { opacity: ease, transform: \`translateY(\${-20 + 20 * ease}px)\` };
      default:
        return { opacity: 1, transform: 'none' };
    }
  }
}
