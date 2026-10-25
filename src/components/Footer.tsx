import React from 'react';
import { MapPin, Phone, Calendar, ArrowUp, Instagram, Facebook } from 'lucide-react';
import { SALON_DETAILS } from '../data/salonData';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#161412] text-[#FAF8F5] pt-16 sm:pt-20 pb-12 border-t border-[#2A2622]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#2C2723]">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="space-y-1">
              <span className="font-serif text-2xl sm:text-3xl font-semibold tracking-[0.16em] uppercase block text-[#FAF8F5]">
                AUTHENTIC BEAUTY
              </span>
              <span className="text-xs font-sans tracking-[0.3em] uppercase text-[#B89F7D] block">
                SALON & STUDIO
              </span>
            </div>

            <p className="text-sm text-[#A89E93] font-light max-w-sm leading-relaxed">
              A modern beauty destination in the heart of Cluj-Napoca, where beauty, care and confidence come together.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold tracking-widest uppercase text-[#161412] bg-[#FAF8F5] hover:bg-[#EFE9E0] transition-colors"
              >
                <Calendar className="w-3.5 h-3.5 text-[#8C6D4C]" />
                <span>Book Appointment</span>
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs uppercase tracking-[0.2em] text-[#8C8074] font-medium block mb-4">
              Navigation
            </span>
            <ul className="space-y-2.5 text-sm text-[#D5CBC0]">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About The Studio</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Services & Treatments</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">Portfolio & Gallery</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">Client Reviews</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Location & Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact & Studio Details */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-xs uppercase tracking-[0.2em] text-[#8C8074] font-medium block mb-4">
              Studio & Contact
            </span>

            <div className="space-y-3 text-sm text-[#D5CBC0]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B89F7D] shrink-0 mt-1" />
                <span>
                  {SALON_DETAILS.address.street}, {SALON_DETAILS.address.city}, {SALON_DETAILS.address.country}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#B89F7D] shrink-0" />
                <a href={SALON_DETAILS.phone.href} className="hover:text-white transition-colors">
                  {SALON_DETAILS.phone.display}
                </a>
              </div>

              {/* Social Placeholders */}
              <div className="pt-3 border-t border-[#2C2723]">
                <span className="text-xs text-[#8C8074] block mb-2">Connect:</span>
                <div className="flex items-center gap-3 text-xs text-[#A89E93]">
                  <span className="inline-flex items-center gap-1.5 hover:text-white cursor-pointer" title="Social channel placeholder">
                    <Instagram className="w-3.5 h-3.5 text-[#B89F7D]" />
                    <span>Instagram</span>
                  </span>
                  <span aria-hidden="true" className="text-[#3E3832]">·</span>
                  <span className="inline-flex items-center gap-1.5 hover:text-white cursor-pointer" title="Social channel placeholder">
                    <Facebook className="w-3.5 h-3.5 text-[#B89F7D]" />
                    <span>Facebook</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back To Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#82766A]">
          <div>
            © {new Date().getFullYear()} {SALON_DETAILS.name}. All rights reserved. Cluj-Napoca, Romania.
          </div>

          <div className="flex items-center gap-6">
            <span>Website Concept Demo for Salon Presentation</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-[#D5CBC0] hover:text-white transition-colors"
              aria-label="Scroll back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
