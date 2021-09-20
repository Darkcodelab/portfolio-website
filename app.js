const menu = document.querySelector(".menu");
const navUl = document.querySelector(".nav-ul");
const navLinks = document.querySelectorAll(".nav-link");

menu.addEventListener("click", function () {
  navUl.classList.toggle("nav-ul--active");
  menu.classList.toggle("menu--click");
});

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", function () {
    navUl.classList.remove("nav-ul--active");
    menu.classList.remove("menu--click");
  });
});
