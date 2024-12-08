export interface Fish {
  id: string;
  name: string;
  variety: string;
  price: number;
  imageUrl: string;
  description: string;
  stock: number;
  featured: boolean;
  status: 'available' | 'sold_out';
  createdAt: string;
  updatedAt: string;
}

export interface FishFilter {
  search: string;
  minPrice: number;
  maxPrice: number;
  variety: string;
  status?: 'available' | 'sold_out';
}