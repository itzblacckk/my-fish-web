import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { mockFish } from '../data/mockFish';

export function FishDetailsPage() {
  const { id } = useParams();
  const fish = mockFish.find(f => f.id === id);

  if (!fish) {
    return (
      <div className="container mx-auto py-12 px-4 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Fish not found</h1>
        <Link to="/" className="text-blue-600 hover:text-blue-800">
          Return to homepage
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to all fish
      </Link>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src={fish.images[0]}
            alt={fish.name}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{fish.name}</h1>
          <p className="text-gray-600 mb-6">{fish.description}</p>
          
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-2">Specifications</h2>
              <dl className="grid grid-cols-2 gap-4">
                {Object.entries(fish.specifications).map(([key, value]) => (
                  <div key={key}>
                    <dt className="text-gray-600 text-sm">{key}</dt>
                    <dd className="font-medium">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-2">Care Guide</h2>
              <p className="text-gray-700">{fish.careGuide}</p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-2">Breeding Tips</h2>
              <p className="text-gray-700">{fish.breedingTips}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}