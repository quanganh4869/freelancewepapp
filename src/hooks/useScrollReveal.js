import { useEffect } from 'react';

export const useScrollReveal = (depKey) => {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');

    // Immediately activate elements if IntersectionObserver is not supported
    if (!('IntersectionObserver' in window)) {
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
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.05
      }
    );

    revealElements.forEach(el => {
      // If element is already near top of screen, activate immediately
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        el.classList.add('active');
      } else {
        observer.observe(el);
      }
    });

    // Safety fallback: Ensure all elements are visible after 300ms so no section stays hidden
    const timer = setTimeout(() => {
      document.querySelectorAll('.reveal').forEach(el => el.classList.add('active'));
    }, 300);

    return () => {
      clearTimeout(timer);
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, [depKey]);
};
