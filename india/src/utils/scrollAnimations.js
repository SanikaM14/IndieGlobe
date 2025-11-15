/**
 * Scroll Animations Utility
 * Handles fade-up and other scroll-based animations
 */

export const initScrollAnimations = () => {
  // Get all elements with the fade-up class
  const fadeElements = document.querySelectorAll('.fade-up');
  
  // If no elements found, exit
  if (!fadeElements.length) return;

  // Options for the Intersection Observer
  const options = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px' // Start animation when element is 50px from the viewport
  };

  // Create the Intersection Observer
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      // If the element is in the viewport
      if (entry.isIntersecting) {
        // Add the is-visible class to trigger the animation
        entry.target.classList.add('is-visible');
        
        // Optional: Unobserve the element after it's been animated
        // observer.unobserve(entry.target);
      }
    });
  }, options);

  // Observe each fade element
  fadeElements.forEach(element => {
    observer.observe(element);
  });

  // Return cleanup function to disconnect observer when component unmounts
  return () => observer.disconnect();
};

// Initialize on window load and when the page is resized
const handleLoadAndResize = () => {
  initScrollAnimations();
};

// Add event listeners
if (typeof window !== 'undefined') {
  window.addEventListener('load', handleLoadAndResize);
  window.addEventListener('resize', handleLoadAndResize);
}

export default initScrollAnimations;
