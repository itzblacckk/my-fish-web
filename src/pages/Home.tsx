import React from 'react';
import Hero from '../components/Hero';
import FishCollection from '../components/FishCollection';
import FeaturedSection from '../components/FeaturedSection';
import TestimonialsSection from '../components/TestimonialsSection';
import SocialConnect from '../components/SocialConnect';

export default function Home() {
  return (
    <div>
      <Hero />

      <FishCollection />
      <SocialConnect />
      <FeaturedSection />
      <TestimonialsSection />

    </div>
  );
}