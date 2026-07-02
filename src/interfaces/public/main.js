/* ------------------------------------------------------------------
   Simple Landing Page — interactivity
   Progressive enhancement only: the page is fully usable without JS.
   ------------------------------------------------------------------ */
(function () {
  'use strict';

  var prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  /* Elevate the sticky header once the page is scrolled */
  var header = document.querySelector('.site-header');
  if (header) {
    var updateHeader = function () {
      header.classList.toggle('is-scrolled', window.scrollY > 4);
    };
    window.addEventListener('scroll', updateHeader, { passive: true });
    updateHeader();
  }

  /* Reveal sections as they scroll into view */
  var revealTargets = document.querySelectorAll(
    '.hero .container, .feature-card, .about .container, .cta .container'
  );

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    return; // leave everything visible, no animation
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealTargets.forEach(function (target) {
    target.classList.add('reveal');
    observer.observe(target);
  });
})();
