import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname, location.hash]);

  const handleNavClick = (e, targetId) => {
    if (location.pathname !== '/') return; // Default router behavior handles navigation to home
    
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="nav-logo">
          <img 
            src="/logo.png" 
            alt="Sthala Vrikshum Logo" 
            onError={(e) => { 
              e.target.style.display = 'none'; 
              e.target.nextSibling.style.display = 'block'; 
            }} 
          />
          <span className="text-gradient" style={{ display: 'none' }}>Sthala Vrikshum</span>
        </Link>

        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <li>
            <Link 
              to="/#home" 
              className="nav-link"
              onClick={(e) => handleNavClick(e, 'home')}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/#about" 
              className="nav-link"
              onClick={(e) => handleNavClick(e, 'about')}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="/#products" 
              className="nav-link"
              onClick={(e) => handleNavClick(e, 'products')}
            >
              Products
            </Link>
          </li>
          <li>
            <Link 
              to="/#contact" 
              className="nav-link"
              onClick={(e) => handleNavClick(e, 'contact')}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
