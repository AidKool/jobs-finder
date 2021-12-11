import { toggleElement } from './toggleElement.js';

const toggleBtn = document.querySelector('.burger');
const menuContainer = document.querySelector('.menu-container');
const menu = document.querySelector('.menu');
const documentation = document.querySelector('.documentation');
const navbarDropdown = document.querySelector('.navbar-dropdown');

// event listener on the burger (or toggleBtn) to toggle upon click by adjusting back to normal height if in minimised state
// This allows toggle on the **Menu**
toggleBtn.addEventListener('click', function () {
  toggleElement(menuContainer, menu);
});

documentation.addEventListener('mouseenter', function () {
  menuContainer.classList.remove('overflow-hidden');
});

documentation.addEventListener('mouseleave', function () {
  menuContainer.classList.add('overflow-hidden');
});

navbarDropdown.addEventListener('mouseenter', function () {
  menuContainer.classList.remove('overflow-hidden');
});

navbarDropdown.addEventListener('mouseleave', function () {
  menuContainer.classList.add('overflow-hidden');
});
