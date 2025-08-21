import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-40 h-20 py-2 rounded-lg flex items-center justify-center">
                <img src="./images/logo-transparente.png" alt="Logo Ceret" className='w-full h-full' />
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-900 hover:text-green-600 px-3 py-2 text-sm font-medium">
              Inicio
            </Link>
            <div className="relative group">
              <button 
                className="text-gray-700 hover:text-azure-400 px-3 py-2 text-sm font-medium flex items-center"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                Nosotros
                <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              <div 
                className={`absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-gray-100 z-50 transition-all duration-200 ${isDropdownOpen ? 'opacity-100 visible transform translate-y-0' : 'opacity-0 invisible transform -translate-y-2'}`}
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <div className="py-2">
                  <Link 
                    to="/equipo-directivo" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-azure-100 hover:text-azure-600 transition-colors duration-150"
                  >
                    Equipo Directivo
                  </Link>
                  <Link 
                    to="/coordinacion-academica" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-azure-100 hover:text-azure-600 transition-colors duration-150"
                  >
                    Coordinación Académica
                  </Link>
                  <Link 
                    to="/area-administrativa" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-azure-100 hover:text-azure-600 transition-colors duration-150"
                  >
                    Área Administrativa
                  </Link>
                  <Link 
                    to="/bedelia" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-azure-100 hover:text-azure-600 transition-colors duration-150"
                  >
                    Bedelía
                  </Link>
                </div>
              </div>
            </div>
            <Link to="/academic-offer" className="text-gray-700 hover:text-azure-400 px-3 py-2 text-sm font-medium">
              Carreras
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
            <a href="https://campusvirtual.chubuteduca.ar/local/multispaces/space/index.php?spaceid=209" 
               rel="noreferrer"
               target="_blank"
               className="bg-gradient-to-r from-azure-200 to-azure-300 text-white px-6 py-2 rounded-full text-sm font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Acceso Campus Virtual
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;