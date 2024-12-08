import React from 'react';
import { Search } from 'lucide-react';
import type { FishFilter } from '../types/fish';

interface SearchBarProps {
  filter: FishFilter;
  onFilterChange: (filter: FishFilter) => void;
}

export default function SearchBar({ filter, onFilterChange }: SearchBarProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search fish..."
            value={filter.search}
            onChange={(e) => onFilterChange({ ...filter, search: e.target.value })}
            className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          />
        </div>
        <select
          value={filter.variety}
          onChange={(e) => onFilterChange({ ...filter, variety: e.target.value })}
          className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
        >
          <option value="">All Varieties</option>
          <option value="Half Black">Half Black</option>
          <option value="Full Black">Full Black</option>
          <option value="Red Tail">Red Tail</option>
          <option value="Blue Moscow">Blue Moscow</option>
        </select>
        <div className="flex gap-4">
          <input
            type="number"
            placeholder="Min Price"
            value={filter.minPrice || ''}
            onChange={(e) => onFilterChange({ ...filter, minPrice: Number(e.target.value) })}
            className="w-24 px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          />
          <input
            type="number"
            placeholder="Max Price"
            value={filter.maxPrice || ''}
            onChange={(e) => onFilterChange({ ...filter, maxPrice: Number(e.target.value) })}
            className="w-24 px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          />
        </div>
      </div>
    </div>
  );
}