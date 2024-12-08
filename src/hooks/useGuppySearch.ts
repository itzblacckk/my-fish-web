import { useState, useMemo } from 'react';
import { GuppyFish } from '../types/fish';

interface Filters {
  search: string;
  habitat: string;
  minPrice: string;
  maxPrice: string;
  conservationStatus: string;
  season: string;
}

export function useGuppySearch(guppies: GuppyFish[]) {
  const [filters, setFilters] = useState<Filters>({
    search: '',
    habitat: '',
    minPrice: '',
    maxPrice: '',
    conservationStatus: '',
    season: ''
  });

  const [sortBy, setSortBy] = useState<string>('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const filteredGuppies = useMemo(() => {
    return guppies.filter(guppy => {
      const searchMatch = 
        filters.search === '' ||
        guppy.commonName.toLowerCase().includes(filters.search.toLowerCase()) ||
        guppy.scientificName.toLowerCase().includes(filters.search.toLowerCase());

      const habitatMatch = 
        filters.habitat === '' || 
        guppy.habitat === filters.habitat;

      const priceMatch = 
        (filters.minPrice === '' || guppy.price.min >= parseInt(filters.minPrice)) &&
        (filters.maxPrice === '' || guppy.price.max <= parseInt(filters.maxPrice));

      const conservationMatch = 
        filters.conservationStatus === '' || 
        guppy.conservationStatus === filters.conservationStatus;

      const seasonMatch = 
        filters.season === '' || 
        guppy.availability.seasons.includes(filters.season as any);

      return searchMatch && habitatMatch && priceMatch && conservationMatch && seasonMatch;
    }).sort((a, b) => {
      if (sortBy === 'price') {
        return sortOrder === 'asc' 
          ? a.price.min - b.price.min
          : b.price.min - a.price.min;
      }
      if (sortBy === 'name') {
        return sortOrder === 'asc'
          ? a.commonName.localeCompare(b.commonName)
          : b.commonName.localeCompare(a.commonName);
      }
      return 0;
    });
  }, [guppies, filters, sortBy, sortOrder]);

  const handleFilterChange = (name: string, value: string) => {
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleSortChange = (newSortBy: string) => {
    if (newSortBy === sortBy) {
      setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(newSortBy);
      setSortOrder('asc');
    }
  };

  return {
    filters,
    filteredGuppies,
    handleFilterChange,
    handleSortChange,
    sortBy,
    sortOrder
  };
}