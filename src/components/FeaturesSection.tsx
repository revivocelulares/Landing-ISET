import React from 'react';
import { MapPin, Users, Headphones } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: MapPin,
      title: "One Stop Study Solution",
      description: "Comprehensive program covering every aspect to develop your academic excellence. Access books, study materials, tests, and personalized guidance all in one place."
    },
    {
      icon: Users,
      title: "Our Is Our Destination",
      description: "Connecting students through our strong network of the worldwide mentors and counselors, ensuring to support students throughout their academic journey."
    },
    {
      icon: Headphones,
      title: "End To End Support",
      description: "Comprehensive support through every step of your learning journey. From enrollment to graduation, our dedicated support team is here to help."
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