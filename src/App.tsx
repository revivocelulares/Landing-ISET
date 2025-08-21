import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AcademicOfferPage from './pages/AcademicOfferPage';
import TechnicianDetailPage from './pages/TechnicianDetailPage';
import ContactPage from './pages/ContactPage';
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
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;