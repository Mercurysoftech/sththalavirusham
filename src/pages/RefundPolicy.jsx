import React, { useEffect } from 'react';

const RefundPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="policy-page bg-light">
      <div className="container">
        <div className="policy-container">
          <div className="policy-header">
            <h1 className="section-title" style={{ marginBottom: '1rem' }}>Refund & Cancellation Policy</h1>
            <p className="text-muted">Last Updated: {new Date().toLocaleDateString()}</p>
          </div>
          
          <div className="policy-content">
            <p>We want you to be completely satisfied with your purchase from <strong>Sthala Vrikshum</strong>.</p>
            
            <h3>1. Returns</h3>
            <p>Due to the natural and consumable nature of our products, we only accept returns if the product is damaged upon arrival or if you received an incorrect item. You must notify us within 48 hours of delivery.</p>
            
            <h3>2. Refunds</h3>
            <p>Once your return is received and inspected, we will notify you of the approval or rejection of your refund. If approved, the refund will be processed to your original method of payment within 5-7 business days.</p>
            
            <h3>3. Cancellations</h3>
            <p>Orders can be cancelled within 12 hours of placement, provided they have not yet been dispatched.</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RefundPolicy;
