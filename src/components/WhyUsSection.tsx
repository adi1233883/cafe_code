import React from 'react';
import { Sparkles, Compass, HeartHandshake, MapPin } from 'lucide-react';
import { WHY_AUTHENTIC } from '../data/salonData';

export const WhyUsSection: React.FC = () => {
  const icons = [Sparkles, HeartHandshake, Compass, MapPin];

  return (
    <section className="py-20 lg:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14 lg:mb-18">
          <span className="text-xs uppercase tracking-[0.25em] text-[#82786F] font-medium block mb-2">
            Why Authentic Beauty
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1E1C1A] text-balance">
            A Thoughtful Approach to Salon Care
          </h2>
          <p className="text-sm sm:text-base text-[#6E645B] mt-4 font-light leading-relaxed">
            We focus on authentic client relationships, personalized consultations, and a calming studio experience in Cluj-Napoca.
          </p>
        </div>

        {/* 4 Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_AUTHENTIC.map((item, idx) => {
            const IconComponent = icons[idx % icons.length];
            return (
              <div
                key={item.title}
                className="p-7 bg-[#F7F4EF] border border-[#E8DFD3] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-sm font-semibold text-[#8C6D4C]">
                      0{idx + 1}.
                    </span>
                    <IconComponent className="w-4 h-4 text-[#B89F7D]" />
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#1E1C1A]">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#5E554D] font-light mt-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E8DFC2]/80 text-xs text-[#82786F]">
                  <span className="font-medium text-[#1E1C1A]">{item.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
