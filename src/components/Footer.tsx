import { Phone, Mail, MapPin, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <img src="/logo.png" alt="ST George's Auto Fit" className="h-16 w-auto mb-4" />
            <p className="text-[#d4af37] font-semibold mb-4">
              Performance \u2713 Precision \u2713 Perfection
            </p>
            <p className="text-gray-400 text-sm">
              Your trusted partner for premium automotive care in Nairobi.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-[#d4af37] transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-[#d4af37] transition-colors">Services</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-[#d4af37] transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-[#d4af37] transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-400">Executive Car Wash</li>
              <li className="text-gray-400">Mechanical Repairs</li>
              <li className="text-gray-400">Diagnosis Services</li>
              <li className="text-gray-400">Vehicle Towing</li>
              <li className="text-gray-400">AC Installation</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <Phone size={16} className="text-[#d4af37]" />
                <span className="text-gray-400">0791 168 742</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} className="text-[#d4af37]" />
                <span className="text-gray-400">info@stgeorgesautofit.co.ke</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="text-[#d4af37] flex-shrink-0 mt-1" />
                <span className="text-gray-400">Northern Bypass, Nairobi</span>
              </li>
              <li className="flex items-center space-x-2">
                <Globe size={16} className="text-[#d4af37]" />
                <a href="https://www.stgeorgesautofit.co.ke" className="text-gray-400 hover:text-[#d4af37] transition-colors">
                  www.stgeorgesautofit.co.ke
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400 text-sm">
            Copyright © 2025 ST GEORGE'S AUTO FIT LIMITED. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
