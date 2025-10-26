// src/pages/ContactPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; // Icons
import styles from './ContactPage.module.css';

// --- Page Header ---
const ContactHero = () => (
    <motion.div
        className={styles.contactHero}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
    >
        <div className={styles.heroOverlay}></div>
        <Container fluid className="mw-1300 position-relative z-index-2">
            <Row className="align-items-center">
                <Col md={7}>
                    <h1 className={styles.heroHeading}>Would you like more information or have any questions?</h1>
                </Col>
                <Col md={5}>
                    <p className={styles.heroSubheading}>
                        Are you interested and want more information? Please fill out the form to get in touch with us.
                    </p>
                </Col>
            </Row>
        </Container>
    </motion.div>
);

// --- Contact Form & Info Section ---
const ContactFormSection = () => {
    // Basic form state handling (optional, for functionality)
    const handleSubmit = (event) => {
        event.preventDefault();
        // Add form submission logic here (e.g., send data to an API)
        alert('Form submitted (placeholder)');
    };

    return (
        <div className={styles.formSection}>
            <Container fluid className="mw-1300">
                <Row className="g-5 align-items-stretch"> {/* Use align-items-stretch */}
                    
                    {/* --- LEFT SIDE: Contact Info --- */}
                    <Col lg={5}>
                        <motion.div 
                            className={styles.infoPanel}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                        >
                            <h2 className={styles.infoHeading}>Contact Information</h2>
                            <p className={styles.infoText}>
                                Reach out directly via phone, email, or visit our office. We're here to help you achieve your digital goals.
                            </p>
                            <div className={styles.infoItem}>
                                <FaMapMarkerAlt className={styles.infoIcon} />
                                <span>Pošstrasse 45, 1321HH, Almere</span>
                            </div>
                            <div className={styles.infoItem}>
                                <FaPhoneAlt className={styles.infoIcon} />
                                <span>+31 - 6 48217892</span>
                            </div>
                            <div className={styles.infoItem}>
                                <FaEnvelope className={styles.infoIcon} />
                                <span>info@nekdigital.nl</span>
                            </div>
                            {/* You could add a small map here if desired */}
                        </motion.div>
                    </Col>

                    {/* --- RIGHT SIDE: Form --- */}
                    <Col lg={7}>
                        <motion.div 
                            className={styles.formPanel}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                        >
                            <Form onSubmit={handleSubmit}>
                                <Row>
                                    <Col md={6}>
                                        <Form.Group className="mb-4" controlId="contactFormName">
                                            <Form.Label className={styles.formLabel}>Name *</Form.Label>
                                            <Form.Control type="text" required className={styles.formControl} />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-4" controlId="contactFormEmail">
                                            <Form.Label className={styles.formLabel}>Email *</Form.Label>
                                            <Form.Control type="email" required className={styles.formControl} />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Form.Group className="mb-4" controlId="contactFormPhone">
                                    <Form.Label className={styles.formLabel}>Phone</Form.Label>
                                    <Form.Control type="tel" className={styles.formControl} />
                                </Form.Group>
                                <Form.Group className="mb-4" controlId="contactFormMessage">
                                    <Form.Label className={styles.formLabel}>Message *</Form.Label>
                                    <Form.Control as="textarea" rows={5} required className={styles.formControl} />
                                </Form.Group>
                                <motion.button
                                    type="submit"
                                    className={styles.submitButton}
                                    whileHover={{ scale: 1.05, boxShadow: '0 0 25px #E50914' }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Submit
                                </motion.button>
                            </Form>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

// --- MAIN PAGE COMPONENT ---
const ContactPage = () => {
    return (
        <>
            <ContactHero />
            <ContactFormSection />
            {/* We don't need the BookAppointmentCTA on the contact page */}
        </>
    );
};

export default ContactPage;