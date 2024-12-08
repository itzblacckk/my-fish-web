import { useState, useEffect } from 'react';
import { collection, query, getDocs, where, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '../lib/firebase';
import type { Fish, FishFilter } from '../types/fish';

export function useFishCollection(filter: FishFilter) {
  const [fish, setFish] = useState<Fish[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fishRef = collection(db, 'fish');
    let q = query(fishRef, orderBy('createdAt', 'desc'));

    if (filter.search) {
      q = query(q, where('name', '>=', filter.search));
    }

    if (filter.variety) {
      q = query(q, where('variety', '==', filter.variety));
    }

    if (filter.status) {
      q = query(q, where('status', '==', filter.status));
    }

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const fishData = snapshot.docs
          .map(doc => ({ id: doc.id, ...doc.data() } as Fish))
          .filter(fish => 
            fish.price >= filter.minPrice &&
            fish.price <= filter.maxPrice
          );
        setFish(fishData);
        setLoading(false);
      },
      (err) => {
        setError(err instanceof Error ? err.message : 'Failed to fetch fish');
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [filter]);

  return { fish, loading, error };
}