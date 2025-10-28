// src/components/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import CustomCursor from './CustomCursor'; // <-- 1. IMPORT IT
import styles from './Layout.module.css';

const Layout = () => {
  return (
    <>
      <CustomCursor /> {/* <-- 2. ADD IT HERE */}
      <div className="noise-overlay"></div>
      {/* --- 2. ADDED BACKGROUND PATTERN DIV --- */}
      <div className={styles.backgroundPattern}></div>
      {/* ------------------------------------ */}
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;