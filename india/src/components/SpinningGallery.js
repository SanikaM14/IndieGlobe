import React, { useEffect, useRef } from 'react';
import '../css/SpinningGallery.css';

function SpinningGallery({ title, subtitle, images }) {
  const rootRef = useRef(null);

  useEffect(() => {
    const rootNode = rootRef.current;
    if (!rootNode) return;

    const items = rootNode.querySelectorAll('.gallery-item');

    // Fallback for unsupported browsers
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

  return (
    <section className="spinning-gallery" ref={rootRef}>
      <h2>{title}</h2>
      <p className="subtitle">{subtitle}</p>

      <div className="gallery-container">
        {images.map((image) => (
          <div
            className="gallery-item"
            key={image.id}
            onClick={(e) => {
              // Only enable tap-toggle on touch/non-hover devices
              if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(hover: none)').matches) {
                const rootNode = rootRef.current;
                if (!rootNode) return;
                // Close others first
                rootNode.querySelectorAll('.gallery-item.is-open').forEach((el) => {
                  if (el !== e.currentTarget) el.classList.remove('is-open');
                });
                e.currentTarget.classList.toggle('is-open');
              }
            }}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(hover: none)').matches) {
                  const rootNode = rootRef.current;
                  if (!rootNode) return;
                  rootNode.querySelectorAll('.gallery-item.is-open').forEach((el) => {
                    if (el !== e.currentTarget) el.classList.remove('is-open');
                  });
                  e.currentTarget.classList.toggle('is-open');
                }
              }
            }}
          >
            <div className="image-wrapper">
              <div className="image-spinner">
                <div className="spinning-image">
                  <img 
                    src={image.url} 
                    alt={image.title}
                    className="gallery-image"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="image-info">
                <h3>{image.title}</h3>
                <p>{image.description}</p>
                <span className="category">{image.category}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SpinningGallery;