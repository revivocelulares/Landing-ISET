import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-40 h-20 py-2 rounded-lg flex items-center justify-center">
                {/*<GraduationCap className="w-5 h-5 text-white" />*/}
                <img src="./images/logo-transparente.png" alt="Logo Ceret" className='w-full h-full' />
              </div>
              {/*<span className="text-xl font-bold text-gray-900">EduPlatform</span>*/}
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-900 hover:text-green-600 px-3 py-2 text-sm font-medium">
              Inicio
            </Link>
            <div className="relative group">
              <button className="text-gray-700 hover:text-azure-400 px-3 py-2 text-sm font-medium flex items-center">
                Nosotros
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
            </div>
            <div className="relative group">
              <button className="text-gray-700 hover:text-azure-400 px-3 py-2 text-sm font-medium flex items-center">
                Servicios
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
            </div>
            <Link to="/courses" className="text-gray-700 hover:text-azure-400 px-3 py-2 text-sm font-medium">
              Cursos
            </Link>
            <Link to="/events" className="text-gray-700 hover:text-azure-400 px-3 py-2 text-sm font-medium">
              Eventos
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-azure-400 px-3 py-2 text-sm font-medium">
              Blog
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-azure-400 px-3 py-2 text-sm font-medium">
              Contacto
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-gradient-to-r from-azure-200 to-azure-300 text-white px-6 py-2 rounded-full text-sm font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200">
              Acceso Intranet
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;