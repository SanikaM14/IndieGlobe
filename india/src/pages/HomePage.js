import React from 'react';
import '../css/HomePage.css';
import { Link } from 'react-router-dom';
import ScrollingEffect from '../components/ScrollingEffect';
import HeaderCarousel from '../components/HeaderCarousel';
import { indiaData } from '../data/data';

// Import images
import cultureImage from '../images/culture/culture1.jpg';
import heritageImage from '../images/forts/Mehrangarh.jpg';
import fortsImage from '../images/forts/Chittorgarh.jpg';
import spicesImage from '../images/culture/culture2.jpg';

function HomePage() {
  const { culture, heritage, forts, spices } = indiaData;
  
  const features = [
    {
      title: culture.title,
      description: culture.description,
      image: cultureImage,
      link: '/culture'
    },
    {
      title: heritage.title,
      description: heritage.description,
      image: heritageImage,
      link: '/heritage'
    },
    {
      title: forts.title,
      description: forts.description,
      image: fortsImage,
      link: '/forts'
    },
    {
      title: spices.title,
      description: spices.description,
      image: spicesImage,
      link: '/spices'
    }
  ];

  return (
    <div className="home-page">
      <HeaderCarousel />
      
      <section className="features-section">
        <div className="section-header">
          <h2>Explore the Essence of India</h2>
          <p>Journey through the diverse landscapes and traditions of our incredible nation</p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <ScrollingEffect key={index}>
              <Link to={feature.link} className="feature-card">
                <div className="card-image" style={{ backgroundImage: `url(${feature.image})` }}></div>
                <div className="card-content">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                  <span className="learn-more">Learn more →</span>
                </div>
              </Link>
            </ScrollingEffect>
          ))}
        </div>
      </section>

      {/* States Showcase Section */}
      <section className="states-showcase">
        <div className="section-header">
          <h2>Explore India's Diverse States</h2>
          <p>Discover the unique cultural heritage of India's most iconic states</p>
        </div>
        
        <div className="states-grid">
          <ScrollingEffect>
            <Link to="/states/rajasthan" className="state-card">
              <div className="state-image" style={{backgroundImage: 'url(/images/states/rajasthan.jpg)'}}></div>
              <div className="state-content">
                <h3>Rajasthan</h3>
                <p>Land of Kings, forts, and vibrant culture</p>
              </div>
            </Link>
          </ScrollingEffect>
          
          <ScrollingEffect>
            <Link to="/states/kerala" className="state-card">
              <div className="state-image" style={{backgroundImage: 'url(/images/states/kerala.jpg)'}}></div>
              <div className="state-content">
                <h3>Kerala</h3>
                <p>God's Own Country with serene backwaters</p>
              </div>
            </Link>
          </ScrollingEffect>
          
          
          
          <ScrollingEffect>
            <Link to="/states/maharashtra" className="state-card">
              <div className="state-image" style={{backgroundImage: 'url(/images/states/Maharashtra.jpg)'}}></div>
              <div className="state-content">
                <h3>Maharashtra</h3>
                <p>Land of Marathas, Bollywood, and Ajanta Caves</p>
              </div>
            </Link>
          </ScrollingEffect>
        </div>
        
        <div className="view-all-container">
          <Link to="/states" className="view-all-btn">
            View All States & Union Territories →
          </Link>
        </div>
      </section>

      {/* Cultural Showcase Section */}
      <section className="cultural-showcase">
        <div className="section-header">
          <h2>Experience India's Cultural Tapestry</h2>
          <p>Immerse yourself in the vibrant traditions and artistic heritage of India</p>
        </div>
        
        <div className="culture-grid">
          <ScrollingEffect>
            <Link to="/classicalArts" className="culture-card">
              <div className="culture-image" style={{backgroundImage: 'url(/images/culture/dance-music-bharatanatyam-kathak.jpg)'}}></div>
              <div className="culture-content">
                <h3>Classical Arts</h3>
                <p>Bharatanatyam, Kathak, and more</p>
              </div>
            </Link>
          </ScrollingEffect>
          
          <ScrollingEffect>
            <Link to="/festivalPage" className="culture-card">
              <div className="culture-image" style={{backgroundImage: 'url(/images/culture/festivals-holi-diwali.jpg)'}}></div>
              <div className="culture-content">
                <h3>Festivals</h3>
                <p>Diwali, Holi, Eid, and more</p>
              </div>
            </Link>
          </ScrollingEffect>
          
         
        </div>
        
        <div className="view-all-container">
          <Link to="/culture" className="view-all-btn">
            Explore More Cultural Treasures →
          </Link>
        </div>
      </section>
      
      <section className="quick-links">
        <div className="section-header">
          <h2>Quick Access</h2>
          <p>Navigate to your area of interest</p>
        </div>
        
        <div className="links-grid">
          {features.map((feature, index) => (
            <ScrollingEffect key={index}>
              <Link to={feature.link} className="link-card">
                <div className="link-icon">{feature.title.charAt(0)}</div>
                <h3>{feature.title}</h3>
              </Link>
            </ScrollingEffect>
          ))}
        </div>
      </section>
      
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Explore More?</h2>
          <p>Dive deeper into India's rich heritage and vibrant culture with our interactive guides and resources.</p>
          <Link to="/heritage" className="cta-btn">
            Discover More
          </Link>
        </div>
      </section>
    </div>
  );
}

export default HomePage;