import { setHeight } from './setHeight.js';

const toggleBtn = document.querySelector('.burger');
const menuContainer = document.querySelector('.menu-container');
const menu = document.querySelector('.menu');
const documentation = document.querySelector('.documentation');
const navbarDropdown = document.querySelector('.navbar-dropdown');

toggleBtn.addEventListener('click', function () {
  const containerHeight = menuContainer.getBoundingClientRect().height;
  const menuHeight = menu.getBoundingClientRect().height;

  if (containerHeight === 0) {
    setHeight(menuContainer, menuHeight);
  } else {
    setHeight(menuContainer, 0);
  }
});

documentation.addEventListener('mouseenter', function () {
  menuContainer.classList.remove('overflow-hidden');
});

documentation.addEventListener('mouseleave', function () {
  menuContainer.classList.add('overflow-hidden');
});
