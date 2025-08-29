import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Accordion from '../components/Accordion';
import { academicOfferFAQData } from '../data/faqData';
import { Link } from 'react-router-dom';

const FAQAcademicOfferPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-azure-50 to-azure-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            {/* Arrow indicators */}
            <div className="flex justify-center space-x-2">
              <div className="w-0 h-0 border-l-8 border-r-0 border-b-8 border-l-azure-200 border-b-transparent"></div>
              <div className="w-0 h-0 border-l-8 border-r-0 border-b-8 border-l-azure-300 border-b-transparent"></div>
              <div className="w-0 h-0 border-l-8 border-r-0 border-b-8 border-l-coral-400 border-b-transparent"></div>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              FAQ <span className="text-azure-400">Oferta Académica</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Todo lo que necesitas saber sobre nuestras tecnicaturas superiores, 
              modalidades de cursado y oportunidades profesionales.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Carreras y <span className="text-azure-400">Estudios</span>
              </h2>
              <p className="text-lg text-gray-600">
                Información detallada sobre nuestras tecnicaturas superiores, 
                duración, modalidades y salida laboral.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <Accordion items={academicOfferFAQData} />
            </div>
            
            {/* Careers Overview */}
            <div className="mt-12 bg-azure-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Nuestras <span className="text-azure-400">Tecnicaturas Superiores</span>
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-lg text-gray-900 mb-3">Área Industrial</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Técnico Superior en Petróleo y Gas</li>
                    <li>• Técnico Superior en Energías Renovables</li>
                    <li>• Técnico Superior en Mantenimiento Industrial</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-lg text-gray-900 mb-3">Área de Servicios</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Técnico Superior en Producción de Alimentos</li>
                    <li>• Técnico Superior en Logística</li>
                    <li>• Técnico Superior en Multimedios</li>
                    <li>• Técnico Superior en Confección Textil</li>
                  </ul>
                </div>
              </div>
              <div className="text-center mt-6">
                <a 
                  href="/academic-offer" 
                  className="inline-flex items-center text-azure-400 hover:text-azure-500 font-semibold transition-colors"
                >
                  Ver Todas las Carreras
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Contact Section */}
            <div className="mt-12 bg-gray-50 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                ¿Necesitas orientación académica?
              </h3>
              <p className="text-gray-600 mb-6">
                Nuestros asesores académicos pueden ayudarte a elegir la carrera 
                que mejor se adapte a tus intereses y objetivos profesionales.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:academico@iset.edu.ar" 
                  className="bg-gradient-to-r from-azure-200 to-azure-300 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  Consulta Académica
                </a>
                <a 
                  href="/contact" 
                  className="bg-white text-azure-400 border-2 border-azure-300 px-6 py-3 rounded-full hover:bg-azure-50 transition-colors font-semibold"
                >
                  Solicitar Entrevista
                </a>
              </div>
            </div>
            
            {/* Link to General FAQ */}
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                ¿Buscas información general sobre el instituto?
              </p>
              <Link 
                to="/faq-general"
                onClick={() => window.scrollTo(0, 0)} 
                className="inline-flex items-center text-azure-400 hover:text-azure-500 font-semibold transition-colors"
              >
                Ver FAQ General
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default FAQAcademicOfferPage;