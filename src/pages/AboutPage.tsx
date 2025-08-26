import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Users, Target, Award, BookOpen, MapPin } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-azure-50 via-white to-azure-100 py-20 lg:py-32">
          <div className="absolute inset-0 opacity-40">
            <div className="w-full h-full bg-gradient-to-br from-azure-100/20 to-azure-200/10"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Sobre Nosotros
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Conoce la historia, misión y visión del Instituto Superior de Educación Tecnológica N° 812 - CeRET
            </p>
          </div>
        </section>

        {/* Historia Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Nuestra Historia
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    El Instituto Superior de Educación Tecnológica N° 812 - CeRET se encuentra ubicado en el corazón de Comodoro Rivadavia, consolidándose como una institución de referencia en la educación técnica y profesional de la región patagónica.
                  </p>
                  <p>
                    Situado estratégicamente en Av. del Libertador 560, nuestro instituto ha sido pionero en la formación de técnicos superiores, contribuyendo significativamente al desarrollo socio-productivo de la región y respondiendo a las demandas del sector energético, industrial y tecnológico de la Patagonia.
                  </p>
                  <p>
                    A lo largo de los años, hemos expandido nuestra influencia educativa, siendo la institución madre del ISET N° 815 de Esquel, que comenzó como nuestro anexo en 2008 antes de convertirse en instituto autónomo en 2014.
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-azure-50 to-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-6">
                  <MapPin className="w-8 h-8 text-azure-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Ubicación Estratégica</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Nuestras instalaciones están diseñadas para brindar accesibilidad completa, con entrada y estacionamiento adaptados para personas en silla de ruedas, garantizando oportunidades educativas para todos los sectores de la comunidad.
                </p>
                <div className="bg-azure-100 p-4 rounded-lg">
                  <p className="text-azure-800 font-medium">
                    📍 Av. del Libertador 560, Comodoro Rivadavia, Chubut
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Misión y Visión */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Misión y Visión
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Nuestro compromiso con la excelencia educativa y el desarrollo regional
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Misión */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="bg-azure-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-azure-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Misión</h3>
                <p className="text-gray-600 leading-relaxed">
                  Formar técnicos superiores altamente capacitados que respondan a las demandas del desarrollo técnico y tecnológico regional, facilitando la incorporación de jóvenes y adultos al mundo del trabajo mediante una educación técnico-profesional de calidad, inclusiva y orientada a la innovación.
                </p>
              </div>
              
              {/* Visión */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="bg-azure-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Award className="w-8 h-8 text-azure-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Visión</h3>
                <p className="text-gray-600 leading-relaxed">
                  Ser reconocidos como la institución líder en educación tecnológica superior de la Patagonia, formando profesionales íntegros que contribuyan al desarrollo sostenible de la región, promoviendo la innovación, la investigación aplicada y la transferencia tecnológica.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Valores y Objetivos */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Nuestros Valores y Objetivos
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Los principios que guían nuestra labor educativa y nuestros objetivos institucionales
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Excelencia Académica */}
              <div className="text-center">
                <div className="bg-gradient-to-br from-azure-100 to-azure-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="w-10 h-10 text-azure-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Excelencia Académica</h3>
                <p className="text-gray-600">
                  Comprometidos con la calidad educativa y la formación integral de nuestros estudiantes, con un cuerpo docente altamente capacitado.
                </p>
              </div>
              
              {/* Inclusión y Accesibilidad */}
              <div className="text-center">
                <div className="bg-gradient-to-br from-azure-100 to-azure-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-azure-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Inclusión y Accesibilidad</h3>
                <p className="text-gray-600">
                  Garantizamos oportunidades educativas para todos, con instalaciones completamente accesibles y programas inclusivos.
                </p>
              </div>
              
              {/* Innovación Tecnológica */}
              <div className="text-center">
                <div className="bg-gradient-to-br from-azure-100 to-azure-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-10 h-10 text-azure-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovación Tecnológica</h3>
                <p className="text-gray-600">
                  Promovemos la investigación aplicada y la transferencia tecnológica para el desarrollo regional sostenible.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Objetivos Institucionales */}
        <section className="py-16 bg-gradient-to-br from-azure-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Objetivos Institucionales
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-azure-500 w-3 h-3 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    Fortalecer la formación técnico profesional, facilitando la incorporación de jóvenes al mundo del trabajo y la formación continua de adultos.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="bg-azure-500 w-3 h-3 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    Desarrollar un sistema integrado de Educación Técnico Profesional que articule los niveles de educación media y superior.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="bg-azure-500 w-3 h-3 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    Promover la producción y socialización del conocimiento en ámbitos de ciencia, tecnología y trabajo.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-azure-500 w-3 h-3 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    Facilitar la continuidad de estudios técnicos superiores y de formación profesional en toda la región patagónica.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="bg-azure-500 w-3 h-3 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    Contribuir al desarrollo socio-productivo regional mediante la formación de técnicos especializados.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="bg-azure-500 w-3 h-3 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    Desarrollar actitudes y valores para la formación de ciudadanos responsables en sociedades democráticas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reconocimientos */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Reconocimiento y Calidad
              </h2>
            </div>
            
            <div className="bg-gradient-to-br from-azure-50 to-white p-8 rounded-2xl shadow-lg text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-azure-100 w-20 h-20 rounded-full flex items-center justify-center">
                  <Award className="w-10 h-10 text-azure-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Calificación de Excelencia
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Con una calificación promedio de 4.1/5 basada en 115 reseñas, nuestros estudiantes y egresados destacan la calidad del servicio educativo, la dedicación del cuerpo docente y la relevancia de los contenidos impartidos.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-azure-600 mb-2">4.1/5</div>
                  <p className="text-gray-600">Calificación Promedio</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-azure-600 mb-2">115+</div>
                  <p className="text-gray-600">Reseñas de Estudiantes</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-azure-600 mb-2">25+</div>
                  <p className="text-gray-600">Años de Experiencia</p>
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

export default AboutPage;