import React from 'react';
import { Link } from 'react-router-dom';
import { Store, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Store className="h-8 w-8 text-indigo-500" />
              <span className="text-xl font-bold text-white">ShopHub</span>
            </div>
            <p className="text-sm">Your one-stop destination for premium electronics and accessories.</p>
            <div className="flex space-x-4 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-indigo-500">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-indigo-500">Contact</Link></li>
              <li><Link to="/faq" className="hover:text-indigo-500">FAQs</Link></li>
              <li><Link to="/privacy" className="hover:text-indigo-500">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-indigo-500">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-indigo-500">
                  <MapPin className="h-5 w-5 text-indigo-500" />
                  <span>123 Tech Street, Digital City</span>
                </a>
              </li>
              <li>
                <a href="tel:+15551234567" className="flex items-center space-x-2 hover:text-indigo-500">
                  <Phone className="h-5 w-5 text-indigo-500" />
                  <span>+1 (555) 123-4567</span>
                </a>
              </li>
              <li>
                <a href="mailto:support@shophub.com" className="flex items-center space-x-2 hover:text-indigo-500">
                  <Mail className="h-5 w-5 text-indigo-500" />
                  <span>support@shophub.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">&copy; 2024 ShopHub. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/privacy" className="text-sm hover:text-indigo-500">Privacy Policy</Link>
              <Link to="/terms" className="text-sm hover:text-indigo-500">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};