// src/pages/AboutPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaCheckCircle } from 'react-icons/fa'; // We'll use this for an icon
import styles from './AboutPage.module.css';

// --- 1. Page Header ---
const AboutHero = () => (
  <motion.div 
    className={styles.aboutHero}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
  >
    <div className={styles.heroOverlay}></div>
    {/* --- FIX: Added position-relative and z-index-2 --- */}
    <Container fluid className="mw-1300 position-relative z-index-2">
      <h1 className={styles.heroHeading}>About Us</h1>
    </Container>
  </motion.div>
);

// --- 2. Intro Section ("Setting a new standard...") ---
const IntroSection = () => (
  <div className={styles.introSection}>
    <Container fluid className="mw-1300">
      <Row className="align-items-center g-5">
        <Col lg={5}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <img 
              src="https://nekdigital.nl/wp-content/uploads/2025/01/overworked-focused-diverse-businesspeople-working-business-company-meeting-office-room-brainstorming-marketing-strategy-late-night-min-1-scaled.jpg" 
              alt="Our Team" 
              className={styles.introImage}
            />
          </motion.div>
        </Col>
        <Col lg={7}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className={styles.sectionHeading}>
              Setting a new standard in business marketing.
            </h2>
            <p className={styles.description}>
              We position your business online with a professional presence and all the tools you need to run your marketing, business operations, and sales. With years of experience in digital marketing, we've redefined the approach to be all-in-one, flexible, and transparent, always keeping the entrepreneur at the core.
            </p>
          </motion.div>
        </Col>
      </Row>
    </Container>
  </div>
);

// --- 3. Why Services Section ---
const WhyServices = () => {
  const services = [
    { title: "More customer", text: "Neksoft is dedicated to helping you attract more customers. We provide your business with a website that goes beyond just being a business card." },
    { title: "Up-to-date website", text: "Website maintenance is essential. Hosting, updates, and optimization are all included in your subscription, ensuring a hassle-free experience." },
    { title: "Unlimited modifications", text: "Need a change, promotion, or update? No problem. All minor text, images, and adjustments are included in your subscription." },
    { title: "Save valuable time", text: "As a busy entrepreneur, focus on running your business. We'll handle all the digital tasks, saving you time and reducing stress." },
    { title: "We collaborate with you", text: "Success is a team effort. We collaborate with you to create the best strategies and strengthen your marketing for better results." },
    { title: "Create an impact", text: "Stay ahead of the competition with a strong online presence. With our expertise, we build guest trust and foster loyalty." }
  ];

  return (
    <div className={styles.whySection}>
      <Container fluid className="mw-1300">
        <motion.h2 
          className={styles.sectionHeading} 
          style={{ textAlign: 'center', marginBottom: '3rem' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Why Neksoft Consultancy Digital Services?
        </motion.h2>
        <Row className="g-4">
          {services.map((item, index) => (
            <Col md={6} lg={4} key={index}>
              <motion.div 
                className={styles.whyCard}
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

// --- 4. Specials Section ---
const Specials = () => {
  const specials = [
    { title: "No hidden commissions", text: "No hidden commissions on the revenue you generate. We believe in transparency and simplicity." },
    { title: "One fixed monthly fee", text: "A-la-carte is nice for a holiday; a fixed fee is what sets us apart. You'll always know exactly what you get and what you pay." },
    { title: "No initial setup fees", text: "There are no start-up costs with us. Building your website is completely free, even if you decide to cancel after 6 months." },
    { title: "Cancel anytime, monthly basis", text: "We value flexibility. After 6 months, you can cancel your subscription monthly, with no obligations or hassle." }
  ];

  return (
    <div className={styles.specialsSection}>
      <Container fluid className="mw-1300">
        <Row className="align-items-center g-5">
          <Col lg={5}>
            <motion.h2 
              className={styles.sectionHeading}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              Neksoft's Specials
            </motion.h2>
          </Col>
          <Col lg={7}>
            <motion.div 
              className={styles.specialsList}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              {specials.map((item, index) => (
                <div className={styles.specialItem} key={index}>
                  <FaCheckCircle className={styles.specialIcon} />
                  <div>
                    <h3 className={styles.specialTitle}>{item.title}</h3>
                    <p className={styles.specialDesc}>{item.text}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

// --- MAIN PAGE COMPONENT ---
const AboutPage = () => {
  return (
    <>
      <AboutHero />
      <IntroSection />
      <WhyServices />
      <Specials />
    </>
  );
};

export default AboutPage;