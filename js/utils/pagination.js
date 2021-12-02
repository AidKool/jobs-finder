import { getAndDisplayJobsData } from './renderJobsSearchData.js';
import { renderPaginationURL } from './renderPaginationURL.js';
import { renderPaginationButtons } from './paginationButtons.js';

const url = localStorage.getItem('url');

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
    console.log('type', typeof currentPage);
    const paginationURL = renderPaginationURL(url, currentPage);
    console.log(paginationURL);
    const jobsData = await getAndDisplayJobsData(paginationURL);
    console.log('jobsData', jobsData);
    renderPaginationButtons(jobsData.totalPages, currentPage);
  }
});
