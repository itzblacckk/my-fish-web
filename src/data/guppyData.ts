import type { GuppyFish } from '../types/fish';

export const guppyData: GuppyFish[] = [
  {
    id: '1',
    commonName: 'Blue Moscow Guppy',
    scientificName: 'Poecilia reticulata "Moscow Blue"',
    size: {
      length: 3.5,
      weight: 2.5
    },
    habitat: 'Freshwater',
    distribution: ['Venezuela', 'Brazil', 'Guyana'],
    diet: ['Flake Food', 'Brine Shrimp', 'Bloodworms', 'Daphnia'],
    conservationStatus: 'Least Concern',
    price: {
      min: 500,
      max: 1200
    },
    availability: {
      isAvailable: true,
      seasons: ['Spring', 'Summer']
    },
    characteristics: {
      colors: ['Blue', 'Silver'],
      pattern: 'Solid',
      finType: 'Delta Tail',
      specialFeatures: ['Metallic Scales', 'Large Dorsal Fin']
    },
    images: ['https://images.unsplash.com/photo-1520366498724-709889c0c685?auto=format&fit=crop&q=80'],
    careGuide: 'Maintain water temperature between 72-82°F. Regular water changes essential.',
    breedingTips: 'Provide dense vegetation for fry. Maintain stable parameters.'
  },
  {
    id: '2',
    commonName: 'Red Dragon Guppy',
    scientificName: 'Poecilia reticulata "Dragon"',
    size: {
      length: 4.0,
      weight: 3.0
    },
    habitat: 'Freshwater',
    distribution: ['Singapore', 'Thailand'],
    diet: ['Live Food', 'Frozen Food', 'Premium Flakes'],
    conservationStatus: 'Least Concern',
    price: {
      min: 800,
      max: 1500
    },
    availability: {
      isAvailable: true,
      seasons: ['Summer', 'Fall']
    },
    characteristics: {
      colors: ['Red', 'Gold'],
      pattern: 'Dragon Scale',
      finType: 'Half Moon',
      specialFeatures: ['Metallic Scales', 'Extended Finnage']
    },
    images: ['https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&fit=crop&q=80'],
    careGuide: 'Keep in well-planted aquarium with stable parameters.',
    breedingTips: 'Select best pairs for breeding. Maintain clean water conditions.'
  }
];