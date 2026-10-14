import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname === path) return true;
    return false;
  };

  return (
    <header id="header" className={isScrolled ? 'scrolled' : ''}>
      <div className="container nav-container">
        <Link to="/" className="logo-link">
          <img src="/assets/logo.jpg" alt="AVR Logo" className="logo-img" />
          <div className="logo-text-wrap">
            <span className="logo-text">AVR Fasteners</span>
            <span className="logo-subtext">PVT LTD</span>
          </div>
        </Link>

        <button
          className={`menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
          id="menuToggle"
          aria-label="Toggle Navigation"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`} id="navMenu">
          <li className="nav-item">
            <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/products" className={`nav-link ${isActive('/products') ? 'active' : ''}`}>
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/infrastructure" className={`nav-link ${isActive('/infrastructure') ? 'active' : ''}`}>
              Infrastructure & Quality
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link nav-cta">
              Request a Quote
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
