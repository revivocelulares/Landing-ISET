import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Definir la interfaz para los eventos
interface Event {
  id: number;
  eventName: string;
  eventCategory: 'Evento Institucional' | 'Evento Académico' | 'Evento para la Comunidad';
  eventDate: string;
  eventTime: string;
  eventPlace: string;
}

// Datos de ejemplo para los eventos
const eventsData: Event[] = [
  {
    id: 1,
    eventName: "Ceremonia de Graduación 2024",
    eventCategory: "Evento Institucional",
    eventDate: "2024-12-15",
    eventTime: "10:00 AM",
    eventPlace: "Auditorio Principal ISET 812"
  },
  {
    id: 2,
    eventName: "Conferencia de Energías Renovables",
    eventCategory: "Evento Académico",
    eventDate: "2024-11-20",
    eventTime: "2:00 PM",
    eventPlace: "Aula Magna"
  },
  {
    id: 3,
    eventName: "Feria de Empleo y Oportunidades",
    eventCategory: "Evento para la Comunidad",
    eventDate: "2024-11-25",
    eventTime: "9:00 AM",
    eventPlace: "Plaza Central CeRET"
  },
  {
    id: 4,
    eventName: "Jornada de Puertas Abiertas",
    eventCategory: "Evento Institucional",
    eventDate: "2024-12-01",
    eventTime: "8:00 AM",
    eventPlace: "Campus ISET 812"
  },
  {
    id: 5,
    eventName: "Seminario de Innovación Tecnológica",
    eventCategory: "Evento Académico",
    eventDate: "2024-11-30",
    eventTime: "3:00 PM",
    eventPlace: "Laboratorio de Innovación"
  },
  {
    id: 6,
    eventName: "Taller de Capacitación Comunitaria",
    eventCategory: "Evento para la Comunidad",
    eventDate: "2024-12-05",
    eventTime: "4:00 PM",
    eventPlace: "Centro Comunitario CeRET"
  }
];

// Función para obtener el color de la categoría
const getCategoryColor = (category: Event['eventCategory']) => {
  switch (category) {
    case 'Evento Institucional':
      return 'bg-blue-100 text-blue-800';
    case 'Evento Académico':
      return 'bg-green-100 text-green-800';
    case 'Evento para la Comunidad':
      return 'bg-purple-100 text-purple-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

// Función para formatear la fecha
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

const EventsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-azure-50 to-azure-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="text-center space-y-6">
          {/* Indicadores de flecha */}
          <div className="flex justify-center space-x-2">
                <div className="w-0 h-0 border-l-8 border-r-0 border-b-8 border-l-azure-200 border-b-transparent"></div>
                <div className="w-0 h-0 border-l-8 border-r-0 border-b-8 border-l-azure-300 border-b-transparent"></div>
                <div className="w-0 h-0 border-l-8 border-r-0 border-b-8 border-l-coral-400 border-b-transparent"></div>
          </div>
          
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nuestros <span className="text-azure-400">Eventos</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Descubre las actividades, conferencias y eventos que organizamos para enriquecer 
              la experiencia educativa y fortalecer los vínculos con nuestra comunidad.
            </p>
          </div>
         </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Próximos <span className="text-azure-400">Eventos</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Mantente informado sobre nuestras actividades institucionales, académicas y comunitarias.
            </p>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {eventsData.map((event) => (
              <div key={event.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 overflow-hidden">
                {/* Category Badge */}
                <div className="p-6 pb-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(event.eventCategory)}`}>
                    {event.eventCategory}
                  </span>
                </div>
                
                {/* Event Content */}
                <div className="px-6 pb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 line-clamp-2">
                    {event.eventName}
                  </h3>
                  
                  <div className="space-y-3">
                    {/* Date */}
                    <div className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-3 text-azure-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="font-medium">{formatDate(event.eventDate)}</span>
                    </div>
                    
                    {/* Time */}
                    <div className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-3 text-azure-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-medium">{event.eventTime}</span>
                    </div>
                    
                    {/* Place */}
                    <div className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-3 text-azure-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="font-medium">{event.eventPlace}</span>
                    </div>
                  </div>
                  
                  {/* Action Button */}
                  <div className="mt-6">
                    <button className="block w-full bg-gradient-to-r from-azure-200 to-azure-300 text-white py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 text-center">
                      Más Información
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EventsPage;