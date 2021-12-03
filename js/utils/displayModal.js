const cardEl = document.querySelector('card-content');
const jobTitleEl = document.querySelector('job-title');
const modalEl = document.querySelector('modal');

function displayJob () {
    cardEl.classList.add('hide');
    modalEl.classList.add('is-active');
}

jobTitleEl.addEventListener('click', displayJob());