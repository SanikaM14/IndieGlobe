import React from 'react';
import '../css/ScrollingEffect.css';
import { useEffect } from 'react';

function ScrollingEffect(props) {
  const handleScroll = () => {
    const elements = document.querySelectorAll('.scroll-effect');
    elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const elementBottom = element.getBoundingClientRect().bottom;
      
      // If element is in viewport
      if (elementTop < window.innerHeight && elementBottom > 0) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return React.createElement(
    'div',
    { 
      className: 'scroll-container',
      style: {
        ...props.style
      }
    },
    React.createElement(
      'div',
      { 
        className: 'scroll-effect',
        style: {
          opacity: '0',
          transform: 'translateY(20px)',
          transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
          ...props.childrenStyle
        }
      },
      props.children
    )
  );
}

export default ScrollingEffect;
