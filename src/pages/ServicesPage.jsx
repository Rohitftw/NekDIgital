// src/pages/ServicesPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './ServicesPage.module.css';

// --- Page Header ---
const ServicesHero = () => (
  <motion.div 
    className={styles.servicesHero}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
  >
    <div className={styles.heroOverlay}></div>
    {/* --- FIX: Added position-relative and z-index-2 --- */}
    <Container fluid className="mw-1300 position-relative z-index-2">
      <h1 className={styles.heroHeading}>What We Do</h1>
    </Container>
  </motion.div>
);

// --- Marketing Services Section ---
const MarketingServices = () => {
  const services = [
    { title: "Mobile friendly website", text: "We create a website tailored to your business's style and fully optimized for all devices. With hosting, domain, included management, and no hidden fees or commissions, you can enjoy a hassle-free experience." },
    { title: "Search engine optimized", text: "We create your website to be visible for optimizing your website to meet all guidelines. This will automatically add in local search results, helping guests reach you effortlessly." },
    { title: "Google Reviews", text: "Reviews are incredibly important, as most guests read them before visiting. Your business can shine with Google Maps profile and help you gather reviews." },
    { title: "Website support", text: "We create a website tailored to your business's style and fully optimized for all devices. With hosting, domain, included management, and no hidden fees or commissions, you can enjoy a hassle-free experience." },
    { title: "Ads on Google", text: "We create a website tailored to your business's style and fully optimized for all devices. With hosting, domain, included management, and no hidden fees or commissions, you can enjoy a hassle-free experience." },
    { title: "Email campaigns", text: "We create a website tailored to your business's style and fully optimized for all devices. With hosting, domain, included management, and no hidden fees or commissions, you can enjoy a hassle-free experience." }
  ];

  return (
    <div className={styles.servicesSection}>
      <Container fluid className="mw-1300">
        <motion.h2 
          className={styles.sectionHeading}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Marketing Services
        </motion.h2>
        <Row className="g-4">
          {services.map((item, index) => (
            <Col md={6} lg={4} key={index}>
              <motion.div 
                className={styles.serviceCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={styles.cardGlow}></div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.text}</p>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

// --- Additional Services Section ---
const AdditionalServices = () => {
  const services = [
    { title: "Logo and menu", text: "We offer a complete package including a logo and menu in your corporate style template for your business cards and menu.", price: "One time fee €599" },
    { title: "Booking/Reservation system", text: "If needed, we can link a booking or reservation system. We check the options together and offer tailored advice to suit your needs.", price: "From €22.50 per month" },
    { title: "Creatives", text: "We create designs, including posts, flyers, and other promotional assets. We are here to meet your business needs effectively.", price: "Cost depends on the type of creative" } // <-- FIX: Changed 'title:As:' to 'title:'
  ];
  return (
    <div className={`${styles.servicesSection} ${styles.additionalServices}`}>
      <Container fluid className="mw-1300">
        <motion.h2 
          className={styles.sectionHeading}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Additional Services
        </motion.h2>
        <Row className="g-4">
          {services.map((item, index) => (
            <Col md={6} lg={4} key={index}>
              <motion.div 
                className={styles.serviceCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={styles.cardGlow}></div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.text}</p>
                <p className={styles.cardPrice}>{item.price}</p>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

// --- MAIN PAGE COMPONENT ---
const ServicesPage = () => {
  return (
    <>
      <ServicesHero />
      <MarketingServices />
      <AdditionalServices />
    </>
  );
};

export default ServicesPage;