import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/FeedbackPage.css';

function FeedbackPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setResponse(null);

    try {
      const response = await fetch('http://localhost:8080/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setResponse({
          type: 'success',
          message: 'Thank you for your feedback! We appreciate your input.'
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setResponse({
          type: 'error',
          message: data.message || 'Failed to submit feedback. Please try again.'
        });
      }
    } catch (error) {
      setResponse({
        type: 'error',
        message: 'Network error. Please check your connection and try again.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="feedback-page">
      <div className="feedback-container">
        <div className="header-section">
          <Link to="/" className="back-link">
            <i className="fas fa-arrow-left"></i> Back to Home
          </Link>
          <h1>Feedback</h1>
          <p className="tagline">We value your opinion and would love to hear from you</p>
        </div>

        <div className="contact-info-section">
          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="info-content">
                <h3>Location</h3>
                <p>Mumbai, Maharashtra, India</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="info-content">
                <h3>Email</h3>
                <p>sanika14mordekar@gmail.com</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <i className="fab fa-github"></i>
              </div>
              <div className="info-content">
                <h3>GitHub</h3>
                <p>github.com/SanikaM14</p>
              </div>
            </div>

            <div className="social-links">
              <h3>Connect With Me</h3>
              <div className="social-icons">
                <a href="mailto:sanika14mordekar@gmail.com" aria-label="Email">
                  <i className="fas fa-envelope"></i>
                </a>
                <a href="https://github.com/SanikaM14" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="feedback-card">
          <div className="card-header">
            <h2>Share Your Experience</h2>
            <p>Your feedback helps us improve and provide better service</p>
          </div>

          <form onSubmit={handleSubmit} className="feedback-form">
            <div className="form-group">
              <label htmlFor="name">
                <i className="fas fa-user"></i> Your Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
                disabled={isLoading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">
                <i className="fas fa-envelope"></i> Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
                disabled={isLoading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">
                <i className="fas fa-comment"></i> Your Feedback *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Share your thoughts, suggestions, or experiences with us..."
                rows="6"
                disabled={isLoading}
              />
            </div>

            <button
              type="submit"
              className={`submit-btn ${isLoading ? 'loading' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i>
                  Submitting...
                </>
              ) : (
                <>
                  <i className="fas fa-paper-plane"></i>
                  Submit Feedback
                </>
              )}
            </button>
          </form>

          {response && (
            <div className={`response-message ${response.type}`}>
              <i className={`fas ${response.type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}`}></i>
              {response.message}
            </div>
          )}
        </div>

        <div className="additional-info">
          <div className="info-card">
            <h3>Why Your Feedback Matters</h3>
            <ul>
              <li>Helps us understand your needs better</li>
              <li>Allows us to improve our services</li>
              <li>Enables us to create better experiences</li>
              <li>Shows us what we're doing right</li>
            </ul>
          </div>

          <div className="info-card">
            <h3>What Happens Next</h3>
            <ul>
              <li>Your feedback is reviewed by our team</li>
              <li>We may contact you for more details</li>
              <li>Your input helps shape future improvements</li>
              <li>You'll receive a confirmation email</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedbackPage;