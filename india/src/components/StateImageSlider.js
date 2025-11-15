// src/components/StateImageSlider.js
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../css/StateImageSlider.css';

// Complete data for all 36 Indian states and union territories
const statesData = [
  {
    name: "Andhra Pradesh",
    img: "/images/states/andhra-pradesh.jpg",
    description: "Known for its rich cultural heritage and beautiful beaches along the Bay of Bengal"
  },
  {
    name: "Arunachal Pradesh",
    img: "/images/states/arunachal-pradesh.jpg",
    description: "Home to diverse tribal cultures and pristine Himalayan landscapes"
  },
  {
    name: "Assam",
    img: "/images/states/assam.jpg",
    description: "Famous for its tea plantations and the mighty Brahmaputra River"
  },
  {
    name: "Bihar",
    img: "/images/states/bihar.jpg",
    description: "The land of ancient universities and rich historical significance"
  },
  {
    name: "Chhattisgarh",
    img: "/images/states/Chhattisgarh.jpg",
    description: "Blessed with dense forests and indigenous tribal communities"
  },
  {
    name: "Goa",
    img: "/images/states/Goa.jpg",
    description: "A coastal paradise with pristine beaches and Portuguese heritage"
  },
  {
    name: "Gujarat",
    img: "/images/states/Gujarat.jpg",
    description: "Known for its entrepreneurial spirit and the white desert of Rann"
  },
  {
    name: "Haryana",
    img: "/images/states/Haryana.jpg",
    description: "The agricultural heartland with rich cultural traditions"
  },
  {
    name: "Himachal Pradesh",
    img: "/images/states/Himachal.jpg",
    description: "A mountainous paradise offering breathtaking Himalayan views"
  },
  {
    name: "Jharkhand",
    img: "/images/states/Jharkhand.jpg",
    description: "Rich in mineral resources and home to diverse tribal cultures"
  },
  {
    name: "Karnataka",
    img: "/images/states/Karnataka.jpg",
    description: "Land of sandalwood, silk, and magnificent historical monuments"
  },
  {
    name: "Kerala",
    img: "/images/states/Kerala.jpg",
    description: "God's Own Country with backwaters, beaches, and lush greenery"
  },
  {
    name: "Madhya Pradesh",
    img: "/images/states/Madhya Pradesh.jpg",
    description: "Heart of Incredible India with ancient temples and wildlife"
  },
  {
    name: "Maharashtra",
    img: "/images/states/Maharashtra.jpg",
    description: "Economic powerhouse with diverse culture and stunning landscapes"
  },
  {
    name: "Manipur",
    img: "/images/states/Manipur.jpg",
    description: "Jewel of Northeast India with unique cultural traditions"
  },
  {
    name: "Meghalaya",
    img: "images/states/Meghalaya.jpg",
    description: "Abode of Clouds with living root bridges and waterfalls"
  },
  {
    name: "Mizoram",
    img: "images/states/Mizoram.jpg",
    description: "Land of Blue Mountains with pristine natural beauty"
  },
  {
    name: "Nagaland",
    img: "/images/states/Nagaland.jpg",
    description: "Home to vibrant tribal festivals and warrior traditions"
  },
  {
    name: "Odisha",
    img: "/images/states/Odisha.jpg",
    description: "Land of ancient temples and pristine beaches"
  },
  {
    name: "Punjab",
    img: "/images/states/Punjab.jpg",
    description: "The granary of India with vibrant culture and hospitality"
  },
  {
    name: "Rajasthan",
    img: "/images/states/Rajasthan.jpg",
    description: "Land of Kings with magnificent forts and desert landscapes"
  },
  {
    name: "Sikkim",
    img: "/images/states/Sikkim.jpg",
    description: "Northeastern gem with monasteries and Himalayan beauty"
  },
  {
    name: "Tamil Nadu",
    img: "/images/states/Tamil Nadu.jpg",
    description: "Land of temples and classical arts with rich Dravidian culture"
  },
  {
    name: "Telangana",
    img: "/images/states/Telangana.jpg",
    description: "Emerging IT hub with historic monuments and delicious cuisine"
  },
  {
    name: "Tripura",
    img: "/images/states/Tripura.jpg",
    description: "Small northeastern state with rich tribal heritage"
  },
  {
    name: "Uttar Pradesh",
    img: "/images/states/uttar-pradesh.jpg",
    description: "Heart of India with the iconic Taj Mahal and sacred rivers"
  },
  {
    name: "Uttarakhand",
    img: "/images/states/Uttarakhand.jpg",
    description: "Devbhumi - Land of Gods with Himalayan peaks and holy sites"
  },
  {
    name: "West Bengal",
    img: "/images/states/West Bengal.jpg",
    description: "Cultural capital with literary heritage and delicious cuisine"
  },
  {
    name: "Andaman and Nicobar Islands",
    img: "/images/states/andaman-nicobar.jpg",
    description: "Tropical paradise with pristine beaches and marine life"
  },
  {
    name: "Chandigarh",
    img: "/images/states/Chandigarh.jpg",
    description: "The City Beautiful - planned urban paradise"
  },
  {
    name: "Dadra and Nagar Haveli and Daman and Diu",
    img: "/images/states/dadra-nagar-haveli-daman-diu.jpg",
    description: "Peaceful union territories with coastal beauty"
  },
  {
    name: "Delhi (NCT)",
    img: "https://images.unsplash.com/photo-1587135941948-670b381f08ce?w=800&h=600&fit=crop&q=80",
    description: "Historic capital with Mughal monuments and modern vibrancy"
  },
  {
    name: "Jammu and Kashmir",
    img: "/images/states/jammu-kashmir.jpg",
    description: "Paradise on Earth with stunning valleys and mountains"
  },
  {
    name: "Ladakh",
    img: "/images/states/ladakh.jpg",
    description: "Cold desert with Buddhist monasteries and stark landscapes"
  },
  {
    name: "Lakshadweep",
    img: "/images/states/lakshadweep.jpg",
    description: "Tiny islands with turquoise waters and coral reefs"
  },
  {
    name: "Puducherry",
    img: "/images/states/puducherry.jpg",
    description: "French colonial charm meets Indian culture"
  }
];

const StateImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState({});
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % statesData.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Handle image loading
  const handleImageLoad = useCallback((index) => {
    setImagesLoaded(prev => ({ ...prev, [index]: true }));
  }, []);

  // Navigation functions
  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? statesData.length - 1 : prevIndex - 1
    );
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % statesData.length);
  }, []);

  const goToSlide = useCallback((index) => {
    setCurrentIndex(index);
  }, []);

  // Pause on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  // Touch/swipe handlers for mobile
  const handleTouchStart = (e) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };

  // Animation variants
  const slideVariants = {
    enter: {
      opacity: 0,
      scale: 1.1,
    },
    center: {
      opacity: 1,
      scale: 1,
    },
    exit: {
      opacity: 0,
      scale: 0.9,
    },
  };

  return (
    <div
      className="state-slider"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="slider-container"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="slider-wrapper">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className={`slide ${currentIndex}`}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                opacity: { duration: 0.5 },
                scale: { duration: 0.5 }
              }}
            >
              <img
                src={statesData[currentIndex].img}
                alt={statesData[currentIndex].name}
                className={`slide-image ${
                  imagesLoaded[currentIndex] ? '' : 'slide-image-loading'
                }`}
                loading="lazy"
                onLoad={() => handleImageLoad(currentIndex)}
              />
              <div className="slide-overlay">
                <div className="slide-content">
                  <h2 className="slide-title">
                    {statesData[currentIndex].name}
                  </h2>
                  <p className="slide-description">
                    {statesData[currentIndex].description}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <div className="slider-controls">
          <button
            className="control-btn"
            onClick={goToPrevious}
            aria-label="Previous slide"
          >
            &#8249;
          </button>
          <button
            className="control-btn"
            onClick={goToNext}
            aria-label="Next slide"
          >
            &#8250;
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="slider-dots">
          {statesData.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StateImageSlider;
