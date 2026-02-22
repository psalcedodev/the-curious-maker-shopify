// Scroll reveal animation for home page sections
// Matches React component's useScrollReveal hook behavior

(function() {
  'use strict';

  function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');
    
    if (revealElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { 
        threshold: 0.1, 
        rootMargin: '0px 0px -50px 0px' 
      }
    );

    revealElements.forEach((el) => observer.observe(el));
  }

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScrollReveal);
  } else {
    initScrollReveal();
  }

  // Re-initialize when sections are loaded in theme editor
  if (Shopify && Shopify.designMode) {
    document.addEventListener('shopify:section:load', initScrollReveal);
  }
})();
