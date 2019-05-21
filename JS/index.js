// Menu JS

const toggleMenu = () => {
  menu[0].classList.toggle("menu--open");
};

const menu = document.querySelectorAll(".menu");
const menuButton = document.querySelectorAll(".menu-button");

menuButton[0].addEventListener("click", e => {
  toggleMenu();
});
