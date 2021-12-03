import { getAndDisplayJobsData } from './renderJobsSearchData.js';
import { renderPaginationURL } from './renderPaginationURL.js';
import { initialisePaginationButtons, renderPaginationButtons } from './paginationButtons.js';

const paginationContainer = document.querySelector('.pagination');

paginationContainer.addEventListener('click', async function (event) {
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
    localStorage.setItem('currentPage', currentPage);
    const url = localStorage.getItem('url');

    const paginationURL = renderPaginationURL(url, currentPage);
    const jobsData = await getAndDisplayJobsData(paginationURL);
    if (currentPage === 1) {
      initialisePaginationButtons(jobsData);
    } else {
      renderPaginationButtons(jobsData.totalPages, currentPage);
    }
  }
});
