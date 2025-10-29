// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import our components
import Layout from './components/Layout';
import Homepage from './pages/Homepage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import HowItWorksPage from './pages/HowItWorksPage';
import PackagesPage from './pages/PackagesPage';
import ClientsPage from './pages/ClientsPage';
import ContactPage from './pages/ContactPage'; // <-- 1. IMPORT IT
import AppointmentPage from './pages/AppointmentPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        
        <Route index element={<Homepage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="how-it-works" element={<HowItWorksPage />} />
        <Route path="packages" element={<PackagesPage />} />
        <Route path="clients" element={<ClientsPage />} />
        <Route path="contact" element={<ContactPage />} /> {/* <-- 2. ADD THIS ROUTE */}
        <Route path="appointment" element={<AppointmentPage />} />
        
      </Route>
    </Routes>
  );
}

export default App;