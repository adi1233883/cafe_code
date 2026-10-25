import React from 'react';
import { Sparkles, HeartHandshake, Compass } from 'lucide-react';
import { SALON_DETAILS } from '../data/salonData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#F5F1EB] border-y border-[#E8DFD3]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Portrait Photography */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative">
              <div className="relative overflow-hidden bg-[#EAE3D8] border border-[#DDD3C4] shadow-[0_8px_30px_rgba(0,0,0,0.05)]">
                <img
                  src="/src/assets/images/about_beauty_portrait_1792952370499.jpg"
                  alt="Authentic beauty and natural glowing skin at Authentic Beauty Salon & Studio"
                  referrerPolicy="no-referrer"
                  className="w-full h-[440px] sm:h-[500px] lg:h-[540px] object-cover object-top transition-transform duration-700 ease-out hover:scale-102"
                />
              </div>

              {/* Quiet caption tag */}
              <div className="mt-3 flex items-center justify-between text-xs text-[#82786F]">
                <span>Natural finish & individual focus</span>
                <span>Cluj-Napoca</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Text */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.25em] text-[#82786F] font-medium block">
                About The Studio
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1E1C1A] leading-[1.15] text-balance">
                Beauty, with a personal touch.
              </h2>
            </div>

            <div className="space-y-4 text-[#534B43] text-base leading-relaxed">
              <p>
                Authentic Beauty Salon & Studio brings together beauty services in one welcoming space in Cluj-Napoca.
              </p>
              <p>
                The salon offers services across hair, nails, makeup, skincare and other beauty treatments. Every visit is guided by thoughtful consultations, clean aesthetics, and attention to detail.
              </p>
              <p className="text-sm text-[#70665D]">
                Whether you are preparing for a special occasion or maintaining your regular self-care routine, our studio provides a calm atmosphere designed for comfort and confidence.
              </p>
            </div>

            {/* Core Values Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#DECFC0]/80">
              <div className="p-4 bg-[#FAF8F5] border border-[#E5DACD]">
                <h3 className="font-serif text-base font-medium text-[#1E1C1A]">Individual Focus</h3>
                <p className="text-xs text-[#7A7067] mt-1 leading-normal">
                  Services tailored to your unique hair type, skin tone, and personal aesthetic preferences.
                </p>
              </div>

              <div className="p-4 bg-[#FAF8F5] border border-[#E5DACD]">
                <h3 className="font-serif text-base font-medium text-[#1E1C1A]">Comfortable Space</h3>
                <p className="text-xs text-[#7A7067] mt-1 leading-normal">
                  A serene salon environment on Calea Mănăștur where you can pause, relax, and refresh.
                </p>
              </div>
            </div>

            <div className="pt-2 text-xs text-[#82786F] flex items-center gap-2">
              <span className="font-medium text-[#1E1C1A]">Authentic Beauty Salon & Studio</span>
              <span aria-hidden="true">·</span>
              <span>Calea Mănăștur 30–32, Cluj-Napoca</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
