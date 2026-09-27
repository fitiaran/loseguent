/**
 * Injecte la navbar et le footer (issus de data.js) dans chaque page.
 * Chaque page HTML n'a besoin que de deux ancres :
 *   <div id="navbar"></div>  et  <div id="footer"></div>
 */
(function () {
  function currentPage() {
    const path = window.location.pathname.split("/").pop();
    return path === "" ? "index.html" : path;
  }

  function renderNavbar() {
    const root = document.getElementById("navbar");
    if (!root) return;
    const page = currentPage();

    const links = SITE.nav
      .map((item) => {
        const active = item.href === page ? " is-active" : "";
        return `<li><a class="${active.trim()}" href="${item.href}">${item.label}</a></li>`;
      })
      .join("");

    root.innerHTML = `
      <nav class="navbar" id="siteNavbar">
        <div class="navbar__inner">
          <a class="navbar__logo" href="index.html" aria-label="${SITE.name} — Accueil">
            <img src="${SITE.logo}" alt="${SITE.name}">
          </a>
          <ul class="navbar__nav">${links}</ul>
        </div>
      </nav>`;

    const nav = document.getElementById("siteNavbar");
    window.addEventListener(
      "scroll",
      () => nav.classList.toggle("is-scrolled", window.scrollY > 12),
      { passive: true }
    );
  }

  function renderFooter() {
    const root = document.getElementById("footer");
    if (!root) return;
    const f = SITE.footer;

    const navLinks = SITE.nav
      .map((item) => `<li><a href="${item.href}">${item.label}</a></li>`)
      .join("");
    const hours = f.hours
      .map((h) => `<li>${h.day} : ${h.hours}</li>`)
      .join("");
    const social = f.social
      .map((s) => `<li><a href="${s.href}">${s.label}</a></li>`)
      .join("");

    root.innerHTML = `
      <footer class="footer">
        <div class="container footer__grid">
          <div>
            <a class="footer__logo" href="index.html"><img src="${SITE.logo}" alt="${SITE.name}"></a>
            <p class="footer__blurb">${f.blurb}</p>
          </div>
          <div>
            <h4>Navigation</h4>
            <ul>${navLinks}</ul>
          </div>
          <div>
            <h4>Horaires</h4>
            <ul>${hours}</ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li>${f.address}</li>
              <li><a href="tel:">${f.phone}</a></li>
              <li><a href="mailto:">${f.email}</a></li>
            </ul>
            <ul>${social}</ul>
          </div>
        </div>
        <div class="container footer__bottom">
          <span>${f.copyright}</span>
        </div>
      </footer>`;
  }
  document.addEventListener("DOMContentLoaded", () => {
    renderNavbar();
    renderFooter();
  });
})();
