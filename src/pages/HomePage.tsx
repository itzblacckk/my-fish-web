import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { SearchFilters } from '../components/search/SearchFilters';
import { GuppyCard } from '../components/fish/GuppyCard';
import { FeaturesSection } from '../components/home/FeaturesSection';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { NewsletterSection } from '../components/home/NewsletterSection';
import { useGuppySearch } from '../hooks/useGuppySearch';
import { guppyData } from '../data/guppyData';
import { MapPin } from 'lucide-react';

export function HomePage() {
  const {
    filters,
    filteredGuppies,
    handleFilterChange,
  } = useGuppySearch(guppyData);

  return (
    <div>
      <HeroSection />
      
      <div className="container mx-auto py-12 px-4">
        <div className="mb-8">
          <SearchFilters
            filters={filters}
            onFilterChange={handleFilterChange}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGuppies.map((guppy) => (
            <GuppyCard key={guppy.id} guppy={guppy} />
          ))}
        </div>
      </div>

      <FeaturesSection />
      <TestimonialsSection />
      <NewsletterSection />

      <div className="container mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <MapPin className="w-6 h-6 mr-2" />
          Visit Our Farm
        </h2>
        <div className="rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d942.1511457218363!2d73.0856881!3d19.1687784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bf0058e765cd%3A0x66998a2fd057dce1!2sHM%20Guppy%20farm!5e0!3m2!1sen!2sin!4v1733308982406!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}