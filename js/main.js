/* Perks one-pager. Nedräkning, mobilmeny, e-postformulär. */
(function () {
  "use strict";

  /* ---------- Nedräkning till lansering ---------- */
  var LAUNCH = new Date("2026-10-01T08:00:00+02:00").getTime();
  var cdEl = document.getElementById("countdown");

  function pad(n) {
    return String(n).padStart(2, "0");
  }

  function tick() {
    var s = Math.max(0, Math.floor((LAUNCH - Date.now()) / 1000));
    var d = Math.floor(s / 86400);
    s -= d * 86400;
    var h = Math.floor(s / 3600);
    s -= h * 3600;
    var m = Math.floor(s / 60);
    s -= m * 60;
    cdEl.textContent = d + " d " + pad(h) + ":" + pad(m) + ":" + pad(s);
  }

  if (cdEl) {
    tick();
    setInterval(tick, 1000);
  }

  /* ---------- Mobilmeny ---------- */
  var burger = document.getElementById("menu-toggle");
  var menu = document.getElementById("mobile-menu");

  function closeMenu() {
    menu.classList.remove("is-open");
    burger.setAttribute("aria-expanded", "false");
  }

  if (burger && menu) {
    burger.addEventListener("click", function () {
      var open = menu.classList.toggle("is-open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });

    menu.addEventListener("click", function (e) {
      if (e.target.closest("a")) closeMenu();
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && menu.classList.contains("is-open")) {
        closeMenu();
        burger.focus();
      }
    });
  }

  /* ---------- Kontaktformulär ----------
     OBS: Ingen backend är kopplad ännu. Formuläret validerar och visar
     bekräftelse lokalt. Koppla submit till ert API/CRM vid produktion. */
  var form = document.getElementById("contact-form");
  var input = document.getElementById("email");
  var status = document.getElementById("form-status");

  if (form && input && status) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      if (!input.value.trim() || !input.checkValidity()) {
        input.setAttribute("aria-invalid", "true");
        status.className = "form-status form-status--error";
        status.textContent = "Fyll i en giltig e-postadress.";
        input.focus();
        return;
      }

      /* TODO (produktion): skicka input.value till endpoint här. */
      input.removeAttribute("aria-invalid");
      form.querySelector(".form-row").hidden = true;
      status.className = "form-status form-status--success";
      status.textContent = "Tack! Vi hör av oss inom kort.";
    });

    input.addEventListener("input", function () {
      if (input.getAttribute("aria-invalid")) {
        input.removeAttribute("aria-invalid");
        status.textContent = "";
        status.className = "form-status";
      }
    });
  }
})();
