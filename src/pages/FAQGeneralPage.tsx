import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Accordion from '../components/Accordion';
import { generalFAQData } from '../data/faqData';

const FAQGeneralPage: React.FC = () => {
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
              Preguntas <span className="text-azure-400">Frecuentes</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Encuentra respuestas a las consultas más comunes sobre el ISET, 
              nuestros servicios y procesos de inscripción.
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
                Información <span className="text-azure-400">General</span>
              </h2>
              <p className="text-lg text-gray-600">
                Aquí encontrarás información general sobre el instituto, 
                requisitos de ingreso, servicios y más.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <Accordion items={generalFAQData} />
            </div>
            
            {/* Additional Help Section */}
            <div className="mt-12 bg-azure-50 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                ¿No encontraste lo que buscabas?
              </h3>
              <p className="text-gray-600 mb-6">
                Si tienes alguna pregunta específica que no está en esta lista, 
                no dudes en contactarnos directamente.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:info@iset.edu.ar" 
                  className="bg-gradient-to-r from-azure-200 to-azure-300 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  Enviar Email
                </a>
                <a 
                  href="tel:+54123456789" 
                  className="bg-white text-azure-400 border-2 border-azure-300 px-6 py-3 rounded-full hover:bg-azure-50 transition-colors font-semibold"
                >
                  Llamar Ahora
                </a>
              </div>
            </div>
            
            {/* Link to Academic FAQ */}
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                ¿Buscas información específica sobre nuestras carreras?
              </p>
              <a 
                href="/faq-academic-offer" 
                className="inline-flex items-center text-azure-400 hover:text-azure-500 font-semibold transition-colors"
              >
                Ver FAQ de Oferta Académica
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default FAQGeneralPage;