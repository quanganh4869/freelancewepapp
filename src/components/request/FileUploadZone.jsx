import React, { useRef, useState } from 'react';

const DISALLOWED_EXTENSIONS = ['exe', 'bat', 'sh', 'cmd', 'msi', 'vbs', 'ps1', 'jar', 'com'];
const MAX_FILE_SIZE_MB = 15;

/**
 * FileUploadZone — Tải tệp đính kèm an toàn (Hình ảnh, tài liệu mô tả)
 */
export default function FileUploadZone({ files = [], onFilesChange }) {
  const fileInputRef = useRef(null);
  const [dragActive, setDragActive] = useState(false);
  const [uploadError, setUploadError] = useState('');

  const formatFileSize = (bytes) => {
    if (bytes < 1024) return bytes + ' B';
    else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / 1048576).toFixed(1) + ' MB';
  };

  const validateAndAddFiles = (newFilesList) => {
    setUploadError('');
    const validFiles = [];

    for (const file of newFilesList) {
      const ext = file.name.split('.').pop().toLowerCase();
      if (DISALLOWED_EXTENSIONS.includes(ext)) {
        setUploadError(`Định dạng tệp .${ext} không được phép tải lên vì lý do an toàn.`);
        continue;
      }

      if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
        setUploadError(`Tệp "${file.name}" vượt quá dung lượng cho phép (${MAX_FILE_SIZE_MB}MB).`);
        continue;
      }

      // Lưu trữ metadata cơ bản
      validFiles.push({
        name: file.name,
        size: file.size,
        type: file.type || 'application/octet-stream',
        uploadedAt: new Date().toISOString()
      });
    }

    if (validFiles.length > 0) {
      onFilesChange([...files, ...validFiles]);
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      validateAndAddFiles(Array.from(e.dataTransfer.files));
    }
  };

  const handleInputChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      validateAndAddFiles(Array.from(e.target.files));
    }
  };

  const removeFile = (index) => {
    const updated = files.filter((_, i) => i !== index);
    onFilesChange(updated);
  };

  return (
    <div className="space-y-3">
      <div
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        className={`
          p-6 rounded-xl border-2 border-dashed text-center cursor-pointer transition-colors
          ${
            dragActive
              ? 'border-[#0284c7] bg-[#f0f9ff] dark:bg-[#0369a1]/10'
              : 'border-[#cbd5e1] dark:border-[#332b26] hover:border-[#0284c7]/50 bg-[#f8fafc]/50 dark:bg-[#121422]'
          }
        `}
      >
        <input
          ref={fileInputRef}
          type="file"
          multiple
          onChange={handleInputChange}
          className="hidden"
          accept="image/*,.pdf,.doc,.docx,.xls,.xlsx,.txt,.zip"
        />

        <div className="w-10 h-10 mx-auto rounded-full bg-[#e0f2fe] text-[#0284c7] dark:bg-[#0284c7]/20 flex items-center justify-center mb-2">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
        </div>

        <p className="text-[14px] font-semibold text-[#1e293b] dark:text-[#f1f5f9]">
          Nhấn để chọn tệp hoặc kéo thả vào đây
        </p>
        <p className="text-[12px] text-[#64748b] dark:text-[#94a3b8] mt-1">
          Hỗ trợ ảnh (PNG, JPG), PDF, Word, Excel, ZIP (Tối đa {MAX_FILE_SIZE_MB}MB/tệp)
        </p>
      </div>

      {uploadError && (
        <p className="text-[13px] text-[#ef4444] font-medium flex items-center gap-1.5">
          <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          {uploadError}
        </p>
      )}

      {files.length > 0 && (
        <div className="space-y-2 mt-2">
          <p className="text-[12px] font-semibold text-[#475569] dark:text-[#94a3b8] uppercase tracking-wider">
            Tệp đính kèm ({files.length})
          </p>
          <div className="divide-y divide-[#f1f5f9] dark:divide-[#1e2030] rounded-lg border border-[#e2e8f0] dark:border-[#2a2c3d] overflow-hidden bg-white dark:bg-[#121422]">
            {files.map((file, idx) => (
              <div key={idx} className="p-3 flex items-center justify-between gap-3 text-sm">
                <div className="flex items-center gap-2.5 min-w-0">
                  <svg className="w-4 h-4 text-[#0284c7] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium text-[#1e293b] dark:text-[#f1f5f9] truncate">
                    {file.name}
                  </span>
                  <span className="text-[12px] text-[#64748b] dark:text-[#94a3b8] shrink-0">
                    ({formatFileSize(file.size)})
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => removeFile(idx)}
                  className="text-xs text-[#ef4444] hover:underline shrink-0 p-1"
                  title="Xóa tệp"
                >
                  Xóa
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
