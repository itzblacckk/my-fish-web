import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Fish } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Fish className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold text-white">
                HM Guppy Fish Store
              </span>
            </div>
            <p className="text-gray-400">
              Premium quality guppy fish for enthusiasts and collectors.
            </p>
          </div>



          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li>Mumbai, Maharashtra, India</li>
              <li>+91 88790 45747</li>
              <li>hmguppyfish@gmail.com</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              
              <a
                href="https://www.instagram.com/hm.guppyfarm/profilecard/?igsh=MXRranM3N2Y2MWQwdw=="
                className="hover:text-blue-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="hover:text-blue-400 transition-colors"
                aria-label="whatsapp"
              >
               
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>© 2024 HM Guppy Fish Store. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link to="/privacy" className="hover:text-blue-400 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-blue-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}