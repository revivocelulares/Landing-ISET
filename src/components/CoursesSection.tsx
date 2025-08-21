import React from 'react';
import { Star, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const CoursesSection: React.FC = () => {
  const courses = [
    {
      id: 1,
      title: "Tecnicatura Superior en Energías Renovables",
      category: "Enerías Renovables",
      image: "https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.8,
      students: 1234,
    },
    {
      id: 2,
      title: "Tecnicatura Superior en Producción Industrial de Alimentos",
      category: "Producción de Alimentos",
      image: "https://images.pexels.com/photos/5591663/pexels-photo-5591663.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.9,
      students: 856,
    },
    {
      id: 3,
      title: "Tecnicatura Superior en Mantenimiento Industrial",
      category: "Mantenimiento Industrial",
      image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.7,
      students: 2341,
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Transformá tu vida
          </h2>
          <h3 className="text-4xl font-bold text-azure-400">con Educación</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-azure-400 font-medium">{course.category}</span>
                  <span className="text-lg font-bold text-gray-900">{}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{course.title}</h3>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                    <span>{course.rating}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    <span>{course.students} estudiantes</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/academic-offer"
            className="bg-gradient-to-r from-azure-200 to-azure-300 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            Ver Todas las Carreras
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;