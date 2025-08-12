import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import AboutSection from '../components/AboutSection';
import PartnersSection from '../components/PartnersSection';
import EventsSection from '../components/EventsSection';
import CoursesSection from '../components/CoursesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import MoreCoursesSection from '../components/MoreCoursesSection';
import NewsletterSection from '../components/NewsletterSection';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <AboutSection />
        <PartnersSection />
        <EventsSection />
        <CoursesSection />
        <TestimonialsSection />
        <MoreCoursesSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;