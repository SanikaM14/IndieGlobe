// src/components/PhotoGallery.js
import React, { useEffect, useRef } from 'react';
import '../css/SpinningGallery.css';

const PhotoGallery = ({ title, subtitle, images }) => {
  const rootRef = useRef(null);

  useEffect(() => {
    const rootNode = rootRef.current;
    if (!rootNode) return;

    const items = rootNode.querySelectorAll('.gallery-item');

    if (typeof window !== 'undefined' && !('IntersectionObserver' in window)) {
      items.forEach((el) => el.classList.add('animate-in'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        threshold: 0.12,
        rootMargin: '0px 0px -10% 0px',
      }
    );

    items.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  if (!images || images.length === 0) {
    return (
      <section className="spinning-gallery" ref={rootRef}>
        <h2>{title || 'Photo Gallery'}</h2>
        {subtitle && <p className="subtitle">{subtitle}</p>}
        <div className="gallery-container">
          <p className="error-message">No images available</p>
        </div>
      </section>
    );
  }

  return (
    <section className="spinning-gallery" ref={rootRef}>
      <h2>{title || 'Photo Gallery'}</h2>
      {subtitle && <p className="subtitle">{subtitle}</p>}
      
      <div className="gallery-container">
        {images.map((image, index) => (
          <div 
            className="gallery-item" 
            key={image.id || `image-${index}`}
          >
            <div className="image-wrapper">
              <div className="image-spinner">
                <div className="spinning-image">
                  <img 
                    src={image.url} 
                    alt={image.title || `Gallery image ${index + 1}`}
                    className="gallery-image"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="image-info">
                {image.title && <h3>{image.title}</h3>}
                {image.description && <p>{image.description}</p>}
                {image.category && <span className="category">{image.category}</span>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PhotoGallery;