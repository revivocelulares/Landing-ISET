import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AcademicOfferPage from './pages/AcademicOfferPage';
import TechnicianDetailPage from './pages/TechnicianDetailPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import EventsPage from './pages/EventsPage';
import FAQGeneralPage from './pages/FAQGeneralPage';
import FAQAcademicOfferPage from './pages/FAQAcademicOfferPage';
import HelpCenterPage from './pages/HelpCenterPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-azure-50">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/academic-offer" element={<AcademicOfferPage />} />
          <Route path="/tecnicatura/:id" element={<TechnicianDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/faq-general" element={<FAQGeneralPage />} />
          <Route path="/faq-academic-offer" element={<FAQAcademicOfferPage />} />
          <Route path="/help-center" element={<HelpCenterPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;