import { useEffect } from 'react';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { initialFish } from '../data/initialFish';

export function useInitialData() {
  useEffect(() => {
    const initializeData = async () => {
      try {
        // Check if data already exists
        const fishRef = collection(db, 'fish');
        const snapshot = await getDocs(fishRef);
        
        if (snapshot.empty) {
          // Add initial fish data
          for (const fish of initialFish) {
            await addDoc(fishRef, {
              ...fish,
              createdAt: new Date().toISOString()
            });
          }
          console.log('Initial fish data added successfully');
        }
      } catch (error) {
        console.error('Error initializing data:', error);
      }
    };

    initializeData();
  }, []);
}