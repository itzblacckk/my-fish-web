import React, { useState } from 'react';
import { useFishCollection } from '../hooks/useFishCollection';
import FishCard from './FishCard';
import SearchBar from './SearchBar';
import type { FishFilter } from '../types/fish';

export default function FishCollection() {
  const [filter, setFilter] = useState<FishFilter>({
    search: '',
    minPrice: 0,
    maxPrice: 10000,
    variety: ''
  });

  const { fish, loading, error } = useFishCollection(filter);

  if (error) {
    return (
      <div className="text-center text-red-600 dark:text-red-400 py-8">
        {error}
      </div>
    );
  }

  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        Our Fish Collection
      </h2>
      
      {/* <SearchBar filter={filter} onFilterChange={setFilter} /> */}

      {loading ? (
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
          {fish.map((fish) => (
            <FishCard key={fish.id} fish={fish} />
          ))}
        </div>
      )}
    </section>
  );
}