import React, { useEffect } from 'react';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="policy-page bg-light">
      <div className="container">
        <div className="policy-container">
          <div className="policy-header">
            <h1 className="section-title" style={{ marginBottom: '1rem' }}>Privacy Policy</h1>
            <p className="text-muted">Last Updated: {new Date().toLocaleDateString()}</p>
          </div>
          
          <div className="policy-content">
            <p><strong>Sthala Vrikshum</strong> ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.</p>
            
            <h3>1. Information We Collect</h3>
            <p>We may collect personal identification information such as your name, email address, phone number, and shipping address when you make a purchase or contact us.</p>
            
            <h3>2. How We Use Your Information</h3>
            <p>We use the information we collect to process transactions, improve our services, communicate with you, and send promotional emails (if opted-in).</p>
            
            <h3>3. Data Security</h3>
            <p>We implement a variety of security measures to maintain the safety of your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure.</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
