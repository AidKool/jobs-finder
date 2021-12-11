import { getAndDisplayJobsData } from './renderJobsSearchData.js';
import { renderPaginationURL } from './renderPaginationURL.js';
import {
  initialisePaginationButtons,
  renderPaginationButtons,
} from './paginationButtons.js';

const paginationContainer = document.querySelector('.pagination');
// adds event listener on pagination buttons to retrieve direction of travel (i.e. next, previous, or button specified page)
paginationContainer.addEventListener('click', async function (event) {
  try {
    let pageRetrieved = localStorage.getItem('currentPage');
    let currentPage = Number(pageRetrieved);
    if (event.target.tagName === 'A') {
      let page = event.target.dataset.page;

      if (page === 'next') {
        currentPage++;
      } else if (page === 'prev') {
        currentPage--;
      } else {
        currentPage = Number(page);
      }
      // store current page in local storage to retrieve upon any later new pagination clicks
      localStorage.setItem('currentPage', currentPage);
      const url = localStorage.getItem('url');
      // renders pagination url based on stored url value appended by the desired page number
      const paginationURL = renderPaginationURL(url, currentPage);
      // displays new fetch results and updates/renders pagination buttons
      const jobsData = await getAndDisplayJobsData(paginationURL);
      if (currentPage === 1) {
        initialisePaginationButtons(jobsData);
      } else {
        renderPaginationButtons(jobsData.totalPages, currentPage);
      }
    }
  } catch (error) {
    console.error(error);
  }
});
