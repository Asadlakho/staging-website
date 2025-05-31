document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu-btn");
  const menuIcon = document.getElementById("menu-icon");
  const mobileMenu = document.getElementById("mobile-menu");

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    if (mobileMenu.classList.contains("hidden")) {
      menuIcon.innerHTML = "&#9776;";
    } else {
      menuIcon.innerHTML = "&#10006;";
    }
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
      menuIcon.innerHTML = "&#9776;";
    });
  });
});
