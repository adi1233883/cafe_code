import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { SALON_DETAILS } from '../data/salonData';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md py-3 shadow-[0_2px_15px_rgba(0,0,0,0.04)] border-b border-[#E8DFD3]'
            : 'bg-[#FAF8F5]/85 backdrop-blur-sm py-5 border-b border-[#E8DFD3]/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Brand Wordmark */}
            <a
              href="#home"
              className="group flex flex-col tracking-tight text-left whitespace-nowrap shrink-0 transition-opacity hover:opacity-85"
            >
              <span className="font-serif text-lg sm:text-xl lg:text-2xl font-semibold tracking-[0.18em] text-[#1E1C1A] uppercase">
                AUTHENTIC BEAUTY
              </span>
              <span className="font-sans text-[10px] sm:text-[11px] font-medium tracking-[0.28em] text-[#82786F] uppercase">
                SALON & STUDIO
              </span>
            </a>

            {/* Zone 2: Navigation Links */}
            <nav className="hidden md:flex items-center gap-7 lg:gap-8 text-sm font-medium text-[#2A2724]">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="relative py-1 whitespace-nowrap shrink-0 text-[#4A4540] hover:text-[#1E1C1A] transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#1E1C1A] hover:after:w-full after:transition-all after:duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Zone 3: Primary CTA */}
            <div className="hidden sm:flex items-center gap-4 shrink-0">
              <a
                href={SALON_DETAILS.phone.href}
                className="hidden lg:flex items-center gap-2 text-xs tracking-wider uppercase text-[#82786F] hover:text-[#1E1C1A] transition-colors"
                title="Call Authentic Beauty Salon"
              >
                <Phone className="w-3.5 h-3.5 text-[#B89F7D]" />
                <span className="font-medium">{SALON_DETAILS.phone.display}</span>
              </a>

              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-widest uppercase text-[#FAF8F5] bg-[#1E1C1A] rounded-none hover:bg-[#38332E] active:scale-[0.98] transition-all whitespace-nowrap shrink-0 border border-[#1E1C1A]"
              >
                <Calendar className="w-3.5 h-3.5 text-[#DCC8B0]" />
                <span>Book Now</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                onClick={onOpenBooking}
                className="px-3 py-1.5 text-[11px] font-semibold tracking-wider uppercase text-[#FAF8F5] bg-[#1E1C1A] rounded-none hover:bg-[#38332E] transition-colors"
              >
                Book
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-[#1E1C1A] hover:text-[#82786F] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#1E1C1A]"
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-[#FAF8F5] shadow-2xl p-6 flex flex-col justify-between border-l border-[#E8DFD3]">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#E8DFD3]">
                <div className="flex flex-col">
                  <span className="font-serif text-base font-semibold tracking-[0.16em] text-[#1E1C1A] uppercase">
                    AUTHENTIC BEAUTY
                  </span>
                  <span className="text-[10px] tracking-[0.24em] text-[#82786F] uppercase">
                    SALON & STUDIO
                  </span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-[#1E1C1A] hover:text-[#82786F]"
                  aria-label="Close navigation"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="mt-8 flex flex-col gap-5">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-serif text-xl text-[#2A2724] hover:text-[#B89F7D] transition-colors py-1"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-[#E8DFD3] space-y-4">
              <a
                href={SALON_DETAILS.phone.href}
                className="flex items-center gap-3 text-sm text-[#4A4540] hover:text-[#1E1C1A]"
              >
                <Phone className="w-4 h-4 text-[#B89F7D]" />
                <span>{SALON_DETAILS.phone.display}</span>
              </a>
              <div className="text-xs text-[#82786F]">
                {SALON_DETAILS.address.full}
              </div>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 text-xs font-semibold tracking-widest uppercase text-[#FAF8F5] bg-[#1E1C1A] hover:bg-[#38332E] transition-colors text-center"
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
