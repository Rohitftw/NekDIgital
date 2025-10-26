// src/pages/Homepage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaPlay } from 'react-icons/fa';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';

// 1. Import our new single CSS file
import './Homepage.css'; 

// 2. Define all our components right here

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
    'https://i.ibb.co/3sWdYvY/client-logo-1-grey.png',
    'https://i.ibb.co/L8G0b3G/client-logo-2-grey.png',
    'https://i.ibb.co/b2V8Jtq/client-logo-3-grey.png',
    'https://i.ibb.co/s5H10Yg/client-logo-4-grey.png',
    'https://i.ibb.co/7Q9735V/client-logo-5-grey.png',
    'https://i.ibb.co/Jqj3NnN/client-logo-6-grey.png',
  ];
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];
  const marqueeVariants = {
    animate: {
      x: [0, -1035],
      transition: {
        x: { repeat: Infinity, repeatType: "loop", duration: 20, ease: "linear" },
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

// --- SERVICES COMPONENT ---
const Services = () => {
  const servicesList = [
    { title: "Web Development", desc: "A stylish, user-friendly website that's easy to discover." },
    { title: "Google Ads", desc: "Targeted ad campaigns to reach your ideal customers." },
    { title: "Digital Strategy", desc: "Complete online presence for a set monthly fee." }
  ];
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut", staggerChildren: 0.2 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="servicesSection">
      <Container fluid className="mw-1300">
        <Row className="align-items-center g-5">
          <Col lg={6}>
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.h2 className="services-heading" variants={itemVariants}>
                Your Digital Growth Partner
              </motion.h2>
              <motion.p className="services-description" variants={itemVariants}>
                We help establish your business presence for a set monthly fee. 
                From just €159 per month, we handle everything from web design
                to targeted ad campaigns and brand strategy.
              </motion.p>
              <div className="services-serviceList">
                {servicesList.map((service, index) => (
                  <motion.div 
                    key={index} 
                    className="services-serviceCard" 
                    variants={itemVariants}
                  >
                    <div className="services-cardGlow"></div>
                    <h3 className="services-cardTitle">{service.title}</h3>
                    <p className="services-cardDesc">{service.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </Col>
          <Col lg={6}>
            <motion.div 
              className="services-visualContainer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <img
                src="https://i.ibb.co/6P09xGf/digital-growth.jpg"
                alt="Digital Growth"
                className="services-visualImage"
              />
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

// --- ADSFEATURE COMPONENT ---
const AdsFeature = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut", staggerChildren: 0.2 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="adsSection">
      <Container fluid className="mw-1300">
        <Row className="align-items-center g-5">
          <Col lg={6} className="order-lg-2">
            <motion.div 
              className="ads-visualContainer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <img
                src="https://i.ibb.co/C9H01Jj/ads-dashboard.jpg"
                alt="Ads Dashboard"
                className="ads-visualImage"
              />
            </motion.div>
          </Col>
          <Col lg={6} className="order-lg-1">
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.h2 className="ads-heading" variants={itemVariants}>
                Increase weekly guests with effective Google Ads
              </motion.h2>
              <motion.p className="ads-description" variants={itemVariants}>
                We run highly targeted campaigns to drive qualified traffic to your
                website, ensuring every click counts towards your growth. 
                Our team handles strategy, setup, and optimization.
              </motion.p>
              <motion.button 
                className="ads-ctaButton"
                variants={itemVariants}
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

// --- OFFERSCTA COMPONENT ---
const OffersCTA = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <div className="ctaSection">
      <Container fluid className="mw-1300">
        <motion.div
          className="cta-contentWrapper"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 className="cta-heading" variants={sectionVariants}>
            Exclusive offers and promotions
          </motion.h2>
          <motion.p className="cta-description" variants={sectionVariants}>
            We provide custom packages tailored directly to your needs, 
            ensuring you get the best value and the most effective strategy 
            to boost your sales.
          </motion.p>
          <motion.button 
            className="cta-ctaButton"
            animate={{ 
              scale: [1, 1.03, 1],
              boxShadow: [
                '0 0 20px rgba(229, 9, 20, 0.3)', 
                '0 0 30px rgba(229, 9, 20, 0.5)', 
                '0 0 20px rgba(229, 9, 20, 0.3)'
              ]
            }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get a Custom Quote
          </motion.button>
        </motion.div>
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
                src="https://i.ibb.co/CKN9yF4/faq-image.jpg"
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


// 3. This is the main component for this page
const Homepage = () => {
  return (
    <>
      <Hero />
      <Clients />
      <Services />
      <AdsFeature />
      <OffersCTA />
      <FAQ />
    </>
  );
};

export default Homepage;