/* Small helpers. Nothing here needs editing to add content. */

(function () {
  "use strict";

  // Abstract show/hide
  document.addEventListener("click", function (e) {
    var btn = e.target.closest("[data-toggle]");
    if (!btn) return;
    var panel = document.getElementById(btn.getAttribute("data-toggle"));
    if (!panel) return;
    var open = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", String(!open));
    panel.hidden = open;
  });

  // Footer year
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
