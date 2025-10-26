// src/pages/HowItWorksPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './HowItWorksPage.module.css';

// --- Page Header ---
const HowItWorksHero = () => (
  <motion.div
    className={styles.howHero}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
  >
    <div className={styles.heroOverlay}></div>
    <h1 className={styles.heroHeading}>How It Works</h1>
  </motion.div>
);

// --- Steps Section ---
const StepsSection = () => {
  const steps = [
    { step: "Step 1", title: "Select marketing package", text: "We offer three marketing packages - Package 1, 2, or 3. Simply choose the one you need and we'll contact you to schedule an appointment. Together, we'll choose the best website and application that suits you. Unsure which package to pick? No worries, we'll help you decide." },
    { step: "Step 2", title: "Establishing a foundation and creating a website", text: "We start by establishing a solid foundation and then build a professional, conversion-focused website tailored to your needs and business appearance, fully optimized on mobile devices." },
    { step: "Step 3", title: "Increase website traffic using Google Ads", text: "With Package 2, we'll create a tailored google advertising plan and run highly targeted campaigns to bring guest traffic to your website for lunch reservations, event inquiries, or job applications. Package 2 also includes a professional event inquiry form at no extra charge." },
    { step: "Step 4", title: "Engage with regular clients through email", text: "With Package 3, in addition to a new website and Google Ads, we'll also implement automated email marketing campaigns for your business. Together, we'll inform them about your latest offers or exciting promotions to properly utilize repeat clients, ensuring higher conversions." },
    { step: "Step 5", title: "Ongoing communication and regular updates", text: "The quickest and most efficient way to communicate is through WhatsApp. As a busy entrepreneur, you can always ask questions or request changes. We provide daily support via WhatsApp/call/email and keep you updated on progress. Of course, you're always welcome to call us directly!" },
    { step: "Step 6", title: "Invoicing and scheduling appointments", text: "We operate on a subscription basis, providing all services for a fixed fee, payable monthly/quarterly. This allows you to know where you stand same every month, so you always know exactly what to expect. Simple and clear!" }
  ];

  // Animation variants
  const stepVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i) => ({ // Custom function to add delay based on index
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: i * 0.15, // Stagger effect
      },
    }),
  };

  return (
    <div className={styles.stepsSection}>
      <Container fluid className="mw-1300">
        <Row>
          <Col lg={10} className="mx-auto"> {/* Center the content */}
            <motion.div
              className={styles.stepsIntro}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <h2 className={styles.introHeading}>How Neksoft Consultancy Works</h2>
              <p className={styles.introText}>
                We take care of all your online marketing needs for your hospitality business. We've worked out the consultation process in a few easy steps.
              </p>
            </motion.div>

            {/* The Vertical Timeline/Steps */}
            <div className={styles.timeline}>
              {steps.map((item, index) => (
                <motion.div
                  key={index}
                  className={styles.stepItem}
                  custom={index} // Pass index to variants for stagger delay
                  variants={stepVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <div className={styles.stepNumber}>{item.step}</div>
                  <div className={styles.stepContent}>
                    <h3 className={styles.stepTitle}>{item.title}</h3>
                    <p className={styles.stepText}>{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

// --- Book Appointment CTA ---
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
                Book an Appointment
            </motion.h2>
            <motion.p
                className={styles.ctaText}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            >
                Are you excited? We're ready to get started and would love to visit you to demonstrate how we can help your business.
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
const HowItWorksPage = () => {
  return (
    <>
      <HowItWorksHero />
      <StepsSection />
      <BookAppointmentCTA />
    </>
  );
};

export default HowItWorksPage;