// src/components/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import CustomCursor from './CustomCursor';
import styles from './Layout.module.css'; // Ensure this line exists and filename is correct

const Layout = () => {
  return (
    <>
      <CustomCursor />
      <div className="noise-overlay"></div>
      {/* --- BACKGROUND PATTERN DIV --- */}
      <div className={styles.backgroundPattern}></div>
      {/* --- END PATTERN DIV --- */}
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;