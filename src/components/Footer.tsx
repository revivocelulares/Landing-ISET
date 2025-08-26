import React from 'react';
import { Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-azure-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Ministerio de Educación Logo */}
          <div className="space-y-4">
            <div className="flex justify-center md:justify-start">
              <img 
                src="./images/ministerio-de-educación-logo.png" 
                alt="Ministerio de Educación" 
                className="h-24 w-auto object-contain"
              />
            </div>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href='https://www.facebook.com/ceretiset812' target="_blank" rel="noreferrer">
                <Facebook className="w-5 h-5 text-gray-400 hover:text-blue-600 cursor-pointer transition-colors" />
              </a>
              <a href='https://www.instagram.com/iset_812.cr/' target="_blank" rel="noreferrer">
                <Instagram className="w-5 h-5 text-gray-400 hover:text-pink-600 cursor-pointer transition-colors" />
              </a>
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Team</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Press</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Community</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Status</a></li>
            </ul>
          </div>

          {/* FAQ */}
          <div>
            <h3 className="text-lg font-semibold mb-4">FAQ</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">General</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Courses</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Technical</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            © Copyright 2025. Todos los derechos reservados - ISET Nº 812 Ceret - Diseño y Desarrollo por Diego Ferreira.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;