const menu = document.querySelector(".menu");
const navUl = document.querySelector(".nav-ul");

menu.addEventListener("click", function () {
  navUl.classList.toggle("nav-ul--active");
  menu.classList.toggle("menu--click");
});
