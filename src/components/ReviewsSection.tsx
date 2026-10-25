import React from 'react';
import { Star, MessageSquareQuote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIAL_PLACEHOLDERS } from '../data/salonData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-[#F5F1EB] border-t border-[#E8DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-[#82786F] font-medium block mb-2">
            Client Experiences
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1E1C1A]">
            Verified Client Reviews
          </h2>
          <p className="text-sm sm:text-base text-[#6E645B] mt-4 font-light leading-relaxed">
            Genuine experiences from clients visiting Authentic Beauty Salon & Studio in Cluj-Napoca.
          </p>
        </div>

        {/* Testimonial Cards with clearly marked placeholders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIAL_PLACEHOLDERS.map((item, idx) => (
            <div
              key={item.id}
              className="p-8 bg-[#FAF8F5] border border-[#E2D8CA] flex flex-col justify-between shadow-sm relative"
            >
              <div>
                {/* 5-Star Rating Indicator */}
                <div className="flex items-center gap-1 mb-6 text-[#C4A47C]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="font-serif text-xl sm:text-2xl text-[#1E1C1A] leading-snug italic font-normal">
                  “{item.text}”
                </blockquote>

                <p className="text-xs text-[#82786F] mt-4 leading-relaxed font-sans">
                  Ready to display feedback from your Google Business Profile, Fresha, or MERO appointments.
                </p>
              </div>

              {/* Attribution */}
              <div className="pt-6 mt-8 border-t border-[#E8DFD3] flex items-center justify-between text-xs text-[#635A52]">
                <div>
                  <div className="font-medium text-[#1E1C1A] flex items-center gap-1.5">
                    <span>{item.author}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#8C6D4C]" />
                  </div>
                  <div className="text-[11px] text-[#82786F] mt-0.5">{item.treatment}</div>
                </div>
                <span className="text-[10px] tracking-wider uppercase text-[#8C6D4C] border border-[#DDD0C0] px-2 py-0.5">
                  Demo Slot
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Professional Integration Box */}
        <div className="mt-12 p-6 bg-[#FAF8F5] border border-[#E0D5C7] max-w-2xl mx-auto text-center space-y-2">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-[#8C6D4C] font-semibold">
            <MessageSquareQuote className="w-4 h-4" />
            <span>Salon Owner Note: Verified Review Integration</span>
          </div>
          <p className="text-xs text-[#6E645B] leading-relaxed">
            Per professional salon design standards, placeholder cards are provided above. Authentic client reviews from your existing Google Business Profile or Fresha/MERO booking platform can be linked directly or synced automatically.
          </p>
        </div>

      </div>
    </section>
  );
};
