// Mock API Abstraction for Animation Story Studio
// Sẵn sàng để kết nối với FastAPI / Supabase sau này.

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const storyApi = {
  getStory: async (storyId, chapterId) => {
    await delay(500);
    return {
      id: storyId,
      chapterId: chapterId,
      status: 'draft',
      scenes: []
    };
  },
  
  saveDraft: async (storyId, chapterId, scenes) => {
    await delay(1000);
    console.log(\`Saved \${scenes.length} scenes to draft for \${storyId}/\${chapterId}\`);
    return { success: true };
  },

  publish: async (storyId, chapterId, scenes) => {
    await delay(1500);
    // Simple mock backend validation
    const invalidScene = scenes.find(s => !s.background?.url);
    if (invalidScene) {
      throw new Error(\`Scene \${invalidScene.order} thiếu background image.\`);
    }
    console.log(\`Published \${scenes.length} scenes for \${storyId}/\${chapterId}\`);
    return { success: true, status: 'published' };
  }
};

export const assetApi = {
  uploadAsset: async (file, onProgress) => {
    // Mock upload that takes time and reports progress
    return new Promise((resolve) => {
      let progress = 0;
      const interval = setInterval(() => {
        progress += 20;
        if (onProgress) onProgress(progress);
        if (progress >= 100) {
          clearInterval(interval);
          // Return a blob URL as mock for uploaded CDN URL
          const url = URL.createObjectURL(file);
          resolve({ url, originalName: file.name, type: file.type });
        }
      }, 200);
    });
  }
};
