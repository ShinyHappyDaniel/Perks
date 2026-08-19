/* Perks undersida. E-postformulär: lokal validering + bekräftelse.
   OBS: Ingen backend är kopplad ännu. Koppla submit till ert API/CRM
   vid produktion, se HANDOFF.md. */
(function () {
  "use strict";

  var form = document.getElementById("contact-form");
  var input = document.getElementById("email");
  var status = document.getElementById("form-status");

  if (!form || !input || !status) return;

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
})();
