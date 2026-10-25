import React from 'react';
import { ArrowRight, MapPin, Sparkles } from 'lucide-react';
import { SALON_DETAILS } from '../data/salonData';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section id="home" className="relative pt-24 sm:pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid: Editorial Typography Left, Curated Salon Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8 z-10">
            {/* Location & Trust Kicker (clean unboxed text, no pills) */}
            <div className="flex items-center gap-2.5 text-xs tracking-wider uppercase text-[#82786F]">
              <span className="flex items-center gap-1.5 font-medium text-[#1E1C1A]">
                <MapPin className="w-3.5 h-3.5 text-[#B89F7D]" />
                Cluj-Napoca, Romania
              </span>
              <span aria-hidden="true">·</span>
              <span>Calea Mănăștur 30–32</span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-normal tracking-tight text-[#1E1C1A] leading-[1.08] text-balance">
              Your Beauty. <br />
              <span className="italic font-light text-[#73685E]">Your Signature.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#5A524A] font-light leading-relaxed max-w-xl">
              A modern beauty destination in the heart of Cluj-Napoca, where beauty, care and confidence come together.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 text-xs font-semibold tracking-widest uppercase text-[#FAF8F5] bg-[#1E1C1A] hover:bg-[#38332E] active:scale-[0.99] transition-all shadow-sm border border-[#1E1C1A]"
              >
                <span>Book an Appointment</span>
                <ArrowRight className="w-4 h-4 text-[#DCC8B0]" />
              </button>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-xs font-semibold tracking-widest uppercase text-[#1E1C1A] bg-transparent hover:bg-[#EFE9E0]/60 active:scale-[0.99] transition-all border border-[#D5C9BC]"
              >
                <span>Explore Our Services</span>
              </a>
            </div>

            {/* Subtle Service Overview */}
            <div className="pt-6 sm:pt-8 border-t border-[#E8DFD3]/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#786E64]">
              <span className="font-medium text-[#1E1C1A]">Specialized Studio Care</span>
              <span aria-hidden="true" className="text-[#C5B8A8]">·</span>
              <span>Hair Styling & Color</span>
              <span aria-hidden="true" className="text-[#C5B8A8]">·</span>
              <span>Precision Nails</span>
              <span aria-hidden="true" className="text-[#C5B8A8]">·</span>
              <span>Facial & Skincare</span>
              <span aria-hidden="true" className="text-[#C5B8A8]">·</span>
              <span>Wellness</span>
            </div>
          </div>

          {/* Right Column: Large Editorial Photography */}
          <div className="lg:col-span-6 relative">
            <div className="relative group overflow-hidden bg-[#EAE3D8] shadow-[0_12px_40px_rgba(0,0,0,0.06)] border border-[#E2D8CA]">
              <img
                src="/src/assets/images/hero_salon_interior_1792952369872.jpg"
                alt="Authentic Beauty Salon & Studio interior on Calea Mănăștur in Cluj-Napoca"
                referrerPolicy="no-referrer"
                className="w-full h-[400px] sm:h-[480px] lg:h-[560px] object-cover object-center transition-transform duration-700 ease-out group-hover:scale-102"
              />
              
              {/* Subtle architectural caption bar */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#161412]/85 via-[#161412]/40 to-transparent p-6 text-[#FAF8F5]">
                <div className="flex items-center justify-between text-xs tracking-wider">
                  <div>
                    <p className="font-serif text-base tracking-normal text-[#FAF8F5]">Authentic Beauty Studio Space</p>
                    <p className="text-[11px] text-[#D8CEBF] font-light">Calea Mănăștur 30–32, Cluj-Napoca</p>
                  </div>
                  <div className="text-right hidden sm:block">
                    <span className="text-[10px] uppercase tracking-widest text-[#DCC8B0]">Studio Concept</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative fine-line accent box */}
            <div className="hidden xl:block absolute -bottom-5 -left-5 w-48 p-4 bg-[#FAF8F5] border border-[#E2D8CA] shadow-sm z-20">
              <p className="font-serif text-sm font-medium text-[#1E1C1A]">Welcoming Ambiance</p>
              <p className="text-[11px] text-[#82786F] mt-0.5 leading-snug">Designed for calm, personal attention and comfort.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
