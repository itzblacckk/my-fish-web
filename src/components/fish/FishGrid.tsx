import React from 'react';
import { FishCard } from './FishCard';
import type { Fish } from '../../types';

interface FishGridProps {
  fishes: Fish[];
}

export function FishGrid({ fishes }: FishGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {fishes.map((fish) => (
        <FishCard key={fish.id} fish={fish} />
      ))}
    </div>
  );
}