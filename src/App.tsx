import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { FeaturedCategories } from './components/FeaturedCategories';
import { ServicesSection } from './components/ServicesSection';
import { GallerySection } from './components/GallerySection';
import { WhyUsSection } from './components/WhyUsSection';
import { ReviewsSection } from './components/ReviewsSection';
import { BookingCtaSection } from './components/BookingCtaSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { LightboxModal } from './components/LightboxModal';
import { GALLERY_ITEMS, GalleryItem, ServiceItem, SALON_DETAILS } from './data/salonData';
import { Phone, Calendar } from 'lucide-react';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const handleOpenBooking = (service?: ServiceItem) => {
    if (service) {
      setSelectedService(service);
    } else {
      setSelectedService(null);
    }
    setIsBookingOpen(true);
  };

  const handleSelectFeaturedCategory = (categoryId: string) => {
    setActiveCategory(categoryId);
    const servicesEl = document.getElementById('services');
    if (servicesEl) {
      servicesEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenLightbox = (item: GalleryItem) => {
    setLightboxItem(item);
  };

  const handleNextLightbox = () => {
    if (!lightboxItem) return;
    const currentIndex = GALLERY_ITEMS.findIndex((i) => i.id === lightboxItem.id);
    const nextIndex = (currentIndex + 1) % GALLERY_ITEMS.length;
    setLightboxItem(GALLERY_ITEMS[nextIndex]);
  };

  const handlePrevLightbox = () => {
    if (!lightboxItem) return;
    const currentIndex = GALLERY_ITEMS.findIndex((i) => i.id === lightboxItem.id);
    const prevIndex = (currentIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
    setLightboxItem(GALLERY_ITEMS[prevIndex]);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1E1C1A] flex flex-col font-sans selection:bg-[#EAE2D5] selection:text-[#1E1C1A]">
      {/* Sticky Header */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* 2. About Section */}
        <AboutSection />

        {/* 3. Featured Categories (Visual Cards) */}
        <FeaturedCategories
          onSelectCategory={handleSelectFeaturedCategory}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 4. Full Services Menu */}
        <ServicesSection
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          onBookService={(service) => handleOpenBooking(service)}
        />

        {/* 5. Visual Gallery & Studio Work */}
        <GallerySection onOpenLightbox={handleOpenLightbox} />

        {/* 6. Why Authentic Beauty (4 Core Reasons) */}
        <WhyUsSection />

        {/* 7. Reviews & Client Experience Placeholders */}
        <ReviewsSection />

        {/* 8. Booking CTA Section */}
        <BookingCtaSection onOpenBooking={() => handleOpenBooking()} />

        {/* 9. Contact & Map Section */}
        <ContactSection onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Interactive Booking Concierge Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialService={selectedService}
      />

      {/* Fullscreen Lightbox Modal */}
      <LightboxModal
        item={lightboxItem}
        onClose={() => setLightboxItem(null)}
        onSelectNext={handleNextLightbox}
        onSelectPrev={handlePrevLightbox}
      />

      {/* Mobile Sticky Quick Action Bar (Under 15% sticky cap) */}
      <div className="sm:hidden fixed bottom-0 inset-x-0 z-30 bg-[#FAF8F5]/95 backdrop-blur-md border-t border-[#E8DFD3] p-3 flex items-center gap-2 shadow-lg">
        <a
          href={SALON_DETAILS.phone.href}
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 text-[11px] font-semibold tracking-wider uppercase text-[#1E1C1A] bg-[#FAF8F5] border border-[#1E1C1A]"
        >
          <Phone className="w-3.5 h-3.5 text-[#8C6D4C]" />
          <span>Call</span>
        </a>
        <button
          onClick={() => handleOpenBooking()}
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 text-[11px] font-semibold tracking-wider uppercase text-[#FAF8F5] bg-[#1E1C1A]"
        >
          <Calendar className="w-3.5 h-3.5 text-[#DCC8B0]" />
          <span>Book Now</span>
        </button>
      </div>
    </div>
  );
}
