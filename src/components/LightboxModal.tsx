import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem, GALLERY_ITEMS } from '../data/salonData';

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
  onSelectNext: () => void;
  onSelectPrev: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  onClose,
  onSelectNext,
  onSelectPrev,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!item) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onSelectNext();
      if (e.key === 'ArrowLeft') onSelectPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item, onClose, onSelectNext, onSelectPrev]);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Lightbox Container */}
      <div className="relative z-10 max-w-5xl w-full max-h-[92vh] flex flex-col bg-[#1A1816] border border-[#3A332C] text-white shadow-2xl overflow-hidden">
        
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#2D2721] bg-[#161412]">
          <div>
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#DCC8B0]">
              {item.categoryLabel}
            </span>
            <h4 className="font-serif text-lg sm:text-xl font-normal text-white">
              {item.title}
            </h4>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#A89E93] hover:text-white transition-colors"
            aria-label="Close image viewer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image Preview & Navigation Buttons */}
        <div className="relative flex-1 flex items-center justify-center bg-black/40 min-h-[300px] max-h-[70vh] p-2 sm:p-4">
          <img
            src={item.imageUrl}
            alt={item.title}
            referrerPolicy="no-referrer"
            className="max-h-[66vh] max-w-full object-contain mx-auto"
          />

          {/* Prev/Next arrows */}
          <button
            onClick={onSelectPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 bg-black/60 hover:bg-black/80 text-white rounded-none border border-white/20 transition-all"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={onSelectNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 bg-black/60 hover:bg-black/80 text-white rounded-none border border-white/20 transition-all"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Bottom Caption Bar */}
        <div className="p-4 sm:px-6 bg-[#161412] border-t border-[#2D2721] flex flex-col sm:flex-row items-center justify-between text-xs text-[#A89E93] gap-2">
          <p className="font-light">{item.caption}</p>
          <span className="text-[11px] tracking-widest uppercase text-[#8C7F72] shrink-0">
            Authentic Beauty Salon & Studio · Cluj-Napoca
          </span>
        </div>

      </div>
    </div>
  );
};
