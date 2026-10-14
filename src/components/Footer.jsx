import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-about">
            <Link to="/" className="logo-link" style={{ marginBottom: '16px' }}>
              <img src="/assets/logo.jpg" alt="AVR Logo" className="logo-img" style={{ filter: 'brightness(0.95)' }} />
              <div className="logo-text-wrap">
                <span className="logo-text" style={{ color: 'var(--color-white)' }}>AVR Fasteners</span>
                <span className="logo-subtext" style={{ color: 'var(--color-white)' }}>PVT LTD</span>
              </div>
            </Link>
            <p>Delivering high-tensile fasteners, mirror rods, custom turned parts, and industrial production equipment for OEMs since 1995.</p>
            <div className="footer-socials">
              <a href="https://www.linkedin.com/company/avr-fasteners-pvt-ltd/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="footer-col-title">Navigation</h3>
            <ul className="footer-links">
              <li className="footer-link-item"><Link to="/">Home</Link></li>
              <li className="footer-link-item"><Link to="/about">About Us</Link></li>
              <li className="footer-link-item"><Link to="/products">Products</Link></li>
              <li className="footer-link-item"><Link to="/infrastructure">Infrastructure & Quality</Link></li>
              <li className="footer-link-item"><Link to="/contact">Contact Us</Link></li>
              <li className="footer-link-item"><Link to="/privacy-policy">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="footer-col-title">Products</h3>
            <ul className="footer-links">
              <li className="footer-link-item"><Link to="/products?category=bolts">High Tensile Bolts</Link></li>
              <li className="footer-link-item"><Link to="/products?category=nuts">High Tensile Nuts</Link></li>
              <li className="footer-link-item"><Link to="/products?category=rods">Mirror Rods</Link></li>
              <li className="footer-link-item"><Link to="/products?category=components">Precision Components</Link></li>
              <li className="footer-link-item"><Link to="/products?category=screws">Precision Screws</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="footer-col-title">Get In Touch</h3>
            <div className="footer-contact">
              <div className="footer-contact-item">
                <i className="fa-solid fa-location-dot"></i>
                <span>Factory & Corporate Office:<br />D-37 Industrial Focal Point, P.O Mubarikpur - 140201, Derabassi, Punjab, India</span>
              </div>
              <div className="footer-contact-item">
                <i className="fa-solid fa-phone"></i>
                <span>+91 98726 64555</span>
              </div>
              <div className="footer-contact-item">
                <i className="fa-solid fa-envelope"></i>
                <span>info@avrfasteners.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 AVR Fasteners PVT LTD. All Rights Reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/privacy-policy" className="footer-bottom-link">Privacy Policy & Legal Disclaimer</Link>
            <span className="footer-bottom-divider">|</span>
            <span>Designed for Excellence.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
