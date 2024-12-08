import React from 'react';
import { MessageCircle, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { GuppyFish } from '../../types/fish';

interface GuppyCardProps {
  guppy: GuppyFish;
}

export function GuppyCard({ guppy }: GuppyCardProps) {
  const handleWhatsAppClick = () => {
    const message = `Hi, I'm interested in the ${guppy.commonName} guppy fish.`;
    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="aspect-[4/3] relative">
        <img
          src={guppy.images[0]}
          alt={guppy.commonName}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute top-2 right-2">
          <span className={`px-3 py-1 rounded-full text-sm font-medium
            ${guppy.availability.isAvailable ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {guppy.availability.isAvailable ? 'Available' : 'Sold Out'}
          </span>
        </div>
      </div>

      <div className="p-4">
        <div className="mb-2">
          <h3 className="text-lg font-semibold">{guppy.commonName}</h3>
          <p className="text-sm text-gray-600 italic">{guppy.scientificName}</p>
        </div>

        <div className="mb-4 space-y-2">
          <p className="text-sm text-gray-600">Size: {guppy.size.length}cm</p>
          <p className="text-gray-800 font-medium">
            ₹{guppy.price.min} - ₹{guppy.price.max}
          </p>
        </div>

        <div className="flex space-x-2">
          <button
            onClick={handleWhatsAppClick}
            className="flex-1 flex items-center justify-center px-4 py-2 bg-green-500 
                     hover:bg-green-600 text-white rounded-lg transition-colors"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Contact
          </button>
          
          <Link
            to={`/fish/${guppy.id}`}
            className="flex items-center justify-center px-4 py-2 bg-blue-500 
                     hover:bg-blue-600 text-white rounded-lg transition-colors"
          >
            <Info className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}