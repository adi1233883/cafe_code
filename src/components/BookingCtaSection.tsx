import React from 'react';
import { ArrowRight, Phone, Calendar, ExternalLink } from 'lucide-react';
import { SALON_DETAILS } from '../data/salonData';

interface BookingCtaSectionProps {
  onOpenBooking: () => void;
}

export const BookingCtaSection: React.FC<BookingCtaSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="book" className="py-20 lg:py-28 bg-[#1E1C1A] text-[#FAF8F5] relative overflow-hidden">
      {/* Decorative ambient subtle background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#38322B] via-[#1E1C1A] to-[#12100E] opacity-90 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 z-10">
        
        {/* Kicker */}
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-[#DCC8B0]">
          <span>Authentic Beauty Salon & Studio</span>
          <span aria-hidden="true">·</span>
          <span>Cluj-Napoca</span>
        </div>

        {/* Headline */}
        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#FAF8F5] leading-tight text-balance max-w-3xl mx-auto">
          Ready for your next beauty appointment?
        </h2>

        {/* Supporting Text */}
        <p className="text-base sm:text-lg text-[#D5CBC0] font-light max-w-2xl mx-auto leading-relaxed">
          Choose your treatment and book your next visit at Authentic Beauty Salon & Studio.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-xs font-semibold tracking-widest uppercase text-[#1E1C1A] bg-[#FAF8F5] hover:bg-[#EFE9E0] active:scale-[0.98] transition-all"
          >
            <Calendar className="w-4 h-4 text-[#8C6D4C]" />
            <span>Book Your Appointment</span>
            <ArrowRight className="w-4 h-4 text-[#8C6D4C]" />
          </button>

          <a
            href={SALON_DETAILS.phone.href}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-xs font-semibold tracking-widest uppercase text-[#FAF8F5] bg-transparent border border-[#6E6358] hover:border-[#FAF8F5] hover:bg-white/5 active:scale-[0.98] transition-all"
          >
            <Phone className="w-4 h-4 text-[#DCC8B0]" />
            <span>Call {SALON_DETAILS.phone.display}</span>
          </a>
        </div>

        {/* Booking Platforms Note */}
        <div className="pt-8 border-t border-[#38332E] max-w-xl mx-auto text-xs text-[#A89E93] space-y-2">
          <div className="flex items-center justify-center gap-4 text-[11px] uppercase tracking-wider text-[#DCC8B0]">
            <span>MERO Compatible</span>
            <span aria-hidden="true">·</span>
            <span>Fresha Compatible</span>
            <span aria-hidden="true">·</span>
            <span>Direct Studio Calling</span>
          </div>
          <p className="text-[11px] text-[#8C8277]">
            Easily linked to your salon's live Fresha or MERO calendar. Appointments can be scheduled 24/7.
          </p>
        </div>

      </div>
    </section>
  );
};
