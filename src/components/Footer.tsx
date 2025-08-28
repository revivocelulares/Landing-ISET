import React from 'react';
import { Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

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
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><Link to="/" onClick={() => window.scrollTo(0, 0)} className="text-gray-400 hover:text-white transition-colors">Inicio</Link></li>
              <li><Link to="/academic-offer" onClick={() => window.scrollTo(0, 0)} className="text-gray-400 hover:text-white transition-colors">Carreras</Link></li>
              <li><Link to="/events" onClick={() => window.scrollTo(0, 0)} className="text-gray-400 hover:text-white transition-colors">Eventos</Link></li>
              <li><Link to="/organization-chart" onClick={() => window.scrollTo(0, 0)} className="text-gray-400 hover:text-white transition-colors">Organigrama</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Soporte</h3>
            <ul className="space-y-2">
              <li><Link to="/help-center" onClick={() => window.scrollTo(0, 0)} className="text-gray-400 hover:text-white transition-colors">Centro de Ayuda</Link></li>
              <li><Link to="/tutorials" onClick={() => window.scrollTo(0, 0)} className="text-gray-400 hover:text-white transition-colors">Tutoriales</Link></li>
              <li><Link to="/contact" onClick={() => window.scrollTo(0, 0)} className="text-gray-400 hover:text-white transition-colors">Contáctanos</Link></li>
            </ul>
          </div>

          {/* FAQ */}
          <div>
            <h3 className="text-lg font-semibold mb-4">FAQ</h3>
            <ul className="space-y-2">
              <li><Link to="/faq-general" onClick={() => window.scrollTo(0, 0)} className="text-gray-400 hover:text-white transition-colors">General</Link></li>
              <li><Link to="/faq-academic-offer" onClick={() => window.scrollTo(0, 0)} className="text-gray-400 hover:text-white transition-colors">Carreras</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-center items-center">
          <div className="text-gray-400 text-sm">
            © Copyright 2025. Todos los derechos reservados - <strong>ISET Nº 812 Ceret</strong> - Diseño y Desarrollo por Diego Ferreira, responsable del Centro de Rcursos Tecnológicos.
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;