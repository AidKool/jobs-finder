// mobile menu
const burgerIcon = document.querySelector('.navbar-burger');
const navbarMenu = document.querySelector('.navbar-menu');

burgerIcon.addEventListener('click', () => {
  navbarMenu.classList.toggle('is-active');
});
