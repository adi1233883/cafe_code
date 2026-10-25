import React, { useState } from 'react';
import { Maximize2, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/salonData';

interface GallerySectionProps {
  onOpenLightbox: (item: GalleryItem) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenLightbox }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'salon' | 'hair' | 'nails' | 'beauty' | 'wellness'>('all');

  const filters = [
    { id: 'all', label: 'All Work' },
    { id: 'salon', label: 'Salon & Studio' },
    { id: 'hair', label: 'Hair & Styling' },
    { id: 'nails', label: 'Nails & Care' },
    { id: 'beauty', label: 'Skincare & Makeup' },
    { id: 'wellness', label: 'Wellness' },
  ] as const;

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#F5F1EB] border-t border-[#E8DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-[#E0D5C7]">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#82786F] font-medium block mb-2">
              Visual Portfolio
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1E1C1A]">
              Studio & Work Gallery
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#6E645B] max-w-md font-light leading-relaxed">
            A visual glimpse inside Authentic Beauty Salon & Studio, from our peaceful studio interior to meticulous hair, nail, and facial treatments.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-4 py-2 text-xs font-medium tracking-wider uppercase transition-colors ${
                activeFilter === f.id
                  ? 'bg-[#1E1C1A] text-[#FAF8F5]'
                  : 'bg-[#FAF8F5] text-[#5A524A] hover:bg-[#EFE9E0] border border-[#DDD3C4]'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Masonry / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => onOpenLightbox(item)}
              className={`group relative overflow-hidden bg-[#E8E1D5] border border-[#DCD1C2] cursor-pointer shadow-sm hover:shadow-md transition-all duration-300 ${
                idx === 0 ? 'sm:col-span-2 lg:col-span-2 aspect-[16/9]' : 'aspect-[4/3]'
              }`}
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                <div className="flex justify-end">
                  <span className="p-2 bg-black/40 backdrop-blur-sm text-white">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                </div>

                <div className="text-white">
                  <span className="text-[10px] uppercase tracking-widest text-[#DCC8B0]">
                    {item.categoryLabel}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-normal mt-0.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#E0D6C8] font-light mt-1 line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Demo Replacement Note for Salon Owner */}
        <div className="mt-8 text-center text-xs text-[#82786F]">
          <span className="font-medium text-[#1E1C1A]">Curated Studio Concepts</span>
          <span className="mx-2">·</span>
          <span>Photography can be updated with real salon images upon owner request.</span>
        </div>

      </div>
    </section>
  );
};
