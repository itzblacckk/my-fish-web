import type { Fish } from '../types';

export const mockFish: Fish[] = [
  {
    id: '1',
    name: 'Blue Moscow',
    strain: 'Moscow',
    age: '3 months',
    price: {
      min: 500,
      max: 800
    },
    images: [
      'https://images.unsplash.com/photo-1520366498724-709889c0c685?auto=format&fit=crop&q=80'
    ],
    description: 'Beautiful Blue Moscow guppy with vibrant coloration and elegant finnage.',
    specifications: {
      size: '2.5 inches',
      gender: 'Male',
      color: 'Blue',
      pattern: 'Solid'
    },
    availability: true,
    careGuide: 'Maintain water temperature between 72-82°F. Feed high-quality flake food and live foods.',
    breedingTips: 'Provide plants for fry to hide. Maintain stable water parameters.'
  },
  {
    id: '2',
    name: 'Red Dragon',
    strain: 'Dragon',
    age: '4 months',
    price: {
      min: 600,
      max: 1000
    },
    images: [
      'https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&fit=crop&q=80'
    ],
    description: 'Premium Red Dragon guppy with distinctive scale pattern and full tail.',
    specifications: {
      size: '2.8 inches',
      gender: 'Male',
      color: 'Red',
      pattern: 'Dragon Scale'
    },
    availability: true,
    careGuide: 'Keep in well-planted aquarium. Regular water changes essential.',
    breedingTips: 'Select best pairs for breeding. Maintain clean water conditions.'
  }
];