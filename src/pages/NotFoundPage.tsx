import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Home, ArrowLeft, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero Section 404 */}
        <section className="relative bg-gradient-to-br from-azure-50 via-white to-azure-100 py-20 lg:py-32">
          <div className="absolute inset-0 opacity-40">
            <div className="w-full h-full bg-gradient-to-br from-azure-100/20 to-azure-200/10"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* 404 Number */}
            <div className="mb-8">
              <h1 className="text-9xl md:text-[12rem] font-bold text-azure-200 leading-none select-none">
                404
              </h1>
            </div>
            
            {/* Error Message */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Página no encontrada
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Lo sentimos, la página que estás buscando no existe o ha sido movida. 
                Puede que hayas escrito mal la dirección o que la página haya sido eliminada.
              </p>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/" 
                className="inline-flex items-center px-8 py-4 bg-azure-500 text-white font-semibold rounded-xl hover:bg-azure-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                onClick={() => window.scrollTo(0, 0)}
              >
                <Home className="w-5 h-5 mr-2" />
                Volver al Inicio
              </Link>
              
              <button 
                onClick={() => window.history.back()}
                className="inline-flex items-center px-8 py-4 bg-white text-azure-600 font-semibold rounded-xl border-2 border-azure-200 hover:border-azure-300 hover:bg-azure-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Página Anterior
              </button>
            </div>
          </div>
        </section>
        
        {/* Helpful Links Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                ¿Qué puedes hacer ahora?
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Te sugerimos algunas opciones que podrían ayudarte a encontrar lo que buscas.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Explorar Carreras */}
              <div className="bg-gradient-to-br from-azure-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-azure-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Search className="w-8 h-8 text-azure-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                  Explorar Carreras
                </h4>
                <p className="text-gray-600 text-center mb-6">
                  Descubre todas las tecnicaturas que ofrecemos en el Instituto Superior de Educación Tecnológica.
                </p>
                <div className="text-center">
                  <Link 
                    to="/academic-offer" 
                    className="inline-flex items-center text-azure-600 font-semibold hover:text-azure-700 transition-colors duration-300"
                  >
                    Ver Carreras
                    <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                  </Link>
                </div>
              </div>
              
              {/* Contacto */}
              <div className="bg-gradient-to-br from-azure-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-azure-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-azure-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                  Contáctanos
                </h4>
                <p className="text-gray-600 text-center mb-6">
                  ¿Tienes alguna pregunta? Nuestro equipo está aquí para ayudarte con cualquier consulta.
                </p>
                <div className="text-center">
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center text-azure-600 font-semibold hover:text-azure-700 transition-colors duration-300"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Ir a Contacto
                    <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                  </Link>
                </div>
              </div>
              
              {/* Inicio */}
              <div className="bg-gradient-to-br from-azure-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-azure-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Home className="w-8 h-8 text-azure-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                  Página Principal
                </h4>
                <p className="text-gray-600 text-center mb-6">
                  Regresa a nuestra página principal para conocer más sobre el instituto y sus servicios.
                </p>
                <div className="text-center">
                  <Link 
                    to="/" 
                    className="inline-flex items-center text-azure-600 font-semibold hover:text-azure-700 transition-colors duration-300"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Ir al Inicio
                    <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFoundPage;