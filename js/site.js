/* AjoFam — site shell behaviour
   Progressive enhancement only: every page is readable and navigable
   with JavaScript disabled. */
(function () {
  "use strict";

  document.documentElement.classList.remove("no-js");

  /* ---------- Mobile navigation drawer ---------- */
  var body = document.body;
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.getElementById("nav-menu");
  var scrim = document.querySelector(".nav-scrim");

  function isDrawer() {
    return window.matchMedia("(max-width: 1080px)").matches;
  }

  function closeNav() {
    if (!toggle) return;
    body.classList.remove("nav-open", "is-locked");
    toggle.setAttribute("aria-expanded", "false");
  }

  function openNav() {
    if (!toggle) return;
    body.classList.add("nav-open", "is-locked");
    toggle.setAttribute("aria-expanded", "true");
  }

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      if (toggle.getAttribute("aria-expanded") === "true") closeNav();
      else openNav();
    });

    if (scrim) scrim.addEventListener("click", closeNav);

    menu.addEventListener("click", function (event) {
      if (event.target.closest("a") && isDrawer()) closeNav();
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && body.classList.contains("nav-open")) {
        closeNav();
        toggle.focus();
      }
    });

    window.addEventListener("resize", function () {
      if (!isDrawer()) closeNav();
    });
  }

  /* ---------- Nav dropdown ---------- */
  var subToggles = Array.prototype.slice.call(
    document.querySelectorAll(".nav-sub-toggle")
  );

  function closeSubs(except) {
    subToggles.forEach(function (btn) {
      if (btn !== except) btn.setAttribute("aria-expanded", "false");
    });
  }

  subToggles.forEach(function (btn) {
    btn.addEventListener("click", function (event) {
      event.preventDefault();
      var open = btn.getAttribute("aria-expanded") === "true";
      closeSubs(btn);
      btn.setAttribute("aria-expanded", open ? "false" : "true");
    });
  });

  document.addEventListener("click", function (event) {
    if (!event.target.closest(".nav-item-has-sub")) closeSubs(null);
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") closeSubs(null);
  });

  /* ---------- Scroll reveal ---------- */
  var revealables = document.querySelectorAll(".reveal");
  if (revealables.length && "IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    Array.prototype.forEach.call(revealables, function (el) {
      observer.observe(el);
    });
  } else {
    Array.prototype.forEach.call(revealables, function (el) {
      el.classList.add("is-in");
    });
  }

  /* ---------- Accordion: one open at a time within a group ---------- */
  Array.prototype.forEach.call(
    document.querySelectorAll(".accordion[data-exclusive]"),
    function (group) {
      var items = group.querySelectorAll("details");
      Array.prototype.forEach.call(items, function (item) {
        item.addEventListener("toggle", function () {
          if (!item.open) return;
          Array.prototype.forEach.call(items, function (other) {
            if (other !== item) other.open = false;
          });
        });
      });
    }
  );

  /* ---------- Demo form handling ----------
     These pages are a front-end prototype with no back end yet, so the
     forms confirm in place rather than 404-ing on a missing endpoint. */
  Array.prototype.forEach.call(
    document.querySelectorAll("form[data-demo-form]"),
    function (form) {
      form.addEventListener("submit", function (event) {
        event.preventDefault();
        if (!form.reportValidity()) return;
        var status = form.querySelector(".form-status");
        if (!status) return;
        status.classList.add("is-visible");
        status.setAttribute("tabindex", "-1");
        status.focus();
        status.scrollIntoView({ block: "center", behavior: "smooth" });
      });
    }
  );

  /* ---------- Footer year ---------- */
  Array.prototype.forEach.call(
    document.querySelectorAll("[data-year]"),
    function (el) {
      el.textContent = String(new Date().getFullYear());
    }
  );
})();
