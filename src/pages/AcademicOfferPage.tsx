import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { GraduationCap, Clock, Users, Award, BookOpen } from 'lucide-react';

const AcademicOfferPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const careers = [
    {
      id: 1,
      title: "Tecnicatura Superior en Petróleo y Gas",
      duration: "3 años",
      modality: "Presencial",
      description: "Formación especializada en exploración, extracción y procesamiento de hidrocarburos, con enfoque en tecnologías modernas y seguridad industrial.",
      subjects: ["Geología del Petróleo", "Perforación", "Producción", "Refinación"],
      image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 2,
      title: "Tecnicatura Superior en Energías Renovables",
      duration: "3 años",
      modality: "Presencial",
      description: "Capacitación en sistemas de energía solar, eólica y otras fuentes renovables, incluyendo instalación y mantenimiento.",
      subjects: ["Energía Solar", "Energía Eólica", "Sistemas Fotovoltaicos", "Eficiencia Energética"],
      image: "https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 3,
      title: "Tecnicatura Superior en Mantenimiento Industrial",
      duration: "3 años",
      modality: "Presencial",
      description: "Formación integral en mantenimiento preventivo y correctivo de equipos industriales, automatización y gestión de activos.",
      subjects: ["Mantenimiento Preventivo", "Automatización", "Mecánica Industrial", "Gestión de Activos"],
      image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 4,
      title: "Tecnicatura Superior en Producción Industrial de Alimentos",
      duration: "3 años",
      modality: "Presencial",
      description: "Especialización en procesos de producción alimentaria, control de calidad, seguridad alimentaria y tecnología de alimentos.",
      subjects: ["Tecnología de Alimentos", "Control de Calidad", "Seguridad Alimentaria", "Procesos Industriales"],
      image: "https://images.pexels.com/photos/5591663/pexels-photo-5591663.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 5,
      title: "Tecnicatura Superior en Logística",
      duration: "3 años",
      modality: "Presencial",
      description: "Formación en gestión de cadenas de suministro, almacenamiento, distribución y optimización de procesos logísticos.",
      subjects: ["Cadena de Suministro", "Gestión de Inventarios", "Transporte", "Comercio Exterior"],
      image: "https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 6,
      title: "Tecnicatura Superior en Producción de Multimedios",
      duration: "3 años",
      modality: "Presencial",
      description: "Capacitación en creación de contenido audiovisual, diseño gráfico, animación digital y producción multimedia.",
      subjects: ["Diseño Gráfico", "Producción Audiovisual", "Animación Digital", "Marketing Digital"],
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 7,
      title: "Tecnicatura Superior en Confección de Indumentaria y Productos Textiles",
      duration: "3 años",
      modality: "Presencial",
      description: "Formación en diseño de moda, patronaje, confección industrial y gestión de la producción textil.",
      subjects: ["Diseño de Moda", "Patronaje", "Confección Industrial", "Textiles Técnicos"],
      image: "https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  const requirements = [
    "Título secundario completo",
    "Fotocopia del DNI",
    "Certificado de estudios secundarios",
    "2 fotos 4x4",
    "Certificado médico"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-azure-50 to-azure-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="flex justify-center space-x-2 mb-6">
              <div className="w-0 h-0 border-l-8 border-r-0 border-b-8 border-l-azure-200 border-b-transparent"></div>
              <div className="w-0 h-0 border-l-8 border-r-0 border-b-8 border-l-azure-300 border-b-transparent"></div>
              <div className="w-0 h-0 border-l-8 border-r-0 border-b-8 border-l-coral-400 border-b-transparent"></div>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Oferta <span className="text-azure-400">Académica</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Descubre nuestras carreras técnicas superiores diseñadas para formar profesionales competentes 
              y preparados para los desafíos del mercado laboral actual.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-azure-50 to-azure-100 rounded-xl">
              <GraduationCap className="w-12 h-12 text-azure-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-azure-400 mb-2">7</div>
              <div className="text-gray-600">Carreras Técnicas</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-azure-50 to-azure-100 rounded-xl">
              <Clock className="w-12 h-12 text-azure-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-azure-400 mb-2">3</div>
              <div className="text-gray-600">Años de Duración</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-azure-50 to-azure-100 rounded-xl">
              <Users className="w-12 h-12 text-azure-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-azure-400 mb-2">500+</div>
              <div className="text-gray-600">Estudiantes Activos</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-azure-50 to-azure-100 rounded-xl">
              <Award className="w-12 h-12 text-azure-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-azure-400 mb-2">95%</div>
              <div className="text-gray-600">Inserción Laboral</div>
            </div>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section className="py-20 bg-azure-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Nuestras <span className="text-azure-400">Carreras</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Formación técnica superior con enfoque práctico y orientación al mercado laboral
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {careers.map((career) => (
              <div key={career.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <img 
                    src={career.image} 
                    alt={career.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-azure-400 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {career.duration}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{career.title}</h3>
                  <p className="text-gray-600 mb-4">{career.description}</p>
                  
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      {career.duration}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <BookOpen className="w-4 h-4 mr-1" />
                      {career.modality}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Materias principales:</h4>
                    <div className="flex flex-wrap gap-2">
                      {career.subjects.map((subject, index) => (
                        <span key={index} className="bg-azure-100 text-azure-400 px-3 py-1 rounded-full text-sm">
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-azure-200 to-azure-300 text-white py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                    Más Información
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Requisitos de <span className="text-azure-400">Inscripción</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Para formar parte de nuestra comunidad educativa, necesitas cumplir con los siguientes requisitos:
              </p>
              
              <ul className="space-y-4">
                {requirements.map((requirement, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-azure-400 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">{index + 1}</span>
                    </div>
                    <span className="text-gray-700">{requirement}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8">
                <button className="bg-gradient-to-r from-azure-200 to-azure-300 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                  Inscribirse Ahora
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-azure-200 via-azure-300 to-coral-400 rounded-full transform rotate-12 scale-110 opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-azure-100 via-azure-200 to-azure-300 rounded-full transform -rotate-12 scale-90 opacity-20"></div>
                
                <div className="relative bg-gradient-to-br from-azure-300 via-azure-200 to-azure-400 rounded-full p-8 aspect-square flex items-center justify-center">
                  <img 
                    src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Estudiantes" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-azure-400 to-azure-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            ¿Listo para comenzar tu futuro profesional?
          </h2>
          <p className="text-xl text-azure-100 mb-8 max-w-3xl mx-auto">
            Únete a nuestra comunidad de estudiantes y profesionales. Inscríbete hoy y da el primer paso hacia una carrera exitosa.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-azure-400 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
              Solicitar Información
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-azure-400 transition-all duration-200">
              Agendar Visita
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AcademicOfferPage;