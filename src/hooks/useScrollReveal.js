import { useEffect } from 'react';

export const useScrollReveal = () => {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');

    if (!('IntersectionObserver' in window)) {
      // Fallback for older browsers
      revealElements.forEach(el => el.classList.add('active'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -60px 0px', // Trigger slightly before element reaches 60px from bottom
        threshold: 0.1
      }
    );

    revealElements.forEach(el => observer.observe(el));

    return () => {
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, []);
};
