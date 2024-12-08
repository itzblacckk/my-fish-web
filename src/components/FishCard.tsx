import React from 'react';
import { MessageCircle } from 'lucide-react';
import type { Fish } from '../types/fish';

interface FishCardProps {
  fish: Fish;
}

export default function FishCard({ fish }: FishCardProps) {
  const handleWhatsAppClick = () => {
    const message = `Hi, I'm interested in the ${fish.name} (${fish.variety}) priced at ₹${fish.price}`;
    window.open(`https://wa.me/918879045747?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      <div className="aspect-square relative">
        <img
          src={fish.imageUrl}
          alt={fish.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {fish.featured && (
          <span className="absolute top-2 right-2 bg-yellow-400 text-black px-2 py-1 rounded-full text-sm font-semibold">
            Featured
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{fish.name}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">{fish.variety}</p>
        <p className="text-lg font-bold text-blue-600 dark:text-blue-400 mt-2">₹{fish.price}</p>
        <button
          onClick={handleWhatsAppClick}
          className="mt-4 w-full flex items-center justify-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition-colors duration-200"
        >
          <MessageCircle className="h-5 w-5" />
          <span>Contact on WhatsApp</span>
        </button>
      </div>
    </div>
  );
}