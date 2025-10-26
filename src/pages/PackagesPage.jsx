// src/pages/PackagesPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'; // Use Bootstrap Cards
import Button from 'react-bootstrap/Button';
import styles from './PackagesPage.module.css';

// --- Page Header ---
const PackagesHero = () => (
    <motion.div
        className={styles.packagesHero}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
    >
        <div className={styles.heroOverlay}></div>
        <Container fluid className="mw-1300 position-relative z-index-2">
            <Row className="align-items-center">
                <Col md={7}>
                    <h1 className={styles.heroHeading}>Select the package that best fits your business and watch it grow.</h1>
                </Col>
                <Col md={5}>
                    <p className={styles.heroSubheading}>
                        What's included in the package? No start up fees, no commissions, clear terms, combination services, and full support - all for a fixed monthly amount. Simple!
                    </p>
                </Col>
            </Row>
        </Container>
    </motion.div>
);

// --- Pricing Packages Section ---
const PricingSection = () => {
    const packages = [
        {
            name: "Essential Launch",
            price: "€159",
            desc: "Perfect for establishing online visibility. A professional presence and all tools to run your business.",
            features: [
                "Domain Name (.nl/.com included)", "Website + Mobile (Responsive)", "Hosting + SSL Certificate (Secure)", /* shortened for brevity */
                "WhatsApp & Chat Integration", "Google Search & Maps Optimization", "Basic SEO Optimization", "Book My Business Setup",
                "Professional Email Addresses", "Google Analytics Setup", "Monthly performance report included", "Content Management System (CMS)",
                "Photo/Video Galleries", "Social Media Integration", "Shared relationship manager + support", "2 Revisions per month (max 2 hours)",
                "1 Hour strategy call per month"
            ],
            highlight: false
        },
        {
            name: "Growth Engine",
            price: "€239",
            desc: "Works best for the hospitality startup. No commissions, clear terms, combination services, full support.",
            features: [
                "All features from Essential Launch +", "Advanced SEO + Google Console setup", "Advanced performance report & analytics",
                "Custom web design", "Social media integration (platforms)", "Blog function implementation", "2 Additional pages integrated",
                "Automated email marketing integration", "Advanced relationship manager + support", "Up to 10 hours of monthly support"
            ],
            highlight: true // Make this card stand out
        },
        {
            name: "Digital Dominance",
            price: "€299",
            desc: "To boost customer retention and automate your marketing. An automated email campaign.",
            features: [
                "All features from Growth Engine +", "Design: SEO optimization, growth strategy & conversion",
                "Keyword research & competitor analysis", "4 Additional pages integrated", "15 hours of website service & support",
                "Unlimited modifications", "Monthly business strategy sessions", "Dedicated relationship manager + support",
                "Documentation with stakeholders & staff", "Custom blog design & strategy", "Advanced SEO (local & national)",
                "Dedicated Relationship Manager + Support"
            ],
            highlight: false
        }
    ];

    return (
        <div className={styles.pricingSection}>
            <Container fluid className="mw-1300">
                <Row className="g-4 justify-content-center"> {/* Use g-4 for gap */}
                    {packages.map((pkg, index) => (
                        <Col md={6} lg={4} key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                {/* Use Bootstrap Card component */}
                                <Card className={`${styles.packageCard} ${pkg.highlight ? styles.highlightCard : ''}`}>
                                    <Card.Body>
                                        <Card.Title as="h3" className={styles.cardTitle}>{pkg.name}</Card.Title>
                                        <Card.Subtitle className={styles.cardPrice}>{pkg.price}<span className={styles.priceSuffix}> / month</span></Card.Subtitle>
                                        <Card.Text className={styles.cardDesc}>{pkg.desc}</Card.Text>
                                        <ul className={styles.featureList}>
                                            {pkg.features.map((feature, fIndex) => (
                                                <li key={fIndex}>{feature}</li>
                                            ))}
                                        </ul>
                                        <Button variant="danger" className={styles.selectButton}>Select Package</Button>
                                    </Card.Body>
                                </Card>
                            </motion.div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

// --- Add-ons Section ---
const AddonsSection = () => (
    <div className={styles.addonsSection}>
        <Container fluid className="mw-1300">
            <motion.h2
                className={styles.sectionHeading}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
                Add-ons
            </motion.h2>
            <motion.div
                className={styles.addonCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            >
                <h3 className={styles.addonTitle}>Google Maps Ads</h3>
                <p className={styles.addonDesc}>Most people look for businesses on Google. We make sure yours stands out by boosting visibility with targeted keywords.</p>
                <p className={styles.addonPrice}>€49 <span className={styles.priceSuffix}>fixed per month</span></p>
            </motion.div>
        </Container>
    </div>
);

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
const PackagesPage = () => {
    return (
        <>
            <PackagesHero />
            <PricingSection />
            <AddonsSection />
            <BookAppointmentCTA />
        </>
    );
};

export default PackagesPage;