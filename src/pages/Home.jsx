import React, { useEffect } from 'react';
import { Leaf, Droplets, Heart, Coffee, Mail, Phone, MapPin, Send } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <main>
      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-bg-shapes"></div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">🌿 100% Organic & Natural</div>
            <h1>Pure Bliss of <span className="text-gradient">Nature</span></h1>
            <p>Discover the healing power of authentic, organic ingredients for your body and soul. Embrace a holistic lifestyle with our premium natural products.</p>
            <button 
              className="btn btn-primary"
              onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Our Products
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section bg-surface">
        <div className="container">
          <h2 className="section-title">About Us</h2>
          <div className="about-grid">
            <div className="about-text">
              <h3 className="text-gradient" style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Our Philosophy</h3>
              <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
                At <strong>Sthala Vrikshum</strong>, we believe in the pure bliss of nature. We are dedicated to bringing you the finest, ethically sourced natural products that promote holistic well-being.
              </p>
              <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
                Our journey started with a simple vision: to bridge the gap between ancient natural remedies and modern lifestyles. Every product we offer is carefully crafted to ensure it retains its natural essence and efficacy.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ background: 'var(--color-primary-light)', padding: '0.8rem', borderRadius: '50%', color: 'var(--color-primary)' }}>
                    <Leaf size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.2rem', marginBottom: '0.3rem' }}>100% Natural</h4>
                    <p style={{ color: 'var(--color-text-muted)' }}>Free from harmful chemicals and synthetic additives.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ background: 'var(--color-primary-light)', padding: '0.8rem', borderRadius: '50%', color: 'var(--color-primary)' }}>
                    <Droplets size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.2rem', marginBottom: '0.3rem' }}>Eco-Friendly</h4>
                    <p style={{ color: 'var(--color-text-muted)' }}>Sustainable practices from sourcing to packaging.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-image" style={{ height: '500px', background: 'var(--color-primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
               {/* Using a placeholder since we don't have an about image, styling it beautifully */}
               <div style={{ textAlign: 'center', color: 'var(--color-primary)' }}>
                 <Leaf size={80} style={{ opacity: 0.5, marginBottom: '1rem' }} />
                 <h3 style={{ opacity: 0.8 }}>Sthala Vrikshum</h3>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="section bg-light">
        <div className="container">
          <h2 className="section-title">Our Products</h2>
          <p style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 3rem', color: 'var(--color-text-muted)', fontSize: '1.1rem' }}>
            Experience our range of premium, earth-friendly offerings tailored for your well-being.
          </p>
          
          <div className="products-grid">
            <div className="product-card">
              <div className="product-icon">✨</div>
              <h3>Natural Beauty Products</h3>
              <p>Nourish your skin with our pure, plant-based skincare and cosmetics designed for lasting radiance.</p>
            </div>
            
            <div className="product-card">
              <div className="product-icon">🌸</div>
              <h3>Aroma</h3>
              <p>Transform your space and mood with our soothing, natural essential oils and aromatic blends.</p>
            </div>
            
            <div className="product-card">
              <div className="product-icon">
                <Heart size={32} />
              </div>
              <h3>Natural Health Care</h3>
              <p>Support your body's wellness with our trusted traditional remedies and health supplements.</p>
            </div>
            
            <div className="product-card">
              <div className="product-icon">
                <Coffee size={32} />
              </div>
              <h3>Natural Food Products</h3>
              <p>Wholesome, unadulterated food products to nourish you from the inside out.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section bg-surface">
        <div className="container">
          <h2 className="section-title">Contact Us</h2>
          
          <div className="contact-wrapper">
            <div className="contact-info">
              <h3>Get in Touch</h3>
              <p style={{ opacity: 0.9, marginBottom: '2rem' }}>
                We'd love to hear from you. Please reach out with any questions, feedback, or inquiries about our products.
              </p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <Mail className="contact-item-icon" size={24} />
                  <span>support@sthalavrikshum.com</span>
                </div>
                <div className="contact-item">
                  <Phone className="contact-item-icon" size={24} />
                  <span>+91 98765 43210</span>
                </div>
                <div className="contact-item">
                  <MapPin className="contact-item-icon" size={24} />
                  <span>123 Nature Grove, Wellness Avenue, Chennai, India</span>
                </div>
              </div>
            </div>
            
            <div className="contact-form">
              <form onSubmit={(e) => { e.preventDefault(); alert('Message sent successfully!'); }}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" className="form-input" placeholder="John Doe" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" className="form-input" placeholder="john@example.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea id="message" className="form-input" rows="4" placeholder="How can we help you?" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  <Send size={18} /> Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
