const navbar = document.querySelector('body > nav');
const main = document.querySelector('main');
// Enables screen responsiveness on new page or DOM content load by adjusting main section height by navbar height
window.addEventListener('DOMContentLoaded', function () {
  const navbarHeight = navbar.getBoundingClientRect().height;
  main.style.minHeight = `calc(100vh - ${navbarHeight}px)`;
});
