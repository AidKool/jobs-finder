import { toggleElement } from './toggleElement.js';

const toggleBtn = document.querySelector('.burger');
export const formContainer = document.querySelector('.form-container');
export const form = document.querySelector('form');

// event listener on the burger (or toggleBtn) to toggle upon click by adjusting back to normal height if in minimised state
// This allows toggle on the **Form**
toggleBtn.addEventListener('click', function () {
  toggleElement(formContainer, form);
});
