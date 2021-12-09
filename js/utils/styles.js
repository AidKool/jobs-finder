const navbar = document.querySelector('body > nav');
const main = document.querySelector('main');
const footer = document.querySelector('footer');

window.addEventListener('DOMContentLoaded', function () {
  const navbarHeight = navbar.getBoundingClientRect().height;
  const footerHeight = footer.getBoundingClientRect().height;
  main.style.minHeight = `calc(100vh - ${navbarHeight}px - ${footerHeight}px)`;
});

export function setHeight(element, height) {
  element.style.height = `${height}px`;
}
