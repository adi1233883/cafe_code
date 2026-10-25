import React, { useState } from 'react';
import { MapPin, Phone, Clock, Calendar, ExternalLink, Instagram, Facebook } from 'lucide-react';
import { SALON_DETAILS } from '../data/salonData';

interface ContactSectionProps {
  onOpenBooking: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenBooking }) => {
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(SALON_DETAILS.phone.display);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-[#82786F] font-medium block mb-2">
            Visit & Contact
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1E1C1A]">
            Locate The Studio
          </h2>
          <p className="text-sm sm:text-base text-[#6E645B] mt-4 font-light leading-relaxed">
            Conveniently situated on Calea Mănăștur in Cluj-Napoca. We welcome you to schedule an appointment or reach out with any inquiries.
          </p>
        </div>

        {/* Contact Details Grid + Map Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          
          {/* Left Column: Salon Contact Card */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 bg-[#F7F4EF] border border-[#E8DFD3] p-8 sm:p-10">
            <div className="space-y-8">
              <div>
                <span className="font-serif text-2xl font-normal text-[#1E1C1A] block">
                  Authentic Beauty Salon & Studio
                </span>
                <span className="text-xs uppercase tracking-[0.2em] text-[#82786F] mt-1 block">
                  Cluj-Napoca Studio
                </span>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-[#8C6D4C] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="text-xs uppercase tracking-wider text-[#82786F] block font-medium">
                    Studio Location
                  </span>
                  <p className="text-base text-[#1E1C1A] font-medium">
                    {SALON_DETAILS.address.street}
                  </p>
                  <p className="text-sm text-[#5E554D]">
                    {SALON_DETAILS.address.city}, {SALON_DETAILS.address.country}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3.5">
                <Phone className="w-5 h-5 text-[#8C6D4C] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="text-xs uppercase tracking-wider text-[#82786F] block font-medium">
                    Direct Appointments & Inquiries
                  </span>
                  <a
                    href={SALON_DETAILS.phone.href}
                    className="text-lg font-serif font-medium text-[#1E1C1A] hover:text-[#8C6D4C] transition-colors block"
                  >
                    {SALON_DETAILS.phone.display}
                  </a>
                  <button
                    onClick={handleCopyPhone}
                    className="text-[11px] uppercase tracking-wider text-[#82786F] hover:text-[#1E1C1A] underline cursor-pointer"
                  >
                    {copiedPhone ? 'Copied to clipboard' : 'Copy phone number'}
                  </button>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-3.5">
                <Clock className="w-5 h-5 text-[#8C6D4C] shrink-0 mt-0.5" />
                <div className="space-y-1.5 w-full">
                  <span className="text-xs uppercase tracking-wider text-[#82786F] block font-medium">
                    Studio Schedule
                  </span>
                  {SALON_DETAILS.hours.map((item) => (
                    <div
                      key={item.days}
                      className="flex items-center justify-between text-xs text-[#5E554D] py-0.5 border-b border-[#E8DFD3]/60 last:border-0"
                    >
                      <span>{item.days}</span>
                      <span className="font-medium text-[#1E1C1A]">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Media Placeholders (No invented accounts) */}
              <div className="pt-4 border-t border-[#E8DFD3]">
                <span className="text-xs uppercase tracking-wider text-[#82786F] block font-medium mb-3">
                  Social Channels (Placeholders)
                </span>
                <div className="flex items-center gap-3">
                  <div
                    className="inline-flex items-center gap-2 px-3 py-2 text-xs text-[#5E554D] bg-[#FAF8F5] border border-[#DDD3C4]"
                    title="Salon Instagram account placeholder"
                  >
                    <Instagram className="w-4 h-4 text-[#8C6D4C]" />
                    <span>Instagram Profile (Add link)</span>
                  </div>
                  <div
                    className="inline-flex items-center gap-2 px-3 py-2 text-xs text-[#5E554D] bg-[#FAF8F5] border border-[#DDD3C4]"
                    title="Salon Facebook page placeholder"
                  >
                    <Facebook className="w-4 h-4 text-[#8C6D4C]" />
                    <span>Facebook (Add link)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="pt-6 border-t border-[#E8DFD3] flex flex-col sm:flex-row gap-3">
              <a
                href={SALON_DETAILS.phone.href}
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold tracking-wider uppercase text-[#FAF8F5] bg-[#1E1C1A] hover:bg-[#38332E] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#DCC8B0]" />
                <span>Call Studio</span>
              </a>

              <button
                onClick={onOpenBooking}
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold tracking-wider uppercase text-[#1E1C1A] bg-transparent border border-[#1E1C1A] hover:bg-[#1E1C1A] hover:text-white transition-colors"
              >
                <Calendar className="w-3.5 h-3.5 text-[#8C6D4C]" />
                <span>Book Visit</span>
              </button>
            </div>

          </div>

          {/* Right Column: Location Map Area */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative flex-1 min-h-[380px] bg-[#EAE2D5] border border-[#DCD1C2] overflow-hidden">
              {/* Interactive OpenStreetMap Embed centered on Calea Mănăștur Cluj-Napoca */}
              <iframe
                title="Authentic Beauty Salon & Studio Map on Calea Mănăștur, Cluj-Napoca"
                src="https://www.openstreetmap.org/export/embed.html?bbox=23.5550%2C46.7550%2C23.5850%2C46.7700&layer=mapnik&marker=46.7628%2C23.5701"
                className="w-full h-full min-h-[380px] border-0"
                loading="lazy"
              />

              {/* Map Floating Card */}
              <div className="absolute top-4 left-4 p-4 bg-[#FAF8F5]/95 backdrop-blur-md border border-[#DDD3C4] shadow-md max-w-xs">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#1E1C1A]">
                  <MapPin className="w-4 h-4 text-[#8C6D4C]" />
                  <span>Calea Mănăștur 30–32</span>
                </div>
                <p className="text-[11px] text-[#82786F] mt-1">
                  Cluj-Napoca 400658, Romania
                </p>
                <a
                  href={`https://maps.google.com/?q=${SALON_DETAILS.address.mapQuery}`}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-2 inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#8C6D4C] hover:underline"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="p-4 bg-[#F5F1EB] border border-[#E0D5C7] border-t-0 flex items-center justify-between text-xs text-[#7A7067]">
              <span>Accessible location along Cluj-Napoca main transit corridor</span>
              <a
                href={`https://maps.google.com/?q=${SALON_DETAILS.address.mapQuery}`}
                target="_blank"
                rel="noreferrer noopener"
                className="font-medium text-[#1E1C1A] hover:underline"
              >
                Get Driving & Transit Directions →
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
