// src/pages/Homepage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaPlay } from 'react-icons/fa';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';

// 1. Import our single CSS file
import './Homepage.css';

// --- Reusable Animation Variants ---
// Slide in from left
const slideInLeft = {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};
// Slide in from right
const slideInRight = {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};
// Fade in and slide up ("appear out of nowhere")
const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};
// Stagger item animation (for service cards)
const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};
// Stagger container (for service cards list)
const cardListVariants = {
    visible: { transition: { staggerChildren: 0.15 } },
    hidden: {}
};


// --- HERO COMPONENT ---
const Hero = () => {
  const headline = "We boost your brand with digital excellence.";
  const headlineWords = headline.split(' ');
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.8 } },
  };
  const wordVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, duration: 0.8 } },
  };

  return (
    <div className="heroContainer">
      <div className="heroBackground"></div>
      <div className="heroOverlay"></div>
      <Container fluid className="heroContentContainer mw-1300 h-100">
        <Row className="h-100 align-items-center">
          <Col md={7} lg={6}>
            <motion.div
              className="heroContent"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.h1
                className="hero-heading"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {headlineWords.map((word, index) => (
                  <motion.span
                    key={index}
                    className="d-inline-block me-3"
                    variants={wordVariants}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h1>
              <motion.button
                className="hero-ctaButton"
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 25px #E50914',
                  backgroundColor: "#E50914",
                  borderColor: "#E50914",
                  color: "#FFFFFF"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              >
                VIEW PACKAGES
              </motion.button>
              <p className="hero-subText">ADVERTISING & MARKETING AGENCY</p>
            </motion.div>
          </Col>
          <Col md={5} lg={6} className="d-none d-md-flex justify-content-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5, ease: [0.17, 0.67, 0.83, 0.67] }}
            >
              <button className="hero-playButton">
                <FaPlay className="hero-playIcon" />
              </button>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

// --- CLIENTS COMPONENT ---
const Clients = () => {
  const logos = [
    'https://nekdigital.nl/wp-content/uploads/2025/01/Ligen-Power-1.png',
    'https://nekdigital.nl/wp-content/uploads/2025/01/Ligen-Power-2.png',
    'https://nekdigital.nl/wp-content/uploads/2025/01/Ligen-Power-3.png',
    'https://nekdigital.nl/wp-content/uploads/2025/01/Ligen-Power-5.png',
    'https://nekdigital.nl/wp-content/uploads/2025/01/Ligen-Power-6.png',
    'https://nekdigital.nl/wp-content/uploads/2025/01/Ligen-Power-9.png',
    // You can add more logos here from your nekdigital.nl_customers_.jpg screenshot if needed
  ];
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos]; // Ensure enough logos for smooth scroll
  const marqueeVariants = {
    animate: {
      x: [0, -2000], // Adjust based on final logo count & size if needed
      transition: {
        x: { repeat: Infinity, repeatType: "loop", duration: 30, ease: "linear" },
      },
    },
  };

  return (
    <div className="clientsSection">
      <Container fluid className="mw-1300">
        <h2 className="clients-title">TRUSTED BY COMPANIES</h2>
        <div className="clients-scroller">
          <motion.div
            className="clients-scrollerInner"
            variants={marqueeVariants}
            animate="animate"
          >
            {duplicatedLogos.map((logoUrl, index) => (
              <img
                key={index}
                src={logoUrl}
                alt={`Client Logo ${index + 1}`}
                className="clients-logo"
              />
            ))}
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

// --- "WE HELP ESTABLISH" SECTION ---
const EstablishSection = () => {
    return (
        <div className="establishSection">
            <Container fluid className="mw-1300">
                <Row className="justify-content-center">
                    <Col lg={10} xl={8} className="text-center">
                         <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={fadeInUp} // Fade in up animation
                         >
                            <h2 className="establish-heading">
                                We help establish your business presence for a set monthly fee.
                            </h2>
                            <p className="establish-price">
                                From just €159 per month
                            </p>
                            <p className="establish-description">
                                Neksoft Consultancy Services offers complete digital marketing solutions, including Website Design, Google Ads, and Email Campaigns. We handle your marketing needs, allowing you to focus entirely on managing and growing your business.
                            </p>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

// --- "STYLISH WEBSITE" SECTION (Includes Service Cards) ---
const StylishWebsiteSection = () => {
    const servicesList = [
        { title: "Web Development", desc: "A stylish, user-friendly website that's easy to discover." },
        { title: "Search engine optimized", desc: "Optimized for Google and designed to leave a lasting impression." }, // Adjusted text
        { title: "Website support", desc: "Ongoing updates and management included in your subscription." }, // Adjusted text
    ];

    return (
        <div className="stylishSection">
            <Container fluid className="mw-1300">
                <Row className="align-items-center g-5">
                    {/* Content (Left) - Slides in from Left */}
                    <Col lg={6}>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={slideInLeft}
                        >
                            <h2 className="stylish-heading">
                                A stylish, user-friendly website that’s easy to discover.
                            </h2>
                            <p className="stylish-description">
                                Your business deserves a website that acts as its perfect online business card—optimized for google and designed to leave a lasting impression. With no start-up costs or commissions, we'll get you online in no time!
                            </p>
                            <p className="stylish-description">
                                We understand your time is valuable, so we handle everything for you. From creation to ongoing updates and management, it's all included in your subscription. Worried about switching providers? Our seamless switching service makes the transition hassle-free.
                            </p>

                             <motion.div
                                className="stylish-serviceList"
                                variants={cardListVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.1 }}
                             >
                                {servicesList.map((service, index) => (
                                  <motion.div
                                    key={index}
                                    className="stylish-serviceCard"
                                    variants={staggerItem}
                                  >
                                    <div className="stylish-cardGlow"></div>
                                    <h3 className="stylish-cardTitle">{service.title}</h3>
                                    <p className="stylish-cardDesc">{service.desc}</p>
                                  </motion.div>
                                ))}
                             </motion.div>

                            <motion.button
                                className="stylish-ctaButton"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                View Packages
                            </motion.button>
                        </motion.div>
                    </Col>
                    {/* Image (Right) - Slides in from Right */}
                    <Col lg={6}>
                        <motion.div
                            className="stylish-visualContainer"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={slideInRight}
                        >
                            <img
                                src="https://nekdigital.nl/wp-content/uploads/2025/01/Untitled-design-6-1.png" // Placeholder
                                alt="Stylish Website Mockup"
                                className="stylish-visualImage"
                            />
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

// --- "GOOGLE ADS" SECTION ---
const GoogleAdsSection = () => {
    return (
        <div className="adsSection">
            <Container fluid className="mw-1300">
                <Row className="align-items-center g-5">
                    {/* Image (Left) - Slides in from Left */}
                    <Col lg={6} className="order-lg-1">
                         <motion.div
                            className="ads-visualContainer"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={slideInLeft}
                        >
                            <img
                                src="https://nekdigital.nl/wp-content/uploads/2025/01/Indian-restaurant-in-Amsterdam-1.png"
                                alt="Ads Dashboard"
                                className="ads-visualImage"
                            />
                        </motion.div>
                    </Col>
                    {/* Content (Right) - Slides in from Right */}
                    <Col lg={6} className="order-lg-2">
                         <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={slideInRight}
                        >
                            <h2 className="ads-heading">
                                Increase weekly guests with effective Google Ads
                            </h2>
                            <p className="ads-description">
                                We run highly targeted campaigns to drive qualified traffic to your
                                website, ensuring every click counts towards your growth.
                                Our team handles strategy, setup, and optimization.
                            </p>
                            <motion.button
                                className="ads-ctaButton"
                                whileHover={{ scale: 1.05, boxShadow: '0 0 25px #E50914' }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                            >
                                View Packages
                            </motion.button>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

// --- "EXCLUSIVE OFFERS" SECTION (CTA) ---
const OffersCTASection = () => {
    return (
        <div className="ctaSection"> {/* We'll update CSS for background here */}
            <Container fluid className="mw-1300">
                <Row className="align-items-center g-5">
                    {/* Image (Left) - Slides in from Left */}
                    <Col lg={6}>
                        <motion.div
                            className="cta-visualContainer"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={slideInLeft} // Animation
                        >
                            <img
                                src="https://nekdigital.nl/wp-content/uploads/2025/01/Indian-restaurant-in-Amsterdam-3.png" // Your provided image
                                alt="Mailboxes iPhone"
                                className="cta-visualImage"
                            />
                        </motion.div>
                    </Col>
                    {/* Content (Right) - Slides in from Right */}
                    <Col lg={6}>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={slideInRight} // Animation
                        >
                            <h2 className="cta-heading">
                                Exclusive offers and promotions delivered straight to your inbox.
                            </h2>
                            <p className="cta-description">
                                Stay connected with your loyal customers by sending a monthly newsletter featuring discount vouchers, special deals, and exciting offers. It's a personal and impactful way to encourage repeat visits.
                            </p>
                            <p className="cta-description">
                                You choose the content, and we'll create a visually engaging newsletter each month for your customers.
                            </p>
                            <motion.button
                                className="cta-ctaButton"
                                whileHover={{ scale: 1.05 }} // Basic hover for this button
                                whileTap={{ scale: 0.95 }}
                            >
                                View Packages
                            </motion.button>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
// --- FAQ COMPONENT ---
const FAQ = () => {
  const faqData = [
    { eventKey: "0", question: "What is a domain name?", answer: "A domain name is your website's unique address on the internet, like 'nekdigital.nl'. It's how people find you." },
    { eventKey: "1", question: "What is web hosting?", answer: "Web hosting is the service that stores your website's files on a server, making it accessible to anyone on the web." },
    { eventKey: "2", question: "How long does a website take?", answer: "A standard business website typically takes 4-6 weeks from start to launch, depending on the complexity and content." },
    { eventKey: "3", question: "What is the investment for a new website?", answer: "Our packages start from €159 per month, but we provide custom quotes based on your specific needs and goals." }
  ];

  return (
    <div className="faqSection">
      <Container fluid className="mw-1300">
        <Row className="align-items-center g-5">
          <Col lg={5}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <h2 className="faq-heading">Clarify your confusion</h2>
              <p className="faq-description">
                Your questions, answered. Find solutions to common inquiries
                about our digital services.
              </p>
              <img
                src="https://www.shutterstock.com/shutterstock/videos/1105023795/thumb/2.jpg?ip=x480"
                alt="Team working"
                className="faq-faqImage"
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
              <Accordion alwaysOpen className="faq-accordion">
                {faqData.map((item) => (
                  <Accordion.Item
                    key={item.eventKey}
                    eventKey={item.eventKey}
                    className="faq-accordionItem"
                  >
                    <Accordion.Header className="faq-accordionHeader">
                      {item.question}
                    </Accordion.Header>
                    <Accordion.Body className="faq-accordionBody">
                      {item.answer}
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};


// --- Main component for this page ---
const Homepage = () => {
  return (
    <>
      <Hero />
      <Clients />
      <EstablishSection />
      <StylishWebsiteSection />
      <GoogleAdsSection />
      <OffersCTASection />
      <FAQ />
    </>
  );
};

export default Homepage;