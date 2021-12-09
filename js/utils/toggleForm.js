import { setHeight } from './setHeight.js';

const toggleBtn = document.querySelector('.burger');
export const formContainer = document.querySelector('.form-container');
export const form = document.querySelector('form');

toggleBtn.addEventListener('click', function () {
  const containerHeight = formContainer.getBoundingClientRect().height;
  const formHeight = form.getBoundingClientRect().height;

  if (containerHeight === 0) {
    setHeight(formContainer, formHeight);
  } else {
    setHeight(formContainer, 0);
  }
});
