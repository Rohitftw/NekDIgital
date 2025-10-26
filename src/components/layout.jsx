// src/components/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import CustomCursor from './CustomCursor'; // <-- 1. IMPORT IT

const Layout = () => {
  return (
    <>
      <CustomCursor /> {/* <-- 2. ADD IT HERE */}
      <div className="noise-overlay"></div>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;