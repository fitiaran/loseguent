/**
 * Génère la page Menu à partir de MENU (data.js).
 * La page n'a besoin que de : <div id="menuTabs"></div> et <div id="menuContent"></div>
 */
(function () {
  function itemRow(item) {
    const photo = item.image
      ? `<img class="menu-item__photo" src="${item.image}" alt="${item.name}">`
      : "";
    return `
      <div class="menu-item">
        ${photo}
        <div class="menu-item__body">
          <div class="menu-item__row">
            <span class="menu-item__name">${item.name}</span>
            <span class="menu-item__price">${item.price}</span>
          </div>
          <p class="menu-item__desc">${item.description}</p>
        </div>
      </div>`;
  }

  function categoryBlock(cat) {
    return `
      <div class="menu-category" id="${cat.id}" data-category="${cat.id}">
        <div class="menu-category__head">
          <h3>${cat.label}</h3>
          <p>${cat.description}</p>
        </div>
        <div class="menu-grid">
          ${cat.items.map(itemRow).join("")}
        </div>
      </div>`;
  }

  function renderTabs() {
    const root = document.getElementById("menuTabs");
    if (!root) return;
    root.innerHTML = MENU.map(
      (cat, i) =>
        `<button class="menu-tab${i === 0 ? " is-active" : ""}" data-target="${cat.id}">${cat.label}</button>`
    ).join("");

    root.addEventListener("click", (e) => {
      const btn = e.target.closest(".menu-tab");
      if (!btn) return;
      root.querySelectorAll(".menu-tab").forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      const el = document.getElementById(btn.dataset.target);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  function renderContent() {
    const root = document.getElementById("menuContent");
    if (!root) return;
    root.innerHTML = MENU.map(categoryBlock).join("");
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderTabs();
    renderContent();

    // Ouvrir directement une catégorie si l'URL contient un ancre (#glaces, #restaurant…)
    if (window.location.hash) {
      const target = document.querySelector(window.location.hash);
      if (target) setTimeout(() => target.scrollIntoView({ behavior: "smooth" }), 150);
    }
  });
})();
