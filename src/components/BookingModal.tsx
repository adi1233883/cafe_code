import React, { useState, useEffect } from 'react';
import { X, Phone, Calendar, Clock, Check, Sparkles, ExternalLink, ArrowRight } from 'lucide-react';
import { SALON_DETAILS, SERVICE_CATEGORIES, SERVICES_LIST, ServiceItem } from '../data/salonData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: ServiceItem | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialService,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('hair');
  const [selectedServiceId, setSelectedServiceId] = useState<string>('');
  const [preferredDate, setPreferredDate] = useState<string>('');
  const [preferredTime, setPreferredTime] = useState<string>('morning');
  const [clientName, setClientName] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');
  const [clientNotes, setClientNotes] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  useEffect(() => {
    if (initialService) {
      setSelectedCategory(initialService.category);
      setSelectedServiceId(initialService.id);
    } else {
      setSelectedServiceId(SERVICES_LIST[0]?.id || '');
    }
    setIsSubmitted(false);
  }, [initialService, isOpen]);

  if (!isOpen) return null;

  const currentCategoryServices = SERVICES_LIST.filter(
    (s) => s.category === selectedCategory
  );

  const selectedService = SERVICES_LIST.find((s) => s.id === selectedServiceId);

  const handleSubmitRequest = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="min-h-full flex items-center justify-center p-4 sm:p-6 text-center">
        <div className="relative w-full max-w-2xl bg-[#FAF8F5] border border-[#DDD3C4] shadow-2xl text-left overflow-hidden transform transition-all my-8">
          
          {/* Header */}
          <div className="p-6 sm:p-8 bg-[#F7F4EF] border-b border-[#E8DFD3] flex items-start justify-between">
            <div>
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#8C6D4C] font-semibold block">
                Appointment Concierge
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#1E1C1A] mt-1">
                Book Your Visit
              </h3>
              <p className="text-xs text-[#70665D] mt-1">
                Authentic Beauty Salon & Studio · Calea Mănăștur 30–32, Cluj-Napoca
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-[#70665D] hover:text-[#1E1C1A] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 sm:p-8">
            {isSubmitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-12 h-12 bg-[#EFE9E0] border border-[#D5C7B6] mx-auto flex items-center justify-center">
                  <Check className="w-6 h-6 text-[#1E1C1A]" />
                </div>
                <h4 className="font-serif text-2xl text-[#1E1C1A]">Appointment Request Received</h4>
                <p className="text-sm text-[#5E554D] max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-semibold text-[#1E1C1A]">{clientName || 'Client'}</span>. Your appointment inquiry for{' '}
                  <span className="font-medium text-[#1E1C1A]">{selectedService?.name || 'Treatment'}</span> on {preferredDate || 'your preferred date'} has been recorded.
                </p>
                <div className="p-4 bg-[#F5F1EB] border border-[#E2D8CA] max-w-md mx-auto text-xs text-[#70665D]">
                  <p className="font-medium text-[#1E1C1A]">For instant confirmation or same-day appointments:</p>
                  <p className="mt-1">Call the salon directly at {SALON_DETAILS.phone.display}</p>
                </div>
                <div className="pt-4 flex items-center justify-center gap-3">
                  <a
                    href={SALON_DETAILS.phone.href}
                    className="px-6 py-2.5 text-xs font-semibold tracking-wider uppercase bg-[#1E1C1A] text-[#FAF8F5]"
                  >
                    Call {SALON_DETAILS.phone.display}
                  </a>
                  <button
                    onClick={onClose}
                    className="px-6 py-2.5 text-xs font-semibold tracking-wider uppercase border border-[#1E1C1A] text-[#1E1C1A]"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                
                {/* 1. Fast Direct Booking Strip (Fresha / MERO / Phone) */}
                <div className="p-4 bg-[#F2EDE5] border border-[#DDD0C0] space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-[#1E1C1A] uppercase tracking-wider">
                      Instant Booking Channels
                    </span>
                    <span className="text-[11px] text-[#8C6D4C]">Direct & Real-time</span>
                  </div>
                  <p className="text-xs text-[#6B6157] leading-relaxed">
                    You can schedule directly via phone or connect to your existing salon booking page (MERO / Fresha).
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <a
                      href={SALON_DETAILS.phone.href}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#1E1C1A] bg-[#FAF8F5] border border-[#CCC0AF] hover:border-[#1E1C1A]"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#8C6D4C]" />
                      <span>Call {SALON_DETAILS.phone.display}</span>
                    </a>
                    <a
                      href={SALON_DETAILS.bookingPlatforms.mero}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#1E1C1A] bg-[#FAF8F5] border border-[#CCC0AF] hover:border-[#1E1C1A]"
                    >
                      <span>MERO Booking Page</span>
                      <ExternalLink className="w-3 h-3 text-[#8C6D4C]" />
                    </a>
                    <a
                      href={SALON_DETAILS.bookingPlatforms.fresha}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#1E1C1A] bg-[#FAF8F5] border border-[#CCC0AF] hover:border-[#1E1C1A]"
                    >
                      <span>Fresha Booking Page</span>
                      <ExternalLink className="w-3 h-3 text-[#8C6D4C]" />
                    </a>
                  </div>
                </div>

                {/* 2. Interactive Booking Concierge Form */}
                <form onSubmit={handleSubmitRequest} className="space-y-5">
                  <div className="space-y-1">
                    <label className="text-xs uppercase tracking-wider text-[#82786F] block font-medium">
                      Select Treatment Category
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {SERVICE_CATEGORIES.map((cat) => (
                        <button
                          type="button"
                          key={cat.id}
                          onClick={() => {
                            setSelectedCategory(cat.id);
                            const firstInCat = SERVICES_LIST.find((s) => s.category === cat.id);
                            if (firstInCat) setSelectedServiceId(firstInCat.id);
                          }}
                          className={`py-2 px-3 text-xs font-medium uppercase tracking-wider text-center border transition-colors ${
                            selectedCategory === cat.id
                              ? 'bg-[#1E1C1A] text-white border-[#1E1C1A]'
                              : 'bg-white text-[#5E554D] border-[#DDD3C4] hover:bg-[#F5F1EB]'
                          }`}
                        >
                          {cat.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs uppercase tracking-wider text-[#82786F] block font-medium">
                      Select Specific Service
                    </label>
                    <select
                      value={selectedServiceId}
                      onChange={(e) => setSelectedServiceId(e.target.value)}
                      className="w-full p-2.5 text-xs bg-white border border-[#DDD3C4] text-[#1E1C1A] focus:outline-none focus:border-[#1E1C1A]"
                    >
                      {currentCategoryServices.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.name} ({s.duration || 'Consultation'})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs uppercase tracking-wider text-[#82786F] block font-medium">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        required
                        value={preferredDate}
                        onChange={(e) => setPreferredDate(e.target.value)}
                        className="w-full p-2.5 text-xs bg-white border border-[#DDD3C4] text-[#1E1C1A] focus:outline-none focus:border-[#1E1C1A]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs uppercase tracking-wider text-[#82786F] block font-medium">
                        Preferred Time of Day
                      </label>
                      <select
                        value={preferredTime}
                        onChange={(e) => setPreferredTime(e.target.value)}
                        className="w-full p-2.5 text-xs bg-white border border-[#DDD3C4] text-[#1E1C1A] focus:outline-none focus:border-[#1E1C1A]"
                      >
                        <option value="morning">Morning (09:00 – 12:00)</option>
                        <option value="afternoon">Early Afternoon (12:00 – 16:00)</option>
                        <option value="evening">Late Afternoon / Evening (16:00 – 20:00)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs uppercase tracking-wider text-[#82786F] block font-medium">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Maria Popescu"
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        className="w-full p-2.5 text-xs bg-white border border-[#DDD3C4] text-[#1E1C1A] focus:outline-none focus:border-[#1E1C1A]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs uppercase tracking-wider text-[#82786F] block font-medium">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +40 7..."
                        value={clientPhone}
                        onChange={(e) => setClientPhone(e.target.value)}
                        className="w-full p-2.5 text-xs bg-white border border-[#DDD3C4] text-[#1E1C1A] focus:outline-none focus:border-[#1E1C1A]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs uppercase tracking-wider text-[#82786F] block font-medium">
                      Notes or Stylist Requests (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Any particular look, event timing, or hair/skin considerations..."
                      value={clientNotes}
                      onChange={(e) => setClientNotes(e.target.value)}
                      className="w-full p-2.5 text-xs bg-white border border-[#DDD3C4] text-[#1E1C1A] focus:outline-none focus:border-[#1E1C1A]"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="text-[11px] text-[#82786F]">
                      No upfront payment required. Consultations held at studio.
                    </span>
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 text-xs font-semibold tracking-widest uppercase text-[#FAF8F5] bg-[#1E1C1A] hover:bg-[#38332E] transition-all"
                    >
                      <span>Request Reservation</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#DCC8B0]" />
                    </button>
                  </div>
                </form>

              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};
