// src/pages/ClientsPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './ClientsPage.module.css';

// --- Hero Section ---
const ClientsHero = () => (
  <motion.div
    className={styles.clientsHero}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
  >
    <div className={styles.heroOverlay}></div>
    <Container fluid className="mw-1300 position-relative z-index-2">
      <h1 className={styles.heroHeading}>Some positive outcomes from 2024</h1>
      <p className={styles.heroSubheading}>
        See how we've helped our partners achieve digital excellence and growth.
      </p>
    </Container>
  </motion.div>
);

// --- Featured Clients Section ---
const FeaturedClients = () => {
  const featured = [
    { name: "Amossys Portable Power", logo: "https://i.ibb.co/3sWdYvY/client-logo-1-grey.png", image: "https://i.ibb.co/fF3yD9M/featured-client-1.jpg", desc: "Revolutionizing portable energy solutions with a strong digital presence." },
    { name: "Sol ei Luna", logo: "https://i.ibb.co/s5H10Yg/client-logo-4-grey.png", image: "https://i.ibb.co/1Jq0d3g/featured-client-2.jpg", desc: "Bringing unique experiences to light through innovative online campaigns." },
    { name: "Hindi Universe Foundation", logo: "https://i.ibb.co/Jqj3NnN/client-logo-6-grey.png", image: "https://i.ibb.co/Jqj3NnN/client-logo-6-grey.png", desc: "Connecting cultures and communities with a powerful digital outreach." },
  ];

  return (
    <div className={styles.featuredClientsSection}>
      <Container fluid className="mw-1300">
        <motion.h2
          className={styles.sectionHeading}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Our Spotlight Partners
        </motion.h2>
        <Row className="g-5">
          {featured.map((client, index) => (
            <Col lg={4} key={index}>
              <motion.div
                className={styles.featuredCard}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              >
                <div className={styles.cardImageWrapper}>
                  <img src={client.image} alt={client.name} className={styles.cardImage} />
                </div>
                <div className={styles.cardContent}>
                  <img src={client.logo} alt={`${client.name} logo`} className={styles.cardLogo} />
                  <h3 className={styles.cardName}>{client.name}</h3>
                  <p className={styles.cardDesc}>{client.desc}</p>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

// --- All Clients Logo Grid ---
const AllClientsGrid = () => {
  const allLogos = [
    "https://i.ibb.co/3sWdYvY/client-logo-1-grey.png", // Amossys
    "https://i.ibb.co/L8G0b3G/client-logo-2-grey.png", // Bihar Foundation
    "https://i.ibb.co/b2V8Jtq/client-logo-3-grey.png", // Generic placeholder or another client
    "https://i.ibb.co/s5H10Yg/client-logo-4-grey.png", // Sol ei Luna
    "https://i.ibb.co/7Q9735V/client-logo-5-grey.png", // Anandadhara
    "https://i.ibb.co/Jqj3NnN/client-logo-6-grey.png", // Hindi Universe Foundation
    "https://i.ibb.co/c86YgX9/client-logo-7-grey.png", // Ligen Power
    "https://i.ibb.co/h7h3vDq/client-logo-8-grey.png", // Joy Travel Tours
    "https://i.ibb.co/K21y6vM/client-logo-9-grey.png", // Gandhi Asian Food
    "https://i.ibb.co/Xz9F31w/client-logo-10-grey.png", // Hindu Milan Mandir
    "https://i.ibb.co/L8G0b3G/client-logo-2-grey.png", // Bihar Foundation (repeated for grid fill)
    "https://i.ibb.co/3sWdYvY/client-logo-1-grey.png", // Amossys (repeated for grid fill)
  ];

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div className={styles.allClientsSection}>
      <Container fluid className="mw-1300">
        <motion.h2
          className={styles.sectionHeading}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          All Our Valued Clients
        </motion.h2>
        <Row className="g-4">
          {allLogos.map((logo, index) => (
            <Col xs={6} md={4} lg={3} key={index}>
              <motion.div
                className={styles.clientLogoWrapper}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: index * 0.05 }}
              >
                <img src={logo} alt={`Client Logo ${index + 1}`} className={styles.clientLogo} />
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};


// --- Book Appointment CTA (Re-using from HowItWorks) ---
const BookAppointmentCTA = () => (
    <div className={styles.ctaSection}>
        <Container fluid className="mw-1300 text-center">
            <motion.h2
                className={styles.ctaHeading}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
                Start Your Success Story
            </motion.h2>
            <motion.p
                className={styles.ctaText}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            >
                Ready to become our next success story? Let's discuss how Neksoft can transform your digital presence.
            </motion.p>
            <motion.button
                className={styles.ctaButton}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                whileHover={{ scale: 1.05, boxShadow: '0 0 25px #E50914' }}
                whileTap={{ scale: 0.95 }}
            >
                Book An Appointment
            </motion.button>
        </Container>
    </div>
);


// --- MAIN PAGE COMPONENT ---
const ClientsPage = () => {
  return (
    <>
      <ClientsHero />
      <FeaturedClients />
      <AllClientsGrid />
      <BookAppointmentCTA />
    </>
  );
};

export default ClientsPage;