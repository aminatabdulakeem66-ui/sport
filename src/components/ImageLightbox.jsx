import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { handleImageError } from '../utils/imageFallback';

export const ImageLightbox = ({ item, items, onClose, onNavigate }) => {
  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);

  const handlePrev = (e) => {
    e.stopPropagation();
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    onNavigate(items[prevIndex]);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    const nextIndex = (currentIndex + 1) % items.length;
    onNavigate(items[nextIndex]);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') {
        const prevIndex = (currentIndex - 1 + items.length) % items.length;
        onNavigate(items[prevIndex]);
      }
      if (e.key === 'ArrowRight') {
        const nextIndex = (currentIndex + 1) % items.length;
        onNavigate(items[nextIndex]);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, items, onClose, onNavigate]);

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        aria-label="Close Lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev / Next controls */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-[#702B3D] text-white transition-all hover:scale-110"
        aria-label="Previous Image"
      >
        <ChevronLeft className="w-7 h-7" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-[#702B3D] text-white transition-all hover:scale-110"
        aria-label="Next Image"
      >
        <ChevronRight className="w-7 h-7" />
      </button>

      {/* Main Image & Caption Container */}
      <div 
        className="max-w-5xl w-full flex flex-col items-center max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-[#151515] max-h-[75vh] flex items-center justify-center border border-white/10">
          <img
            src={item.image}
            alt={item.title}
            onError={handleImageError}
            className="max-h-[75vh] max-w-full object-contain"
          />
        </div>

        {/* Caption Bar */}
        <div className="mt-4 text-center max-w-2xl px-4">
          <div className="flex items-center justify-center gap-2 mb-1">
            <span className="bg-[#D2B779] text-[#103D35] text-[10px] font-black uppercase px-2.5 py-0.5 rounded">
              {item.category}
            </span>
            <span className="text-gray-400 text-xs font-semibold">
              {item.tag}
            </span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white font-heading">
            {item.title}
          </h3>
          <p className="text-xs sm:text-sm text-gray-300 mt-1 leading-relaxed">
            {item.caption}
          </p>
          <p className="text-[11px] text-gray-500 mt-2">
            Image {currentIndex + 1} of {items.length} • Use Arrow Keys or Swipe to Navigate
          </p>
        </div>
      </div>
    </div>
  );
};
