// src/components/CustomCursor.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: -50, y: -50 });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', mouseMove);
    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 12, // Offset to center the 24px cursor
      y: mousePosition.y - 12, // Offset to center the 24px cursor
      height: 24,
      width: 24,
      backgroundColor: 'transparent',
      border: '2px solid #E50914',
      // Red glow effect
      boxShadow: '0 0 20px 5px #E50914, 0 0 10px 2px #E50914 inset',
    },
  };

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        borderRadius: '50%',
        zIndex: 9999,
        pointerEvents: 'none',
      }}
      variants={variants}
      animate="default"
      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
    />
  );
};

export default CustomCursor;