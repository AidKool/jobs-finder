const navbar = document.querySelector('body > nav');
const main = document.querySelector('main');

window.addEventListener('DOMContentLoaded', function () {
  const navbarHeight = navbar.getBoundingClientRect().height;
  main.style.minHeight = `calc(100vh - ${navbarHeight}px)`;
});
