import { setHeight } from './styles.js';

const toggleBtn = document.querySelector('.burger');
const menuContainer = document.querySelector('.menu-container');
const menu = document.querySelector('.menu');

toggleBtn.addEventListener('click', function () {
  const containerHeight = menuContainer.getBoundingClientRect().height;
  const menuHeight = menu.getBoundingClientRect().height;

  if (containerHeight === 0) {
    setHeight(menuContainer, menuHeight);
  } else {
    setHeight(menuContainer, 0);
  }
  console.log('container', menuContainer.getBoundingClientRect().height);
  console.log('menu', menuHeight);
});
