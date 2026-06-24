import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <img 
              src="/logo.png" 
              alt="Sthala Vrikshum Logo" 
              style={{ 
                height: '130px', 
                width: 'auto', 
                display: 'block', 
                objectFit: 'contain', 
                borderRadius: '16px',
                marginBottom: '1.5rem',
                marginLeft: '-5px'
              }} 
              onError={(e) => { 
                e.target.style.display = 'none'; 
                e.target.nextSibling.style.display = 'block'; 
              }} 
            />
            <h3 style={{ display: 'none' }}>Sthala Vrikshum</h3>
            <p>Pure Bliss of Nature</p>
            <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)' }}>
              Dedicated to bringing you the finest, ethically sourced natural products that promote holistic well-being.
            </p>
          </div>
          
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/#about">About Us</Link></li>
              <li><Link to="/#products">Our Products</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Legal Policies</h4>
            <ul>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/refund-policy">Refund & Cancellation Policy</Link></li>
              <li><Link to="/terms-conditions">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Sthala Vrikshum. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
