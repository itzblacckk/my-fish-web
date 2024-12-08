import React from 'react';
import { MessageCircle } from 'lucide-react';
import type { Fish } from '../../types';

interface FishCardProps {
  fish: Fish;
}

export function FishCard({ fish }: FishCardProps) {
  const handleWhatsAppClick = () => {
    const message = `Hi, I'm interested in the ${fish.name} (${fish.strain}) guppy fish.`;
    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="aspect-[4/3] relative">
        <img
          src={fish.images[0]}
          alt={fish.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute top-2 right-2">
          <span className={`px-3 py-1 rounded-full text-sm font-medium
            ${fish.availability ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {fish.availability ? 'Available' : 'Sold Out'}
          </span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">{fish.name}</h3>
        <p className="text-gray-600 text-sm mb-2">{fish.strain}</p>
        <p className="text-gray-800 font-medium mb-4">
          ₹{fish.price.min} - ₹{fish.price.max}
        </p>

        <button
          onClick={handleWhatsAppClick}
          className="w-full flex items-center justify-center px-4 py-2 bg-green-500 
                   hover:bg-green-600 text-white rounded-lg transition-colors"
        >
          <MessageCircle className="w-5 h-5 mr-2" />
          Contact on WhatsApp
        </button>
      </div>
    </div>
  );
}