import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Accordion from '../components/Accordion';
import { generalFAQData } from '../data/faqData';

const HelpCenterPage: React.FC = () => {
  const quickFAQData = generalFAQData.slice(0, 4); // Primeras 4 preguntas para FAQ rápidas

  const resources = [
    {
      title: 'Guía de Inscripción',
      description: 'Paso a paso para inscribirse en nuestras tecnicaturas',
      icon: '📋',
      link: '/academic-offer'
    },
    {
      title: 'Documentación Requerida',
      description: 'Lista completa de documentos necesarios para la inscripción',
      icon: '📄',
      link: '/contact'
    },
    {
      title: 'Calendario Académico',
      description: 'Fechas importantes del año lectivo',
      icon: '📅',
      link: '/events'
    },
    {
      title: 'Reglamento Estudiantil',
      description: 'Normas y procedimientos institucionales',
      icon: '📖',
      link: '/about'
    }
  ];

  const contactOptions = [
    {
      title: 'Teléfono',
      info: '+54 3777 123456',
      icon: '📞',
      description: 'Lunes a Viernes de 8:00 a 16:00 hs'
    },
    {
      title: 'Email',
      info: 'info@iset812.edu.ar',
      icon: '✉️',
      description: 'Respuesta en 24-48 horas'
    },
    {
      title: 'WhatsApp',
      info: '+54 9 3777 123456',
      icon: '💬',
      description: 'Consultas rápidas'
    },
    {
      title: 'Presencial',
      info: 'Av. San Martín 1234, Ceret',
      icon: '🏢',
      description: 'Lunes a Viernes de 8:00 a 16:00 hs'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
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
              Centro de <span className="text-azure-400">Ayuda</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Encuentra respuestas a tus preguntas, recursos útiles y toda la información que necesitas sobre el ISET N° 812
            </p>
          </div>
        </div>
      </section>

      {/* Quick FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-azure-900 mb-4">
              Preguntas <span className="text-azure-400">Frecuentes</span>
            </h2>
            <p className="text-azure-600 max-w-2xl mx-auto">
              Respuestas rápidas a las consultas más comunes
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Accordion items={quickFAQData} />
          </div>
          
          <div className="text-center mt-8">
            <Link
              to="/faq-general"
              onClick={() => window.scrollTo(0, 0)}
              className="inline-flex items-center text-azure-600 hover:text-azure-700 font-semibold"
            >
              Ver todas las preguntas frecuentes
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 bg-azure-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-azure-900 mb-4">
              Recursos Útiles
            </h2>
            <p className="text-azure-600 max-w-2xl mx-auto">
              Guías, documentos y herramientas para estudiantes y futuros estudiantes
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <Link
                key={index}
                to={resource.link}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-azure-100 hover:border-azure-200 group"
              >
                <div className="text-4xl mb-4">{resource.icon}</div>
                <h3 className="text-lg font-semibold text-azure-900 mb-2 group-hover:text-coral-600 transition-colors">
                  {resource.title}
                </h3>
                <p className="text-azure-600 text-sm">
                  {resource.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Options Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-azure-900 mb-4">
              ¿Necesitas más ayuda?
            </h2>
            <p className="text-azure-600 max-w-2xl mx-auto">
              Nuestro equipo está aquí para ayudarte. Elige la forma de contacto que prefieras
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactOptions.map((option, index) => (
              <div
                key={index}
                className="bg-azure-50 p-6 rounded-xl text-center border border-azure-100 hover:border-coral-200 transition-colors"
              >
                <div className="text-3xl mb-4">{option.icon}</div>
                <h3 className="text-lg font-semibold text-azure-900 mb-2">
                  {option.title}
                </h3>
                <p className="text-coral-600 font-medium mb-2">
                  {option.info}
                </p>
                <p className="text-azure-600 text-sm">
                  {option.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/contact"
              className="bg-coral-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-coral-600 transition-colors inline-flex items-center"
            >
              Ir a la página de contacto
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>



      <Footer />
    </div>
  );
};

export default HelpCenterPage;