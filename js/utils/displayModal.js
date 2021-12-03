const cardEl = document.querySelector('card-content');
const jobTitleEl = document.querySelector('job-title');
const modalEl = document.querySelector('modal');

function displayJob () {
    modalEl.classList.add('is-active');
}

jobTitleEl.addEventListener('click', displayJob());