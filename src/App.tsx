import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AcademicOfferPage from './pages/AcademicOfferPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-azure-50">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/academic-offer" element={<AcademicOfferPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;