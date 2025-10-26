// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

// Import the React-Bootstrap components
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

// We still use a CSS module for our custom styles
import styles from './Navbar.module.css';

// Custom Logo component from our design
const Logo = () => (
  <div className={styles.logo}>
    <span className={styles.logoIcon}>N</span>
    <span className={styles.logoText}>NekDigital</span>
  </div>
);

const NavbarComponent = () => {
  return (
    <Navbar fixed="top" variant="dark" expand="lg" className={styles.navbar}>
      <Container fluid className="mw-1300">
        <Navbar.Brand as={Link} to="/">
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar-nav" />
        <Navbar.Collapse id="main-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className={styles.navLink}>Home</Nav.Link>
            <Nav.Link as={Link} to="/about" className={styles.navLink}>About Us</Nav.Link>
            <Nav.Link as={Link} to="/services" className={styles.navLink}>What we do</Nav.Link>
            <Nav.Link as={Link} to="/how-it-works" className={styles.navLink}>How does it work</Nav.Link>
            <Nav.Link as={Link} to="/packages" className={styles.navLink}>Packages</Nav.Link>
            <Nav.Link as={Link} to="/clients" className={styles.navLink}>Customers</Nav.Link>
            <Nav.Link as={Link} to="/contact" className={styles.navLink}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;