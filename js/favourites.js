import { renderJobsSearchData } from './utils/renderJobsSearchData.js';
import './utils/getIndividualJobData.js';

const favourites = JSON.parse(localStorage.getItem('favourites')) || [];
const main = document.querySelector('main .column');

window.addEventListener('DOMContentLoaded', function () {
  if (favourites.length === 0) {
    main.innerHTML = `<figure class="is-flex is-justify-content-center">
                        <img class="no-favourites" src="./media/img/no-favourites.jpg" alt="no favourites" />
                      </figure>
                      <h2 class="title has-text-centered">
                        You have not favourited any jobs
                      </h2>
                      <button class="button is-link is-pulled-right">
                        <a class="has-text-white" href="/index.html">Go back</a>
                      </button>`;
  } else {
    renderJobsSearchData(favourites);
  }
});
