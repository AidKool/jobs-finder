import { getAndDisplayJobsData } from './renderJobsSearchData.js';
import { renderPaginationURL } from './renderPaginationURL.js';
import { renderPaginationButtons } from './paginationButtons.js';

const paginationContainer = document.querySelector('.pagination');
let pageRetrieved = localStorage.getItem('currentPage');
let currentPage = Number(pageRetrieved);

paginationContainer.addEventListener('click', async function (event) {
  if (event.target.tagName === 'A') {
    let page = event.target.dataset.page;

    if (page === 'next') {
      currentPage++;
    } else if (page === 'prev') {
      currentPage--;
    } else {
      currentPage = page;
    }
    localStorage.setItem('currentPage', currentPage);
    const url = localStorage.getItem('url');

    const paginationURL = renderPaginationURL(url, currentPage);
    const jobsData = await getAndDisplayJobsData(paginationURL);
    renderPaginationButtons(jobsData.totalPages, currentPage);
  }
});
