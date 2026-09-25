(function () {
  function renderContact() {
    const root = document.getElementById("contactInfo");
    if (!root) return;
    const c = CONTACT;

    const hours = c.hours
      .map((h) => `<tr><td>${h.day}</td><td>${h.hours}</td></tr>`)
      .join("");
    const social = c.social
      .map((s) => `<a href="${s.href}">${s.label}</a>`)
      .join("");

    root.innerHTML = `
      <div class="info-card" data-reveal>
        <h3>Coordonnées</h3>
        <dl>
          <dt>Adresse</dt>
          <dd>${c.address.lines.join("<br>")}</dd>
          <dt>Téléphone</dt>
          <dd><a href="tel:">${c.phone}</a></dd>
          <dt>Email</dt>
          <dd><a href="mailto:">${c.email}</a></dd>
        </dl>
        <div class="social-row">${social}</div>
      </div>

      <div class="info-card" data-reveal>
        <h3>Horaires</h3>
        <table class="hours-table">${hours}</table>
      </div>
    `;

    const mapRoot = document.getElementById("contactMap");
    if (mapRoot) {
      mapRoot.innerHTML = `
        <div class="map-frame" data-reveal>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3840.8173439417337!2d46.30591690000001!3d-15.7078429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2203fb247ff80ce3%3A0xff50005fdfc3d8fe!2sLo%20seg%C3%BCent!5e0!3m2!1sfr!2smg!4v1790349299697!5m2!1sfr!2smg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
        </div>
      `;
    }

    // Content now exists in the DOM — safe to (re)scan for [data-reveal]
    if (window.initReveal) window.initReveal();
  }

  document.addEventListener("DOMContentLoaded", renderContact);
})();
