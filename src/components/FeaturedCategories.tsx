import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { FEATURED_CATEGORIES } from '../data/salonData';

interface FeaturedCategoriesProps {
  onSelectCategory: (categoryId: string) => void;
  onOpenBooking: () => void;
}

export const FeaturedCategories: React.FC<FeaturedCategoriesProps> = ({
  onSelectCategory,
  onOpenBooking,
}) => {
  return (
    <section className="py-20 lg:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16 pb-6 border-b border-[#E8DFD3]">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#82786F] font-medium block mb-2">
              Signature Offerings
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1E1C1A]">
              Designed for Your Routine
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#6E645B] max-w-md font-light leading-relaxed">
            Thoughtfully curated services delivering refined results across hair, nails, and comprehensive beauty care in Cluj-Napoca.
          </p>
        </div>

        {/* 4 Large Visual Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {FEATURED_CATEGORIES.map((category) => (
            <div
              key={category.id}
              className="group relative flex flex-col justify-between bg-[#F5F1EB] border border-[#E5DACD] overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-[#D5C7B6]"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] sm:aspect-[4/3] overflow-hidden bg-[#EAE2D5]">
                <img
                  src={category.imageUrl}
                  alt={`${category.title} at Authentic Beauty Salon & Studio`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                <span className="absolute top-3 left-3 text-[10px] uppercase tracking-widest text-[#FAF8F5] bg-black/40 backdrop-blur-sm px-2.5 py-1">
                  Studio Focus
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-normal text-[#1E1C1A] group-hover:text-[#8C6D4C] transition-colors">
                    {category.title}
                  </h3>
                  <p className="font-serif italic text-sm text-[#7D7267] mt-1">
                    {category.subtitle}
                  </p>
                  <p className="text-xs text-[#635A52] mt-3 leading-relaxed">
                    {category.description}
                  </p>
                </div>

                {/* Card Action */}
                <div className="pt-6 mt-4 border-t border-[#E8DFC2]/60 flex items-center justify-between">
                  <button
                    onClick={() => onSelectCategory(category.id === 'beauty' ? 'beauty' : category.id)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-[#1E1C1A] group-hover:text-[#8C6D4C] transition-colors"
                  >
                    <span>View Treatments</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>

                  <button
                    onClick={onOpenBooking}
                    className="text-[11px] uppercase tracking-wider text-[#82786F] hover:text-[#1E1C1A] transition-colors"
                  >
                    Book
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
