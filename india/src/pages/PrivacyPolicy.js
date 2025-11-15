import React from 'react';
import { Link } from 'react-router-dom';
import '../css/PrivacyPolicy.css';

function PrivacyPolicy() {
  return (
    <div className="privacy-policy">
      <div className="container">
        <h1>Privacy Policy</h1>
        <p className="last-updated">Last Updated: November 7, 2025</p>
        
        <section>
          <h2>1. Introduction</h2>
          <p>
            Welcome to IndieGlobe. We respect your privacy and are committed to protecting your personal data. 
            This privacy policy will inform you about how we look after your personal data when you visit our website.
          </p>
        </section>

        <section>
          <h2>2. Information We Collect</h2>
          <p>We may collect and process the following data about you:</p>
          <ul>
            <li>Personal identification information (Name, email address, phone number, etc.)</li>
            <li>Browser and device information</li>
            <li>Usage data including pages visited and time spent on site</li>
            <li>Cookies and usage data</li>
          </ul>
        </section>

        <section>
          <h2>3. How We Use Your Data</h2>
          <p>We use the collected data for various purposes:</p>
          <ul>
            <li>To provide and maintain our service</li>
            <li>To notify you about changes to our service</li>
            <li>To allow you to participate in interactive features</li>
            <li>To provide customer support</li>
            <li>To gather analysis or valuable information</li>
            <li>To monitor the usage of our service</li>
          </ul>
        </section>

        <section>
          <h2>4. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal data against 
            unauthorized or unlawful processing, accidental loss, destruction, or damage.
          </p>
        </section>

        <section>
          <h2>5. Your Data Protection Rights</h2>
          <p>Depending on your location, you may have rights including:</p>
          <ul>
            <li>The right to access, update, or delete your information</li>
            <li>The right to rectification</li>
            <li>The right to object</li>
            <li>The right to restrict processing</li>
            <li>The right to data portability</li>
            <li>The right to withdraw consent</li>
          </ul>
        </section>

        <section>
          <h2>6. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
            <br />
            Email: sanika14mordekar@gmail.com
            <br />
          </p>
        </section>

        <div className="back-home">
          <Link to="/" className="back-btn">← Back to Home</Link>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
