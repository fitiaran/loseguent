/**
 * Génère les sections de la page Accueil à partir de SITE (data.js).
 * La page HTML ne contient que des ancres <div id="..."></div>.
 */
(function () {
  function renderHero() {
    const root = document.getElementById("hero");
    if (!root) return;
    const h = SITE.hero;
    root.innerHTML = `
      <section class="hero">
        <div class="hero__media" style="background-image:url('${h.image}')"></div>
        <div class="hero__content">
          <h1 class="hero__title">${h.title}</h1>
          <p class="hero__tagline">${h.tagline}</p>
          <div class="hero__actions">
            <a class="btn btn--solid" href="${h.ctaHref}">${h.ctaLabel}</a>
            <a class="btn btn--outline" href="photos.html" style="color:#fff;border-color:rgba(255,255,255,.6)">Voir les photos</a>
          </div>
        </div>
      </section>`;
  }

  function renderIntro() {
    const root = document.getElementById("intro");
    if (!root) return;
    const it = SITE.intro;
    root.innerHTML = `
      <section>
        <div class="container intro">
          <h2>${it.eyebrow}</h2>
          <p class="intro__text" data-reveal>${it.text}</p>
        </div>
      </section>`;
  }

  function renderSplit(id, data, variant, reverse) {
    const root = document.getElementById(id);
    if (!root) return;
    root.innerHTML = `
      <section>
        <div class="container">
          <div class="split${reverse ? " split--reverse" : ""}" data-reveal>
            <div class="split__media" style="background-image:url('${data.image}')"></div>
            <div class="split__text split__text--${variant}">
              <span class="tag${variant === "ice" ? " tag--ice" : ""}">${data.tag}</span>
              <h3>${data.title}</h3>
              <p>${data.text}</p>
              <a class="btn ${variant === "ice" ? "btn--solid" : "btn--outline"}" href="${data.ctaHref}">${data.ctaLabel}</a>
            </div>
          </div>
        </div>
      </section>`;
  }

  function renderAmbiance() {
    const root = document.getElementById("ambiance");
    if (!root) return;
    const a = SITE.ambiance;
    const imgs = a.images
      .map((img) => `<div><div class="mosaic__img" style="background-image:url('${img.src}')" title="${img.alt}"></div></div>`)
      .join("");
    root.innerHTML = `
      <section>
        <div class="container">
          <div style="display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:1rem;margin-bottom:2rem">
            <div>
              <p class="eyebrow">${a.eyebrow}</p>
              <h2 style="max-width:16ch;margin:0">${a.title}</h2>
            </div>
            <a class="btn btn--outline" href="${a.ctaHref}">${a.ctaLabel}</a>
          </div>
          <p style="margin-bottom:4rem">${a.text}</p>
          <div class="mosaic" data-reveal>${imgs}</div>
        </div>
      </section>`;
  }

  function renderCtaFinal() {
    const root = document.getElementById("ctaFinal");
    if (!root) return;
    const c = SITE.ctaFinal;
    const actions = c.actions
      .map((a) => `<a class="btn btn--${a.style}" href="${a.href}">${a.label}</a>`)
      .join("");
    root.innerHTML = `
      <section>
        <div class="container">
          <div class="cta-final" data-reveal>
            <h2>${c.title}</h2>
            <p>${c.text}</p>
            <div class="actions">${actions}</div>
          </div>
        </div>
      </section>`;
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderHero();
    renderIntro();
    renderSplit("restaurantSection", SITE.restaurant, "resto", false);
    renderSplit("glacerieSection", SITE.glacerie, "ice", true);
    renderAmbiance();
    renderCtaFinal();
    // Content now exists in the DOM — safe to (re)scan for [data-reveal]
    if (window.initReveal) window.initReveal();
  });
})();
