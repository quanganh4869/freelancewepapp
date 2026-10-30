import React, { useEffect, useCallback, useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export const Lightbox = ({
  isOpen,
  onClose,
  images = [],
  currentIndex = 0,
  onIndexChange
}) => {
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const handlePrev = useCallback(() => {
    if (images.length <= 1) return;
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    onIndexChange(newIndex);
  }, [currentIndex, images.length, onIndexChange]);

  const handleNext = useCallback(() => {
    if (images.length <= 1) return;
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    onIndexChange(newIndex);
  }, [currentIndex, images.length, onIndexChange]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, handlePrev, handleNext]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflowY = 'scroll'; // Prevent layout shift

      return () => {
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflowY = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen]);

  // Touch swipe handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (diff > minSwipeDistance) {
      handleNext();
    } else if (diff < -minSwipeDistance) {
      handlePrev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex] || {};
  const imageSrc = typeof currentImage === 'string' ? currentImage : currentImage.image || currentImage.src;
  const imageTitle = currentImage.title || '';
  const imageDesc = currentImage.desc || '';

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Xem ảnh phóng to"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm transition-opacity duration-200"
      onClick={onClose}
    >
      {/* Top Header Controls */}
      <div
        className="absolute top-0 inset-x-0 h-16 flex items-center justify-between px-4 sm:px-6 z-10 bg-gradient-to-b from-black/60 to-transparent"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-white text-xs sm:text-sm font-mono tracking-wider opacity-80">
          <span className="font-semibold text-white">{currentIndex + 1}</span>
          <span className="mx-1 text-white/50">/</span>
          <span>{images.length}</span>
        </div>

        <button
          onClick={onClose}
          aria-label="Đóng (Esc)"
          className="p-2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors flex items-center justify-center"
        >
          <X size={20} />
        </button>
      </div>

      {/* Main Image Viewport */}
      <div
        className="relative max-w-6xl w-full h-full flex flex-col items-center justify-center p-4 sm:p-12 select-none"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="relative max-h-[75vh] sm:max-h-[80vh] flex items-center justify-center">
          <img
            key={imageSrc}
            src={imageSrc}
            alt={imageTitle || `Ảnh ${currentIndex + 1}`}
            className="max-h-[75vh] sm:max-h-[80vh] max-w-[92vw] sm:max-w-[85vw] object-contain shadow-2xl transition-transform duration-200"
          />
        </div>

        {/* Caption bar */}
        {(imageTitle || imageDesc) && (
          <div className="mt-4 text-center max-w-2xl px-4">
            {imageTitle && (
              <h4 className="text-white text-sm sm:text-base font-semibold tracking-tight">
                {imageTitle}
              </h4>
            )}
            {imageDesc && (
              <p className="text-white/70 text-xs sm:text-sm mt-1 leading-relaxed">
                {imageDesc}
              </p>
            )}
          </div>
        )}
      </div>

      {/* Prev / Next Buttons */}
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            aria-label="Ảnh trước (Mũi tên trái)"
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-2.5 text-white/80 hover:text-white bg-black/40 hover:bg-black/70 rounded-full transition-colors z-10"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            aria-label="Ảnh tiếp theo (Mũi tên phải)"
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-2.5 text-white/80 hover:text-white bg-black/40 hover:bg-black/70 rounded-full transition-colors z-10"
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}
    </div>
  );
};

export default Lightbox;
