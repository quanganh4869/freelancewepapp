import * as pdfjsLib from 'pdfjs-dist';

// Configure worker to avoid Vite build issues
pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.mjs`;

export const processPdfToImages = async (file, onProgress) => {
  try {
    const arrayBuffer = await file.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
    const numPages = pdf.numPages;
    const images = [];

    for (let i = 1; i <= numPages; i++) {
      if (onProgress) {
        onProgress(i, numPages);
      }
      const page = await pdf.getPage(i);
      // Use a scale that provides good quality without consuming too much memory
      const viewport = page.getViewport({ scale: 2.0 });
      
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = viewport.width;
      canvas.height = viewport.height;

      await page.render({
        canvasContext: ctx,
        viewport: viewport
      }).promise;

      // Convert to WebP or JPEG for better compression
      const dataUrl = canvas.toDataURL('image/jpeg', 0.85);
      images.push(dataUrl);
    }
    
    return images;
  } catch (error) {
    console.error("PDF Processing Error:", error);
    throw new Error('Failed to process PDF file. Ensure it is not corrupted.');
  }
};
