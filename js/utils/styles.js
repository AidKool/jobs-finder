const navbar = document.querySelector('body > nav');
const main = document.querySelector('main');
const footer = document.querySelector('footer');

window.addEventListener('DOMContentLoaded', function () {
  const navbarHeight = navbar.getBoundingClientRect().height;
  const footerHeight = footer.getBoundingClientRect().height;
  main.style.minHeight = `calc(100vh - ${navbarHeight}px - ${footerHeight}px)`;
  console.log('navbarHeight', navbarHeight);
  console.log('footerHeight', footerHeight);
  console.log('mainHeight', main.getBoundingClientRect().height);
});

// mobile menu
const burgerIcon = document.querySelector('.navbar-burger');
const navbarMenu = document.querySelector('.navbar-menu');

burgerIcon.addEventListener('click', () => {
  navbarMenu.classList.toggle('is-active');
});
