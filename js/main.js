/* Perks startsida. Mobilmeny + e-postformulär. Vanilla JS, inga beroenden. */
(function () {
  "use strict";

  /* ---------- Mobilmeny ---------- */
  var header = document.querySelector(".site-header");
  var burger = document.getElementById("menu-toggle");
  var menu = document.getElementById("mobile-menu");

  function setMenu(open) {
    menu.classList.toggle("is-open", open);
    burger.setAttribute("aria-expanded", open ? "true" : "false");
  }

  if (header && burger && menu) {
    burger.addEventListener("click", function () {
      setMenu(!menu.classList.contains("is-open"));
    });

    /* Stäng vid val av länk */
    menu.addEventListener("click", function (e) {
      if (e.target.closest("a")) setMenu(false);
    });

    /* Stäng vid Escape */
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && menu.classList.contains("is-open")) {
        setMenu(false);
        burger.focus();
      }
    });

    /* Stäng vid klick utanför headern */
    document.addEventListener("click", function (e) {
      if (menu.classList.contains("is-open") && !header.contains(e.target)) {
        setMenu(false);
      }
    });

    /* Nollställ om fönstret växer förbi brytpunkten */
    var desktop = window.matchMedia("(min-width: 769px)");
    desktop.addEventListener("change", function (e) {
      if (e.matches) setMenu(false);
    });
  }

  /* ---------- Kontaktformulär ----------
     Mailto till Karl. Ingen backend krävs. */
  var CONTACT = "karl@perks.se";
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

      /* Öppnar besökarens mejlprogram med ett förifyllt mejl till Karl.
         Vill ni ha ett riktigt formulär utan mejlprogram: ersätt blocket
         med ett anrop till ert API/formulärtjänst, se HANDOFF.md. */
      var subject = "Boka ett samtal om Perks";
      var body = "Hej Karl,\n\nJag vill boka ett samtal om Perks.\n\nNå mig på: " + input.value.trim() + "\n";
      input.removeAttribute("aria-invalid");
      form.querySelector(".form-row").hidden = true;
      status.className = "form-status form-status--success";
      status.innerHTML = "Ditt mejlprogram öppnas med ett meddelande till karl@perks.se. " +
        "Öppnas inget? Mejla <a href=\"mailto:karl@perks.se\">karl@perks.se</a> direkt.";
      window.location.href = "mailto:" + CONTACT + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
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
