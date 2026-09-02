import React, { useRef, useState } from 'react';
import { UploadCloud, AlertCircle, Loader2, RefreshCw } from 'lucide-react';
import { useStoryEditor } from '../../../store/useStoryEditor';
import { processPdfToImages } from '../../../utils/pdfProcessor';
import { createSceneObject } from '../../../utils/animationGenerator';
import { assetApi } from '../../../services/api/storyApi';

export const StoryUploader = () => {
  const { setScenes, selectScene, jobStatus, jobProgress, setJobStatus } = useStoryEditor();
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState(null);
  const [lastFiles, setLastFiles] = useState(null);
  const fileInputRef = useRef(null);

  const handleFiles = async (files) => {
    if (!files || files.length === 0) return;
    setLastFiles(files);
    setError(null);
    setJobStatus('UPLOADING', 0);

    try {
      const allScenes = [];
      let totalFilesProcessed = 0;

      for (const file of Array.from(files)) {
        // Step 1: Uploading Simulation via API
        const uploadedAsset = await assetApi.uploadAsset(file, (prog) => {
          setJobStatus('UPLOADING', Math.round(prog * 0.3)); // Upload takes 30% of total pipeline
        });

        if (file.type === 'application/pdf') {
          // Step 2: Processing PDF
          setJobStatus('PROCESSING', 30);
          const images = await processPdfToImages(file, (current, total) => {
            setJobStatus('PROCESSING', 30 + Math.round((current / total) * 40)); // Processing takes 40%
          });
          
          setJobStatus('GENERATING', 70);
          images.forEach((dataUrl, idx) => {
            // Include original asset logic - for now we just use the generated dataUrl
            // In a real backend, dataUrl would be a CDN link, and we'd keep original Asset ID.
            allScenes.push(createSceneObject(dataUrl, allScenes.length, images.length));
          });
          setJobStatus('GENERATING', 90);

        } else if (file.type.startsWith('image/')) {
          setJobStatus('GENERATING', 50);
          // Directly use uploaded asset URL for image
          allScenes.push(createSceneObject(uploadedAsset.url, allScenes.length, files.length));
          setJobStatus('GENERATING', 90);
        } else {
          console.warn('Unsupported file type:', file.type);
        }
        
        totalFilesProcessed++;
      }

      if (allScenes.length > 0) {
        setJobStatus('READY', 100);
        setScenes(allScenes);
        selectScene(allScenes[0].id);
      } else {
        throw new Error("Không có file hợp lệ nào được tải lên.");
      }
    } catch (err) {
      console.error(err);
      setError(err.message || 'Có lỗi xảy ra khi xử lý file.');
      setJobStatus('FAILED', 0);
    }
  };

  const onDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };
  const onDragLeave = () => setIsDragging(false);
  const onDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    handleFiles(e.dataTransfer.files);
  };

  const isWorking = jobStatus !== 'READY' && jobStatus !== 'FAILED';

  const getStatusText = () => {
    switch (jobStatus) {
      case 'UPLOADING': return 'Đang tải file lên...';
      case 'PROCESSING': return 'Đang phân tích và cắt trang...';
      case 'GENERATING': return 'Đang sinh hiệu ứng chuyển động...';
      default: return 'Đang xử lý...';
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-8 text-center">
      <div 
        onDragOver={!isWorking ? onDragOver : undefined}
        onDragLeave={!isWorking ? onDragLeave : undefined}
        onDrop={!isWorking ? onDrop : undefined}
        className={\`border-2 border-dashed rounded-2xl p-12 transition-all \${
          isDragging ? 'border-amber-500 bg-amber-500/10' : 'border-slate-700 bg-studio-900 hover:border-slate-500'
        }\`}
      >
        {isWorking ? (
          <div className="flex flex-col items-center space-y-4">
            <Loader2 size={48} className="animate-spin text-amber-500" />
            <h3 className="text-xl font-bold text-white">{getStatusText()}</h3>
            <div className="w-full max-w-md bg-studio-950 rounded-full h-2 mt-4 overflow-hidden border border-slate-800">
              <div 
                className="bg-amber-500 h-2 transition-all duration-300"
                style={{ width: \`\${jobProgress}%\` }}
              ></div>
            </div>
            <p className="text-slate-400 text-sm mt-2">{jobProgress}% hoàn thành</p>
          </div>
        ) : (
          <div className="flex flex-col items-center space-y-4">
            <div className="w-20 h-20 rounded-full bg-studio-950 flex items-center justify-center border border-slate-800 text-slate-400">
              <UploadCloud size={32} />
            </div>
            <h3 className="text-xl font-bold text-white">Kéo thả PDF hoặc Hình ảnh vào đây</h3>
            <p className="text-slate-400 text-sm max-w-md">
              Hệ thống sẽ tự động phân tích PDF, tạo Scene và sinh Animation Cinematic. Giữ nguyên chất lượng ảnh gốc.
            </p>
            <input 
              type="file" 
              ref={fileInputRef} 
              className="hidden" 
              multiple 
              accept=".pdf,image/png,image/jpeg,image/webp"
              onChange={(e) => handleFiles(e.target.files)}
            />
            <button 
              onClick={() => fileInputRef.current?.click()}
              className="mt-4 px-6 py-2.5 rounded-xl bg-slate-800 text-white font-bold hover:bg-slate-700 transition-all border border-slate-700"
            >
              Chọn File
            </button>
          </div>
        )}
      </div>

      {jobStatus === 'FAILED' && error && (
        <div className="mt-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-start justify-between gap-3 text-left">
          <div className="flex items-start gap-3">
            <AlertCircle size={20} className="text-rose-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-rose-400 text-sm">Xử lý thất bại</h4>
              <p className="text-rose-300/80 text-xs mt-1">{error}</p>
            </div>
          </div>
          <button 
            onClick={() => handleFiles(lastFiles)}
            className="flex items-center gap-2 px-3 py-1.5 bg-rose-500/20 text-rose-300 rounded-lg text-xs font-bold hover:bg-rose-500/30 transition-colors"
          >
            <RefreshCw size={14} /> Thử lại
          </button>
        </div>
      )}
    </div>
  );
};
