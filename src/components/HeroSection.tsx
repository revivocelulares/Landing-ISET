import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-azure-50 to-azure-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Arrow indicators */}
            <div className="flex space-x-2">
              <div className="w-0 h-0 border-l-8 border-r-0 border-b-8 border-l-azure-200 border-b-transparent"></div>
              <div className="w-0 h-0 border-l-8 border-r-0 border-b-8 border-l-azure-300 border-b-transparent"></div>
              <div className="w-0 h-0 border-l-8 border-r-0 border-b-8 border-l-coral-400 border-b-transparent"></div>
            </div>

            <div className="space-y-6">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                Instituto Superior de Educación{' '}
                <span className="text-azure-400">Tecnológica "Ing. Estela Miguel"</span>
              </h1>
              
              <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
                We help students achieve their academic goals with personalized learning paths, 
                expert guidance, and comprehensive support throughout their educational journey.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="academic-offer" className="bg-gradient-to-r from-azure-200 to-azure-300 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                Oferta Académica
              </Link>
              {/*<button className="flex items-center space-x-2 text-gray-700 hover:text-azure-400 px-8 py-4 rounded-full border border-gray-300 hover:border-azure-300 transition-all duration-200">
                <Play className="w-5 h-5" />
                <span className="font-semibold">Watch Tour</span>
              </button>*/}
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              {/* Colorful background shapes */}
              <div className="absolute inset-0 bg-gradient-to-br from-azure-200 via-azure-300 to-coral-400 rounded-full transform rotate-12 scale-110 opacity-20"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-azure-300 via-azure-200 to-azure-100 rounded-full transform -rotate-12 scale-90 opacity-20"></div>
              
              {/* Main image container */}
              <div className="relative bg-gradient-to-br from-azure-300 via-azure-200 to-coral-400 rounded-full p-8 aspect-square flex items-center justify-center">
                <img
                  src="./images/logo-iset-812-ceret.png"
                  //src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Logo ISET" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;