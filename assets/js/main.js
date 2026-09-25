/**
 * Comportements généraux : reveal discret au scroll.
 * Respecte prefers-reduced-motion (géré aussi en CSS).
 */
(function () {
  // Only targets elements not already handled, so it is safe to call
  // this again after a page injects more content dynamically
  // (menu-render.js, gallery-render.js, contact-render.js, home-render.js
  // all call window.initReveal() themselves once their markup exists —
  // calling it too early, before that markup exists, is what previously
  // left whole sections stuck invisible).
  function initReveal() {
    const items = document.querySelectorAll("[data-reveal]:not([data-reveal-bound])");
    if (!items.length) return;

    if (!("IntersectionObserver" in window)) {
      items.forEach((el) => {
        el.classList.add("is-visible");
        el.setAttribute("data-reveal-bound", "");
      });
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    items.forEach((el, i) => {
      el.style.setProperty("--i", i % 6);
      el.setAttribute("data-reveal-bound", "");
      io.observe(el);

      // Safety net: if for any reason the observer never fires for an
      // element (e.g. it is taller than the viewport), reveal it anyway
      // after a short delay rather than leaving it permanently blank.
      setTimeout(() => el.classList.add("is-visible"), 2500);
    });
  }

  window.initReveal = initReveal;
  document.addEventListener("DOMContentLoaded", initReveal);
})();
