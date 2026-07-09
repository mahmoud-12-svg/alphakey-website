document.addEventListener("DOMContentLoaded", function () {
  const revealElements = document.querySelectorAll(".reveal");

  function revealOnScroll() {
    const windowHeight = window.innerHeight;

    revealElements.forEach(function (element) {
      const elementTop = element.getBoundingClientRect().top;

      if (elementTop < windowHeight - 80) {
        element.classList.add("active");
      }
    });
  }

  revealOnScroll();
  window.addEventListener("scroll", revealOnScroll);

  document.querySelectorAll(".nav-toggle").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const nav = btn.closest("nav");
      const links = nav.querySelector(".nav-links");
      if (links) links.classList.toggle("nav-open");
    });
  });

  document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
      const links = link.closest(".nav-links");
      if (links) links.classList.remove("nav-open");
    });
  });
});
