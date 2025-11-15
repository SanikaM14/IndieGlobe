import React from 'react';
import { Link } from 'react-router-dom';
import '../css/AboutUs.css';

function AboutUs() {
  return (
    <div className="about-me">
      <div className="container">
        <div className="header-section">
          <h1>Hello, I'm Sanika Mordekar</h1>
          <p className="tagline">The Creator Behind IndieGlobe</p>
        </div>

        <div className="intro-section">
          <div className="profile-image">
            <div className="avatar">
              <i className="bi bi-person-circle"></i>
              <span>SM</span>
            </div>
          </div>
          <div className="intro-text">
            <h2>Welcome to My Journey</h2>
            <p>
              I'm a passionate developer and travel enthusiast who built IndieGlobe from scratch to share the beauty and diversity of India with the world. 
              Every aspect of this platform - from the code to the content - has been carefully crafted by me.
            </p>
          </div>
        </div>

        <section className="my-story">
          <h2>My Story</h2>
          <p>
            Born and raised in India, I've always been fascinated by our country's rich cultural heritage and stunning landscapes. 
            In 2025, I decided to combine my technical skills with my love for travel to create something meaningful - and that's how IndieGlobe was born.
          </p>
          <p>
            What started as a personal project to document my travels has evolved into a comprehensive platform that celebrates everything that makes India incredible.
          </p>
        </section>

        <section className="what-i-do">
          <h2>What I Do</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-icon">
                <i className="bi bi-code-square"></i>
              </div>
              <h3>Web Development</h3>
              <p>Building responsive and user-friendly web experiences</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">
                <i className="bi bi-brush"></i>
              </div>
              <h3>UI/UX Design</h3>
              <p>Creating intuitive and beautiful interfaces</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">
                <i className="bi bi-puzzle"></i>
              </div>
              <h3>Problem Solving</h3>
              <p>Finding efficient solutions to technical challenges</p>
            </div>
          </div>
        </section>

        <section className="tech-stack">
          <h2>Built With</h2>
          <div className="tech-tags">
            <span>React</span>
            <span>JavaScript</span>
            <span>CSS3</span>
            <span>HTML5</span>
            <span>Java</span>
            <span>Spring Boot</span>
            <span>MySQL</span>
            <span>Postman</span>
          </div>
        </section>

        <div className="cta-section">
          <h2>Let's Connect!</h2>
          <p>Have a question or want to work together? I'd love to hear from you!</p>
          <div className="cta-buttons">
            <Link to="/feedback" className="btn primary">Get in Touch</Link>
            <a href="https://github.com/SanikaM14" target="_blank" rel="noopener noreferrer" className="btn secondary">
              View My Work
            </a>
          </div>
        </div>

        <div className="back-home">
          <Link to="/" className="back-btn">← Back to Home</Link>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
