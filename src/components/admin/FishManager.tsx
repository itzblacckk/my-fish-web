import React, { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { useFishCollection } from '../../hooks/useFishCollection';
import { useInitialData } from '../../hooks/useInitialData';
import FishForm from './FishForm';
import FishList from './FishList';
import type { Fish } from '../../types/fish';

export default function FishManager() {
  const [selectedFish, setSelectedFish] = useState<Fish | undefined>();
  const [isFormOpen, setIsFormOpen] = useState(false);
  
  // Initialize data if empty
  useInitialData();
  
  const { fish, loading, error } = useFishCollection({
    search: '',
    minPrice: 0,
    maxPrice: Infinity,
    variety: ''
  });

  const handleEdit = (fish: Fish) => {
    setSelectedFish(fish);
    setIsFormOpen(true);
  };

  const handleDelete = async (fish: Fish) => {
    if (window.confirm('Are you sure you want to delete this fish?')) {
      try {
        await deleteDoc(doc(db, 'fish', fish.id));
      } catch (error) {
        console.error('Error deleting fish:', error);
      }
    }
  };

  const handleFormSuccess = () => {
    setIsFormOpen(false);
    setSelectedFish(undefined);
  };

  if (error) {
    return (
      <div className="text-center text-red-600 dark:text-red-400 py-8">
        {error}
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Manage Fish Collection
        </h2>
        <button
          onClick={() => {
            setSelectedFish(undefined);
            setIsFormOpen(true);
          }}
          className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-200"
        >
          <Plus className="h-5 w-5" />
          <span>Add New Fish</span>
        </button>
      </div>

      {isFormOpen ? (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            {selectedFish ? 'Edit' : 'Add'} Fish
          </h3>
          <FishForm fish={selectedFish} onSuccess={handleFormSuccess} />
        </div>
      ) : loading ? (
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
        </div>
      ) : (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <FishList
            fish={fish}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </div>
      )}
    </div>
  );
}