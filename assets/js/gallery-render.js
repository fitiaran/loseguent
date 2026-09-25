/**
 * Génère la galerie Photos à partir de GALLERY (data.js).
 * La page n'a besoin que de : <div id="galleryGrid"></div>
 * Une lightbox simple s'ouvre au clic (voir markup en fin de photos.html).
 */
(function () {
  function figure(img, i) {
    return `
      <figure data-reveal style="--i:${i % 6}">
        <img src="${img.src}" alt="${img.alt}" loading="lazy" data-full="${img.src}">
        <figcaption>${img.alt}</figcaption>
      </figure>`;
  }

  function renderGallery() {
    const root = document.getElementById("galleryGrid");
    if (!root) return;
    root.innerHTML = GALLERY.map(figure).join("");
    // Photos now exist in the DOM — safe to (re)scan for [data-reveal]
    if (window.initReveal) window.initReveal();

    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightboxImg");
    if (!lightbox || !lightboxImg) return;

    root.addEventListener("click", (e) => {
      const img = e.target.closest("img");
      if (!img) return;
      lightboxImg.src = img.dataset.full;
      lightboxImg.alt = img.alt;
      lightbox.classList.add("is-open");
    });

    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox || e.target.closest(".lightbox__close")) {
        lightbox.classList.remove("is-open");
        lightboxImg.src = "";
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        lightbox.classList.remove("is-open");
        lightboxImg.src = "";
      }
    });
  }

  document.addEventListener("DOMContentLoaded", renderGallery);
})();
