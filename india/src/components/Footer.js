import React from 'react';
import { Link } from 'react-router-dom';
import footerBg from '../images/culture/footer.jpg';
import '../css/Footer.css';

// Log the image path for debugging
console.log('Footer image path:', footerBg);

function Footer() {
  const footerStyle = {
    minHeight: 'auto',
    display: 'flex',
    flexDirection: 'column',
    color: '#fff',
    position: 'relative',
    width: '100%',
    zIndex: 1,
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${footerBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };

  return (
    <footer className="site-footer" style={footerStyle}>
      <div className="container footer-inner">
        <div className="footer-content">
          <h3>India — Where every color tells a story</h3>
          <div className="footer-links">
            <Link to="/privacy-policy">Privacy</Link>
            <Link to="/about">About</Link>
            <Link to="/feedback">Feedback</Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p> {new Date().getFullYear()} Incredible India. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;