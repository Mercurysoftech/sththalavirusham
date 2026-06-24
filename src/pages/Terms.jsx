import React, { useEffect } from 'react';

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="policy-page bg-light">
      <div className="container">
        <div className="policy-container">
          <div className="policy-header">
            <h1 className="section-title" style={{ marginBottom: '1rem' }}>Terms & Conditions</h1>
            <p className="text-muted">Last Updated: {new Date().toLocaleDateString()}</p>
          </div>
          
          <div className="policy-content">
            <p>By accessing or using our website, you agree to be bound by these Terms and Conditions.</p>
            
            <h3>1. Use of Website</h3>
            <p>You agree to use this site only for lawful purposes. You must not use our products for any illegal or unauthorized purpose.</p>
            
            <h3>2. Product Information</h3>
            <p>We make every effort to display as accurately as possible the colors and images of our products. However, we cannot guarantee that your computer monitor's display of any color will be accurate.</p>
            
            <h3>3. Pricing & Modifications</h3>
            <p>Prices for our products are subject to change without notice. We reserve the right to modify or discontinue any product or service without notice.</p>
            
            <h3>4. Contact</h3>
            <p>For any questions regarding these terms, please contact us at support@sthalavrikshum.com.</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Terms;
