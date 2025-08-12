import React from 'react';
import { Star, Users } from 'lucide-react';

const CoursesSection: React.FC = () => {
  const courses = [
    {
      id: 1,
      title: "Course Name",
      category: "Programming",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.8,
      students: 1234,
      price: "$99"
    },
    {
      id: 2,
      title: "Course Name",
      category: "Design",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.9,
      students: 856,
      price: "$79"
    },
    {
      id: 3,
      title: "Course Name",
      category: "Business",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.7,
      students: 2341,
      price: "$129"
    },
    {
      id: 4,
      title: "Course Name",
      category: "Marketing",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.6,
      students: 987,
      price: "$89"
    },
    {
      id: 5,
      title: "Course Name",
      category: "Photography",
      image: "https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.8,
      students: 654,
      price: "$69"
    },
    {
      id: 6,
      title: "Course Name",
      category: "Writing",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.7,
      students: 432,
      price: "$59"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Transform your life through
          </h2>
          <h3 className="text-4xl font-bold text-azure-400">education</h3>
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
                  <span className="text-lg font-bold text-gray-900">{course.price}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{course.title}</h3>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                    <span>{course.rating}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    <span>{course.students} students</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;