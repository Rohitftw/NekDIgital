// src/pages/AppointmentPage.jsx
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import styles from './AppointmentPage.module.css'; // We will create this file next

// --- Page Header ---
const AppointmentHero = () => (
    <motion.div
        className={styles.appointmentHero}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
    >
        <div className={styles.heroOverlay}></div>
        <Container fluid className="mw-1300 position-relative z-index-2">
            <Row className="align-items-center">
                <Col md={7}>
                    <h1 className={styles.heroHeading}>Book Your Appointment</h1>
                </Col>
                <Col md={5}>
                    <p className={styles.heroSubheading}>
                        We'll be happy to set up a meeting to discuss your requirements. Simply fill out the form below, and we will reach out to schedule a time.
                    </p>
                </Col>
            </Row>
        </Container>
    </motion.div>
);

// --- Form Section ---
const AppointmentForm = () => {
    const [searchParams] = useSearchParams();
    const [selectedPackage, setSelectedPackage] = useState('unknown');

    // This hook runs once and checks if a package was passed in the URL
    useEffect(() => {
        const pkg = searchParams.get('package');
        if (pkg) {
            setSelectedPackage(pkg);
        }
    }, [searchParams]);

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Appointment form submitted (placeholder)');
    };

    return (
        <div className={styles.formSection}>
            <Container fluid className="mw-1300">
                <Row className="justify-content-center">
                    <Col lg={8}>
                        <motion.div
                            className={styles.formPanel}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                        >
                            <Form onSubmit={handleSubmit}>
                                <Row>
                                    <Col md={6}>
                                        <Form.Group className="mb-4" controlId="aptFormName">
                                            <Form.Label className={styles.formLabel}>Name *</Form.Label>
                                            <Form.Control type="text" required className={styles.formControl} />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-4" controlId="aptFormCompany">
                                            <Form.Label className={styles.formLabel}>Company Name *</Form.Label>
                                            <Form.Control type="text" required className={styles.formControl} />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6}>
                                        <Form.Group className="mb-4" controlId="aptFormPhone">
                                            <Form.Label className={styles.formLabel}>Phone</Form.Label>
                                            <Form.Control type="tel" className={styles.formControl} />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-4" controlId="aptFormEmail">
                                            <Form.Label className={styles.formLabel}>Email *</Form.Label>
                                            <Form.Control type="email" required className={styles.formControl} />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6}>
                                        <Form.Group className="mb-4" controlId="aptFormDate">
                                            <Form.Label className={styles.formLabel}>Preferred Date</Form.Label>
                                            <Form.Control type="date" className={styles.formControl} />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-4" controlId="aptFormTime">
                                            <Form.Label className={styles.formLabel}>Preferred Time</Form.Label>
                                            <Form.Control type="time" className={styles.formControl} />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                
                                {/* This is the connected radio button group */}
                                <Form.Group className="mb-4">
                                    <Form.Label className={styles.formLabel}>I am interested in:</Form.Label>
                                    <div className={styles.radioGroup}>
                                        <Form.Check 
                                            type="radio"
                                            id="pkg-1"
                                            label="Package 1 - Essential Launch"
                                            name="package"
                                            value="essential-launch"
                                            checked={selectedPackage === 'essential-launch'}
                                            onChange={(e) => setSelectedPackage(e.target.value)}
                                            className={styles.radioItem}
                                        />
                                        <Form.Check 
                                            type="radio"
                                            id="pkg-2"
                                            label="Package 2 - Growth Engine"
                                            name="package"
                                            value="growth-engine"
                                            checked={selectedPackage === 'growth-engine'}
                                            onChange={(e) => setSelectedPackage(e.target.value)}
                                            className={styles.radioItem}
                                        />
                                        <Form.Check 
                                            type="radio"
                                            id="pkg-3"
                                            label="Package 3 - Digital Dominance"
                                            name="package"
                                            value="digital-dominance"
                                            checked={selectedPackage === 'digital-dominance'}
                                            onChange={(e) => setSelectedPackage(e.target.value)}
                                            className={styles.radioItem}
                                        />
                                        <Form.Check 
                                            type="radio"
                                            id="pkg-unknown"
                                            label="I don't know yet"
                                            name="package"
                                            value="unknown"
                                            checked={selectedPackage === 'unknown'}
                                            onChange={(e) => setSelectedPackage(e.target.value)}
                                            className={styles.radioItem}
                                        />
                                    </div>
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
const AppointmentPage = () => {
    return (
        <>
            <AppointmentHero />
            <AppointmentForm />
        </>
    );
};

export default AppointmentPage;