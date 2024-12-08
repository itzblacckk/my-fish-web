import React from 'react';
import { MessageCircle, Instagram } from 'lucide-react';

export default function SocialConnect() {
  const handleWhatsAppGroupJoin = () => {
    window.open('https://chat.whatsapp.com/FdzfkMkUgI90c785xU9EF3', '_blank');
  };

  const handleInstagramFollow = () => {
    window.open('https://www.instagram.com/hm.guppyfarm/profilecard/?igsh=MXRranM3N2Y2MWQwdw==', '_blank');
  };

  return (
    <section className="py-16 bg-gradient-to-r from-green-500 to-blue-500">
      <div className="container mx-auto px-4">
        <div className="text-center text-white mb-12">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="text-lg opacity-90">
            Connect with fellow guppy enthusiasts and stay updated with our latest collections
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <button
            onClick={handleWhatsAppGroupJoin}
            className="flex items-center justify-center space-x-3 bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-lg transition-colors duration-300 transform hover:scale-105"
          >
            <MessageCircle className="h-6 w-6" />
            <span className="text-lg font-semibold">Join WhatsApp Group</span>
          </button>

          <button
            onClick={handleInstagramFollow}
            className="flex items-center justify-center space-x-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-4 rounded-lg transition-colors duration-300 transform hover:scale-105"
          >
            <Instagram className="h-6 w-6" />
            <span className="text-lg font-semibold">Follow on Instagram</span>
          </button>
        </div>

        <div className="mt-12 text-center text-white">
          <p className="text-sm opacity-80">
            Stay connected for exclusive updates, care tips, and special offers!
          </p>
        </div>
      </div>
    </section>
  );
}