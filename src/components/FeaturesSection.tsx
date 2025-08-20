import React from 'react';
import { MapPin, Users, Headphones } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: MapPin,
      title: "Solución Integral de Estudios",
      description: "Programa integral que cubre todos los aspectos para desarrollar tu excelencia académica. Accede a libros, materiales de estudio, evaluaciones y orientación personalizada en un solo lugar."
    },
    {
      icon: Users,
      title: "Nuestro Compromiso es tu Destino",
      description: "Conectamos estudiantes a través de nuestra sólida red de mentores y nuestrosconsejeros institucionales, asegurando el apoyo a los estudiantes durante todo su recorrido académico."
    },
    {
      icon: Headphones,
      title: "Soporte Integral",
      description: "Apoyo integral en cada paso de tu proceso de aprendizaje. Desde la inscripción hasta la graduación, nuestro equipo de soporte dedicado está aquí para ayudarte."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-4 p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-azure-200 to-azure-300 rounded-full">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;