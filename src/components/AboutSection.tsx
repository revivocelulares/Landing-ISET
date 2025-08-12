import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 bg-azure-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              {/* Colorful background shapes */}
              <div className="absolute inset-0 bg-gradient-to-br from-azure-200 via-azure-300 to-coral-400 rounded-full transform rotate-12 scale-110 opacity-20"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-azure-100 via-azure-200 to-azure-300 rounded-full transform -rotate-12 scale-90 opacity-20"></div>
              
              {/* Main image container */}
              <div className="relative bg-gradient-to-br from-azure-300 via-azure-200 to-azure-400 rounded-full p-8 aspect-square flex items-center justify-center">
                <img 
                  src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Professional educator" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                SOBRE NOSOTROS
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                We provide comprehensive educational solutions designed to help students achieve their academic goals. 
                Our experienced team of educators and counselors work together to create personalized learning experiences 
                that cater to individual needs and learning styles.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With years of experience in the education industry, we understand what it takes to succeed. 
                Our proven methodology and dedicated support system have helped thousands of students reach their potential.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm border">
                <div className="text-3xl font-bold text-azure-400 mb-2">25+</div>
                <div className="text-sm text-gray-600">Años de Experiencia</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm border">
                <div className="text-3xl font-bold text-azure-400 mb-2">100+</div>
                <div className="text-sm text-gray-600">Historias de Éxito</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm border">
                <div className="text-3xl font-bold text-azure-400 mb-2">99%</div>
                <div className="text-sm text-gray-600">Estudiantes Satisfechos</div>
              </div>
            </div>

            <button className="bg-gradient-to-r from-azure-200 to-azure-300 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
              Learn More About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;