import React from 'react';
import './Footer.css';

const Footer = () => {

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>We curate the finest collection of artworks and pottery pieces.</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/paintings">Paintings</a></li>
            <li><a href="/skill-share">Skill Share</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: hello@artisancreations.com</p>
          <p>Phone: (+91) 9999999999</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 ArtCraft Gallery. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;