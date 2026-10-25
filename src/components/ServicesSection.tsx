import React, { useState } from 'react';
import { Clock, Calendar, Search, Sparkles } from 'lucide-react';
import { SERVICE_CATEGORIES, SERVICES_LIST, ServiceItem } from '../data/salonData';

interface ServicesSectionProps {
  activeCategory: string;
  onSelectCategory: (catId: string) => void;
  onBookService: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  activeCategory,
  onSelectCategory,
  onBookService,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = SERVICES_LIST.filter((service) => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch =
      searchQuery === '' ||
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#82786F] font-medium block mb-2">
            Salon & Studio Treatments
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1E1C1A]">
            Curated Services Menu
          </h2>
          <p className="text-sm sm:text-base text-[#6E645B] mt-4 font-light leading-relaxed">
            Professional treatments customized to your personal preferences. All appointments include a detailed consultation.
          </p>
        </div>

        {/* Filter Bar: Segmented Category Buttons + Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-[#E8DFD3]">
          {/* Category Tabs (functional segmented buttons) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#EFE9E0] border border-[#E2D8CA] rounded-none w-full md:w-auto">
            <button
              onClick={() => onSelectCategory('all')}
              className={`px-4 py-2 text-xs font-medium tracking-wider uppercase transition-colors shrink-0 ${
                activeCategory === 'all'
                  ? 'bg-[#1E1C1A] text-[#FAF8F5]'
                  : 'text-[#5A524A] hover:text-[#1E1C1A]'
              }`}
            >
              All Services
            </button>
            {SERVICE_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`px-4 py-2 text-xs font-medium tracking-wider uppercase transition-colors shrink-0 ${
                  activeCategory === cat.id
                    ? 'bg-[#1E1C1A] text-[#FAF8F5]'
                    : 'text-[#5A524A] hover:text-[#1E1C1A]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#82786F] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search treatments..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs bg-[#FAF8F5] border border-[#DDD3C4] text-[#1E1C1A] placeholder-[#82786F] focus:outline-none focus:border-[#1E1C1A] transition-colors"
            />
          </div>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group p-6 sm:p-7 bg-[#F7F4EF] border border-[#E8DFD3] hover:border-[#D5C7B6] hover:shadow-sm transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#82786F]">
                      {service.category.toUpperCase()}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#1E1C1A] mt-0.5 group-hover:text-[#8C6D4C] transition-colors">
                      {service.name}
                    </h3>
                  </div>
                  {service.tag && (
                    <span className="text-[10px] tracking-wider uppercase text-[#73685E] font-medium border border-[#D5C9BC] px-2 py-0.5">
                      {service.tag}
                    </span>
                  )}
                </div>

                <p className="text-sm text-[#61574F] mt-3 font-light leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Card Footer: Duration & CTA */}
              <div className="pt-6 mt-6 border-t border-[#E8DFD3] flex items-center justify-between gap-4">
                <div className="flex items-center gap-1.5 text-xs text-[#82786F]">
                  <Clock className="w-3.5 h-3.5 text-[#B89F7D]" />
                  <span>{service.duration || 'Consultation required'}</span>
                </div>

                <button
                  onClick={() => onBookService(service)}
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wider uppercase text-[#FAF8F5] bg-[#1E1C1A] hover:bg-[#38332E] transition-colors shrink-0"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#DCC8B0]" />
                  <span>View Services & Book</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12 bg-[#F5F1EB] border border-[#E8DFD3] mt-4">
            <p className="font-serif text-lg text-[#1E1C1A]">No treatments found matching "{searchQuery}"</p>
            <p className="text-xs text-[#82786F] mt-1">Try resetting your filter or searching a different term.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                onSelectCategory('all');
              }}
              className="mt-4 px-4 py-2 text-xs uppercase tracking-wider text-[#1E1C1A] border border-[#1E1C1A]"
            >
              Show All Services
            </button>
          </div>
        )}

        {/* Pricing Transparency & Booking Note */}
        <div className="mt-12 p-6 bg-[#F5F1EB] border border-[#E5DACD] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#70665D]">
          <div className="space-y-1 text-center sm:text-left">
            <span className="font-medium text-[#1E1C1A]">Consultation & Appointment Scheduling</span>
            <p className="font-light">
              Treatment durations and customized care are tailored during your visit at our Calea Mănăștur studio.
            </p>
          </div>
          <button
            onClick={() => onBookService(SERVICES_LIST[0])}
            className="px-5 py-2.5 text-xs font-semibold tracking-widest uppercase text-[#1E1C1A] border border-[#1E1C1A] hover:bg-[#1E1C1A] hover:text-white transition-colors shrink-0"
          >
            Schedule Consultation
          </button>
        </div>

      </div>
    </section>
  );
};
