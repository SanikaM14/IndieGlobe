import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Import local header images
import header45 from '../images/home/header 45.jpg';
import header56 from '../images/home/header 56.jpg';
import header78 from '../images/home/header78.jpg';

const HeaderCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Use local header images
  const images = [
    header45,
    header56,
    header78
  ];

  // Auto-rotate slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="header-carousel">
      <div className="carousel-slides">
        {images.map((image, index) => (
          <div 
            key={index} 
            className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
          >
            <img 
              src={image} 
              alt={`Slide ${index + 1}`} 
              className="carousel-image"
            />
            <div className="carousel-overlay">
              <h1>Discover Incredible India</h1>
              <p>Experience the rich tapestry of culture, heritage, and traditions that make India truly unique</p>
              <Link to="/culture" className="explore-btn">
                Start Exploring
              </Link>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation dots */}
      <div className="carousel-dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={`dot ${currentSlide === index ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeaderCarousel;
