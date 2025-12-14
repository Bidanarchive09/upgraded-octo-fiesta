import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>🚗 TOSH RYDER</h3>
            <p>Kenya's premier Japanese imported car marketplace. Quality vehicles from Japan auctions with full documentation.</p>
          </div>
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>📞 0715322705</p>
            <p>📧 info@toshryder.co.ke</p>
            <p>📍 Kikuyu, Kiambu County, Kenya</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <a href="#cars" onClick={(e) => { e.preventDefault(); document.getElementById('cars')?.scrollIntoView({ behavior: 'smooth' }); }}>Browse Cars</a>
            <a href="#sell" onClick={(e) => { e.preventDefault(); /* Add sell section */ }}>Sell Your Car</a>
            <a href="#finance" onClick={(e) => { e.preventDefault(); /* Add finance section */ }}>Car Finance</a>
            <a href="#insurance" onClick={(e) => { e.preventDefault(); /* Add insurance section */ }}>Insurance</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Tosh Rider. All rights reserved. Made with ❤️ in Kenya.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;