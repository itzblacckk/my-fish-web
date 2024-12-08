import React from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';

interface SearchFiltersProps {
  filters: {
    search: string;
    habitat: string;
    minPrice: string;
    maxPrice: string;
    conservationStatus: string;
    season: string;
  };
  onFilterChange: (name: string, value: string) => void;
}

export function SearchFilters({ filters, onFilterChange }: SearchFiltersProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search guppies..."
          value={filters.search}
          onChange={(e) => onFilterChange('search', e.target.value)}
          className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <select
          value={filters.habitat}
          onChange={(e) => onFilterChange('habitat', e.target.value)}
          className="border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">All Habitats</option>
          <option value="Freshwater">Freshwater</option>
          <option value="Saltwater">Saltwater</option>
          <option value="Both">Both</option>
        </select>

        <div className="flex space-x-2">
          <input
            type="number"
            placeholder="Min Price"
            value={filters.minPrice}
            onChange={(e) => onFilterChange('minPrice', e.target.value)}
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <input
            type="number"
            placeholder="Max Price"
            value={filters.maxPrice}
            onChange={(e) => onFilterChange('maxPrice', e.target.value)}
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <select
          value={filters.conservationStatus}
          onChange={(e) => onFilterChange('conservationStatus', e.target.value)}
          className="border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">All Conservation Status</option>
          <option value="Least Concern">Least Concern</option>
          <option value="Near Threatened">Near Threatened</option>
          <option value="Vulnerable">Vulnerable</option>
          <option value="Endangered">Endangered</option>
          <option value="Critically Endangered">Critically Endangered</option>
        </select>

        <select
          value={filters.season}
          onChange={(e) => onFilterChange('season', e.target.value)}
          className="border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">All Seasons</option>
          <option value="Spring">Spring</option>
          <option value="Summer">Summer</option>
          <option value="Fall">Fall</option>
          <option value="Winter">Winter</option>
        </select>
      </div>
    </div>
  );
}