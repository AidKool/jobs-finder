const navbar = document.querySelector('body > nav');
const main = document.querySelector('main.section');
const footer = document.querySelector('footer');

window.addEventListener('DOMContentLoaded', function () {
  const navbarHeight = navbar.getBoundingClientRect().height;
  const footerHeight = footer.getBoundingClientRect().height;
  main.style.minHeight = `calc(100vh - ${navbarHeight}px - ${footerHeight}px)`;
  console.log('navbarHeight', navbarHeight);
  console.log('footerHeight', footerHeight);
  console.log('mainHeight', main.getBoundingClientRect().height);
});
