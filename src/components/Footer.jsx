// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import styles from './Footer.module.css';

const SocialIcon = ({ href, icon: Icon }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
    <Icon size={20} />
  </a>
);

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.gridOverlay}></div>

      <Container fluid className="mw-1300">
        <Row className="g-4">
          
          <Col md={6} lg={3}>
            <div className={styles.logo}>
              <span className={styles.logoIcon}>N</span>
              <span className={styles.logoText}>NekDigital</span>
            </div>
            <p className={styles.footerText}>
              We boost your brand with digital excellence.
            </p>
            <div className={styles.socialIconGroup}>
              <SocialIcon href="#" icon={FaFacebookF} />
              <SocialIcon href="#" icon={FaTwitter} />
              <SocialIcon href="#" icon={FaInstagram} />
              <SocialIcon href="#" icon={FaLinkedinIn} />
              <SocialIcon href="#" icon={FaYoutube} />
            </div>
          </Col>

          <Col md={6} lg={2}>
            <h5 className={styles.colTitle}>About</h5>
            <ul className={styles.linkList}>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/team">Our Team</Link></li>
            </ul>
          </Col>

          <Col md={6} lg={2}>
            <h5 className={styles.colTitle}>Services</h5>
            <ul className={styles.linkList}>
              <li><Link to="/services/web-design">Web Design</Link></li>
              <li><Link to="/services/google-ads">Google Ads</Link></li>
              <li><Link to="/services/seo">SEO</Link></li>
            </ul>
          </Col>

          <Col md={6} lg={2}>
            <h5 className={styles.colTitle}>Legal</h5>
            <ul className={styles.linkList}>
              <li><Link to="/privacy">Privacy</Link></li>
              <li><Link to="/terms">Disclaimer</Link></li>
            </ul>
          </Col>
          
          <Col md={6} lg={3}>
            <h5 className={styles.colTitle}>Address</h5>
            <ul className={styles.linkList}>
              <li>123 Digital Street</li>
              <li>Amsterdam, NL</li>
              <li>info@nekdigital.nl</li>
            </ul>
          </Col>
        </Row>

        <div className={styles.bottomBar}>
          <p>© {new Date().getFullYear()} NekDigital. All Rights Reserved.</p>
          <p className={styles.flicker}>Made by NekDigital</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;